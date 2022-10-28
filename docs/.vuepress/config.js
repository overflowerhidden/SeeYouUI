import { defaultTheme } from 'vuepress'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { path } from '@vuepress/utils'

module.exports = {
  title: 'SEE-YOU-UI',
  description: 'VUE3.0搭建的UI组件库',
  base: "/SeeYouUI/",
  markdown: {
    code: {
      lineNumbers: false // 代码块显示行号
    }
  },
  theme: defaultTheme({
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Github', link: 'https://github.com/overflowerhidden/SeeYouUI' },
      { text: 'VuePress', link: 'https://v2.vuepress.vuejs.org/zh/' },
    ],
    sidebar: [
      {
        text: '快速上手',
        link: '/'
      }, {
        text: '组件',
        children: [
          {
            text: 'Card',
            link: '/componentDocs/card'
          }
        ]
      }
    ],
    plugins: [
      registerComponentsPlugin({
        componentsDir: path.resolve(__dirname, './components'),
      })
    ]
  })
}