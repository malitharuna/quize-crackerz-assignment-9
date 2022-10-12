import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLoaderData } from 'react-router-dom';
import './Quiz.css'
import { faEye } from '@fortawesome/free-regular-svg-icons';
import Statistics from '../Statistics/Statistics';

const Quiz = () => {
    const quiz = useLoaderData();
    const questions = quiz.data.questions;
    // console.log(questions);
    const {id, question, correctAnswer, options} = questions;
    
    const  handleCorrectIcon=(option)=>{
        // if(correctAnswer){
        //     option.id = conpmrrectAnswer
        // }
    }
    const handleCorrectAns = (id) => {
        if(id === correctAnswer) {
            alert('correct Answer');
        }else{
            alert('wrong Answer');
        }
    };
     
    return (
        <div>
            <div className='answers'>
            <button  onClick={handleCorrectIcon} className='answer-icon'><FontAwesomeIcon   icon={faEye}></FontAwesomeIcon></button>
            <p> {correctAnswer}</p>
            {
                questions.map(question => <div key={question.id}>
                    <h3>{question.question}</h3>
                    
                    <div >
                        {question.options.map( option =>   <div className='answer-option' key={option.id} >
                            <input onClick={()=>handleCorrectAns(option, id)}  type="radio" id={option.id} name="answer" value="option"></input>
                            <label for="option">{option}</label>
                          </div>
                         
                            )} 
                    </div>
                </div>)
            }
            </div>
            <div>
            </div>
            <Statistics 
                question={question}>
            </Statistics>
        </div>
    );
};

export default Quiz;