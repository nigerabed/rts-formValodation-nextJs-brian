import Link from "next/link";

export default function Home() {
  return (
    <main className="h-[100vh] flex items-center justify-center">
    <div className="flex flex-col justify-center items-center">
      <Link href="/registrationForm" className="bg-gray-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
        Find registration form here..
      </Link>
    </div>
  </main>
  );
}
