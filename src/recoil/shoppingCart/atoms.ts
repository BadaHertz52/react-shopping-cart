import { fetchCartItems, fetchCouponList } from '@apis/shoppingCart';
import { CartItem, Coupon } from '@appTypes/shoppingCart';
import { STORAGE_KEY } from '@constants/storage';
import { localStorageEffect } from '@recoil/common/localStorageEffect';
import { atom } from 'recoil';

export const cartItemsAtom = atom<CartItem[]>({
  key: 'cartItemsAtom',
  default: Promise.resolve(fetchCartItems()),
});

export const selectedIdsAtom = atom<number[]>({
  key: 'selectedIdsAtom',
  default: JSON.parse(localStorage.getItem(STORAGE_KEY.selectedItems) ?? '[]') ?? [],
  effects: [localStorageEffect(STORAGE_KEY.selectedItems)],
});

export const availableCouponsAtom = atom<Coupon[]>({
  key: 'availableCouponAtom',
  default: [],
});

export const couponListAtom = atom<Map<string, Coupon>>({
  key: 'couponListAtom',
  default: Promise.resolve(fetchCouponList()),
});