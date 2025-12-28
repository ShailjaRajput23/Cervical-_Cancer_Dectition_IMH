import React, { useState } from 'react';
import { Shield, ChevronRight, ChevronLeft, Download, AlertCircle, CheckCircle, Info } from 'lucide-react';

interface RiskAssessmentPageProps {
  user: { name: string; email: string } | null;
}

interface FormData {
  age: string;
  hadPapTest: string;
  lastPapTest: string;
  hpvVaccinated: string;
  smokingStatus: string;
  sexualPartners: string;
  firstSexualActivity: string;
  familyHistory: string;
  immuneSystem: string;
  birthControl: string;
}

export function RiskAssessmentPage({ user }: RiskAssessmentPageProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [showResult, setShowResult] = useState(false);
  const [riskLevel, setRiskLevel] = useState<'low' | 'medium' | 'high'>('low');
  
  const [formData, setFormData] = useState<FormData>({
    age: '',
    hadPapTest: '',
    lastPapTest: '',
    hpvVaccinated: '',
    smokingStatus: '',
    sexualPartners: '',
    firstSexualActivity: '',
    familyHistory: '',
    immuneSystem: '',
    birthControl: '',
  });

  const totalSteps = 3;

  const handleChange = (name: keyof FormData, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const calculateRisk = () => {
    let riskScore = 0;

    // Age factor
    if (parseInt(formData.age) >= 30 && parseInt(formData.age) <= 45) {
      riskScore += 1;
    } else if (parseInt(formData.age) > 45) {
      riskScore += 2;
    }

    // Pap test history
    if (formData.hadPapTest === 'no') {
      riskScore += 3;
    } else if (formData.lastPapTest === 'moreThan3Years' || formData.lastPapTest === 'never') {
      riskScore += 2;
    }

    // HPV vaccination
    if (formData.hpvVaccinated === 'no') {
      riskScore += 2;
    }

    // Smoking
    if (formData.smokingStatus === 'current') {
      riskScore += 2;
    } else if (formData.smokingStatus === 'former') {
      riskScore += 1;
    }

    // Sexual partners
    if (formData.sexualPartners === 'moreThan5') {
      riskScore += 2;
    } else if (formData.sexualPartners === '3to5') {
      riskScore += 1;
    }

    // Early sexual activity
    if (formData.firstSexualActivity === 'under16') {
      riskScore += 2;
    } else if (formData.firstSexualActivity === '16to18') {
      riskScore += 1;
    }

    // Family history
    if (formData.familyHistory === 'yes') {
      riskScore += 2;
    }

    // Immune system
    if (formData.immuneSystem === 'weakened') {
      riskScore += 2;
    }

    // Birth control
    if (formData.birthControl === 'moreThan5Years') {
      riskScore += 1;
    }

    // Determine risk level
    if (riskScore <= 4) {
      setRiskLevel('low');
    } else if (riskScore <= 9) {
      setRiskLevel('medium');
    } else {
      setRiskLevel('high');
    }
  };

  const handleSubmit = () => {
    calculateRisk();
    setShowResult(true);
  };

  const handleDownloadReport = () => {
    // In a real app, this would generate a PDF
    const reportContent = `
CERVICAL CANCER RISK ASSESSMENT REPORT
Generated on: ${new Date().toLocaleDateString()}
Patient: ${user?.name}
Email: ${user?.email}

RISK LEVEL: ${riskLevel.toUpperCase()}

ASSESSMENT DETAILS:
- Age: ${formData.age}
- Pap Test History: ${formData.hadPapTest === 'yes' ? 'Yes' : 'No'}
- HPV Vaccinated: ${formData.hpvVaccinated === 'yes' ? 'Yes' : 'No'}
- Smoking Status: ${formData.smokingStatus}

RECOMMENDATION:
${getRiskGuidance(riskLevel)}

DISCLAIMER:
This report is for awareness and educational purposes only and is not a medical diagnosis. 
Please consult with a qualified healthcare professional for proper medical evaluation and advice.

CervicalCare Platform
www.cervicalcare.org
    `;

    const blob = new Blob([reportContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `risk-assessment-${new Date().getTime()}.txt`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  const getRiskGuidance = (level: 'low' | 'medium' | 'high') => {
    switch (level) {
      case 'low':
        return 'Your risk assessment indicates a lower risk level. Continue maintaining healthy habits, get regular screenings as recommended, and stay informed about cervical cancer prevention.';
      case 'medium':
        return 'Your risk assessment indicates a moderate risk level. We recommend scheduling a consultation with your healthcare provider, maintaining regular screening schedules, and considering HPV vaccination if you haven\'t already.';
      case 'high':
        return 'Your risk assessment indicates a higher risk level. We strongly recommend consulting with a healthcare professional as soon as possible for a comprehensive evaluation and to discuss screening and prevention strategies.';
    }
  };

  const getRiskColor = (level: 'low' | 'medium' | 'high') => {
    switch (level) {
      case 'low':
        return 'bg-green-50 border-green-500 text-green-700';
      case 'medium':
        return 'bg-yellow-50 border-yellow-500 text-yellow-700';
      case 'high':
        return 'bg-red-50 border-red-500 text-red-700';
    }
  };

  if (showResult) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <div className="bg-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-teal-700 mb-2">Risk Assessment Complete</h1>
              <p className="text-gray-600">
                Thank you for completing the assessment, {user?.name}
              </p>
            </div>

            {/* Risk Level Card */}
            <div className={`border-4 rounded-xl p-8 mb-8 ${getRiskColor(riskLevel)}`}>
              <div className="text-center mb-4">
                <h2 className="mb-2">Your Risk Level</h2>
                <div className="inline-block px-6 py-3 bg-white rounded-lg shadow-md">
                  <span className="text-3xl uppercase">{riskLevel}</span>
                </div>
              </div>
              <p className="text-center">
                {getRiskGuidance(riskLevel)}
              </p>
            </div>

            {/* Next Steps */}
            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <h3 className="text-blue-700 mb-4 flex items-center gap-2">
                <Info className="w-5 h-5" />
                Recommended Next Steps
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Consult with a healthcare professional for a comprehensive evaluation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Schedule regular Pap tests and HPV screenings as recommended</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Consider HPV vaccination if you haven't been vaccinated</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Maintain healthy lifestyle habits (no smoking, healthy diet, exercise)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Stay informed about cervical cancer prevention and symptoms</span>
                </li>
              </ul>
            </div>

            {/* Download Button */}
            <div className="text-center mb-8">
              <button
                onClick={handleDownloadReport}
                className="inline-flex items-center gap-2 px-8 py-4 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
              >
                <Download className="w-5 h-5" />
                Download Risk Assessment Report
              </button>
            </div>

            {/* Disclaimer */}
            <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-6">
              <p className="text-yellow-800 text-sm flex items-start gap-3">
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Important Disclaimer:</strong> This risk assessment report is for awareness and educational 
                  purposes only and is NOT a medical diagnosis. The information provided is based on general risk factors 
                  and should not replace professional medical advice, diagnosis, or treatment. Always consult with 
                  qualified healthcare professionals for proper medical evaluation and personalized recommendations.
                </span>
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() => {
                  setShowResult(false);
                  setCurrentStep(1);
                  setFormData({
                    age: '',
                    hadPapTest: '',
                    lastPapTest: '',
                    hpvVaccinated: '',
                    smokingStatus: '',
                    sexualPartners: '',
                    firstSexualActivity: '',
                    familyHistory: '',
                    immuneSystem: '',
                    birthControl: '',
                  });
                }}
                className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                Take Assessment Again
              </button>
              <a
                href="/"
                className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
              >
                Return to Home
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="bg-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-teal-700 mb-2">Cervical Cancer Risk Assessment</h1>
            <p className="text-gray-600">
              Answer the following questions to understand your risk level
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Step {currentStep} of {totalSteps}</span>
              <span className="text-gray-600">{Math.round((currentStep / totalSteps) * 100)}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-teal-600 transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>
          </div>

          {/* Step 1: Basic Information */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-gray-800 mb-6">Basic Information</h2>

              {/* Age */}
              <div>
                <label className="block text-gray-700 mb-3">
                  What is your age?
                </label>
                <div className="space-y-2">
                  {['Under 25', '25-29', '30-45', '46-64', '65 and above'].map((option, index) => (
                    <label key={option} className="flex items-center p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                      <input
                        type="radio"
                        name="age"
                        value={['under25', '25to29', '30to45', '46to64', '65plus'][index]}
                        checked={formData.age === ['under25', '25to29', '30to45', '46to64', '65plus'][index]}
                        onChange={(e) => handleChange('age', e.target.value)}
                        className="w-4 h-4 text-teal-600"
                      />
                      <span className="ml-3 text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Pap Test */}
              <div>
                <label className="block text-gray-700 mb-3">
                  Have you ever had a Pap test?
                </label>
                <div className="space-y-2">
                  {['Yes', 'No', 'Not sure'].map((option, index) => (
                    <label key={option} className="flex items-center p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                      <input
                        type="radio"
                        name="hadPapTest"
                        value={['yes', 'no', 'notSure'][index]}
                        checked={formData.hadPapTest === ['yes', 'no', 'notSure'][index]}
                        onChange={(e) => handleChange('hadPapTest', e.target.value)}
                        className="w-4 h-4 text-teal-600"
                      />
                      <span className="ml-3 text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Last Pap Test */}
              {formData.hadPapTest === 'yes' && (
                <div>
                  <label className="block text-gray-700 mb-3">
                    When was your last Pap test?
                  </label>
                  <div className="space-y-2">
                    {['Within the last year', '1-3 years ago', 'More than 3 years ago', 'Never'].map((option, index) => (
                      <label key={option} className="flex items-center p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                        <input
                          type="radio"
                          name="lastPapTest"
                          value={['lastYear', '1to3Years', 'moreThan3Years', 'never'][index]}
                          checked={formData.lastPapTest === ['lastYear', '1to3Years', 'moreThan3Years', 'never'][index]}
                          onChange={(e) => handleChange('lastPapTest', e.target.value)}
                          className="w-4 h-4 text-teal-600"
                        />
                        <span className="ml-3 text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* HPV Vaccination */}
              <div>
                <label className="block text-gray-700 mb-3">
                  Have you received the HPV vaccine?
                </label>
                <div className="space-y-2">
                  {['Yes', 'No', 'Not sure'].map((option, index) => (
                    <label key={option} className="flex items-center p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                      <input
                        type="radio"
                        name="hpvVaccinated"
                        value={['yes', 'no', 'notSure'][index]}
                        checked={formData.hpvVaccinated === ['yes', 'no', 'notSure'][index]}
                        onChange={(e) => handleChange('hpvVaccinated', e.target.value)}
                        className="w-4 h-4 text-teal-600"
                      />
                      <span className="ml-3 text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Lifestyle Factors */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-gray-800 mb-6">Lifestyle Factors</h2>

              {/* Smoking */}
              <div>
                <label className="block text-gray-700 mb-3">
                  What is your smoking status?
                </label>
                <div className="space-y-2">
                  {['Never smoked', 'Former smoker', 'Current smoker'].map((option, index) => (
                    <label key={option} className="flex items-center p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                      <input
                        type="radio"
                        name="smokingStatus"
                        value={['never', 'former', 'current'][index]}
                        checked={formData.smokingStatus === ['never', 'former', 'current'][index]}
                        onChange={(e) => handleChange('smokingStatus', e.target.value)}
                        className="w-4 h-4 text-teal-600"
                      />
                      <span className="ml-3 text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Sexual Partners */}
              <div>
                <label className="block text-gray-700 mb-3">
                  How many sexual partners have you had in your lifetime?
                </label>
                <div className="space-y-2">
                  {['None', '1-2', '3-5', 'More than 5', 'Prefer not to answer'].map((option, index) => (
                    <label key={option} className="flex items-center p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                      <input
                        type="radio"
                        name="sexualPartners"
                        value={['none', '1to2', '3to5', 'moreThan5', 'preferNot'][index]}
                        checked={formData.sexualPartners === ['none', '1to2', '3to5', 'moreThan5', 'preferNot'][index]}
                        onChange={(e) => handleChange('sexualPartners', e.target.value)}
                        className="w-4 h-4 text-teal-600"
                      />
                      <span className="ml-3 text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* First Sexual Activity */}
              <div>
                <label className="block text-gray-700 mb-3">
                  At what age did you first become sexually active?
                </label>
                <div className="space-y-2">
                  {['Under 16', '16-18', '19-21', 'Over 21', 'Not applicable', 'Prefer not to answer'].map((option, index) => (
                    <label key={option} className="flex items-center p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                      <input
                        type="radio"
                        name="firstSexualActivity"
                        value={['under16', '16to18', '19to21', 'over21', 'notApplicable', 'preferNot'][index]}
                        checked={formData.firstSexualActivity === ['under16', '16to18', '19to21', 'over21', 'notApplicable', 'preferNot'][index]}
                        onChange={(e) => handleChange('firstSexualActivity', e.target.value)}
                        className="w-4 h-4 text-teal-600"
                      />
                      <span className="ml-3 text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Medical History */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-gray-800 mb-6">Medical History</h2>

              {/* Family History */}
              <div>
                <label className="block text-gray-700 mb-3">
                  Do you have a family history of cervical cancer?
                </label>
                <div className="space-y-2">
                  {['Yes', 'No', 'Not sure'].map((option, index) => (
                    <label key={option} className="flex items-center p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                      <input
                        type="radio"
                        name="familyHistory"
                        value={['yes', 'no', 'notSure'][index]}
                        checked={formData.familyHistory === ['yes', 'no', 'notSure'][index]}
                        onChange={(e) => handleChange('familyHistory', e.target.value)}
                        className="w-4 h-4 text-teal-600"
                      />
                      <span className="ml-3 text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Immune System */}
              <div>
                <label className="block text-gray-700 mb-3">
                  Do you have a weakened immune system (HIV, organ transplant, autoimmune disease)?
                </label>
                <div className="space-y-2">
                  {['Yes', 'No', 'Not sure'].map((option, index) => (
                    <label key={option} className="flex items-center p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                      <input
                        type="radio"
                        name="immuneSystem"
                        value={['weakened', 'normal', 'notSure'][index]}
                        checked={formData.immuneSystem === ['weakened', 'normal', 'notSure'][index]}
                        onChange={(e) => handleChange('immuneSystem', e.target.value)}
                        className="w-4 h-4 text-teal-600"
                      />
                      <span className="ml-3 text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Birth Control */}
              <div>
                <label className="block text-gray-700 mb-3">
                  Have you used oral contraceptives (birth control pills) for more than 5 years?
                </label>
                <div className="space-y-2">
                  {['Yes', 'No', 'Not sure'].map((option, index) => (
                    <label key={option} className="flex items-center p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                      <input
                        type="radio"
                        name="birthControl"
                        value={['moreThan5Years', 'lessThan5Years', 'notSure'][index]}
                        checked={formData.birthControl === ['moreThan5Years', 'lessThan5Years', 'notSure'][index]}
                        onChange={(e) => handleChange('birthControl', e.target.value)}
                        className="w-4 h-4 text-teal-600"
                      />
                      <span className="ml-3 text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-8 border-t border-gray-200">
            {currentStep > 1 ? (
              <button
                onClick={() => setCurrentStep(currentStep - 1)}
                className="flex items-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                Previous
              </button>
            ) : (
              <div />
            )}

            {currentStep < totalSteps ? (
              <button
                onClick={() => setCurrentStep(currentStep + 1)}
                className="flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
              >
                Next
                <ChevronRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
              >
                Submit Assessment
                <CheckCircle className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
