import {React,useRef,useEffect} from 'react'
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import Delimiter from '@editorjs/delimiter';
import Alert from 'editorjs-alert';
import Paragraph from '@editorjs/paragraph';
import EditorjsList from '@editorjs/list';
import CodeTool from '@editorjs/code';
import Table from '@editorjs/table'
import ImageTool from '@editorjs/image';

function RichDocumentEditor() {
    const ref=useRef();
    let editor;

    useEffect(()=>{
        InitEditor();
    },[])

    /*
    Use to save document data
    */
    const SaveDocument=()=>{
        ref.current.save().then((outputData)=>{
            console.log(outputData)
        })
    }

    const InitEditor=()=>{
        if(!editor?.current){

            editor = new EditorJS({
                onChange:(ap,event)=>{
                    SaveDocument()
                },

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
                    list: {
                        class: EditorjsList,
                        inlineToolbar: true,
                        config: {
                        defaultStyle: 'unordered'
                        },
                    },
                    code: CodeTool,
                    table: Table,
                    image: {
                        class: ImageTool,
                        config: {
                        endpoints: {
                            byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
                            byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
                        }
                        }
                    }
                }
                });
                ref.current = editor;
            }
            }

return (
    <div className='lg:-ml-40'>
        <div id='editorjs'></div>
    </div>
)
}

export default RichDocumentEditor
