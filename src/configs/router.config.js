import React from 'react';
import { HashRouter as Router, Route ,BrowserRouter} from 'react-router-dom'
//import { Router, Route, IndexRoute, hashHistory,browserHistory/* , Redirect */ } from 'react-router'
import index from '../page/menu/App' // 主页基础
import activeindex from '../page/active/activeindex' // 活动
import shopcarindex from '../page/shopcar/shopcar' // 购物车
import myindex from '../page/my/my' // 设置中心-我的
import loginIndex from '../page/login/loginIndex' // 登录
//import createBrowserHistory from 'history/createBrowserHistory';
//const history = createBrowserHistory(); 

export default () => (	
  <Router>
  	<div>
	    <Route path="/" exact component={index}/>         
	      {/** *菜单 开始 */}
	    <Route path="/activeindex" component={activeindex}/>  
	    <Route path="/shopcarindex" component={shopcarindex}/>
	    <Route path="/myindex" component={myindex}/>
	      {/** *菜单 结束 */}        
	    <Route path="/login"  component={loginIndex}/>
	  </div>  
  </Router>
)








