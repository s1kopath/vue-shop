import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import './assets/app.scss'
import jQuery from 'jquery'

window.$ = window.jQuery = jQuery

import 'popper.js'

createApp(App).mount('#app')
