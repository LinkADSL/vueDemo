import Vue from 'vue'
import Router from 'vue-router'
import MedicalExaminations from '@/components/MedicalExaminations'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '体检表',
      component: MedicalExaminations
    }
  ]
})
