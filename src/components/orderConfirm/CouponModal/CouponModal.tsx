import { Coupon } from '@appTypes/shoppingCart';
import { CrossIcon } from '@assets/index';
import { InfoBanner } from '@components/common';
import { MAX_NUMBER_OF_COUPON } from '@constants/coupon';
import { useMaxDiscountCalculator, useModalTargetEl } from '@hooks/index';
import { couponListAtom, maxDiscountAtom } from '@recoil/shoppingCart';
import { formatKoreanCurrency } from '@utils/currency';
import { CenterModal, ModalContainer } from 'badahertz52-react-modules-components';
import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import CouponCard from '../CouponCard/CouponCard';

import * as Styled from './CouponModal.styled';

interface CouponModalProps {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  availableCoupons: Coupon[];
}
const CouponModal = ({ openModal, setOpenModal, availableCoupons }: CouponModalProps) => {
  const couponMap = useRecoilValue(couponListAtom);
  const setMaxDiscount = useSetRecoilState(maxDiscountAtom);

  const { getMaxDiscountAmount } = useMaxDiscountCalculator();
  const { modalTargetEl } = useModalTargetEl();

  const [selectedCouponCodes, setSelectedCouponCodes] = useState<string[]>([]);
  const [discount, setDiscount] = useState<number>(0);

  const coupons = Array.from(couponMap.values());
  const availableCouponCodes = availableCoupons.map((coupon) => coupon.code);

  const isCouponDisabled = (code: string) => {
    // 사용 불가한 쿠폰인 경우
    if (!availableCouponCodes.includes(code)) return true;
    // 이미 최대 사용 가능한 쿠폰 개수만큼 쿠폰을 선택했지만, 해당 쿠폰은 선택되지 않은 경우
    if (selectedCouponCodes.length >= MAX_NUMBER_OF_COUPON && !selectedCouponCodes.includes(code)) return true;
    return false;
  };

  const handleChangeChecked = (e: ChangeEvent<HTMLInputElement>, code: string) => {
    const isChecked = e.target.checked;

    setSelectedCouponCodes((prev) => {
      if (isChecked) return prev?.includes(code) ? prev : prev.concat(code);

      return prev.filter((i) => i === code);
    });
  };

  const updateMaxDiscount = () => {
    const selectedCoupons = selectedCouponCodes
      .map((code) => couponMap.get(code))
      .filter((coupon): coupon is Coupon => coupon !== undefined);

    setDiscount(getMaxDiscountAmount(selectedCoupons));
  };

  const handleClickApplyCoupons = () => {
    setMaxDiscount(discount);
    setOpenModal(false);
  };

  useEffect(() => {
    updateMaxDiscount();
  }, [selectedCouponCodes]);

  return (
    <>
      {modalTargetEl && (
        <CenterModal modalTargetEl={modalTargetEl} openModal={openModal} setOpenModal={setOpenModal}>
          <Styled.ModalHeader>
            <Styled.ModalTitle>쿠폰을 선택헤주세요.</Styled.ModalTitle>
            <ModalContainer.CloseButtonWrapper>
              <Styled.ModalCloseButton>
                <CrossIcon />
              </Styled.ModalCloseButton>
            </ModalContainer.CloseButtonWrapper>
          </Styled.ModalHeader>
          <InfoBanner>쿠폰은 최대 2개까지 사용할 수 있습니다.</InfoBanner>
          <Styled.CouponList>
            {coupons.map((coupon) => (
              <CouponCard
                key={coupon.code}
                coupon={coupon}
                isChecked={selectedCouponCodes.includes(coupon.code)}
                isDisabled={isCouponDisabled(coupon.code)}
                handleChangeChecked={handleChangeChecked}
              />
            ))}
          </Styled.CouponList>
          <Styled.ApplyCouponButton onClick={handleClickApplyCoupons}>
            총 {formatKoreanCurrency(discount)}할인 쿠폰 사용하기
          </Styled.ApplyCouponButton>
        </CenterModal>
      )}
    </>
  );
};

export default CouponModal;