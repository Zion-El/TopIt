import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Text from '../shared/Text/text'


const Footer = () => {
  return (
    <footer className='lg:w-screen bg-pryColor justify-between pt-16   '>
      <div className='container flex justify-between flex-col lg:flex-row pb-  max-w-[1440px] mx-auto '>

        <div className='w-[100%] md:w-[90%] lg:w-[30%]'>
          <div>
          <Image 
                    width={152} 
                    height={28} 
                    src={"images/svgs/LOGO.svg"}  
                    alt='logo' 
                />
          </div>
          <div className='mt-10 '>
            <Text      
                size = '18px'
                color= "#fff"
                weight= '200'
                family= 'inter'
                // py= 'py'
                // px= 'px'
                text='TopItupNG is your all-in-one digital platform, enabling seamless, immediate payment of utility bills, airtime top-ups, and data purchases for your everyday needs.'/>


            <div className='hidden md:flex gap-4 items-center mt-6 '>
              <Link href={''}>
              <Image 
                    width={25} 
                    height={25} 
                    src={"images/svgs/fb.svg"}  
                    alt='logo' 
                />
              </Link>
              <Link href={''}>
              <Image 
                    width={25} 
                    height={25} 
                    src={"images/svgs/IG.svg"}  
                    alt='logo' 
                />
              </Link>
              <Link href={''}>
              <Image 
                    width={25} 
                    height={25} 
                    src={"images/svgs/LK.svg"}  
                    alt='logo' 
                />
              </Link>
              <Link href={''}>
              <Image 
                    width={25} 
                    height={25} 
                    src={"images/svgs/Mes.svg"}  
                    alt='logo' 
                />
              </Link>
              <Link href={''}>
              <Image 
                    width={25} 
                    height={25} 
                    src={"images/svgs/twitter_x.svg"}  
                    alt='logo' 
                />
              </Link>
            </div>
          </div>

        </div>

        {/* footer links */}
        <div className='flex flex-col md:flex-row gap-6 md:gap-[6rem] justify-end mt-6 md:mt-8 lg:mt-0'>
          <div className=''>
            <p className='text-[#28C0F1] font-[700] mb-3 md:mb-[2rem]'>Services</p>
            <ul className='text-[#fff]'>
              <li className='mb-3'>
                <Link href="">About Us</Link> 
              </li>
              <li className='mb-3'>
                <Link href="">Product</Link>
              </li>
              <li className='mb-3'>
                <Link href="">Testimonial</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className='text-[#28C0F1] font-[700] mb-3 md:mb-[2rem]'>Resources</p>
            <ul className='text-[#fff]'>
              <li className='mb-3'>
                <Link href="">FAQ</Link>
              </li>
              <li className='mb-3'>
                <Link href="">Private Policy</Link>
              </li>
              <li className='mb-3'>
                <Link href="">Terms of Service</Link>
              </li>
            </ul>
          </div>
          <div className='md:w-[40%]'>
            <p className='text-[#28C0F1] font-[700] mb-3 md:mb-[2rem]'>Contact Us</p>
            <ul className='text-[#fff]'>
              <li className='mb-3'>
                <Link href="">091-1444-1444</Link>
              </li>
              <li className='mb-3'>
                <Link href="">customersupport@cdlphubltd.com</Link>
              </li>
              <li className='mb-3'>
                <Link href="">34, Road 19 OYSHC Estate, Akobo Ibadan, Oyo State, Nigeria</Link>
              </li>
            </ul>
          </div>

        </div>    
        
        <div className='flex md:hidden space-x-6 items-center mt-6'>
              <Link href={''}>
              <Image 
                    width={20} 
                    height={20} 
                    src={"images/svgs/fb.svg"}  
                    alt='logo' 
                />
              </Link>
              <Link href={''}>
              <Image 
                    width={20} 
                    height={20} 
                    src={"images/svgs/IG.svg"}  
                    alt='logo' 
                />
              </Link>
              <Link href={''}>
              <Image 
                    width={20} 
                    height={20} 
                    src={"images/svgs/LK.svg"}  
                    alt='logo' 
                />
              </Link>
              <Link href={''}>
              <Image 
                    width={20} 
                    height={20} 
                    src={"images/svgs/Mes.svg"}  
                    alt='logo' 
                />
              </Link>
              <Link href={''}>
              <Image 
                    width={20} 
                    height={20} 
                    src={"images/svgs/twitter_x.svg"}  
                    alt='logo' 
                />
              </Link>
            </div>
            
      </div>

      <div className='flex justify-center items-center border-t border-t-[#fff] py-4'>
        <div className='text-center py-4 w-[80%] md:w-[40%]'>
          <p className='text-[#fff] opacity-[0.6]'>copyright @Topitupng2023. All Right Reserved. <span className='font-[700]'>TopitupNG is a registered trademark of CDLP Hub Ltd.</span></p>
        </div>        
      </div>


    </footer>
  )
}

export default Footer
