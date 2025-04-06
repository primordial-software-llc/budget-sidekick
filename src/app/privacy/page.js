import React from 'react';
import { Shield, Lock, Eye, FileText, UserCheck, Bell, Settings } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function PrivacyPolicy() {
  // Get current year for copyright and last updated text
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Header />
      <main className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8 text-center">
            <div className="flex justify-center mb-4">
              <Shield className="h-16 w-16 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
            <p className="text-gray-600">Last Updated: April 2025</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md mb-8">
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-8">
                At Budget Sidekick, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, 
                and safeguard your information when you use our financial planning application. Please read this policy carefully 
                to understand our practices regarding your personal data.
              </p>

              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-100">
                  <FileText className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <h2 className="text-xl font-bold text-gray-900 m-0">Information We Collect</h2>
                </div>
                <p className="text-gray-600 mb-4">
                  We collect information that you provide directly to us when using Budget Sidekick:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li><strong>Account Information:</strong> When you create an account, we collect your name, email address, and password.</li>
                  <li><strong>Financial Information:</strong> To provide our budgeting and planning features, we collect financial data such as income, expenses, savings goals, and investment information that you choose to enter.</li>
                  <li><strong>Transaction Data:</strong> If you choose to connect your financial accounts, we collect transaction data through secure third-party financial data providers.</li>
                  <li><strong>Usage Information:</strong> We collect information about how you interact with our application, including features you use, pages you visit, and actions you take.</li>
                  <li><strong>Device Information:</strong> We collect information about the device you use to access our service, including device type, operating system, and browser type.</li>
                </ul>
              </div>

              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-100">
                  <Eye className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <h2 className="text-xl font-bold text-gray-900 m-0">How We Use Your Information</h2>
                </div>
                <p className="text-gray-600 mb-4">
                  We use the information we collect for various purposes, including:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li><strong>Providing Services:</strong> To create and maintain your account, provide our budgeting and financial planning features, and process your financial information.</li>
                  <li><strong>Improving Our Services:</strong> To understand how users interact with our application, identify areas for improvement, and develop new features.</li>
                  <li><strong>Communications:</strong> To send you important updates about your account, new features, or relevant financial insights. You can opt out of non-essential communications at any time.</li>
                  <li><strong>Security:</strong> To protect your account from unauthorized access and ensure the security of our platform.</li>
                  <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes.</li>
                </ul>
              </div>

              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-100">
                  <UserCheck className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <h2 className="text-xl font-bold text-gray-900 m-0">Data Sharing and Disclosure</h2>
                </div>
                <p className="text-gray-600 mb-4">
                  We understand the sensitive nature of financial information and are committed to protecting it. We do not sell your personal information to third parties. We may share your information in the following circumstances:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li><strong>Service Providers:</strong> We work with trusted third-party service providers who perform services on our behalf, such as hosting, data analytics, and customer support. These providers have access to your information only to perform these tasks on our behalf and are obligated to protect your information.</li>
                  <li><strong>Financial Data Partners:</strong> If you choose to connect your financial accounts, we work with secure financial data providers who help facilitate account connections and data transfers.</li>
                  <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).</li>
                  <li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction. We will notify you of any change in ownership or uses of your information.</li>
                  <li><strong>With Your Consent:</strong> We may share your information with third parties when you have given us your consent to do so.</li>
                </ul>
              </div>

              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-100">
                  <Lock className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <h2 className="text-xl font-bold text-gray-900 m-0">Data Security</h2>
                </div>
                <p className="text-gray-600 mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li><strong>Encryption:</strong> We use industry-standard encryption to protect your data in transit and at rest.</li>
                  <li><strong>Access Controls:</strong> We restrict access to your information to authorized personnel only, based on the principle of least privilege.</li>
                  <li><strong>Regular Audits:</strong> We conduct regular security assessments and audits to ensure our security measures remain effective.</li>
                  <li><strong>Secure Infrastructure:</strong> Our application is hosted in secure, monitored environments with advanced security protections.</li>
                  <li><strong>Employee Training:</strong> Our team members receive regular privacy and security training.</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  While we strive to use commercially acceptable means to protect your personal information, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security.
                </p>
              </div>

              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-100">
                  <Settings className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <h2 className="text-xl font-bold text-gray-900 m-0">Your Privacy Rights and Choices</h2>
                </div>
                <p className="text-gray-600 mb-4">
                  Depending on your location, you may have certain rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li><strong>Access and Update:</strong> You can access and update most of your account information directly within your account settings.</li>
                  <li><strong>Data Portability:</strong> You can request a copy of your data in a structured, commonly used, and machine-readable format.</li>
                  <li><strong>Deletion:</strong> You can request that we delete your personal information, subject to certain exceptions provided by law.</li>
                  <li><strong>Opt-Out:</strong> You can opt out of marketing communications and certain data collection or sharing by adjusting your account settings or following the instructions in our communications.</li>
                  <li><strong>Consent Withdrawal:</strong> If we process your data based on your consent, you have the right to withdraw that consent at any time.</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  To exercise these rights, please contact us at support@budgetsidekick.com.
                </p>
              </div>

              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-100">
                  <Bell className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <h2 className="text-xl font-bold text-gray-900 m-0">Policy Updates</h2>
                </div>
                <p className="text-gray-600 mb-4">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Posting the updated policy on our website with a new "Last Updated" date</li>
                  <li>Sending an email to the address associated with your account</li>
                  <li>Displaying a prominent notice within the application</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  Your continued use of Budget Sidekick after the effective date of the revised Privacy Policy constitutes your acceptance of the changes.
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-100">
                  <UserCheck className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <h2 className="text-xl font-bold text-gray-900 m-0">Contact Us</h2>
                </div>
                <p className="text-gray-600">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
                </p>
                <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 mt-4">
                  <p className="text-gray-700 font-medium">Budget Sidekick Privacy Team</p>
                  <p className="text-gray-600">Email: support@budgetsidekick.com</p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6 mt-10 text-center">
                <p className="text-sm text-gray-500">
                  © {currentYear} Budget Sidekick. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default PrivacyPolicy; 