import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'

const ErrorPage = () => {

    const error= useRouteError()
    console.log(error);
    
  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen '>
        <div className='border-2 border-red-600 p-28 flex flex-col items-center justify-center rounded-md'>
        <h1 className='text-2xl'>Oops! An Error Occurred</h1>
        {error && <p className='mt-2 text-xl'>{error.data}</p>}
        <NavLink to="/" className="mt-4 bg-blue-600 px-5 py-3 text-xl rounded-md font-bold">Go Home</NavLink>
        </div>
    </div>
  )
}

export default ErrorPage