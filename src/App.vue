<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
@import "../node_modules/reset-css";
@import "assets/css/fonts.css";

html {
  scroll-behavior: smooth;
}
</style>
