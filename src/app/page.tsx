import { redirect } from 'next/navigation';

// Main component. Redirect to the main page, in this case dashboard
export default function HomePage() {

  redirect('/dashboard/movies/1');

}
