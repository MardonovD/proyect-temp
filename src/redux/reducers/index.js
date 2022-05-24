import { combineReducers } from "redux";
import { ShopReducers } from "./shopReducers";

const reducers = combineReducers({
  allShop: ShopReducers,
});

export default reducers;
