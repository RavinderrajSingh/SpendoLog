import React from 'react'
import { useTransaction } from '../../Contexts/TransactionContext'
import Transactions from '../TransactionSection/Transactions';

function Dashbard() {

  const { balance, ResetAll } = useTransaction();


  const handleClick = () => {
    // Reset all transactions and balance here
    ResetAll();
    localStorage.clear();
  }

  return (
    <div className='w-full flex flex-col items-center justify-center my-4 '>
      <div
        className='w-[80%] text-center bg-slate-700 flex items-center justify-center rounded-lg tracking-widest gap-[30rem]'>
        <pre className='font-extrabold '>Balance : {balance} ₹ </pre>
        <button className='bg-[#FFBE39] py-1 px-5 rounded-lg my-[5px]' onClick={handleClick}>Reset All</button>
      </div>

      <div className='w-full flex flex-row items-center justify-center'>
        <Transactions />
      </div>

    </div>
  )
}

export default Dashbard