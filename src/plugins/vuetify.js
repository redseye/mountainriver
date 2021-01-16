import '@fortawesome/fontawesome-free/css/all.css'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  icons:{
    iconfont:'fa',
  },
  theme: {
    themes: {
      light: {
        primary: '#CBAA5C',
        secondary: '#083759',
      },
    },
  },
})
