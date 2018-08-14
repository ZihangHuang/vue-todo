<template>
  <div id="app">
    <h1>记事本</h1>
    <header>
      <!-- to写成对象形式前面要加v-bind: -->
      <router-link :to="{ path: `/home` }" >主页</router-link>
      <router-link :to="{ name: 'about', params: { id: Math.round(Math.random()*100000) }}">详情</router-link>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 100px 0 300px 0;
  background-color: #E0FFFF;
}
a{
  text-decoration: none;
  color: rgba(0,0,0,.5);
}
.router-link-active{
  color: rgba(0,0,0,1);
  font-weight: bold;
}
</style>
