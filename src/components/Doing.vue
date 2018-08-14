<template>
  <div>
    <div class="wrap">
      <ul>
        <li v-for="(item,index) in msg" v-if="item.doing" v-bind:key="index">
         <span @click="toDone(index)" class="hover">{{item.text}}</span>
         <span :style="{color: '#cccccc', fontSize: '12px', verticalAlign: 'bottom'}">({{item.addTime}})</span>
         <button :style="{float: 'right'}" @click.stop="deleteThing(index)">x</button>
         <button :style="{float: 'right'}" @click.stop="edit(index, item.text)">e</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Doing',
  props: ['msg'],
  methods: {
    toDone (index) {
      this.$emit('doingToDone', index)
    },
    deleteThing (index) {
      this.$store.commit('deleteThing', index)
    },
    edit (index, text) {
      let res = prompt('请编辑:', text)
      var obj = {
        type: 'editThing',
        index: index,
        text: res
      }
      if (res != null && res !== '') {
        this.$store.commit(obj)
      } else {
        alert('请输入事件')
      }
    }
  }
}
</script>

<style>
  .wrap{
    width: 350px;
    margin: 0 auto;
    text-align: left;
  }
  .hover{
    background-color: bisque;
    cursor: pointer;
  }
</style>
