<template>
  <div>
    <h1>Bem vindo ao Petshop</h1>
    <v-row>
      <v-col md="6" sm="12">
        <v-card class="pa-4">
          <recepcao @novo-cadastro="novoCliente"></recepcao>
        </v-card>
      </v-col>
      <v-col md="6" sm="12">
        <v-card class="pa-4">
          <veterinario :clientes="clientesVeterinario" @atendido="finalizarConsulta"></veterinario>
        </v-card>
        <v-card class="pa-4 mt-4">
          <banho :clientes="clientesBanho" @atendido="finalizarBanho"></banho>
        </v-card>
      </v-col>
    </v-row>
    <v-spacer></v-spacer>
    <v-row>
      <v-col sm="12">
        <v-card class="pa-4">
          <balanco :clientes="clientesAtendidos"></balanco>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Recepcao from '@/components/Recepcao';
import Veterinario from '@/components/Veterinario';
import Banho from '@/components/Banho';
import Balanco from '@/components/Balanco';

export default {
  components: {
    Recepcao,
    Veterinario,
    Banho,
    Balanco
  },
  data(){
    return {
      clientesVeterinario: [],
      clientesBanho: [],
      clientesAtendidos: []
    }
  },
  methods: {
    novoCliente(cliente){
      cliente.servico.tipo === 'banho'
        ? this.clientesBanho.push(cliente)
        : this.clientesVeterinario.push(cliente);
    },
    finalizarConsulta(cliente){
      this.clientesAtendidos.push(cliente);
      this.$delete(
        this.clientesVeterinario,
        this.clientesVeterinario.findIndex((clienteAtendido) => clienteAtendido.nome === cliente.nome),
        cliente
      );
    },
    finalizarBanho(cliente){
      this.clientesAtendidos.push(cliente);
      this.clientesBanho = this.clientesBanho.filter((clienteAtendido) => clienteAtendido.nome !== cliente.nome);
    }
  }
}
</script>

<style>
</style>