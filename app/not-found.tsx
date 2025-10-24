import { redirect } from 'next/navigation';

export default function NotFound() {
  // Redirect to the default locale's custom 404 page
  redirect('/es/not-found');
}
