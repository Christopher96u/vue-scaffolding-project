<template>
  <v-row class="justify-center">
    <v-col cols="12" class="green">
      <!-- Insert your step-form component here ! -->
      <v-stepper v-model="currentStep">
        <v-stepper-header>
          <template v-for="step in memeezStepForm">
            <v-stepper-step  :complete="currentStep>step.step" :step="step.step" :key="`${step.step}-step`">
              {{ step.title }}
            </v-stepper-step>
            <v-divider v-if="step.step !== memeezStepForm.length" :key="step.step"></v-divider>
          </template>
        </v-stepper-header>
        <v-stepper-items>
          <upload-images :stepNumber="1"></upload-images>
          <skin-tone :stepNumber="2"></skin-tone>
          <hair-color :stepNumber="3"></hair-color>
          <eyes-color :stepNumber="4"></eyes-color>
          <additional-info :stepNumber="5"></additional-info>
          <resume :stepNumber="6"></resume>
          <!-- Shared Components-->
          <addons :stepNumber="7"></addons>
          <add-sounds :stepNumber="8"></add-sounds>
          <add-scents :stepNumber="9"></add-scents>
          <add-products :stepNumber="10"></add-products>
          <!--   Congrats is not an shared component       -->
          <congrats-memeez :stepNumber="11"></congrats-memeez>
          <!-- End Shared Components-->
        </v-stepper-items>
      </v-stepper>
    </v-col>
  </v-row>
</template>
<script>
import {mapGetters, mapActions} from "vuex"
import Resume from "@/components/shared/resume";
import AdditionalInfo from "@/components/shared/additional-info"
import EyesColor from "@/components/memeez/eyes-color";
import UploadImages from "@/components/memeez/upload-images";
import SkinTone from "@/components/memeez/skin-tone";
import HairColor from "@/components/memeez/hair-color";
import Addons from "@/components/shared/addons";
import AddSounds from "@/components/shared/add-sounds";
import AddScents from "@/components/shared/add-scents";
import AddProducts from "@/components/shared/add-products";
import CongratsMemeez from "@/components/memeez/congrats-memeez";
export default {
  name: "memeezForm",
  components:{
    CongratsMemeez,
    AddProducts,
    AddScents,
    AddSounds,
    Addons,
    HairColor,
    SkinTone,
    UploadImages,
    EyesColor,
    Resume,
    AdditionalInfo
  },
  computed: {
    ...mapGetters(["currentStep", "memeezStepForm"])
  },
  methods: {
    ...mapActions(['setStep'])
  },
  created() {
    this.setStep(1)
  }
};
</script>
