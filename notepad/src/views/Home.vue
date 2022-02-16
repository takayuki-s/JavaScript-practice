<template>
  <div class="home">
    <ul v-for="memo in newest" :key="memo.id">
      <li>{{ memo.body }}</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Home',
  computed: {
    newest() {
      return this.$store.state.memos.slice().reverse()
    }
  }
}
</script>
