import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	list:[]
  },
  mutations: {
	changeList: function(state,list) {
		state.list = list;
	}
  },
  actions: {
	getList: function({commit}) {
		axios.get("/api/shopping").then((res) => {
			commit("changeList",res.data);
		}).catch(err => {
			console.log(err)		
		})
	},
	addToList: function(context, item) {
		axios.post("/api/shopping",item).then(() => {
			context.dispatch("getList");
		}).catch(err => {
			console.log(err)		
		})
	},
	removeFromList: function(context,id) {
		axios.delete("/api/shopping/"+id).then((res) => {
			if(res.status === 200) {
				context.dispatch("getList");
			} else {
				console.log("Remove from list. Server status:"+res.status);
			}
		}).catch(err => {
			console.log(err)		
		})
	},
	editItem:function(context,item) {
		axios.put("/api/shopping/"+item.id,item).then((res) => {
			if(res.status === 200) {
				context.dispatch("getList");
			} else {
				console.log("Edit item. Server status:"+res.status);
			}
		}).catch(err => {
			console.log(err)		
		})
	}
  }
})
