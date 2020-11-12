<template>
  <div>
    <div class="text-center">
    <v-menu 
      bottom
      origin="center center"
      transition="scale-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <div class="text-center d-flex justify-end mb-5" v-bind="attrs" v-on="on">
          <v-badge
            :content="carrinho.length"
            :value="carrinho.length"
            color="green"
            overlap
          >
            <v-avatar color="blue">
              <v-icon dark>mdi-cart-outline</v-icon>
            </v-avatar>
          </v-badge>
        </div>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in carrinho" :key="index">
          <v-list-item-title class="d-flex align-center mb-2">
            <img :src="item.foto" class="foto-produto-carrinho">
            {{ item.nome }} - {{ item.preco | valorMonetario }}
            <v-icon @click="removerProduto(index)" class="botao-remover" color="red">mdi-delete</v-icon>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
    <div v-for="(item, index) in carrinho" :key="index">
      <v-alert dismissible color="success" class="white--text">{{item.nome}} adicionado no carrinho!</v-alert>
    </div>
  </div>
</template>

<script>
export default {
  props: ['carrinho'],
  data(){
    return {
      removeProduto: 'Remove produto',
    }
  },
  methods: {
    removerProduto(indice){
      return this.carrinho.splice(indice, 1);
    }
  }
}
</script>

<style lang="scss" scoped>
  .foto-produto-carrinho{
    width: 80px;
    margin-right: 10px;
  }
  .botao-remover{
    margin-left: 10px;
  }
</style>