import { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { useMemo } from 'react';
import ModelCard from '../models/ModelCard';
import ModelInfoModal from '../models/ModelInfoModal';
import { fetchModels, ModelData } from '../services/modelService';

function Models() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null);
  const [models, setModels] = useState<ModelData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState<{
    name: string;
    id: string;
    provider: string;
    isPro: boolean;
    isNormal: boolean;
    isImage?: boolean;
    tokens: number;
  } | null>(null);

  useEffect(() => {
    const loadModels = async () => {
      try {
        setLoading(true);
        const modelData = await fetchModels();
        setModels(modelData);
      } catch (err) {
        setError('Failed to load models. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadModels();
  }, []);

  const filterModels = (models: ModelData[]) => {
    if (!searchTerm && !selectedProvider) return models;

    return models.filter(model => {
      const normalizedModel = model.name.toLowerCase();
      const normalizedSearch = searchTerm.toLowerCase().trim();
      const searchWords = normalizedSearch.split(/\s+/).filter(word => word.length > 0);
      const matchesSearch = searchWords.length === 0 ||
        searchWords.every(word => normalizedModel.includes(word));
      const matchesProvider = !selectedProvider;
      return matchesSearch && matchesProvider;
    });
  };

  const filteredModels = useMemo(() =>
    filterModels(models)
    , [models, searchTerm, selectedProvider]);

  const imageModels = useMemo(() =>
    filteredModels.filter(model => model.type === 'img')
    , [filteredModels]);

  const textModels = useMemo(() =>
    filteredModels.filter(model => model.type === 'text')
    , [filteredModels]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-white mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading models...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-red-600 dark:text-red-400 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  const noResults = filteredModels.length === 0;

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

        {textModels.length > 0 && (
          <div className="mb-16 relative">
            <div className="pt-6 pb-4 mb-8">
              <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-400">Text Models</h2>
              <div className="flex items-center gap-2 mt-2">
                <span className="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 rounded-full">
                  {textModels.length} models
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
              {textModels.map((model) => {
                let isPro = model.access === 'premium';
                let isNormal = model.access === 'normal';
                const id = model.id

                return (
                  <ModelCard
                    key={model.name}
                    model={model.name}
                    id={model.id}
                    isPro={isPro}
                    isNormal={isNormal}
                    tokens={model.tokens}
                    onClick={() => setSelectedModel({
                      name: model.name,
                      id: id,
                      provider: "Stable API",
                      isPro: isPro,
                      isNormal: isNormal,
                      isImage: false,
                      tokens: model.tokens
                    })}
                  />
                );
              })}
            </div>
          </div>
        )}

        {/* Models Section */}
        {imageModels.length > 0 && (
          <div className="mb-16 relative">
            <div className="pt-6 pb-4 mb-8">
              <h2 className="text-3xl font-bold text-yellow-800 dark:text-yellow-400">Image Models</h2>
              <div className="flex items-center gap-2 mt-2">
                <span className="px-3 py-1 text-sm font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400 rounded-full">
                  {imageModels.length} models
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
              {imageModels.map((model) => {
                let isPro = model.access === 'premium';
                let isNormal = model.access === 'normal';
                const id = model.id

                return (
                  <ModelCard
                    key={model.name}
                    model={model.name}
                    id={model.id}
                    isPro={isPro}
                    isNormal={isNormal}
                    tokens={model.tokens}
                    onClick={() => setSelectedModel({
                      name: model.name,
                      id: id,
                      provider: "Stable API",
                      isPro: isPro,
                      isNormal: isNormal,
                      isImage: true,
                      tokens: model.tokens
                    })}
                  />
                );
              })}
            </div>
          </div>
        )}

        {/* Modal */}
        {selectedModel && (
          <ModelInfoModal
            model={selectedModel.name}
            id={selectedModel.id}
            provider={selectedModel.provider}
            isPro={selectedModel.isPro}
            isNormal={selectedModel.isNormal}
            isImage={selectedModel.isImage}
            tokens={selectedModel.tokens}
            onClose={() => setSelectedModel(null)}
          />
        )}
      </div>
    </div>
  );
}

export default Models;
