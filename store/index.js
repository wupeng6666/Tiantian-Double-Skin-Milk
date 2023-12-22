import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		name:'helloVueX',
		store: {},
		cart: [],
		orderType: 'takein',
		address: {},
		member: {},
		order: {}
	},
	getters: {
		isLogin: state => Object.keys(state.member).length > 0	//是否登录
	},
	mutations: {
		SET_ORDER_TYPE(state, type) {
			state.orderType = type
		},
		SET_MEMBER(state, member) {
			state.member = member
		},
		SET_ADDRESS(state, address) {
			state.address = address
		},
		SET_ADDRESSES(state, addresses) {
			state.addresses = addresses
		},
		SET_STORE(state, store) {
			state.store = store
		},
		SET_CART(state, cart) {
			state.cart = cart
		},
		REMOVE_CART(state) {
			state.cart = []
		},
		SET_ORDER(state, order) {
			state.order = order
		},
		SET_NAME(state, name) {
			state.name = name
		}
	}
})

export default store