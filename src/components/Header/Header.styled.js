import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #404145;
  padding: 10px;
  color: #909597;
  font-size: 16px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #cabeb8;
  margin: 0 10px;
  padding: 5px;

  &:hover {
    border-bottom: 2px solid #755546;
  }

  &.active {
    font-weight: bold;
  }
`;
