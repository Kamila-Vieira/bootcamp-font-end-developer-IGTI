<template>
  <v-container>
    <div v-for="post in posts" :key="post.id" class="mb-4">
      <v-card class="mx-auto pa-4 d-flex align-items-center" >
        <div>
          <v-img :src="post.picture" :alt="post.title" max-width="300"></v-img>
          <v-card-title>{{ post.title }}</v-card-title>
        </div>
        <div class="pt-6">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon
                color="grey"
                dark
                v-bind="attrs"
                v-on="on"
              >
                mdi-heart
              </v-icon>
            </template>
            <span bottom v-for="like in likes" :key="like.id">
              <div v-if="like.postId === post.id">{{ like.user }}</div>
            </span>
          </v-tooltip>
          <div v-for="comment in comments" :key="comment.id">
            <v-card-text v-if="comment.postId === post.id">{{ comment.user }} comentou: {{ comment.comment }}</v-card-text>  
          </div> 
         <!--  <Comment :newComments="newComments.push(post.id)"/> -->
        </div>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import axios from 'axios';
import Comment from '@/components/Comment';

export default {
  components: {
    Comment
  },
   data(){
    return {
      posts: [],
      comments: [],
      likes: [],
      bestFriends: [],
      newComments: []
    }
   },
   async created() {
    this.posts = await this.fetchPosts();
    this.comments = await this.fetchComments();
    this.likes = await this.fetchLikes();
    this.bestFriends = await this.fetchBestFriends();
  },
  methods: {
    async fetchPosts(){
      const { data } = await axios.get('http://localhost:3001/posts');
      return data;
    },
    async fetchComments(){
      const { data } = await axios.get('http://localhost:3001/comments');
      return data;
    },
    async fetchLikes(){
      const { data } = await axios.get('http://localhost:3001/likes');
      return data;
    },
    async fetchBestFriends(){
      const { data } = await axios.get('http://localhost:3001/bestFriends');
      return data;
    },
  }
}
</script>

<style>

</style>