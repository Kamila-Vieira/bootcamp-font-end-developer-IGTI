<template>
  <div>
     <h3>Serviços do Dias</h3>
    <table>
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
        <td colspan="4">{{ totalServicos | valorMonetario }}</td>
      </tfoot>
    </table>
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

<style>

</style>