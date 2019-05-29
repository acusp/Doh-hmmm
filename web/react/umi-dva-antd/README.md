> Ref: https://ant.design/docs/react/practical-projects-cn

### 创建应用

使用 yarn 创建应用:

```
yarn create umi
```

选择 `app` -> `antd`, `dva`


安装依赖:

```
yarn
```


### 新建路由

创建 `products` 路由:

```
npx umi g page products
```

访问: http://localhost:8000/products


### 编写 UI Component

新建 `src/components/ProductList.js` 文件



### 定义 dva Model

完成 UI 后，现在开始处理数据和逻辑

dva 通过 `model` 的概念把一个领域的模型管理起来，包含同步更新 state 的 reducers，处理异步逻辑的 effects，订阅数据源的 subscriptions 。

新建 model `src/models/products.js`

umi 里约定 `src/models` 下的 model 会被自动注入，你无需手动注入。


### connect 起来

dva 提供了 `connect` 方法。如果你熟悉 redux，这个 connect 来自 react-redux。

编辑 `src/pages/products.js`

最后，我们还需要一些初始数据让这个应用 run 起来。编辑 `src/app.js`


### 构建应用

完成开发并且在开发环境验证之后，就需要部署给我们的用户了。先执行下面的命令:

```
npm run build
```

build 命令会打包所有的资源，包含 JavaScript, CSS, web fonts, images, html 等。你可以在 `dist/` 目录下找到这些文件。
