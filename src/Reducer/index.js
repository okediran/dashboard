import themeReducer from "./theme";
import toggleReducer from "./toggle";
import {combineReducers} from "redux";

 const allReducers = combineReducers({
    theme:themeReducer,
    toggle:toggleReducer
});

export default allReducers;