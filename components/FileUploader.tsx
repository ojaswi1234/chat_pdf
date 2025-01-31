"use client"
import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone';
import { FileCheck, RocketIcon } from 'lucide-react';
function FileUploader() {
    const onDrop = useCallback((acceptedFiles: File[]) => {
       console.log(acceptedFiles);
      }, [])
      const {getRootProps, getInputProps, isDragActive, isDragAccept } = useDropzone({onDrop})
    
      useDropzone({
        onDrop,
        accept: { 
            "application/pdf": [".pdf"],
        },
      });

      return (
        <div {...getRootProps()} className={`mt-24 border-2 border-dashed border-gray-300 rounded-md p-5 text-center w-3/4 sm:w-1/2 h-32 flex flex-col gap-2 justify-center items-center place-self-center ${isDragAccept ? 'border-green-500 bg-green-300' : ''}`}>
          <input {...getInputProps()} className="cursor-pointer"/>
          
          {
            isDragActive ?
            <> <FileCheck />
              <p>Drop the files here ...</p></> :
              <><RocketIcon className="size-14 fill-green-500 animate-bounce"/><p>Drag &apos;&&apos; drop some files here, or click to select files</p></>
          }
        </div>

    );
}

export default FileUploader