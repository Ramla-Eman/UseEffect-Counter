import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = `${count}`;
  });

  return (
    <>
      <div className='w-[30%] bg-slate-100 p-4 flex flex-col items-center justify-center space-y-3'>
        <h1 className='text-[3rem]'>Counter with Side Effect</h1>
        <i class="bi bi-arrow-down text-[1.8rem]"></i>
        <button onClick={() => setCount(count + 1)} className='border-2 text-[1.4rem] py-1 px-6 rounded-lg'>Click: {count}</button>
        <button onClick={() => setCount(0)} className="border-2 text-[1.4rem] py-1 px-6 rounded-lg" >Reset</button>
        <p className='text-[1.8rem]'>Check The <span className='bg-yellow-200 px-2 rounded-e-md'>Document Title</span></p>
      </div>
    </>
  )
}

export default App
