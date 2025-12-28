import React from 'react';
import { Heart, Target, Users, CheckCircle, Mail, Phone } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-teal-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Heart className="w-16 h-16 mx-auto mb-4 fill-white" />
            <h1 className="mb-4">About CervicalCare</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Empowering women with knowledge and tools for cervical cancer prevention and early detection
            </p>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-teal-700 mb-6">Our Project</h2>
              <p className="text-gray-600 mb-4">
                CervicalCare is a comprehensive digital platform dedicated to raising awareness about cervical 
                cancer, promoting HPV vaccination, and providing accessible risk assessment tools for women worldwide.
              </p>
              <p className="text-gray-600 mb-4">
                We believe that education and early detection are key to preventing cervical cancer. Our platform 
                provides scientifically accurate information in an easy-to-understand format, making health literacy 
                accessible to all women, regardless of their background or education level.
              </p>
              <p className="text-gray-600">
                Through our risk assessment tool, users can understand their personal risk factors and receive 
                guidance on appropriate preventive measures and screening schedules.
              </p>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1653508311277-1ecf6ee52c5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVhbSUyMGRpdmVyc2V8ZW58MXx8fHwxNzY2MTI3NTM3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Medical team"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8">
              <div className="bg-teal-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-teal-700 mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                To empower women with accessible, accurate, and actionable information about cervical cancer 
                prevention, early detection, and HPV vaccination.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Increase awareness about cervical cancer and its prevention</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Promote HPV vaccination among eligible populations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Encourage regular screening and early detection</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Provide non-diagnostic risk assessment tools</span>
                </li>
              </ul>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white fill-white" />
              </div>
              <h2 className="text-purple-700 mb-4">Our Vision</h2>
              <p className="text-gray-600 mb-4">
                A world where every woman has the knowledge and resources to prevent cervical cancer and access 
                timely screening and treatment.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Reduce cervical cancer incidence through education</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Create a supportive community for women's health</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Bridge the gap between medical information and public understanding</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Support WHO's goal to eliminate cervical cancer</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-teal-700 mb-4">What We Offer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform provides comprehensive resources and tools to support your cervical health journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-gray-800 mb-3">Educational Content</h3>
              <p className="text-gray-600">
                Comprehensive, scientifically accurate information about cervical cancer, symptoms, prevention, and screening
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-gray-800 mb-3">Risk Assessment</h3>
              <p className="text-gray-600">
                Interactive questionnaire to help you understand your personal risk factors and receive tailored guidance
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-gray-800 mb-3">Community Support</h3>
              <p className="text-gray-600">
                A safe and supportive platform where women can access information and take control of their health
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-teal-700 mb-4">Why This Matters</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Understanding the impact of cervical cancer and the importance of prevention
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl text-teal-600 mb-2">604,000</div>
              <p className="text-gray-600">New cases worldwide in 2020</p>
            </div>
            <div className="text-center">
              <div className="text-4xl text-teal-600 mb-2">90%</div>
              <p className="text-gray-600">Caused by HPV infection</p>
            </div>
            <div className="text-center">
              <div className="text-4xl text-teal-600 mb-2">90%+</div>
              <p className="text-gray-600">Cure rate with early detection</p>
            </div>
            <div className="text-center">
              <div className="text-4xl text-teal-600 mb-2">100%</div>
              <p className="text-gray-600">Preventable with vaccination & screening</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Users className="w-16 h-16 mx-auto mb-4 text-teal-600" />
            <h2 className="text-teal-700 mb-4">Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A dedicated team of healthcare professionals, developers, and advocates working together 
              to make cervical cancer prevention accessible to all
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="w-24 h-24 bg-teal-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-12 h-12 text-teal-600" />
              </div>
              <h3 className="text-gray-800 mb-2">Medical Advisors</h3>
              <p className="text-gray-600">
                Board-certified gynecologists and oncologists ensuring medical accuracy
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-gray-800 mb-2">Development Team</h3>
              <p className="text-gray-600">
                Skilled developers creating accessible and user-friendly platforms
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="w-24 h-24 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-12 h-12 text-purple-600" />
              </div>
              <h3 className="text-gray-800 mb-2">Health Advocates</h3>
              <p className="text-gray-600">
                Passionate advocates raising awareness and supporting women's health
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-teal-700 mb-4">Get In Touch</h2>
          <p className="text-gray-600 mb-8">
            Have questions or want to learn more about our mission? We'd love to hear from you.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-teal-50 rounded-xl p-6">
              <Mail className="w-8 h-8 text-teal-600 mx-auto mb-3" />
              <h3 className="text-gray-800 mb-2">Email Us</h3>
              <p className="text-teal-600">info@cervicalcare.org</p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <Phone className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="text-gray-800 mb-2">Call Us</h3>
              <p className="text-blue-600">1-800-HEALTH-1</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-teal-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4">Join Us in the Fight Against Cervical Cancer</h2>
          <p className="text-xl mb-8">
            Together, we can make a difference. Learn, share, and take action today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/awareness"
              className="px-8 py-4 bg-white text-teal-600 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Learn More
            </a>
            <a
              href="/risk-assessment"
              className="px-8 py-4 bg-teal-800 text-white rounded-lg hover:bg-teal-900 transition-colors border-2 border-white"
            >
              Take Assessment
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
