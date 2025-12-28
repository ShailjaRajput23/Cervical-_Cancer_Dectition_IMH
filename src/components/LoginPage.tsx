import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Heart, Mail, Lock, AlertCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface LoginPageProps {
  onLogin: (userData: { name: string; email: string }) => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loginError, setLoginError] = useState('');

  const from = (location.state as any)?.from || '/';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear errors
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: '',
      });
    }
    setLoginError('');
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // In a real app, this would call an API
      // For demo purposes, check localStorage
      const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
      const user = registeredUsers.find(
        (u: any) => u.email === formData.email && u.password === formData.password
      );

      if (user) {
        onLogin({ name: user.name, email: user.email });
        navigate(from);
      } else {
        setLoginError('Invalid email or password. Please try again or register for a new account.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-teal-600 p-3 rounded-lg">
                <Heart className="w-8 h-8 text-white fill-white" />
              </div>
            </div>

            <h2 className="text-center text-gray-800 mb-2">Welcome Back</h2>
            <p className="text-center text-gray-600 mb-8">
              Login to access your health dashboard
            </p>

            {from === '/risk-assessment' && (
              <div className="mb-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-blue-800 text-sm flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  Please login to access the Risk Assessment
                </p>
              </div>
            )}

            {loginError && (
              <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-800 text-sm flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  {loginError}
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 border ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500`}
                    placeholder="Enter your email"
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-red-600 text-sm">{errors.email}</p>
                )}
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 border ${
                      errors.password ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500`}
                    placeholder="Enter your password"
                  />
                </div>
                {errors.password && (
                  <p className="mt-1 text-red-600 text-sm">{errors.password}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
              >
                Login
              </button>

              {/* Register Link */}
              <p className="text-center text-gray-600">
                Don't have an account?{' '}
                <Link to="/register" className="text-teal-600 hover:text-teal-700">
                  Register here
                </Link>
              </p>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 text-center">
                Your privacy and security are our top priorities. All data is encrypted and protected.
              </p>
            </div>
          </div>

          {/* Right side - Image and info */}
          <div className="hidden md:block">
            <div className="mb-8">
              <h1 className="text-teal-700 mb-4">Access Your Health Dashboard</h1>
              <p className="text-gray-600">
                Login to continue your cervical cancer awareness journey and access personalized health assessments.
              </p>
            </div>
            
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MXx8fHwxNzY2MTI3NTM2fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Healthcare professional"
              className="rounded-2xl shadow-xl w-full h-96 object-cover"
            />

            <div className="mt-8 bg-teal-50 rounded-xl p-6">
              <h3 className="text-teal-700 mb-3">Why Login?</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Access personalized risk assessment</li>
                <li>• Download your health reports</li>
                <li>• Track your awareness progress</li>
                <li>• Receive health reminders and updates</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
