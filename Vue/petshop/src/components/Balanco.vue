<template>
  <div>
     <h2 class="titulo">Serviços do Dias</h2>
     <v-simple-table v-if="clientes.length > 0">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Idade</th>
          <th>Raça</th>
          <th>Sintomas</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(cliente, index) in clientes" :key="index">
          <td>{{ cliente.nome }}</td>
          <td>{{ cliente.idade }}</td>
          <td>{{ cliente.raca }}</td>
          <td>{{ cliente.servico.nome }}</td>
          <td>{{ cliente.servico.preco | valorMonetario }}</td>
        </tr> 
      </tbody>
      <tfoot>
        <td>Total</td>
        <td colspan="3"></td>
        <td><b>{{ totalServicos | valorMonetario }}</b></td>
      </tfoot>
     </v-simple-table>
    <div v-else>
      <h4>Nenhum Serviço Finalizado</h4>
    </div>
  </div>
</template>

<script>
export default {
  props: ['clientes'],
  computed: {
    totalServicos(){
      if(!Array.isArray(this.clientes)) { return 0;}
      return this.clientes.reduce((total, cliente) => total + cliente.servico.preco, 0)
    }
  }
}
</script>

<style lang="scss" scoped>
 .titulo{
    margin-bottom: 10px;
  }
</style>