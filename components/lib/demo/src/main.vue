<template>
  <h1 class="m-demo">{{ msg }}</h1>
</template>

<script>
export default {
  name: "DemoComp",
  props: {
    msg: {
      type: String,
      required: true,
      default:'demo'
    },
  },
};
</script>

<style></style>
