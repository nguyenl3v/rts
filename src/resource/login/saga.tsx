import {takeEvery} from "redux-saga/effects";
import axios from "axios";
import {LOGIN,LoginType} from "./types";

function* login(){
  yield takeEvery(LOGIN, function* (payload:LoginType){
    yield console.log(payload)
  })
};

const sagas = [login];

export default sagas;