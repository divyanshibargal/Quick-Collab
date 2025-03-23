import {React,useRef,useEffect} from 'react'
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import Delimiter from '@editorjs/delimiter';
import Alert from 'editorjs-alert';
import Paragraph from '@editorjs/paragraph';

function RichDocumentEditor() {
    const ref=useRef();
    let editor;

    useEffect(()=>{
        InitEditor();
    },[])

    const InitEditor=()=>{
        if(!editor?.current){

            editor = new EditorJS({
                /**
                 * Id of Element that should contain Editor instance
                 */
                holder: 'editorjs',
                tools: {
                    header: Header,
                    delimiter: Delimiter,
                    paragraph:Paragraph,
                    alert: {
                    class: Alert,
                    inlineToolbar: true,
                    shortcut: 'CMD+SHIFT+A',
                    config: {
                        alertTypes: ['primary', 'secondary', 'info', 'success', 'warning', 'danger', 'light', 'dark'],
                        defaultType: 'primary',
                        messagePlaceholder: 'Enter something',
                    }
                    },
                }
                });
                ref.current = editor;
            }
            }

return (
    <div className='-ml-40'>
        <div id='editorjs'></div>
    </div>
)
}

export default RichDocumentEditor
