import React from 'react';
import { connect } from 'react-redux'
import { NavBar, Icon } from 'antd-mobile';

export default class jsdemo extends React.Component{
	//添加一个类构造函数来初始化状态 this.state //构造函数是唯一能够初始化 this.state 的地方。
	constructor(props){
		super(props);
		this.state={
			date:new Date(),
			height:0,
			active:0
		};
	}
		
	//在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。 如果你想和其他JavaScript框架一起使用，
	//可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异步操作阻塞UI)。
	componentDidMount() {
		let h = Window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; //浏览器高度  
		let newHgight=h-95	
	   	this.setState({
	   		height:newHgight  		
	   	})
	   
	  }
	//在组件从 DOM 中移除之前立刻被调用
	componentWillUnmount() {
	   
	}
	  
	hed(index,id){
		this.setState({
			active:index,			
		})
	}
	
	
    render(){    	  	    	
        return(
            <div className="muse">            	
            	<ul style={{textAlign:'center',height:this.state.height+'px'}}>
            		{this.props.muselist.map((val,index)=>(
							<li key={ index } className={this.state.active===index?'active': ''} onClick={()=>this.hed(index,val.id)}>								
								{val.mame}							
							</li>
						))}	
            	</ul>
            </div>
        );
    }
}
