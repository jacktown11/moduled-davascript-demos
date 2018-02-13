本项目的目的是了解基于`amd`规范的`requirejs`的模块加载

首先我们在`index.html`中引入了自己编写的`Util.js`文件，简单地提供了几个在控制台输出时间和当前页面`script`标签数目的函数，这个文件本身符合`CommonJS`和`AMD`规范，但是由于我们将其在`require.js`之前引入，所有当它加载的时候还没能提供具有实现`AMD`规范的环境，因此这个模块会直接挂附在`window`上，成为一个全局对象。

而在引入`require.js`我们指定了入口文件`main.js`，在`main.js`中在嵌套的回调中不断引入模块，我们可以看到这些模块按照我们嵌套`require`的顺序加载进去，`requirejs`根据模块加载需求在`index.html`中新增了相应的`script`标签。

我们在`index.html`中的第一个`script`标签中绑定了`window.onload`事件，来监听其什么时候触发，我们发现在`jquery`、`a`、`b`还没加载完成的时候，`window.onload`就已经触发了，这说明我们的`js`文件的加载没有阻塞页面的渲染，