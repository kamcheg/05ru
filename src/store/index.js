import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    clipboard: [],
    activeIndex: -1
  },
  getters: {
    content: state => state.clipboard[state.activeIndex]
  },
  mutations: {
    saveCurrentContent: (state, content) => {
      state.clipboard.push(content)
      state.activeIndex++
    },
    transition: (state, payload) => {
      if (payload === 'prev') {
        if (state.activeIndex === 0) { return }
        state.activeIndex--
      } else if (payload === 'next') {
        if (state.activeIndex === state.clipboard.length - 1) { return }
        state.activeIndex++
      }
    },
  },
})