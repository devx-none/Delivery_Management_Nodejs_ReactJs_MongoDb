/* eslint-disable */
import React, { useRef,useState ,useEffect} from 'react';
import PropTypes from 'prop-types';
import axios from '../../api/axios';
import Alert from '../Alert/Success'

// components

export default function CardDeliveries({ color, Deliveries }) {
//   const userRef = useRef();
//   const errRef = useRef();
//       const [name, setName] = useState('');
//       const [email, setEmail] = useState('');
//       const [errMsg, setErrMsg] = useState('');
//       const [success, setSuccess] = useState(false);
      const token = localStorage.getItem('admin')

  //     useEffect(() => {
  //       userRef.current.focus();
  // }, []);

//   useEffect(() => {
//         setErrMsg('');
//   }, [name, email]);

    //   const Handlesubmit = async (e) => {
    //         e.preventDefault();
    //         try {
    //              await axios.post(
    //                     `delivery/create`,
    //                     JSON.stringify({ name, email }),
    //                     {
    //                           headers: {
    //                                 'Content-Type': 'application/json',
    //                                 'Access-Control-Allow-Origin': '*',
    //                                 'Access-Control-Allow-Methods':
    //                                       'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    //                                 'authorization':`bearer ${token}`,      
    //                           },
    //                           withCredentials: true,

    //                     }
    //               );
    //               setName('');
    //               setEmail('');
    //               setSuccess(true);


    //         } catch (err) {
    //           if (!err?.response) {
    //             setErrMsg('No Server Response');
    //       } else if (err.response?.status === 400) {
    //             setErrMsg('Missing Name or Email');
    //       } else if (err.response?.status === 401) {
    //             setErrMsg('Unauthorized');
    //       } else {
    //             setErrMsg('Added Failed');
    //       }

    //       // errRef.current.focus();

    //         }
    //   };
      return (
            <>

            {/* {success ? <Alert/> : 'error'} */}
                  <div
                        className={
                              'relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded ' +
                              (color === 'light'
                                    ? 'bg-white'
                                    : 'bg-lightBlue-900 text-white')
                        }
                  >
                        <div className="rounded-t mb-0 px-4 py-3 border-0">
                              <form >
                                    {/* <div className="flex justify-center m-6">
                                          <div className="lg:w-1/3 md:w-2/3 w-full">
                                                <label
                                                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                      htmlFor="name"
                                                >
                                                      Name
                                                </label>
                                                <input
                                                      type="text"
                                                      name="name"
                                                      id="name"
                                                      placeholder="elmahdi solana"
                                                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full 
                  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
                                                      required
                                                      onChange={(e) =>
                                                        setName(e.target.value)
                                                  }
                                                  value={name}
                                                      // onChange={(e) =>
                                                      //       // setEmail(e.target.value)
                                                      // }
                                                      // value={email}
                                                />
                                          </div>
                                    </div> */}
                                    {/* <div className="flex justify-center m-6">
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
                                                      placeholder="Exemple@gmail.com"
                                                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full 
                  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
                                                      required
                                                      onChange={(e) =>
                                                        setEmail(e.target.value)
                                                  }
                                                  value={email}
                                                      // onChange={(e) =>
                                                      //       // setEmail(e.target.value)
                                                      // }
                                                      // value={email}
                                                />
                                          </div>
                                    </div> */}

                                    {/** submit button */}
                                    {/* <div className="mt-4 flex justify-center">
                                          <button
                                                type="submit"
                                                className="group w-full lg:w-1/3 md:w-2/3 py-2 px-4  border border-transparent text-sm leading-5 font-medium 
                rounded-md text-white bg-teal-500 hover:bg-teal-400 focus:outline-none focus:border-teal-400 
                focus:shadow-outline-teal active:bg-teal-400 active:outline-none transition duration-150 ease-in-out"
                                          >
                                                Add New Manager
                                          </button>
                                    </div> */}
                              </form>
                              <input type="text" className=""></input>
                              <div className="flex flex-wrap items-center">
                                    <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                                          <h3
                                                className={
                                                      'font-semibold text-lg ' +
                                                      (color === 'light'
                                                            ? 'text-blueGray-700'
                                                            : 'text-white')
                                                }
                                          >
                                                Deliveries Tables
                                          </h3>
                                    </div>
                              </div>
                        </div>
                        <div className="block w-full overflow-x-auto">
                              {/* Projects table */}
                              <table className="items-center w-full bg-transparent border-collapse">
                                    <thead>
                                          <tr>
                                                <th
                                                      className={
                                                            'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                                                            (color === 'light'
                                                                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                                                                  : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                                                      }
                                                >
                                                      type
                                                </th>
                                                <th
                                                      className={
                                                            'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                                                            (color === 'light'
                                                                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                                                                  : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                                                      }
                                                >
                                                      from
                                                </th>
                                                <th
                                                      className={
                                                            'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                                                            (color === 'light'
                                                                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                                                                  : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                                                      }
                                                >
                                                      to
                                                </th>
                                                <th
                                                      className={
                                                            'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                                                            (color === 'light'
                                                                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                                                                  : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                                                      }
                                                >
                                                      Weight
                                                </th>
                                                <th
                                                      className={
                                                            'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                                                            (color === 'light'
                                                                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                                                                  : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                                                      }
                                                >
                                                      Price
                                                </th>
                                                <th
                                                      className={
                                                            'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                                                            (color === 'light'
                                                                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                                                                  : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                                                      }
                                                >
                                                      Status
                                                </th>

                                                <th
                                                      className={
                                                            'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                                                            (color === 'light'
                                                                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                                                                  : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                                                      }
                                                >
                                                      Action
                                                </th>
                                                <th
                                                      className={
                                                            'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                                                            (color === 'light'
                                                                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                                                                  : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                                                      }
                                                ></th>
                                          </tr>
                                    </thead>
                                    <tbody>
                                          {Deliveries.map((delivery) => (
                                                <tr key={delivery._id}>
                                                      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                                                            <span
                                                                  className={
                                                                        'ml-3 font-bold ' +
                                                                        +(color ===
                                                                        'light'
                                                                              ? 'text-blueGray-600'
                                                                              : 'text-white')
                                                                  }
                                                            >
                                                                  {delivery.type}
                                                            </span>
                                                      </th>
                                                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            {delivery.from}
                                                      </td>
                                                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            {delivery.to}
                                                      </td>
                                                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            {delivery.weight}
                                                      </td>
                                                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            {delivery.price}
                                                      </td>
                                                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                      {delivery.status === "reserved" ?<i className="fas fa-circle text-teal-500 mr-2"></i>  : <i className="fas fa-circle text-orange-500 mr-2"></i>}
                                                      {delivery.status}
                                                            
                                                           
                                                      </td>

                                                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                                                            <button
                                                                  className="text-teal-700 background-transparent font-bold uppercase  outline-none focus:outline-none  transition-all duration-150"
                                                                  type="button"
                                                            >
                                                                  <i className="fas fa-edit"></i>
                                                            </button>
                                                            <button
                                                                  className="text-red-500 background-transparent font-bold uppercase px-8 py-3 outline-none focus:outline-none mr-2 mb-1  transition-all duration-150"
                                                                  type="button"
                                                            >
                                                                  <i className="fas fa-trash-alt"></i>
                                                            </button>
                                                      </td>
                                                </tr>
                                          ))}
                                    </tbody>
                              </table>
                        </div>
                  </div>
            </>
      );
}

CardDeliveries.defaultProps = {
      color: 'light',
};

CardDeliveries.propTypes = {
      color: PropTypes.oneOf(['light', 'dark']),
};
