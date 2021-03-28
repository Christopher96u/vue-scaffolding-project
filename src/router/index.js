import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import NotFound from "@/views/NotFound"
import { AUTH_ROUTES } from '@/router/design-platform/auth'
import { USER_ROUTES } from "@/router/design-platform/user";
import { BASE_PROJECT_ROUTES } from "@/router/design-platform/base-project";
import { FUREVER_PET_ROUTES } from "@/router/design-platform/furever-pet";
import { MEMEEZ_ROUTES} from "@/router/design-platform/memeez";
Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    name: "Error404",
    component: NotFound,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
    meta:{
      requiresAuth: true
    }
  },
  {
    path: "/auth",
    component: () => import( "../views/design-platform/auth/Auth.vue"),
    children: AUTH_ROUTES
  },
  {
    path: "/user",
    component: () => import("@/views/design-platform/user/User"),
    children: USER_ROUTES
  },
  {
    path: "/base-project",
    component: () => import("@/views/design-platform/base-project/BaseProject"),
    children: BASE_PROJECT_ROUTES
  },
  {
    path: "/furever-pet",
    component: () => import("@/views/design-platform/furever-pet/FureverPet"),
    children: FUREVER_PET_ROUTES
  },
  {
    path: "/memeez",
    component: () => import("@/views/design-platform/memeez/Memeez"),
    children: MEMEEZ_ROUTES
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
/*
* PAGE NOT FOUND <-- limpiar la ruta  localhost/auth/login/asdasd
*                     redirect to localhost&auth/login
* */
router.beforeEach((to, from, next)=>{
  const authenticatedUser = null;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !authenticatedUser){
    next('auth/login')
  }
  else {
    next()
  }
})

export default router;

/*
This function could be for validating if user is corporative or personal
*
path : '/blabla'
beforeEnter: (to, from, next) => {
        // ...
      }
* */
