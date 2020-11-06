<template>
  <div>
    <h3>Fila de Banho</h3>
    <table>
      <tr>
        <th>Nome</th>
        <th>Idade</th>
        <th>Raça</th>
        <th>Tosa?</th>
        <th></th>
      </tr>
      <tr v-for="(cliente, index) in clientes" :key="index">
        <td>{{ cliente.nome }}</td>
        <td>{{ cliente.idade }}</td>
        <td>{{ cliente.raca }}</td>
        <td>{{ cliente.servico.extra | pergunta }}</td>
        <td>
          <button @click="finalizarAtendimento(cliente)" >
            Finalizar Serviço
          </button>
        </td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<script>
import Servico from '@/components/Servicos'

export default {
  props: ['clientes'],
  filters: {
    pergunta: function (value){
      if(value === undefined) { return 'Não';}
      if(typeof value !== 'boolean'){ return value; }
      return value ? 'Sim' : 'Não';
    }
  },
  extends: Servico
}
</script>

<style lang="scss">

</style>