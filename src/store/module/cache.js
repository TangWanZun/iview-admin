import { getTableList } from "@/api/currency.js";
export default {
	namespaced: true,
  state: {
		//这个是用来进行penl与其modal页面进行互通的缓存
		//当点击刷新按钮时候，这个变量将会被滞空
    constChche:{
		}
  },
  getters: {
  },
  mutations: {
    setDynamicList(state,val){
			state.constChche.dynamicList = val;
			state.constChche = Object.assign({},state.constChche)
    }
  },
  actions: {
		//获取公司信息表
    getDynamicList({commit,state},params){
			//当缓存中不存在的时候
			// if(!state.constChche.dynamicList){
				getTableList({
					url:'/Common/GetDynamicList',
				})
					.then((res)=>{
						commit('setDynamicList',res.data);
					})
			// }
		}
  }
}
