'use client'
import React from 'react'
import SideNav from '../../_components/SideNav'
import DocumentEditor from '../../_components/DocumentEditor'

function WorkspaceDocument({params}) {
return (
    <div>
        {/* SideNav */}
        <div className=''>
            <SideNav params={params}/>
        </div>



        {/* Document */}
        <div className='md:ml-72'>
            <DocumentEditor/>
        </div>
    </div>
)
}

export default WorkspaceDocument
