import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Shield, Stethoscope, FileText, CheckCircle, AlertCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HomePageProps {
  isLoggedIn: boolean;
}

export function HomePage({ isLoggedIn }: HomePageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-teal-700 mb-6">
                Cervical Cancer Awareness & Prevention
              </h1>
              <p className="text-gray-600 mb-8">
                Empowering women with knowledge, early detection guidance, and preventive action. 
                Take control of your health journey with our comprehensive awareness platform.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/awareness"
                  className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors flex items-center gap-2"
                >
                  <Heart className="w-5 h-5" />
                  Get Awareness
                </Link>
                <Link
                  to="/risk-assessment"
                  className="px-6 py-3 bg-white text-teal-600 rounded-lg hover:bg-gray-50 transition-colors border-2 border-teal-600 flex items-center gap-2"
                >
                  <Shield className="w-5 h-5" />
                  Check Risk
                </Link>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758691461916-dc7894eb8f94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbWVkaWNhbCUyMGNvbnN1bHRhdGlvbnxlbnwxfHx8fDE3NjYxMTUxNDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Healthcare consultation"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-teal-700 mb-4">Why Early Awareness Matters</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cervical cancer is preventable and treatable when detected early. Learn about prevention, 
              symptoms, and take proactive steps for your health.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-teal-50 rounded-xl p-8 text-center">
              <div className="bg-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-teal-700 mb-3">Prevention First</h3>
              <p className="text-gray-600">
                HPV vaccination and regular screening can prevent most cervical cancer cases
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-blue-700 mb-3">Early Detection</h3>
              <p className="text-gray-600">
                Regular screening and awareness of symptoms enable early intervention and better outcomes
              </p>
            </div>

            <div className="bg-purple-50 rounded-xl p-8 text-center">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-purple-700 mb-3">HPV Vaccination</h3>
              <p className="text-gray-600">
                Protect yourself with the HPV vaccine, recommended for young girls and women
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Card Navigation */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Awareness Card */}
            <Link
              to="/awareness"
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-8 border-t-4 border-teal-600"
            >
              <FileText className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-gray-800 mb-3">Learn About Cervical Cancer</h3>
              <p className="text-gray-600 mb-4">
                Understand what cervical cancer is, common symptoms, prevention methods, and the importance of screening.
              </p>
              <span className="text-teal-600 flex items-center gap-2">
                Explore Now
                <CheckCircle className="w-4 h-4" />
              </span>
            </Link>

            {/* Risk Assessment Card */}
            <Link
              to="/risk-assessment"
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-8 border-t-4 border-blue-600"
            >
              <Shield className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-gray-800 mb-3">Risk Assessment</h3>
              <p className="text-gray-600 mb-4">
                Take our simple questionnaire to understand your risk level and get personalized guidance.
              </p>
              {!isLoggedIn && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
                  <p className="text-yellow-800 text-sm flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    Login required
                  </p>
                </div>
              )}
              <span className="text-blue-600 flex items-center gap-2">
                Start Assessment
                <CheckCircle className="w-4 h-4" />
              </span>
            </Link>

            {/* About Card */}
            <Link
              to="/about"
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-8 border-t-4 border-purple-600"
            >
              <Heart className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-gray-800 mb-3">About Our Mission</h3>
              <p className="text-gray-600 mb-4">
                Learn about our project, mission, and the team dedicated to cervical cancer awareness.
              </p>
              <span className="text-purple-600 flex items-center gap-2">
                Learn More
                <CheckCircle className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-teal-600 p-2 rounded-lg">
                  <Heart className="w-5 h-5 fill-white" />
                </div>
                <span>CervicalCare</span>
              </div>
              <p className="text-gray-400">
                Empowering women with awareness and preventive health information.
              </p>
            </div>
            
            <div>
              <h4 className="mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/awareness" className="hover:text-white transition-colors">Awareness</Link></li>
                <li><Link to="/risk-assessment" className="hover:text-white transition-colors">Risk Assessment</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4">Contact</h4>
              <p className="text-gray-400">
                Email: info@cervicalcare.org<br />
                Phone: 1-800-HEALTH-1
              </p>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="bg-yellow-900 bg-opacity-30 border border-yellow-600 rounded-lg p-4 mb-6">
              <p className="text-yellow-200 text-sm flex items-center gap-2">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <span>
                  <strong>Medical Disclaimer:</strong> This platform is for educational and awareness purposes only. 
                  It does not provide medical diagnosis or treatment. Always consult with qualified healthcare 
                  professionals for medical advice and diagnosis.
                </span>
              </p>
            </div>
            <p className="text-center text-gray-400">
              © 2025 CervicalCare Platform. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
