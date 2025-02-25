<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>

  <div class="card">
    <button type="button" @click="count++">count is {{ count*4 }}</button>
  </div>

  
</template>

<style scoped>
</style>
