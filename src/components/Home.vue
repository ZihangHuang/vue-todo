<template>
  <div id="Home">
    <!--<Todo :msg="title" v-on:childWord="getChild"></Todo>-->
    <div>
      <p>输入要做的事：</p>
      <input type="text" v-model="newText" @keyup.enter="addThind">
    </div>
    <br/>
    <!--<Todo :msg="list" v-on:todoToDoing="todoToDoing"></Todo>-->
    <!--<Doing :msg="list" v-on:doingToDone="doingToDone"></Doing>-->
    <!--<Done :msg="list"></Done>-->
    <router-link to="/home/todo">要做的事({{todoNum}})&nbsp;&nbsp;</router-link>
    <router-link to="/home/doing">正在做的事({{doingNum}})&nbsp;&nbsp;</router-link>
    <router-link to="/home/done">已做完的事({{doneNum}})&nbsp;&nbsp;</router-link>
    <router-view :msg="list" v-on:todoToDoing="todoToDoing" v-on:doingToDone="doingToDone"/>
  </div>
</template>

<script>
// import Todo from './Todo'
// import Doing from './Doing'
// import Done from './Done'
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  // components: { Todo, Doing, Done },
  data () {
    return {
      title: '输入你要做的事：',
      newText: ''
      // childWord: ''
    }
  },
  computed: {
    ...mapGetters(['todoNum', 'doingNum', 'doneNum']),
    list () {
      return this.$store.state.list
    }
  },
  methods: {
    addThind () {
      this.$store.commit('addThing', this.newText)
      this.newText = ''
    },
    todoToDoing (index) {
      this.$store.commit('todoToDoing', index)
    },
    doingToDone (index) {
      this.$store.commit('doingToDone', index)
    }
  }
}
</script>

<style>

</style>
