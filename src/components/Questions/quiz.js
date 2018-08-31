import React from 'react';

import Question from './question';
import QuestionCount from './questionCount';
import AnswerOption from './answerOption';



function Quiz(props) {
  return (
    <div className="quiz">
      <QuestionCount
        counter={props.questionId}
        total={props.questionTotal}
      />
      <Question content={props.question} />
      <ul className="answerOptions">
        {props.answerOptions.map(renderAnswerOptions)}
      </ul>
    </div>
  );
  function renderAnswerOptions(key) {
    return (
      <AnswerOption
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  }
}



export default Quiz;
