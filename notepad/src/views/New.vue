<template>
  <div class="editor">
    <Header>New Memo</Header>
    <textarea name="memo" v-model="memoBody"></textarea>
    <button v-on:click="save">保存</button>
  </div>
</template>


<script>
import Header from "@/components/Header.vue"
export default {
  name: "new",
  components: {
    Header
  },
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