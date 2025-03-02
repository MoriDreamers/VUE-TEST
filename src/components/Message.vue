<script setup>
    import { ref } from 'vue'
    import { defineEmits } from 'vue'
    import { defineProps } from 'vue'
//测试子组件向父组件传参
    const Testvalue = ref('')
    const emitValue = defineEmits(['changeValue'])
    //定义一个方法，用于向父组件发送数据，即emitValue，让他=defineEmits(['父组件显示的事件名'])
    //    此时父组件使用@父组件显示的事件名="父组件里的函数名" ，此时父组件的函数就会收到一个子组件的参数
    const PostValue = () => {
        emitValue('changeValue', Testvalue.value)
    }

//父组件向子组件传参
    const props = defineProps({
        value:{
            type : Number,
        default : 1008611,
        validator:function(value){
            if (value>0){
                return true
            }else{
                return false
            }
        }
        }
    })
</script>


<template>
    <div>
        <input type="text" v-model="Testvalue">
        <button @click="PostValue">发送</button>
    </div>
    <p>父组件传来的：{{ props.textTest }}</p>
</template>

<style scoped>

</style>