import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CallToAction() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        <Link href="/dashboard" className="block">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-[1.02] transition-transform duration-300">
            <div className="inline-flex items-center justify-center mb-4 bg-blue-100 text-blue-600 rounded-full p-2">
              <Sparkles className="w-5 h-5" />
            </div>
            
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 inline-block text-transparent bg-clip-text">
              Ready to Get Started?
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Create your first ledger with powerful account hierarchies today. No credit card required - it's completely free!
            </p>
            
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-4 rounded-xl">
              Create Your Ledger
              <ArrowRight className="w-5 h-5" />
            </div>
            
            <p className="mt-4 text-sm text-gray-500">
              Join thousands of users managing their finances with Budget Sidekick
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
} 