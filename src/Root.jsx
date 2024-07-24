import React from 'react'
import NavHeader from './Components/Header/NavHeader'
import { Outlet } from 'react-router-dom'
import { TransactionProvider } from './Contexts/TransactionContext'

function Root() {



    return (

        <div className='w-full '>
            <TransactionProvider>
                <NavHeader />
                <Outlet />
            </TransactionProvider>
        </div>

    )
}

export default Root