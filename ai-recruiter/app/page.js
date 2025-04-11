import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-blue-300">
      <div className="bg-white shadow-lg rounded-3xl p-8 max-w-md w-full text-center border border-gray-200">
        <Image
          src="/logo.jpeg"
          alt="AI Recruiter Logo"
          width={150} // Increased width for better visibility
          height={150} // Increased height for better proportions
          className="mx-auto mb-6 rounded-full border border-gray-300 shadow-sm" // Added rounded and border styling
        />
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to AI Recruiter
        </h2>
        <p className="text-gray-600 text-sm mb-6">
          Streamline your hiring process with cutting-edge automation and efficiency.
        </p>
        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-all duration-300">
          Get Started
        </button>
        <p className="text-gray-500 text-xs mt-4">
          By clicking "Get Started," you agree to our{" "}
          <a href="/terms" className="text-blue-500 hover:underline">
            Terms and Conditions
          </a>.
        </p>
      </div>
    </div>
  );
}