import { combineReducers } from "redux";
import filterReducer from "./filter/reducer";
import todosReducer from "./todos/reducer";
 

const rootReducer = combineReducers({
    todos: todosReducer,
    filters: filterReducer,
});

export default rootReducer;