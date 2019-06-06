import React from 'react';
import { hashHistory/* , Link */ } from 'react-router'
import {MyTabBarRedux} from '../../page/menu/model/TabBar'
import MyNavBar from '../../page/menu/model/NavBar'
import { connect } from 'react-redux'
import './shopcar.css';
import bg3 from '../../assets/3.jpg';
/*import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory(); */
//类组件
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
			val:0,
			arr:[],
            totalPrice:0
		}
	}
		
	//在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。 如果你想和其他JavaScript框架一起使用，
	//可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异步操作阻塞UI)。
	componentDidMount() {
	   	    
	   
	  }
	//在组件从 DOM 中移除之前立刻被调用
	  componentWillUnmount() {
	   
	  }
	  
	  calcDown(){
	  	let count=1;
	  	count--
	  	this.setState({val: count});
	  	
	  }
	  
	  textValue(event){
	  	var count=event.target.value;//手动输入的值
		if(count==""){
			alert("数量不能为空");
		}
	  	console.log(count);
	  }
	  //加
	  calcAdd(e){
	  	let count=1;
	  	count++
	  	this.setState({val: count});
	  }
	  single(){
	  	
	  }
	 
    render(){
    	
    	var main=(
    		<div>
    			<ul  className="shopOul">
    				<li>
    					<p  className="title"><input onChange={()=>{this.single.bind(this)}} type="checkbox" />京东自选</p>
    					<div className="shop_content">
    						<div className="shopleft">
    							<input onChange={()=>{this.single.bind(this)}} type="checkbox" />
    						</div>
    						<div className="shopright">
    							<div className="shoplogo"><img className="shopimg" src={ bg3 }/></div>
    							<div className="desclp">
    								<p>国际品牌尼康6K高清日本进口相机</p>
    								<p>比加入时降价30元</p>
    								<p className="price">$344</p>
    								<div className="addNumber">
    									<span className="add" onClick={this.props.jian}>-</span>
    									<span className="Numberinput"><input onChange={this.textValue.bind(this)} type="text" value={this.props.number}/></span>
    									<span className="unadd" onClick={this.props.getNewArticleDetail}>+</span>
    								</div>
    							</div>
    						</div>
    					</div>
    				</li>
    				<li>    					
    					<div className="shop_content">
    						<div className="shopleft">
    							<input onChange={()=>{this.single.bind(this)}} type="checkbox"/>
    						</div>
    						<div className="shopright">
    							<div className="shoplogo"><img className="shopimg" src={ bg3 }/></div>
    							<div className="desclp">
    								<p>国际品牌尼康6K高清日本进口相机</p>
    								<p>比加入时降价30元</p>
    								<p className="price">$344</p>
    								<div className="addNumber">
    									<span onClick={this.calcDown.bind(this)} className="add">-</span>
    									<span className="Numberinput"><input onChange={this.textValue.bind(this)} type="text" value={this.state.val}/></span>
    									<span onClick={this.calcAdd.bind(this)} className="unadd">+</span>
    								</div>
    							</div>
    						</div>
    					</div>
    				</li>
    			</ul>
    		</div>    		
    	)
    	
    	
        return(
            <div>            	
            	<MyNavBar history={history} page="shopcarindex" titleName="购物车" />
            	  {main}
            	<MyTabBarRedux history={history} page="shopcarindex" />              	
            </div>
        );
    }
}
