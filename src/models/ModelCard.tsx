
import React, { useState } from 'react';
import { Gauge, Brain, Workflow, Rocket, Star, Zap, Image, ChevronDown, Sparkles } from 'lucide-react';

interface ModelCardProps {
  model: string;
  id: string;
  isPro: boolean;
  isNormal: boolean;
  isPremium?: boolean;
  tokens: number;
  onClick: () => void;
}

const ModelCard: React.FC<ModelCardProps> = ({ model, isPro, isNormal, isPremium = false, id, tokens, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const modelName = model.split('/').pop() || model;
  const isImageModel = model.includes("flux-");
  const RPM  = isPro ? 'Unlimited' : isNormal ? '10 RPM' : '3 RPM';
  const priority = isPro ? 'High' : isNormal ? 'Medium' : 'Normal';

  const features =[
        {
          name: 'RPM',
          value: RPM,
          icon: <Gauge className="w-3.5 h-3.5" />
        },
        {
          name: 'Tokens',
          value: tokens,
          icon: <Brain className="w-3.5 h-3.5" />
        },
        {
          name: 'Priority',
          value: priority,
          icon: <Workflow className="w-3.5 h-3.5" />
        }
      ];

  // Get tier-specific styling
  const getTierStyles = () => {
    if (isPro && isPremium) {
      return {
        wrapper: "before:absolute before:inset-0 before:rounded-xl before:p-[2px] before:bg-gradient-premium before:animate-border-shine before:content-['']",
        gradientHeader: "bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20",
        borderColor: "border-transparent",
        hoverBorderColor: "group-hover:border-transparent",
        shadowColor: "shadow-premium-glow",
        iconBg: "bg-gradient-premium",
        iconColor: "text-white",
        badgeBg: "bg-gradient-premium",
        badgeText: "text-white",
        featureIconColor: "text-indigo-600 dark:text-indigo-400",
        accentColor: "bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20",
        cardBg: "bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm" // Semi-transparent background
      };
    } else if (isNormal) {
      return {
        gradientHeader: "bg-gradient-to-r from-yellow-100 to-amber-200 dark:from-yellow-900/40 dark:to-amber-800/40",
        borderColor: "border-yellow-300 dark:border-yellow-700",
        hoverBorderColor: "group-hover:border-yellow-400 dark:group-hover:border-yellow-600",
        shadowColor: "group-hover:shadow-yellow-200/50 dark:group-hover:shadow-yellow-900/30",
        iconBg: "bg-yellow-100 dark:bg-yellow-900/30",
        iconColor: "text-yellow-700 dark:text-yellow-400",
        badgeBg: "bg-yellow-100 dark:bg-yellow-900/40",
        badgeText: "text-yellow-800 dark:text-yellow-400",
        featureIconColor: "text-yellow-600 dark:text-yellow-400",
        accentColor: "bg-yellow-50 dark:bg-yellow-900/20"
      };
    } else if (isPro) {
      return {
        gradientHeader: "bg-gradient-to-r from-purple-100 to-indigo-200 dark:from-purple-900/40 dark:to-indigo-800/40",
        borderColor: "border-purple-300 dark:border-purple-700",
        hoverBorderColor: "group-hover:border-purple-400 dark:group-hover:border-purple-600",
        shadowColor: "group-hover:shadow-purple-200/50 dark:group-hover:shadow-purple-900/30",
        iconBg: "bg-purple-100 dark:bg-purple-900/30",
        iconColor: "text-purple-700 dark:text-purple-400",
        badgeBg: "bg-purple-100 dark:bg-purple-900/40",
        badgeText: "text-purple-800 dark:text-purple-400",
        featureIconColor: "text-purple-600 dark:text-purple-400",
        accentColor: "bg-purple-50 dark:bg-purple-900/20"
      };
    } else {
      return {
        gradientHeader: "bg-gradient-to-r from-green-100 to-emerald-200 dark:from-green-900/40 dark:to-emerald-800/40",
        borderColor: "border-green-300 dark:border-green-700",
        hoverBorderColor: "group-hover:border-green-400 dark:group-hover:border-green-600",
        shadowColor: "group-hover:shadow-green-200/50 dark:group-hover:shadow-green-900/30",
        iconBg: "bg-green-100 dark:bg-green-900/30",
        iconColor: "text-green-700 dark:text-green-400",
        badgeBg: "bg-green-100 dark:bg-green-900/40",
        badgeText: "text-green-800 dark:text-green-400",
        featureIconColor: "text-green-600 dark:text-green-400",
        accentColor: "bg-green-50 dark:bg-green-900/20"
      };
    }
  };

  const styles = getTierStyles();

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative w-full text-left rounded-xl overflow-hidden 
        transition-all duration-300 transform hover:-translate-y-1 
        shadow-sm hover:shadow-xl ${styles.wrapper}`}
    >
      <div className={`relative w-full h-full ${styles.cardBg}`}>
        {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
        <div className={`absolute transform rotate-45 translate-x-4 -translate-y-1 w-16 h-3 ${
          isNormal ? 'bg-yellow-300 dark:bg-yellow-700' : 
          isPro ? 'bg-purple-300 dark:bg-purple-700' : 
          'bg-green-300 dark:bg-green-700'
        }`}></div>
      </div>
      {/* Header with gradient */}
      <div className={`${styles.gradientHeader} px-3 pt-3 pb-2 mb-1`}>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <div className={`p-1.5 rounded-md ${styles.iconBg} ${styles.iconColor} shadow-sm`}>
              {isNormal ? <Rocket className="w-4 h-4" /> : isPro ? <Star className="w-4 h-4" /> : <Zap className="w-4 h-4" />}
            </div>
            <div className="min-w-0">
              <h3 className="font-semibold text-sm truncate" title={modelName}>
                {modelName}
              </h3>
              <div className="flex items-center gap-1">
                <p className="text-xs text-gray-600 dark:text-gray-400 truncate">
                  {id}
                </p>
                {isImageModel && (
                  <span className="inline-flex items-center">
                    <Image className="w-3 h-3 text-gray-500 dark:text-gray-400" />
                  </span>
                )}
              </div>
            </div>
          </div>
          {/* Badge with sparkling effect for premium models */}
          <div className={`${isPro && isPremium ? 'relative overflow-hidden' : ''}`}>
            <div className={`px-2 py-0.5 text-[10px] font-semibold rounded-full ${styles.badgeBg} ${styles.badgeText} shadow-sm`}>
              {isNormal ? 'Normal' : isPro ? 'Pro' : 'Free'}
            </div>
            {isPro && isPremium && (
              <>
                <div className="absolute inset-0 bg-gradient-shine opacity-50 animate-shimmer bg-[length:200%_100%]"></div>
                <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-yellow-400 animate-pulse" />
              </>
            )}
          </div>
        </div>
      </div>

      {/* Content area with shadow separation */}
      <div className="px-3 pb-3 pt-1">
        {/* Model type indicator */}
        {isImageModel && (
          <div className="mb-2 flex items-center gap-1.5">
            <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium ${styles.accentColor}`}>
              <Image className="w-3 h-3" />
              <span>Image Generation</span>
            </div>
          </div>
        )}

        {/* Features with enhanced styling */}
        <div className="grid grid-cols-3 gap-2">
          {features.map((feature, index) => (
            <div key={index} 
              className={`flex flex-col items-center justify-center text-center p-2 rounded-lg 
                bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700
                shadow-sm transition-all duration-200 group-hover:shadow group-hover:-translate-y-0.5`}
            >
              <div className={`mb-1 ${styles.featureIconColor}`}>
                {feature.icon}
              </div>
              <span className="text-[10px] font-medium text-gray-700 dark:text-gray-300">
                {feature.name}
              </span>
              <span className="text-[10px] font-semibold text-gray-900 dark:text-gray-100">
                {feature.value}
              </span>
            </div>
          ))}
        </div>

        {/* Visual indicator for clickable expansion */}
        <div className="mt-2 flex justify-center">
          <div className={`text-gray-400 dark:text-gray-500 transition-transform duration-300 ${isHovered ? 'transform translate-y-0.5' : ''}`}>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
        </div>
      </div>
    </button>
  );
};

export default ModelCard;
