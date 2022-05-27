import { rest } from "msw";

import db from "./db.json";
import { BASE_SERVER_URL, SERVER_PATH } from "../constants";

export const prouctsHandlers = [
  rest.get(`${BASE_SERVER_URL}${SERVER_PATH.PRODUCT_LIST}`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(db.products));
  }),
  rest.get(
    `${BASE_SERVER_URL}${SERVER_PATH.PRODUCT_LIST}/:id`,
    (req, res, ctx) => {
      const { id } = req.params;
      const productList = db.products;
      const selectedProduct = productList.find(
        (product) => product.id === Number(id)
      );

      if (!selectedProduct) return res(ctx.status(404), ctx.json({}));
      return res(ctx.status(200), ctx.json(selectedProduct));
    }
  ),
];

export const cartsHandlers = [
  rest.get(`${BASE_SERVER_URL}${SERVER_PATH.CART_LIST}`, (req, res, ctx) => {
    const cartList = db.carts;
    const productList = db.products;

    const result = cartList.map(({ id, count }) => {
      const selectedProduct = productList.find((product) => product.id === id);
      return { ...selectedProduct, count };
    });

    return res(ctx.status(200), ctx.json(result));
  }),
  rest.post(`${BASE_SERVER_URL}${SERVER_PATH.CART_LIST}`, (req, res, ctx) => {
    const { id, count } = req.body;
    if (!id || !count) return res(ctx.status(400));

    const cartList = db.carts;
    if (cartList.some((cart) => cart.id === id)) {
      return res(ctx.status(200), ctx.json({ isAlreadyExists: true }));
    }

    db.carts = [...cartList, { id, count }];
    return res(ctx.status(200), ctx.json({ isAlreadyExists: false }));
  }),
  rest.delete(
    `${BASE_SERVER_URL}${SERVER_PATH.CART_LIST}/all`,
    (req, res, ctx) => {
      db.carts = [];
      return res(ctx.status(200), ctx.json([]));
    }
  ),
  rest.delete(
    `${BASE_SERVER_URL}${SERVER_PATH.CART_LIST}/:id`,
    (req, res, ctx) => {
      const { id } = req.params;

      const productList = db.products;
      const cartList = db.carts;
      const selectedCartList = cartList.filter(
        (cartItem) => cartItem.id !== Number(id)
      );

      db.carts = selectedCartList;
      const result = selectedCartList.map(({ id, count }) => {
        const selectedProduct = productList.find(
          (product) => product.id === id
        );
        return { ...selectedProduct, count };
      });
      return res(ctx.status(200), ctx.json(result));
    }
  ),
  rest.patch(
    `${BASE_SERVER_URL}${SERVER_PATH.CART_LIST}/increase/:id`,
    (req, res, ctx) => {
      const { id } = req.params;

      const productList = db.products;
      const cartList = db.carts;
      const cartItemIndex = cartList.findIndex(
        (cartItem) => cartItem.id === Number(id)
      );

      if (cartItemIndex < 0) return res(ctx.status(404), ctx.json([]));

      db.carts[cartItemIndex].count += 1;

      const result = db.carts.map(({ id, count }) => {
        const cartList = productList.find((product) => product.id === id);
        return { ...cartList, count };
      });

      return res(ctx.status(200), ctx.json(result));
    }
  ),
  rest.patch(
    `${BASE_SERVER_URL}${SERVER_PATH.CART_LIST}/decrease/:id`,
    (req, res, ctx) => {
      const { id } = req.params;

      const productList = db.products;
      const cartList = db.carts;
      const cartItemIndex = cartList.findIndex(
        (cartItem) => cartItem.id === Number(id)
      );

      if (cartItemIndex < 0) return res(ctx.status(404), ctx.json([]));

      db.carts[cartItemIndex].count -= 1;

      const result = db.carts.map(({ id, count }) => {
        const cartList = productList.find((product) => product.id === id);
        return { ...cartList, count };
      });

      return res(ctx.status(200), ctx.json(result));
    }
  ),
];