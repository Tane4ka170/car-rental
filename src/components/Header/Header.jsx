import React from "react";
import { NavigationContainer, StyledNavLink } from "./Header.styled";

const Header = () => {
  return (
    <NavigationContainer>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/catalog">Catalog</StyledNavLink>
      <StyledNavLink to="/favorites">Favorites</StyledNavLink>
    </NavigationContainer>
  );
};

export default Header;
