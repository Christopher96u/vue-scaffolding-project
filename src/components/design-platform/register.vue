<template>
  <div>
    <div class="form-gap"></div>
    <v-main style="padding: 0">
<v-container >
  <v-row class="fill-height">
    <v-col cols="12" md="4" class="d-none d-md-flex d-lg-flex d-xl-flex">
      <v-img max-height="550px" :src="require('@/assets/images/login.jpeg')"></v-img>
    </v-col>
    <v-col cols="12" md="8">
      <v-card-text class="mt-12">
        <h1 class="text-center display-2" style="color: #43A047">Create Account</h1>
        <h4 class="text-center mt-4">Complete your information to register</h4>
        <v-form class="mt-4">
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field label="Full Name" name="firstname" prepend-icon="mdi-account " type="text" color="purple darken-1"/>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field label="Lastname" name="lastname" prepend-icon="mdi-account " type="text" color="purple darken-1"/>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field  label="Email"  name="emailregister" prepend-icon="mdi-email" color="purple darken-1"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field label="Phone" name="phone" prepend-icon="mdi-phone " type="tel" color="purple darken-1"/>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field  label="Password"  prepend-icon="mdi-lock"  type="password"  color="purple darken-1"/>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field  label="Confirm Password"  prepend-icon="mdi-lock" type="password"  color="purple darken-1"/>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
      <div class="text-center mt-3" style="margin-bottom: 48px">
        <div class="row">
          <div class="col-6">
            <v-btn class="purple darken-1" color="white" elevation="5" plain x-large text  >sign in</v-btn>
          </div>
          <div class="col-6">
            <v-btn elevation="5" class="green darken-1 mr-5" color="white" plain x-large  >register</v-btn>
          </div>
        </div>
      </div>
    </v-col>
  </v-row>
</v-container>
      </v-main>
    </div>
</template>
<script>
export default {
  name: "register-desgin-platform"
};
</script>

<style scoped>

</style>
