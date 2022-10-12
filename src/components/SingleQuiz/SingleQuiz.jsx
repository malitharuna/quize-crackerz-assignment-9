import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import './SingleQuiz.css'


const SingleQuiz = ({singleQuestion, questionSerial}) => {

    const { options, question, correctAnswer} = singleQuestion;
    // console.log(correctAnswer);
    console.log(options);

    const handleCorrectAns = (option) => {
            if(option === correctAnswer) {
                alert('correct Answer');
            }else{
                alert('wrong Answer');
            }
        };

        const  handleCorrectIcon = (correctAnswer) =>{
               alert(correctAnswer)
            }

    return (
        <div className='answers'>
            <button  onClick={()=>handleCorrectIcon(correctAnswer)} className='answer-icon'><FontAwesomeIcon  icon={faEye}></FontAwesomeIcon></button>
            
            <div >
                <h3>{question}</h3>
                
            </div>
          <div>
          {
                options.map((option, index)=> <div className='answer-option' key={index}>
                    <input onChange={()=> handleCorrectAns(option)}  type="radio" name="answer" value="option"></input>
                    <label for="option">{option}</label>
                    
                </div>)
            }
          </div>

        </div>
    );
};

export default SingleQuiz;