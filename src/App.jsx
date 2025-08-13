import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout';
import All from './Components/Category/All/All';
import Category from './Components/Category/Category/Category';
import RecipeDetails from './Components/RecipeDetails/RecipeDetails';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';


function App() {
  const router = createBrowserRouter([
    {path: '/', element: <Layout />, children: [
      {path: '', element: <Home />, children: [
        {index: true, element: <All />},
        {path: "/category/:cat", element: <Category />},
      ]},
      {path: "/mealdetails/:id", element: <RecipeDetails />},
      {path: "*", element: <NotFound />},
    ]},
  ]);

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
