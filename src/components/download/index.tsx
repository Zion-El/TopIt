import Image from 'next/image'
import React from 'react'

const Download = () => {
  return (
    <section className='container'>
        <div className='flex flex-col md:flex-row justify-between items-center lg:px-20'>
        <div className='flex-1 flex flex-col space-y-6 text-center md:text-left'>
            <h3 className='text-pryColor font-[inter] text-[28px] md:text-[38px] lg:text-[60px] md:leading-[60px] lg:leading-[73px] font-[700] lg:w-[80%]'>Download TopitupNG App</h3>
            <p className='font-[inter] text-[#4F4F4F] text-[12px] md:text-[14px] lg:text-[18px]'>Enjoy promotional offers and discounts while experiencing stable pricing and a user-friendly platform.</p>
            <div className='flex space-x-6'>
                <div className='w-1/2'>
                    <img src="images/svgs/Avatars.svg" alt="user group" />
                </div>
                <div className='w-1/2'>
                    <p className='font-[inter] font-[600] text-[#141F39] text-[16px] lg:text-[28px]'>200,000 <span>+</span></p>
                    <p className='font-[inter] text-[#4F4F4F] text-[12px] md:text-[14px] lg:text-[18px]'>Active and Happy Users</p>
                </div>
            </div>
            <div className='flex space-x-6'>
                <div className='w-1/2'>
                    <img src="images/svgs/gPlay.svg" alt="google" />
                </div>
                <div className='w-1/2'>
                    <img src="images/svgs/AppStore.svg" alt="apple" />
                </div>
                    
                    
                </div>
        </div>
        <div className='flex-1 flex md:justify-center md:items-center'>
            <Image src={'images/svgs/Dashboard.svg'} width={300} height={610} alt='dashboard'/>
        </div>            
        </div>

    </section>
  )
}

export default Download
