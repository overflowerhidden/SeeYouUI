export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"快速开始\",\"lang\":\"en-US\",\"frontmatter\":{},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"内部引用组件库\",\"slug\":\"内部引用组件库\",\"link\":\"#内部引用组件库\",\"children\":[]},{\"level\":2,\"title\":\"外部引用组件库\",\"slug\":\"外部引用组件库\",\"link\":\"#外部引用组件库\",\"children\":[]}],\"git\":{\"updatedTime\":1666861532000,\"contributors\":[{\"name\":\"赵鹏\",\"email\":\"18303881822@163.com\",\"commits\":1}]},\"filePathRelative\":\"README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
