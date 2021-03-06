
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

### 选项卡实现

[选项卡](javascript/tab_control.html)



### JavaScript 复制内容到剪贴板

> Ref:
https://segmentfault.com/a/1190000013412206
https://hacpai.com/article/1510544423932?r=Vanessa