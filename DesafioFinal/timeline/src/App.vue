<template>
  <v-app>
    <v-app-bar
      app
      color="deep-purple"
      dark
    >
      <h2>VueGram</h2>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <Home />
    </v-main>
  </v-app>
</template>

<script>
import Home from './views/Home.vue';
import Timeline from './views/Timeline.vue';

export default {
  name: 'App',

  components: {
    Home,
    Timeline
  },

  data: () => ({
    //
  }),
};
</script>
