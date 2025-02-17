"use client"
import React from 'react'
import Image  from 'next/image'

function HomeSectionCard() {
  return (
   <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3">
   <div className="h-[13rem] w-[10rem]">
   <img src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80" alt= ""/>
   </div>

   <div className= 'p-5'>
    <h3 className= 'text-lg font-medium text-gray-900'>Nofilter</h3>
    <p className='mt-2 text-sm text-gray-500'> Men Solid pure cotton St. Kurta</p>
   </div>
   </div>
  )
}

export default HomeSectionCard