<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <Timeline/>
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
