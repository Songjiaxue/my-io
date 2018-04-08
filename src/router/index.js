import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Project from '@/components/Project'
import Dingdangmao from '@/components/Dingdangmao'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Collection from '@/components/Collection'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      components: {
        index: Index
      }
    },
    {
      path: '/project/:id',
      name: 'Project',
      components: {
        header: Header,
        default: Project,
        footer: Footer
      }
    },
    {
      path: '/dingdangmao',
      name: 'Dingdangmao',
      component: Dingdangmao
    },
    {
      path: '/collection/:id',
      name: 'Collection',
      components: {
        header: Header,
        default: Collection,
        footer: Footer
      }
    }
  ]
})
