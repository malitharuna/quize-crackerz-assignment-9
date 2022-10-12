import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLoaderData } from 'react-router-dom';
import './Quiz.css'
import { faEye } from '@fortawesome/free-regular-svg-icons';

const Quiz = () => {
    const quiz = useLoaderData();
    const questions = quiz.data.questions;
    console.log(questions);
    const {id, question, correctAnswer, options} = questions;
    
    const  handleCorrectIcon=(option)=>{
        // if(correctAnswer){
        //     option.id = correctAnswer
        // }

    }
    const handleCorrectAns = (question, id) => {
        if(questions.id === questions.correctAnswer){
            alert('correct Answer')
        }else{
            alert('wrong Answer')
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
                        {question.options.map( option => 
                            <div className='answer-option' >
                            <input onClick={()=> handleCorrectAns(questions,id)}  type="radio" id={option.id} name="answer" value="option"></input>
                            <label for="option">{option}</label>
                          </div>
                         
                            )} 
                    </div>
                </div>)
            }
            </div>
            <div>
            </div>
        </div>
    );
};

export default Quiz;