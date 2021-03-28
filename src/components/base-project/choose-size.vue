<template>
  <v-stepper-content step="2">
    <v-row class="justify-center" style="height: 300px;">
      <v-col cols="6">
        <v-text-field label="choose size"></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-text-field label="type the size!!!!"></v-text-field>
      </v-col>
      <v-row no-gutters class="justify-center">
        <v-col cols="3">
          <v-btn color="secondary" @click="setStep(currentStep-1)">Back</v-btn>
          <v-btn color="primary" @click="setStep(currentStep+1)">Next</v-btn>
        </v-col>
      </v-row>
    </v-row>
  </v-stepper-content>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "choose-size",
  methods: {
    ...mapActions(['setStep'])
  },
  computed: {
    ...mapGetters(['currentStep'])
  }
};
</script>

<style scoped>

</style>
