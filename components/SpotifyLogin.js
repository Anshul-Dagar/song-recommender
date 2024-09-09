'use client'

import { SignIn, useAuth } from "@clerk/nextjs";

export default function SpotifyLogin() {
    const {session} =useAuth()

   if(!session) {
    return (
        <SignIn 
        routing="path"
        path="/recommendation"
        appearance={{
            elements:{
                userButtontext: 'Login with Spotify',
                signInButtonText: 'Logoin with Spotify',
            },
        }}
        />
    )
   }
}