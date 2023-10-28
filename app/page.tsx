import { cookies } from 'next/headers';

export default function Home() {
  const value = cookies().get('test')?.value;
  console.log('[page server component] value', value);

  return null;
}
