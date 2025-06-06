
import { Shield, AlertCircle, Check, ExternalLink } from 'lucide-react';
import { useEffect } from 'react';

function Terms() {
  useEffect(() => {
    // Handle hash navigation on component mount and hash changes
    const scrollToSection = () => {
      const hash = window.location.hash;
      if (hash) {
        // Add a small delay to ensure the element is mounted
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            // Add offset for fixed headers if needed
            const offset = 80; // Adjust this value based on your header height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    };

    // Scroll on initial load if hash exists
    scrollToSection();

    // Listen for hash changes
    window.addEventListener('hashchange', scrollToSection);

    // Listen for router navigation completion if using React Router
    const handleRouteChange = () => {
      if (window.location.hash) {
        scrollToSection();
      }
    };
    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('hashchange', scrollToSection);
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            <span>Last updated: March 15, 2024</span>
          </div>
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Terms & Conditions
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Please read these terms carefully before using our service
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* Agreement Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-6">1. Agreement to Terms</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                By accessing or using Sree.shop's API services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access the service.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                <p className="text-sm">
                  Our service is provided "as is" and "as available" without any warranty of any kind.
                </p>
              </div>
            </div>
          </div>

          {/* Usage Guidelines */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-6">2. Usage Guidelines</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-green-100 dark:bg-green-900/30">
                  <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">API Key Usage</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Your API key is personal and should not be shared. You are responsible for all activity under your key.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-green-100 dark:bg-green-900/30">
                  <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Content Guidelines</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Users must not use the API for illegal, harmful, or abusive purposes. We reserve the right to suspend access for violations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Service Modifications */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-6">3. Service Modifications</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                We reserve the right to modify or discontinue our service at any time without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the service.
              </p>
              <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                <p className="text-sm text-amber-800 dark:text-amber-400">
                  While we strive for 100% uptime, we do not guarantee uninterrupted service. Please implement appropriate error handling in your applications.
                </p>
              </div>
            </div>
          </div>

          {/* Premium Services */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-6">4. Premium Services</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                Our Pro tier offers enhanced features including unlimited requests (subject to fair usage), priority support, and access to additional models. Subscription fees are non-refundable except where required by law.
              </p>
              <div className="bg-soft-purple dark:bg-purple-900/30 rounded-xl p-4">
                <p className="text-sm text-purple-800 dark:text-purple-400">
                  Payments are processed securely. Your subscription will automatically renew unless canceled before the renewal date.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terms;
