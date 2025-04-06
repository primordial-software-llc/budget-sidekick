import React from 'react';
import Link from 'next/link';
import { PieChart, AlertTriangle, Shield, Heart, Car, Home, Briefcase, FileText } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import Disclaimer from '@/components/Disclaimer';

function InsuranceBasics() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Education Center', href: '/education' },
              { label: 'Insurance Basics' }
            ]} />
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
            <div className="flex items-center justify-center gap-2 mb-2">
              <PieChart className="w-5 h-5 text-blue-600" />
              <p className="text-blue-600 text-sm font-medium">Financial Education Series</p>
            </div>
            <h1 className="text-3xl font-bold text-center mb-3 text-gray-900">Insurance Basics</h1>
            <h2 className="text-lg text-center text-gray-700 mb-6">Protecting Your Financial Future</h2>
            
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              Insurance is a crucial component of financial planning that helps protect you and your loved ones from unexpected financial losses. 
              Understanding different types of insurance and how they work can help you make informed decisions about your coverage needs.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-8">
              <h3 className="flex items-center text-blue-800 font-semibold text-lg mb-2">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Why This Matters
              </h3>
              <p className="text-gray-700">
                Having the right insurance coverage can mean the difference between financial stability and financial hardship when unexpected events occur. 
                Insurance helps protect your assets, income, and loved ones from significant financial losses.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Types of Essential Insurance</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-red-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <Heart className="w-5 h-5 mr-2 text-red-700" />
                    Health Insurance
                  </h4>
                </div>
                <div className="p-5">
                  <p className="text-gray-700 mb-4">
                    Covers medical expenses and preventive care, helping you manage healthcare costs and maintain your well-being.
                  </p>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">Key Benefits:</span> Access to healthcare services, preventive care coverage, protection against high medical costs
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-blue-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-blue-700" />
                    Life Insurance
                  </h4>
                </div>
                <div className="p-5">
                  <p className="text-gray-700 mb-4">
                    Provides financial protection for your dependents in case of your untimely death, helping them maintain their standard of living.
                  </p>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">Key Benefits:</span> Income replacement, debt coverage, education funding, final expenses
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-green-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <Car className="w-5 h-5 mr-2 text-green-700" />
                    Auto Insurance
                  </h4>
                </div>
                <div className="p-5">
                  <p className="text-gray-700 mb-4">
                    Required by law and covers vehicle-related risks, protecting you from financial losses due to accidents or theft.
                  </p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">Key Benefits:</span> Liability coverage, collision protection, comprehensive coverage, uninsured motorist protection
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-purple-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <Home className="w-5 h-5 mr-2 text-purple-700" />
                    Homeowners/Renters Insurance
                  </h4>
                </div>
                <div className="p-5">
                  <p className="text-gray-700 mb-4">
                    Protects your property and belongings from damage or theft, and provides liability coverage for accidents on your property.
                  </p>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">Key Benefits:</span> Property protection, liability coverage, additional living expenses, personal property coverage
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Understanding Insurance Terms</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-indigo-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-indigo-700" />
                  Key Insurance Concepts
                </h4>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Basic Terms</h5>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Premium</span>
                        <span className="text-indigo-600 font-medium">Amount you pay for coverage</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Deductible</span>
                        <span className="text-indigo-600 font-medium">Amount you pay before coverage</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Coverage Limit</span>
                        <span className="text-indigo-600 font-medium">Maximum payout amount</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Policy Details</h5>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Policy Term</span>
                        <span className="text-indigo-600 font-medium">Duration of coverage</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Exclusions</span>
                        <span className="text-indigo-600 font-medium">What's not covered</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Rider</span>
                        <span className="text-indigo-600 font-medium">Additional coverage option</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Getting Started</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-amber-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <Briefcase className="w-5 h-5 mr-2 text-amber-700" />
                  Building Your Insurance Plan
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Step 1: Assess Your Needs</h5>
                    <p className="text-sm text-gray-700">
                      Inventory your assets, evaluate your risks, and consider your family's needs.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Step 2: Research Providers</h5>
                    <p className="text-sm text-gray-700">
                      Compare coverage options, check company ratings, and read customer reviews.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Step 3: Get Quotes</h5>
                    <p className="text-sm text-gray-700">
                      Obtain multiple quotes and compare coverage details and costs.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Step 4: Review Annually</h5>
                    <p className="text-sm text-gray-700">
                      Regularly review and update your coverage as your needs change.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Disclaimer 
              articleId="insurance-basics"
              message="This content is educational in nature and updated as of {{year}}. Insurance products and regulations vary by state and provider. This information is general in nature and should not be considered insurance advice. Consult with a licensed insurance professional regarding your specific situation."
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default InsuranceBasics;