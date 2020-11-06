<template>
  <div>
    <div class="row">
      <div class="col">
        <recepcao @novo-cadastro="novoCliente"></recepcao>
      </div>
      <div class="col">
        <veterinario :clientes="clientesVeterinario" @atendido="finalizarConsulta"></veterinario>
        <banho :clientes="clientesBanho" @atendido="finalizarBanho"></banho>
      </div>
    </div>
      <div class="espaco-abaixo"></div>
      <div class="espaco-abaixo"></div>
      <balanco :clientes="clientesAtendidos"></balanco>
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
@import '../assets/styles/main.scss';
</style>