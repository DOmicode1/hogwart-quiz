import React, { PureComponent, Fragment } from 'react';
import Header from 'components/Header';
import Question from 'components/question';

class App extends PureComponent {
  render() {
    return (
      <Fragment>
        <Header text="Hello World!" color="primary" />
        <img src="sample_img.jpg" />
      </Fragment>
      // <Question content="Co jest dla Ciebie najważniejsze?" />
    );
  }
}

export default App;
