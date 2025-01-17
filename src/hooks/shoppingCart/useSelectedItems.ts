import { cartItemsAtom, selectedIdsAtom } from '@recoil/shoppingCart';
import { useRecoilValue } from 'recoil';

const useSelectedCartItems = () => {
  const cartItems = useRecoilValue(cartItemsAtom);
  const selectedIds = useRecoilValue(selectedIdsAtom);

  const selectedItems = cartItems.filter((cartItem) => selectedIds.includes(cartItem.id));

  const selectedTotalQuantity = selectedItems.reduce((acc, cur) => acc + cur.quantity, 0);
  const totalSelectedItemLength = selectedItems.length;

  return { selectedItems, selectedTotalQuantity, totalSelectedItemLength };
};

export default useSelectedCartItems;
