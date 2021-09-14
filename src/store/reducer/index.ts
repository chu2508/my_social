import { combineReducers } from "redux";
import application from './application';

const rootReducer = combineReducers({
  application: application
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer