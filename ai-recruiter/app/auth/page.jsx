"use client";
import React from "react";
import Image from "next/image";
import { supabase } from "@/services/supabaseClient";

function Login() {
  const signInWithGoogle = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });
      if (error) {
        console.error("Error signing in with Google:", error.message);
      }
    } catch (err) {
      console.error("Unexpected error:", err);
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-400 animate-gradient-x">
      {/* Background animation overlay */}
      <div className="absolute inset-0 z-0 animate-pulse bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent_60%)]" />

      <div className="relative z-10 bg-white/20 backdrop-blur-2xl border border-white/30 shadow-2xl rounded-3xl px-10 py-12 max-w-md w-full text-center">
        <Image
          src="/logo.jpeg"
          alt="AI Recruiter Logo"
          width={120} // Adjusted width for better visibility
          height={120} // Adjusted height for better proportions
          className="mx-auto mb-6 rounded-full border border-gray-300 shadow-md" // Added rounded and shadow styling
        />

        <h2 className="text-3xl font-bold text-white">Welcome to AI-Recruiter</h2>
        <p className="text-white/80 text-sm mt-2 mb-6">Please sign in with Google to continue</p>

        <Image
          src="/login.jpg"
          alt="Login Illustration"
          width={400}
          height={200}
          className="mx-auto mb-6 rounded-lg"
        />

        <button
          onClick={signInWithGoogle}
          className="transition-all duration-300 transform active:scale-95 hover:shadow-lg hover:bg-white/90 bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg w-full"
        >
          Login with Google
        </button>
      </div>

      {/* Tailwind custom animation for gradient */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 400% 400%;
          animation: gradient-x 10s ease infinite;
        }
      `}</style>
    </div>
  );
}

export default Login;
