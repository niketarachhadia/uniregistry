import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {routerMiddleware,routerReducer} from 'react-router-redux'
import {hashHistory} from 'react-router'
import {introReducer,detailsReducer} from './redux/reducers'
let reducers={introReducer,detailsReducer}
const rootReducer = combineReducers({
  ...reducers,
  routing: routerReducer
});
const middleware = applyMiddleware(
  routerMiddleware(hashHistory),
  thunk
);
const store = createStore(rootReducer,middleware);
export default store;