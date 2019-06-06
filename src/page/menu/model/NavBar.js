import React from 'react';
import { NavBar, Icon } from 'antd-mobile';
export default class Shoplist extends React.Component{	
	constructor(props) {
	    super(props)
	    this.state = {
	      	     
	    }	    	   
	}	
	componentDidMount(){
		
		
	}				
    render(){
    	const {homeListObj, changeArticleType, page, titleName, history} = this.props;
        return(
            <div>            
            	<NavBar
			      mode="pink"
			      icon={<Icon type="left" />}
			      onLeftClick={() => console.log('onLeftClick')}
			      rightContent={[
			        //<Icon key="0" type="search" style={{ marginRight: '16px' }} />,
			        <Icon key="1" type="ellipsis" />,
			      ]}
			    >{ titleName }</NavBar>
            </div>
        );
    }
}
