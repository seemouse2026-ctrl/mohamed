import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  Menu, 
  Search, 
  User,
  X
} from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#E2E8F0] bg-white z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-extrabold tracking-tighter bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
              CajaaibGude
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-medium text-text-muted hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-text-muted hover:text-primary transition-colors"
            >
              <Search size={20} />
            </button>
            
            <div className="hidden sm:flex items-center space-x-3">
              <Link to="/login">
                <Button variant="ghost" className="text-sm font-medium">
                  Log in
                </Button>
              </Link>
              <Link to="/register">
                <Button className="gradient-btn rounded-full px-6 shadow-md">
                  Sign up
                </Button>
              </Link>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu size={24} />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <div className="flex flex-col space-y-6 mt-8">
                    {navLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        className="text-lg font-semibold text-text-main hover:text-primary transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                    <div className="flex flex-col space-y-3 pt-6 border-top">
                      <Link to="/login">
                        <Button variant="outline" className="w-full">Log in</Button>
                      </Link>
                      <Link to="/register">
                        <Button className="w-full gradient-btn">Sign up</Button>
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute left-0 top-full w-full bg-white border-b p-4 shadow-xl"
          >
            <div className="container mx-auto relative">
              <input
                type="text"
                placeholder="Search for courses, instructors, or topics..."
                className="w-full bg-background-soft border-none rounded-xl py-4 px-12 focus:ring-2 focus:ring-primary outline-none text-lg"
                autoFocus
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={24} />
              <button 
                onClick={() => setIsSearchOpen(false)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-primary"
              >
                <X size={24} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
