<template>
  <Sidebar />
  <router-view/>
</template>

<script>
  import Sidebar from './components/Sidebar.vue';
  import LoadingVue from './components/Loading.vue';
  export default {
    name: "App",
    components: { Sidebar, LoadingVue },
  }
</script>

<style>
@import "@/assets/scss/main.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
}
</style>
