import React from 'react';
import { useLoaderData } from 'react-router-dom';

import './Home.css'

const Home = () => {
    const courses = useLoaderData();
    // const {name, logo} = courses.data;
    console.log(courses.data);
    return (
       <div>
         <div className='hero'>
            <div className='hero-img'>
                <img src="/src/resources/image1.jpg" alt="" />
            </div>
            <div className='hero-title'>
                <h1>Feel Free to Check Your <br />
                    <strong>Web Develoment Skill</strong></h1>
            </div>
        </div>
        <div className=' courses'>
            {
                courses.data.map(course => <div className='course'  key={courses.data.id}>
                    <img src={course.logo? course.logo : 'not found'} alt="" />
                   <div className='course-detail'>
                        <h2> {course.name}</h2>  
                        <button>Start Quiz</button>  
                    </div> 
                </div>)
            }
        </div>
        
       </div>
    );
};

export default Home;