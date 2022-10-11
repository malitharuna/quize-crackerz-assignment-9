import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

import './Home.css'

const Home = () => {
    const courses = useLoaderData();
   
    console.log(courses);
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
                courses.data.map(course => <Course
                    key={course.id}
                    course={course}
                ></Course>)
            }
        </div>
        
       </div>
    );
};

export default Home;