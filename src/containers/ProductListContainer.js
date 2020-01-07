import React, { Component } from "react";
import PropTypes from "prop-types";
import ProductList from "../components/ProductList";
import ProductItem from "../components/ProductItem";
import { connect } from "react-redux";

class ProductListContainer extends Component {
  render() {
    const { products } = this.props;
    const productList =
      products.length > 0
        ? products.map(product => (
            <ProductItem key={product.id} product={product} />
          ))
        : [];
    return <ProductList>{productList}</ProductList>;
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

ProductListContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired
    })
  ).isRequired
};

export default connect(mapStateToProps, null)(ProductListContainer);
