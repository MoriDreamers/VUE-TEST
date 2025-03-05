<script setup>
import request from '../api/index.js'
/*
    为什么有的需要{}有的不需要？
    import {request} from '../api/index.js'
    如果导出的方法导出到了default，那么不需要{}
*/
const encapGet = () => {
    request(
    "url",
    {},
    "get",
    2000,
    )
}
</script>

<template>
    <button @click="encapGet">封装请求测试</button>
</template>

<style scoped>

</style>
