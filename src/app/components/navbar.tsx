
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ShoppingCart, User, Search, ChevronDown, Menu, X } from 'lucide-react';
import clsx from 'clsx';
// import {
//   Drawer,
//   DrawerClose,
//   DrawerContent,
//   DrawerHeader,
//   DrawerTitle,
//   DrawerTrigger,
// } from "@/components/ui/drawer";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { Slider } from "@/components/ui/slider";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  // const [priceRange, setPriceRange] = useState([10]);

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
            <Link href="/new_arrivals" className="hover:text-blue-600">New Arrivals</Link>
            <Link href="/shop" className="hover:text-blue-600">Filter</Link>
            
            {/* <Drawer>
              <DrawerTrigger asChild>
                <button className="hover:text-blue-600 cursor-pointer">Filter</button>
              </DrawerTrigger>
              <DrawerContent className="left-0 right-auto w-[300px] h-full">
                <DrawerHeader className="flex justify-between items-center border-b pb-4">
                  <DrawerTitle className="text-center flex-1">Filters</DrawerTitle>
                  <DrawerClose className="p-2">
                    <X size={24} />
                  </DrawerClose>
                </DrawerHeader>

                <div className="p-4 space-y-6">
                  
                  <div className="space-y-2">
                    <Link href="/category/tshirts" className="block hover:text-blue-600">T-Shirts</Link>
                    <Link href="/category/shorts" className="block hover:text-blue-600">Shorts</Link>
                    <Link href="/category/shirts" className="block hover:text-blue-600">Shirts</Link>
                    <Link href="/category/jeans" className="block hover:text-blue-600">Jeans</Link>
                  </div>

                  
                  <Accordion type="single" collapsible>
                    <AccordionItem value="price">
                      <AccordionTrigger>Price Range</AccordionTrigger>
                      <AccordionContent>
                        <div className="px-2">
                          <Slider
                            defaultValue={[10]}
                            max={1000}
                            min={10}
                            step={10}
                            onValueChange={setPriceRange}
                          />
                          <div className="mt-2 text-sm text-gray-600">
                            ${priceRange[0]} - $1000
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="color">
                      <AccordionTrigger>Color</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          <label className="flex items-center space-x-2">
                            <input type="checkbox" className="rounded" />
                            <span>Black</span>
                          </label>
                          <label className="flex items-center space-x-2">
                            <input type="checkbox" className="rounded" />
                            <span>White</span>
                          </label>
                          <label className="flex items-center space-x-2">
                            <input type="checkbox" className="rounded" />
                            <span>Blue</span>
                          </label>
                          <label className="flex items-center space-x-2">
                            <input type="checkbox" className="rounded" />
                            <span>Red</span>
                          </label>
                          <label className="flex items-center space-x-2">
                            <input type="checkbox" className="rounded" />
                            <span>Green</span>
                          </label>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="size">
                      <AccordionTrigger>Size</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          <label className="flex items-center space-x-2">
                            <input type="checkbox" className="rounded" />
                            <span>S</span>
                          </label>
                          <label className="flex items-center space-x-2">
                            <input type="checkbox" className="rounded" />
                            <span>M</span>
                          </label>
                          <label className="flex items-center space-x-2">
                            <input type="checkbox" className="rounded" />
                            <span>L</span>
                          </label>
                          <label className="flex items-center space-x-2">
                            <input type="checkbox" className="rounded" />
                            <span>XL</span>
                          </label>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="design">
                      <AccordionTrigger>Design</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          <label className="flex items-center space-x-2">
                            <input type="checkbox" className="rounded" />
                            <span>Casual</span>
                          </label>
                          <label className="flex items-center space-x-2">
                            <input type="checkbox" className="rounded" />
                            <span>Formal</span>
                          </label>
                          <label className="flex items-center space-x-2">
                            <input type="checkbox" className="rounded" />
                            <span>Sport</span>
                          </label>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
                    Apply Filters
                  </button>
                </div>
              </DrawerContent>
            </Drawer> */}
          </div>
        </div>

        {/* Rest of the navbar code remains the same */}
        <div className="flex items-center space-x-4 md:space-x-4">
          <button onClick={() => setShowSearch(!showSearch)}>
            <Search className="text-gray-500 cursor-pointer hover:text-blue-600" size={24} />
          </button>

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

          <Link href="/addcart">
            <ShoppingCart className="cursor-pointer hover:text-blue-600" />
          </Link>
          <Link href="/login">
            <User className="cursor-pointer hover:text-blue-600" />
          </Link>
        </div>
      </div>

      {/* Mobile Search Bar */}
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

      {/* Mobile Menu */}
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
            <Link href="/shop" className="block">Filter</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
