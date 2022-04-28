

import Todolist from './Todolist';
import React, { useState, useRef, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';



const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course = {course}/>
      <Content part1 = {part1} part2 = {part2} part3 = {part3}/>
      <Total exercises1 = {exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </div>
  )
}

const Header = (props) => {

   return <h1>{props.course}</h1>
}

const Content = (props) => {

  const {part1,part2,part3} = props;
    
  return <div><p>{part1}</p> <p>{part2}</p> <p>{part3}</p></div>
}

const Total = (props) => {

  const {exercises1, exercises2, exercises3} = props;

  return <div><p>{exercises1}</p> <p>{exercises2}</p> <p>{exercises3}</p></div>
}


export default App;
//export {App};