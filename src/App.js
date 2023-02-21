import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [questions,setquestions]=useState([{
    numb: 1,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language"
    ]
  },
  {
    numb: 2,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet"
    ]
  },
  {
    numb: 3,
    question: "What does PHP stand for?",
    answer: "Hypertext Preprocessor",
    options: [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hypertext Preprogramming",
      "Hometext Preprocessor"
    ]
  },
  {
    numb: 4,
    question: "What does SQL stand for?",
    answer: "Structured Query Language",
    options: [
      "Stylish Question Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Structured Query Language"
    ]
  },
  {
    numb: 5,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language"
    ]
  }])
 

  const [index,setindex]=useState(0)
  const [num,setnum]=useState(0)
  const [result,setresult]=useState(false)


  let checkans=(userselected,correctanswer)=>{
    console.log("UserSelected = " ,userselected)
    console.log("Correct Anser = " ,correctanswer)


    if(userselected == correctanswer){
      setnum(num +1)
    }
    if(index+1 == questions.length){
      setresult(index +1)
    }
    setindex(index+1)
  }
  return (
    <div className="App">
       <header className="App-header">    
      {result? <h1>Your Marks Are {num}</h1> : <div>
        
      <h1 className='hue'>{questions[index].question}</h1>                         
     <hr />
     <hr />

    {questions[index].options.map((x,i)=>{
      return(
        <div key={i}>
          <button className='btnn' onClick={()=>checkans(x,questions[index].answer)}>{x}</button>
        </div>
      )
    })}

        </div>}                      
        </header>                        
    </div>
  );
}

export default App;