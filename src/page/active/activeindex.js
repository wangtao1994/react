import React from 'react';
import { hashHistory/* , Link */ } from 'react-router'
import { connect } from 'react-redux'
import {MyTabBarRedux} from '../../page/menu/model/TabBar'
import MyNavBar from '../../page/menu/model/NavBar'
import { actionCreate } from '../../commonActions/fetch'
//使用注解的方式修改state和组件之间的传值
//mapStateToProps 方法允许我们将store中的数据作为props绑定到组件中
//mapDispatchToProps 第二个参数允许我们将action作为props绑定到组件中，
import MuseLeft from './museleft.js'
import CommRight from './commright.js'

@connect( 
	(state) => ({
		x: state.newNumber,
		y: state.newtext,
		number:state.number
	}),(dispatch)=>({
		getNewArticleDetail: () => {
        	 dispatch({type: "加"})
    	},
    	jian:()=>{
    		 dispatch({type: "减"})
    	}
	})
)
export default class jsdemo extends React.Component{
	//添加一个类构造函数来初始化状态 this.state //构造函数是唯一能够初始化 this.state 的地方。
	constructor(props){
		super(props);
		this.state={
			date:new Date(),
			muselist:[

				{
					id:1,
					mame:'鞋子'
				},
				{
					id:1,
					mame:'手机'
				},
				{
					id:1,
					mame:'音响'
				},
				{
					id:1,
					mame:'裙子'
				},
				{
					id:1,
					mame:'奶粉'
				},
				{
					id:1,
					mame:'鸡蛋'
				},
				{
					id:1,
					mame:'水果'
				},
			],
			shopmuse:[
				{
					id:1,
					name:"橘子",
					src:require('../../assets/we1.jpg')
				},
				{
					id:2,
					name:"橘子",
					src:require('../../assets/we2.jpg')
				},
				{
					id:3,
					name:"橘子",
					src:require('../../assets/we3.jpg')
				},
				{
					id:4,
					name:"橘子",
					src:require('../../assets/we4.jpg')
				},
				{
					id:5,
					name:"橘子",
					src:require('../../assets/we4.jpg')
				},
								{
					id:5,
					name:"橘子",
					src:require('../../assets/we4.jpg')
				},
								{
					id:5,
					name:"橘子",
					src:require('../../assets/we4.jpg')
				},
			]
			
		};
	}			
	componentDidMount() {
	   	let h = Window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; //浏览器高度  
	   	//let heardHeight=this.refs.heardHeight.getDOMNode().offsetHeight;
	   //console.log(heardHeight);
	   let tabDOM1 = this.tabDOM;	    
	   console.log(tabDOM1);
	    
	  }
	//在组件从 DOM 中移除之前立刻被调用
	  componentWillUnmount() {
	   
	  }
	 
    render(){
    	console.log("active",this.props)
/*    	var main=(
    		<div>
    			<h1>{this.props.number}</h1>
    			<h1>{this.props.y}</h1>
    			<button onClick={this.props.getNewArticleDetail}>加</button>
    			<button onClick={this.props.jian}>减</button>
    			这是活动页
    		</div>    		
    	)  */  	    	
        return(
            <div>            	
            	<MyNavBar ref={dom => {this.tabDOM = dom}} history={history} page="activeindex" titleName="活动" />
            	
            	<div className="content">
            		<MuseLeft muselist={this.state.muselist}/>
            		<CommRight shopmuse={this.state.shopmuse}/>
            	</div>	
            	<MyTabBarRedux history={history} page="activeindex" />              	
            </div>
        );
    }
}
