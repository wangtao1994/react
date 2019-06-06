import React from 'react';
import { hashHistory/* , Link */ } from 'react-router'
import '../../css/App.css';
import {MyTabBarRedux} from '../../page/menu/model/TabBar'
import MyNavBar from '../../page/menu/model/NavBar'
/*import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory(); */
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
import imgurl from '../../assets/1.jpg'
import yuan_jx3 from '../../assets/yuan_jx3.png'
//类组件
export default class jsdemo extends React.Component{
	//添加一个类构造函数来初始化状态 this.state //构造函数是唯一能够初始化 this.state 的地方。
	constructor(props){
		super(props);
		this.state={date:new Date()};				
		 
	}		
	//在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。 如果你想和其他JavaScript框架一起使用，
	//可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异步操作阻塞UI)。
	componentDidMount() {
	   	    
	   
	  }
	//在组件从 DOM 中移除之前立刻被调用
	  componentWillUnmount() {
	   
	  }
	 
    render(){    	
    	var main=(
    		<div>
    			<div className="login">
    				<img src={ imgurl }/>
    			</div>
    			<div className="conten_list">
    				<ul>
    					<li>我的昵称: Love song</li>
    					<li>我的订单<img src={ yuan_jx3 }/></li>
    					<li>我的购物车<img src={ yuan_jx3 }/></li>
    					<li>我的收藏<img src={ yuan_jx3 }/></li>
    					<li>个人评价<img src={ yuan_jx3 }/></li>
    					<li>我的优惠卷<img src={ yuan_jx3 }/></li>
    				</ul>
    			</div>
    			<Button className="btn" type="primary">退出登录</Button>
    		</div>    		
    	)    	    	
        return(
            <div>            	
            	<MyNavBar history={history} page="myTab" titleName="我的" />
            	  {main}
            	<MyTabBarRedux history={history} page="myTab" />              	
            </div>
        );
    }
}
