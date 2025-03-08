import Image from "next/image"
import {doc} from "firebase/firestore"
import { useRouter } from "next/navigation"
import DocumentOptions from "./DocumentOptions"

function DocumentList({documentList,params}) {
    const router=useRouter();
return (
    <div>
    {documentList.map((doc,index)=>(
        <div key={index}
        onClick={()=>router.push('/workspace/'+params?.workspaceid+'/'+doc?.id)}
        className={`mt-3 p-2 px-3 hover:bg-gray-200 rounded-lg cursor-pointer 
        flex justify-between items-center
        ${doc?.id==params?.documentid && 'bg-white'}`}>
            <div className="flex gap-2 items-center">
            {!doc.emoji && <Image src={'/loopdocument.svg'} width={20} height={20} />}
                <h2 className="flex gap-2">{doc?.emoj}{doc.documentName}</h2>
            </div>
            <DocumentOptions/>
        </div>
    ))}
    </div>
)
}

export default DocumentList
