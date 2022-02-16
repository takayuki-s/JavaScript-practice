<template>
  <div class="editor">
    <h1>Edit Memo</h1>
    <textarea name="memo" v-model="memo.body"></textarea>
    <button>保存</button>
  </div>
</template>

<script>
export default {
  name: "edit",
  computed: {
    memo() {
      let id = this.$route.params["id"]
      return this.$store.state.memos.find(memo => memo.id == id)
    }
  },
}
</script>