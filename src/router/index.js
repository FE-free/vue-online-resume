import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/layout';

Vue.use(Router);

export function creatRouter() {
  const router = new Router({
    mode: 'hash', // 设置为history gh-pages 出现404
    routes: [
      {
        path: '/',
        component: Layout,
        hidden: true,
        children: [
          {
            path: '/',
            component: () => import('@/views/home/index')
          },
          {
            path: '/signin',
            component: () => import('@/views/signin/index')
          },
          {
            path: '/resumeEdit/:id',
            component: () => import('@/views/resume/resumeedit')
          }
        ]
      },
      {
        path: '*',
        component: resolve => require(['@/views/error/404'], resolve)
        // redirect: '/'
      }
    ]
  });
  return router;
}
