<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted() {
    // 解决在地址栏输入路由跳转无效的问题
    window.addEventListener(
      'hashchange',
      () => {
        var currentPath = window.location.hash.slice(1); // 获取输入的路由
        if (this.$router.path !== currentPath) {
          this.$router.push(currentPath); // 动态跳转
        }
      },
      false
    );
  }
};
</script>

<style>

</style>
