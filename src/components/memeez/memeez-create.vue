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
          <upload-images></upload-images>
          <skin-tone></skin-tone>
          <hair-color></hair-color>
          <eyes-color></eyes-color>
          <additional-info></additional-info>
          <resume></resume>
          <!-- Shared Components-->
          <addons></addons>
          <add-sounds></add-sounds>
          <add-scents></add-scents>
          <add-products></add-products>
          <congrats-memeez></congrats-memeez>
          <!-- End Shared Components-->
        </v-stepper-items>
      </v-stepper>
    </v-col>
  </v-row>
</template>
<script>
import {mapGetters} from "vuex"
import Resume from "@/components/memeez/resume";
import AdditionalInfo from "@/components/memeez/additional-info"
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
    ...mapGetters(["currentStep", "memeezStepForm","headers"])
  },
  data(){
    return {

    }
  }
};
</script>
