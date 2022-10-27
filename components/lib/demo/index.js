import Demo from './src/main.vue'

Demo.install = function (app) {
  console.log(Demo.name);
  app.component(Demo.name, Demo)
}

export default Demo