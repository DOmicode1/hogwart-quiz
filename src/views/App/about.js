import React from 'react';
//import questionsArray from '../../components/Questions/options';
import quizQuestions from '../../components/Questions/quizQuestions';

const About = () => {
  return (
    <div className="container">
      <h1>quizzz</h1>
      {quizQuestions.question}
    </div>
  );
}

export default About;


