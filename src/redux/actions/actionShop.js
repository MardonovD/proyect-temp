import ActionType from "../contants/action-type";

export const ShopProductAction = (state) => {
  return {
    type: ActionType.SHOP_PRODUCT,
    payload: state,
  };
};

export const SelectShopAction = (state) => {
  return {
    type: ActionType.SELECT_PRODUCT,
    payload: state,
  };
};
