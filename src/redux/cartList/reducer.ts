import { CartListAction, CartListActionType } from 'redux/cartList/action';
import { CartItem } from 'types/domain';

export interface CartListState {
  readonly loading_getCartList: boolean;
  readonly loading_postCartList: boolean;
  readonly loading_putCartItem: boolean;
  readonly loading_patchCartSelected: boolean;
  readonly loading_patchAllCartSelected: boolean;
  readonly loading_deleteCartItem: boolean;
  readonly loading_deleteAllCartItem: boolean;
  readonly error: string | null;
  readonly data: CartItem[];
}

const initialState: CartListState = {
  loading_getCartList: false,
  loading_postCartList: false,
  loading_putCartItem: false,
  loading_patchCartSelected: false,
  loading_patchAllCartSelected: false,
  loading_deleteCartItem: false,
  loading_deleteAllCartItem: false,
  error: null,
  data: [],
};

export const cartListReducer = (state = initialState, action: CartListAction): CartListState => {
  switch (action.type) {
    case CartListActionType.GET_CART_LIST_START:
      return { ...state, loading_getCartList: true };
    case CartListActionType.GET_CART_LIST_SUCCESS:
      return { ...state, loading_getCartList: false, data: action.payload };
    case CartListActionType.GET_CART_LIST_FAILURE:
      return { ...state, loading_getCartList: false, error: action.payload };

    case CartListActionType.PUT_CART_ITEM_START:
      return { ...state, loading_putCartItem: true };
    case CartListActionType.PUT_CART_ITEM_SUCCESS: {
      const prevCartList = state.data;
      const targetItem = action.payload;
      const newCartList = prevCartList.map(cartItem =>
        cartItem.id === targetItem.id ? targetItem : cartItem
      );

      return { ...state, loading_putCartItem: false, data: newCartList };
    }
    case CartListActionType.PUT_CART_ITEM_FAILURE:
      return { ...state, loading_putCartItem: false, error: action.payload };

    case CartListActionType.POST_CART_ITEM_START:
      return { ...state, loading_postCartList: true };
    case CartListActionType.POST_CART_ITEM_SUCCESS:
      return { ...state, loading_postCartList: false, data: [...state.data, action.payload] };
    case CartListActionType.POST_CART_ITEM_FAILURE:
      return { ...state, loading_postCartList: false, error: action.payload };

    case CartListActionType.PATCH_CART_SELECTED_START:
      return { ...state, loading_patchCartSelected: true };
    case CartListActionType.PATCH_CART_SELECTED_SUCCESS: {
      const prevCartList = state.data;
      const targetItem = action.payload;
      const newCartList = prevCartList.map(cartItem =>
        cartItem.id === targetItem.id ? targetItem : cartItem
      );

      return { ...state, loading_patchCartSelected: false, data: newCartList };
    }
    case CartListActionType.PATCH_CART_SELECTED_FAILURE:
      return { ...state, loading_patchCartSelected: false, error: action.payload };

    case CartListActionType.PATCH_ALL_CART_SELECTED_START:
      return { ...state, loading_patchAllCartSelected: true };
    case CartListActionType.PATCH_ALL_CART_SELECTED_SUCCESS: {
      const newCartList = state.data.map(item => ({ ...item, isSelected: action.payload }));

      return { ...state, loading_patchAllCartSelected: false, data: newCartList };
    }
    case CartListActionType.PATCH_ALL_CART_SELECTED_FAILURE:
      return { ...state, loading_patchAllCartSelected: false, error: action.payload };

    case CartListActionType.DELETE_CART_ITEM_START:
      return { ...state, loading_deleteCartItem: true };
    case CartListActionType.DELETE_CART_ITEM_SUCCESS: {
      const newCartList = state.data.filter(item => item.id !== action.payload);

      return { ...state, loading_deleteCartItem: false, data: newCartList };
    }
    case CartListActionType.DELETE_CART_ITEM_FAILURE:
      return { ...state, loading_deleteCartItem: false, error: action.payload };

    case CartListActionType.DELETE_ALL_CART_ITEM_START:
      return { ...state, loading_deleteCartItem: true };
    case CartListActionType.DELETE_ALL_CART_ITEM_SUCCESS: {
      return { ...state, loading_deleteCartItem: false, data: [] };
    }
    case CartListActionType.DELETE_ALL_CART_ITEM_FAILURE:
      return { ...state, loading_deleteCartItem: false, error: action.payload };
    default:
      return state;
  }
};
