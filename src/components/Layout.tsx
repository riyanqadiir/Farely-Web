import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Smartphone, Globe, Shield, MapPin, Mail, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LEGAL_ENTITY_NAME } from '../constants';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Support', path: '/support' },
    { name: 'Privacy', path: '/privacy' },
    { name: 'Terms', path: '/terms' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100 px-6 md:px-12 py-4 md:py-6 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-3 group">
        <div className="w-10 h-10 bg-brand-green rounded-xl flex items-center justify-center transition-transform group-hover:rotate-6 shadow-lg shadow-brand-green/20">
          <span className="text-white font-display font-extrabold text-xl">F</span>
        </div>
        <span className="text-2xl font-display font-extrabold tracking-tight text-slate-900 group-hover:text-brand-green transition-colors">Farely</span>
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-8 text-sm font-bold">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`transition-colors hover:text-brand-green ${
              location.pathname === link.path ? 'text-brand-green' : 'text-slate-500'
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      <div className="hidden md:flex gap-3">
        <Link
          to="/#download"
          className="bg-slate-900 text-white px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-slate-800 transition-all shadow-md active:scale-95 flex items-center gap-2"
        >
          <div className="w-3 h-3 bg-white/20 rounded-full"></div>
          <span>Get the App</span>
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors focus:outline-none"
        id="mobile-menu-toggle"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-6 shadow-2xl flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-bold py-2 ${
                  location.pathname === link.path ? 'text-brand-green' : 'text-slate-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-white px-6 md:px-12 py-8 border-t border-slate-100 text-sm text-slate-400 flex flex-col md:flex-row justify-between items-center gap-6">
      <div>
        © {new Date().getFullYear()} Farely Inc. All rights reserved. Registered in California.
      </div>
      <div className="flex flex-wrap justify-center gap-6 font-medium">
        <Link to="/support" className="hover:text-brand-green transition-colors">Support</Link>
        <Link to="/privacy" className="hover:text-brand-green transition-colors">Privacy</Link>
        <Link to="/terms" className="hover:text-brand-green transition-colors">Terms</Link>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        {children}
      </main>
      <Footer />
    </div>
  );
}
