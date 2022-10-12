import React from 'react';

const Blog = () => {
    return (
        <div style={{backgroundColor:'lightgray', width:'75%', margin:'0 auto', padding:'15px 30px', textAlign:"justify"}}>
            <h2>Q.1: What is Purpose of React Router?</h2>

            <p><strong>Ans:</strong>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. </p>

            <h2>Q.2: How does Context API works?</h2>

            <p><strong>Ans:</strong> The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
           
            <p>React.createContext() is returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
            <h2>Q.3: Write about useRef</h2>
            <p>The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. The useRef returns a mutable ref object. This object has a property called .current.</p>
            <p><strong>Ans:</strong> If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render. To avoid this, we can use the useRef Hook. </p>

            <p>In general React handle all DOM manipulation.But there are some instances where useRef can be used without causing issues. In React, we can add a ref attribute to an element to access it directly in the DOM.</p>
            <p>The useRef Hook can also be used to keep track of previous state values. This is because we are able to persist useRef values between renders.</p>
            <p>Use useRef, if we need to <strong>manage focus, text selection, trigger imperative animations or integrating third-party libraries</strong></p>


        </div>
    );
};

export default Blog;