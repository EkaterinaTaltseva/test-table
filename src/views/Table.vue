<template>
  <div>
    <v-simple-table>
      <template v-slot:default>
        <thead>
        <tr>
          <th class="text-left " >
            <v-checkbox :value="$store.state.selected2"  @click="select" ></v-checkbox>
            <v-btn elevation="2"  @click="changeStatus('open')">Open</v-btn>
            <v-btn elevation="2"  @click="changeStatus('close')">Close</v-btn>
          </th>
          <th class="text-left"
              v-for="item in $store.state.headers"
              @click="ofSort(item.value, item.rising), item.rising = !item.rising "
              >
              {{ item.text }}
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in $store.state.dataTable" :key="item.number" >
          <td><v-checkbox v-model="$store.state.selected"  :value="item.number"></v-checkbox></td>
          <td>{{ item.number }}</td>
          <td @click="editItem(item)" >
            <v-icon small class="mr-2" > mdi-pencil </v-icon>
            {{ item.name }}
          </td>
          <td>{{ item.date }}</td>
          <td>{{ item.status }}</td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
    <table-edit></table-edit>
  </div>
</template>
<script>
import TableEdit from '@/components/TableEdit';
export default {
  methods: {
    changeStatus(param) {
      this.$store.dispatch('changeStatus', param)
    },
    select() {
      this.$store.dispatch('select')
    },
    ofSort(value, rising) {
      this.$store.dispatch('ofSort', {value, rising})
    },
    editItem (item) {
      this.$store.dispatch('editItem', item)
    },
  },
  components: {
    TableEdit
  }
}
</script>
<style scoped>
</style>
