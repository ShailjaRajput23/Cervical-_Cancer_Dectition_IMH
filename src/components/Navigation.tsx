import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, LogOut, User } from 'lucide-react';

interface NavigationProps {
  isLoggedIn: boolean;
  onLogout: () => void;
  user: { name: string; email: string } | null;
}

export function Navigation({ isLoggedIn, onLogout, user }: NavigationProps) {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-teal-600 p-2 rounded-lg">
              <Heart className="w-6 h-6 text-white fill-white" />
            </div>
            <span className="text-teal-700 font-semibold">CervicalCare</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`transition-colors ${
                isActive('/') ? 'text-teal-600' : 'text-gray-600 hover:text-teal-600'
              }`}
            >
              Home
            </Link>
            <Link
              to="/awareness"
              className={`transition-colors ${
                isActive('/awareness') ? 'text-teal-600' : 'text-gray-600 hover:text-teal-600'
              }`}
            >
              Awareness
            </Link>
            <Link
              to="/risk-assessment"
              className={`transition-colors ${
                isActive('/risk-assessment') ? 'text-teal-600' : 'text-gray-600 hover:text-teal-600'
              }`}
            >
              Risk Assessment
            </Link>
            <Link
              to="/about"
              className={`transition-colors ${
                isActive('/about') ? 'text-teal-600' : 'text-gray-600 hover:text-teal-600'
              }`}
            >
              About Us
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            {isLoggedIn ? (
              <>
                <div className="hidden md:flex items-center gap-2 text-gray-700">
                  <User className="w-5 h-5" />
                  <span>{user?.name}</span>
                </div>
                <button
                  onClick={onLogout}
                  className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 text-teal-600 hover:text-teal-700 transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-t border-gray-100">
        <div className="flex justify-around py-3">
          <Link
            to="/"
            className={`text-sm ${
              isActive('/') ? 'text-teal-600' : 'text-gray-600'
            }`}
          >
            Home
          </Link>
          <Link
            to="/awareness"
            className={`text-sm ${
              isActive('/awareness') ? 'text-teal-600' : 'text-gray-600'
            }`}
          >
            Awareness
          </Link>
          <Link
            to="/risk-assessment"
            className={`text-sm ${
              isActive('/risk-assessment') ? 'text-teal-600' : 'text-gray-600'
            }`}
          >
            Assessment
          </Link>
          <Link
            to="/about"
            className={`text-sm ${
              isActive('/about') ? 'text-teal-600' : 'text-gray-600'
            }`}
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
