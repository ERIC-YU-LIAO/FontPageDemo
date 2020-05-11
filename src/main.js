import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import store from './store'
// VueAxios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
// bootstrap
import 'bootstrap'
import "bootstrap/dist/css/bootstrap.css"
// Loading 元件 //
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
Vue.component('Loading',Loading) // 載入啟用Loading 的元件
//bus
import './bus'
//Swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

///VeeValidate
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);

// currency filter // 
import VueCurrencyFilter from 'vue-currency-filter'
Vue.use(VueCurrencyFilter,
  {
    // symbol : '$',
    thousandsSeparator: ',',
    // fractionCount: 2,
    fractionSeparator: ',',
    symbolPosition: 'front',
    symbolSpacing: true
  })


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
