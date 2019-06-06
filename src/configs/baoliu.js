import React from 'react';
import { HashRouter as Router, Route, IndexRoute, hashHistory ,browserHistory/* , Redirect */ } from 'react-router-dom'

import index from '../page/menu/App' // 基础
import jsdemo from '../page/my/jsdemo' // 设置中心-系统设置
import jsdemob from '../page/shopcar/jsdemob' // 菜单
import jsdemoc from '../page/active/jsdemoc' // 菜单

 
export default () => (
  <Router >    
    <Route path="/" exact  component={index} />
    <Route path="/jsdemo"  component={jsdemo} />
    <Route path="/jsdemob"  component={jsdemob} />
    <Route path="/jsdemoc"  component={jsdemoc} />
  </Router>
)
