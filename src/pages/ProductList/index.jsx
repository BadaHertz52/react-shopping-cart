import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import ProductListStyled from './style';
import StateMessage from 'containers/StateMessage';

import MESSAGE from 'constants';
import { useGetProductList } from 'hooks/useDataFetch';
import Product from 'containers/Product';

function ProductList() {
  const products = useSelector((state) => state.product.products);
  const isLoading = useSelector((state) => state.product.isLoading);
  const isError = useSelector((state) => state.product.isError);

  const productsList = useGetProductList();

  useEffect(() => {
    productsList();
  }, []);

  if (isLoading) {
    return <StateMessage message={MESSAGE.LOADING} />;
  }

  if (isError) {
    return <StateMessage message={MESSAGE.ERROR} />;
  }
  return (
    <ProductListStyled>
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </ProductListStyled>
  );
}

export default ProductList;