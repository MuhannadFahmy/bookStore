import React, { useState } from 'react'

const ToggleView = ({ toggleView }) => {
  const [isChecked, setIsChecked] = useState(false)

//   toggleView = (data) => {
    
//     data = isChecked
//   }

  const childToggleFn = () => {
    setIsChecked(!isChecked)
    toggleView(isChecked)
  }

  return (
    <div>
      <label className='themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center'>
        <input
          type='checkbox'
          checked={isChecked}
          onChange={childToggleFn}
    
          className='sr-only'
        />
        <span className='label flex items-center text-sm font-medium text-black'>
          Table
        </span>
        <span
          className={`slider mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${
            isChecked ? 'bg-slate-600' : 'bg-[#CCCCCE]'
          }`}
        >
        <span
        className={`dot h-6 w-6 rounded-full bg-white duration-200 ${
            isChecked ? 'translate-x-[28px]' : ''
        }`}
        ></span>
        </span>
        <span className='label flex items-center text-sm font-medium text-black'>
          Card
        </span>
      </label>
    </div>
  )
}

export default ToggleView