import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { clearCart } from "../../reduxstore/cart/cart.actions";

const StripeCheckoutButton = ({ price, clearCart, history }) => {
  const publishableKey = "pk_test_E3f6ctw1uQxKheVt4PUNO8of00ViYDP2UF";
  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
    clearCart();
    history.push("/");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Jameel Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price} `}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
const mapDispatchToProps = dispatch => ({
  clearCart: () => dispatch(clearCart())
});
export default withRouter(
  connect(null, mapDispatchToProps)(StripeCheckoutButton)
);
