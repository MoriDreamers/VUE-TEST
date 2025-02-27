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

<!-- slot插槽 -->
  <slotDemo>
    <template v-slot:header>
      <p>这是插入到header的定义</p>
    </template>
    <template #footer>
      <p>这是插入到footer的定义</p>
    </template>
    <template #aside>
      <div style="background-color: #f0f0f0;">
        <p>这是插入到aside的定义</p>
      </div>
    </template>
  </slotDemo>

  <p>这是通过子组件输入框向父组件传值的例子，值为{{ postvalue }}</p>

  <Message :value="postvalue" @change-value="modify"></Message>

  <HelloWorld msg="Vite + Vue" />

  <!-- 传入的是string 使用：来做一个绑定，即可转换为数字 -->
  <buttonCounter :step="114514"></buttonCounter>
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
