import React from 'react';
import { Container } from './styles';
import Patronusy from './Patronusy';

class Patronus extends React.Component {
  constructor() {
    super();
    this.zwierze = Patronusy[0][1];
  }
  state = {
    text: 'EXPECTO PATRONUM!',
  };
  losuj = () => {
    const i = Patronusy.length;
    let losowa = Math.floor(Math.random() * i);
    losowa == 0 ? (losowa = 1) : losowa; // zeby nie dalo sie sowy trafic, wywalić później
    // console.log(Patronusy[losowa], i);

    this.zwierze = Patronusy[losowa][1];
    this.setState({ text: `Twój Patronus to ${Patronusy[losowa][0]}` });
    // this.klik = null;
  };
  klik = this.losuj;
  render() {
    // let zwierze = Sowa;
    console.log('to', this.zwierze);
    return (
      <Container name={this.zwierze}>
        <div className="button" onClick={this.klik}>
          &nbsp;
          {this.state.text}
          &nbsp;
        </div>
        <br />
        <img className="obrazek" />
      </Container>
    );
  }
}

export default Patronus;
