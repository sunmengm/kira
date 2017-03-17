import home from './components/home.vue';
import column from './components/column.vue';
import user from './components/user.vue';
import article from './components/article.vue';
import login from './components/login.vue';
import reg from './components/reg.vue';
import follow from './components/follow.vue';
var routes=[
	{path:'/home',component:home},
	{path:'/column',component:column},
	{path:'/user',component:user},
	{path:'/article/:aid',component:article},
	{path:'/login',component:login},
	{path:'/reg',component:reg},
	{path:'/follow',component:follow},
	{path:'/',redirect:'/home'}

];

export default routes;