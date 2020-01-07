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
  products: PropTypes.array
};

export default connect(mapStateToProps, null)(ProductListContainer);
