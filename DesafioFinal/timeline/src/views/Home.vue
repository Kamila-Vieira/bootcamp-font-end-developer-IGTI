<template>
  <v-card>
    <v-tabs 
      v-model="tab"
      background-color="deep-purple accent-4"
      centered
      dark
      icons-and-text
    >
      <v-tabs-slider></v-tabs-slider>
      <v-tab href="#tab-1">Superman</v-tab>
      <v-tab href="#tab-2">Item Two</v-tab>
      <v-tab href="#tab-3">Item Three</v-tab>
    </v-tabs>
    <Timeline />
  </v-card>
</template>

<script>
import Timeline from '@/views/Timeline';

export default {
  name: 'Home',
  components: {
    Timeline
  }
}
</script>
