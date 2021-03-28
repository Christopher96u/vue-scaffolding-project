<template>
  <v-stepper-content step="3">
    <v-row class="justify-center" style="height: 300px;">
      <v-col cols="12">
        <v-text-field label="CONGRATS"></v-text-field>
      </v-col>
      <v-row no-gutters class="justify-center">
        <v-col cols="3">
          <v-btn color="primary" @click="setStep(1)">Next</v-btn>
        </v-col>
      </v-row>
    </v-row>
  </v-stepper-content>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "congrats-base-project",
  methods: {
    ...mapActions(['setStep'])
  }
};
</script>

<style scoped>

</style>
