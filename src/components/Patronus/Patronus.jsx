import React from 'react';
import { Container } from './styles';

class Patronus extends React.Component {
  constructor() {
    super();
    this.state = {
      text: 'EXPECTO PATRONUM!',
    };
  }
  losuj() {
    let losowa = Math.random();
    console.log(losowa);
    this.setState({ text: 'Twój Patronus to Sowa' });
  }
  render() {
    console.log('test', React);
    return (
      <Container>
        <div className="button" onClick={this.losuj}>
          &nbsp;
          {this.state.text}
          &nbsp;
        </div>
      </Container>
    );
  }
}

export default Patronus;
