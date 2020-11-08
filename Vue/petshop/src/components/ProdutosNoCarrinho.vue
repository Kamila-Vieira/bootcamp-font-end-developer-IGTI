<script>
export default {
  methods: {
    adicionaAoCarrinho(){
      this.produtos.map(produto => {
        produto.id === this.detalheProduto ? this.carrinho.push(produto) : '';
        return this.carrinho;
      });
    }
  }
}
</script>