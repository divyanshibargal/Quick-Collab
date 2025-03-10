import Image from "next/image"
import {deleteDoc, doc} from "firebase/firestore"
import { useRouter } from "next/navigation"
import DocumentOptions from "./DocumentOptions"
import { db } from "../../../../config/firebaseconfig";
import { toast } from "sonner";

function DocumentList({documentList,params}) {
    const router=useRouter();
    const DeleteDocument=async(docId)=>{
        await deleteDoc(doc(db, "workspaceDocuments", docId));
        toast("Document Deleted !");
    }
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
            <DocumentOptions doc={doc} deleteDocument={(docId)=>DeleteDocument(docId)} />
        </div>
    ))}
    </div>
)
}

export default DocumentList
