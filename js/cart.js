import React from 'react';
import ReactDOM from 'react-dom';
import Shipping from './shipping';
import Billing from './billing';
import CartItems from './cartItems';
import RunningOrder from './runningOrder';
import CartItem from './cartItem';


class Cart extends React.Component {
  rows = [];

  constructor(props) {
      super(props);
      this.state = {Items:[]};
      this.state.Items = [
          {imageurl:'/public/images/envelope.png', name:'Self Seal Envelopes', price:'75.99'},
          {imageurl:'/public/images/check.png', name:'Standard Checks', price:'239.99'},
          {imageurl:'/public/images/spen.png', name:'Super Security Pens', price:'19.99'}
        ];
  };

  componentDidMount() {
    this.rows = [];
    fetch('')
    .then(response => response.json())
    .then(json => this.setState(json.data))
    .catch(ex => console.error(ex))
  };

  render() {
    this.state.Items.forEach(product => {
      this.rows.push(<CartItem product={product} />);
    });
    return (
      <div>
        <div className='row'>
          <div className='col-md-6'>
            <Shipping></Shipping>
          </div>
          <div className='col-md-6' >
            <Billing></Billing>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-8'>
            {this.rows}
          </div>
          <div className='col-md-4'>
            <RunningOrder></RunningOrder>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
