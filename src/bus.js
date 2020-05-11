//掛載到原型上的目的是為了讓所有元件皆能使用
import Vue from 'vue'

Vue.prototype.$bus = new Vue()