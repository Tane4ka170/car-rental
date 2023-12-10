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

export const InputDiv = styled.div`
  display: flex;
  column-gap: 2px;
`;
export const Input = styled.input`
  width: 160px;
  padding: 14px 75px 14px 24px;
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
     transition: background 0.3s ease;

  &:hover {
    background: #0B44CD;
`;
