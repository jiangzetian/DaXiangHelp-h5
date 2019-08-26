import Vue from 'vue'
import Router from 'vue-router'
import Layout from './views/Layout'

import Home from './views/Home'
import Call from './views/Call'
import Cooperation from '@/views/Cooperation'
import User from './views/User'
import Details from './views/Details'
import New from '@/views/New'
import Change from '@/views/Change'
import ChangeShow from '@/views/ChangeShow'
import message from '@/views/message'
import qqmap from '@/components/qqmap'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '',
			component: Layout,
			children:[
				{
					path: '/',
					name: 'home',
					component: Home,
					meta: {
						title: "大湘来帮忙",
					},
				},
				{
					path: 'cooperation',
					component: Cooperation,
					name:'cooperation',
					meta: {
						title: "合作伙伴",
					},
				},
				{
					path: 'user',
					component: User,
					name:'user',
					meta: {
						title: "我的",
					},
				},
			]
		},
		{
		path: '/call',
		name: 'call',
		component: Call,
		meta: {
			title: "呼叫大湘",
			}
		},
		{
		  path: '/new/:new_id',
		  name: 'New',
		  component: New,
		  meta: {
		  	title: "呼叫大湘",
		  	}
		},
		{
		  path: '/details/:page_name',
		  name: 'Details',
		  component: Details,
		},
		{
			path: '/qqmap',
			name: 'qqmap',
			component: qqmap,
		},
		{
			path: '/changeshow/:new_id',
			name: 'changeshow',
			component: ChangeShow,
		},
		{
			path: '/change/:new_id',
			name: 'change',
			component: Change,
		},
		{
			path: '/message/:message_id',
			name: 'message',
			component: message,
		}
	 ]
})
