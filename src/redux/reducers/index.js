import { combineReducers } from "redux";
import { ShopReducers } from "./shopReducers";
import { TelegramCode } from "./shopReducers";

const reducers = combineReducers({
  allShop: ShopReducers,
  code: TelegramCode,
});

export default reducers;
