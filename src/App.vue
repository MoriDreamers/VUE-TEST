<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Message from './components/Message.vue';
import buttonCounter from './components/buttonCounter.vue';
import slotDemo from './components/slotDemo.vue';
import { ref } from 'vue'
const postvalue = ref("")
const modify = (value) => {
  //接收参数更改
  postvalue.value = value
}
</script>

<template>
  <div>

  </div>
  <slotDemo>
    <p>
      这是通过插槽实现的页面
    </p>
  </slotDemo>
  <p>这是通过子组件输入框向父组件传值的例子，值为{{ postvalue }}</p>
  <Message :value="postvalue" @change-value="modify"></Message>
  <HelloWorld msg="Vite + Vue" />
  <!-- 传入的是string 使用：来做一个绑定 -->
  <buttonCounter :step="56"></buttonCounter>
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
