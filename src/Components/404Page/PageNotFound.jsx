import React, { Component } from 'react'
import { Link } from 'react-router-dom'



class PageNotFound extends Component {
  render() {
    return (
      <div className='flex flex-col justify-center items-center w-full h-[100vh] my-10'>
        <h1 className='text-3xl text-red-700 mb-[20px]'>404 Page not found</h1>
        <Link to='/contact' className='border-0 p-3 w-[120px] bg-green-500 hover:bg-green-300 text-black font-bold'>
        Home page
        </Link>
      </div>
    )
  }
}

export default PageNotFound
