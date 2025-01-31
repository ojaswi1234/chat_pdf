import { SignedIn, UserButton } from '@clerk/nextjs';


import Link  from 'next/link';
import React from 'react'
import { Button } from './ui/button';
import { FileInputIcon } from 'lucide-react';

const Header = () => {
  return (
    <div className="w-screen absolute  h-14 bg-gradient-to-tr from-green-200 via-blue-200 to-white flex items-center justify-between p-5 border-b-2 shadow-md shadow-zinc-600 right-0">
        <Link href="/dashboard" className="text-xl "><b className="bg-gradient-to-r from-orange-500  to-indigo-500 text-transparent bg-clip-text font-extrabold text-2xl">CHATPDF</b></Link>
        <SignedIn>
            <div className="flex items-center space-x-5 ">
       <Button asChild variant="link">
        <Link href="/dashboard/price" className="hidden md:flex border-[1px] border-blue-600 bg-white text-blue-700 hover:bg-blue-600 hover:text-white font-bold hover:no-underline">Pricing</Link>
       </Button>
       <Button asChild variant="outline" className="border-green-600 text-green-700 hover:bg-green-600 hover:text-white bg-white  font-bold">
        <Link href="/dashboard/"><FileInputIcon /> My Document</Link>
       </Button>
        <UserButton />
        
        </div>
        </SignedIn>
    </div>
  )
}

export default Header