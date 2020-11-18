<template>
  <div>
    <label for="comment">Comentar</label>
    <input type="text" name="comment" id="comment">
    <input type="button" value="postar">
  </div>
</template>

<script>
export default {
props: ['newComments'],
}
</script>

<style>

</style>