import React from 'react'
import SideNav from '../../_components/SideNav'

function WorkspaceDocument() {
return (
    <div>
        {/* SideNav */}
        <div className=''>
            <SideNav/>
        </div>
        {/* Document */}
        <div className='md:ml-72'>
            Document
        </div>
    </div>
)
}

export default WorkspaceDocument
