import Link from 'next/link';
import Image from 'next/image';
import { Menu, User, Search } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className='sticky top-0 z-50 bg-basewhite'>
            <div className="mx-auto flex items-center justify-between p-2">
                <Link href="/" className='flex items-center'>
                    <Image
                        src='/images/property-logo.png'
                        alt='Davao Property'
                        width={65}
                        height={50}
                        className="object-contain"
                    />
                    <span className='text-lg font-bold ml-2'>Davao Property Hub</span>
                </Link>

                <div className="md:flex space-x-6">
                    <Link href="/listings" className="hover:text-blue-600 transition-colors font-black text-lg">
                        Rentals
                    </Link>
                    <Link href="/bookings" className="hover:text-blue-600 transition-colors font-black text-lg">
                        Bookings
                    </Link>
                    <Link href="/about" className="hover:text-blue-600 transition-colors font-black text-lg">
                        About Us
                    </Link>
                </div>
                {/* Search and User Actions */}
                <div className="flex items-center space-x-4">
                    {/* Search Button */}
                    <button className="hover:bg-gray-100 p-2 rounded-full">
                        <Search size={20} />
                    </button>

                    {/* User Profile / Login */}
                    <Link 
                        href="/profile" 
                        className="hover:bg-gray-100 p-2 rounded-full"
                    >
                        <User size={20} />
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button 
                        className="desktop:hidden hover:bg-gray-100 p-2 rounded-full"
                        aria-label="Mobile Menu"
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;