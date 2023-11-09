import Image from 'next/image'
import { Inter } from 'next/font/google'
import { ReactElement } from 'react'
import HomePage from './home'
import Chat from '@/components/chat'




const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <HomePage/>
    </>
  )
}

Home.getLayout = (Page :ReactElement )=>{
  return <>{Page}</>
}