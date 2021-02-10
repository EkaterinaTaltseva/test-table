<template>
  <v-dialog v-model="$store.state.dialog" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline">Редактировать</span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-text-field v-model="$store.state.editedItem.number"
                            label="number"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field v-model="$store.state.editedItem.name"
                            label="name"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field v-model="$store.state.editedItem.date"
                            label="date"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field v-model="$store.state.editedItem.status"
                            label="status"
              ></v-text-field>
            </v-col>

          </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
        <v-btn color="blue darken-1" text @click="save">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  watch: {
    dialog (val) {
      val || this.close()
    }
  },
  methods: {
    save () {
      this.$store.commit('save')
      this.close()
    },
    close () {
      this.$store.commit('close')
    },
  }
}
</script>
<style scoped>
</style>
