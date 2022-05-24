import ActionType from "../contants/action-type";

export const ShopReducers = (state = [], { type, payload }) => {
  switch (type) {
    case ActionType.SHOP_PRODUCT:
      return { ...state, payload };
    case ActionType.SELECT_PRODUCT:
      return { ...state, payload };
    default:
      return state;
  }
};
