'use client';

import React, { useState, useEffect } from 'react';
import { FileText, CheckCircle, AlertTriangle, Clock, Users, Shield, Scale } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { recordConsent, getLatestConsent } from '@/utils/indexedDB';
import { useRouter } from 'next/navigation';

function TermsOfService() {
  // Get current year for copyright and last updated text
  const currentYear = new Date().getFullYear();
  const router = useRouter();
  
  const [loading, setLoading] = useState(true);
  const [hasConsented, setHasConsented] = useState(false);
  const [consentInfo, setConsentInfo] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  
  // Current terms version
  const TERMS_VERSION = '1.0';
  
  // Load user profile on mount to check if consent has been given
  useEffect(() => {
    const checkConsent = async () => {
      try {
        const latestConsent = await getLatestConsent('terms');
        if (latestConsent && latestConsent.consented) {
          setHasConsented(true);
          setConsentInfo(latestConsent);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error checking terms consent:', error);
        setLoading(false);
      }
    };
    
    checkConsent();
  }, []);
  
  const handleConsentChange = (e) => {
    setIsChecked(e.target.checked);
  };
  
  const handleSubmitConsent = async () => {
    if (!isChecked) return;
    
    try {
      // Record consent with the new function
      await recordConsent('terms', TERMS_VERSION, true);
      
      setHasConsented(true);
      
      // Get the latest consent to display details
      const latestConsent = await getLatestConsent('terms');
      setConsentInfo(latestConsent);
      
      // Redirect to dashboard after consent
      setTimeout(() => {
        router.push('/dashboard');
      }, 1500);
    } catch (error) {
      console.error('Error saving consent:', error);
      alert('There was a problem saving your consent. Please try again.');
    }
  };
  
  const revokeConsent = async () => {
    try {
      // Record consent revocation with the new function
      await recordConsent('terms', TERMS_VERSION, false);
      
      setHasConsented(false);
      setIsChecked(false);
    } catch (error) {
      console.error('Error revoking consent:', error);
      alert('There was a problem revoking your consent. Please try again.');
    }
  };

  return (
    <>
      <Header />
      <main className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8 text-center">
            <div className="flex justify-center mb-4">
              <FileText className="h-16 w-16 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms of Service</h1>
            <p className="text-gray-600">Last Updated: April 2025</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md mb-8">
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-8">
                Welcome to Budget Sidekick. These Terms of Service ("Terms") govern your use of the Budget Sidekick 
                application and website (the "Service") operated by Primordial Software ("we," "us," or "our"). By 
                accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part 
                of the Terms, you may not access the Service.
              </p>

              <div className="bg-amber-50 p-5 rounded-lg border border-amber-200 mb-8">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-amber-800 font-semibold mb-2">Important Notice</h3>
                    <p className="text-amber-700 text-sm">
                      Budget Sidekick is a financial planning and budgeting tool designed for informational purposes only. 
                      We are not a bank, financial institution, investment advisor, or tax preparation service. The Service 
                      should not be used as a substitute for professional financial advice, and financial decisions should not 
                      be made solely based on the information provided by the Service.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-100">
                  <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <h2 className="text-xl font-bold text-gray-900 m-0">1. Acceptance of Terms</h2>
                </div>
                <p className="text-gray-600 mb-4">
                  By creating an account or using the Service in any way, you acknowledge that you have read, understood, 
                  and agree to be bound by these Terms. If you are using the Service on behalf of an organization, you are 
                  agreeing to these Terms on behalf of that organization, and you represent and warrant that you have the 
                  authority to do so.
                </p>
                <p className="text-gray-600">
                  We reserve the right to modify these Terms at any time. We will provide notice of significant changes by 
                  posting a notice on our website, sending you an email, or through a notification within the Service. Your 
                  continued use of the Service after changes become effective constitutes your acceptance of the changes.
                </p>
              </div>

              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-100">
                  <Users className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <h2 className="text-xl font-bold text-gray-900 m-0">2. Account Registration and Security</h2>
                </div>
                <p className="text-gray-600 mb-4">
                  To use certain features of the Service, you must register for an account. When you register, you agree to provide accurate, 
                  current, and complete information about yourself and to keep this information updated.
                </p>
                <p className="text-gray-600 mb-4">
                  You are responsible for:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Immediately notifying us of any unauthorized use of your account</li>
                </ul>
                <p className="text-gray-600">
                  We reserve the right to disable any user account if we believe you have violated these Terms or if we 
                  determine that your account activity poses a risk to the security of the Service.
                </p>
              </div>

              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-100">
                  <Shield className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <h2 className="text-xl font-bold text-gray-900 m-0">3. Privacy and Data Protection</h2>
                </div>
                <p className="text-gray-600 mb-4">
                  Our <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a> describes how we collect, use, and protect your personal information. By using the Service, 
                  you agree to the collection and use of information in accordance with our Privacy Policy.
                </p>
                <p className="text-gray-600">
                  While we implement appropriate security measures to protect your data, you acknowledge that no method of 
                  transmission over the Internet or electronic storage is 100% secure. We cannot guarantee the absolute security 
                  of your information.
                </p>
              </div>

              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-100">
                  <Scale className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <h2 className="text-xl font-bold text-gray-900 m-0">4. User Responsibilities and Restrictions</h2>
                </div>
                <p className="text-gray-600 mb-4">
                  When using the Service, you agree to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Provide accurate financial information</li>
                  <li>Use the Service only for lawful purposes</li>
                  <li>Respect the intellectual property rights of others</li>
                </ul>
                <p className="text-gray-600 mb-4">
                  You agree not to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>Use the Service in any way that could damage, disable, overburden, or impair the Service</li>
                  <li>Attempt to gain unauthorized access to any part of the Service or the systems or networks connected to the Service</li>
                  <li>Use any automated means to access the Service or collect any information from the Service</li>
                  <li>Use the Service for any illegal or unauthorized purpose</li>
                  <li>Impersonate any person or entity or falsely state or misrepresent your affiliation with a person or entity</li>
                  <li>Share your account credentials with third parties</li>
                </ul>
              </div>

              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-100">
                  <Clock className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <h2 className="text-xl font-bold text-gray-900 m-0">5. Service Availability and Modifications</h2>
                </div>
                <p className="text-gray-600 mb-4">
                  We strive to ensure that the Service is available at all times. However, we do not guarantee uninterrupted access 
                  to the Service. The Service may be temporarily unavailable for scheduled maintenance, unscheduled maintenance, or 
                  due to factors beyond our control.
                </p>
                <p className="text-gray-600 mb-4">
                  We reserve the right to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>Modify or discontinue, temporarily or permanently, any feature or aspect of the Service without notice</li>
                  <li>Establish general practices and limits concerning the use of the Service</li>
                  <li>Update the Service to improve functionality, address security issues, or comply with regulations</li>
                </ul>
                <p className="text-gray-600">
                  We will make reasonable efforts to notify you of significant changes to the Service that may affect your use.
                </p>
              </div>

              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-100">
                  <FileText className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <h2 className="text-xl font-bold text-gray-900 m-0">6. Intellectual Property Rights</h2>
                </div>
                <p className="text-gray-600 mb-4">
                  The Service and its original content, features, and functionality are owned by Primordial Software and are protected 
                  by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                </p>
                <p className="text-gray-600 mb-4">
                  You retain ownership of any data you submit to the Service. By using the Service, you grant us a worldwide, 
                  non-exclusive, royalty-free license to use, reproduce, process, and display your data solely for the purpose 
                  of providing and improving the Service.
                </p>
                <p className="text-gray-600">
                  Nothing in these Terms transfers any of our intellectual property rights to you or grants you the right to use our 
                  trademarks, logos, or other proprietary materials without our express written permission.
                </p>
              </div>

              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-100">
                  <AlertTriangle className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <h2 className="text-xl font-bold text-gray-900 m-0">7. Limitation of Liability</h2>
                </div>
                <p className="text-gray-600 mb-4">
                  To the maximum extent permitted by law, in no event shall Primordial Software, its directors, employees, 
                  partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, 
                  or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible 
                  losses, resulting from:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>Your access to or use of or inability to access or use the Service</li>
                  <li>Any conduct or content of any third party on the Service</li>
                  <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
                  <li>Any errors, mistakes, or inaccuracies in our content</li>
                  <li>Financial decisions made based on information provided by the Service</li>
                </ul>
                <p className="text-gray-600">
                  Budget Sidekick is a budgeting and financial planning tool, not a professional financial advisory service. 
                  You are solely responsible for verifying any information provided by the Service before making financial decisions.
                </p>
              </div>

              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-100">
                  <FileText className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <h2 className="text-xl font-bold text-gray-900 m-0">8. Termination</h2>
                </div>
                <p className="text-gray-600 mb-4">
                  We reserve the right to suspend or terminate your account and access to the Service at our sole discretion, 
                  without notice, for any violation of these Terms, or for any other reason we deem appropriate.
                </p>
                <p className="text-gray-600 mb-4">
                  You may terminate your account at any time by following the instructions within the Service or by contacting us.
                </p>
                <p className="text-gray-600">
                  Upon termination, your right to use the Service will cease immediately. All provisions of the Terms that by their 
                  nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, 
                  and limitations of liability.
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-100">
                  <FileText className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <h2 className="text-xl font-bold text-gray-900 m-0">9. Contact Information</h2>
                </div>
                <p className="text-gray-600 mb-4">
                  If you have any questions about these Terms, please contact us at:
                </p>
                <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
                  <p className="text-gray-700 font-medium">Budget Sidekick Legal Team</p>
                  <p className="text-gray-600">Email: legal@budgetsidekick.com</p>
                  <p className="text-gray-600">Address: 123 Financial Street, Suite 400, San Francisco, CA 94107</p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6 mt-10 text-center">
                <p className="text-sm text-gray-500">
                  © {currentYear} Primordial Software. All rights reserved.
                </p>
              </div>
            </div>
          </div>
          
          {/* User Consent Section */}
          <div className="bg-white p-8 rounded-xl shadow-md mb-8">
            {loading ? (
              <div className="text-center py-4">
                <p className="text-gray-600">Loading...</p>
              </div>
            ) : hasConsented ? (
              <div className="text-center py-4">
                <div className="flex justify-center mb-4">
                  <CheckCircle className="h-16 w-16 text-green-500" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Thank You for Your Consent</h2>
                <p className="text-gray-600 mb-6">
                  You agreed to our Terms of Service (version {consentInfo?.version}) on {
                    consentInfo?.date ? new Date(consentInfo.date).toLocaleDateString() : 'an unknown date'
                  } at {
                    consentInfo?.date ? new Date(consentInfo.date).toLocaleTimeString() : 'an unknown time'
                  }.
                </p>
                
                {consentInfo?.device && (
                  <div className="mb-6 text-sm text-gray-500">
                    <p>Consent was provided from a {consentInfo.device.os} device</p>
                    <p>using {consentInfo.device.browserName} {consentInfo.device.browserVersion}</p>
                  </div>
                )}
                
                <button
                  onClick={revokeConsent}
                  className="px-4 py-2 text-red-600 bg-red-100 hover:bg-red-200 rounded-lg transition-colors"
                >
                  Revoke Consent
                </button>
              </div>
            ) : (
              <div className="text-center py-4">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Please Review and Consent</h2>
                <div className="flex items-start mb-6">
                  <div className="flex items-center h-5">
                    <input
                      id="terms-consent"
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleConsentChange}
                      className="w-5 h-5 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                      required
                    />
                  </div>
                  <label htmlFor="terms-consent" className="ml-3 text-left text-gray-600">
                    I have read and agree to the Terms of Service (version {TERMS_VERSION}), and I understand that my consent is required to use Budget Sidekick.
                  </label>
                </div>
                <button
                  onClick={handleSubmitConsent}
                  disabled={!isChecked}
                  className={`px-6 py-3 ${
                    isChecked ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'
                  } text-white font-semibold rounded-lg transition-colors`}
                >
                  I Agree
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default TermsOfService;