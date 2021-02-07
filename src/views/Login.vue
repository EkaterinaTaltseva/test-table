<template>
  <v-card class="mx-auto" max-width="600">
    <v-card-text>
      Автоизация пользователя.
      <p> Для продолжения работы введите логин и пароль : admin / admin </p>
    </v-card-text>
  <v-form @submit.prevent="submit" >
    <v-container >
      <v-row class="mx-auto" >
        <v-spacer></v-spacer>
        <v-col cols="12" >
          <v-text-field
              v-model.trim="$store.state.email"
              label="login"
              required
          ></v-text-field>
        </v-col>
        <v-col cols="12" >
          <v-text-field
              v-model.trim="$store.state.password"
              label="password"
              required
          ></v-text-field>
        </v-col>
        <v-col cols="12" class="text-right" >
          <v-btn elevation="2"
                 type="submit"
          >Войти</v-btn>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </v-container>
  </v-form>
    </v-card>
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
      this.$route.meta.requiresAuth = true
      this.$router.push('/table')
    }
  }
}
</script>
<style scoped>
</style>
