# 快速开始

## 内部引用组件库

```javascript
// 全部引入（ main.js ）
import '../components/css/index.css'
import SUI from "../components/lib/index";

const app = createApp(App)
app.use(SUI);
app.mount('#app')

// 按需引入（ main.js ）
import '../components/css/index.css'
import '../components/css/card.css'
import Demo from '../components/lib/demo/index'
import Card from '../components/lib/card/index'

const app = createApp(App)
app.use(Demo);
app.use(Card);
app.mount('#app')
```

## 外部引用组件库

```javascript
// 安装
npm run see-you-ui
or
yarn see-you-ui

// 全部引入（ main.js ）
import 'see-you-ui/dist/css/index.css'
import SUI from "see-you-ui";

const app = createApp(App)
app.use(SUI);
app.mount('#app')

// 按需引入（ main.js ）
import 'see-you-ui/dist/css/demo.css'
import SUI from "see-you-ui";
const { Demo } = SUI

const app = createApp(App)
app.use(Demo);
app.mount('#app')

```

Copyright (c) 2022-present zdp