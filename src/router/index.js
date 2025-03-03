//导入创建路由的方法
import { createRouter,createWebHashHistory } from 'vue-router'
//导入所需路由的组件
//以下是直接导入组件的方式
import Index from '../views/Index.vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
//import User from '../views/User.vue'
//上面那条使用路由懒加载导入组建的方式，如下：
const User = () => import('../views/User.vue')
//路由集合处理，创建一个路由对象，并且包括子路由
const listRoutes = {
    path:'/list' ,component:() => import('../views/User.vue')
}
//定义路由映射 route是一条路由 许多放到一起就成了集合router
const routes = [
    //这玩意实际上是个数组 [] ，在里面插入了很多条对象 {}
    { path: '/', component: Index },
    { path: '/home', component: Home },
    { path: '/about', component: About },
    { path: '/users/:id/:username', component: User ,name :"users"}
    //动态路由 id是唯一变量名子 可使用 {{ $route.params.id }} 来调用
]
//      我们创建了几个路由 并将这个集合叫做routes
//      调用router插件的creatrouter方法，放入历史记录处理方式和我们的路由
//      当我们访问路由时候就会渲染
//创建路由实例
const router = createRouter({
    history : createWebHashHistory(),
    routes,
})

router.push("/")

export default router