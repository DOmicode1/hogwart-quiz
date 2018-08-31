import React, { PureComponent, Fragment } from 'react';
import update from 'react-addons-update'; // ES6
import Header from 'components/Header';
import styled from 'styled-components';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// import Home from './home';
// import About from './about';

import quizQuestions from '../../components/Questions/quizQuestions';
import Quiz from '../../components/Questions/quiz';
import Result from '../../components/Questions/result';
import Question from '../../components/Questions/question';





const AppWrapper = styled.div`
  background-color: var(--brown);
  height: 100vh;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Button = styled.button`
  font-size: 1rem;
  padding: 0.25rem 1rem;
  margin: 0 1rem;
  background: white;
`;

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {
        Gryffindor: 0,
        Slytherin: 0,
        Hufflepuff: 0,
        Ravenclaw:0
      },
      result: ''
    };
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }
  componentWillMount() {
    const shuffledAnswerOptions = quizQuestions.map((question) => this.shuffleArray(question.answers));

    this.setState({
      question: quizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0]
    });
  }
  shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };
  setUserAnswer(answer) {
    const updatedAnswersCount = update(this.state.answersCount, {
      [answer]: { $apply: (currentValue) => currentValue + 1 }
    });
    this.setState({
      answersCount: updatedAnswersCount,
      answer: answer
    });
  }

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);
    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {

    }
  }

  render()
  {
    // return <Fragment>
    //     <AppWrapper>
    //       <Header text="Dowiedz się, do którego domu w Howgardzie należysz!" color="" />
    //       <Button>
    //         ZACZNIJ QUIZ
    //       </Button>
    //     <Question content="What is your favourite food?" />

    //     </AppWrapper>
    //   </Fragment>;
    return <Fragment>
      <AppWrapper>

        <Header text="Dowiedz się, do którego domu w Howgardzie należysz!" color="" />

        <Quiz answer={this.state.answer} answerOptions={this.state.answerOptions} questionId={this.state.questionId} question={this.state.question} questionTotal={quizQuestions.length} onAnswerSelected={this.handleAnswerSelected} />
      </AppWrapper>
    </Fragment>;
  }
}

export default App;


