import Image from 'next/image'
import { Inter } from 'next/font/google'
import { ReactElement } from 'react'
import HomePage from './home'




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