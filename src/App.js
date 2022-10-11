
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import Courses from './components/Courses/Courses';
import Home from './components/Home/Home';
import Main from './layouts/Main';

function App() {
const router = createBrowserRouter([
{
  path: '/',
  element: <Main></Main>,
  children: 
  [
    {
      path: '/home',
      loader: () => fetch('https://openapi.programming-hero.com/api/quiz') ,
      element: <Home></Home>
    },
    {
      path: '/courses',
      element: <Courses></Courses>
    },

    {
      path: '*',
      element: <div><h2>This route is not found</h2></div>
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
