import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./global.css";
import "bootstrap/dist/css/bootstrap.min.css"
import ReduxApp from './ruduxApp';
import {createStore} from "redux";
import {Provider} from  "react-redux";

function countReducer(state={count:0}, action){
    switch (action.type) {
        case "ADD":
            state={
                count: state.count+action.payload.count
            };
            break;
        case "Minus":
        state={
            count: state.count- action.payload.count
        }
    }
    return state;
}

const store=createStore(countReducer);

ReactDOM.render(

  <React.StrictMode>
    <App/>
  </React.StrictMode>,

  document.getElementById('root')
);
