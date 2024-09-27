import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-md p-6">
      <nav className="space-y-4">
        <Link href="/" className="block text-lg font-semibold hover:text-blue-600">
          Home
		/</Link>
      </nav>
    </div>
  );
}
