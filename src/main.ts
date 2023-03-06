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

const configureAmplify = () => {
  const urlsIn = awsExports.oauth.redirectSignIn.split(',');
  const urlsOut = awsExports.oauth.redirectSignOut.split(',');
  const currentHost = location.protocol + '//' + location.host;
  const isCurrentHost = (url: string) => url.includes(currentHost);
  const newUrls = {
    redirectSignIn: urlsIn.find((url) => isCurrentHost(url)),
    redirectSignOut: urlsOut.find((url) => isCurrentHost(url)),
  };
  Amplify.configure({
    ...awsExports,
    oauth: {
      ...awsExports.oauth,
      ...newUrls,
    },
  });
};

configureAmplify();
loadFonts();

createApp(App)
  .use(createPinia())
  .use(router)
  .use(vuetify)
  .component('quill-editor', QuillEditor)
  .mount('#app');
