import React from 'react';
import Link from 'next/link';
import { AlertTriangle, ArrowRight, BarChart2, Lock, Globe, Shield, Database, TrendingUp, Zap, DollarSign } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

function CryptoInvestingBasics() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Education Center', href: '/education' },
              { label: 'Cryptocurrency Investing Basics' }
            ]} />
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Database className="w-5 h-5 text-blue-600" />
              <p className="text-blue-600 text-sm font-medium">Financial Education Series</p>
            </div>
            <h1 className="text-3xl font-bold text-center mb-3 text-gray-900">Cryptocurrency Investing Basics</h1>
            <h2 className="text-lg text-center text-gray-700 mb-6">Understanding Digital Assets and Blockchain Technology</h2>
            
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              Cryptocurrencies represent a new asset class built on blockchain technology that has emerged in the last decade. 
              This guide provides an objective introduction to how cryptocurrencies work, their potential applications, 
              and considerations for those interested in this high-volatility investment area.
            </p>

            <h3 className="text-2xl font-bold text-center mb-6">Understanding the Basics</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-blue-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <Database className="w-5 h-5 mr-2 text-blue-700" />
                    What is Blockchain?
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Blockchain Technology</h5>
                      <p className="text-sm text-gray-700">
                        A blockchain is a distributed, immutable digital ledger that records transactions across many computers. 
                        Once data is recorded in a block and added to the chain, it cannot be altered retroactively without altering all subsequent blocks.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Key Characteristics</h5>
                      <div className="mt-2 space-y-1">
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                          <span><strong>Decentralization:</strong> No single entity controls the entire network</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                          <span><strong>Transparency:</strong> All transactions are publicly viewable</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                          <span><strong>Immutability:</strong> Recorded transactions cannot be altered</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                          <span><strong>Security:</strong> Cryptographically secured data</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Consensus Mechanisms</h5>
                      <p className="text-sm text-gray-700">
                        Methods by which blockchain networks agree on which transactions are valid. The two most common are:
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          Proof of Work (PoW)
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          Proof of Stake (PoS)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-purple-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <DollarSign className="w-5 h-5 mr-2 text-purple-700" />
                    What are Cryptocurrencies?
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Definition</h5>
                      <p className="text-sm text-gray-700">
                        Digital or virtual currencies that use cryptography for security and operate on blockchain networks. 
                        Unlike traditional currencies, most cryptocurrencies are not issued by a central authority, making them 
                        theoretically immune to government interference or manipulation.
                      </p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Categories</h5>
                      <div className="mt-2 space-y-1">
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                          <span><strong>Coins:</strong> Bitcoin, Litecoin, etc. (own blockchain)</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                          <span><strong>Tokens:</strong> Built on existing blockchains (like Ethereum)</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                          <span><strong>Stablecoins:</strong> Pegged to stable assets like USD</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                          <span><strong>Central Bank Digital Currencies (CBDCs):</strong> Government-issued</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Current Market Landscape</h5>
                      <p className="text-sm text-gray-700">
                        There are thousands of cryptocurrencies with varying purposes, with Bitcoin and Ethereum being the largest 
                        by market capitalization. The overall market is highly volatile and relatively young compared to traditional 
                        asset classes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Major Cryptocurrencies</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-amber-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <BarChart2 className="w-5 h-5 mr-2 text-amber-700" />
                  Leading Digital Assets
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-5">
                  <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-amber-100 p-2 rounded-full">
                          <DollarSign className="w-6 h-6 text-amber-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Bitcoin (BTC)</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          The first cryptocurrency, created in 2009 by an anonymous person or group known as Satoshi Nakamoto. 
                          It was designed as a peer-to-peer electronic cash system and has evolved to be viewed by some as a "digital gold" or store of value.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                            Limited supply (21 million)
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                            Proof of Work consensus
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                            Largest by market cap
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-amber-100 p-2 rounded-full">
                          <Globe className="w-6 h-6 text-amber-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Ethereum (ETH)</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          Launched in 2015, Ethereum introduced smart contracts — self-executing contracts with the terms directly written into code. 
                          This innovation enabled decentralized applications (dApps), DeFi protocols, and NFTs to be built on its platform.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                            Smart contract platform
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                            Shifted to Proof of Stake
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                            Programmable blockchain
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-amber-100 p-2 rounded-full">
                          <Lock className="w-6 h-6 text-amber-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Stablecoins (USDC, USDT, etc.)</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          Cryptocurrencies designed to minimize price volatility by being pegged to a stable asset like the U.S. dollar. 
                          They serve as a bridge between traditional finance and crypto markets, allowing users to maintain stable value 
                          without exiting the crypto ecosystem.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                            Price stability
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                            Fiat-backed or algorithmic
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                            Trading and settlement utility
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Investment Considerations</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-red-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2 text-red-700" />
                    Risks
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-red-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Extreme Volatility</h5>
                      <p className="text-sm text-gray-700">
                        Cryptocurrency prices can fluctuate wildly, with double-digit percentage swings in a single day. 
                        Historical drawdowns have seen major cryptocurrencies lose 70-90% of their value during bear markets.
                      </p>
                    </div>
                    <div className="bg-red-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Regulatory Uncertainty</h5>
                      <p className="text-sm text-gray-700">
                        Government regulations on cryptocurrencies are evolving and vary significantly by country. 
                        Regulatory changes can dramatically impact the market and specific cryptocurrencies.
                      </p>
                    </div>
                    <div className="bg-red-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Security Risks</h5>
                      <p className="text-sm text-gray-700">
                        While blockchain technology itself is secure, exchanges, wallets, and smart contracts can be vulnerable 
                        to hacks, exploits, or user error. Lost private keys mean permanently lost assets.
                      </p>
                    </div>
                    <div className="bg-red-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Project Failure</h5>
                      <p className="text-sm text-gray-700">
                        Many cryptocurrency projects fail due to technical challenges, competition, management issues, or simply 
                        being scams. Even well-intentioned projects can go to zero.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-green-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-green-700" />
                    Responsible Approach
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Position Sizing</h5>
                      <p className="text-sm text-gray-700">
                        Most financial advisors suggest limiting cryptocurrency exposure to a small percentage of your overall portfolio 
                        (often 1-5%) that you can afford to lose entirely.
                      </p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Research Thoroughly</h5>
                      <p className="text-sm text-gray-700">
                        Before investing, understand the fundamental purpose, technology, team, and competitive advantage of any cryptocurrency. 
                        Read whitepapers, review code repositories, and examine tokenomics.
                      </p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Security Best Practices</h5>
                      <p className="text-sm text-gray-700">
                        Use reputable exchanges with strong security measures. Consider hardware wallets for long-term storage 
                        of significant holdings, and never share private keys or seed phrases.
                      </p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Tax Implications</h5>
                      <p className="text-sm text-gray-700">
                        Understand that cryptocurrency transactions may be taxable events. Keep detailed records and consider 
                        consulting with a tax professional familiar with digital asset taxation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Getting Started</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-indigo-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-indigo-700" />
                  Entry Points
                </h4>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Direct Investment Options:</h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Cryptocurrency exchanges (Coinbase, Kraken, etc.)</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Brokerage accounts that offer crypto trading</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Decentralized exchanges (requires more expertise)</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Regular periodic purchases (dollar-cost averaging)</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Indirect Exposure:</h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Crypto ETFs and trusts (GBTC, ETHE, etc.)</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Blockchain-related company stocks</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Mutual funds with crypto industry exposure</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Venture capital funds focused on blockchain</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Education Resources</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-blue-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-blue-700" />
                  Continued Learning
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Before Investing</h5>
                    <p className="text-sm text-gray-700">
                      Cryptocurrencies represent a complex, emerging asset class with distinctive characteristics compared to traditional investments. 
                      Before committing funds, consider:
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                        <span>Reading project whitepapers and documentation</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                        <span>Following respected analysts and researchers</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                        <span>Understanding blockchain fundamentals</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                        <span>Learning about security best practices</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Stay Informed About</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1 mt-2">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                        <span>Regulatory developments</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                        <span>Technical upgrades and changes</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                        <span>Security vulnerabilities</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                        <span>Market sentiment and trends</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                        <span>Project fundamentals</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                        <span>Broader economic conditions</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 py-4 px-5 bg-red-50 rounded-lg border border-red-100 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-700 text-sm">
                  This content is educational in nature and updated as of June 2024. Cryptocurrency markets move quickly and information 
                  may become outdated. We aim to relay factual information without making specific investment recommendations. 
                  Investing in cryptocurrencies carries significant risk, including the potential loss of principal. For complete 
                  information about our services, please review our 
                  <Link href="/terms" className="text-blue-600 hover:underline"> Terms of Service</Link>.
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

export default CryptoInvestingBasics; 