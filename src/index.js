import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import store from './Store';
import {Provider} from 'react-redux'
import ProfileScreen from './screens/ProfileScreen';
import PrivateRoute from './components/PrivateRoute';

const router = createBrowserRouter(
   createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomeScreen />} />
      <Route  path='/login' element={<LoginScreen />} />
      <Route  path='/register' element={<RegisterScreen />} />
      {/* // Private Routes */}
      <Route path='' element={<PrivateRoute />}>
      <Route  path='/profile' element={<ProfileScreen />} />
      </Route>/
    </Route>
   )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store }>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

