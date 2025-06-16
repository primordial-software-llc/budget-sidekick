'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { CheckCircle, AlertTriangle } from 'lucide-react';

const resultData = {
  '30-Year Fixed': {
    label: '30-Year Fixed-Rate Mortgage',
    explanation: 'A stable loan with the same interest rate and payment for 30 years. Best for buyers who want predictability and plan to stay long-term.',
    govUrl: 'https://www.consumerfinance.gov/owning-a-home/loan-options/fixed-rate-mortgage/',
    govLabel: 'CFPB: Fixed-Rate Mortgages',
    risk: null,
  },
  '15-Year Fixed': {
    label: '15-Year Fixed-Rate Mortgage',
    explanation: 'A shorter-term loan with higher monthly payments but much less total interest. Good for those who can afford higher payments and want to pay off their home faster.',
    govUrl: 'https://www.consumerfinance.gov/owning-a-home/loan-options/fixed-rate-mortgage/',
    govLabel: 'CFPB: Fixed-Rate Mortgages',
    risk: null,
  },
  'FHA Loan': {
    label: 'FHA Loan',
    explanation: 'A government-backed loan with a low down payment and flexible credit requirements. Great for first-time buyers or those with lower credit.',
    govUrl: 'https://www.hud.gov/program_offices/housing/fhahistory',
    govLabel: 'HUD: FHA Loans',
    risk: null,
  },
  'VA Loan': {
    label: 'VA Loan',
    explanation: 'A benefit for eligible veterans, active-duty service members, and some spouses. No down payment and no mortgage insurance required.',
    govUrl: 'https://www.va.gov/housing-assistance/home-loans/',
    govLabel: 'VA: Home Loan Program',
    risk: null,
  },
  'USDA Loan': {
    label: 'USDA Loan',
    explanation: 'A government-backed loan for eligible rural homebuyers. No down payment required, but location and income limits apply.',
    govUrl: 'https://www.rd.usda.gov/programs-services/single-family-housing-guaranteed-loan-program',
    govLabel: 'USDA: Single Family Housing Loans',
    risk: null,
  },
};

const quizQuestions = [
  {
    question: 'Is a low monthly payment your top priority?',
    options: ['Yes', 'No'],
    key: 'lowPayment',
  },
  {
    question: 'Is a low down payment important to you?',
    options: ['Yes', 'No'],
    key: 'lowDown',
  },
  {
    question: 'Are you a veteran, active-duty, or surviving spouse?',
    options: ['Yes', 'No'],
    key: 'veteran',
  },
  {
    question: 'Are you buying in a rural area?',
    options: ['Yes', 'No'],
    key: 'rural',
  },
];

function getQuizResult(answers) {
  if (answers.veteran === 'Yes') return 'VA Loan';
  if (answers.rural === 'Yes') return 'USDA Loan';
  if (answers.lowDown === 'Yes') return 'FHA Loan';
  if (answers.lowPayment === 'Yes') return '30-Year Fixed';
  if (answers.lowPayment === 'No') return '15-Year Fixed';
  return '';
}

export default function QuizClient() {
  const [answers, setAnswers] = useState({});
  const resultKey = getQuizResult(answers);
  const result = resultData[resultKey];

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-8">
      <form className="space-y-6" onChange={e => {
        const form = e.currentTarget.form || e.currentTarget.closest('form');
        const formData = new FormData(form);
        const newAnswers = {};
        quizQuestions.forEach(q => {
          newAnswers[q.key] = formData.get(q.key);
        });
        setAnswers(newAnswers);
      }}>
        {quizQuestions.map((q, idx) => (
          <fieldset key={q.key} className="mb-4">
            <legend className="font-semibold text-gray-900 mb-2 block">{q.question}</legend>
            <div className="flex gap-6">
              {q.options.map((option) => (
                <label key={option} className="inline-flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name={q.key}
                    value={option}
                    className="form-radio text-purple-600 mr-2"
                    checked={answers[q.key] === option}
                    onChange={() => {}}
                  />
                  {option}
                </label>
              ))}
            </div>
          </fieldset>
        ))}
      </form>
      <div id="result" className="mt-8">
        {result ? (
          <div className="text-center">
            <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <p className="text-lg font-semibold mb-2">Your best match: <span className="text-purple-700">{result.label}</span></p>
            <p className="mb-2 text-gray-700">{result.explanation}</p>
            <a href={result.govUrl} target="_blank" rel="noopener noreferrer" className="inline-block text-purple-600 hover:text-purple-800 underline mb-2">{result.govLabel} <span aria-hidden>↗</span></a>
            <div className="mb-2">
              <Link href="/education/mortgage-types-explained" className="inline-block text-purple-600 hover:text-purple-800 underline">See all mortgage types explained</Link>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-500">Answer the questions above to see your recommended mortgage type.</div>
        )}
      </div>
    </div>
  );
} 