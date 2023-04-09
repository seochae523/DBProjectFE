import { createWebHistory, createRouter } from "vue-router";
import homePage from "@/components/homePage";
import aboutPage from "@/components/aboutPage";
import reviewPage from "@/components/reviewPage";
import myPage from "@/components/myPage";
import registerPage from "@/components/registerPage"
import loginPage from "@/components/loginPage"

const router = createRouter({

    history : createWebHistory(),
    routes : [ // path별 component를 추가한다.
        { path : "/", name : "home", component : homePage },
        {
            path : "/about",
            name : "about",
            component : aboutPage
        },
        {
            path : "/review",
            name : "review",
            component : reviewPage
        },
        {
            path : "/myPage",
            name : "myPage",
            component : myPage
        },
        {
            path : "/login",
            name : "login",
            component : loginPage
        },
        {
            path : "/register",
            name : "register",
            component : registerPage
        },
        {
            path : "/:pathMatch(.*)*",
            redirect : "/404"
        }
    ]
});

export default router;