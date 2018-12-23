import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from '../reducers/index';

const logger = (store)=> (next)=> (action)=>{
    if(action.type === "ADD_VIDEO" || action.type === "SHOW_MESSAGE"){
        setTimeout(()=>{
            store.dispatch({type:'HIDE_MESSAGE'})
        },1000)
    }
    return next(action);
};
const middleware = applyMiddleware(logger);
export const store = createStore(rootReducer ,middleware);

export default store;
