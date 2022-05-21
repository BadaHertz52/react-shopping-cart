import React from "react";
import { useParams } from "react-router-dom";

import { useFetch } from "../../../hooks/useFetch";

import { BASE_SERVER_URL, SERVER_PATH } from "../../../constants";

import Spinner from "../../common/Spinner";
import { DetailContainer } from "./styled";
import ErrorPage from "../ErrorPage";
import ProductDetail from "./ProductDetail";

function ProductDetailPage() {
  const { id: productId } = useParams();
  const productURL = `${BASE_SERVER_URL}${SERVER_PATH.PRODUCT_LIST}/${productId}`;
  const {
    data: selectedProduct,
    isLoading,
    errorMessage,
  } = useFetch(productURL);

  const renderContent = () => {
    if (isLoading) return <Spinner />;
    if (errorMessage)
      return (
        <ErrorPage>
          😱 Error: 관리자에게 문의하세요.😱 <br /> %{errorMessage}%
        </ErrorPage>
      );
    return <ProductDetail selectedProduct={selectedProduct} />;
  };

  return <DetailContainer>{renderContent()}</DetailContainer>;
}

export default ProductDetailPage;
