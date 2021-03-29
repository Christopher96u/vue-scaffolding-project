<template>
  <v-row class="justify-center">
    <v-col cols="12" class="green">
      <!-- Insert your step-form component here ! -->
      <v-stepper v-model="currentStep">
        <v-stepper-header>
          <template v-for="step in baseProjectStepForm">
            <v-stepper-step  :complete="currentStep>step.step" :step="step.step" :key="`${step.step}-step`">
              {{ step.title }}
            </v-stepper-step>
            <v-divider v-if="step.step !== baseProjectStepForm.length" :key="step.step"></v-divider>
          </template>
        </v-stepper-header>
        <v-stepper-items>
          <start-project :stepNumber="1"></start-project>
          <choose-size :stepNumber="2"></choose-size>
          <congrats-base-project :stepNumber="3"></congrats-base-project>
          <!-- Shared Components-->

          <!-- End Shared Components-->
        </v-stepper-items>
      </v-stepper>
    </v-col>
  </v-row>
</template>

<script>
import {mapGetters} from "vuex"
import ChooseSize from "@/components/base-project/choose-size";
import StartProject from "@/components/base-project/start-project";
import CongratsBaseProject from "@/components/base-project/congrats-base-project";
export default {
  name: "baseProjectForm",
  components: { CongratsBaseProject, StartProject, ChooseSize },
  computed: {
    ...mapGetters(["currentStep", "baseProjectStepForm"])
  },
};
</script>

<style scoped>

</style>
