import Vue from 'vue'   //引入vue
import Vuex from 'vuex' //引入vuex

Vue.use(Vuex)  //使用vuex

const store = new Vuex.Store({
    state:{
        count:1
    }
});

export default store