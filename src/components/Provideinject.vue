<script setup>
import { provide, ref,readonly } from 'vue';
import MessageProvide from './MessageProvide.vue';


let defaultMsg = ref("这是父组件发布的数据1111")
//定义和发布数据
//provide：用来发布数据
//inject：用来定义数据
//provide 语法：provide（“发布的名称”，“你要发布谁”）
//inject 语法：inject（“数据的名称“）
provide("defaultMsg", defaultMsg)
//只读数据 provide("defaultMsg", readonly(defaultMsg))
//发布一个接收到子组件事件后，用于修改数据的函数
const modifyValue = (Newvalue) => {
    defaultMsg.value = Newvalue
}
provide("modifyValue", modifyValue)
</script>   

<template>
    <MessageProvide></MessageProvide>
</template>