import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-12 lg:py-16min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="text-center">
        <Image
          src="/images/404.jpg"
          alt="404 Not Found"
          width={400}
          height={300}
          className="mb-8"
          priority
        />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-8">The page you are looking for does not exist.</p>
        <Link 
          href="/" 
          className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
} 