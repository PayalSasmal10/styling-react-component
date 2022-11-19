import React, { useState } from "react";

import Button from "../../UI/Button/Button";

// without styled component
// import "./CourseInput.css";

// with styled component
import styled from "styled-components";

const FormControl = styled.div`
  
  margin: 0.5rem 0;


  && label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${props => (props.invalid ? 'rgb(249, 49, 49)' : '')};
  }

  && input {
    display: block;
    width: 100%;
    border: 1px solid #ccc ${props => (props.invalid ? 'red' : '#ccc' )} ; 
    background: ${props => (props.invalid ? '#fad0ec' : 'transparent')};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  && input:focus {
    outline: none;
    background: #fad0ec; 
    border-color: #8b005d;
  }

  // &&.invalid label{
  //   color: rgb(249, 49, 49);
  // }

  // &&.invalid input{
  //   border-color: #f93011;
  //   background: #febbb0;
  // }
`;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [IsValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if(event.target.value.trim().length > 0){
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  // with sytle component
  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl invalid={!IsValid}>
        <label>Course Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
        />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );

  // without sytle component
  /*return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!IsValid ? "invalid" : ''}`}>
        <label>Course Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );*/
};

export default CourseInput;
