/* eslint-disable */

import React ,{createContext,useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthAdmin } from './views/admin/Login';
import { AuthManager } from './views/manager/Login';
import { AuthDeliveryManager } from './views/DeliveryManager/Login';
import { Admin } from './layouts/Admin';
import { protectedRoutes } from './protecteRoutes'

import "@fortawesome/fontawesome-free/css/all.min.css";

// import { Login } from './layouts/admin/Auth'
export const UserContext = createContext();

function App() {
      const [user ,setUser] = useState({loggedIn:false});
      return (
            <div className="App">
                  <Router>
                        <Routes>
                           
                              <Route path="/admin/auth" element={<AuthAdmin role="admin" />} />
                              <Route element ={<protectedRoutes/>}/>
                              <Route path="/manager/auth" element={<AuthManager role="manager"/>} />
                              <Route path="/deliveryManager/auth" element={<AuthDeliveryManager name="deliveryManager" />} />

                              <Route path="/*" element={<Admin />} />
                        </Routes>
                  </Router>
            </div>
      );
}

export default App;
