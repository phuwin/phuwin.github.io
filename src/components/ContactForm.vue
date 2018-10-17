<template>
  <div id="contact-form">
    <v-container>
      <h1 class="text-xs-center">Contact</h1>
      <v-form ref="contactForm" @submit.prevent="handleSubmit">
        <v-text-field :rules="requiredRules" label="Name" type="text" v-model="name"></v-text-field>
        <v-text-field :rules="emailRules" label="Email" type="text" name="email" v-model="email"></v-text-field>
        <v-textarea :rules="requiredRules" name="message" label="Message" v-model="message"></v-textarea>
        <vue-recaptcha id="recaptcha" ref="recaptcha" @verify="onVerify" @expired="onExpired" sitekey="6LcOZ3UUAAAAANlAbvfwYl-_VZtP0wRa4xQjCFR1">
        </vue-recaptcha>
        <v-btn class="white" block type="submit">Send</v-btn>
        <v-alert :value="alert" type="error">
          Please confirm that you are not a robot
        </v-alert>
        <v-alert :value="success" type="success">
          Your message has been sent to me
        </v-alert>
      </v-form>
    </v-container>
  </div>
</template>
<script>
  import * as emailjs from 'emailjs-com'
  import VueRecaptcha from 'vue-recaptcha'
  export default {
    name: 'ContactForm',
    components: {VueRecaptcha},
    data () {
      return {
        email: '',
        name: '',
        message: '',
        verifed: false,
        alert: false,
        success: false,
        requiredRules: [
          value => !!value || 'Required'
        ],
        emailRules: [
          value => !!value || 'Required',
          value => this.validateEmail(value) || 'The email is not valid'
        ]
      }
    },
    created () {
      emailjs.init('user_VVLgROpBmbV6zNNQzz9lC')
    },
    methods: {
      handleSubmit () {
        if (this.$refs.contactForm.validate() && this.verifed) {
          this.alert = false
          this.sendEmail()
        } else this.alert = true
      },
      async sendEmail () {
        const params = {
          'email': this.email,
          'name': this.name,
          'message': this.message
        }
        const serviceId = 'default_service'
        const templateId = 'template_VU3EhyxScc'
        try {
          await emailjs.send(serviceId, templateId, params)
          this.afterSendEmail()
        } catch (e) {
          console.error(e)
          this.afterSendEmail()
        }
      },
      afterSendEmail () {
        this.refreshForm()
        this.success = true
        setTimeout(() => {
          this.success = false
        }, 3000)
      },
      refreshForm () {
        this.email = ''
        this.message = ''
        this.name = ''
        this.verifed = false
        this.$refs.recaptcha.reset()
        this.$refs.contactForm.reset()
      },
      onVerify () {
        console.log('verified')
        this.verifed = true
        this.alert = false
      },
      onExpired () {
        console.log('unverified')
        this.verifed = false
      },
      validateEmail (email) {
        return /\S+@\S+\.\S+/.test(email)
      }
    }
  }
</script>
<style scoped>
  #recaptcha {
    margin:15px 0px;
  }
  @media screen and (max-width:350px){
    #recaptcha {
      transform:scale(.95);
      transform-origin: left;
    }
  }
</style>

