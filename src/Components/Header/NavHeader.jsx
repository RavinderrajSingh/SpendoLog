import React from 'react'
import accounting from '../../assets/accounting.png'
import { Link, NavLink } from 'react-router-dom'

function NavHeader() {
    return (
        <div className='w-full flex items-center justify-between pt-2 px-10 bg-[#21212f] my-2'>



            <Link to="/"><div className="logo flex items-center justify-center space-x-3 cursor-pointer">
                <img src={accounting} alt="" className='size-10' />
                <div className='border-r-2 border-gray-500 h-[2rem]' />
                <div className='flex font-extrabold tracking-widest'>
                    <h1>SPENDO</h1>
                    <h1 className='text-[#FFBE39]'>LOG</h1>
                </div>
            </div>
            </Link>

            <div className="navigation">
                <ul className='flex items-center justify-center space-x-10 font-bold tracking-widest'>
                    <li>
                        <NavLink
                            to="/"
                            className={
                                ({ isActive }) => `${isActive ? "text-[#FFBE39] underline underline-offset-8" : ""}
                                 hover:underline hover:underline-offset-8`}>
                            Dashboard
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/reports"
                            className={
                                ({ isActive }) => `${isActive ? "text-[#FFBE39] underline underline-offset-8" : ""}
                                 hover:underline hover:underline-offset-8`}>
                            Reports
                        </NavLink>
                    </li>
                </ul>
            </div>

        </div>

    )
}

export default NavHeader