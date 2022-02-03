/* eslint-disable */
import React, { useRef, useState, useEffect, useContext } from 'react';
import {useLocation, useNavigate} from 'react-router-dom'
import axios from '../../api/axios';

const LOGIN_URL = '/all';

// components

import CardTable from "../../components/Cards/CardTable.jsx";

export default function Manager() {
  const [managers ,setManagers] = useState([]);

  useEffect(() => {
   
          axios.get(
                `manager${LOGIN_URL}`,
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
            setManagers(res.data.managers)
          })
          .catch(err =>{console.log(err)
            errRef.current.focus();
          })
},[])

  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTable Managers={managers}/>
        </div>
        
      </div>
    </>
  );
}
