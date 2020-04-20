import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 60px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }
    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    hr {
      background: rgba(255, 255, 255, 0.5);
      margin: 10px 0 20px;
      height: 1px;
      border: 0;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #3d9eff;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s ease;

      &:hover {
        background: ${darken(0.03, '#3d9eff')};
      }
    }
  }
  > button {
    width: 100%;
    margin: 10px 0 0;
    height: 44px;
    background: #f64c75;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s ease;

    &:hover {
      background: ${darken(0.08, '#f64c75')};
    }
  }
`;
