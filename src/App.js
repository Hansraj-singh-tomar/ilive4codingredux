import React from "react";
import  {Header}  from "./components/Header";
import {Routing} from './Routing'
import store from './services/store';
import { Provider } from 'react-redux';
function App() {
  return (
    <>
      <Provider store={store}>
      <Header />
      <Routing />
    </Provider>
    </>
  );
}

export default App;
