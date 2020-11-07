<template>
  <div>
    <h1>
      Loja de Produtos
    </h1>
    <div class="produtos">
      <div v-for="(produto) in produtos" :key="produto.id"  class="produto">
        <v-card
          class="mx-auto"
          max-width="400"
        >
          <v-img
            class="white--text align-end"
            height="200px"
            :src="produto.foto"
          >
            <v-card-title>{{ produto.nome }}</v-card-title>
          </v-img>
          <v-card-subtitle class="pb-0">{{ produto.preco | valorMonetario}}</v-card-subtitle>
          <v-card-text class="text--primary">
            <div>{{ produto.descricao }}</div>
          </v-card-text>
          <v-card-actions>
            <router-link :to="`/ecommerce/${produto.id}`">
              <v-btn color="orange" text>Comprar</v-btn>
            </router-link>
          </v-card-actions>
        </v-card>
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
    // @click="irParaProduto(produto.id)"
    /* irParaProduto(id){
      this.$router.push(`/ecommerce/${id}`);
    } */
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