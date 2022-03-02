import { combineReducers } from "redux";

import notes from "./notes";
import auth from "./auth";
import error from "./error";

export const reducers = combineReducers({
  notes,
  auth,
  error,
});
