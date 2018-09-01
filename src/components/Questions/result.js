import React from 'react';
import ReactDOM from 'react-dom';
import Patronus from '../Patronus/Patronus';

function Result(props) {
  // console.log(Patro);
  function losujPatronusa() {
    // console.log(Patronus);
    ReactDOM.render(<Patronus quizResult={props.quizResult} />, document.getElementById('root'));
  }
  return (

    <div className="result">
      Twój dom to: <strong>{props.quizResult}</strong>!
      </div>
      <button type="button" id="losujPatronusa" onClick={losujPatronusa}>
        Teraz wylosuj swojego Patronusa
      </button>
    </div>
  );
}

export default Result;
