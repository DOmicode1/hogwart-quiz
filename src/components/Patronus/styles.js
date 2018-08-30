import styled from 'styled-components';
import owl from './owl_patronus.jpg';

export const Container = styled.h2`
  padding-top: 2rem;
  height: 100vh;
  background-color: black;
  background-image: url(${owl});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  .button {
    background-color: var(--primary1);
    border-radius: 5px;
    width: max-content;
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
