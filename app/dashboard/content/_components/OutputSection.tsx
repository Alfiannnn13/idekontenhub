import React, { useEffect, useRef, useState } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';
import {Editor} from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import { toast } from 'react-toastify'; // Import toast dari react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import CSS untuk toast

interface props{
  aiOutput: string;
}

function OutputSection  ({aiOutput}:props) {
  const [copySuccess, setCopySuccess] = useState(false);
    const editorRef:any=useRef();

    useEffect(()=> {
      const editorInstance=editorRef.current.getInstance();
      editorInstance.setMarkdown(aiOutput);
    },[aiOutput])

    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(aiOutput);
        setCopySuccess(true);
        toast.success('Copied to clipboard!'); // Menampilkan notifikasi toast
      } catch (error) {
        console.error('Failed to copy: ', error);
        setCopySuccess(false);
        toast.error('Failed to copy!'); // Menampilkan notifikasi toast jika gagal
      }
    };
  return (
    <div className='bg-white shadow-lg border rounded-xl'>
        <div className="flex justify-between items-center p-5">
            <h2 className='text-lg'>Hasil</h2>
            <Button className='bg-purple-400 flex gap-2'
            onClick={handleCopy}>
              <Copy className='w-4 h-4'/> Salin </Button>
        </div>
        <Editor
        ref={editorRef}
            initialValue="Hasil akan muncul disini"
            initialEditType="wysiwyg"
            height="600px"
            useCommandShortcut={true}
            onChange={()=>console.log()}
        />
    </div>
  )
}

export default OutputSection