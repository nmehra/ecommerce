import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';
import Cart from './cart';

class App extends React.Component {
  props = {
    app : 'main app'
  };
  constructor(props) {
      super(props);
  };
  render() {
    return (
      <div >
        <Cart />
      </div>
    );
  }
}

App = Relay.createContainer( App, {fragments:{}});

class AppRoute extends Relay.Route {
  static routeName = 'App123';
}
ReactDOM.render(
  <Relay.RootContainer
    Component={App}
    route={new AppRoute()}
  />,
  document.getElementById('react')
);

/*ReactDOM.render(
  <App
  />,
  document.getElementById('react')
);*/
