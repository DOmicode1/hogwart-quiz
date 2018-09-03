import React from 'react';

function QuestionCount(props) {
  return (
    <div className="questionCount">
      Pytanie <span>{props.counter}</span> z <span>{props.total}</span>
    </div>
  );
}


export default QuestionCount;
