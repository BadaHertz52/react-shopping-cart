import { atom, selector } from 'recoil';

import type { CartType } from '../type/cart';

export const cartState = atom<CartType[]>({
  key: 'cartState',
  default: [],
});

export const totalCartCountState = selector({
  key: 'totalCartCountState',
  get: ({ get }) => {
    const cart = get(cartState);
    return cart.length;
  },
});