import React, { Component } from "react";
import PropTypes from "prop-types";
import Cart from "../components/Cart";
import CartItem from "../components/CartItem";
import { connect } from "react-redux";
import CartResult from "../components/CartResult";

class CartContainer extends Component {
  render() {
    const { cart } = this.props;
    const cartItemList =
      cart.length > 0
        ? cart.map((cartItem, index) => (
            <CartItem
              key={index}
              product={cartItem.product}
              quantity={cartItem.quantity}
            />
          ))
        : [];
    const totalAmount = cart.length > 0 ? <CartResult cart={cart} /> : null;
    return (
      <Cart>
        {cartItemList}
        {totalAmount}
      </Cart>
    );
  }
}

CartContainer.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired
      }).isRequired,
      quantity: PropTypes.number.isRequired
    })
  ).isRequired
};

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

export default connect(mapStateToProps, null)(CartContainer);
