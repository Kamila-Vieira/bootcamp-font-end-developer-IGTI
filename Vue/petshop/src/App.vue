<template>
  <div id="page">
    <h3 @click="irParaHome">Home</h3>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    irParaHome(){
      this.$router.push('/');
    }
  }
}
</script>

<style lang="scss">
#page {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
