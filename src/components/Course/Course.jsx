import React from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import './Course.css'



const Course = ({course}) => {
    // console.log(course)
    const {id, name, logo, total} = course;
    return (
        <div>
            <div className='course-item'>
                    <img src={logo} alt=""/>
                   <div className='course-detail'>
                        <h2>Course: {name} </h2>  
                        <Link to={`/course/${id}`}>
                            <button className='btn-course'>Start Quiz
                            <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                            </button>
                      
                        </Link>    
                    </div> 
            </div>
           <div>
           
           </div>
        </div>
    );
};

export default Course;