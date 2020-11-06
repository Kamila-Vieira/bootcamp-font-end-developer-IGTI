const Cachorro = class {
  constructor(){
    this.nome = '',
    this.idade = 0,
    this.raca = '',
    this.servico = {
      nome: '',
      observacoes: '',
      finalizado: false,
      extra: false,
      data: '',
    }
  }
}

export default Cachorro;