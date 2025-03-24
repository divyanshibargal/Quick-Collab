import DocumentHeader from '../_components/DocumentHeader'
import DocumentInfo from '../_components/DocumentInfo'
import RichDocumentEditor from '../_components/RichDocumentEditor'

function DocumentEditor({params}) {
return (
    <div>
        {/* Header */}
            <DocumentHeader/>
    
        {/* Document Info */}
            <DocumentInfo params={params} />

        {/* Text Editor */}
            <RichDocumentEditor params={params} />

    </div>
)
}

export default DocumentEditor
