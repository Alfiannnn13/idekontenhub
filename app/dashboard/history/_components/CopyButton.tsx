"use client"
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { toast } from 'react-toastify'; // Import toast dari react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import CSS untuk toast

function CopyButton({ aiResponse }: any) {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(aiResponse);
      setCopySuccess(true);
      toast.success('Copied to clipboard!'); // Menampilkan notifikasi toast
    } catch (error) {
      console.error('Failed to copy: ', error);
      setCopySuccess(false);
      toast.error('Failed to copy!'); // Menampilkan notifikasi toast jika gagal
    }
  };

  return (
    <div>
      <Button variant='ghost' className='text-purple-500' onClick={handleCopy}>
        Copy
      </Button>
      {/* Komponen ToastContainer harus ditambahkan di level yang lebih tinggi, biasanya di App.js atau index.js */}
    </div>
  );
}

export default CopyButton;
