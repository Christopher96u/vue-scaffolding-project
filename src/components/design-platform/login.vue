<template>
  <div>
    <div class="form-gap"></div>
    <v-main style="padding: 0">
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="8" style="align-self: center">
                      <v-card-text class="mt-12 ">
                        <h1 class="text-center display-2" style="color: #43A047">Welcome to Customplush</h1>
                        <h4 class="text-center mt-4 mx-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id mi vel metus commodo dictum vel id ipsum metus commodo dictum vel id ipsum. </h4>
                        <v-form>
                          <v-text-field  label="Email"  name="Email" prepend-icon="mdi-email" color="purple darken-1"></v-text-field>
                          <v-text-field id="password" label="Password" name="password" prepend-icon="mdi-lock" type="password" color="purple darken-1"></v-text-field>
                        </v-form>
                        <h3 class="text-right mt-4" style="color: #BDBDBD"><span  style="cursor: pointer">Forgot your password ?</span> </h3>
                      </v-card-text>
                      <div class="text-center mt-3" style="margin-bottom: 21px">
                        <div class="row">
                          <div class="col-6">
                            <v-btn elevation="5" class="green darken-1 mr-5" color="white" plain x-large >Sign in</v-btn>
                          </div>
                          <div class="col-6">
                            <v-btn class="purple darken-1" color="white" elevation="5" plain x-large text @click="step++" >Register</v-btn>
                          </div>
                        </div>
                      </div>
                    </v-col>
                    <v-col class="d-none d-md-flex d-lg-flex d-xl-flex" md="4" >
                      <v-img max-height="510px" :src="require('@/assets/images/login.jpeg')"></v-img>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <div class="form-gap"></div>
  </div>
</template>

<script>
export default {
  name: "login-design-platform",
  data(){
    return{
      step: 1
    }
  }
};
</script>

<style scoped>

</style>
