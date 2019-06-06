import React, {Component, PropTypes} from 'react'
import {TabBar, Icon} from 'antd-mobile';
import {connect} from 'react-redux';
//import createBrowserHistory from 'history/createBrowserHistory';
//const history = createBrowserHistory();
import {   hashHistory } from 'react-router';
class MyTabBar extends React.Component {
    render() {
        const {selectedTab, changeTab, page,history} = this.props;
        console.log("ffffvv",this.props)
        return (
        	<div className="footer">
	            <TabBar
	                unselectedTintColor="#949494"
	                tintColor="#33A3F4"
	                barTintColor="white"
	            >
	                <TabBar.Item
	                    title="首页"
	                    key="首页"
	                    icon={<div style={{
			              width: '22px',
			              height: '22px',
			              background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
			            />
			            }
			            selectedIcon={<div style={{
			              width: '22px',
			              height: '22px',
			              background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
			            />
			            }
	                    selected={page === 'indexTab'}
	                    onPress={() => {
	
	                        changeTab('indexTab');
	                        hashHistory.push('/');
	                    }}
	                    data-seed="logId"
	                >
	                    {/*{this.renderContent('')}*/}
	                </TabBar.Item>
	                <TabBar.Item
	                     icon={
			              <div style={{
			                width: '22px',
			                height: '22px',
			                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
			              />
			            }
			            selectedIcon={
			              <div style={{
			                width: '22px',
			                height: '22px',
			                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
			              />
			            }
	                    title="活动"
	                    key="活动"
	                    selected={page === 'activeindex'}
	                    onPress={() => {
	                        changeTab('activeindex');
	                        hashHistory.push('/activeindex');
	                    }}
	                    data-seed="logId1"
	                >
	                    {/*{this.renderContent('')}*/}
	                </TabBar.Item>
	                < TabBar.Item
	                     icon={
			              <div style={{
			                width: '22px',
			                height: '22px',
			                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
			              />
			            }
			            selectedIcon={
			              <div style={{
			                width: '22px',
			                height: '22px',
			                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
			              />
			            }
	                    title="购物车"
	                    key="购物车"
	                    dot
	                    selected={page === 'shopcarindex'}
	                    onPress={() => {
	                        changeTab('shopcarindex');
	                        hashHistory.push('/shopcarindex');
	                    }}
	                >
	                    {/*{this.renderContent('')}*/}
	                </TabBar.Item>
	                <TabBar.Item
	                    //icon={{ uri: require('../../../assets/app1.png') }}
            			//selectedIcon={{ uri: require('../../../assets/app2.png') }}
            			icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
            			selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
	                    title="我的"
	                    key="我的"
	                    selected={page === 'myTab'}
	                    onPress={() => {
	                        changeTab('myTab');
	                        hashHistory.push('/myindex');
	                    }}
	                >
	                    {/*{this.renderContent('')}*/}
	                </TabBar.Item>
	            </TabBar>
	        </div>    
        );
    }
}

//约束类型
MyTabBar.propTypes = {
    //selectedTab: PropTypes.string.isRequired,
    //changeTab: PropTypes.func.isRequired
};

//事件创造器
function actionCreate(witchTab) {
    return {
        type: 'CHANGE_TAB',
        payload: {selectedTab: witchTab}
    }
}


//关联redux
const
    MyTabBarRedux = connect((state)=>({selectedTab: state.selectedTab}), (dispatch)=>({changeTab: (witchTab) => dispatch(actionCreate(witchTab))}))(MyTabBar);

export {MyTabBarRedux}


//以上是简洁的写法，便于看我源码的人理解，下面贴出拆分的写法

// 映射redux state到属性
// function mapStateToProps(state) {
//     return {
//         selectedTab: state.selectedTab
//     }
// }
//
// 映射redux action到属性
// function mapDispatchToProps(dispatch) {
//     return {
//         changeTab: (witchTab) => dispatch(actionCreate(witchTab))
//     }
// }
//
// const MyTabBarRedux = connect(mapStateToProps,mapDispatchToProps)(MyTabBar);



