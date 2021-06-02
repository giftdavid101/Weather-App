import {createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { weatherState} from "./root-reducer";

  const store = createStore( weatherState, composeWithDevTools())

export default store

