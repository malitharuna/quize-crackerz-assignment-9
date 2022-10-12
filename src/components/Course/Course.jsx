import React from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';


const Course = ({course}) => {
    // console.log(course)
    const {id, name, logo} = course;
    return (
        <div>
            <div className='course'>
                    <img src={logo} alt="" />
                   <div className='course-detail'>
                        <h2>Course Name: {name} </h2>  
                        <Link to={`/course/${id}`}>
                            <button>Start Quiz</button>
                            <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                        </Link>    
                    </div> 
            </div>
        </div>
    );
};

export default Course;