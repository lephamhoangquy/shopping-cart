import React, { Component } from "react";
import PropTypes from "prop-types";

class ProductList extends Component {
  render() {
    return (
      <section className="section">
        <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
        <div className="row">{this.props.children}</div>
      </section>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.array
};

export default ProductList;
