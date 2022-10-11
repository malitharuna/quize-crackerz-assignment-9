import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({course}) => {
    // console.log(course)
    const {id, name, logo} = course;
    return (
        <div>
            <div className='course'>
                    <img src={logo} alt="" />
                   <div className='course-detail'>
                        <h2>Course Name: {name} </h2>  
                        <Link to={`/course/${id}`}><button>Start Quiz</button></Link>    
                    </div> 
            </div>
        </div>
    );
};

export default Course;