import React from 'react'

export default class extends React.Component {
	
    render() {
    	console.log("hh",this.props)
        return (
            <div>
            {this.props.data.map((value)=>(
            	 <div className="jil" key={value} >{ value }</div>   
            ))}                          
            </div>
        );
    }
}