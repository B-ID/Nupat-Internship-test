import React from 'react'
import { ReactNode } from 'react'

type Props = {
    children: ReactNode 
    gradient: string
    textColor: string
    bottomRightAccent: string
    // bottomRight: string
}

export default function Button({children, gradient, textColor}: Props) {
  return (
    <button className={`w-[194px] h-[60px] ${gradient} font-medium ${textColor}`}>
        {children}
        {/* <div className='h-[105.9px] border w-[68px] absolute bg-white top-4 -right-4 rounded-full rotate-[23.72deg]' /> */}
    </button>
  )
}