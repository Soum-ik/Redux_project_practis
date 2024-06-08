// store.ts
import { createStore } from "redux";
import bookingReducer from "./booking/createReducer";

const store = createStore(bookingReducer);

export type RootState = ReturnType<typeof store.getState>;


export default store;