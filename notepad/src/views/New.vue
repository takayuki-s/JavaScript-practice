<template>
  <div class="editor">
    <h1>New Memo</h1>
    <textarea name="memo" v-model="memoBody"></textarea>
    <button v-on:click="save">保存</button>
  </div>
</template>


<script>
export default {
  name: "new",
  data() {
    return {
      memoBody: ""
    }
  },
  methods: {
    save() {
      this.$store.commit("save", {
        body: this.memoBody
      })
      this.$router.push("/")
    }
  },
}
</script>