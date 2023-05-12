import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/updateCoffee.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch("http://localhost:5000/coffee")
  },
  {
    path: "/add-coffee",
    element: <AddCoffee></AddCoffee>
  },
  {
    path: "/update-coffee",
    element: <UpdateCoffee></UpdateCoffee>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
