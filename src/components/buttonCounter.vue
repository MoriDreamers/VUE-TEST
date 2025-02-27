<script setup>
    import { defineProps, ref } from 'vue'
    const count = ref(0)
    //定义组件可以接受的参数
    //参数为单向数据流
    //ROOT 组件传递参数给子组件 
    const props = defineProps({
      //定义参数 参数名：数据类型
      //validator 传参校验逻辑 TRUE通过 FALSE不通过
      step:{
            type:Number,
            default:100,
            required:true,
            validator: function(value){
                console.log("传递的参数是：",value)
                if(value>50){
                return false
            }else{
                return true
            }
            }
        }  
    })
    const plus11 = () =>{
        count.value += props.step
    }
</script>

<template>
    <p>你传递的参数是：{{ props.step }}</p>
    <button class="button" @click="plus11">{{ count }}</button>
</template>

<style scoped>
    .button{
        background-color: #5985de;
    }
</style>