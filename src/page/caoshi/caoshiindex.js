import React from 'react';
import { hashHistory/* , Link */ } from 'react-router'
import { connect } from 'react-redux'
import {MyTabBarRedux} from '../../page/menu/model/TabBar'
import MyNavBar from '../../page/menu/model/NavBar'

import ComponentA  from '../../compoents/componentA'
import ComponentB  from '../../compoents/componentB'
import PropTypes from 'prop-types'
import CommentList  from '../../compoents/CommentList'
import withSubscription from '../../compoents/WithSubscription'

import { loginClick } from '../../api/index';
import Example  from '../../hook/hooks';

const CommentListWithSubscription = withSubscription(
    CommentList,
    (DataSource) => DataSource.getComments()
);
export default class jsdemo extends React.Component{
	//添加一个类构造函数来初始化状态 this.state //构造函数是唯一能够初始化 this.state 的地方。
	constructor(props){
		super(props);
		this.state={
			date:new Date(),
			//count:0
		};
		
		this.myRef=React.createRef();
		
		console.log("this.myRef",this.myRef)
	}
		
	// 声明Context对象属性
	static childContextTypes = {
    	propA: PropTypes.string,
    	methodA: PropTypes.func
  	}
	  // 返回Context对象，方法名是约定好的
	getChildContext () {
	    return {
	      propA: 'propA1111111',
	      methodA: () => 'methodA22222222222'
	    }
  	}
	
	componentDidMount() {
	  	let h = Window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; //浏览器高度  
	   	//let heardHeight=this.$refs.heardHeight.getDOMNode().offsetHeight;
	   	//console.log(heardHeight);
	   	let tabDOM1 = this.tabDOM;	    
	   	console.log(tabDOM1);
	   	console.log(process.env.NODE_ENV);
	   	 
   		// 使用
		let loginInfo = {
			method: 'get',
			data: {
				page: 1,
				limit: 15
			}
		}
		loginClick(loginInfo).then((response) => {
			console.log("www",response.data);
		// do something
		}).catch((error)=>{
			// error something
		})
	   	
	}
	//在组件从 DOM 中移除之前立刻被调用
	componentWillUnmount() {
	   
	}
	 
    render(){
    	console.log("active",this.props)
    	console.log(React.createContext())
    	const {Provider, Consumer} = React.createContext(); //创建context对象，并包含Provider、Consumer两个组件
    	const ThemeContext = React.createContext();
    	//Provider数据的生产者，通过value属性接收存储的公共状态，来传递给子组件或后代组件
    	//Consumer数据的消费者，通过订阅Provider传入的context的值，来实时更新当前组件的状态
    	//每当Provider的值发生改变时, 作为Provider后代的所有Consumers都会重新渲染
    	//觉得Props传递数据很繁琐，可以采用context,进行跨组件传递数据
    	/* <Provider />的value相当于现在的getChildContext()。*/
    	
    	console.log("Example",Example);
    	
        return(
            <div>            	
            	<MyNavBar ref={dom => {this.tabDOM = dom}} history={history} page="activeindex" titleName="活动" />
            	<ComponentA />
            	<ThemeContext.Provider value={{background: 'green', color: 'white'}}>
            		<ComponentB />
            	</ThemeContext.Provider>
            	<CommentListWithSubscription />
            	<div ref={this.myRef}>refs</div>
            	<Example />
            </div>
        );
    }
}
