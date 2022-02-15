import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// vue2
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

// vue3
createApp(App).use(router).use(store).mount("#app");
