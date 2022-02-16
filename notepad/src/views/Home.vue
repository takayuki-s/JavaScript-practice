<template>
  <div class="home">
    <ul v-for="memo in newest" :key="memo.id">
      <li>{{ memo.body }}</li>
    </ul>
  </div>
</template>

<style>
textarea {
  width: 100%;
  height: 10em;
}
button {
  border: 1px solid #333;
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  margin-top: 10px;
}
</style>

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
