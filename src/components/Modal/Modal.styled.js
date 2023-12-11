import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const scaleIn = keyframes`
  from {
    transform: scale(0.8);
  }
  to {
    transform: scale(1);
  }
`;

const hoverEffect = keyframes`
  0% {
    transform: scale(1);
    color: #fff;
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  z-index: 5;
`;
export const ModalWindow = styled.div`
  position: fixed;
  width: 541px;
  height: 790px;
  border-radius: 24px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding-top: 40px;
  padding-left: 33px;
  padding-right: 40px;
  border: 1px solid #ccc;
  z-index: 7;
  animation: ${fadeIn} 0.5s ease;
`;

export const ModalContainer = styled.div`
  display: flex;
  margin-top: -35px;
`;

export const CarImage = styled.img`
  object-fit: cover;
  width: 461px;
  height: 248px;
  border-radius: 14px;
  margin-bottom: 10px;
  margin-top: 30px;
`;

export const SpanModal = styled.span`
  font-family: Montserrat;
  font-weight: 600;
  color: #3470ff;
`;
export const CarDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 360px;
  margin-bottom: 14px;
`;
export const CarProperty = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  padding-right: 4px;

  &::before {
    content: "\u00a0";
  }

  border-right: 1px solid rgba(18, 20, 23, 0.1);
`;

export const CarDescription = styled.p`
  color: rgba(18, 20, 23, 0.5);

  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  padding-right: 6px;
  margin-bottom: 24px;

  font-family: Manrope;
  font-size: 14px;
  line-height: 20px;
  color: #121417;

  &:not(:last-child) {
    border-right: none;
  }
`;

export const AccessoriesContainer = styled.div`
  width: 340px;
  margin-bottom: 24px;
`;

export const AccessoriesTitle = styled.p`
  margin-bottom: 8px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

export const AccessoriesSpan = styled.span`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  padding-right: 6px;
`;
export const RentalConditionsList = styled.ul`
  padding-left: 0px;
`;

export const RentalConditionsTitle = styled.p`
  margin-bottom: 14px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

export const RentalConditionsDiv = styled.div`
  display: flex;
  gap: 8px;
  padding-left: 0px;
  margin-bottom: 8px;
`;
export const RentalConditionItem = styled.li`
  padding: 7px 14px;
  gap: 8px;
  border-radius: 35px;

  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.24px;
  color: #363535;
  background: #f9f9f9;

  span {
    color: #3470ff !important;
  }
`;

export const RentalConditionsDetails = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
`;

export const RentalButton = styled.button`
  padding: 12px 50px;
  width: 168px;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  border-radius: 12px;
  border: none;

  color: #fff;
  background: #3470ff;
  transition: background 0.3s ease, transform 0.3s ease;
  animation: ${scaleIn} 0.5s ease;

  &:hover {
    background: #0b44cd;
    transform: scale(1.1);
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 6px;
  right: 6px;
  padding: 10px;
  background: none;
  border: none;
  animation: ${fadeIn} 0.5s ease;

  &:hover {
    cursor: pointer;
    animation: ${hoverEffect} 0.5s ease;
  }
`;
