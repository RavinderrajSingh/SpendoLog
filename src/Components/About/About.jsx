import React from 'react'

function About() {
  return (
    <div className='w-full text-center h-full'>
      <pre>For more projects vist my github page : </pre>
      <a className='underline text-blue-400' href="https://github.com/RavinderrajSingh">GITHUB</a>

      <pre className='mt-5'>Or you can directly vist my projects</pre>
      <div className='flex flex-col gap-y-5'>
        <a className="mt-5 underline text-blue-400" href="https://ravinderrajsingh.github.io/TICTACTOE/">TIC TAC TOE</a>
        <a className="underline text-blue-400" href="https://ravinderrajsingh.github.io/Currency-Converter/">Currency Converter</a>
        <a className="underline text-blue-400" href="https://ravinderrajsingh.github.io/passwordGenerator/">Password Generator</a>
        <a className="underline text-blue-400" href="https://todos-brar.vercel.app/">To Do app</a>
     
      </div>

    </div>
  )
}

export default About