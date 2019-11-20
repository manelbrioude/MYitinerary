import { combineReducers } from "redux";
import cityreducer from "./cityReducer";
import itineraryReducer from "./itineraryReducer";
import activityReducer from "./activityReducer";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import commentReducer from "./commentReducer";

const rootReducer = combineReducers({
  cities: cityreducer,
  itineraries: itineraryReducer,
  activities: activityReducer,
  auth: authReducer,
  error: errorReducer,
  user: userReducer,
  comments: commentReducer
});
export default rootReducer;
