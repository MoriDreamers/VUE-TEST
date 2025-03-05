//封装axios 简化调用方法 去掉一些重复的代码 并且如果需要换掉请求库 可以直接修改这里

/*
    思考：我们需要保留什么接口？
    超时时间
    URL
    请求头
    请求方法
    请求参数
*/
import axios from 'axios'

const request = (url = '',data = {} , method , timeout = 2000) =>{ //默认值写到接受参数里
    console.log("您使用了封装的请求方法")
    return new Promise((resolve, reject) => {
        console.log("使用了axios组件")
        method = method.toLowCase()//将请求方法转为小写以统一处理
        if (method === 'get'){
            axios({
                method:method.toLowercase,
                params:data,
                timeout:timeout,
                url:url,
            }).then((Response)=>{
                console.log("请求成功")
                resolve(Response.data)
            }).catch((error)=>{
                reject(error)
            })
        }else if (method === 'post'){
            axios({
                method:method.toLowercase,
                data:data,
                timeout:timeout,
                url:url,
            }).then((Response)=>{
                console.log("请求成功")
                resolve(Response.data)
            }).catch((error)=>{
                reject(error)
            })
        }
    })
}

export default request //此时，该方法已经导出可以被其它文件以request的方法名调用了