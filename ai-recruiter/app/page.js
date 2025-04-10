import Image from "next/image";

export default function Home() {
  return (
    <div className="home-container">
      <h2 className="title">Welcome to AI Recruiter</h2>
      <Image src="/logo.png" alt="AI Recruiter Logo" width={100} height={100} />
    </div>
  );
}