// hamare bhut sare saga files ho sakte hai 
// common code hai to ham saga folder ke andar bnate hai  
// or agar separate hai to uss particular component folder ke andar alag se file bna kar, kar sakte hai 

import { takeEvery, call, put } from 'redux-saga/effects';
import { FETCH_PRODUCTS } from '../services/constant';
import productsService from '../services/products.services';
import { setProducts } from '../services/Actions/action';

// create actual function to handle async-operation-called on dispatch action.
function* fetchProducts() {
    try {
        // jitne bhi effects hone hai vo ham call ke andar hi rkhenge
        // call ke andar function ko pass karna hai uss function ko vha par call nhi karna hai 
        // function ko call ke andar call karne par ham redux saga se kah rhe hai ki iss function ka jo output aaya hai usse call kar do jo ki shi nhi hai 
        const products = yield call(productsService.getAllProducts); // ye call() ek tarah se object return karta hai { call : {fun.fundefine} }
        yield put(setProducts(products)); // yha action ko dispatch kar rhe hai // isne hame vo action ka object return kar diya or usse put redux-saga-effects ki help se yield kar ke redux-saga tak bhej diya 
    } catch (e) {
        console.log(e);
    }
}

// create action watcher function - it watches for an action dispatch from any component.
export function* waitForFetchProducts() {
    yield takeEvery(FETCH_PRODUCTS, fetchProducts); // jaise hi FETCH_PRODUCTS name se action dispatch hoga ye fetchProducts name ke function ko call kar dega 
}