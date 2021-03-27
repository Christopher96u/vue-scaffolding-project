<template>
  <v-stepper-content step="2">
    <v-row class="justify-center" style="height: 300px;">
      <v-col cols="6">
        <v-text-field label="Type your skin tone"></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-text-field label="Type another skintone"></v-text-field>
      </v-col>
      <v-row no-gutters class="justify-center">
        <v-col cols="3">
          <v-btn color="primary" @click="setStep(3)">Next</v-btn>
        </v-col>
      </v-row>
    </v-row>
  </v-stepper-content>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "skin-tone",
  computed: {
    ...mapGetters(['currentStep'])
  },
  methods: {
    ...mapActions(['setStep'])
  }
};
</script>

<style scoped>

</style>
