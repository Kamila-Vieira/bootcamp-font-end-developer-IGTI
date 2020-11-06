<script>
export default {
  methods:{
    finalizarAtendimento(cliente){
      this.$emit('atendido', cliente);
    }
  }
}
</script>