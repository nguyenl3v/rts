import {all,fork} from "redux-saga/effects";
import login from "./resource/login/saga";

const sagas:any = [...login];

function* rootSaga(){
  const globalFork = sagas.map((item:any) => fork(item));
  yield all([...globalFork])
}

export default rootSaga;