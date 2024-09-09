import SpotifyLogin from '../components/SpotifyLogin.js';
import { SignedIn,SignedOut, useAuth } from "@clerk/nextjs";
import {auth} from '@clerk/nextjs/server'
import Link from 'next/link';

export default function Home() {

  return (
    <main className= "flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className= "text-4xl font-bold mb-8">Spotify AI Recommender</h1>
      <SignedIn>
        <Link href="/recommendations" className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4rounded'>
          Get Recommendations
        </Link>
        </SignedIn>
        <SignedOut>
          <SpotifyLogin />
          </SignedOut>
      </main >
  );
}
