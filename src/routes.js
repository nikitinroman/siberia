import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from "@/./pages/Home";
import AboutTour from "@/./pages/AboutTour";

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '',
            component: Home
        },
        {
            path: '/aboutTour/:id/:tour',
            component: AboutTour
        },
    ],
    mode: 'history'
})
