import React, { useState } from 'react'
import { useTransaction } from '../../Contexts/TransactionContext'
import NewItem from './NewItem';

function Debits() {

    const { debitBalance, AddDebit, debits, DeleteDebit, AddBalance } = useTransaction();

    const [title, setTitle] = useState('');
    const [debitAmount, setAmount] = useState('');

    const handleAddDebit = () => {
        if (title !== "" && debitAmount > 0) {
            AddDebit((debitAmount), title);
            AddBalance(0, debitAmount);
            setAmount('');
            setTitle('');
        } else {
            alert("Please enter valid debit values");
        }
    };

    const handleDeleteDebit = (id) => {
        DeleteDebit(id);
    };

    return (
        <div className='flex flex-col w-full items-center justify-center bg-gray-700 rounded-xl p-2'>

            <div className='flex items-center justify-around'>
                <pre className='font-extrabold tracking-widest'>DEBITS : </pre>
                <pre className='font-extrabold tracking-widest'> {debitBalance} ₹ </pre>
            </div>

            <div className='w-[95%] border-b-[1px] my-2 border-gray-500' />



            <div className='w-full'>
                <NewItem
                    onClickFunction={handleAddDebit}
                    buttonText={"➕"}
                    amount={debitAmount}
                    setAmount={setAmount}
                    title={title}
                    setTitle={setTitle}
                    isReadOnly={false}
                />
            </div>


            <div className='w-[95%] border-b-[1px] my-2 border-gray-500' />



            <div className='w-full'>

                {debits.map((debit) => (
                    <NewItem
                        key={debit.id}
                        isReadOnly={true}
                        buttonText={"❌"}
                        amount={debit.amount}
                        title={debit.title}
                        onClickFunction={() => handleDeleteDebit(debit.id)} // Correctly pass the credit id
                    />
                ))}


            </div>


        </div>
    )
}

export default Debits