import { MessageCircle } from 'lucide-react'
import { Button } from '../../../../components/ui/button'
import DocumentHeader from '../_components/DocumentHeader'
import DocumentInfo from '../_components/DocumentInfo'
import RichDocumentEditor from '../_components/RichDocumentEditor'
import CommentBox from './CommentBox'

function DocumentEditor({params}) {
return (
    <div>
        {/* Header */}
            <DocumentHeader/>
    
        {/* Document Info */}
            <DocumentInfo params={params} />

        {/* Text Editor */}
            <RichDocumentEditor params={params} />

            <div className='fixed right-5 bottom-5'>
                <Button><MessageCircle/></Button>
            <CommentBox/>
            </div>

    </div>
)
}

export default DocumentEditor
