<template>
  <v-row class="justify-center">
    <v-col cols="12" class="green">
      <!-- Insert your step-form component here ! -->
      <v-stepper v-model="currentStep">
        <v-stepper-header>
          <template v-for="step in fureverPetStepForm">
            <v-stepper-step  :complete="currentStep>step.step" :step="step.step" :key="`${step.step}-step`">
              {{ step.title }}
            </v-stepper-step>
            <v-divider v-if="step.step !== fureverPetStepForm.length" :key="step.step"></v-divider>
          </template>
        </v-stepper-header>
        <v-stepper-items>
          <upload-images :stepNumber="1"></upload-images>
          <animal-type :stepNumber="2"></animal-type>
          <shape :stepNumber="3"></shape>
          <fur-type :stepNumber="4"></fur-type>
          <plush-position :step-number="5"></plush-position>
          <tail-position :stepNumber="6"></tail-position>
          <body-color :step-number="7"></body-color>
          <eyes-color :stepNumber="8"></eyes-color>
          <!-- Shared Components-->
          <additional-info :stepNumber="9"></additional-info>
          <resume :stepNumber="10"></resume>
          <addons :stepNumber="11"></addons>
          <add-sounds :stepNumber="12"></add-sounds>
          <add-scents :stepNumber="13"></add-scents>
          <add-products :stepNumber="14"></add-products>
          <!--   Congrats is not an shared component       -->
          <congrats-furever-pet :stepNumber="15"></congrats-furever-pet>
          <!-- End Shared Components-->
        </v-stepper-items>
      </v-stepper>
    </v-col>
  </v-row>
</template>

<script>
import UploadImages from '@/components/furever-pet/upload-images'
import AnimalType from '@/components/furever-pet/animal-type'
import { mapGetters, mapActions } from "vuex";
import Shape from "@/components/furever-pet/shape";
import FurType from "@/components/furever-pet/fur-type";
import PlushPosition from "@/components/furever-pet/plush-position";
import TailPosition from "@/components/furever-pet/tail-position";
import BodyColor from "@/components/furever-pet/body-color";
import EyesColor from "@/components/furever-pet/eyes-color";
import AdditionalInfo from "@/components/shared/additional-info";
import Resume from "@/components/shared/resume";
import Addons from "@/components/shared/addons";
import AddProducts from "@/components/shared/add-products";
import AddScents from "@/components/shared/add-scents";
import AddSounds from "@/components/shared/add-sounds";
import CongratsFureverPet from "@/components/furever-pet/congrats-furever-pet";

export default {
  name: "furever-pet-create",
  components:{
    CongratsFureverPet,
    AddSounds,
    AddScents,
    AddProducts,
    Addons,
    Resume,
    AdditionalInfo,
    EyesColor,
    BodyColor,
    TailPosition,
    PlushPosition,
    FurType,
    Shape,
    UploadImages,
    AnimalType
  },
  computed: {
    ...mapGetters(["currentStep", "fureverPetStepForm"])
  },
  methods:{
    ...mapActions(['setStep'])
  },
  created() {
  this.setStep(1)
  }
};
</script>

<style scoped>

</style>
