'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ShoppingCart, User, Search, ChevronDown, Menu, X } from 'lucide-react';
import clsx from 'clsx';

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <nav className="w-full px-4 py-4 shadow-md bg-white relative">
      <div className="flex items-center justify-between ">
        {/* Left Section - Menu + Logo */}
        <div className="flex items-center space-x-4 md:space-x-10">
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="transition-transform duration-300">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <div className="text-xl md:text-2xl font-bold">
            <Link href="/">SHOP.CO</Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-6 text-sm">
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="hover:text-blue-600 flex items-center gap-1 cursor-pointer"
              >
                Shop <ChevronDown className="w-4 h-4 " />
              </button>
              {dropdownOpen && (
                <div className="absolute top-8 left-0 bg-white border rounded shadow-md w-40 z-50">
                  <ul className="flex flex-col text-xs md:text-sm xl:text-base">
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link href="/shop/men">Men</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link href="/shop/women">Women</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link href="/shop/kids">Kids</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <Link href="/sale" className="hover:text-blue-600">On Sale</Link>
            <Link href="/new-arrivals" className="hover:text-blue-600">New Arrivals</Link>
            <Link href="/brands" className="hover:text-blue-600">Brands</Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4 md:space-x-4">
          {/* One search icon visible across all screen sizes */}
          <button onClick={() => setShowSearch(!showSearch)}>
            <Search className="text-gray-500 cursor-pointer hover:text-blue-600" size={24} />
          </button>

          {/* Animated Desktop Search Bar */}
          <div
            className={clsx(
              'hidden lg:flex transition-all duration-300 ease-in-out overflow-hidden',
              showSearch ? 'w-[250px] h-[36px] opacity-100 scale-100 px-4' : 'w-0 h-0 opacity-0 scale-95 px-0'
            )}
            style={{
              backgroundColor: '#f3f4f6',
              borderRadius: '9999px',
              alignItems: 'center'
            }}
          >
            <Search className="text-gray-500 mr-2" size={20} />
            <input
              type="text"
              placeholder="Search for products"
              className="bg-transparent outline-none w-full text-sm"
            />
          </div>

          <Link href="/cart">
            <ShoppingCart className="cursor-pointer hover:text-blue-600" />
          </Link>
          <Link href="/login">
            <User className="cursor-pointer hover:text-blue-600" />
          </Link>
        </div>
      </div>

      {/* Mobile Search Bar (below nav) */}
      {showSearch && (
        <div className="lg:hidden mt-4 flex justify-center transition-all duration-300 ease-in-out">
          <div className="w-[90%] h-[48px] bg-gray-100 rounded-full flex items-center px-4">
            <Search className="text-gray-500 mr-2" size={20} />
            <input
              type="text"
              placeholder="Search for products"
              className="bg-transparent outline-none w-full text-sm"
            />
          </div>
        </div>
      )}

      {/* Animated Mobile Menu */}
      <div
        className={clsx(
          'md:hidden transition-all duration-500 ease-in-out overflow-hidden',
          menuOpen ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'
        )}
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 text-sm font-medium"
            >
              Shop <ChevronDown className="w-4 h-4" />
            </button>
            {dropdownOpen && (
              <div className="ml-4 space-y-1 text-sm">
                <Link href="/shop/men" className="block">Men</Link>
                <Link href="/shop/women" className="block">Women</Link>
                <Link href="/shop/kids" className="block">Kids</Link>
              </div>
            )}
            <Link href="/sale" className="block">On Sale</Link>
            <Link href="/new-arrivals" className="block">New Arrivals</Link>
            <Link href="/brands" className="block">Brands</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}