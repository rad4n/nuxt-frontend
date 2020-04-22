import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      list: {}
    },
    mutations: {
      setList (state, data) {
        state.list = data
      }
    },
    // actions:{
    //     storeSearchData(search) {
    //         return (() => {
    //             //MENGIRIM REQUEST KE SERVER DENGAN METHOD GET
    //             axios(`http://demo5096311.mockable.io/api/search?keyword=${search.location}&start_date=2020-05-04&end_date=2020-06-04`, {
    //                 crossDomain: true
    //             })
    //             .then((data) => {
    //                 //JIKA BERHASIL, MAKA LOAD DATA TERBARU
    //                 this.$store.commit('setList', data.data.building)
    //             })
    //             .catch((error) => {
    //                 //commit('SET_ERRORS', error.response.data)
    //                 console.log('error');
    //             })
    //         })
    //     }
    // }
  })
}

export default createStore