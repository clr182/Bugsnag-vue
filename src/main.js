import Vue from 'vue'
import App from './App.vue'
import Bugsnag from '@bugsnag/js'
import BugsnagPluginVue from '@bugsnag/plugin-vue'


Bugsnag.start({
  apiKey: 'c2fa5d90bfe1c6bf6d9a522f6e08656d',
  plugins: [new BugsnagPluginVue()],
});

const bugsnagVue = Bugsnag.getPlugin('vue');
bugsnagVue.installVueErrorHandler(Vue);

new Vue({
  el: '#app',
});

new Vue({
 render: h => h(App),
}).$mount('#app')
