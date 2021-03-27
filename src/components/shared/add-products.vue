<template>
  <v-stepper-content step="10">
    <v-row class="justify-center" style="height: 300px;">
      <v-col cols="6">
        <v-text-field label="Add one product"></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-text-field label="more products?"></v-text-field>
      </v-col>
      <v-row no-gutters class="justify-center">
        <v-col cols="3">
          <v-btn color="primary" @click="setStep(11)">Next</v-btn>
        </v-col>
      </v-row>
    </v-row>
  </v-stepper-content>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "add-products",
  methods: {
    ...mapActions(['setStep'])
  }
};
</script>

<style scoped>

</style>
