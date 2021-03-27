<template>
  <v-stepper-content step="6">
    <v-row class="justify-center" style="height: 300px;">
      <v-col cols="6">
        <v-text-field label="Type your resume"></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-text-field label="Type resume"></v-text-field>
      </v-col>
      <v-row no-gutters class="justify-center">
        <v-col cols="3">
          <v-btn color="primary" @click="setStep(7)">Next</v-btn>
        </v-col>
      </v-row>
    </v-row>
  </v-stepper-content>
</template>

<script>
import {mapActions} from "vuex"
export default {
  name: "resume",
  methods: {
    ...mapActions(['setStep'])
  }
};
</script>

<style scoped>

</style>
