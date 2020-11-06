<template>
  <div>
    <h1>Um produto</h1>
    <!-- <div>
      <div v-for="(produto) in produtos" :key="produto.id" @click="irParaProduto(produto.id)">
        <img :src="produto.foto" alt="">
        <h4>{{ produto.nome }}</h4>
        <span>{{ produto.preco | valorMonetario}}</span>
        <p>{{ produto.descricao }}</p>
      </div>
    </div> -->
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
    }
  }
}
</script>

<style>

</style>