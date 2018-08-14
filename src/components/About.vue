<template>
    <div>
      <p>路由参数: {{$route.params.id}}</p>
      <p>路由参数: {{id}}</p>
    </div>
</template>

<script>

export default {
  name: 'about',
  props: ['id'],
  computed: {
    content () {
      return this.$route.query.id
    }
  }
}
</script>

<style scoped>

</style>
