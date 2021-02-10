import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    email: '',
    password: '',
    validEmail: 'admin',
    validPassword: 'admin',
    dialog: false,
    dialogDelete: false,
    selectedAll: false,
    selected: [],
    editedIndex: -1,
    editedItem: {number: 0, name: '', date: 0, status: '',},
    defaultItem: {number: 0, name: '', date: 0, status: '',},
    headers: [
      { text: '№', value: 'number', rising: true},
      { text: 'Название',  value: 'name', rising: true},
      { text: 'Дата', value: 'date', rising: true },
      { text: 'Статус', value: 'status', rising: true },
    ],
    dataTable : [
      {number: 159, name: 'Frozen', date: '2013, 12, 15', status: 'open'},
      {number: 237, name: 'Ice', date: '2013, 09, 04', status: 'open'},
      {number: 262, name: 'Eclair', date: '2011, 05, 08', status: 'close'},
      {number: 305, name: 'Cupcake', date: '2000, 07, 12', status: 'close'},
      {number: 356, name: 'Gingerbread', date: '2015, 03, 03', status: 'open'},
      {number: 452, name: 'Donut', date: '2025, 06, 17', status: 'close'},
      {number: 518, name: 'KitKat', date: '2022, 08, 22', status: 'open'},
    ],
  },
  getters: {
    isValid(state) {
      return state.email === state.validEmail && state.password === state.validPassword
    }
  },
  mutations: {
    select(state) {
      if (!state.selectedAll) {
        state.dataTable.forEach(i => state.selected.push(i.number))
        state.selectedAll = true
      }else if (state.selectedAll) {
        state.selected.splice(0,state.selected.length)
        state.selectedAll = false
      }
    },
    ofSort(state, item) {
      state.dataTable.sort((a, b) => {
        if (a[item.value] > b[item.value]) return 1
        if (a[item.value] === b[item.value]) return 0
        if (a[item.value] < b[item.value]) return -1
      })
      if (!item.rising) { state.dataTable.reverse()}
      item.rising = !item.rising
    },
    changeStatus(state, payload) {
      state.selected.forEach(selectedItem => {
        state.dataTable.forEach(dataTableItem => {
          if (selectedItem === dataTableItem.number) {
            dataTableItem.status = payload
          }
        })
      })
      state.selectedAll = true
    },
    editItem (state, item) {
      state.editedIndex = state.dataTable.indexOf(item)
      state.editedItem = Object.assign({}, item)
      state.dialog = true
    },
    save (state) {
      if (state.editedIndex > -1) {
        Object.assign(
          state.dataTable[state.editedIndex],
          state.editedItem
        )
      } else { state.dataTable.push(state.editedItem) }
    },
    close (state) {
      state.dialog = false
      state.editedItem = Object.assign({}, state.defaultItem)
      state.editedIndex = -1
    },
  },
  actions: {},
  modules: {}
})
