<!-- TOC -->
- [CSS](#css)
  - [页面加载动画](#%E9%A1%B5%E9%9D%A2%E5%8A%A0%E8%BD%BD%E5%8A%A8%E7%94%BB)
- [Javascript](#javascript)
  - [获取点击 `<li>` 标签的索引值](#%E8%8E%B7%E5%8F%96%E7%82%B9%E5%87%BB-li-%E6%A0%87%E7%AD%BE%E7%9A%84%E7%B4%A2%E5%BC%95%E5%80%BC)
  - [解码被多次编码的 URL](#%E8%A7%A3%E7%A0%81%E8%A2%AB%E5%A4%9A%E6%AC%A1%E7%BC%96%E7%A0%81%E7%9A%84-url)
- [其它](#%E5%85%B6%E5%AE%83)
  - [Baidu_IFE](#baiduife)

<!-- /TOC -->
## CSS

### 页面加载动画

> Ref: [How to Build a Delightful Loading Screen in 5 Minutes](https://medium.freecodecamp.org/how-to-build-a-delightful-loading-screen-in-5-minutes-847991da509f)

主要使用到的 CSS 技巧:

```
// 布局弹性布局
display: flex;

// 边框变为圆形
border-radius: 50%;

// css 动画
animation

// 创建动画关键帧
@keyframes
```

源码：[source code](loading/)   页面展示：[demo](https://acusp.info/Programming/web/loading/loading.html)


## Javascript

### 获取点击 `<li>` 标签的索引值

html 代码：
```html
<ul id="test">
    <li>这是第1个</li>
    <li>这是第2个</li>
    <li>这是第3个</li>
</ul
```

```javascript
// 方法一：
let ul = document.getElementById("test");
let list = ul.getElementsByTagName("li");

for (let li of list) {
	li.addEventListener('click', function() {
		console.log(Array.prototype.indexOf.call(this.parentNode.children, this));
	});
}

// 方法二：使用 let 定义 i
let list = document.querySelectorAll('#test>li');

for (let i = 0; i < list.length; ++i) {
	list[i].onclick = function() {
		console.log(i);
	};
}

// 方法三：使用闭包
let list = document.querySelectorAll('#test>li');

for (var i = 0; i < list.length; ++i) {
	list[i].onclick = function(k) {
		return function() {
			console.log(k);
		};
	}(i);
}

// 方法四：使用 jQuery index() 方法
$(document).ready(function() {
	$('#test li').click(function() {
		console.log($(this).index());
	});
})


// 方法五：事件代理
let ul = document.getElementById("test");
let list = ul.getElementsByTagName("li");

ul.addEventListener("click", function (ev) {
    var ev = ev || window.event;
    var target = ev.target || ev.srcElemnt;
  
    for(var i = 0, len = list.length; i < len; i++){  
        if(list[i] === target){  
			console.log(i);
        }  
    }	
});
```

### 解码被多次编码的 URL

可以一直使用 `decodeURIComponent()` 进行解码，直到 URL 不发生变化

```javascript
let url = "https%253A%252F%252Fwww.baidu.com%252F%253Ftest%253D1";
// source url: "https://www.baidu.com/?test=1";

function decode(input) {
	let pre = input;
	let result = decodeURIComponent(input);
	if (result !== pre) {
		pre = result;
		result = decodeURIComponent(result);
	}
    return result;
}

console.log(decode(url));
```


## 其它

### Baidu_IFE

* [baidu_ife](baidu_ife/readme.md)
