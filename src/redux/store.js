import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { homeVolumesReducer } from "./reducer/data.reducer";
import {modelDataReducer} from "./reducer/modelData.reducer"

const rootReducer = combineReducers({
    homeVolumes: homeVolumesReducer, 
    modelData:  modelDataReducer,
})

const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;