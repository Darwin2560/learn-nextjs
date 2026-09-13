import Link from "next/link";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <span className="text-5xl">Hola Mundo</span>

      <Link href="/about" className="text-blue-500 hover:text-blue-700 transition-colors duration-300">
        Go to About Page
      </Link>    
    </main>

  );
}
