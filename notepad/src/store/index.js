// vue 2
// import Vue from "vue";
// import Vuex from "vuex";

// Vue.use(Vuex);

// export default new Vuex.Store({
//   state: {
//     memos: [{ id: 1, body: "サンプル" }],
//   },
// });

import { createStore } from "vuex";

export const store = createStore({
  state: {
    memos: [{ id: 1, body: "サンプルのメモです" }],
  },
  mutations: {
    save(state, memo) {
      // 新しいidを割り振る
      let max = state.memos[state.memos.length - 1].id;
      memo.id = max + 1;

      state.memos.push(memo);
    },
  },
});
