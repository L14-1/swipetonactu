import Vue from 'vue'
import Vuex from 'vuex'

const axios = require('axios');


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectThemesWindow : '',
    returnedArticles : [],
    status : '',
    articleUrl: 'https://lefigaro.fr/',
    articleWindow: false,
  },
  mutations: {
    returnedArticles: function (state, returnedArticles) {
      state.returnedArticles = returnedArticles;
    },
    setStatus: function (state, status) {
      state.status = status;
    },
    actionWindow: function (state) {
      state.articleWindow = !state.articleWindow;
    },
    actionWindowUrl: function (state, articleUrl) {
      state.articleUrl = articleUrl;
    }
  },
  actions: {
    getSpecifiedArticles: ({commit}, specifiedArticles) => {
      commit('setStatus', 'loading');
      let articles = specifiedArticles;
      axios({
        method: 'post',
        url: 'https://swipetonactuapi.herokuapp.com/news',
        // url: 'http://localhost:8000/news',
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
    },
  },
  modules: {
  }
})
