import React from 'react';
import ReactDOM from 'react-dom';
import CartItem from './cartItem';


class CartItems extends React.Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
            <CartItem></CartItem>
        </div>
      </div>
    )
  }
}

export default CartItems;
