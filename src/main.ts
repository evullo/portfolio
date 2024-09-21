import './assets/css/styles.css'
import { createApp } from 'vue'

import App from './App.vue'
import { locales } from './assets/locales/locales'
import { router } from './assets/js/routes'

import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAngleDown, faFileDownload, faLanguage, faDatabase, faLink, faEnvelopeCircleCheck } from "@fortawesome/free-solid-svg-icons"
import { faHtml5, faCss3, faJs, faReact, faVuejs, faNodeJs, faJava, faMicrosoft, faLinkedin } from "@fortawesome/free-brands-svg-icons"

library.add(faAngleDown, faFileDownload, faHtml5, faReact, faVuejs, faLanguage, faCss3, faJs, faDatabase, faNodeJs, faLink, faJava, faMicrosoft, faLinkedin, faEnvelopeCircleCheck)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(locales)
    .use(router)
    .mount('#app')
