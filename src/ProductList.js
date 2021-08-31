import React, { Component } from 'react';

class ProductList extends Component {
  render() {
    console.log("we are inside ProductList and this is our props", this.props)
    return (
      <div>
        HEllo
      </div>
    );
  }
}

export default ProductList;