import React from 'react'
import SideNav from './_components/SideNav';
import Header from './_components/Header';
import MobileNav from './_components/MobileNav'; // Pastikan import MobileNav

const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div>
        {/* Mobile Navigation */}
        <div className="md:hidden">
            <MobileNav />
        </div>

        {/* Desktop Navigation */}
        <div className='md:w-64 hidden md:block fixed'>
            <SideNav/>
        </div>

        <div className='md:ml-64'>
            <Header/>
            {children}
        </div>
    </div>
  )
}

export default layout
