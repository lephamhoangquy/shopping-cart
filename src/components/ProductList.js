import React, { Component } from "react";
import ProductItem from "./ProductItem";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class ProductList extends Component {
  render() {
    const { products } = this.props;
    const productList =
      products.length > 0
        ? products.map(product => (
            <ProductItem key={product.id} product={product} />
          ))
        : [];
    return (
      <section className="section">
        <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
        <div className="row">{productList}</div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

ProductList.propTypes = {
  products: PropTypes.array
};

export default connect(mapStateToProps, null)(ProductList);
