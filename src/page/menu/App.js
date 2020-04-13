import React from 'react';
import { TabBar,Carousel, WingBlank } from 'antd-mobile';
import '../../css/footer.css';
import '../../css/App.css';

import {connect} from 'react-redux';
import {MyTabBarRedux} from './model/TabBar'
import MyNavBar from './model/NavBar'
import { hashHistory, browserHistory /* , Link */ } from 'react-router'
import bg1 from '../../assets/1.jpg';
import bg2 from '../../assets/2.jpg';
import bg3 from '../../assets/3.jpg';

//关联redux
@connect((state) => ({	    
    homeListObj: state.homeListObj,
	selectedTab: state.selectedTab,
	isFetching: state.isFetching.isFetching  
}), (dispatch) => ({
    indexListNextPage: (url, type, json, isFetching) => {
        dispatch(doFetch(url, type, json, '_TOPICS'))
    },
    getNewArticleDetail: () => {
        dispatch({type: 'PRESS_HOME_ITEM'})
    }
}))
export default class index extends React.Component{
	constructor(props) {
		super(props);
	    this.state = {
	     	data: [bg1, bg2, bg3],
			imgHeight: 176,
			listdata: [{
					id: 1,
					name: "京东超市",
					src: require('../../assets/app1.png')
				},
				{
					id: 2,
					name: "全球购",
					src: require('../../assets/app2.png')
				},
				{
					id: 3,
					name: "充值中心",
					src: require('../../assets/app3.png')
				},
				{
					id: 4,
					name: "服装城",
					src: require('../../assets/app4.png')
				},
				{
					id: 5,
					name: "京东金融",
					src: require('../../assets/app5.png')
				},
				{
					id: 6,
					name: "领劵",
					src: require('../../assets/app6.png')
				},
				{
					id: 7,
					name: "物流查询",
					src: require('../../assets/app7.png')
				},
				{
					id: 8,
					name: "京东超市",
					src: require('../../assets/app8.png')
				},

			],
			son:[{
		      		id:1,
		      		name:'杨家包子铺',
		      		address:'南山区高薪南12道方大大厦',
		      		time:'2018-01-23',
		      		src:require('../../assets/app8.png')
	      		},
	      		{
		      		id:2,
		      		name:'希希炸货铺',
		      		address:'南山区高薪南12道方大大厦',
		      		time:'2018-01-23',
		      		src:require('../../assets/app8.png')
	      		},
	      		{
		      		id:3,
		      		name:'胡小隆家超薄避孕套',
		      		address:'南山区高薪南12道方大大厦',
		      		time:'2018-01-23',
		      		src:require('../../assets/app8.png')
	      		},
	      		{
		      		id:4,
		      		name:'杨家包子铺',
		      		address:'南山区高薪南12道方大大厦',
		      		time:'2018-01-23',
		      		src:require('../../assets/app8.png')
	      		},
	      		{
		      		id:5,
		      		name:'杨家包子铺',
		      		address:'南山区高薪南12道方大大厦',
		      		time:'2018-01-23',
		      		src:require('../../assets/app8.png')
	      		},			
			]
	    };
	 }
	componentDidMount() {
		setTimeout(() => {
			this.setState({
				data: [bg1, bg2, bg3],
			});
		}, 100);

	}
	clickItem(index){		
		console.log(this,index);
		if(index==1){
			this.props.history.push({
				pathname:'/newlist',
				query:{
					name:"涛涛1",
				}
			});
		}else{					
			this.props.history.push({
				pathname:'/caoshiindex',
				query:{
					name:"涛涛1",
				}
			});
		}
	}			
    render() {
    	
    	const {history, isFetching, selectedTab, homeListObj, indexListNextPage, getNewArticleDetail} = this.props;
    	var  main=(
    		<div className="content">			
		        <WingBlank>
			        <Carousel autoplay={true} infinite>
			          {
			          	this.state.data.map(val => (
			              <img
			              	key={val}
			                src={val}
			                alt=""
			                style={{ width: '100%', verticalAlign: 'top' }}
			                onLoad={() => {
			                  // fire window resize event to change height
			                  window.dispatchEvent(new Event('resize'));
			                  this.setState({ imgHeight: 'auto' });
			                }}
			              />		            
			          	))
			          }
			        </Carousel>
				</WingBlank>
				<div className="list">				
					<ul>
						{this.state.listdata.map((val,index)=>(
							<li key={ val.id } onClick={this.clickItem.bind(this,index)}>
								<img src={ val.src }/>
								{val.name}							
							</li>
						))}						
					</ul>
				</div>
				<div className="shop_list">            
	            	<ul>	            	
		            	{
		            		this.state.son.map((val,index)=>(
			            		<li key={ index } >
			            			<div className="shopLeft">
			            				<img src={val.src} />
			            			</div>
			            			<div className="shopRight">
			            				<h3>{val.name}</h3>
			            				<p>地址:{val.address}</p>
			            				<p>开业时间:{val.time}</p>		            				
			            			</div>
			            		</li>	            		
		            		))
		            	}
	            	</ul>
            	</div>
			</div>    		
    	);    	    	    	
	    return (
	      <div >
	      	<MyNavBar history={history} page="indexTab" titleName="首页"/>
	         {main}
	        <MyTabBarRedux history={history} page="indexTab"/>
	      </div>
	    );
  	}
}
