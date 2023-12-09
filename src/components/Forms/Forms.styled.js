import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
  padding-top: 50px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  width: 860px;
`;
export const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

export const Label = styled.label`
  color: #8a8a89;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
`;

export const SelectBrand = styled.select`
  width: 224px;
`;

export const Option = styled.option`
  color: #121417;

  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

export const OptionHide = styled.option`
  display: inline-flex;
  height: 272px;
  padding: 14px 8px 14px 18px;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 112px;
  flex-shrink: 0;
  border-radius: 14px;
  border: 1px solid rgba(18, 20, 23, 0.05);
  background: #fff;
  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
`;
export const SelectPrice = styled.select`
  width: 125px;
`;

export const InputDiv = styled.div`
  display: flex;
  column-gap: 2px;
`;
export const Input = styled.input`
  width: 160px;
  padding: 14px 93px 14px 24px;
  height: 64px;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.13;
  border-radius: 14px;
  background: #f7f7fb;
  border: none;
  outline: none;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 25px;
`;

export const SearchButton = styled.button`
  height: 50px;
  width: 135px;
  place-self: flex-end;
  border-radius: 12px;
  padding: 0;
  background: #3470ff;
  border: none;

  color: white;
`;
