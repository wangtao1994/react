import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

//组合之后的reducer
import reducer from '../reducers/reducers';

//全局唯一的store,挂在window上方便控制台查看
window.store = createStore(
    reducer,
    applyMiddleware(thunk)
);

export default window.store;