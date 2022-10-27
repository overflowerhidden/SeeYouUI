import Card from './src/main.vue'

Card.install = function (app) {
  console.log(Card.name);
  app.component(Card.name, Card)
}

export default Card