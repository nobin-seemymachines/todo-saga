import { createStore, applyMiddleware } from "redux";
import { useSelector,TypedUseSelectorHook, useDispatch } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { reducer } from "./redux";
import { watcherSaga } from "./sagas/watcherSaga";

const sagaMiddleware:any = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watcherSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store;

