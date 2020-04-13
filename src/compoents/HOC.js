import React, { Component } from "react";
const HOC = WrapperComponent =>{
  return class HOC extends Component {
    state = { toggle: false };
    click = () => {
      this.setState({ toggle: !this.state.toggle });
    };
 
    render() {
      const { toggle } = this.state;
      return (
        <div className="App">       
          <button onClick={this.click}>Toggle Name</button>
          {toggle && <WrapperComponent />}
        </div>
      );
    }
  };
  
}  
 
export default HOC;
/*该组件接受一个子组件作为其中的一个参数，并从数据源订阅数据作为props属性传入子组件。该高阶组件命名为HOC.
 可以将两个组件中相同的逻辑部分提取到一个高阶组件
 * */