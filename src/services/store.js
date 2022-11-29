import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./Reducers/RootReducer";
// import ReduxThunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "../rootSaga";

// this code with redux-thunk
// const store = createStore(
//     rootReducer,
//     compose(
//         applyMiddleware(ReduxThunk),
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
// );

// this code for redux-thunk
// const store = createStore(rootReducer,applyMiddleware(ReduxThunk));



// this code for redux-saga
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;

// agar ham redux dev tool use nhi kar rhe hai tab ham direct 
// const store = createStore(rootReducer,applyMiddleware(ReduxThunk)) likhenge 