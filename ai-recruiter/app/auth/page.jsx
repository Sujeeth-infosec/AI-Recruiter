"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { supabase } from '@/services/supabaseClient';
// "use client";         // This is a client component that handles user authentication using Supabase and Google OAuth

function Login() {

    // Function to handle Google sign-in
  // This function is called when the user clicks the "Login with Google" button
  const signInWithGoogle = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
      });
      if (error) {
        console.error('Error signing in with Google:', error.message);
      }
    } catch (err) {
      console.error('Unexpected error:', err);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='flex flex-col items-center border rounded-2xl p-8 shadow-lg bg-white'>
        <Image
          src={'/logo.png'}
          alt='logo'
          width={100}
          height={100}
          className='w-[180px] rounded-lg'
        />
        <div>
          <div className='flex items-center flex-col'>
            <Image
              src={'/login.png'}
              alt='login'
              width={600}
              height={600}
              className='w-[400px] h-[250px]'
            />
            <div className='flex flex-col items-center'>
              <h2 className='text-2xl font-bold text-center mt-5'>Welcome to Ai-Recruiter</h2>
              <p className='text-gray-500 text-center'>Please sign in with Google</p>
              <button
                className='mt-7 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600'
                onClick={signInWithGoogle}
              >
                Login with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;