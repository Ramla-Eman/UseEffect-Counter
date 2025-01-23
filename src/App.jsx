import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = `Counter: ${count}`;
  });

  return (
    <>
      <div className='lg:w-[30%] w-[97%] bg-[#858FFD] p-4 rounded-2xl text-white flex flex-col items-center justify-center space-y-3'>
        <h1 className='lg:text-[2.8rem] text-[1.5rem] font-bold'>Counter With Side Effect</h1>
        <i class="bi bi-arrow-down text-[1.8rem]"></i>
        <button onClick={() => setCount(count + 1)} className='border-2 text-[1.4rem] py-1 px-6 rounded-lg hover:bg-[#696FF2]'>Click: {count}</button>
        <button onClick={() => setCount(0)} className="border-2 text-[1.4rem] py-1 px-6 rounded-lg hover:bg-[#696FF2]" >Reset</button>
        <p className='text-[1.8rem] text-center'>Check The <span className='bg-yellow-200 text-[#858FFD] px-2'>Document Title</span></p>
      </div>
    </>
  )
}

export default App
