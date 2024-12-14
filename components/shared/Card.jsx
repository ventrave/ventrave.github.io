'use client'

import React from 'react'
import { Rocket, ThumbsUp, Ellipsis } from 'lucide-react'

const Card = ({title, icon, className}) => {
  return (
    <div className={`w-80 h-80 rounded-xl flex-col shadow-lg shadow-[#8F5EF240] flex justify-center items-center gap-12 ${className}`}>
        <div className='h-16 w-16 rounded-tl-lg rounded-br-lg border-[1px] border-[#8F5EF220] flex justify-center items-center'>
            { icon === "Rocket" ? <Rocket size={24} /> : icon === "Elipsis" ? <Ellipsis size={24} /> : <ThumbsUp size={24} /> }
            <div className='bg-[#8F5EF2] rounded-full w-12 h-12 blur-2xl absolute'/>
        </div>
        <p className='text-xl font-normal text-white/90'>{title}</p>
    </div>
  )
}

export default Card