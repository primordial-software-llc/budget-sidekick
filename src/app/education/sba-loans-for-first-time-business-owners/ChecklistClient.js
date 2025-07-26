'use client';
import React, { useState } from 'react';
import { CheckSquare } from 'lucide-react';

function ChecklistItem({ children, id }) {
  const [checked, setChecked] = useState(false);
  
  return (
    <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
      <button
        onClick={() => setChecked(!checked)}
        className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
          checked 
            ? 'bg-green-600 border-green-600 text-white' 
            : 'border-gray-300 hover:border-green-500'
        }`}
      >
        {checked && <CheckSquare className="w-3 h-3" />}
      </button>
      <span className={`text-sm ${checked ? 'text-gray-500 line-through' : 'text-gray-700'}`}>
        {children}
      </span>
    </div>
  );
}

export default function ChecklistClient() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
      <div className="bg-green-100 p-4 rounded-t-xl">
        <h4 className="font-bold text-gray-900 flex items-center">
          <CheckSquare className="w-5 h-5 mr-2 text-green-700" />
          Are You Ready for an SBA Loan?
        </h4>
        <p className="text-sm text-gray-600 mt-2">
          Check off each item as you complete it. This interactive checklist will help you prepare for your SBA loan application.
        </p>
      </div>
      <div className="p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h5 className="font-semibold text-gray-900 mb-3 text-sm">Business Requirements</h5>
            <div className="space-y-1">
              <ChecklistItem>Business has been operating for at least 2 years (or have solid projections)</ChecklistItem>
              <ChecklistItem>Business is for-profit and qualifies as "small" under SBA size standards</ChecklistItem>
              <ChecklistItem>Business is located in the United States</ChecklistItem>
              <ChecklistItem>Have invested personal time and money into the business</ChecklistItem>
              <ChecklistItem>Business owner has good character and management experience</ChecklistItem>
            </div>
          </div>
          
          <div>
            <h5 className="font-semibold text-gray-900 mb-3 text-sm">Financial Preparation</h5>
            <div className="space-y-1">
              <ChecklistItem>Personal credit score is 650+ (higher is better)</ChecklistItem>
              <ChecklistItem>Have 3 years of business financial statements</ChecklistItem>
              <ChecklistItem>Have 3 years of personal tax returns</ChecklistItem>
              <ChecklistItem>Can provide 10-15% down payment</ChecklistItem>
              <ChecklistItem>Debt-to-income ratio is manageable</ChecklistItem>
            </div>
          </div>
          
          <div>
            <h5 className="font-semibold text-gray-900 mb-3 text-sm">Documentation Ready</h5>
            <div className="space-y-1">
              <ChecklistItem>Comprehensive business plan completed</ChecklistItem>
              <ChecklistItem>Financial projections for next 2-3 years</ChecklistItem>
              <ChecklistItem>Personal financial statement prepared</ChecklistItem>
              <ChecklistItem>Business licenses and registrations current</ChecklistItem>
              <ChecklistItem>Resumes for key management personnel</ChecklistItem>
            </div>
          </div>
          
          <div>
            <h5 className="font-semibold text-gray-900 mb-3 text-sm">Application Strategy</h5>
            <div className="space-y-1">
              <ChecklistItem>Identified preferred SBA lenders in your area</ChecklistItem>
              <ChecklistItem>Determined exact loan amount needed</ChecklistItem>
              <ChecklistItem>Chosen the right SBA loan program (7a, 504, microloan)</ChecklistItem>
              <ChecklistItem>Prepared for personal guarantee requirements</ChecklistItem>
              <ChecklistItem>Allow 60-90 days for application process</ChecklistItem>
            </div>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
          <h5 className="font-semibold text-green-800 mb-2">💡 Pro Tips for Success</h5>
          <div className="space-y-1">
            <ChecklistItem>Work with SCORE mentors for free business advice</ChecklistItem>
            <ChecklistItem>Consider starting with SBA Express for faster approval</ChecklistItem>
            <ChecklistItem>Connect with your local Small Business Development Center (SBDC)</ChecklistItem>
            <ChecklistItem>Build relationships with SBA preferred lenders before applying</ChecklistItem>
          </div>
        </div>
        
        <div className="mt-6 text-center">
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-sm text-gray-700 mb-3">
                <strong>Need help with working capital for orders?</strong><br/>
                Consider SBA's Working Capital Pilot Program for short-term financing to fulfill contracts and manage seasonal cash flow.
              </p>
              <a 
                href="https://www.sba.gov/funding-programs/loans/7a-loans"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium text-sm"
              >
                Learn about SBA 7(a) Working Capital Options →
              </a>
            </div>
        </div>
      </div>
    </div>
  );
} 