<template>
  <v-container>
    <div v-for="like in likes" :key="like.id">
      <div v-if="like.postId === post.id">{{ like.user }} gostou</div>
    </div>
  </v-container>
</template>

<script>
import axios from 'axios';
import Timeline from '@/views/Timeline';

export default {
  components: {
    Timeline
  },
   data(){
    return {
      likes: []
    }
   },
   async created() {
    this.likes = await this.fetchLikes();
  },
  methods: {
    async fetchLikes(){
      const { data } = await axios.get('http://localhost:3001/likes');
      return data;
    },
  }
}
</script>

<style>

</style>