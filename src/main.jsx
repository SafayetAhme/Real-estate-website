import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Route from './component/route/Route';
import Home from './component/page/home/Home';
import Contact from './component/page/contact/Contact';
import Blog from './component/page/blog/Blog';
import Agent from './component/page/agent/Agent';
import SignIn from './component/page/signin/SignIn';
import SignUp from './component/page/signup/SignUp';
import AllResout from './component/page/All resout/AllResout';
import AboutUs from './component/page/about us/AboutUs';
import Details from './component/page/details/Details';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Route></Route>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/detail/:id",
        element: <Details></Details>,
        loader: () => fetch('http://localhost:5000/item')
      },
      {
        path: "/allresout",
        element: <AllResout></AllResout>
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/agent",
        element: <Agent></Agent>
      },
      {
        path: "/aboutus",
        element: <AboutUs></AboutUs>
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
