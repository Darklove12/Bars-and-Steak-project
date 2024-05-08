// eslint-disable-next-line no-unused-vars
import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className='navbar bg-gray-900 w-full h-[5rem]'>
              <ul className='flex gap-[6rem] pt-[2rem] text-white absolute'>
                <li className='ml-[20rem] hover:underline hover:underline underline-offset-8'>
                  <Link to={`/`}>HOME</Link>
                  </li>
                <li className=' hover:underline underline-offset-8'>
                  <Link to={`/about`}>ABOUT US</Link>
                </li>
              </ul>
              
              <div>
              <img src="https://cdn.dribbble.com/userupload/10470625/file/original-4e7e9cbe71f93cb9599417ce2be1b082.jpg?resize=1200x900"
              className="w-24 h-[31vh] absolute ml-[37.2rem] rounded-full w-[15%] shadow-md shadow-black" />
              </div>
    
              <ul  className='flex gap-[6rem] text-white float-right pt-[2rem]'>
                <li className=' hover:underline underline-offset-8'>
                <Link to={`/menu`}>MENU</Link>
                </li>
                <li className='mr-[19rem] hover:underline underline-offset-8'>
                <Link to={`/contact`}>CONTACT US</Link>
                </li>
              </ul>
        </nav>
    </div>
  )
}

export default Navbar