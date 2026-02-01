import { Response } from '@/types/response';

export async function analyzeImage(file: File): Promise<Response> {
  const formData = new FormData();
  formData.append('file', file);

  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  if (!BASE_URL) {
    throw new Error('Backend URL not defined');
  }

  const res = await fetch(`${BASE_URL}/analyze`, {
    method: 'POST',
    body: formData,
  });

  if (!res.ok) {
    throw new Error('Failed to analyze image');
  }

  return (await res.json()) as Response;
}
