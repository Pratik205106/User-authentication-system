import React from 'react'
import { RouterProvider } from 'react-router';
import { route } from './routes/Route';

const App = () => {
  return (
    <div>
      <RouterProvider router={route}/>
    </div>
  )
}

export default App; 
