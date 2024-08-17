"use client"

import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import TemplateListSection from './_components/TemplateListSection'

const Dashboard = () => {
  const [userSearchInput,setUserInput]=useState<string>()
  return (
    <div>
      {/* Search Section */}
      <SearchSection onSeacrhInput={(value:string)=>setUserInput(value)}/>
      {/* Template List Section */}
      <TemplateListSection userSearchInput={userSearchInput}/>
    </div>
  )
}

export default Dashboard