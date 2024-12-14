'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import React, { useEffect } from 'react'

const Hero = () => {

  useGSAP(() => {
    gsap.fromTo('.home-div', {
      filter: 'blur(32px)',
      opacity: 0.5,
    }, {
      filter: 'blur(0px)',
      opacity: 1,
      duration: 3
    })
  }, [])

  useEffect(() => {
    document.getElementById('get-started').addEventListener('click', () => {
      document.getElementById('download-section').scrollIntoView({ behavior: 'smooth' })
    }
  )});

  return (
    <section className='w-screen h-screen flex justify-center items-center overflow-x-hidden'>

        <div className='w-screen gap-6 h-screen flex flex-col justify-center items-center'>
          <div className='flex flex-col text-center gap-3'>
            <h1 className='home-div text-5xl font-semibold'>ventrave</h1>
            <h2 className='home-div text-2xl'>Reinventing exploiting on MacOS</h2>
          </div>
          <button id='get-started' className='home-div z-10 px-6 py-2 rounded-full bg-black/10 border-[1px] border-white/10 text-white/80 hover:bg-black/20 duration-200'>get started</button>
          <Image src="/goat.png" width={744*0.8} height={496*0.8} alt='the best image to ever exist' className='home-div ' priority />
        </div>
        
        <div className='bg-[#7B00FF] absolute w-96 h-96 blur-[200px] translate-x-32 -translate-y-16 rounded-full'/>
        <div className='bg-[#4000FF] absolute w-96 h-96 blur-[200px] -translate-x-56 translate-y-36 rounded-full'/>

    </section>
  )
}

export default Hero