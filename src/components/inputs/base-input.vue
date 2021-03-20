<template>
  <div>
    <label class="">
      {{ label }}
    </label>
<!--    Props deleted for v-text-field:
      dense
      outlined
      flat
    class="mi-textfield"-->
    <v-text-field :type="type" :placeholder="placeholder" :disabled="disabled"
      :readonly="readonly" :autofocus="autofocus" hide-details="auto"
      :error-messages="modelError" @input="verify" @blur="verify"
      v-model="model" autocomplete="off" :prefix="prefix"
    />
  </div>
</template>
<script>
export default {
  props: {
    value: [String, Number],
    autocomplete: String,
    label: String,
    type: {
      default: () => {
        return 'text';
      },
    },
    disabled: {
      type: Boolean,
      default: () => {
        return false;
      },
    },
    readonly: {
      type: Boolean,
      default: () => {
        return false;
      },
    },
    autofocus: {
      type: Boolean,
      default: () => {
        return false;
      },
    },
    placeholder: String,
    prefix: String,
    validate: {
      type: Object,
      default: () => {
        return {
          required: false,
          email: false,
          numeric: false,
          alpha: false,
          alphaNum: false,
          maxLength: 0,
          minLength: 0,
          decimal: false,
          maxValue: 0,
          between: 0,
          password: false
          /*password: false,
          repeatedPassword: false*/
        };
      },
    },
    v: {
      type: Object,
      required: false,
    },
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
    modelError() {
      const errors = [];

      if (this.v) {

        if (!this.v.$dirty) return errors;
        //
        if (this.validate.required) {
          !this.v.required && errors.push('Field required');
        }
        if (this.validate.between) {
          !this.v.between && errors.push(`Number should be between ${this.validate.between}`);
        }
        if (this.validate.alpha) {
          !this.v.alpha && errors.push('This field only accepts letters');
        }

        if (this.validate.alphaNum) {
          !this.v.alphaNum && errors.push('This field only accepts letters and numbers');
        }

        if (this.validate.email) {
          !this.v.email && errors.push('Must be a valid e-mail');
        }

        if (this.validate.maxLength) {
          !this.v.maxLength && errors.push(`This field accepts upto ${this.validate.maxLength} characters`);
        }

        if (this.validate.minLength) {
          !this.v.minLength && errors.push(`This field accepts at least ${this.validate.minLength} characters`);
        }

        if (this.validate.decimal) {
          !this.v.decimal && errors.push(`Should be a decimal number`);
        }

        if (this.validate.numeric) {
          !this.v.numeric && errors.push(`This field only accepts numbers`);
        }

        if (this.validate.maxValue) {
          !this.v.maxValue && errors.push(`Maximum accepted value is : ${this.validate.maxValue}`);
        }
        if (this.validate.password) {
          !this.v.sameAsPassword && errors.push(`Passwords don't match`);
        }
       /* if (this.valida.password) {
          !this.v.required && errors.push(`Las contraseña es requerida`);
        }
        if (this.valida.repeatedPassword) {
          !this.v.sameAsPassword && errors.push(`Las contraseñas deben ser iguales`);
        }*/
      }
      return errors;
    },
  },
  methods: {
    verify() {
      if (this.v) {
        this.v.$touch();
      }
    },
  },
};
</script>

