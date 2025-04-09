import React from 'react';
import Image from 'next/image';

function Login() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='flex flex-col items-center border rounded-2xl p-8 shadow-lg bg-white'>
        <Image
          src={'/logo.png'}
          alt='logo'
          width={100}
          height={100}
          className='w-[180px] rounded-2xl h-[80px]'
        />
        <div>
          <div className='flex flex-items flex-col'>
            <Image
              src={'/login.png'}
              alt='login'
              width={600}
              height={600}
              className='w-[400px] h-[250px]'
            />
            <div className='flex flex-col items-center'>
              <h2 className='text-2xl font-bold text-center mt-5 '>Welcome to Ai-Recruiter</h2>
              <p className='text-gray-500 text-center'>Please sign in with Google</p>
              <button className='mt-7 w-full'>Login with Google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;