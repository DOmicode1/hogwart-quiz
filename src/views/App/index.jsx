import React, { PureComponent, Fragment } from 'react';
import Header from 'components/Header';

class App extends PureComponent {
  render() {
    return <Fragment>
        <Header text="Do którego domu będziesz należał?" color="primary" />
        <img src="sample_img.jpg" />
      </Fragment>;
  }
}

export default App;
