import { rest } from 'msw';
import { productList, cartList } from './data';

export const handlers = [
  rest.get('/products', (req, res, ctx) => {
    return res(ctx.json(productList));
  }),

  rest.get('/products/:id', (req, res, ctx) => {
    const { id } = req.params;
    const product = productList.find(({ id: productId }) => productId === +id);
    return res(ctx.json(product));
  }),

  rest.get('/cart', (req, res, ctx) => {
    return res(ctx.json(cartList));
  }),

  rest.post('/cart/:id', (req, res, ctx) => {
    const { id } = req.params;

    const index = cartList.findIndex(({ id: productId }) => productId === +id);
    const product = productList.find(({ id: productId }) => productId === +id);
    console.log('msw product', product);

    if (index === -1) {
      cartList.push({ ...product, quantity: 1 });
    }
    return res(ctx.json(cartList));
  }),
];
