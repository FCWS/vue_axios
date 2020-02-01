<template>
  <div id="app">
    <img src="./assets/logo.png" @click="testNet2">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    testNet () {
      this.$api.article.getAll().then(res => {
        console.log(res.data)
      })
    },
    testNet2 () {
      this.$api.article.getAllAuth().then(res => {
        console.log(res.data)
      })
    },
    login () {
      this.$api.user.login({
        'email': '2582004030@qq.com',
        'password': '222'
      })
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
  margin-top: 60px;
}
</style>
