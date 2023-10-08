import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import vuetify from "./plugins/vuetify";
import "./global.css";

const app = createApp(App);
app.use(router);
app.use(vuetify);
app.mount("#app");
