import React from 'react'
import Credits from './Credits'
import Debits from './Debits'

function Transactions() {
    return (
        <div className='w-full flex items-center justify-around mt-5'>
            <div className=''>
                <Credits />
            </div>

            <div className=''>
                <Debits />
            </div>
        </div>
    )
}

export default Transactions