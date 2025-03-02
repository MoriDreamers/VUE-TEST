<script setup>
import { inject, ref } from 'vue';
let newMsg = ref("")
//订阅父组件发布的数据
let injectMsg = inject("defaultMsg")
const changeValueHandler = inject("modifyValue")
const submit = () => {
    //修改父组件传递的参数
    //单向数据流时候，这样不可以：injectMsg.value = newMsg.value
    console.log("提交数据")
    changeValueHandler(newMsg.value)
}

</script>

<template>
    <div>
        <p style="color: brown;"> 父组件传来的：{{ injectMsg }} </p>
        <input placeholder="请输入新值修改父组件传递的参数" v-model="newMsg"/>
        <button @click="submit">修改</button>
    </div>
</template>