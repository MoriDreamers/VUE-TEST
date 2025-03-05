# VUE学习笔记

*ref 一般用于定义简单的响应式数据 reactive 定义对象*
模板中使用了vue语法糖 v-XXX 、@表示v-on、:表示v-model

const 变量 = ref(0) -- 响应式变量定义

const 变量 = reactive({属性: 值}) -- 响应式对象定义

const 变量 = computed(() => {计算逻辑}) -- 计算属性定义

v-model 双向绑定 .number 限制输入为数字 .trim 自动去除首尾空格 
                .lazy 按下回车或者失去焦点时更新

v-if 是根据真假直接去操作DOM v-show指示操作元素的display属性 
    故v-if开销大

methons 一种定义方法的方式
computed 计算属性,直接返回一个值，且具有缓存特性，只有当依赖的数据发生变化时才会重新计算
watch 观察者模式，可以观察数据的变化，并执行相应的函数

#什么事pinia？
具有存储数据的作用 这个数据可以在任意的页面或组件中使用 
使用的场景：1.用户登录状态 2.应用程序设置 3.共享数据 4.全局状态

#router
工程化操作 在router/index.js中写入路由规则,引入相关需要渲染的vue组件（views/XXX.vue） 同时导出 export router 

main.js 引入router/index.js导出的router 即挂载到app上 app.use(router)

```
<!-- 超链接路由跳转（新版本写法） -->
<RouterLink to = "/" replace>GO TO INDEX</RouterLink>
<!-- repalce表示禁止回退 -->
<!--路由出口，路由所渲染的组件将匹配到routerview这里-->
<RouterView></RouterView>
```

#什么事axios
一个http请求库，用于发送网络请求