<template>
  <DemoComp :msg="info" />
  <DemoComp />
  <CardComp
    imgSrc="java.png"
    summary="剑指Java面试-Offer直通车  百度资深面试官授课"
  />
  <CardComp
    imgSrc="c.png"
    summary="C语言系统化精讲  重塑你的编程思想 打造坚实的开发基础"
  >
    <template v-slot:footer>
      <div class="footer">
        <div class="level">中级 · 528人报名</div>
        <div class="price">￥299.00</div>
      </div>
    </template>
  </CardComp>
  <CardComp imgSrc="spring.png" :width="370" :imgHeight="90">
    本路线旨在帮助想快速掌握SpringBoot应用的工程师，全方位多角度带你升级。
    <template v-slot:footer>
      <div class="footer-spring">
        <div class="level">4步骤 · 6门课</div>
        <div class="level">10965收藏</div>
      </div>
    </template>
  </CardComp>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      info: "SEE-YOU-UI",
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.m-card {
  float: left;
  margin: 0 24px;
}
</style>
