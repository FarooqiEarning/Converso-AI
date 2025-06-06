import React, { useState, useEffect } from 'react';
import {  MessageCircle, Instagram, ArrowUpRight, Crown, X } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'social' | 'premium'>('social');
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Trigger animations after modal is visible
      const timer = setTimeout(() => setAnimateIn(true), 50);
      return () => clearTimeout(timer);
    } else {
      setAnimateIn(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <MessageCircle className="w-5 h-5" />,
      href: 'https://api.whatsapp.com/send?phone=923164525711',
      bgColor: 'bg-[#0A66C2]',
      textColor: 'text-white',
      priority: 'First Most Active',
      description: 'Quick responses'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-5 h-5" />,
      href: 'https://www.instagram.com/muhammadgohar_official',
      bgColor: 'bg-gradient-to-br from-purple-600 to-pink-500',
      textColor: 'text-white',
      priority: 'Second Most Active',
      description: 'Regular updates'
    }
  ];

  // Premium benefits for the premium tab
  const premiumBenefits = [
    {
      title: "Priority Support",
      description: "Get your questions answered within 24 hours by our dedicated team",
      icon: "🔥"
    },
    {
      title: "Advanced Features",
      description: "Access to cutting-edge AI models and extended context windows",
      icon: "⚡"
    },
    {
      title: "Unlimited Requests",
      description: "No rate limits under our fair use policy for enterprise needs",
      icon: "♾️"
    },
    {
      title: "Custom Integration",
      description: "Personalized API setup and dedicated technical account manager",
      icon: "🛠️"
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
      {/* Modal Card with subtle animation */}
      <div 
        className={`bg-white dark:bg-gray-800 rounded-2xl w-full max-w-lg shadow-2xl transform ${
          animateIn ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        } transition-all duration-300 ease-out overflow-hidden max-h-[90vh] flex flex-col`}
      >
        {/* Decorative top border */}
        <div className="h-1.5 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600"></div>
        
        {/* Header with premium styling */}
        <div className="relative p-8">
          <button
            onClick={onClose}
            className="absolute right-6 top-6 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center space-x-3 mb-2">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center shadow-lg">
              <Crown className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                Premium Connect
              </h2>
            </div>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 mt-2 max-w-md">
            Thank you for your interest in our premium services. Connect with us through your preferred channel below.
          </p>
          
          {/* Tab Navigation */}
          <div className="flex mt-6 p-1 bg-gray-100 dark:bg-gray-700/50 rounded-lg">
            <button
              onClick={() => setActiveTab('social')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                activeTab === 'social' 
                  ? 'bg-white dark:bg-gray-800 shadow-sm text-purple-600 dark:text-purple-400' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
              }`}
            >
              Social Connect
            </button>
            <button
              onClick={() => setActiveTab('premium')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                activeTab === 'premium' 
                  ? 'bg-white dark:bg-gray-800 shadow-sm text-purple-600 dark:text-purple-400' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
              }`}
            >
              Premium Benefits
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="px-8 pb-8 overflow-y-auto">
          {activeTab === 'social' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative overflow-hidden rounded-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:shadow-md ${
                    animateIn ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 75}ms` }}
                >
                  {/* Hover background effect */}
                  <div className={`absolute inset-0 ${link.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  <div className="relative p-4 group-hover:text-white transition-colors duration-300 z-10">
                    <div className="flex items-center gap-4">
                      <div className="p-2.5 rounded-lg bg-white dark:bg-gray-900 shadow-sm group-hover:bg-white/20 transition-colors duration-300">
                        <div className={`${link.textColor} group-hover:text-white transition-colors duration-300`}>
                          {link.icon}
                        </div>
                      </div>
                      <div>
                        <div className="font-medium flex items-center gap-1">
                          {link.name}
                          <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 group-hover:text-white/80 transition-colors duration-300">{link.priority}</div>
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 group-hover:text-white/80 transition-colors duration-300">{link.description}</p>
                  </div>
                </a>
              ))}
            </div>
          )}

          {activeTab === 'premium' && (
            <div className={`space-y-4 ${animateIn ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} transition-all duration-300 delay-75`}>
              {/* Premium intro */}
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl p-3 border border-purple-100 dark:border-purple-800/30">
                <h3 className="text-base font-medium text-purple-800 dark:text-purple-300 mb-1">
                  Unlock Premium Advantages
                </h3>
                <p className="text-xs text-purple-700/80 dark:text-purple-400/80">
                  Enterprise-grade reliability and support at a fraction of the cost.
                </p>
              </div>
              
              {/* Benefits list - more compact */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {premiumBenefits.map((benefit, index) => (
                  <div 
                    key={benefit.title}
                    className="p-3 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800/50 shadow-sm hover:shadow-md transition-all duration-300"
                    style={{ transitionDelay: `${(index + 1) * 75}ms` }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{benefit.icon}</span>
                      <h4 className="font-medium text-sm">{benefit.title}</h4>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
