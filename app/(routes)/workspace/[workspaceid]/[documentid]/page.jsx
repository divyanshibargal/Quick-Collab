'use client'
import { Room } from '../../../../Room'
import DocumentEditor from '../../_components/DocumentEditor'
import SideNav from '../../_components/SideNav'

function WorkspaceDocument({params}) {
return (
    <Room params = {params}>
    <div>
        {/* SideNav */}
        <div className=''>
            <SideNav params={params}/>
        </div>
        {/* Document */}
        <div className='md:ml-72'>
            <DocumentEditor params={params}/>
        </div>
    </div>
    </Room>
)
}

export default WorkspaceDocument
