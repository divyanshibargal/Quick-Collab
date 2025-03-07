import Image from "next/image"
import {doc} from "firebase/firestore"

function DocumentList({documentList,params}) {
return (
    <div>
    {documentList.map((doc,index)=>(
        <div key={index} className={`mt-3 p-2 px-3 hover:bg-gray-200 rounded-lg cursor-pointer
        ${doc?.id==params?.documentid && 'bg-white'}`}>
            <div className="flex gap-2 items-center">
            {!doc.emoji && <Image src={'/loopdocument.svg'} width={20} height={20} />}
                <h2 className="flex gap-2">{doc?.emoj}{doc.documentName}</h2>
            </div>
        </div>
    ))}
    </div>
)
}

export default DocumentList
