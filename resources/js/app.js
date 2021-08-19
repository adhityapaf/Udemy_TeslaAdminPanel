import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import index from './index'
import vuetify from './vuetify';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPen, faTrash, faCamera, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPen, faTrash, faCamera, faSignOutAlt)


Vue.use(VueRouter)
Vue.component('font-awesome-icon', FontAwesomeIcon)
require('./bootstrap');

window.Vue = require('vue').default;

const app = new Vue({
    el: '#app',
    router: new VueRouter(routes),
    components: {
        index
    },
    vuetify
});
