"use client";
import { useState, useEffect } from "react";
import Link from "next/link"; // Only one Link import
import Image from "next/image";
import { FaShoppingBasket, FaTimes, FaBars } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setIsOpen(false);

  return (
    <header
      className={`w-full top-0 z-50 transition-all duration-300 bg-white mt-6 flex items-center`}
    >
      <nav className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="https://dictate.webinane.com/wp-content/uploads/2022/03/Dictate-logo-new.svg"
              alt="Company Logo"
              width={200}
              height={200}
              className="w-[180px] h-[100px]"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6 text-xl">
          <NavLink href="/" text="Home" />
          <NavLink href="/shop" text="Shop" />
          <NavLink href="/services" text="Services" />
          <NavLink href="/blog" text="Blog" />
          <NavLink href="/pages" text="Pages" />
          <NavLink href="/about" text="About" />
          <NavLink href="/contact" text="Contact" />
        </div>

        {/* Right Side Icons/Button */}
        <div className="hidden lg:flex items-center space-x-6">
          <div className="relative">
            <FaShoppingBasket className="text-2xl text-gray-700 hover:text-[#F6526D] transition-colors duration-300 cursor-pointer" />
            <div className="absolute -top-2 -right-2 bg-[#F6526D] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              1
            </div>
          </div>
          <button className="bg-[#F6526D] text-white py-3 px-8 rounded-full text-lg hover:bg-[#D94760] transition-colors duration-300 cursor-pointer">
            Appointment
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <div className="relative mr-4">
            <FaShoppingBasket className="text-2xl text-gray-700" />
            <div className="absolute -top-2 -right-2 bg-[#F6526D] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              1
            </div>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden inset-0 bg-white z-40 transition-all duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-8">
              <Link href="/" onClick={closeMobileMenu}>
                <Image
                  src="https://dictate.webinane.com/wp-content/uploads/2022/03/Dictate-logo-new.svg"
                  alt="Company Logo"
                  width={120}
                  height={40}
                  className="w-auto h-10"
                />
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-700 focus:outline-none"
              >
                <FaTimes className="text-2xl" />
              </button>
            </div>

            <div className="flex flex-col space-y-6 justify-center text-center w-full">
              <MobileNavLink href="/" text="Home" onClick={closeMobileMenu} />
              <MobileNavLink
                href="/shop"
                text="Shop"
                onClick={closeMobileMenu}
              />
              <MobileNavLink
                href="/services"
                text="Services"
                onClick={closeMobileMenu}
              />
              <MobileNavLink
                href="/blog"
                text="Blog"
                onClick={closeMobileMenu}
              />
              <MobileNavLink
                href="/pages"
                text="Pages"
                onClick={closeMobileMenu}
              />
              <MobileNavLink
                href="/about"
                text="About"
                onClick={closeMobileMenu}
              />
              <MobileNavLink
                href="/contact"
                text="Contact"
                onClick={closeMobileMenu}
              />

              <button className="mt-8 w-[30%] bg-[#F6526D] text-white py-3 px-8 rounded-full text-lg hover:bg-[#D94760] transition-colors duration-300 mx-auto">
                Appointment
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

// Helper components
function NavLink({ href, text }) {
  return (
    <Link
      href={href}
      className="relative text-gray-700 hover:text-[#F6526D] transition-colors duration-300 group"
    >
      {text}
      <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#F6526D] transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
}

function MobileNavLink({ href, text, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-gray-700 hover:text-[#F6526D] text-xl transition-colors duration-300 py-2 border-b border-gray-100"
    >
      {text}
    </Link>
  );
}
