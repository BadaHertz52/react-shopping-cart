import ShoppingCartPage from 'pages/ShoppingCartPage';

export default {
  title: 'ShoppingCartPage',
  component: ShoppingCartPage,
};

export const DefaultShoppingCartPage = (args) => <ShoppingCartPage {...args} />;
DefaultShoppingCartPage.args = {};
