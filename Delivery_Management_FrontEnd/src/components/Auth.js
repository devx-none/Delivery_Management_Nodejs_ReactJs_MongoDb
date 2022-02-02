/* eslint-disable */
import React, { useRef, useState, useEffect, useContext } from 'react';
import {useLocation, useNavigate} from 'react-router-dom'
import axios from '../api/axios';
// import { UserContext } from "../App";

const LOGIN_URL = '/login';

export function Auth({role}) {
      
      const userRef = useRef();
      const errRef = useRef();
      const navigate = useNavigate();
      const location = useLocation();
      // const { user ,setUser } = useContext(UserContext)



      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [errMsg, setErrMsg] = useState('');
      const [success, setSuccess] = useState(false);

      useEffect(() => {
            userRef.current.focus();
      }, []);

      useEffect(() => {
            setErrMsg('');
      }, [email, password]);

      const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                  const response = await axios.post(
                        `${role}${LOGIN_URL}`,
                        JSON.stringify({ email, password }),
                        {
                              headers: {
                                    'Content-Type': 'application/json',
                                    'Access-Control-Allow-Origin': '*',
                                    'Access-Control-Allow-Methods':
                                    'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                              },

                              withCredentials: true,
                        }
                  );
                  // console.log(JSON.stringify(response));

                  const accessToken = response?.data?.token;
                  localStorage.setItem(role,accessToken);

                  setEmail('');
                  setPassword('');
                  setSuccess(true);

                  //if auth is true
                  // setUser({loggeIn: true});

                  navigate(`/${role}/dashboard`, { replace: true });            } 
                  catch (err) {
                  if (!err?.response) {
                        setErrMsg('No Server Response');
                  } else if (err.response?.status === 400) {
                        setErrMsg('Missing Email or Password');
                  } else if (err.response?.status === 401) {
                        setErrMsg('Unauthorized');
                  } else {
                        setErrMsg('Login Failed');
                  }

                  errRef.current.focus();
            }
      };

      return (
            <div className="signIn-page">
                  <br />
                  <br />
                  <p
                        ref={errRef}
                        className={errMsg ? 'errmsg' : 'offscren'}
                        aria-live="assertive"
                  >
                        {errMsg}
                  </p>
                  <div className="p-10">
                        <h2
                              className="text-center text-3xl leading-9 
          font-extrabold text-gray-800"
                        >
                              Sign In to your account
                        </h2>
                        <p
                              className="text-center text-sm leading-5 
           text-gray-600"
                        ></p>
                        <br />
                        <br />
                        <form onSubmit={handleSubmit}>
                              <div className="flex justify-center">
                                    <div className="lg:w-1/3 md:w-2/3 w-full">
                                          <label
                                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                htmlFor="email"
                                          >
                                                Email
                                          </label>
                                          <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                ref={userRef}
                                                placeholder="Exemple@gmail.com"
                                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full 
                  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
                                                required
                                                onChange={(e) =>
                                                      setEmail(e.target.value)
                                                }
                                                value={email}
                                          />
                                    </div>
                              </div>

                              <div className="flex justify-center mt-4">
                                    <div className="lg:w-1/3 md:w-2/3 w-full">
                                          <label
                                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                htmlFor="password"
                                          >
                                                Password
                                          </label>
                                          <input
                                                type="password"
                                                name="password"
                                                id="password"
                                                ref={userRef}
                                                placeholder="*********"
                                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full 
                  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
                                                required
                                                onChange={(e) =>
                                                      setPassword(
                                                            e.target.value
                                                      )
                                                }
                                                value={password}
                                          />
                                    </div>
                              </div>
                              {/** submit button */}
                              <div className="mt-4 flex justify-center">
                                    <button
                                          type="submit"
                                          className="group w-full lg:w-1/3 md:w-2/3 py-2 px-4  border border-transparent text-sm leading-5 font-medium 
                rounded-md text-white bg-teal-500 hover:bg-teal-400 focus:outline-none focus:border-teal-400 
                focus:shadow-outline-teal active:bg-teal-400 active:outline-none transition duration-150 ease-in-out"
                                    >
                                          Sign In
                                    </button>
                              </div>
                        </form>
                  </div>
            </div>
      );
}
