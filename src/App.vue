<template>
  <v-app id="app">
    <div id="nav" class="">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
<!--    <div class="text-center my-11 mx-10" style="width: 300px;">
      <v-btn rounded color="primary" dark @click="get_Users">
        Example Button
      </v-btn>
&lt;!&ndash;      :validate="{email: true, required: true}&ndash;&gt;
    </div>
    <v-container class="mb-10">
      <v-form @submit.prevent="">
        <v-row class="justify-center">
          <v-col cols="4">
            <base-input v-model="firstname" placeholder="Type your Firstname"
                        :v="$v.firstname" :validate="validateFirstname">
            </base-input>
          </v-col>
        </v-row>
        <v-row class="justify-center">
          <v-col cols="4">
            <base-input placeholder="Type your phone" v-model.number="phone"
            :v="$v.phone" :validate="validatePhone" prefix="+51">
            </base-input>
          </v-col>
        </v-row>
        <v-row class="justify-center">
          <v-col cols="4">
            <base-input placeholder="Type your email" v-model="email"
            :v="$v.email" :validate="validateEmail">
            </base-input>
          </v-col>
        </v-row>
        <v-row class="justify-center">
          <v-col cols="4">
            <base-input placeholder="Type your age" v-model.number="age"
            :v="$v.age" :validate="validateAge">
            </base-input>
          </v-col>
        </v-row>
        <v-row class="justify-center">
          <v-col cols="4">
            <base-input placeholder="Type your tip" v-model.number="tip"
            :v="$v.tip" :validate="validateTip">
            </base-input>
          </v-col>
        </v-row>
        <v-row class="justify-center">
          <v-col cols="4">
            <base-input placeholder="Type your password" v-model="password"
            :v="$v.password" :validate="validatePassword" type="password">
            </base-input>
          </v-col>
        </v-row>
        <v-row class="justify-center">
          <v-col cols="4">
            <base-input placeholder="Confirm your password" v-model="repeatedPassword"
                        :v="$v.repeatedPassword" :validate="validateRepeatedPassword"
            type="password">
            </base-input>
          </v-col>
        </v-row>
        <v-row class="justify-center">
          <v-col cols="4">
            <v-radio-group  v-model="sex"  label="Select your sex"
             @change="$v.sex.$touch()" @blur="$v.sex.$touch()"
             :error-messages="validateSex">
              <v-radio  value="male" label="Male" ></v-radio>
              <v-radio  value="female" label="Female"></v-radio>
            </v-radio-group>
          </v-col>
        </v-row>
        <v-row class="justify-center">
          <v-col cols="4">
            <v-btn block color="success" @click="sayHi"
                   :disabled="$v.$invalid">Send
            </v-btn>
          </v-col>
          <v-col cols="4">
            <v-btn block color="error" @click="sayBye">Cancel</v-btn>
          </v-col>
        </v-row>
      </v-form>

    </v-container>-->
  </v-app>
</template>
<script>
import { required, email, maxLength, minLength, numeric, between, decimal, sameAs } from "vuelidate/lib/validators";
import { apollo } from '@/plugins/vue-apollo';
import gql from 'graphql-tag';
import BaseInput from '@/components/inputs/base-input'
import {mapActions} from 'vuex'
export default {
  name: "App",
  components:{
    /*BaseInput*/
  },
  data(){
    return{
        user:{},
      /*To validate SELECTBOX and CHECKBOX is the same*/
        firstname: '',
        email: '',
        phone: null,
        age: null,
        tip: null, // Propina
        password: '',
        repeatedPassword: '',
        sex: null,
      validateFirstname: {
        required,
        maxLength: 15,
        minLength: 10
      },
      validatePhone: {
          required,
          numeric,
          maxLength: 9,
          minLength: 9
      },
      validateEmail: {
          required,
          email
      },
      validateAge:{
          required,
          numeric,
          maxLength: 2,
          between: '18 and 59'
      },
      validateTip:{
          required,
          decimal
      },
      validatePassword: {
          required,
          minLength: 6,
          maxLength: 12
      },
      validateRepeatedPassword: {
        required,
        minLength: 6,
        maxLength: 12,
        password: true
      }
    }
  },
  mounted() {
   // this.getUsers()
  },
  computed:{
    validateSex() {
      const errors = []
      if (!this.$v.sex.$dirty) return errors
      !this.$v.sex.required && errors.push('This field is required')
      return errors
    }
  },
  methods:{
    ...mapActions(['getUsers']),
    sayHi(){
      console.log("hi")
    },
    sayBye(){
      console.log("bye")
      this.$v.$reset()
      this.firstname=''
      this.phone = null
      this.email=''
      this.age= null
      this.tip = null
      this.password= ''
      this.repeatedPassword=''
      this.sex= null
      /*TESTING VUE TOASTIFY PLUGIN*/
      this.$vToastify.success("easy-peasy");
      /*TESTING VUE TOASTIFY PLUGIN*/
    },
    async get_Users(){
      const { data: {users: {data}} } = await apollo.query({
        query: gql(`query{
                            users{
                                data{
                                  name
                                    }
                                 }
                              }
                          `)
      })
      console.log(data);
      //let fakeData =  this.$cookies.set('customer','123_pass_ajd')
      //let getFakeData = this.$cookies.get("customer");
      //console.log(getFakeData);
    }
  },
  validations(){
    return{
      firstname: {
        required,
        maxLength: maxLength(15),
        minLength: minLength(10)
      },
      phone: {
        required,
        numeric,
        maxLength: maxLength(9),
        minLength: minLength(9)
      },
      email: {
        required,
        email
      },
      age: {
        required,
        numeric,
        maxLength: maxLength(2),
        between: between(18,59)
      },
      tip:{
        required,
        decimal
      },
      password: {
        required,
        minLength: minLength(6),
        maxLength: maxLength(12)
      },
      repeatedPassword: {
        required,
        minLength: minLength(6),
        maxLength: maxLength(12),
        sameAsPassword: sameAs('password')
      },
      sex:{
        required
      }
    }
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
