import { useUser } from '@clerk/nextjs'
import { collection, doc, onSnapshot, query, setDoc, where } from 'firebase/firestore'
import { Bell, Loader2Icon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import uuid4 from "uuid4"
import { Button } from '../../../../components/ui/button'
// import { Progress } from '../../../../components/ui/progress'
import { db } from '../../../../config/firebaseconfig'
import Logo from '../../dashboard/_components/Logo'
import DocumentList from './DocumentList'


function SideNav({params}) {
    const [documentList,setdocumentList]=useState([]);
    const {user}=useUser();
    const [loading,setLoading]=useState(false);
    const router=useRouter();

    useEffect(()=>{
        params&&GetDocumentList();
    },[params])

    const GetDocumentList =()=>{
        const q=query(collection(db,'workspaceDocuments'),
        where('workspaceId','==',Number(params?.workspaceid)));
        setdocumentList([]);
        const unsubscribe=onSnapshot(q,(querySnapshot)=>{
            setdocumentList([]);
            querySnapshot.forEach((doc)=>{
                setdocumentList(documentList=>[...documentList,doc.data()])
            })
        })
    }

    const CreateNewDocument=async()=>{
        setLoading(true)
        const docId=uuid4();
        await setDoc(doc(db,"workspaceDocuments",docId.toString()),{
            workspaceId:Number(params?.workspaceId),
            createdBy:user?.primaryEmailAddress?.emailAddress,
            coverImage:null,
            emoji:null,
            id:docId,
            documentName:"Untitled Document",
            documentOutput:[]
        })

        await setDoc(doc(db,"documentOutput",docId.toString()),{
            docId:docId,
            output:[]
        })
        
        setLoading(false)
        router.replace('/workspace/'+params?.workspaceId+"/"+docId);
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
            <Button className='sm' onClick={CreateNewDocument}>
                {loading?<Loader2Icon className='h-4 w-4 animate-spin'/> :"+"}
            </Button>
            </div>
        </div>

        {/* Document List */}
        <DocumentList documentList={documentList} params={params}/>

        {/* Progress Bar
        <div className='absolute bottom-10 w-[85%]'>
        <Progress value={(documentList?.length)} />
        <h2 className='text-sm font-light my-2'><strong>{documentList?.length}</strong> Out of <strong>5</strong> files used</h2>
        <h2 className='text-sm font-light'>Upgrade your plan for unlimited access</h2>
        </div> */}


    </div>
)
}

export default SideNav