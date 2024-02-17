import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import RegisterPage from './Components/Register';
import Login from './Components/Login';
import Home from './Components/Home';
import { Provider } from 'react-redux';
import main from './Store/main.js';
import Todo from './Components/Todo.js';
import CreateTeam from './Components/CreateTeam.js';


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path:'/',element: <App/> , children:[
        {path:'/', element: <LandingPage />},
        {path:'/register',element: <RegisterPage/>},
        {path:"/login",element:<Login /> },
        {path:'/Home',element:<Home/> , children:[
          { path: '/Home', element: <LandingPage /> },
          { path: '/Home/Todos', element: <Todo /> },
          {path:'/Home/create-team',element: <CreateTeam/>}
        ]}
    ]
  },
 
])
root.render(
  <React.StrictMode>
    <Provider store={main}>
      <RouterProvider router={router}>
    <App />
    </RouterProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
