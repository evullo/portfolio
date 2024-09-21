import { createRouter, createWebHistory } from 'vue-router'
import MainView from "@/views/MainView.vue"
import ResumeView from "@/views/ResumeView.vue"
import LaboratoryView from "@/views/LaboratoryView.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: MainView},
        {path: '/resume', component: ResumeView},
        {path: '/laboratory', component: LaboratoryView}
    ],
})