import { Response } from '@/types/response';

export const getDetection = async (file: File): Promise<Response> => {
  const formData = new FormData();
  formData.append('file', file);

  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  if (!BASE_URL) {
    throw new Error('Backend URL not defined');
  }

  const response = await fetch(`${BASE_URL}/analyze`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Detection request failed');
  }

  return await response.json();
};
