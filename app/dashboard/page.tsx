"use client";

import { Button } from '@/components/ui/button'
import { PlusCircleIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react'
function Dashboard() {
    const router = useRouter();
    const handleUpload = () => {
        router.push('/dashboard/upload');
    }
  return (
<div className="w-screen h-full flex bg-blue-950 justify-center">
  
  <div className='w-8/12 sm:w-11/12 h-fit bg-zinc-200 text-black my-28 rounded-2xl p-5 flex flex-col  mb-14 flex-grow sm:flex-grow-0  gap-5  justify-center items-center sm:justify-start sm:items-start'>
  <h1 className="pb-5 text-green-800 font-bold text-xl sm:text-2xl">My Documents</h1>
    <Button  onClick={handleUpload} className="w-72 h-64 sm:h-72 bg-zinc-300 flex text-gray-500 flex-col justify-center items-center   rounded-2xl">
      <PlusCircleIcon size={48} className=""/>
      <p className="text-lg">Add a Document</p>
    </Button>
  </div>
</div>
  )
}

export default Dashboard