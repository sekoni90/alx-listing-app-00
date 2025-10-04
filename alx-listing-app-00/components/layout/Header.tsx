// components/layout/Header.tsx
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h3 className="font-bold text-2xl">
          <Link href="/">Accommodation Finder</Link>
        </h3>
        <div className="flex items-center space-x-4">
          <input
            type="search"
            placeholder="Search accommodations..."
            className="px-4 py-2 rounded-full text-gray-800 focus:outline-none"
          />
          <div className="space-x-4">
            <Link href="/sign-in" className="hover:underline">Sign In</Link>
            <Link href="/sign-up" className="hover:underline">Sign Up</Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-2">
        <nav className="flex space-x-4 overflow-x-auto">
          <Link href="/accommodations/rooms" className="hover:underline">Rooms</Link>
          <Link href="/accommodations/mansion" className="hover:underline">Mansion</Link>
          <Link href="/accommodations/countryside" className="hover:underline">Countryside</Link>
          {/* Add more types as needed */}
        </nav>
      </div>
    </header>
  );
};

export default Header;

