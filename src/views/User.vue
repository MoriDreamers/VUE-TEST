<script setup>
//js 如何获取参数
import { useRoute } from 'vue-router'
const route = useRoute()
const getUsername = () => {
    console.log(route.params.username)
    //接受query传来的参数
    console.log(route.query.limit)
    console.log(route.query.dates)
}
</script>

<template>
    <div>
        这是用户页面，她的动态id为: {{ $route.params.id }}
        {{ $route.params.username }}
    </div>
    <button @click="getUsername">获取用户名</button>
</template>

<style scoped>

</style>