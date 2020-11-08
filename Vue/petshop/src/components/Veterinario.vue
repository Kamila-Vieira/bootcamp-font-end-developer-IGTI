<template>
  <div class="espaco-abaixo">
    <h2 class="titulo">Fila de Consultas</h2>
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
          <td>{{ cliente.servico.observacoes }}</td>
          <td><v-btn @click="finalizarAtendimento(cliente)">Finalizar Serviço</v-btn></td>
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
  extends: Servico
}
</script>

<style lang="scss" scoped>
  .espaco-abaixo{
    margin-bottom: 2rem;
  }
  .titulo{
    margin-bottom: 10px;
  }
</style>