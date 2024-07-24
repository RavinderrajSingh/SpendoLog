import React, { useState } from 'react';
import { useTransaction } from '../../Contexts/TransactionContext';
import NewItem from './NewItem';

function Credits() {
    const { creditBalance, AddCredit, credits, DeleteCredit , AddBalance} = useTransaction();
    const [title, setTitle] = useState('');
    const [creditAmount, setAmount] = useState('');

    const handleAddCredit = () => {
        if (title !== "" && creditAmount > 0) {
            AddCredit(creditAmount, title);
            setAmount('');
            setTitle('');
            AddBalance(creditAmount, 0);  
        } else {
            alert("Please enter valid credit values");
        }
    };

    const handleDeleteCredit = (id) => {
        DeleteCredit(id);
    };

    return (
        <div className='flex flex-col w-full items-center justify-center bg-gray-700 rounded-xl p-2'>
            <div className='flex items-center justify-around'>
                <pre className='font-extrabold tracking-widest'>CREDITS:</pre>
                <pre className='font-extrabold tracking-widest'> {creditBalance} ₹ </pre>
            </div>

            <div className='w-[95%] border-b-[1px] my-2 border-gray-500' />

            <div className='w-full'>
                <NewItem
                    onClickFunction={handleAddCredit}
                    buttonText={"➕"}
                    amount={creditAmount}
                    setAmount={setAmount}
                    title={title}
                    setTitle={setTitle}
                    isReadOnly={false}
                />
            </div>

            <div className='w-[95%] border-b-[1px] mb-2 border-gray-500' />

            <div className='w-full'>
                {credits.map((credit) => (
                    <NewItem
                        key={credit.id}
                        isReadOnly={true}
                        buttonText={"❌"}
                        amount={credit.amount}
                        title={credit.title}
                        onClickFunction={() => handleDeleteCredit(credit.id)} // Correctly pass the credit id
                    />
                ))}
            </div>
        </div>
    );
}

export default Credits;
