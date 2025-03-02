# VUE-TEST

基于VUE开发的基础脚手架工程，自用

## 目录结构

```
node_modules ：依赖包

public ：静态文件，使用/filename访问，第三方文件放置在此

package.json：描述文件

src ：源码目录
    |---components ：组件（XXX.vue）
    |---assets ：    容易变更的静态资源 （字体、图片、icon图标）
    |---App.vue ：   项目的根组件，index.html通过挂载main.js来完成对App.vue在html的渲染，同时
        App.vue作为components的父组件，可以调用子组件
    |---router：     路由配置
    |---store：      Vuex状态管理
    |---view：       页面视图
    |---utils：      已经封装的工具类
    |---config：     程序配置（如：环境变量）
    |---api：        后端的接口请求（封装 + 调用）
```

## 注意事项

- 请不要修改`package.json`中的`name`和`version`，否则会导致依赖安装失败

- 请不要修改`public`目录下的文件名，否则会导致静态资源加载失败 

