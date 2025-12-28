import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, Mail, Lock, User, Calendar, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface RegisterPageProps {
  onRegister: (userData: { name: string; email: string }) => void;
}

export function RegisterPage({ onRegister }: RegisterPageProps) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error for this field
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: '',
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.age) {
      newErrors.age = 'Age is required';
    } else if (parseInt(formData.age) < 18) {
      newErrors.age = 'You must be at least 18 years old';
    } else if (parseInt(formData.age) > 120) {
      newErrors.age = 'Please enter a valid age';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // In a real app, this would call an API
      // For now, we'll store in localStorage and call onRegister
      const userData = {
        name: formData.name,
        email: formData.email,
        age: formData.age,
      };

      // Store user data
      localStorage.setItem('registeredUsers', JSON.stringify([
        ...(JSON.parse(localStorage.getItem('registeredUsers') || '[]')),
        { ...userData, password: formData.password }
      ]));

      onRegister({ name: userData.name, email: userData.email });
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image and info */}
          <div className="hidden md:block">
            <div className="mb-8">
              <h1 className="text-teal-700 mb-4">Join CervicalCare</h1>
              <p className="text-gray-600">
                Create your account to access personalized risk assessments and health resources.
              </p>
            </div>
            
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MXx8fHwxNzY2MTI3NTM2fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Healthcare professional"
              className="rounded-2xl shadow-xl w-full h-96 object-cover"
            />

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0" />
                <div>
                  <h3 className="text-gray-800 mb-1">Personalized Risk Assessment</h3>
                  <p className="text-gray-600">Get tailored health guidance based on your profile</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0" />
                <div>
                  <h3 className="text-gray-800 mb-1">Secure & Private</h3>
                  <p className="text-gray-600">Your health information is protected and confidential</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0" />
                <div>
                  <h3 className="text-gray-800 mb-1">Educational Resources</h3>
                  <p className="text-gray-600">Access comprehensive awareness materials</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Registration form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-teal-600 p-3 rounded-lg">
                <Heart className="w-8 h-8 text-white fill-white" />
              </div>
            </div>

            <h2 className="text-center text-gray-800 mb-2">Create Account</h2>
            <p className="text-center text-gray-600 mb-8">
              Join us in the fight against cervical cancer
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 border ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500`}
                    placeholder="Enter your full name"
                  />
                </div>
                {errors.name && (
                  <p className="mt-1 text-red-600 text-sm">{errors.name}</p>
                )}
              </div>

              {/* Age */}
              <div>
                <label htmlFor="age" className="block text-gray-700 mb-2">
                  Age
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 border ${
                      errors.age ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500`}
                    placeholder="Enter your age"
                    min="18"
                    max="120"
                  />
                </div>
                {errors.age && (
                  <p className="mt-1 text-red-600 text-sm">{errors.age}</p>
                )}
              </div>

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
                    placeholder="Create a password"
                  />
                </div>
                {errors.password && (
                  <p className="mt-1 text-red-600 text-sm">{errors.password}</p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label htmlFor="confirmPassword" className="block text-gray-700 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 border ${
                      errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500`}
                    placeholder="Confirm your password"
                  />
                </div>
                {errors.confirmPassword && (
                  <p className="mt-1 text-red-600 text-sm">{errors.confirmPassword}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
              >
                Register
              </button>

              {/* Login Link */}
              <p className="text-center text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="text-teal-600 hover:text-teal-700">
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
