import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo4.png'

const Navbar = () => {
    return (
        <header className='fixed w-full h-[65px] font-medium flex justify-between items-center px-1 bg-[#EBE6E0] text-gray-900 z-40 sm:px-20'>

            <div>
                <img src={Logo} alt='Logo' style={{ width: '230px' }} />
            </div>

            {/* full navbar */}
          
            <ul className='flex'>
                <li className='px-3 flex sm:px-5 transform hover:scale-110 hover:bg-[#50b49b] rounded transition duration-500'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='pl-3 pr-5 flex sm:px-5 transform hover:scale-110 hover:bg-[#50b49b] rounded transition duration-500'>
                    <Link to='/my-movies'>My movies</Link>
                </li>
                <li className='pl-3 pr-5 flex sm:px-5 transform hover:scale-110 hover:bg-[#50b49b] rounded transition duration-500'>
                    <Link to='/login'>Login</Link>
                </li>
            </ul>
        </header>
    )
}

export default Navbar

