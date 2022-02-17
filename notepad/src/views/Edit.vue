<template>
  <div class="editor">
    <h1>Edit Memo</h1>
    <textarea name="memo" v-model="memo.body"></textarea>
    <button v-on:click="save">保存</button>
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
  methods: {
    save() {
      this.$store.commit("update", {
        id: this.memo.id,
        body: this.memo.body
      })
      this.$router.push("/")
    }
  },
}
</script>