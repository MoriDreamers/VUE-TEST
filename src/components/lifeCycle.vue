<script setup>
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUpdated } from 'vue';

//生命周期钩子函数
//VUE2 --> VUE3
//beforeCreate，Created --> setup 
//beforeMount -> onBeforeMount
onBeforeMount(
    () => {
        console.log("钩子函数",'onBeforeMount');
    }
)
onMounted(
    () => {
        console.log("钩子函数",'onMounted');
    }
)
onBeforeUpdate(
    () => {
        console.log("钩子函数",'onBeforeUpdate');
    }
)
onUpdated(
    () => {
        console.log("钩子函数",'onUpdated');
    }
)
onBeforeUnmount(
    () => {
        console.log("钩子函数",'onBeforeUnmount');
    }
)
</script>
<template>
    <div>
        <h3>钩子函数(生命周期测试)</h3>
    </div>
</template>