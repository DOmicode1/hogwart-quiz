import React, { PureComponent, Fragment } from 'react';
import Header from 'components/Header';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './Home';
import About from './About';


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
  render() {
    return <Fragment>
        <AppWrapper>
          <Header text="Dowiedz się, do którego domu w Howgardzie należysz!" color="" />
          <Router>
            <div className="container">
              <Button>
                <Link to="/about">ZACZNIJ QUIZ</Link>
              </Button>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
            </div>
          </Router>
        </AppWrapper>
      </Fragment>;
  }
}

export default App;
