<template>
  <v-form @submit.prevent="submit">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
              v-model.trim="$store.state.email"
              label="login"
              required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
              v-model.trim="$store.state.password"
              label="password"
              required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-btn elevation="2"
                 type="submit"
          >Войти</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<script>
export default {

  methods: {
    submit() {
      if (this.$store.getters.isValid) {
        this.login()
      }
    },
    login() {
      this.$store.state.isAuth = true
      this.$router.push('/table')
    }
  },
}
</script>
<style scoped>
</style>
