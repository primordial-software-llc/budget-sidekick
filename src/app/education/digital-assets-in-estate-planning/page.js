import React from 'react';
import Link from 'next/link';
import { AlertTriangle, Smartphone, ArrowRight, CloudLightning, FileText, Lock, Key, WalletCards } from 'lucide-react';
import Article from '@/components/Article';

function DigitalAssetsInEstatePlanning() {
  return (
    <Article 
      title="Digital Assets in Estate Planning"
      icon={CloudLightning}
      articleId="digital-assets-in-estate-planning"
      accentColor="purple"
      disclaimerMessage="This content is educational in nature and updated as of {{year}}. Laws governing digital assets in estate planning vary by state and continue to evolve. Platform-specific policies for handling accounts after death also change frequently. This information is not legal or technical advice. Please consult with qualified legal and technical professionals to develop an estate plan that properly addresses your digital assets."
    >
      <p className="text-gray-600 mb-6 text-lg leading-relaxed">
        Modern estate planning must address digital assets alongside traditional ones. From cryptocurrency and online financial accounts to social media profiles and digital media libraries, your digital footprint represents significant financial and sentimental value. Without proper planning, these assets may be inaccessible to heirs or lost entirely after your passing.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-100 flex flex-col items-center text-center">
          <CloudLightning className="h-10 w-10 text-purple-600 mb-2" />
          <p className="font-medium text-purple-800">Average person has over 90 online accounts requiring passwords</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-100 flex flex-col items-center text-center">
          <WalletCards className="h-10 w-10 text-purple-600 mb-2" />
          <p className="font-medium text-purple-800">Billions in cryptocurrency assets remain unclaimed due to lost access credentials</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-100 flex flex-col items-center text-center">
          <FileText className="h-10 w-10 text-purple-600 mb-2" />
          <p className="font-medium text-purple-800">Only 27% of Americans include digital assets in their estate plans</p>
        </div>
      </div>

      <div className="prose max-w-none mb-12 bg-white rounded-xl shadow-md p-8">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
          <Smartphone className="h-7 w-7 text-purple-600 flex-shrink-0" />
          <h2 className="text-2xl font-bold text-gray-900 m-0">Categories of Digital Assets to Consider</h2>
        </div>
        <p className="text-gray-600 mb-4">
          Digital assets encompass a broad range of online properties and accounts that may have significant financial or sentimental value:
        </p>
        
        <div className="space-y-6 mb-8">
          <div className="bg-white p-6 rounded-lg border border-purple-200 shadow-sm">
            <h4 className="font-semibold text-purple-800 mb-3 flex items-center">
              <div className="bg-purple-100 p-2 rounded-full mr-3">
                <WalletCards className="h-5 w-5 text-purple-700" />
              </div>
              Financial Digital Assets
            </h4>
            <p className="text-gray-700 mb-2">Accounts and holdings with direct monetary value.</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h5 className="text-sm font-semibold text-gray-700 mb-2">Examples Include:</h5>
              <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                <li>Cryptocurrency holdings (Bitcoin, Ethereum, etc.)</li>
                <li>Online banking and investment accounts</li>
                <li>Digital payment platforms (PayPal, Venmo, Cash App)</li>
                <li>Airline miles and hotel loyalty points</li>
                <li>Online gambling accounts</li>
                <li>Domain names and websites with monetary value</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-purple-200 shadow-sm">
            <h4 className="font-semibold text-purple-800 mb-3 flex items-center">
              <div className="bg-purple-100 p-2 rounded-full mr-3">
                <CloudLightning className="h-5 w-5 text-purple-700" />
              </div>
              Personal and Sentimental Digital Assets
            </h4>
            <p className="text-gray-700 mb-2">Digital content with primarily personal or emotional significance.</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h5 className="text-sm font-semibold text-gray-700 mb-2">Key Considerations:</h5>
              <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                <li>Digital photo and video libraries</li>
                <li>Email accounts containing personal correspondence</li>
                <li>Social media profiles and content</li>
                <li>Personal blogs and written content</li>
                <li>Digital journals and notes</li>
                <li>Family history and genealogy research data</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-purple-200 shadow-sm">
            <h4 className="font-semibold text-purple-800 mb-3 flex items-center">
              <div className="bg-purple-100 p-2 rounded-full mr-3">
                <CloudLightning className="h-5 w-5 text-purple-700" />
              </div>
              Digital Purchases and Licenses
            </h4>
            <p className="text-gray-700 mb-2">Media and subscription services with either financial or entertainment value.</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h5 className="text-sm font-semibold text-gray-700 mb-2">Common Examples:</h5>
              <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                <li>Digital music libraries (iTunes, Spotify playlists)</li>
                <li>E-books and audiobook libraries</li>
                <li>Purchased movies, TV shows, and video content</li>
                <li>Software licenses and applications</li>
                <li>Online gaming accounts and in-game purchases</li>
                <li>Subscription services (Netflix, Amazon Prime, etc.)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 p-5 rounded-lg border border-purple-100 mb-8">
          <div className="flex items-center gap-2 mb-2">
            <ArrowRight className="h-5 w-5 text-purple-600" />
            <h4 className="font-semibold text-purple-800 m-0">Related Resource</h4>
          </div>
          <p className="text-sm text-gray-700 mb-3">
            Understanding the fundamentals of estate planning is essential when incorporating digital assets.
          </p>
          <Link href="/education/estate-planning-basics" className="inline-flex items-center gap-1 text-purple-600 font-medium hover:underline">
            Explore Estate Planning Basics <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
          <Lock className="h-7 w-7 text-purple-600 flex-shrink-0" />
          <h2 className="text-2xl font-bold text-gray-900 m-0">Key Challenges with Digital Assets</h2>
        </div>
        <p className="text-gray-600 mb-4">
          Digital assets present unique challenges for estate planning and administration:
        </p>
        
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full rounded-md overflow-hidden border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Challenge</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Description</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Planning Considerations</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="bg-white">
                <td className="px-4 py-3 text-sm text-gray-800">Password Protection</td>
                <td className="px-4 py-3 text-sm text-gray-600">Digital assets secured by passwords that heirs don't know</td>
                <td className="px-4 py-3 text-sm text-gray-600">Secure password management system accessible to fiduciaries</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-800">Terms of Service Restrictions</td>
                <td className="px-4 py-3 text-sm text-gray-600">Many user agreements prohibit account transfer after death</td>
                <td className="px-4 py-3 text-sm text-gray-600">Review policies; use "legacy contact" features when available</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 text-sm text-gray-800">Legal Access Limitations</td>
                <td className="px-4 py-3 text-sm text-gray-600">Federal laws can restrict access to digital communications</td>
                <td className="px-4 py-3 text-sm text-gray-600">Explicit authorization for fiduciaries in estate documents</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-800">Two-Factor Authentication</td>
                <td className="px-4 py-3 text-sm text-gray-600">Security features linked to mobile devices or email</td>
                <td className="px-4 py-3 text-sm text-gray-600">Include backup codes, recovery keys, and device access plans</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 text-sm text-gray-800">Asset Discovery</td>
                <td className="px-4 py-3 text-sm text-gray-600">Heirs may not know what digital assets exist</td>
                <td className="px-4 py-3 text-sm text-gray-600">Create comprehensive inventory of digital assets</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="text-gray-600 mb-4 bg-purple-50 p-3 rounded-lg border-l-4 border-purple-300">
          <strong>Important:</strong> The Revised Uniform Fiduciary Access to Digital Assets Act (RUFADAA), now adopted in most states, provides a legal framework for fiduciary access to digital assets but requires explicit authorization in estate planning documents. Without such authorization, many service providers may deny access to even court-appointed executors.
        </p>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-8">
          <div className="flex items-center gap-2 mb-2">
            <ArrowRight className="h-5 w-5 text-purple-600" />
            <h4 className="font-semibold text-gray-800 m-0">Related Resource</h4>
          </div>
          <p className="text-sm text-gray-700 mb-3">
            Cryptocurrency holdings require special consideration in estate planning.
          </p>
          <Link href="/education/crypto-investing-basics" className="inline-flex items-center gap-1 text-purple-600 font-medium hover:underline">
            Explore Cryptocurrency Investing Basics <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
          <Key className="h-7 w-7 text-purple-600 flex-shrink-0" />
          <h2 className="text-2xl font-bold text-gray-900 m-0">Creating a Digital Estate Plan</h2>
        </div>
        <p className="text-gray-600 mb-4">
          Follow these steps to incorporate digital assets into your comprehensive estate plan:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
          <li className="bg-gray-50 p-2 rounded"><strong>Create a Digital Asset Inventory:</strong> Document all online accounts, digital property, and access methods (update this regularly)</li>
          <li className="bg-gray-50 p-2 rounded"><strong>Implement a Password Management System:</strong> Use a secure password manager and ensure your executor knows how to access it</li>
          <li className="bg-gray-50 p-2 rounded"><strong>Update Legal Documents:</strong> Include specific language authorizing fiduciary access to digital assets in your will, trust, and power of attorney</li>
          <li className="bg-gray-50 p-2 rounded"><strong>Use Platform Legacy Tools:</strong> Configure "legacy contact" or "inactive account manager" features offered by Google, Facebook, Apple, and similar services</li>
          <li className="bg-gray-50 p-2 rounded"><strong>Provide Clear Instructions:</strong> Document your wishes for each type of digital asset (preserve, transfer, delete, memorialize, etc.)</li>
          <li className="bg-gray-50 p-2 rounded"><strong>Backup Critical Data:</strong> Maintain offline backups of irreplaceable digital content like family photos and important documents</li>
          <li className="bg-gray-50 p-2 rounded"><strong>Consider a Digital Asset Trust:</strong> For significant cryptocurrency holdings, a specialized trust with technical expertise may be appropriate</li>
        </ul>

        <div className="bg-purple-50 p-5 rounded-lg border border-purple-100 mb-6">
          <div className="flex items-center gap-2 mb-2">
            <ArrowRight className="h-5 w-5 text-purple-600" />
            <h4 className="font-semibold text-purple-800 m-0">Related Resource</h4>
          </div>
          <p className="text-sm text-gray-700 mb-3">
            Estate planning for blended families presents additional considerations.
          </p>
          <Link href="/education/estate-planning-for-blended-families" className="inline-flex items-center gap-1 text-purple-600 font-medium hover:underline">
            Explore Estate Planning for Blended Families <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-6 rounded-lg border mt-10 mb-8 text-white">
          <h3 className="text-xl font-semibold mb-4 text-white">Digital Asset Inventory Template</h3>
          <p className="mb-4 text-purple-50">
            For each digital asset, record the following information and store securely:
          </p>
          <ol className="list-decimal pl-6 mb-6 space-y-2">
            <li className="text-purple-50">Type of asset (financial, personal, purchased content)</li>
            <li className="text-purple-50">Platform/provider name and website URL</li>
            <li className="text-purple-50">Username or account ID (not the password in this document)</li>
            <li className="text-purple-50">Account recovery email and phone number</li>
            <li className="text-purple-50">Location of access credentials (password manager, crypto keys)</li>
            <li className="text-purple-50">Specific instructions for handling this asset</li>
            <li className="text-purple-50">Approximate value (if applicable)</li>
          </ol>
          <Link href="/education/inheritance-planning" className="inline-flex items-center gap-1 bg-white text-purple-700 px-4 py-2 rounded-md font-medium hover:bg-purple-50 transition-colors">
            Learn More About Inheritance Planning <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Article>
  );
}

export default DigitalAssetsInEstatePlanning; 