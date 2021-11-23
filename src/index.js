import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './router.config'
import Element from 'element-ui';
import hljs from 'highlight.js';
import demoBlock from './components/demo-block/index.vue';

import 'element-ui/lib/theme-chalk/index.css';
import 'highlight.js/styles/color-brewer.css'
import './styles/common.scss';

Vue.use(Element)
Vue.use(VueRouter)
Vue.component('demo-block', demoBlock);

const router = new VueRouter({
  routes,
});

router.afterEach(route => {
  // https://github.com/highlightjs/highlight.js/issues/909#issuecomment-131686186
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)');
    Array.prototype.forEach.call(blocks, hljs.highlightBlock);
  });
});

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})