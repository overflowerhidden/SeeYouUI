import { createApp } from 'vue'
import App from './App.vue'

// todo 1.1 本地按需引入
// import '../components/css/index.css'
// import '../components/css/card.css'
// import Demo from '../components/lib/demo/index'
// import Card from '../components/lib/card/index'
// todo 1.2 本地全部引入
import '../components/css/index.css'
import SUI from "../components/lib/index";

// todo 2.1 npm按需引入
// import 'see-you-ui/dist/css/demo.css'
// import 'see-you-ui/dist/css/card.css'
// import SUI from "see-you-ui";
// let { Demo, Card } = SUI
// todo 2.2 npm全部引入
// import 'see-you-ui/dist/css/index.css'
// import SUI from "see-you-ui";
console.log(SUI);

const app = createApp(App)
app.use(SUI);
// app.use(Demo)
// app.use(Card)
app.mount('#app')
