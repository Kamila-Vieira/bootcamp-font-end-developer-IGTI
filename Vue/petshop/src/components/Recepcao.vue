<template>
<div>
  <h1>Bem vindo ao Petshop</h1>
  <form @submit.prevent="novoCadastro">
    <div class="espaco-abaixo">
      <label>Nome do Cliente:</label>
      <input type="text" v-model="cliente.nome">
    </div>
    <div class="espaco-abaixo">
      <label>Raça do Cão:</label>
      <select v-model="cliente.raca">
        <option v-for="(raca, index) in racas" :key="index">{{raca.nome}}</option>
      </select>
    </div>
    <div class="espaco-abaixo">
      <label>Idade:</label>
      <input type="number" v-model="cliente.idade">
      <div class="erro" v-if="cliente.idade >= 30">
        Tem certeza que é um Cachorro???
      </div>
    </div>
    <div class="espaco-abaixo">
      <label>Serviço:</label>
      <select v-model="cliente.servico">
        <option v-for="(servico, index) in servicos" 
          :key="index" 
          :value="servico">
            {{servico.nome}} ({{servico.preco | valorMonetario}})
        </option>
      </select>
    </div>
    <div v-if="cliente.servico.tipo === 'consulta'">
      <label>Sintomas:</label>
      <textarea rows="3" v-model="cliente.servico.observacoes"></textarea>
    </div>
    <div>
      <input type="submit" v-bind:disabled="cliente.idade >= 30
        || cliente.idade < 0
        || cliente.nome.length === 0
        || cliente.raca.length === 0
        || cliente.servico.tipo.length === 0
      ">
    </div>
  </form>
</div>
</template>

<script>
import axios from 'axios';
import Cachorro from '../models/cachorro.js'

export default {
  data(){
    return {
      cliente: new Cachorro(),
      racas: [],
      servicos: []
    }
  },
  async created() {
    this.racas = await this.buscarRacas();
    this.servicos = await this.buscarServicos();
  },
  methods: {
    async buscarRacas(){
      const { data } = await axios.get('http://localhost:3000/racas');
      return data;
    },
    async buscarServicos(){
      const { data } = await axios.get('http://localhost:3000/servicos');
      return data;
    },
    novoCadastro(){
      this.$emit('novo-cadastro', this.cliente);
      this.cliente = new Cachorro();
    },
  }
}
</script>

<style lang="scss" scoped>
  form{
    display: flex;
    flex-direction: column;
  }
  .erro{
    color: red;
    margin-top: 5px;
    font-weight: bold;
  }
</style>