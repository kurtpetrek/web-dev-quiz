import React from 'react';
import styled from 'styled-components';

const BlockLabel = styled.label`
  display: block;
  margin: 10px 0;
  position: relative;
  font-size: 1.3rem;
  cursor: pointer;
  transition: .25s;

  input {
    display: none;
  }

  span {
    display: block;
    padding-left: 50px;

    &::before {
      content: '';
      position: absolute;
      height: 10px;
      width: 10px;
      border: 2px solid black;
      left: 20px;
      top: 5px;
      transition: .25s;
    }
  }

  input:checked + span {
    font-size: 1.4rem;

    &::before {
      border-top: none;
      border-left: none;
      transform: rotate(45deg);
      height: 20px;
      top: -2px;
    }
  }
`;

export default function RadioCheckBox(props) {
  let disabled = false;
  if (props.disabled === true) {
    disabled = true;
  }
  return (
    <BlockLabel>
      <input
        type="radio"
        disabled={disabled}
        value={props.value}
        checked={props.checked}
        onChange={props.handleInput}

      />
      <span>
        {props.children}
      </span>
    </BlockLabel>
  )
}
