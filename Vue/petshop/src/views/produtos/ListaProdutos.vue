<template>
  <div>
    <h1>
      Lista de Produtos
    </h1>
    <div class="produtos">
      <div v-for="(produto) in produtos" :key="produto.id" @click="irParaProduto(produto.id)" class="produto">
        <img :src="produto.foto" alt="">
        <h4>{{ produto.nome }}</h4>
        <span>{{ produto.preco | valorMonetario}}</span>
        <p>{{ produto.descricao }}</p>
        <router-link :to="produto.id"></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return {
      produtos: []
    }
  },
  async created() {
    this.produtos = await this.buscarProdutos();
  },
  methods: {
    async buscarProdutos(){
      const { data } = await axios.get('http://localhost:3000/produtos');
      return data;
    },
    irParaProduto(id){
      this.$router.push(`/ecommerce/${id}`);
    }
  }
}
</script>

<style lang="scss" scoped>
  .produtos{
    display: flex;
    flex-direction: column;
    margin: 2rem;
  }

  img{
    width: 30%;
  }

  .produto{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3rem;
  }

</style>