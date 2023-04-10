import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main/Main';
import Statistics from './components/Statistics/Statistics';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import JobDetails from './components/JobDetails/JobDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "statistics",
        element: <Statistics></Statistics> 
      },
      {
        path: "applied-jobs",
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: "blog",
        element: <Blog></Blog>
      },
      {
        path: "job-details/:jobId",
        element: <JobDetails></JobDetails>
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
