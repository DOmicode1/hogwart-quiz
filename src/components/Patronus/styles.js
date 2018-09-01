import styled from 'styled-components';

export const Container = styled.h2`
  padding-top: 1rem;
  background-color: black;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .obrazek {
    align-self: center;
    content: url(${props => props.name});
    max-width: 100%;
    height: calc(100% - 10rem);
    border-radius: 500px;
  }
  .button {
    background-color: var(--primary1);
    border-radius: 5px;
    width: max-content;
    margin: 1em;
    align-self: center;
    height: 2em;
    color: white;
    text-align: center;
    vertical-align: middle;
    line-height: 2em;
    user-select: none;
    transition: linear 1s;
    &:hover {
      cursor: pointer;
      background-color: var(--primary2);
      transform: scale(1.1);
    }
  }
`;
