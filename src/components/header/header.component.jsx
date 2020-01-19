import React from "react";

import {
  HeaderDiv,
  LogoDiv,
  OptionsDiv,
  OptionDiv,
  OptionLink
} from "./header.style";

import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.util";

import { connect } from "react-redux";
import CartIcon from "../icon/cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { createStructuredSelector } from "reselect";

import { selectCartHidden } from "../../reduxstore/cart/cart.selectors";
import { selectCurrentUser } from "../../reduxstore/user/user.selectors";

const Header = ({ currentUser, hidden }) => (
  <HeaderDiv>
    <LogoDiv>
      <Link to="/">LOGO</Link>
    </LogoDiv>
    <OptionsDiv>
      <OptionDiv>
        <Link to="/shop">Shop</Link>
      </OptionDiv>
      <OptionLink to='#'>Contact</OptionLink>
      {currentUser ? (
        <OptionDiv onClick={() => auth.signOut()}>Sign Out</OptionDiv>
      ) : (
        <OptionDiv as={Link} to="/authenticate">Sign In</OptionDiv>
      )}
      <CartIcon />
    </OptionsDiv>
    {hidden ? null : <CartDropdown />}
  </HeaderDiv>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});
export default connect(mapStateToProps)(Header);
