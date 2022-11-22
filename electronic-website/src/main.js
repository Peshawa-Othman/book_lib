import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import VueAwesomePaginate from "vue-awesome-paginate";

// import the necessary css file
import "vue-awesome-paginate/dist/style.css";

import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faPercent } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faPercent);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .use(VueAwesomePaginate)
  .mount("#app");
