"use client"
import { doc, getDoc , updateDoc } from 'firebase/firestore'
import { SmilePlus } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import CoverPicker from '../../../../components/ui/CoverPicker'
import EmojiPickerCom from '../../../../components/ui/EmojiPickerCom'
import { db } from '../../../../config/firebaseconfig'
import { toast } from "sonner";

function DocumentInfo({params}) {
const [coverImage,setCoverImage]=useState('/cover.png')
const [Emoji,setEmoji]=useState();
const [documentInfo,setdocumentInfo]=useState();

useEffect(()=>{
params && GetDocumentInfo();
},[params])


// used to get document info
const GetDocumentInfo=async()=>{
    const docRef=doc(db,'workspaceDocuments' ,params?.documentid)
    const docSnap=await getDoc(docRef);
    if(docSnap.exists()){
        console.log(docSnap.data())
        setdocumentInfo(docSnap.data())
        setEmoji(docSnap.data()?.Emoji)
        docSnap.data()?.coverImage&&setCoverImage(docSnap.data()?.coverImage);
    }
}
const updateDocumentInfo= async(key, value)=>{
    console.log(params?.documentid);
  const docRef = doc(db,'workspaceDocuments',params?.documentid);
  await updateDoc(docRef,{
    [key]:value
  })
  toast('Document Updated');
console.log("running");
}
    return (
    <div>
         {/* Cover */}
        <CoverPicker setNewCover={(cover)=>{
            setCoverImage(cover);
            updateDocumentInfo('coverImage',cover);
        }}>
        <div className="relative group">
        <h2 className="hidden absolute p-4 w-full h-full items-center group-hover:flex justify-center">
            Change cover
        </h2>
        <div className="group-hover:opacity-40 ">
            <Image
            src={coverImage}
            width={400}
            height={400}
            className="w-full h-[220px] object-cover
                rounded-t-xl"
            alt="CoverImage"
            />
        </div>
        </div>

        </CoverPicker>

        {/* Emoji Picker  */}
        <div className='absolute ml-10 mt-[-40px] cursor-pointer'>
        <EmojiPickerCom setEmojiIcon={(Emoji)=>setEmoji(Emoji)}>

        <div className='bg-[#ffffffb0] p-4 rounded-md'>
            {Emoji?<span className='text-5xl'>{Emoji}</span>  :<SmilePlus className='h-10 w-10 text-gray-500'/> }
        </div>

        </EmojiPickerCom>
        </div>
        {/* File name */}
        <div className='mt-10 p-10'>
            <input type='text' placeholder='Untitled Document'
            defaultValue={documentInfo?.documentName}
            className='font-bold text-4xl outline-none'
            />
        </div>
    </div>
)
}

export default DocumentInfo
