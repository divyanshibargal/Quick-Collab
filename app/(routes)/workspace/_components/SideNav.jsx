import React, { useEffect, useState } from 'react'
import Logo from '../../dashboard/_components/Logo'
import { Bell } from 'lucide-react'
import { Button } from '../../../../components/ui/button'
import { collection, onSnapshot, query,  where } from 'firebase/firestore'
import { db } from '../../../../config/firebaseconfig'
import DocumentList from './DocumentList'

function SideNav({params}) {
    const [documentList,setdocumentList]=useState();
    useEffect(()=>{
        params&&GetDocumentList();
    },[params])

    const GetDocumentList =()=>{
        const q=query(collection(db,'workspaceDocuments'),
        where('workspaceId','==',Number(params?.workspaceid)));

        const unsubscribe=onSnapshot(q,(querySnapshot)=>{
            querySnapshot.forEach((doc)=>{
                setdocumentList(documentList=>[...documentList,doc.data()])
            })
        })
    }

return (
    <div className='h-screen md:w-72 hidden md:block fixed bg-blue-50 p-5 shadow-md'>
        <div className='flex justify-between items-center'>
            <Logo/>
            <Bell className='h-5 w-5 text-gray-500' />
        </div>
        <hr className='my-5'></hr>
        <div>
            <div className='flex justify-between items-center'>
            <h2 className='font-medium'>Workspace Name</h2>
            <Button className='sm'>+</Button>
            </div>
        </div>

        {/* Document List */}
        <DocumentList documentList={documentList}/>

    </div>
)
}

export default SideNav
