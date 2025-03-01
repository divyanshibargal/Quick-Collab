import React from 'react'
import Logo from '../../dashboard/_components/Logo'
import { Bell } from 'lucide-react'

function SideNav() {
return (
    <div className='h-screen md:w-72 hidden md:block fixed bg-blue-50 p-5 shadow-md'>
        <div className='flex justify-between items-center'>
            <Logo/>
            <Bell className='h-5 w-5 text-gray-500' />
        </div>
        <hr className='my-5'></hr>
        <div>
            <h2>Workspace Name</h2>
        </div>
    </div>
)
}

export default SideNav
