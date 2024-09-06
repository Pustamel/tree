import '@/assets/main.css'
import {createApp} from 'vue'
import {Notify, Quasar} from 'quasar'
import i18n from '@/app/providers/localization/config'
import langRu from 'quasar/lang/ru'
import App from './App.vue'
import {setupStore} from "@/stores";
import router from './router'

//STYLES
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css';
import 'quasar/src/css/index.sass'
import '@quasar/extras/mdi-v6/mdi-v6.css'

const app = createApp(App)

app.config.globalProperties.$t = i18n.global.t

app.use(Quasar, {
  plugins: {
    Notify
  },
  lang: langRu
})
setupStore(app)
app.use(router)
app.use(i18n)

app.mount('#app')
