"use client"

import { Coffee, FileClock, Home, icons, Settings } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

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
            name:'Setting',
            icon:Settings,
            path:'/dashboard/setting'
        },
        {
            name:'Buat Beli Kopi',
            icon:Coffee,
            path:'/dashboard/coffee'
        },
    ]

    const path = usePathname();
    useEffect(()=> {
        console.log(path)
    })

  return (
    <div className='h-screen p-5 shadow-sm border'>
        <div className='flex justify-center'>

        <Image src={'/icon.png'} alt='logo' width={150} height={150}/>
        </div>

        <div className="mt-5">
            {MenuList.map((menu, index) => (
                <Link href={menu.path}>
                    <div className={`flex gap-2 mb-2 items-center p-3 hover:bg-purple-500 cursor-pointer hover:text-white rounded-lg
                ${path==menu.path&&'bg-purple-400 text-white'}
                `}>
                    <menu.icon className='h-6 w-6'/>
                    <h2 className='text-lg'>{menu.name}</h2>
                </div>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default SideNav