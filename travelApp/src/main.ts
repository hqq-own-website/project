import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import { Notify } from 'vant';
//图片轮播插件

import './assets/css/myiconfont.css';
import './assets/font/PINGFANG BOLD.TTF';
import './assets/font/PINGFANG EXTRALIGHT.TTF';
import './assets/font/PINGFANG HEAVY.TTF';
import './assets/font/PINGFANG LIGHT.TTF';
import './assets/font/PINGFANG MEDIUM.TTF';
import './assets/font/PINGFANG MEDIUM.TTF';

createApp(App)
    .use(store)
    .use(router)
    .use(Vant)
    .use(Notify)
    .mount('#app')
