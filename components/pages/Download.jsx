import { LucideDownload } from 'lucide-react'
import React from 'react'

const Download = () => {
  return (
    <section id='download-section' className='w-screen flex-col h-screen flex justify-center py-16 items-center overflow-x-hidden'>

    <div className='flex flex-col gap-8 justify-center items-center'>
        <h1 className='text-4xl'>meet the revolutionary scripting utility</h1>
        <button className='flex gap-4 home-div z-10 px-6 py-3 rounded-full bg-black/10 border-[1px] border-white/10 text-white/80 hover:bg-black/20 duration-200'>
            <LucideDownload/>
            get started
        </button>
        
        <div className='bg-[#4000FF] absolute w-96 h-96 blur-[500px] translate-y-1/2 rounded-full'/>
        <div className='bg-[#4000FF] absolute w-96 h-96 blur-[500px] translate-y-1/2 rounded-full'/>
    </div>
          
    </section>
  )
}

export default Download