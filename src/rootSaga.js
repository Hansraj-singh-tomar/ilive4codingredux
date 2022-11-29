import { all } from "redux-saga/effects"; // this all is like promise.all() method
import { waitForFetchProducts } from "./Sagas/products.saga";

export default function* rootSaga() {
    yield all([waitForFetchProducts(),]) // or koi saga file hai to usse ham comma lga-lga kar use kar sakte hai 
}