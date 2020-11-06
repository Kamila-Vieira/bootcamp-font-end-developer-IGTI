<template>
  <div>
    <router-link :to="'/ecommerce'"><p>Voltar</p></router-link>
    <div v-for="(produto) in produtos" :key="produto.id"  class="produto">
      <div v-if="produto.id === detalheProduto ? produto : ''">
        <img :src="produto.foto" :alt="produto.nome">
        <h1>{{ produto.nome }}</h1>
        <span>{{ produto.preco | valorMonetario}}</span>
        <p>{{ produto.descricao }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return {
      detalheProduto: 'detalhe do produto',
      produtos: []
    }
  },
  mounted(){
    this.detalheProduto = this.$route.params.id;
  },
  async created() {
    this.produtos = await this.buscarProdutos();
  },
  methods: {
    async buscarProdutos(){
      const { data } = await axios.get('http://localhost:3000/produtos');
      return data;
    }
  }
}
</script>

<style>

</style>