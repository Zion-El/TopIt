import React from 'react'
import Button from '@/components/shared/Button/button'
import Image from 'next/image'


function Hero() {
  return (
    <div className=' mx-auto sm:pt-0 pt-[116px] '>
        <div className='md:flex  mx-auto justify-between pt-[40px] items-center w-[85%] h-[100vh] '>
            <div className='max-w-[444px]'>
                <h1 className='text-[#000] font-rope sm:text-[44.914px] text-[30px] sm:text-left text-center font-[800] sm:leading-[65.33px] leading-[40px] sm:tracking-[-1.347px] tracking-[-0.9px] '>Nigeria’s No.1 Choice For <span className='text-[#ffb803]'> <span className='text-[#26B9ED]'>Airtime,</span>  Data <span className='text-[#000]'>And</span> <span  className='text-[#79b200]'>Bills Payment</span></span></h1>
                <p className=' sm:mt-0 mt-[10px] text-[#4F4F4F] sm:text-left text-center sm:text-[18px] text-[14px] max-w-[420px]'>We simply make you stay connected online, with friends and family and paying bills effortlessly.</p>
                <div className='mt-[36px] flex sm:justify-start justify-center '>
                        
                    <Button
                        px='12px'
                        py='12px'   
                        width={"180px"}
                        height={"47px"}
                        bgcolor='#041A8E'
                        border='2px solid #041A8E'
                        fontsize={"15px"}
                        fontWeight={700}
                        textColor='#fff'
                        text='Get Started'
                        rounded='12px'
                    />
                </div>
            </div>

            <div className='sm:mt-0 mt-[30px]' data-aos="fade-zoom-in" data-aos-easing="ease-in" data-aos-duration="300">
                <img className='max-w-[100%] w-[500px]' src={'/images/png/hero-image.png'} alt='hero-image'  />
            </div>

        </div>
    </div>
  )
}

export default Hero