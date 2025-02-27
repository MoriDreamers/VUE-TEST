<script setup>
import { reactive, ref ,watch} from 'vue'

const count = ref(0)
const test = ref(0)
const testplus = () => {
  test.value++
  count.value++
}
let menu = reactive(["墨小菊","文芷"])
let menuPrice = reactive([
  {
    name :"墨小菊",
    age : 18
  },
  {
    name :"文芷",
    age : 20
  }
])
let info = reactive(
{
  name : "邱诚",
  age : 19 ,
  address : "江城"
}
) 

let newGirl = ref()
const sumbitGril = () =>{
  menu.push(newGirl.value)
  newGirl.value = " "
} 
let message = ref("")
let confirmMessage = ref("")
/* watch（监听的数据，（"现在的值"）,("之前的值") =>{} ) */
//监听多个值
watch([message,confirmMessage], (newValue, oldValue) => {
  console.log("newValue: " ,newValue)
  console.log("oldValue: ",oldValue)
  if(newValue[0] == oldValue[1]){
    console.log("你输入的内容和上次输入的内容一样")
  }else{console.log("两次输入不一样")}
} )
//监听对象
//定义一个对象
const userInfo = reactive({
  name: "邱诚",
  age: 19,
  QQ: "13140521"
})
/*
    错误写法！！
    watch(userInfo.age, (newValue, oldValue) => {
      console.log("newValue: " ,newValue)
      console.log("oldValue: ",oldValue)
    })
  监听对象要使用一个箭头 函数
*/
//监听对象里的某个属性值，使用箭头函数，如下： () =>userInfo.age
watch (() =>userInfo.age, (newValue, oldValue) => {
  console.log("newValue: " ,newValue)
  console.log("oldValue: ",oldValue)
})

</script> 

<template>
<!-- 模板中使用了vue语法糖 v-XXX 、@表示v-on、:表示v-model -->
  <div class="card">
    <button type="button"  @click="testplus">count is {{ count }}</button>
    <p>这是个响应式数据 {{ test }}</p>

    <span>今天的女票有：</span>
<!--遍历数组的数据-->
  <ul>
    <li v-for = "menu in menu">{{menu}}</li>
  </ul>
<input v-model = "newGirl" placeholder="请输入内容"/>
<button type="button" @click="sumbitGril">许愿</button>
<hr/>
<span>今天的女票数据是：</span>
<ul>
  <!--遍历数组嵌套的数据-->
  <li v-for="(item,index) in menuPrice">
    {{ index }} - {{ item.name }} - {{ item.age }}
  </li>
</ul>
<span>大家好啊，我是男主：</span>
  <!--遍历对象的数据-->
<ul> 
  <li v-for="(value,key) in info">
    {{ key }}:{{ value }}
  </li>
</ul>
<input placeholder="请输入新的值" v-model.lazy = "message" />
<input placeholder="请确认输入的值" v-model.lazy = "confirmMessage" />
</div>
</template>

<style scoped>
</style>
