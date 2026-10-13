import { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { MapPin, Mail, Clock, Phone, ChevronDown, Menu, X } from 'lucide-react';
import logoImg from '@/assets/images/logo.png';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [desktopDropdown, setDesktopDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef(null);
  const location = useLocation();

  // Close all menus whenever route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setDesktopDropdown(null);
  }, [location.pathname]);

  // Close mobile menu when clicking/tapping outside the navbar
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const closeAllMenus = () => {
    setDesktopDropdown(null);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <>
      {/* 1. TOP INFO BAR — Scrolls away naturally without mutating sticky header height */}
      <div className="bg-white border-b border-neutral-200 select-none">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-stretch justify-between text-xs">
          {/* Left info items */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 py-2 px-4 text-neutral-700">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-red-600 shrink-0" />
              <span>Tagore Marg, Hazratganj, Lucknow – 226007, Uttar Pradesh</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-red-600 shrink-0" />
              <a href="mailto:gca_lko@rediffmail.com" className="hover:text-red-600 transition-colors">
                gcaaa072@gmail.com
              </a>
            </div>
          </div>

          {/* Right angled welcome banner */}
          <div className="bg-black text-white px-8 py-2 font-medium flex items-center justify-center slant-cut-left shrink-0">
            <span>Welcome to Government College Alumni Association</span>
          </div>
        </div>
      </div>

      {/* STICKY HEADER (Constant height prevents scroll oscillation / bubbling) */}
      <header
        ref={headerRef}
        className={`sticky top-0 z-50 w-full select-none transition-shadow duration-300 ${
          isScrolled ? 'shadow-2xl' : 'shadow-md'
        }`}
      >
        {/* 2. MIDDLE BRANDING BAR */}
        <div className="bg-white border-b border-neutral-200 px-4 py-3">
  <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-4">
    {/* Brand Logo */}
    <Link to="/" className="flex items-center gap-3">
      {logoImg ? (
        <img
          src={logoImg}
          alt="GCAAA Logo"
          className="w-auto object-contain h-14 sm:h-16"
        />
      ) : (
        <div className="bg-red-600 rounded-lg flex items-center justify-center text-white font-black w-11 h-11 text-lg">
          G
        </div>
      )}
      <div className="flex flex-col">
        <span className="font-extrabold text-neutral-900 tracking-tight leading-tight uppercase text-lg sm:text-xl">
          GCAAA
        </span>
        <span className="text-[10px] sm:text-[11px] font-bold text-neutral-600 tracking-wider uppercase leading-none">
          Alumni Association
        </span>
      </div>
    </Link>

    {/* Right Widgets */}
    <div className="hidden lg:flex items-center gap-8">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-700 shadow-sm">
          <Clock className="w-5 h-5 text-neutral-800" />
        </div>
        <div>
          <p className="text-sm font-bold text-neutral-900 leading-tight lining-nums">
            09:00 am - 06:00 pm
          </p>
          <p className="text-xs text-neutral-500">We Serve with Pleasure</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-700 shadow-sm">
          <Phone className="w-5 h-5 text-neutral-800" />
        </div>
        <div>
          <a
            href="tel:05222740152"
            className="text-sm font-bold text-neutral-900 leading-tight hover:text-red-600 transition-colors lining-nums"
          >
            0522-2740152
          </a>
          <p className="text-xs text-neutral-500">Discuss any Queries</p>
        </div>
      </div>

      <div className="flex items-center border border-neutral-300 rounded overflow-hidden">
        <a
          href="#facebook"
          aria-label="Facebook"
          className="w-8 h-8 flex items-center justify-center text-neutral-700 hover:bg-red-600 hover:text-white border-r border-neutral-300 transition-colors"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.688 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z" />
          </svg>
        </a>
        <a
          href="#instagram"
          aria-label="Instagram"
          className="w-8 h-8 flex items-center justify-center text-neutral-700 hover:bg-red-600 hover:text-white border-r border-neutral-300 transition-colors"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>
        <a
          href="#linkedin"
          aria-label="LinkedIn"
          className="w-8 h-8 flex items-center justify-center text-neutral-700 hover:bg-red-600 hover:text-white border-r border-neutral-300 transition-colors"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
          </svg>
        </a>
        <a
          href="#twitter"
          aria-label="X"
          className="w-8 h-8 flex items-center justify-center text-neutral-700 hover:bg-red-600 hover:text-white transition-colors"
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
      </div>
    </div>

    {/* Mobile hamburger */}
    <div className="flex lg:hidden">
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="p-2 rounded bg-neutral-100 text-neutral-800 hover:bg-red-600 hover:text-white transition-colors"
        aria-label="Toggle Menu"
      >
        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
    </div>
  </div>
</div>
      {/* 3. MAIN NAV BAR (RED) */}
      <nav className={`bg-red-600 transition-shadow duration-300 ${isScrolled ? 'shadow-2xl' : 'shadow-md'}`}>
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="hidden lg:flex items-center justify-center space-x-1 font-bold text-xs tracking-wider text-white">
            <NavLink to="/" className={({ isActive }) => `px-4 py-3.5 hover:bg-red-700 transition-colors ${isActive ? 'bg-red-700 text-white' : ''}`}>
              HOME
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `px-4 py-3.5 hover:bg-red-700 transition-colors ${isActive ? 'bg-red-700 text-white' : ''}`}>
              ABOUT US
            </NavLink>

            <div
              className="relative"
              onMouseEnter={() => setDesktopDropdown('team')}
              onMouseLeave={() => setDesktopDropdown(null)}
            >
              <button
                type="button"
                onClick={() => setDesktopDropdown(desktopDropdown === 'team' ? null : 'team')}
                className="px-4 py-3.5 flex items-center gap-1 hover:bg-red-700 transition-colors uppercase"
              >
                TEAM GCAAA <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {desktopDropdown === 'team' && (
                <div className="absolute top-full left-0 bg-neutral-900 border border-neutral-800 text-white shadow-xl min-w-[200px] py-2 z-50">
                  <Link to="/committee/office-bearers" onClick={closeAllMenus} className="block px-4 py-2 hover:bg-red-600 text-xs">Office Bearers</Link>
                  <Link to="/committee/executive-members" onClick={closeAllMenus} className="block px-4 py-2 hover:bg-red-600 text-xs">Executive Members</Link>
                  <Link to="/committee/convenor" onClick={closeAllMenus} className="block px-4 py-2 hover:bg-red-600 text-xs">Convenor</Link>
                </div>
              )}
            </div>

            <NavLink to="/events" className={({ isActive }) => `px-4 py-3.5 hover:bg-red-700 transition-colors ${isActive ? 'bg-red-700 text-white' : ''}`}>
              EVENT
            </NavLink>
            <NavLink to="/gallery" className={({ isActive }) => `px-4 py-3.5 hover:bg-red-700 transition-colors ${isActive ? 'bg-red-700 text-white' : ''}`}>
              GALLERY & AWARDS
            </NavLink>

            <div
              className="relative"
              onMouseEnter={() => setDesktopDropdown('join')}
              onMouseLeave={() => setDesktopDropdown(null)}
            >
              <button
                type="button"
                onClick={() => setDesktopDropdown(desktopDropdown === 'join' ? null : 'join')}
                className="px-4 py-3.5 flex items-center gap-1 hover:bg-red-700 transition-colors uppercase"
              >
                JOIN GCAAA <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {desktopDropdown === 'join' && (
                <div className="absolute top-full left-0 bg-neutral-900 border border-neutral-800 text-white shadow-xl min-w-[200px] py-2 z-50">
                  <Link to="/contact" onClick={closeAllMenus} className="block px-4 py-2 hover:bg-red-600 text-xs">Alumni Registration</Link>
                  <Link to="/contact" onClick={closeAllMenus} className="block px-4 py-2 hover:bg-red-600 text-xs">Life Membership</Link>
                </div>
              )}
            </div>

            <NavLink to="/resources" className={({ isActive }) => `px-4 py-3.5 hover:bg-red-700 transition-colors ${isActive ? 'bg-red-700 text-white' : ''}`}>
              RESOURCES
            </NavLink>
            <NavLink to="/blog" className={({ isActive }) => `px-4 py-3.5 hover:bg-red-700 transition-colors ${isActive ? 'bg-red-700 text-white' : ''}`}>
              BLOGS
            </NavLink>

            <div
              className="relative"
              onMouseEnter={() => setDesktopDropdown('contact')}
              onMouseLeave={() => setDesktopDropdown(null)}
            >
              <Link
                to="/contact"
                onClick={closeAllMenus}
                className="px-4 py-3.5 flex items-center gap-1 hover:bg-red-700 transition-colors uppercase"
              >
                CONTACT US <ChevronDown className="w-3.5 h-3.5" />
              </Link>
              {desktopDropdown === 'contact' && (
                <div className="absolute top-full right-0 bg-neutral-900 border border-neutral-800 text-white shadow-xl min-w-[180px] py-2 z-50">
                  <Link to="/contact" onClick={closeAllMenus} className="block px-4 py-2 hover:bg-red-600 text-xs">Office Location</Link>
                  <Link to="/contact" onClick={closeAllMenus} className="block px-4 py-2 hover:bg-red-600 text-xs">Send Query</Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Nav */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-3 space-y-1 font-bold text-xs uppercase text-white border-t border-red-500">
              <NavLink to="/" onClick={closeAllMenus} className="block px-3 py-2 hover:bg-red-700 rounded">HOME</NavLink>
              <NavLink to="/about" onClick={closeAllMenus} className="block px-3 py-2 hover:bg-red-700 rounded">ABOUT US</NavLink>
              <div>
                <button onClick={() => toggleDropdown('team')} className="w-full flex items-center justify-between px-3 py-2 hover:bg-red-700 rounded">
                  <span>TEAM GCAAA</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'team' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'team' && (
                  <div className="pl-6 space-y-1 py-1 bg-red-800/50">
                    <Link to="/committee/office-bearers" onClick={closeAllMenus} className="block py-1 text-xs">Office Bearers</Link>
                    <Link to="/committee/executive-members" onClick={closeAllMenus} className="block py-1 text-xs">Executive Members</Link>
                    <Link to="/committee/convenor" onClick={closeAllMenus} className="block py-1 text-xs">Convenor</Link>
                  </div>
                )}
              </div>
              <NavLink to="/events" onClick={closeAllMenus} className="block px-3 py-2 hover:bg-red-700 rounded">EVENT</NavLink>
              <NavLink to="/gallery" onClick={closeAllMenus} className="block px-3 py-2 hover:bg-red-700 rounded">GALLERY & AWARDS</NavLink>
              <div>
                <button onClick={() => toggleDropdown('join')} className="w-full flex items-center justify-between px-3 py-2 hover:bg-red-700 rounded">
                  <span>JOIN GCAAA</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'join' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'join' && (
                  <div className="pl-6 space-y-1 py-1 bg-red-800/50">
                    <Link to="/contact" onClick={closeAllMenus} className="block py-1 text-xs">Alumni Registration</Link>
                    <Link to="/contact" onClick={closeAllMenus} className="block py-1 text-xs">Life Membership</Link>
                  </div>
                )}
              </div>
              <NavLink to="/resources" onClick={closeAllMenus} className="block px-3 py-2 hover:bg-red-700 rounded">RESOURCES</NavLink>
              <NavLink to="/blog" onClick={closeAllMenus} className="block px-3 py-2 hover:bg-red-700 rounded">BLOG</NavLink>
              <NavLink to="/contact" onClick={closeAllMenus} className="block px-3 py-2 hover:bg-red-700 rounded">CONTACT US</NavLink>
            </div>
          )}
        </div>
      </nav>
    </header>
    </>
  );
};