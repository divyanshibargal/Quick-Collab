'use client'
import React from 'react'
import SideNav from '../../_components/SideNav'

function WorkspaceDocument({params}) {
return (
    <div>
        {/* SideNav */}
        <div className=''>
            <SideNav params={params}/>
        </div>
        {/* Document */}
        <div className='md:ml-72'>
            Document
        </div>
    </div>
)
}

export default WorkspaceDocument
