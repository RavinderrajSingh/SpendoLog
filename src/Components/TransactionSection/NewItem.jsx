import React from 'react'

function NewItem({ onClickFunction, buttonText, amount, title, setTitle, setAmount, isReadOnly }) {

    const handleClick = (e) => {
        e.preventDefault();
        onClickFunction();
    }

    return (
        <div className='w-full flex gap-x-6 mb-2'>
            <form action="" className='flex gap-x-4' onSubmit={handleClick}>
                <input type="text"
                    className={`py-1 px-2 border-none outline-none ${isReadOnly ? "bg-transparent" : "bg-gray-600 "}`}
                    placeholder='Description ..'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    readOnly={isReadOnly}
                />

                <div className='border-r-[1px] border-gray-500' />

                <input type="number"
                    className={`bg-gray-600 py-1 px-2 border-none outline-none  ${isReadOnly ? "bg-transparent" : "bg-gray-600 "}`}
                    placeholder='Amount ..'
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    readOnly={isReadOnly}
                />

                <div className='border-r-[1px] border-gray-500' />

                <button
                    className='bg-[#FFBE39] text-white rounded-xl font-extrabold tracking-widest p-1 px-5 relative right-1'
                    type='submit'>
                    {buttonText}
                </button>

            </form>

            

         
        </div>
    )
}

export default NewItem