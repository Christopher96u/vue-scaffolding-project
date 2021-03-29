<template>
  <v-stepper-content :step="this.stepNumber">
    <v-row class="justify-center" style="height: 300px;">
      <v-col cols="6">
        <v-text-field label="Body color"></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-text-field label="Insert body color..."></v-text-field>
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
  name: "body-color",
  methods:{
    ...mapActions(['setStep'])
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
