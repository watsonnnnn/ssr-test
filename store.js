const Vue = require('vue');
const Vuex = require('vuex');

Vue.use(Vuex)

const fetchItem1 = require('./api');

module.exports = function createStore () {
  return new Vuex.Store({
    state: {
      items: {}
    },
    actions: {
      fetchItem ({ commit }, id) {
        // `store.dispatch()` 会返回 Promise，
        // 以便我们能够知道数据在何时更新
        return fetchItem1(id).then(item => {
          commit('setItem', { id, item })
        }).catch(e=>{
        })
      }
    },
    mutations: {
      setItem (state, { id, item }) {
        Vue.set(state.items, id, item)
      }
    }
  })
}