"use client"
import React from 'react'
import Logo from './Logo'
import { OrganizationSwitcher, UserButton } from '@clerk/nextjs'
import { useAuth } from '@clerk/clerk-react'

const Header = () => {
  const{orgId}=useAuth();
  console.log(orgId);
  return (
    <div className='flex justify-between items-center p-3 shadow-sm'>
    <Logo/>
    <OrganizationSwitcher 
    afterLeaveOrganizationUrl={'/dashboard'}
    afterCreateOrganizationUrl={'/dashboard'}
    />
    <UserButton/>
    </div>
  )
}

export default Header
