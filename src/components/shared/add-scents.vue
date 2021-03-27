<template>
  <v-stepper-content step="9">
    <v-row class="justify-center" style="height: 300px;">
      <v-col cols="6">
        <v-text-field label="Add one scent"></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-text-field label="more scents?"></v-text-field>
      </v-col>
      <v-row no-gutters class="justify-center">
        <v-col cols="3">
          <v-btn color="primary" @click="setStep(10)">Next</v-btn>
        </v-col>
      </v-row>
    </v-row>
  </v-stepper-content>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "add-scents",
  methods: {
    ...mapActions(['setStep'])
  }
};
</script>

<style scoped>

</style>
