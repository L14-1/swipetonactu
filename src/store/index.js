import Vue from 'vue'
import Vuex from 'vuex'

const axios = require('axios');


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectThemesWindow : '',
    returnedArticles : [],
  },
  mutations: {
    returnedArticles: function (state, returnedArticles) {
      state.returnedArticles = returnedArticles;
    }
  },
  actions: {
    getSpecifiedArticles: ({commit}, specifiedArticles) => {
      
      let articles = { selectedThemes : specifiedArticles}
      axios({
        method: 'post',
        url: 'http://192.168.1.24:8000/news',
        data: articles,
        headers: {
          'content-type': 'application/json'
        }
      })
        .then(function (res) {
          commit('returnedArticles', res.data)
        })
        .catch(function (err) {
          return err;
        })
    }
  },
  modules: {
  }
})
