import React from 'react';
import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const Body = () => {
  // Define your router with routes
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />, // Login component will render at root path
    },
    {
      path: "/browse",
      element: <Browse />, // Browse component will render at /browse path
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
