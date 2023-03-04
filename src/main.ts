import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';

import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';

Amplify.configure(awsExports);

loadFonts();

createApp(App)
  .use(createPinia())
  .use(router)
  .use(vuetify)
  .component('quill-editor', QuillEditor)
  .mount('#app');
