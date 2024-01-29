import { API_CALL_FAILURE, API_CALL_REQUEST, API_CALL_SUCCESS } from "./actionTypes";

// Add types for action and state
interface ApiCallRequestAction {
  type: typeof API_CALL_REQUEST;
}

interface ApiCallSuccessAction {
  type: typeof API_CALL_SUCCESS;
  message: string; // Assuming 'message' is a string, adjust if needed
}

interface ApiCallFailureAction {
  type: typeof API_CALL_FAILURE;
  error: any; // Adjust the type of 'error' based on your API response
}

export type ActionTypes = ApiCallRequestAction | ApiCallSuccessAction | ApiCallFailureAction;

export interface State {
  token: string;
  fetching?: boolean;
  error?: any;
}

const initialState: State = {
  token: "",
};

export function reducer(state: State = initialState, action: ActionTypes): State {
  switch (action.type) {
    case API_CALL_REQUEST:
      return { ...state, fetching: true, error: undefined };
    case API_CALL_SUCCESS:
      return { ...state, fetching: false, token: action.message };
    case API_CALL_FAILURE:
      return { ...state, fetching: false, token: "", error: action.error };
    default:
      return state;
  }
}
