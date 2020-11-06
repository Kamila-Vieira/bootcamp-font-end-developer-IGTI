import Vue from 'vue';
import App from './App.vue';
import router from './router';
// import vuetify from './plugins/vuetify'

Vue.filter('valorMonetario', (value) => {
  if(typeof value !== 'number') { return value; }
  return `R$ ${value.toFixed(2)}`
});
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
