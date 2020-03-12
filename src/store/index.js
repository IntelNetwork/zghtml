import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import permission from './modules/permission'
import user from './modules/user'
import tagsView from './modules/tagsView'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
 
  
  state:{
    'token':sessionStorage.getItem('token')?sessionStorage.getItem('token'):"",
    'memberId':sessionStorage.getItem('memberId')?sessionStorage.getItem('memberId'):"",
    'username':sessionStorage.getItem('username')?sessionStorage.getItem('username'):"",
   },
   mutations:{
    savetoken(state,parm){
        state.token=parm;  
        sessionStorage.setItem('token',parm);
    },
    saveMemberId(state,parm){
      state.memberId=parm;  
      sessionStorage.setItem('memberId',parm);
    },
    saveusername(state,parm){
      state.username=parm;  
      sessionStorage.setItem('username',parm);
    },
   },
   getters,
   modules: {
    app,
    user,
    permission,
     tagsView,
  },
})

export default store 
