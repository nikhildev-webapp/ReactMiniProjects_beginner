import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

  return (
      <div className='min-h-screen flex items-center justify-center bg-gray-100'>
          <div className='bg-white rounded-xl shadow-lg max-w-sm w-full p-6 border border-gray-200 flex flex-col items-center text-center gap-4'>
              <h1 className='text-2xl font-semibold text-gray-800'>Counter</h1>
              <p className='text-lg font-medium text-gray-900'>Counter: {count}</p>
              <p className='text-sm text-gray-600'>Initial value is zero. Click buttons to change the count.</p>
              <div className='flex gap-3 mt-2'>
                  <button className='px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition' onClick={()=>{setCount(count+1)}}>Increment</button>
                  <button className='px-4 py-2 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300 transition' onClick={()=>{setCount(count-1)}}>Decrement</button>
                  <button className='px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition' onClick={()=>{setCount(0)}}>Reset</button>
              </div>
          </div>
      </div>
  )
}

export default Counter