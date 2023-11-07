import Contact from "@/components/contact";
import Services from "@/components/service";
import Footer from '@/components/footer'
import Hero from '@/components/home/homenav/hero'
import Homenav from '@/components/home/homenav/homenav'
import React, {useEffect} from 'react'
import Testimonial from '@/components/testimonials/testimonial';
import initializeAOS from '../../../aosConfig'
import Download from '@/components/download';
import Why from "@/components/why";

const HomePage = () => {
  useEffect(() => {
    initializeAOS(); // Initialize AOS on the client-side
  }, []);
  return (
    <div className=' overflow-hidden'>
      <div style={{background:"rgba(40, 192, 241, 0.11)"}} >
        <div className='max-w-[1440px]  mx-auto'>
            <Homenav/>
            <Hero/>
        </div>
      </div>
      <Services />
      <Why/>
      <Download/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default HomePage;
