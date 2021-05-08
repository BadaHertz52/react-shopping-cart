import { VFC } from 'react';
import { Order } from '../../../types';
import OrderItemListSection from './OrderItemListSection';

interface Props {
  orders: Order[];
}

const OrderItemListSections: VFC<Props> = ({ orders }) => {
  return (
    <>
      {orders.map((order) => (
        <OrderItemListSection order={order} />
      ))}
    </>
  );
};

export default OrderItemListSections;
