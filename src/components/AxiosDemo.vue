<script setup>
import axios from 'axios';
import { reactive, toRefs } from 'vue';

//axios默认全局配置
axios.defaults.timeout = 1000; //超时时间

//这个是请求级别的拦截器，之前的router守卫是页面拦截器
axios.interceptors.request.use(function (config) {
    //在发送之前添加一点功能
    console.log('这是请求拦截器',config)
    config.headers.Authorization = "yyyyy"
    
    if (config.method == 'get'){
      //解决缓存问题
      let timeStamp = (new Date()).getTime()
      //添加时间戳在请求当中 一般都在GET请求里添加，而POST不需要一般
      console.log(timeStamp)
      if (config.params){//即使config.params没有timeStamp条目，这段代码也不会报错。这是因为JavaScript允许直接在对象上添加新的属性。即使config.params之前没有timeStamp，也可以通过config.params.timeStamp = timeStamp来添加
        config.params.timeStamp = timeStamp
      }else{//如果没有params，就添加一个
        config.params = {
          timeStamp:timeStamp
        }
      }
    }
    return config;//千万记得返回config，否则请求会无法完成
  }, function (error) {
    return Promise.reject(error);
  })


//响应拦截器
axios.interceptors.response.use(function (response){
  //在这里对返回的数据进行处理
  //超出2xx范围的状态码都会触发该函数
  if (response.data.status === 200){
    return Promise.resolve(response)
  }else if (response.data.status === 401) {
    //说明token失效
    alert('token失效，请重新登录')
    return Promise.reject(response)
  }

  return response;},function(error){
    alert('请响应数据有问题')
    return Promise.reject(error);
  }
)

let data = reactive({
  UserList:[]
})
//从data中取值
const { UserList } = toRefs(data)
const getUserList = () =>{
    console.log('获取用户列表')
    const getUserApi= "xxxxxxx"
    //response就是传回来的数据
    axios.get(getUserApi,{
      //写筛选参数
      params:{
      limit:80,
      age : 10 ,
      headers:{
          "token":"xxxxxxxx",
          'X-Requested-With':'XMLHttpRequest'
        }
      }
    })
      .then((Response) => {
          console.log(Response.data)})
          data.UserList = Response.data.data //这是绑定
          //response是被axiosd封装过的原始数据，data是你想要的真正数据
        .catch((error) => {
        alert(error)})
}

//使用请求配置创建接口get请求
const getOrderList = () =>{
  axios({
    url:'',
    method:'get',
    params:{
      limit:18,
    }
    .then((Response)=>{})
    .catch((error)=> {})
  })
}
//同上post请求
const postOrderList =()=> {
  axios({
    url:'',
    method:'post',
    setTimeout:2000,
    data:{
      //上传数据的格式，需要提前规定好
      orderList:[
        {
          name:"菠萝咕咾肉",
          price:"12.5",
        },
        {
          name:"米饭",
          price:"1.5",
        }
      ]
    }
  })
  //超时配置，单位毫秒

  .then((Response)=>{
      alert('订单创建成功',Response.data.status)
  })
}
</script>

<template>
  <h1>AXIOS</h1>
  <button @click="getUserList">获取用户列表</button>

</template>

<style scoped>
</style>
