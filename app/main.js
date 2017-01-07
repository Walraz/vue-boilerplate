import 'babel-polyfill'
import './assets/styles/main.scss'

import Vue from 'vue'
import App from './App.vue'
import store from './store'
import MaterialDesignComponents from './components/material-design'

const app = new Vue({
  el: '#app',
  components: {
    'app': App,
  },
  template: '<app/>',
  store,
})