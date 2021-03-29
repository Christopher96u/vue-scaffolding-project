<template>
  <v-stepper-content :step="this.stepNumber">
    <v-row class="justify-center" style="height: 300px;">
      <v-col cols="6">
        <v-text-field label="Animal Type"></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-text-field label="Insert animal type"></v-text-field>
      </v-col>
      <v-row no-gutters class="justify-center">
        <v-col cols="3">
          <v-btn color="secondary" @click="setStep(currentStep-1)">Back</v-btn>
          <v-btn color="primary" @click="setStep(currentStep+1)">Next</v-btn>
<!--          <v-btn color="warning" @click="goTo">Go Memeez</v-btn>-->
        </v-col>
      </v-row>
    </v-row>
  </v-stepper-content>
</template>


<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "animal-type",
  methods:{
    ...mapActions(['setStep']),
    goTo() {
      console.log("go tooo")
    }
  },
  computed: {
    ...mapGetters(['currentStep'])
  },
  props: {
    stepNumber: {
      type: Number,
      required: true
    }
  }
};
</script>

<style scoped>

</style>
