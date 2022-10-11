import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Quiz.css'

const Quiz = () => {
    const quiz = useLoaderData();
    // console.log(quiz);
    const questions = quiz.data.questions;
    console.log(questions);
    return (
        <div>
            <div>
            {
                questions.map(question => <div key={question.id}>
                    <h3>{question.question}</h3>
                    <div className='answers'>
                        {question.options.map( option => 
                            <div className='answer-option'>
                            <input type="radio" id={option.id} name="answer" value="option"></input>
                            <label for="option">{option}</label>
                          </div>
                            )};
                        
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