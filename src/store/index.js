import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAuth: false,
    email: '',
    password: '',
    validEmail: 'admin',
    validPassword: 'admin',
    dialog: false,
    dialogDelete: false,
    selected2: false,
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

  },
  actions: {
    ofSort(context, {value, rising}) {
      if (rising) {
        context.state.dataTable.sort((a, b) => {
          if (a[value] > b[value]) return 1
          if (a[value] === b[value]) return 0
          if (a[value] < b[value]) return -1}
        )
      } else if (!rising) { context.state.dataTable.reverse() }
    },
    changeStatus(context, payload) {
      context.state.selected.forEach(item1 => {
        context.state.dataTable.forEach(item2 => {
          if (item1 === item2.number) {
            item2.status = payload
          }
        })
      })
      context.state.selected2 = true
      context.dispatch('select')
    },
    select(context) {
      if (!context.state.selected2) {
        context.state.dataTable.forEach(i => context.state.selected.push(i.number))
        context.state.selected2 = true
      }else if (context.state.selected2) {
        context.state.selected.splice(0,context.state.selected.length)
        context.state.selected2 = false
      }
    },
    editItem (context, item) {
      context.state.editedIndex = context.state.dataTable.indexOf(item)
      context.state.editedItem = Object.assign({}, item)
      context.state.dialog = true
    },
    close (context) {
      context.state.dialog = false
        context.state.editedItem = Object.assign({}, context.state.defaultItem)
        context.state.editedIndex = -1
    },

    save (context) {
      if (context.state.editedIndex > -1) {
        Object.assign(
          context.state.dataTable[context.state.editedIndex],
          context.state.editedItem
        )
      } else { context.state.dataTable.push(context.state.editedItem) }
      context.dispatch('close')
    },
  },
  modules: {}
})
