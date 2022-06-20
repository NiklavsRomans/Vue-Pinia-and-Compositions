import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "./styles/base.scss";
import "./styles/flexboxgrid.scss";
import "./styles/cssReset.scss";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
