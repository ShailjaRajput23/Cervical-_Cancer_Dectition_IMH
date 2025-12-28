import React from 'react';
import { AlertCircle, Heart, Stethoscope, Shield, CheckCircle, Info } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AwarenessPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-teal-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Heart className="w-16 h-16 mx-auto mb-4" />
            <h1 className="mb-4">Cervical Cancer Awareness</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Knowledge is power. Learn about cervical cancer, its symptoms, prevention, and the importance of early screening.
            </p>
          </div>
        </div>
      </section>

      {/* What is Cervical Cancer */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-teal-100 p-3 rounded-lg">
                <Info className="w-8 h-8 text-teal-600" />
              </div>
              <div>
                <h2 className="text-teal-700 mb-3">What is Cervical Cancer?</h2>
                <p className="text-gray-600 mb-4">
                  Cervical cancer is a type of cancer that occurs in the cells of the cervix — the lower part of 
                  the uterus that connects to the vagina. It is primarily caused by persistent infection with 
                  high-risk types of Human Papillomavirus (HPV).
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-blue-700 mb-3">Key Facts</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>4th most common cancer in women worldwide</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>90% of cases are caused by HPV infection</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Highly preventable through vaccination and screening</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Early detection leads to 90%+ cure rate</span>
                  </li>
                </ul>
              </div>

              <div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1598884143267-586d90a32141?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwYXdhcmVuZXNzJTIwcGluayUyMHJpYmJvbnxlbnwxfHx8fDE3NjYxMjc1MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Awareness"
                  className="rounded-lg w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Symptoms */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-red-700 mb-4">Common Symptoms to Watch For</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Early-stage cervical cancer may not cause symptoms. However, as it progresses, watch for these warning signs:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-600">
              <h3 className="text-gray-800 mb-3">Abnormal Bleeding</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Bleeding between periods</li>
                <li>• Bleeding after intercourse</li>
                <li>• Bleeding after menopause</li>
                <li>• Heavier or longer periods</li>
              </ul>
            </div>

            <div className="bg-orange-50 rounded-xl p-6 border-l-4 border-orange-600">
              <h3 className="text-gray-800 mb-3">Unusual Discharge</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Watery discharge</li>
                <li>• Pink or blood-tinged discharge</li>
                <li>• Foul-smelling discharge</li>
                <li>• Heavy discharge</li>
              </ul>
            </div>

            <div className="bg-yellow-50 rounded-xl p-6 border-l-4 border-yellow-600">
              <h3 className="text-gray-800 mb-3">Pelvic Discomfort</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Pelvic pain</li>
                <li>• Pain during intercourse</li>
                <li>• Lower back pain</li>
                <li>• Pain during urination</li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 border-l-4 border-purple-600">
              <h3 className="text-gray-800 mb-3">Advanced Symptoms</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Unexplained weight loss</li>
                <li>• Loss of appetite</li>
                <li>• Fatigue</li>
                <li>• Leg swelling</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-600">
              <h3 className="text-gray-800 mb-3">Urinary Changes</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Frequent urination</li>
                <li>• Blood in urine</li>
                <li>• Difficulty urinating</li>
                <li>• Urinary incontinence</li>
              </ul>
            </div>

            <div className="bg-teal-50 rounded-xl p-6 border-l-4 border-teal-600">
              <h3 className="text-gray-800 mb-3">Bowel Changes</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Constipation</li>
                <li>• Blood in stool</li>
                <li>• Pain during bowel movements</li>
                <li>• Changes in bowel habits</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-red-100 border border-red-300 rounded-xl p-6">
            <p className="text-red-800 flex items-start gap-3">
              <AlertCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Important:</strong> These symptoms can also be caused by other conditions. 
                If you experience any of these symptoms, especially persistent or unusual ones, 
                consult a healthcare professional immediately.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Prevention & HPV Vaccination */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="bg-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-teal-700 mb-4">Prevention & HPV Vaccination</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cervical cancer is one of the most preventable cancers. Here's how you can protect yourself:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-teal-700 mb-4">HPV Vaccination</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Protects against HPV types that cause 90% of cervical cancers</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Recommended for girls and boys ages 9-12</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Can be given up to age 26 (some up to 45)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Most effective when given before exposure to HPV</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Safe and effective with minimal side effects</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-blue-700 mb-4">Other Prevention Methods</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Get regular Pap tests and HPV tests as recommended</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Practice safe sex and limit number of sexual partners</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Don't smoke or quit smoking if you do</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Maintain a healthy immune system</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Attend all follow-up appointments if abnormalities found</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Importance of Screening */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Stethoscope className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-purple-700 mb-4">Importance of Regular Screening</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Regular screening can detect precancerous changes before they become cancer, making treatment easier and more effective.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-purple-50 rounded-xl p-6 text-center">
              <h3 className="text-purple-700 mb-3">Pap Test</h3>
              <p className="text-gray-600">
                Collects cells from the cervix to check for abnormalities. Recommended every 3 years for women 21-65.
              </p>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 text-center">
              <h3 className="text-purple-700 mb-3">HPV Test</h3>
              <p className="text-gray-600">
                Checks for high-risk HPV types. Can be done alone or with Pap test for women 30-65.
              </p>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 text-center">
              <h3 className="text-purple-700 mb-3">Co-Testing</h3>
              <p className="text-gray-600">
                Both Pap and HPV tests together. Provides comprehensive screening every 5 years for ages 30-65.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-white">
            <h3 className="mb-4">Screening Guidelines</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="mb-3">Ages 21-29</h4>
                <p>Pap test every 3 years (HPV testing not recommended)</p>
              </div>
              <div>
                <h4 className="mb-3">Ages 30-65</h4>
                <p>Pap test every 3 years, HPV test every 5 years, or both every 5 years</p>
              </div>
            </div>
            <p className="mt-6 text-purple-100">
              Talk to your healthcare provider about which screening schedule is right for you based on your risk factors and medical history.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-teal-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4">Take Action Today</h2>
          <p className="text-xl mb-8">
            Knowledge empowers you to make informed decisions about your health. Take our risk assessment 
            to understand your personal risk factors.
          </p>
          <a
            href="/risk-assessment"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-teal-600 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Shield className="w-5 h-5" />
            Start Risk Assessment
          </a>
        </div>
      </section>
    </div>
  );
}
