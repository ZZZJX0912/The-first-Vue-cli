import Router from 'vue-router'
import MyPage from "@/pages/homepage";
import Library from "@/pages/Library/Library";
import Libtable from "@/pages/Library/Lib-table"
// import Router from "vue-router";

const router = {
    mode: 'history',
    routes: [
        {
            path:"/",
            name:"homepage",
            component: MyPage
        },
        {
            path:"/Library",
            name:"Library",
            component:Library
        },
        {
            path:"/Library/Lib-table",
            name:"Libtable",
            component:Libtable
        },
    ]
}
export default new Router(router)