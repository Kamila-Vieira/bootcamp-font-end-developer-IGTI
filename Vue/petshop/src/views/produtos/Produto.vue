<template>
  <div>
    <div class="d-flex justify-space-between mb-10">
      <router-link :to="'/ecommerce'"><v-btn color="blue">Voltar</v-btn></router-link>
      <Carrinho :carrinho="carrinho" />
    </div>
    <div v-for="(produto) in produtos" :key="produto.id"  class="produto">
      <div v-if="produto.id === detalheProduto ? produto : ''">
        <v-card class="mx-auto" max-width="900" >
          <v-img height="100%" :src="produto.foto"></v-img>
          <v-card-title>{{ produto.nome }}</v-card-title>
          <v-card-subtitle class="pb-0">{{ produto.preco | valorMonetario}}</v-card-subtitle>
          <v-card-text class="text--primary">
            <div>{{ produto.descricao }}</div>
          </v-card-text>
          <v-card-actions>
            <router-link :to="`/ecommerce/${produto.id}`">
              <v-btn color="orange"  @click="adicionaAoCarrinho" >Comprar</v-btn>
            </router-link>
          </v-card-actions>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Carrinho from '@/components/Carrinho';
import ProdutosNoCarrinho from '@/components/ProdutosNoCarrinho';

export default {
  components: {
    Carrinho
  },
  data(){
    return {
      detalheProduto: 'detalhe do produto',
      produtos: [],
      carrinho: []
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
  },
  extends: ProdutosNoCarrinho
}
</script>

<style>

</style>