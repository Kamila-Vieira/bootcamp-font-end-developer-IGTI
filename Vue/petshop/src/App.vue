<template>
  <div id="page">
    <div class="flex">
      <h3 @click="irParaHome">Home</h3> | <h3 @click="irParaPetshop">Petshop</h3> | <h3 @click="irParaLoja">Loja</h3>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    irParaHome(){
      this.$router.push('/');
    },
    irParaPetshop(){
      this.$router.push('/petshop');
    },
    irParaLoja(){
      this.$router.push('/ecommerce');
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

.flex{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 35rem;
  color: #446a91;
  cursor: pointer;
}

</style>
