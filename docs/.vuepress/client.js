import { defineClientConfig } from '@vuepress/client'

// 导入组件库
import '../../components/css/card.css'
import Card from '../../components/lib/card/src/main.vue'

export default defineClientConfig({
  enhance({ app }) {
    // app.use(Card)
    app.component('m-card', Card)
  }
})