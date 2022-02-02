/* eslint-disable */
import React, { useRef, useState, useEffect, useContext } from 'react';
import {useLocation, useNavigate} from 'react-router-dom'
import axios from '../../api/axios';

const _URL = '/all';

// components

import CardDeliveries from "../../components/Cards/CardDeliveries";

export default function Manager() {
  const [deliveries ,setDeliveries] = useState([]);

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
            setDeliveries(res.data.deliveries)
          })
          .catch(err =>{console.log(err)
            errRef.current.focus();
          })
},[])

  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardDeliveries Deliveries={deliveries}/>
        </div>
        
      </div>
    </>
  );
}
