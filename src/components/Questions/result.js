import React from 'react';

function Result(props) {
  return (
    <div className="result">
      Twój dom to: <strong>{props.quizResult}</strong>!
      </div>
  );
}


export default Result;
