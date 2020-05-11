import { ValidationObserver, ValidationProvider, extend, localize} from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import TW from 'vee-validate/dist/locale/zh_TW.json';

Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});

localize('zh_TW', TW);

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

import { extend } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';

// 作法一
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});