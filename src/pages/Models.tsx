import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { useMemo } from 'react';
import { Crown, Sparkles } from 'lucide-react';
import betaModels from '../utility/models/betaModels.json';
import ProviderDropdown from '../models/ProviderDropdown';
import ModelCard from '../models/ModelCard';
import ModelInfoModal from '../models/ModelInfoModal';


function Models() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState<{
    name: string;
    provider: string;
    isPro: boolean;
    isBeta: boolean;
    isImage?: boolean;
  } | null>(null);

  const providers = useMemo(() => 
    Array.from(new Set([
      ...betaModels.map(getProviderFromModel)
    ])).sort()
  , []);

  const isImageModel = (model: string) => model.includes("fp-");

  const filterModels = (models: string[]) => {
    if (!searchTerm && !selectedProvider) return models;
    
    return models.filter(model => {
      const normalizedModel = model.toLowerCase();
      const normalizedSearch = searchTerm.toLowerCase().trim();
      const searchWords = normalizedSearch.split(/\s+/).filter(word => word.length > 0);
      const matchesSearch = searchWords.length === 0 || 
        searchWords.every(word => normalizedModel.includes(word));
      const matchesProvider = !selectedProvider || 
        getProviderFromModel(model) === selectedProvider;
      return matchesSearch && matchesProvider;
    });
  };

  const filteredBetaModels = useMemo(() => 
    filterModels(betaModels)
  , [searchTerm, selectedProvider]);

  const betaImageModels = useMemo(() => 
    filteredBetaModels.filter(model => isImageModel(model))
  , [filteredBetaModels]);

  const noResults =
    filteredBetaModels.length === 0 && 
    filteredPaidModels.premium.length === 0 && 
    filteredPaidModels.standard.length === 0;

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Available Models</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Access a wide range of state-of-the-art AI models
          </p>

          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-4 mb-12">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search models..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* No Results Message */}
          {noResults && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                No models found matching your search criteria
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedProvider(null);
                }}
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>

        {/* Beta Tier Section */}
        {filteredBetaModels.length > 0 && (
          <div className="mb-16 relative">
            <div className="pt-6 pb-4 mb-8">
              <h2 className="text-3xl font-bold text-yellow-800 dark:text-yellow-400">Stable API</h2>
              <div className="flex items-center gap-2 mt-2">
                <span className="px-3 py-1 text-sm font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400 rounded-full">
                  {filteredBetaModels.length} models
                </span>
                <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 rounded-full">
                  Get Free 1000 Tokens
                </span>
              </div>
            </div>

            {betaImageModels.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-400 mb-4">
                  Image Generation Models ({betaImageModels.length})
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                  {betaImageModels.map((model: string) => (
                    <ModelCard 
                      key={model} 
                      model={model} 
                      isPro={false} 
                      isBeta={true} 
                      provider={getProviderFromModel(model)}
                      onClick={() => setSelectedModel({
                        name: model,
                        provider: getProviderFromModel(model),
                        isPro: false,
                        isBeta: true,
                        isImage: true
                      })}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Modal */}
        {selectedModel && (
          <ModelInfoModal
            model={selectedModel.name}
            provider={selectedModel.provider}
            isPro={selectedModel.isPro}
            isBeta={selectedModel.isBeta}
            isImage={selectedModel.isImage}
            onClose={() => setSelectedModel(null)}
          />
        )}
      </div>
    </div>
  );
}

export default Models;
