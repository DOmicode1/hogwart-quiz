import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from './styles';
import Patronusy from './Patronusy';
import App from '../../views/App/index';

class Patronus extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.zwierze = Patronusy[0][1];
    this.powrot = false;
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
    this.powrot = true;
    this.klik = null;
  };
  powrot = () => {
    console.log('Powrot');
    console.log(this.props.quizResult, App);
    // ReactDOM.render(<App />, document.getElementById('root')); to nie dziala a powinno
    location.reload();
  };
  klik = this.losuj;
  klik1 = this.powrot;
  render() {
    // let zwierze = Sowa;
    // console.log('to', this.zwierze);
    return (
      <Container name={this.zwierze}>
        <div className="button" onClick={this.klik}>
          &nbsp;
          {this.state.text}
          &nbsp;
        </div>
        {this.powrot ? (
          <div className="button" onClick={this.klik1}>
            {' '}
            &nbsp; Powrót &nbsp;
          </div>
        ) : (
          <br />
        )}
        <br />
        <img className="obrazek" />
      </Container>
    );
  }
}

export default Patronus;
