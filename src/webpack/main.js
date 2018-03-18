import Vue from 'vue';
import Vuetify from 'vuetify';

import AppComponent from './app/template.vue';
import TweetModalComponent from './components/TweetModal/template.vue';

Vue.component('tweet-modal-component', TweetModalComponent);

Vue.use(Vuetify);

new Vue({ // eslint-disable-line no-new
  el: '#app',
  render(h) {
    return h(AppComponent);
  },
});
