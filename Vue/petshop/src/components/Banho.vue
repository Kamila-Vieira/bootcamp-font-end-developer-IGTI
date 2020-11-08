<template>
  <div>
    <v-spacer></v-spacer>
    <h2 class="titulo">Fila de Banho</h2>
    <v-simple-table v-if="clientes.length > 0">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Idade</th>
          <th>Raça</th>
          <th>Tosa?</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(cliente, index) in clientes" :key="index">
          <td>{{ cliente.nome }}</td>
          <td>{{ cliente.idade }}</td>
          <td>{{ cliente.raca }}</td>
          <td>{{ cliente.servico.extra | pergunta }}</td>
          <td>
            <v-btn @click="finalizarAtendimento(cliente)" >
              Finalizar Serviço
            </v-btn>
          </td>
          <td></td>
        </tr>
      </tbody>
    </v-simple-table>
    <div v-else>
      <h4>Nenhum Cliente Aguardando</h4>
    </div>
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

<style lang="scss" scoped>
 .titulo{
    margin-bottom: 10px;
  }
</style>