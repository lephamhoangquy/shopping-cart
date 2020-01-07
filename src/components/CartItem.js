/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import PropTypes from "prop-types";

class CartItem extends Component {
  render() {
    const { product, quantity, onIncrease, onDecrease, onRemove } = this.props;
    const totalSubPrice = product.price * quantity;
    return (
      <tr>
        <th scope="row">
          <img src={product.image} alt="" className="img-fluid z-depth-0" />
        </th>
        <td>
          <h5>
            <strong>{product.name}</strong>
          </h5>
        </td>
        <td>{product.price}$</td>
        <td className="center-on-small-only">
          <span className="qty">{quantity} </span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label
              className="btn btn-sm btn-primary
                                  btn-rounded waves-effect waves-light"
              onClick={() => {
                onDecrease(product);
              }}
            >
              <a>—</a>
            </label>
            <label
              className="btn btn-sm btn-primary
                                  btn-rounded waves-effect waves-light"
              onClick={() => {
                onIncrease(product);
              }}
            >
              <a>+</a>
            </label>
          </div>
        </td>
        <td>{totalSubPrice}$</td>
        <td>
          <button
            type="button"
            className="btn btn-sm btn-primary waves-effect waves-light"
            data-toggle="tooltip"
            data-placement="top"
            title=""
            data-original-title="Remove item"
            onClick={() => {
              onRemove(product.id);
            }}
          >
            X
          </button>
        </td>
      </tr>
    );
  }
}

CartItem.propTypes = {
  product: PropTypes.object,
  quantity: PropTypes.number
};

export default CartItem;
