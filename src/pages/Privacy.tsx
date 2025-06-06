import React, { useState } from 'react';
import { Shield, Lock, Eye, FileText, Server, Users, HelpCircle, ChevronDown, Github, Youtube, Linkedin, Instagram } from 'lucide-react';

// Define types for FAQ items
interface FAQItem {
  question: string;
  answer: string;
}

function Privacy() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <div className="min-h-screen py-16 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto relative">
        {/* Animated background elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 -left-20 w-72 h-72 bg-indigo-500/10 dark:bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-0 w-80 h-80 bg-purple-500/10 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        
        {/* Hero Section */}
        <div className="text-center mb-16 relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6 shadow-lg">
            <Shield className="w-4 h-4" />
            <span>Privacy Matters</span>
          </div>
          
          <h1 className="text-4xl font-bold mb-6 relative">
            <span className="bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-400 dark:from-blue-300 dark:via-indigo-200 dark:to-purple-200 bg-clip-text text-transparent">
              Your Privacy is Our Priority
            </span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We are committed to protecting your personal information and being transparent about our data practices.
          </p>
        </div>

        {/* Main content with card animations */}
        <div className="space-y-12">
          {/* Data Collection */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>
            <div className="absolute inset-0.5 bg-white dark:bg-gray-800 rounded-2xl z-10"></div>
            
            <div className="relative z-20">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
                  <Lock className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-300 dark:to-indigo-200 bg-clip-text text-transparent">
                  Data Collection
                </h2>
              </div>
              
              <div className="space-y-6 text-gray-600 dark:text-gray-400">
                <p className="leading-relaxed">
                  We collect minimal data necessary to provide and improve our services. This includes:
                </p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-5 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                    <h3 className="font-semibold mb-2 text-blue-700 dark:text-blue-400 flex items-center gap-2">
                      API Usage
                    </h3>
                    <p className="text-sm">
                      Information about API requests and token usage to ensure service quality.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-xl p-5 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                    <h3 className="font-semibold mb-2 text-indigo-700 dark:text-indigo-400 flex items-center gap-2">
                      Account Information
                    </h3>
                    <p className="text-sm">
                      Basic details needed to create and manage your account if you choose to register.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-5 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                    <h3 className="font-semibold mb-2 text-blue-700 dark:text-blue-400 flex items-center gap-2">
                      Communication Data
                    </h3>
                    <p className="text-sm">
                      Records of your interactions with our support team to provide better assistance.
                    </p>
                  </div>
                </div>
                
                <p className="mt-4">
                  We do not collect any sensitive personal information without your explicit consent.
                </p>
              </div>
            </div>
          </div>

          {/* Data Usage */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>
            <div className="absolute inset-0.5 bg-white dark:bg-gray-800 rounded-2xl z-10"></div>
            
            <div className="relative z-20">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400">
                  <Eye className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-300 dark:to-purple-200 bg-clip-text text-transparent">
                  Data Usage
                </h2>
              </div>
              
              <div className="space-y-6 text-gray-600 dark:text-gray-400">
                <p className="leading-relaxed">
                  The data we collect is used for the following purposes:
                </p>
                
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-blue-500 z-10"></div>
                  
                  <div className="space-y-4 relative z-20 pl-10">
                    <div className="relative">
                      <div className="absolute -left-10 top-1 w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="font-medium">Providing and improving our services</p>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute -left-10 top-1 w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="font-medium">Personalizing your experience</p>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute -left-10 top-1 w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="font-medium">Analyzing usage patterns</p>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute -left-10 top-1 w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="font-medium">Communicating with you</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-5 mt-6 border-l-4 border-purple-500">
                  <p className="text-purple-800 dark:text-purple-300 font-medium">
                    We do not sell or share your personal information with third parties for marketing purposes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Your Rights Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>
            <div className="absolute inset-0.5 bg-white dark:bg-gray-800 rounded-2xl z-10"></div>

            <div className="relative z-20">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400">
                  <Users className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-blue-500 dark:from-indigo-300 dark:to-blue-200 bg-clip-text text-transparent">
                  Your Rights
                </h2>
              </div>

              <div className="space-y-6 text-gray-600 dark:text-gray-400">
                <p className="leading-relaxed">
                  You have rights regarding your personal data, even though we barely collect any.
                </p>

                <div className="space-y-4 relative z-20 pl-10">
                  <div className="relative">
                    <p className="font-medium">Access: You can ask us what little data we have on you. We'll probably be surprised too.</p>
                  </div>

                  <div className="relative">
                    <p className="font-medium">Correction: If something's inaccurate, let us know. Though, again, what data?</p>
                  </div>

                  <div className="relative">
                    <p className="font-medium">Deletion: Want us to delete your data? Sure, if we can find it.</p>
                  </div>
                </div>

                <p className="mt-4">
                  To exercise these rights, contact us. We promise to act on it, or at least look into it, maybe.
                </p>
              </div>
            </div>
          </div>

          {/* Cookies & Tracking Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>
            <div className="absolute inset-0.5 bg-white dark:bg-gray-800 rounded-2xl z-10"></div>

            <div className="relative z-20">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
                  <Eye className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Cookies & Tracking
                </h2>
              </div>

              <div className="space-y-6 text-gray-600 dark:text-gray-400">
                <p className="leading-relaxed">
                  Do we use cookies? Maybe. Do we track you? Only to improve your experience... or because we got lost.
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <b>Essential Cookies:</b> For basic site functions. Like keeping the lights on.
                  </li>
                  <li>
                    <b>Analytics Cookies:</b> To see how you use the site. Mostly for our curiosity.
                  </li>
                  <li>
                    <b>Advertising Cookies:</b> Nope. We hate ads as much as you do.
                  </li>
                </ul>

                <p className="mt-4">
                  You can control cookies in your browser settings. If you turn them all off, the site might... still work? Give it a try!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Privacy;
