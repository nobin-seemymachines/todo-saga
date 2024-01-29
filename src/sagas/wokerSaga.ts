import axios, { AxiosResponse } from "axios";
import { call, put } from "redux-saga/effects";
import { UserData } from "../Login";
import { API_CALL_FAILURE, API_CALL_SUCCESS } from "../actionTypes";

function fetchUser(userData:UserData) {
  return axios({
    method: "post",
    url: "http://localhost:8000/api/users/login",
    data: userData,
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then((response: AxiosResponse) => {
    return response.data.data.token;
  })
  .catch((error) => {
    throw error.response ? error.response.data : error;
  });
}

function* workerSaga(action:any) {  
  try {
    // Get user data from the action payload
    const userData = action.payload;

    // Make the API call with user data
    const token:string = yield call(fetchUser, userData);

    // Dispatch a success action with the token
    yield put({ type: API_CALL_SUCCESS, message: token });
  } catch (error) {
    // Dispatch a failure action with the error
    yield put({ type: API_CALL_FAILURE, error });
  }
}

export default workerSaga;
