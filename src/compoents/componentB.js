// ComponentB
import React, { Component } from "react";
import PropTypes from 'prop-types'

const ThemeContext = React.createContext({
  background: 'red',
  color: 'white'
});
export default class ComponentB extends Component {	
	/*	 
	 子组件需要通过一个静态属性contextTypes声明后，才能访问父组件Context对象的属性，否则，即使属性名没写错，拿到的对象也是undefined。
	 * */	
	static contextTypes = {
    propA: PropTypes.string,
    methodA: PropTypes.func
 }	
  state = { toggle: false };
  click = () => {
    this.setState({ toggle: !this.state.toggle });
  };
 
  render() {
    const { toggle } = this.state;
    const {propA,methodA} = this.context;    
    //console.log(this.context);
    //console.log(propA);
    //console.log(methodA);
    
    return (
      <div className="App">
        <button onClick={this.click}>Toggle Name</button>
        {toggle && <div>ComponentB4444</div>}
        <ThemeContext.Consumer>
	        {context => (
	          <h1 style={{background: context.background, color: context.color}}>
	            323333333333{this.props.children}
	          </h1>
	        )}
      	</ThemeContext.Consumer>
      </div>
    );
  }
}
