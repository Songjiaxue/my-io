<template>
  <div id="app">
    <router-view name="header"></router-view>
    <el-container>
      <router-view name="default"></router-view>
      <router-view name="index"></router-view>
    </el-container>
    <router-view name="footer"></router-view>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  margin: 0;
  font-size: 14px;
}

a,
a:hover,
a:link,
a:visited {
  text-decoration: none;
  color: #000;
}

a:hover {
  color: #00a8e8;
}

ul {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

img {
  width: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(43, 43, 43);
}
</style>
