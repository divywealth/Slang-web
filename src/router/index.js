import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index.js";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  /*{
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(// webpackChunkName: "about" '../views/AboutView.vue')
    }
  }
  */
  {
    path: "/signin",
    name: "signin",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Authentication/LoginView.vue"
      ),
    meta: { noAuth: true },
  },
  {
    path: "/signup",
    name: "signup",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Authentication/Registration.vue"
      ),
    meta: { noAuth: true },
  },
  {
    path: "/getverificationcode",
    name: "GetVerificationCode",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/ForgetPassword/GetVerificationCode.vue"
      ),
  },
  {
    path: "/verifycode",
    name: "VerifyCode",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/ForgetPassword/VerifyCode.vue"
      ),
      meta: { noAuth: true },
  },
  {
    path: "/changepassword",
    name: "ChangePassword",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/ForgetPassword/ChangePassword.vue"
      ),
      meta: { noAuth: true },
  },
  {
    path: "/profile",
    name: "Profile",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AndroidPages/Profile"),
      meta: { needsAuth: true },
  },
  {
    path: "/addslang",
    name: "AddSlang",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AndroidPages/AddSlang"),
      meta: { needsAuth: true },
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "single-product" */ "../views/NotFound.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.needsAuth) {
    if (store.state.user) {
      next();
    } else {
      next("/signin");
    }
  } else {
    next();
  }

  if (to.meta.noAuth) {
    if (!store.state.user) {
      next();
    } else {
      next("/");
    }
  } else {
    next();
  }

  if (to.name === "VerifyCode") {
    if (from.name === "signup" || from.name === "signin") {
      store.commit("SETARRIVEDVIASIGNUP");
    } else if (from.name === "GetVerificationCode") {
      store.commit("SETARRIVEDVIAFORGETPASSWORD");
    }
  }
});

export default router;
