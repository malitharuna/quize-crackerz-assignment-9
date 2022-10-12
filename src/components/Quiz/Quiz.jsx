import React from 'react';

import { useLoaderData } from 'react-router-dom';
import './Quiz.css'
import SingleQuiz from '../SingleQuiz/SingleQuiz';

const Quiz = () => {
    const quiz = useLoaderData();
    // console.log(quiz)
    let {data} = quiz;
    let {name, questions} = data;
        // console.log(questions);    
     
    return (
        <div className=''>
            {
              questions.map((singleQuestion, questionSerial) => <SingleQuiz
                key={questionSerial}
                singleQuestion={singleQuestion}
              ></SingleQuiz>
            )}
        </div>
    )
};

export default Quiz;