/* eslint-disable */
import React, { useRef, useState, useEffect, useContext } from 'react';
import {useLocation, useNavigate} from 'react-router-dom'
import axios from '../../api/axios';

const _URL = '/stat';
// components

import CardStats from "../Cards/CardStats.js";

export default function HeaderStats() {
  const [reserved ,setReserved] = useState([]);
  const [pendings,setPendings] = useState([]);

  
  useEffect(() => {
   
    axios.get(
          `delivery${_URL}`,
          {
                headers: {
                      'Content-Type': 'application/json',
                      'Access-Control-Allow-Origin': '*',
                      'Access-Control-Allow-Methods':
                      'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                },

                withCredentials: true,
          }
    )
    .then(res =>{
      setReserved(res.data.reserved)
      setPendings(res.data.pending)
    })
    .catch(err =>{console.log(err)
    })
},[])



  return (
    <>
      {/* Header */}
      <div className="relative bg-teal-500 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="DELIVERY RESERVED"
                  statTitle={reserved}
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-truck"
                  statIconColor="bg-teal-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="DELIVERY PENDING"
                  statTitle={pendings}
                  statArrow="down"
                  statPercent=""
                  statPercentColor="text-red-500"
                  statDescripiron="Since last week"
                  statIconName="fas fa-truck"
                  statIconColor="bg-orange-500"
                />
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
