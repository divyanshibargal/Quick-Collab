import { MessageCircle, X } from 'lucide-react'
import { Button } from '../../../../components/ui/button'
import DocumentHeader from '../_components/DocumentHeader'
import DocumentInfo from '../_components/DocumentInfo'
import RichDocumentEditor from '../_components/RichDocumentEditor'
import CommentBox from './CommentBox'
import { useState } from 'react'

function DocumentEditor({params}) {
    const [openComment , setOpenComment] = useState(false);
return (
    <div>
        {/* Header */}
            <DocumentHeader/>
    
        {/* Document Info */}
            <DocumentInfo params={params} />

        {/* Text Editor */}
            <RichDocumentEditor params={params} />

            <div className='fixed right-5 bottom-5 z-50'>
            <Button onClick={()=>setOpenComment(!openComment)}>{openComment?<X/>:<MessageCircle/>}</Button>
            {openComment &&<CommentBox/>}
            </div>

    </div>
)
}

export default DocumentEditor
