import React from 'react';
import Link from 'next/link';
import { Shield, BookOpen, FileText, AlertTriangle, Code, Copyright, FileCheck, Scale, File, Gavel } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

function TermsOfServicePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Terms of Service & EULA' }
            ]} />
            <h1 className="text-3xl font-bold text-gray-900 mt-2">Terms of Service & End User License Agreement</h1>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8 border-b border-gray-200">
              <div className="flex items-center mb-6">
                <Shield className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Budget Sidekick Terms of Service & EULA</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Last Updated: March 2025
              </p>
              <p className="text-gray-700 mb-6">
                Please read these Terms of Service and End User License Agreement ("Agreement") carefully before using Budget Sidekick. This Agreement constitutes a legally binding contract between you and Primordial Software regarding your use of the Budget Sidekick software and services. By accessing or using our service, you agree to be bound by these terms.
              </p>
              
              <div className="space-y-8">
                <section>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                    <File className="w-5 h-5 text-blue-600 mr-2" />
                    End User License Agreement (EULA)
                  </h3>
                  <div className="pl-7 space-y-4">
                    <p className="text-gray-700">
                      This End User License Agreement ("EULA") is a legal agreement between you (either an individual or a single entity) and Primordial Software ("Licensor") for the Budget Sidekick software product, which includes computer software and may include associated media, printed materials, and "online" or electronic documentation ("Software").
                    </p>
                    
                    <div className="bg-gray-50 p-6 rounded-md border border-gray-200 text-sm text-gray-800 space-y-4">
                      <div>
                        <h4 className="font-semibold">1. GRANT OF LICENSE</h4>
                        <p>Licensor grants you a non-exclusive, non-transferable license to use the Software. You may install and use the Software on your devices for your personal or business use.</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold">2. COPYRIGHT</h4>
                        <p>The Software is protected by copyright laws and international copyright treaties, as well as other intellectual property laws and treaties. Primordial Software retains all rights, title, and interest in the Software. You acknowledge that no title to the intellectual property in the Software is transferred to you.</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold">3. RESTRICTIONS</h4>
                        <p>You may not:</p>
                        <ol className="list-alpha pl-5 space-y-1">
                          <li>Reverse engineer, decompile, or disassemble the Software</li>
                          <li>Rent, lease, lend, sell, redistribute, sublicense or transfer the Software</li>
                          <li>Modify, adapt, or create derivative works based on the Software</li>
                          <li>Remove any proprietary notices or labels on the Software</li>
                        </ol>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold">4. TERMINATION</h4>
                        <p>This Agreement is effective until terminated. Your rights under this Agreement will terminate automatically without notice if you fail to comply with any term of this Agreement. Upon termination, you shall cease all use of the Software and destroy all copies of the Software.</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold">5. USER RESPONSIBILITIES</h4>
                        <p>By using the Software, you acknowledge and agree that:</p>
                        <ol className="list-alpha pl-5 space-y-1">
                          <li>You are using the service to track and organize what you believe to be factual information</li>
                          <li>You are responsible for the accuracy of the data you enter into the system</li>
                          <li>You will consult with qualified professionals for financial, tax, or legal advice</li>
                          <li>You will not rely solely on the platform or educational resources for important financial decisions</li>
                        </ol>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold">6. DISCLAIMER OF WARRANTIES</h4>
                        <p className="uppercase">THE SOFTWARE IS PROVIDED "AS IS" AND THE LICENSOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE LICENSOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold">7. LIMITATION OF LIABILITY</h4>
                        <p className="uppercase">IN NO EVENT SHALL LICENSOR BE LIABLE FOR ANY DAMAGES (INCLUDING, WITHOUT LIMITATION, LOST PROFITS, BUSINESS INTERRUPTION, OR LOST INFORMATION) ARISING OUT OF THE USE OF OR INABILITY TO USE THE SOFTWARE, EVEN IF LICENSOR HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. IN NO EVENT WILL LICENSOR BE LIABLE FOR LOSS OF DATA OR FOR INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL (INCLUDING LOST PROFIT), OR OTHER DAMAGES BASED IN CONTRACT, TORT OR OTHERWISE.</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold">8. GOVERNING LAW</h4>
                        <p>This Agreement shall be governed by the laws of the jurisdiction in which Primordial Software operates.</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold">9. ENTIRE AGREEMENT</h4>
                        <p>This Agreement constitutes the entire agreement between you and Licensor and supersedes any prior statements, representations, or agreements, whether oral or written.</p>
                      </div>
                      
                      <p className="font-semibold mt-4">BY INSTALLING, COPYING, OR OTHERWISE USING THE SOFTWARE, YOU AGREE TO BE BOUND BY THE TERMS OF THIS AGREEMENT.</p>
                      
                      <p>Copyright 2019 Primordial Software</p>
                    </div>
                  </div>
                </section>
                
                <section>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                    <Copyright className="w-5 h-5 text-blue-600 mr-2" />
                    Ownership and License
                  </h3>
                  <div className="pl-7 space-y-4">
                    <p className="text-gray-700">
                      Budget Sidekick is owned and operated by Primordial Software. The software, code, design, functionality, content, and all intellectual property rights therein are the exclusive property of Primordial Software. All rights not expressly granted herein are reserved.
                    </p>
                    <p className="text-gray-700">
                      Subject to your compliance with this Agreement, Primordial Software grants you a limited, non-exclusive, non-transferable, revocable license to use Budget Sidekick solely for your personal or business bookkeeping and financial management purposes. This license does not allow you to copy, modify, distribute, sell, lease, or otherwise transfer any rights in the software beyond what is explicitly permitted by applicable law or this Agreement.
                    </p>
                  </div>
                </section>
                
                <section>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                    <FileText className="w-5 h-5 text-blue-600 mr-2" />
                    Nature of Service
                  </h3>
                  <div className="pl-7 space-y-4">
                    <p className="text-gray-700">
                      Budget Sidekick is a bookkeeping and financial management software application that provides ledgers and financial reporting tools. Our service:
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                      <li>Provides tools for recording, organizing, and visualizing financial transactions</li>
                      <li>May integrate with banks or accounting systems through their APIs, following all applicable rules and requirements</li>
                      <li>Is not itself a financial institution, bank, or professional financial advisory service</li>
                      <li>Serves as bookkeeping software while leaving ultimate responsibility for data accuracy with users</li>
                      <li>Is provided by Primordial Software acting in its capacity as a software provider and bookkeeper</li>
                    </ul>
                    <p className="text-gray-700">
                      While we strive to provide reliable bookkeeping functionality, users remain responsible for ensuring their financial data is accurate, complete, and compliant with relevant regulations.
                    </p>
                  </div>
                </section>
                
                <section>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                    <FileCheck className="w-5 h-5 text-blue-600 mr-2" />
                    Bookkeeping Services
                  </h3>
                  <div className="pl-7 space-y-4">
                    <p className="text-gray-700">
                      Primordial Software, as the provider of Budget Sidekick, is legally authorized to operate as a bookkeeper and provide bookkeeping functionality through its software. We commit to:
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                      <li>Providing accurate calculation and reporting tools to the best of our ability</li>
                      <li>Acting in good faith when designing functionality for financial record-keeping</li>
                      <li>Implementing reasonable measures to ensure the accuracy of financial calculations</li>
                      <li>Making corrections to known software bugs that affect financial calculations in a timely manner</li>
                    </ul>
                    <p className="text-gray-700">
                      Our role as a bookkeeper through software is limited to providing the tools and functionality for users to maintain their financial records. We do not directly manage users' finances nor do we make financial decisions on behalf of users.
                    </p>
                  </div>
                </section>
                
                <section>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                    <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
                    Educational Content
                  </h3>
                  <div className="pl-7 space-y-4">
                    <p className="text-gray-700">
                      The educational resources provided on Budget Sidekick are protected under free speech laws as we exercise our right to relay what we believe to be accurate information. Our educational content:
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                      <li>Represents our good faith effort to relay factual financial information, similar to a newspaper reporting market data</li>
                      <li>May become outdated as regulations, best practices, or market conditions change</li>
                      <li>Should not be considered financial, investment, legal, or tax advice</li>
                      <li>Is provided "as is" without warranties of any kind</li>
                    </ul>
                  </div>
                </section>
                
                <section>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                    <AlertTriangle className="w-5 h-5 text-blue-600 mr-2" />
                    Disclaimers and Limitations
                  </h3>
                  <div className="pl-7 space-y-4">
                    <p className="text-gray-700">
                      Budget Sidekick expressly disclaims:
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                      <li>Any responsibility for financial decisions made based on information tracked or displayed in our system</li>
                      <li>Status as a financial institution, bank, or tax preparation service</li>
                      <li>Guarantee that our bookkeeping software will ensure compliance with all tax laws, accounting standards, or regulatory requirements</li>
                      <li>Any fiduciary relationship with users</li>
                      <li>Any warranty regarding the accuracy of information entered by users or obtained through third-party integrations</li>
                      <li>Any guarantee that the software will be error-free, uninterrupted, secure, or free of bugs or other harmful components</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                      While we provide bookkeeping software functionality, users are ultimately responsible for verifying the accuracy of information in their accounts and for compliance with all applicable laws and regulations.
                    </p>
                  </div>
                </section>
                
                <section>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                    <Scale className="w-5 h-5 text-blue-600 mr-2" />
                    Limitation of Liability and Indemnification
                  </h3>
                  <div className="pl-7 space-y-4">
                    <p className="text-gray-700">
                      To the maximum extent permitted by applicable law:
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                      <li>Primordial Software shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities, resulting from or related to your use of the service</li>
                      <li>Our total liability for any claims arising from or related to this Agreement shall not exceed the amount paid by you to Primordial Software (if any) for the service during the twelve (12) months preceding the claim</li>
                      <li>We are not liable for software bugs or errors that may result in inaccurate calculations, provided we act in good faith to address such issues when they are discovered</li>
                      <li>We are not liable for inaccurate information that we believed in good faith to be accurate when reported</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                      You agree to indemnify, defend, and hold harmless Primordial Software and its officers, directors, employees, agents, and affiliates from and against any claims, disputes, demands, liabilities, damages, losses, costs, and expenses, including, without limitation, reasonable legal and accounting fees arising out of or in any way connected with your access to or use of the service or your violation of this Agreement.
                    </p>
                  </div>
                </section>
                
                <section>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">User Responsibilities</h3>
                  <div className="pl-7">
                    <p className="text-gray-700 mb-3">
                      By using Budget Sidekick, you acknowledge and agree that:
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                      <li>You are using the service to track and organize what you believe to be factual information</li>
                      <li>You are responsible for the accuracy of the data you enter into the system</li>
                      <li>You will consult with qualified professionals for financial, tax, or legal advice</li>
                      <li>You acknowledge that software may contain bugs or errors and that the service is provided "as is" without warranties of any kind beyond what's applicable by law</li>
                      <li>You will not rely solely on our platform or educational resources for important financial decisions</li>
                      <li>You will comply with all applicable laws and regulations when using our service</li>
                      <li>You will not use the service for any illegal, harmful, or fraudulent activities</li>
                    </ul>
                  </div>
                </section>
                
                <section>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                    <Code className="w-5 h-5 text-blue-600 mr-2" />
                    Open Source Code and Design License
                  </h3>
                  <div className="pl-7 space-y-4">
                    <p className="text-gray-700">
                      Budget Sidekick's source code is made available under a dual licensing structure:
                    </p>
                    
                    <div className="bg-gray-50 p-4 rounded-md border border-gray-200 text-sm text-gray-800">
                      <h4 className="font-semibold mb-2">Functional Code License:</h4>
                      <p className="mb-3">
                        The functional source code of Budget Sidekick (excluding user interface design elements, branding, visual assets, color schemes, and layout arrangements) is licensed under the MIT License:
                      </p>
                      
                      <div className="whitespace-pre-line font-mono text-xs bg-gray-100 p-3 rounded border border-gray-300 mb-4">
                        Copyright 2019 Primordial Software
                        
                        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
                        
                        The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
                        
                        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                      </div>
                      
                      <h4 className="font-semibold mb-2">Visual Design and UI Elements License:</h4>
                      <p className="mb-3">
                        The visual design elements, including but not limited to the user interface, branding, visual assets, color schemes, layout arrangements, and overall look and feel of Budget Sidekick are licensed under the Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License (CC BY-NC-ND 4.0).
                      </p>
                      
                      <p className="mb-3">
                        Under this license, you may:
                      </p>
                      <ul className="list-disc pl-5 mb-3">
                        <li>Share — copy and redistribute the design elements in any medium or format</li>
                      </ul>
                      
                      <p className="mb-3">
                        Under the following terms:
                      </p>
                      <ul className="list-disc pl-5 mb-3">
                        <li>Attribution — You must give appropriate credit to Primordial Software, provide a link to the license, and indicate if changes were made.</li>
                        <li>NonCommercial — You may not use the design elements for commercial purposes.</li>
                        <li>NoDerivatives — If you remix, transform, or build upon the design elements, you may not distribute the modified material.</li>
                      </ul>
                      
                      <p>
                        For the full text of this license, please visit: <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode</a>
                      </p>
                    </div>
                    
                    <p className="text-gray-700">
                      This dual licensing approach allows developers to freely use, modify, and build upon the functional code while protecting Primordial Software's visual design and branding elements. Any derivative works must maintain visual distinction from the original Budget Sidekick interface.
                    </p>
                    
                    <p className="text-gray-700">
                      To create derivative works with substantially different visual designs while using our functional code, you must:
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                      <li>Create your own unique visual design, layout, color scheme, and UI elements</li>
                      <li>Not copy or closely mimic Budget Sidekick's distinctive visual appearance</li>
                      <li>Include the original copyright notice and MIT license in any redistribution of the functional code</li>
                      <li>Clearly distinguish your product from Budget Sidekick to avoid user confusion</li>
                    </ul>
                  </div>
                </section>
                
                <section>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                    <Gavel className="w-5 h-5 text-blue-600 mr-2" />
                    Governing Law
                  </h3>
                  <div className="pl-7 space-y-4">
                    <p className="text-gray-700">
                      This Agreement shall be governed by the laws of the jurisdiction in which Primordial Software operates, without regard to its conflict of law provisions. Any dispute arising from or relating to this Agreement shall be subject to the exclusive jurisdiction of the courts in that jurisdiction.
                    </p>
                  </div>
                </section>
              </div>
            </div>
            
            <div className="p-6 bg-gray-50">
              <p className="text-gray-700 text-sm">
                For questions about these Terms of Service & EULA, please contact us at <a href="mailto:support@primordial-software.com" className="text-blue-600 hover:underline">support@primordial-software.com</a>.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default TermsOfServicePage;