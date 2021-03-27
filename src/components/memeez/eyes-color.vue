<template>
  <v-stepper-content step="4">
    <v-row class="justify-center" style="height: 300px;">
      <v-col cols="6">
        <v-text-field label="Type your EYE COLOR "></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-text-field label="Type your eyes color...."></v-text-field>
      </v-col>
      <v-row no-gutters class="justify-center">
        <v-col cols="3">
          <v-btn color="primary" @click="setStep(5)">Next</v-btn>
        </v-col>
      </v-row>
    </v-row>
  </v-stepper-content>
</template>

<script>
import { mapActions} from "vuex"
export default {
  name: "eyes-color",
  methods: {
    ...mapActions(['setStep'])
  }
};
</script>

<style scoped>

</style>
