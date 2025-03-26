import {React,useRef,useEffect, useState} from 'react'
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import Delimiter from '@editorjs/delimiter';
import Alert from 'editorjs-alert';
import Paragraph from '@editorjs/paragraph';
import EditorjsList from '@editorjs/list';
import CodeTool from '@editorjs/code';
import Table from '@editorjs/table'
import ImageTool from '@editorjs/image';
import { db } from '../../../../config/firebaseconfig';
import { doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { useUser } from '@clerk/nextjs';

function RichDocumentEditor({params}) {
    const ref=useRef();
    let editor;
    const {user}=useUser();
    const [documentOutput, setDocumentOutput] = useState([]);
    let isFetched=false

    // useEffect(()=>{
    //     params&&GetDocumentOutput()
    // },[params])

    useEffect(()=>{
        user&&InitEditor();
    },[user])

    /*
    Use to save document data
    */
    const SaveDocument=()=>{
        ref.current.save().then(async(outputData)=>{
            const docRef=doc(db,'documentOutput',params?.documentid);
            await updateDoc(docRef,{
                output:outputData,
                editedBy:user?.primaryEmailAddress?.emailAddress
            })
        })
    }

    const GetDocumentOutput=()=>{
        const unsubscribe=onSnapshot(doc(db,'documentOutput',params?.documentid),
        (doc)=>{
            if (doc.data()?.editedBy != user?.primaryEmailAddress?.emailAddress||isFetched==false)
        doc.data().editedBy&&editor?.render(JSON.parse(doc.data()?.output));
        isFetched=true
        })
    }

    const InitEditor=()=>{
        if(!editor?.current){

            editor = new EditorJS({
                onChange:(ap,event)=>{
                    SaveDocument()
                },

                onReady:()=>{
                    GetDocumentOutput()
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
    <div className='lg:ml-10'>
        <div id='editorjs'></div>
    </div>
)
}

export default RichDocumentEditor
