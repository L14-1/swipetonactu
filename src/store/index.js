import Vue from 'vue'
import Vuex from 'vuex'

const axios = require('axios');


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectThemesWindow : '',
    returnedArticles : [],
    status : '',
  },
  mutations: {
    returnedArticles: function (state, returnedArticles) {
      state.returnedArticles = returnedArticles;
    },
    setStatus: function (state, status) {
      state.status = status;
    },
  },
  actions: {
    getSpecifiedArticles: ({commit}, specifiedArticles) => {
      commit('setStatus', 'loading');
      let articles = { selectedThemes : specifiedArticles}
      axios({
        method: 'post',
        url: 'https://swipetonactuapi.herokuapp.com/news',
        data: articles,
        headers: {
          'content-type': 'application/json'
        }
      })
        .then(function (res) {
          commit('returnedArticles', res.data);
          commit('setStatus', '');
        })
        .catch(function (err) {
          return err;
        })
    }
  },
  modules: {
  }
})
