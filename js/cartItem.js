import React from 'react';
import ReactDOM from 'react-dom';


class CartItem extends React.Component {
  constructor(props){
    super(props);
    this.item = this.props.product;
  }
  
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <div><img src={this.item.imageurl}/></div>
          <div>{this.item.name}</div>
          <div><input  className="" type="text" value=""/></div>
          <div>{this.item.price}</div>
        </div>
      </div>
    )
  }
}

export default CartItem;
