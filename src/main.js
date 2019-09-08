// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import { creatRouter } from './router';

Vue.use(Antd);
const router = creatRouter();
Vue.config.productionTip = false;
console.log(router, '_router');
/* eslint-disable no-new */
new Vue({
  el: '#app', // 为实例提供挂载元素。值可以是 CSS 选择符，或实际 HTML 元素，或返回 HTML 元素的函数
  router,
  template: '<App/>', // 模板将会替换挂载的元素
  components: {
    // 使用 App 组件
    App
  }
});
