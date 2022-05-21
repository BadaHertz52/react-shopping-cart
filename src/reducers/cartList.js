import { BASE_SERVER_URL, SERVER_PATH } from "../constants";

const CART_LIST_ACTION = {
  GET_LIST: "cartList/GET_LIST",
  GET_LIST_SUCCESS: "cartList/GET_SUCCESS",
  GET_LIST_ERROR: "cartList/GET_ERROR",

  DELETE_LIST: "cartList/DELETE_LIST",
  DELETE_LIST_SUCCESS: "cartList/DELETE_LIST_SUCCESS",
  DELETE_LIST_ERROR: "cartList/DELETE_LIST_ERROR",

  UPDATE_ITEM_COUNT: "cartList/UPDATE_ITEM_COUNT",
  UPDATE_ITEM_COUNT_SUCCESS: "cartList/UPDATE_ITEM_COUNT_SUCCESS",
  UPDATE_ITEM_COUNT_ERROR: "cartList/UPDATE_ITEM_COUNT_ERROR",
};

const updateStoreState = async (
  url,
  method,
  dispatch,
  { start, success, error }
) => {
  dispatch({ type: start });
  try {
    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`fetch error`);
    }

    const data = await response.json();
    if (!data) {
      throw new Error(`No Data`);
    }

    dispatch({
      type: success,
      carts: data,
    });
  } catch (err) {
    dispatch({
      type: error,
      errorMessage: err.message,
    });
  }
};

export const getCartList = () => async (dispatch) => {
  const cartListUrl = `${BASE_SERVER_URL}${SERVER_PATH.CART_LIST}`;
  await updateStoreState(cartListUrl, "GET", dispatch, {
    start: CART_LIST_ACTION.GET_LIST,
    success: CART_LIST_ACTION.GET_LIST_SUCCESS,
    error: CART_LIST_ACTION.GET_LIST_ERROR,
  });
};

export const deleteCartList =
  (id = "all") =>
  async (dispatch) => {
    const cartListUrl = `${BASE_SERVER_URL}${SERVER_PATH.CART_LIST}/${id}`;

    await updateStoreState(cartListUrl, "DELETE", dispatch, {
      start: CART_LIST_ACTION.DELETE_LIST,
      success: CART_LIST_ACTION.DELETE_LIST_SUCCESS,
      error: CART_LIST_ACTION.DELETE_LIST_ERROR,
    });
  };

export const updateCartCount = (id, type) => async (dispatch) => {
  const cartListUrl = `${BASE_SERVER_URL}${SERVER_PATH.CART_LIST}/${type}/${id}`;

  await updateStoreState(cartListUrl, "PATCH", dispatch, {
    start: CART_LIST_ACTION.UPDATE_ITEM_COUNT,
    success: CART_LIST_ACTION.UPDATE_ITEM_COUNT_SUCCESS,
    error: CART_LIST_ACTION.UPDATE_ITEM_COUNT_ERROR,
  });
};

const initialState = {
  isLoading: false,
  data: [],
  errorMessage: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_LIST_ACTION.UPDATE_ITEM_COUNT:
    case CART_LIST_ACTION.DELETE_LIST:
      return {
        isLoading: false,
        data: state.data,
        errorMessage: "",
      };
    case CART_LIST_ACTION.GET_LIST:
      return {
        isLoading: true,
        data: state.data,
        errorMessage: "",
      };
    case CART_LIST_ACTION.UPDATE_ITEM_COUNT_SUCCESS:
    case CART_LIST_ACTION.DELETE_LIST_SUCCESS:
    case CART_LIST_ACTION.GET_LIST_SUCCESS:
      return {
        isLoading: false,
        data: action.carts,
        errorMessage: "",
      };
    case CART_LIST_ACTION.UPDATE_ITEM_COUNT_ERROR:
    case CART_LIST_ACTION.DELETE_LIST_ERROR:
    case CART_LIST_ACTION.GET_LIST_ERROR:
      return {
        isLoading: false,
        data: [],
        errorMessage: action.errorMessage,
      };
    default:
      return state;
  }
};

export default reducer;
