<script setup>
//通过内置函数的方式来实现路由跳转
//import { useRoute } from 'vue-router';
//const router = useRoute();
//定义一个通过js的路由跳转方法
import router from './router/index.js'

const user = () =>{
  //router.push("users/常夏")
  //通过对象跳转路由，并且传递参数
  router.push({
    //name绑定路由名
    name:"users",
    params:{
      id:'洛瑶',
      username:'常夏',
    },
    //query是传参
    query:{
      limit:"18",
      dates:"8-32",
    }
  })
}
</script>

<template>
  <h1>hello router!</h1>
  <div>
    <p><RouterLink to = "/" replace>GO TO INDEX</RouterLink></p>
    <!-- repalce表示禁止回退 -->
    <p><RouterLink to = "/about">GO TO ABOUT</RouterLink></p>
    <p><RouterLink to = "/home">GO TO HOME</RouterLink></p>
    <p><RouterLink to = "/list">GO TO LIST</RouterLink></p>
    <p><RouterLink to = "/list/TestOne">子路由1</RouterLink></p>
   
  </div>
<!--路由出口，路由所渲染的组件将匹配到routerview这里-->
<RouterView></RouterView>
<button type="button" @click="user()">点击跳转用户页</button>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
