
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';
import Main from './layouts/Main';

function App() {
const router = createBrowserRouter([
{
  path: '/',
  element: <Main></Main>,
  children: 
  [
    {
      path: '/',
      loader: () => fetch('https://openapi.programming-hero.com/api/quiz') ,
      element: <Home></Home>
    },
    {
      path: '/home',
      loader: () => fetch('https://openapi.programming-hero.com/api/quiz') ,
      element: <Home></Home>
    },
    {
      path: '/course/:courseId',
      loader: async ({params}) =>{
        // console.log(params)
        return fetch(`https://openapi.programming-hero.com/api/quiz/${params.courseId}`)
      },
      element: <Quiz></Quiz>
    },
    {
      path: '/blog',
      element: <Blog></Blog>
    },

    {
      path: '*',
      element: <div><h2>This route is not found. 404 error</h2></div>
    }
  ]
}
]);

  
return (
    <div className="App">
      <RouterProvider router={router}>
            </RouterProvider>
      
    </div>
  );
}

export default App;
