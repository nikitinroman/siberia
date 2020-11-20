import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from "@/components/Home";
import AboutTour from "@/components/AboutTour";

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
