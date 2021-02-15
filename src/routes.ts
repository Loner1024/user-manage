import About from './views/About.vue'
import Home from './views/Home.vue'



let routes = [
    {path:"/about",component:About},
    {path:"/",component:Home},
]

export {
    routes
}