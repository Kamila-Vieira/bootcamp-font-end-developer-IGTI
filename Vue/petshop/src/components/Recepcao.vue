<template>
<div>
  <v-form>
    <v-spacer></v-spacer>
    <v-text-field label="Nome do Cliente:" v-model="cliente.nome"></v-text-field>
    <v-spacer></v-spacer>
    <v-select label="Raça do Cão:" v-model="cliente.raca" :items="racas" item-text="nome"></v-select>
    <v-spacer></v-spacer>
    <v-text-field type="number" label="Idade:" min="0" v-model="cliente.idade" :rules="[rules.idadeCanina]"></v-text-field>
     <v-spacer></v-spacer>
    <v-select label="Serviço:" v-model="cliente.servico" :items="servicos">
      <template v-slot:selection="data">
        {{ data.item.nome }}
      </template>
      <template v-slot:item="data">
        {{ data.item.nome }} ({{ data.item.preco | valorMonetario }})
      </template>
    </v-select>
     <v-spacer></v-spacer>
    <v-textarea label="Sintomas:" solo rows="3" v-model="cliente.servico.observacoes" v-if="cliente.servico && cliente.servico.tipo === 'consulta'" max="50" ></v-textarea>
    <v-spacer></v-spacer>
    <v-btn 
      @click="novoCadastro"
      color="success"
      :disabled="cliente.idade >= 30
        || cliente.nome.length === 0
        || cliente.raca.length === 0
        || cliente.servico.tipo.length === 0"
    >
      Cadastrar
    </v-btn>
  </v-form>
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
      servicos: [],
      rules: {
        idadeCanina: value => value < 30 || 'Tem certeza que é um Cachorro???',
      },
    }
  },
  async created() {
    try {
      this.racas = await this.buscarRacas();
      this.servicos = await this.buscarServicos(); 
    } catch (error) {
      console.log(error) 
    }
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