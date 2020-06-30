<template>
  <v-app id="contact-us">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center">
          <v-col cols="8" sm="8">
            <v-card class="elevation-12">
              <v-toolbar color="teal" dark flat>
                <v-toolbar-title>Contact Us</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form ref="contactUsForm" v-model="isValid">
                  <v-text-field
                    color="teal"
                    v-model="values.name"
                    :rules="contactUsRulesName"
                    label="Name"
                    prepend-icon="mdi-account"
                    type="text"
                  ></v-text-field>
                  <v-text-field
                    color="teal"
                    v-model="values.emailId"
                    :rules="contactUsRulesEmailId"
                    label="EmailId"
                    prepend-icon="mdi-account"
                    type="text"
                  ></v-text-field>
                  <v-textarea
                    color="teal"
                    :rules="contactUsRulesMessage"
                    v-model="values.message"
                    label="Message"
                    prepend-icon="mdi-android-messages"
                  ></v-textarea>
                </v-form>
              </v-card-text>
              <v-card-actions class="justify-center">
                <v-btn @click="sendMail()" color="teal" class="white--text" :disabled="!isValid"
                  >Send</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "ContactUs",
  data() {
    return {
      values: {
        name: null,
        emailId: null,
        message: null,
      },
      show: true,
      contactUsRulesName: [
        (v) => !!v || "Required",
        (v) => !!v || "Name is required",
      ],
      contactUsRulesEmailId: [
        (v) => !!v || "Required",
        (v) => /.+@.+\..+/.test(v) || "Email is required",
      ],
      contactUsRulesMessage: [
        (v) => !!v || "Required",
        (v) => (v && v.length >= 10) || "Min 10 characters",
      ],
      isValid: true
    };
  },
  methods:{
    sendMail(){
      console.log('send message');
      this.$refs.contactUsForm.reset();
    }

  }
};
</script>

<style>
.v-application--wrap {
  min-height: 0px !important;
}
</style>
