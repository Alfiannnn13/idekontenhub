import { Search } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className='p-5 shadow-sm  justify-between hidden md:flex'>
      <div className="flex gap-2 items-center p-2 border rounded-xl max-w-lg">
        <Search/>
        <input type="text" placeholder='Cari....'
        className="outline-none"/>
      </div>
      <div className="">
        <h2></h2>
      </div>
    </div>
  )
}

export default Header
