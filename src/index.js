import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './css/index.css';
import * as serviceWorker from './serviceWorker';
import Routes from './configs/router.config.js';
import 'antd-mobile/dist/antd-mobile.css';
import store from './store/store'
ReactDOM.render(
<Provider store={store}>	
	<Routes />
</Provider>,
document.getElementById('root')
	
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
