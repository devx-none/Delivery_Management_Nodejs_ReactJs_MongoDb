import React from 'react';
import {Routes, Route ,Outlet } from 'react-router-dom';

// components

import Navbar from '../components/Navbars/Navbar.jsx';
import Sidebar from '../components/Sidebar/Sidebar.jsx';
import HeaderStats from '../components/Headers/HeaderStats.jsx';

// views

import DashboardAdmin from '../views/admin/Dashboard.jsx';
import TablesAdmin from '../views/admin/Manager.jsx';
import DashboardManager from '../views/manager/Dashboard.jsx';
import TablesManager from '../views/manager/Tables.jsx';
import Delivery from '../views/admin/Delivery.jsx';
import DashboardDM from '../views/DeliveryManager/Dashboard';
import TablesDM from '../views/DeliveryManager/Tables';


export function Admin() {
      
      return (
            <>
                  <Sidebar  />
                  <div className="relative md:ml-64 bg-blueGray-100">
                        <Navbar />
                        {/* Header */}
                        <HeaderStats />
                        <div className="px-4 md:px-10 mx-auto w-full -m-24">
                                    <Routes> 
                                         
                                          <Route
                                                path="/admin/dashboard"  
                                                element={<DashboardAdmin page="admin"/>}
                                          />
                                          <Route
                                                path="/admin/tables" 
                                                element={<TablesAdmin page="admin"/>}
                                          />
                                          <Route path="/admin/delivery" element={<Delivery page="admin"/>}
                                          />
                                           <Route
                                                path="/manager/dashboard"  
                                                element={<DashboardManager  page="manager" />}
                                          />
                                          <Route
                                                path="/manager/tables" 
                                                element={<TablesManager page="manager"/>}
                                          />
                                            <Route
                                                path="/deliveryManager/dashboard"  
                                                element={<DashboardDM  page="deliveryManager" />}
                                          />
                                          <Route
                                                path="/deliveryManager/tables" 
                                                element={<TablesDM page="deliveryManager"/>}
                                          />
                                       
                                    </Routes>
                                   
                             
                        </div>
                        <Outlet/>
                  </div>
                
            </>
      );
}
