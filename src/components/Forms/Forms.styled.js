import styled from "styled-components";

export const FormDiv = styled.div`  
display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  `

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #8a8a89;
`

export const SelectBrand = styled.select`
border-radius: ${(props) =>
    props.borderRadius ? `${props.borderRadius}px` : "0"};
  width: ${(props) => (props.width ? `${props.width}px` : "auto")};
  height: ${(props) => (props.height ? `${props.height}px` : "auto")};
  border: 1px solid #fff;
  background-color: #f7f7fb;
  border-radius: 14px;
`