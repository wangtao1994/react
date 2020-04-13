/*import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

//组合之后的reducer
import reducer from '../reducers/reducers';

//全局唯一的store,挂在window上方便控制台查看
window.store = createStore(
    reducer,
    applyMiddleware(thunk)
);

export default window.store;*/



import {createStore,combineReducers, applyMiddleware,compose} from 'redux'
import reducer from '../reducers/reducers';
import thunk from 'redux-thunk';
//createStore(reducer, [preloadedState], enhancer)
const middleware = [thunk];
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) :compose;
window.store=createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(...middleware)//中间件 
      )
)
export default window.store;