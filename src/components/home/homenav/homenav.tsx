import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

import Text from '@/components/shared/Text/text'
import Button from '@/components/shared/Button/button'
import DrawerNav from './drawer'

function Homenav() {




  return (
    <div className='fixed w-[100%]  z-[200] lg:h-auto h-[90px]' data-aos="flip-down" data-aos-easing="ease-in" data-aos-duration="300">

        <div  className=' lg:shadow-lg w-[100%] lg:h-auto lg:px-[50px] px-[20px]  lg:rounded-[100px] lg:bg-[#fff] bg-[#041A8E] lg:py-[10px] py-[15px] lg:mt-[27px] max-w-[1440px]   '>

            <div className='flex justify-between items-center'>
            
                <div className='flex gap-[80px] '>
                    <Image 
                        width={152} 
                        height={28} 
                        src={"images/svgs/LOGO.svg"}  
                        alt='logo' 
                    />

                    <div className='lg:flex hidden '>
                        {links.map((item)=>{
                            return (
                                <div key={item.id}>
                                    <Link href={item.path} >
                                        <Text 
                                            px='15px'
                                            py='25px'
                                            color='#141F39'
                                            weight='500'
                                            size='15.6px'
                                            family='urbanist'
                                            text= {item.name}
                                        />
                                            
                                    </Link>
                                </div>
                                
                            )
                        })}
                    </div>

                </div> 

                <div className='lg:flex hidden gap-[30px]' >
                    <Button
                        px='12px'
                        py='12px'   
                        width={"136px"}
                        height={"47px"}
                        bgcolor='transparent'
                        border='2px solid #28C0F1'
                        fontsize={"15px"}
                        fontWeight={700}
                        textColor='#041A8E'
                        text='Login'
                        rounded='9px'
                    />

                    <Button
                        px='12px'
                        py='12px'   
                        width={"136px"}
                        height={"47px"}
                        bgcolor='#041A8E'
                        border='2px solid #041A8E'
                        fontsize={"15px"}
                        fontWeight={700}
                        textColor='#fff'
                        text='Sign up'
                        rounded='9px'
                    />
                </div>

                <div className='lg:hidden block'>
                    <DrawerNav/>
                </div>


            </div>

        </div>
    </div>
  )
}

export default Homenav

const links = [
    {
        id:1,
        name: "Home",
        path:"/"
    },
    {
        id:2,
        name: "About us",
        path:"about/"
    },
    {
        id:3,
        name: "Services",
        path:"/service"
    },
    {
        id:4,
        name: "Testimonials",
        path:"/Testimonials"
    },
    {
        id:5,
        name: "Contact Us",
        path:"/contact"
    },
]