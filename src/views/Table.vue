<template>
  <v-card max-width="1000" class="mx-auto" >

    <div class="pt-10 pl-5">

        <v-btn elevation="2"
               class="mr-2 mb-1"
               x-small
               @click="changeStatus('open'), select"
        >Open</v-btn>
        <v-btn elevation="2"
               class="mb-1"
               x-small
               @click="changeStatus('close'), select"
        >Close</v-btn>
    </div>
    <v-simple-table>
      <template v-slot:default>
        <thead>
        <tr >
          <th class="text-left" >
            <v-checkbox :value="$store.state.selectedAll"
                        @click="select"
                        class="d-inline-block"
            ></v-checkbox>
          </th>
          <th class="text-left "
              v-for="item in headers"
              :key="item.number"
              @click="ofSort(item)"
              >
              <v-icon small class="mr-2" >mdi-swap-vertical</v-icon>
              {{ item.text }}
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in $store.state.dataTable"
            :key="item.number"
        >
          <td >
            <v-checkbox class="d-inline-block"
                        v-model="$store.state.selected"
                        :value="item.number"
            ></v-checkbox></td>
          <td >{{ item.number }}</td>
          <td  @click="editItem(item)" >
            <v-icon small class="mr-2" > mdi-pencil </v-icon>
            {{ item.name }}
          </td>
          <td >{{ item.date }}</td>
          <td >{{ item.status }}</td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
    <table-edit></table-edit>
  </v-card>
</template>
<script>
import TableEdit from '@/components/TableEdit';
export default {
  computed: {
    headers() {
      return this.$store.state.headers
    }
  },
  methods: {
    changeStatus(param) {
      this.$store.commit('changeStatus', param)
      this.select()
    },
    select() {
      this.$store.commit('select')
    },
    ofSort(item) {
      this.$store.commit('ofSort', item)
    },
    editItem (item) {
      this.$store.commit('editItem', item)
    },
  },
  components: {
    TableEdit
  },
}
</script>
<style scoped>
td {
  word-wrap: break-word;
  max-width: 250px;
}
</style>
