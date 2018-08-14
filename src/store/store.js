import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    list: JSON.parse(localStorage.getItem('list')) || []
  },
  getters: {
    todoNum: state => (state.list.filter(item => item.todo)).length,
    doingNum: state => (state.list.filter(item => item.doing)).length,
    doneNum: state => (state.list.filter(item => item.done)).length
  },
  mutations: {
    saveData (state) {
      localStorage.setItem('list', JSON.stringify(state.list))
    },
    addThing (state, payload) {
      const time = new Date()
      const addTime = (time.getMonth() + 1) + '.' + time.getDate() + '/' + time.getHours() + ':' + time.getMinutes()
      state.list.push({text: payload, addTime: addTime, todo: true, doing: false, done: false})
      this.commit('saveData')
    },
    todoToDoing (state, index) {
      state.list = [...state.list.slice(0, index),
        {text: state.list[index].text, addTime: state.list[index].addTime, todo: false, doing: true, done: false},
        ...state.list.slice(parseInt(index + 1))]
      this.commit('saveData')
    },
    doingToDone (state, index) {
      state.list = [...state.list.slice(0, index),
        {text: state.list[index].text, addTime: state.list[index].addTime, todo: false, doing: false, done: true},
        ...state.list.slice(parseInt(index + 1))]
      this.commit('saveData')
    },
    deleteThing (state, index) {
      state.list = state.list.filter((item, i) => i !== index)
      this.commit('saveData')
    },
    editThing (state, payload) {
      let index = payload.index
      let text = payload.text
      state.list = [...state.list.slice(0, index),
        {text: text, addTime: state.list[index].addTime, todo: state.list[index].todo, doing: state.list[index].doing, done: state.list[index].done},
        ...state.list.slice(parseInt(index + 1))]
      this.commit('saveData')
    }
  }
})

export default store
