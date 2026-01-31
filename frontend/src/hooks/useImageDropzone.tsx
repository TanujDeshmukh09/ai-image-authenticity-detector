import { useDropzone } from 'react-dropzone';
import { useCallback, useState } from 'react';

const MAX_FILE_SIZE = 10 * 1024 * 1024; // ✅ 10 MB

export function useImageDropzone() {
  const [file, setFile] = useState<File | null>(null);
  const [fileRejectionItems, setFileRejectionItems] = useState<string>('');

  const onDrop = useCallback((acceptedFiles: File[], rejectedFiles: any[]) => {
    if (rejectedFiles.length > 0) {
      const error = rejectedFiles[0].errors[0];

      if (error.code === 'file-too-large') {
        setFileRejectionItems('File size should be less than 10 MB.');
      } else if (error.code === 'file-invalid-type') {
        setFileRejectionItems('Only JPG, PNG, JPEG, or WEBP images are allowed.');
      } else {
        setFileRejectionItems('Invalid file.');
      }

      return;
    }

    const selectedFile = acceptedFiles[0];
    setFile(selectedFile);
    setFileRejectionItems('');
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    maxSize: MAX_FILE_SIZE,
    accept: {
      'image/jpeg': [],
      'image/png': [],
      'image/webp': [],
      'image/jpg': [],
    },
  });

  const onRemove = () => {
    setFile(null);
    setFileRejectionItems('');
  };

  return {
    file,
    fileRejectionItems,
    onRemove,
    getRootProps,
    getInputProps,
  };
}
