import React from 'react';
import Link from 'next/link';
import { BookOpenIcon, AlertTriangle, LifeBuoy } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import Disclaimer from '@/components/Disclaimer';

function EmergencyFundBasics() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Education Center', href: '/education' },
              { label: 'Emergency Fund Basics' }
            ]} />
            <h1 className="text-3xl font-bold text-gray-900 mt-2">Emergency Fund Basics</h1>
          </div>

          <div className="prose max-w-none mb-12">
            <p className="text-gray-600 mb-6">
              An emergency fund is your financial safety net - a dedicated pool of money set aside to cover unexpected expenses or financial emergencies. 
              It's the foundation of a solid financial plan and can help you avoid debt when life throws you a curveball.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why You Need an Emergency Fund</h2>
            <p className="text-gray-600 mb-4">
              Life is unpredictable, and financial emergencies can happen to anyone. An emergency fund helps you:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Cover unexpected medical expenses</li>
              <li>Handle car repairs or home maintenance</li>
              <li>Manage job loss or reduced income</li>
              <li>Avoid high-interest debt in emergencies</li>
              <li>Reduce financial stress and anxiety</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How Much Should You Save?</h2>
            <p className="text-gray-600 mb-4">
              The size of your emergency fund depends on your personal situation:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Start with 3-6 months of essential living expenses</li>
              <li>Consider more if you have variable income or are self-employed</li>
              <li>Factor in your job security and industry stability</li>
              <li>Account for any dependents or special circumstances</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Where to Keep Your Emergency Fund</h2>
            <p className="text-gray-600 mb-4">
              Your emergency fund should be easily accessible but separate from your regular spending accounts:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>High-yield savings accounts</li>
              <li>Money market accounts</li>
              <li>Short-term certificates of deposit (CDs)</li>
              <li>Avoid investing emergency funds in stocks or bonds</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Building Your Emergency Fund</h2>
            <p className="text-gray-600 mb-4">
              Building an emergency fund takes time and discipline. Here's how to get started:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Set a specific savings goal</li>
              <li>Automate your savings</li>
              <li>Start small and increase contributions over time</li>
              <li>Use windfalls (tax refunds, bonuses) to boost your fund</li>
              <li>Review and adjust your goal as your situation changes</li>
            </ul>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-8">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Getting Started</h3>
              <p className="text-gray-700 mb-4">
                To build your emergency fund:
              </p>
              <ol className="list-decimal pl-6 mb-6 text-gray-600">
                <li>Calculate your monthly essential expenses</li>
                <li>Set a target amount (3-6 months of expenses)</li>
                <li>Open a dedicated savings account</li>
                <li>Set up automatic transfers from your paycheck</li>
                <li>Track your progress and celebrate milestones</li>
              </ol>
            </div>

            <Disclaimer 
              articleId="emergency-fund-basics"
              message="This content is educational in nature and updated as of {{year}}. The recommended emergency fund size may vary based on individual circumstances, including job stability, health conditions, and family situation. Please consider your unique financial situation when determining your emergency savings goals."
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default EmergencyFundBasics; 