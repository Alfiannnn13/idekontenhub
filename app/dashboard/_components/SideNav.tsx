import { Coffee, FileClock, Home, icons, Settings } from 'lucide-react'
import Image from 'next/image'
import path from 'path'
import React from 'react'

const SideNav = () => {

    const MenuList = [
        {
            name:'Home',
            icon:Home,
            path:'/dashboard'
        },
        {
            name:'History',
            icon:FileClock,
            path:'/dashboard/history'
        },
        {
            name:'Billing',
            icon:Coffee,
            path:'/dashboard/billing'
        },
        {
            name:'Setting',
            icon:Settings,
            path:'/dashboard/setting'
        },
    ]

  return (
    <div className='h-screen p-5 shadow-sm border'>
        <div className='flex justify-center'>

        <Image src={'/icon.png'} alt='logo' width={150} height={150}/>
        </div>

        <div className="mt-5">
            {MenuList.map((menu, index) => (
                <div className="flex gap-2 mb-2 p-3 hover:bg-purple-400 cursor-pointer hover:text-white rounded-lg">
                    <menu.icon/>
                    <h2>{menu.name}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SideNav