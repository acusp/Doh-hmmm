const fs = require('fs');
const path = require('path');
//读取webpack.config.js 里面的配置
const config = require('./webpack.config.js');
const webpack = require('webpack');

/**
 * config
 */
const noUseFiles = ['appmanifest.json', 'offline.js', 'offlineclient.js', 'register-sw.js', 'sw.js'];

// ------------------------------
const resolvePath = (...p) => path.join(__dirname, ...p);
// 删除文件选项
function deleteFiles(files) {
  files.forEach(path => {
    const abPath = resolvePath(path);

    if (fs.existsSync(abPath)) {
      fs.unlink(path, () => console.log(`The file of ${abPath} is deleted successfully`))
    }
  })
}

// 获取当前所有的需要替换的图片名字集合
function getFilePaths(dir) {
  if (!fs.existsSync(dir)) {
    return console.warn(`The dir of ${dir} is not exists`);
  }
  return fs.readdirSync(dir).filter(p => {
    return fs.statSync(path.resolve(dir, p)).isFile()
  });
}


// modify data.js
function modifyDataJs(jsPath, callback) {
  if (!fs.existsSync(jsPath)) {
    return console.warn(`The file of ${jsPath} is not exists`);
  }
  fs.readFile(jsPath, 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
    const images = getFilePaths(resolvePath('./images'));
    const getImageName = (image) => {
      const nameArr = image.split('-');
      return nameArr[nameArr.length - 1].substring(0, nameArr[nameArr.length - 1].indexOf('.')) + '_img';
    }

    data = 'export const DATA = ' + data;
    images.forEach(image => {
      data = data.replace(new RegExp(`"images\n?/\n?${image}"`, 'g'), getImageName(image));
    })


    // es6引入图片文件
    const getImportImgCodes = (image) => {
      return `import ${getImageName(image)} from './images/${image}' \n`
    }
    data = images.reduce((cur, next) => cur + getImportImgCodes(next), '') + data;


    fs.writeFileSync(resolvePath('./dataSource.js'), data, 'utf8');
    console.info('dataSource.js generate successfully...continue generating c2runtiome.js...');
    callback && callback();
  })
}

// modify c2runtime.js
function removeStr(origin, reg) {
  return origin.replace(reg, '\n // AC delete \n');
}
function replaceStr(origin, reg, newStr) {
  return origin.replace(reg, '\n // AC replace \n' + newStr);
}

function importMediaStr() {
  const medias = getFilePaths(resolvePath('./media'));
  const getImportMediaCodes = (media) => {
    return `import ${media.substring(0, media.indexOf('.'))} from './media/${media}' \n`
  }
  return '\n // AC import \n' + medias.reduce((cur, next) => cur + getImportMediaCodes(next), '')
}

function getAudioStr() {
  const medias = getFilePaths(resolvePath('./media'));
  return medias.map(media => {
    return `
      switch(src_) {
			case "media/${media}": src_ = ${media.substring(0, media.indexOf('.'))}; break;
			default : console.log(src_);
		}`
  })
}

function audioBase64toArraybuffer() {
  return `
    var binary_string = atob(src_.replace(/^[^,]+,/, ''));
	var len = binary_string.length;
	var bytes = new Uint8Array(len);
	for (var i = 0; i < len; i++) {
		bytes[i] = binary_string.charCodeAt(i);
	}
	self.audioData = bytes.buffer;
	self.decodeAudioBuffer();
  `
}

function modifyRuntimeJs(jsPath) {
  if (!fs.existsSync(jsPath)) {
    return console.warn(`The file of ${abPath} is not exists`);
  }
  return new Promise((resolve) => {
    fs.readFile(jsPath, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }
      // 引入style
      data = `import './style.css' \n` + data;

      // es6引入data.js数据
      data = `import { DATA } from './dataSource.js'; \n` + data;

      // es6引入音频文件
      data = importMediaStr() + data;

      // 去掉alert部分5301行
      data = removeStr(data, /\/\/ Issue a warning[^}]+}/);

      // load Data数据
      data = replaceStr(data, /\/\/ WKWebView in Cordova[\s\S]+xhr\.send\(\);/, 'self.loadProject(DATA)');

	  // 函数 C2AudioBuffer 中替换音频文件
      data = replaceStr(data, /function C2AudioBuffer\(src_, type_, is_music\)[^{]+{/, `function C2AudioBuffer\(src_, type_, is_music){\n${getAudioStr()}`)
      
	  // 函数 C2AudioBuffer 中转换音频文件类型：base64 -> arraybuffer
      data = replaceStr(data, /request = new XMLHttpRequest\(\)[\s\S]+request.send\(\);/, `${audioBase64toArraybuffer()}`)
	  
	  fs.writeFileSync(resolvePath('main.js'), data, 'utf8');
      console.info('main.js generate successfully..begin webpack compress');
      resolve();
    })
  })
}

function insertJsToHtml() {
  const makeHtml = (bodyScript) => `
    <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <title>guaguaka</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
          />
          <meta name="generator" content="Construct 3" />
        </head>
        <body>
          <div id="fb-root"></div>
          ${bodyScript}
        </body>
     </html>
  `

  const bodyScript = `<script>${fs.readFileSync(path.resolve(config.output.path, config.output.filename))
    }</script > `;

  html = makeHtml(bodyScript);
  fs.writeFileSync(path.resolve(config.output.path, './index.html'), html, 'utf8');
}

modifyDataJs(resolvePath('data.js'), () => {
  modifyRuntimeJs(resolvePath('c2runtime.js')).then(() => {
    webpack(config, (err, stats) => {
      if (err || stats.hasErrors()) {
        console.log(stats);
        console.log("构建过程出错！");
      } else {
        deleteFiles(noUseFiles);
        insertJsToHtml();
        console.log("构建成功！");
      }
    });
  })
});



