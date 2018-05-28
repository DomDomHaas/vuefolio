import Vue from 'vue';
import Router from 'vue-router';
import LandingPage from '@/components/LandingPage';
import ProjectPage from '@/components/ProjectPage';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage,
    },
    {
      path: '/project/:id',
      name: 'ProjectPage',
      component: ProjectPage,
    },
  ],
});
