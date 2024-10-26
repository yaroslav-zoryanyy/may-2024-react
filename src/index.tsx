import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {RouterProvider} from "react-router-dom";
import {routes} from "./routers/routes";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <RouterProvider router={routes}/>
);
