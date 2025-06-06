import React, { useState } from 'react';
import { 
  ChevronRight,
  ChevronDown,
  Search,
  BookOpen,
  Shield,
  Sparkles,
  X,
  Rocket,
  AlertCircle,
  Check,
  Zap,
  Image,
  Book,
  Lightbulb
} from 'lucide-react';
import CodeEditor from '../components/CodeEditor';

interface Section {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

interface Category {
  id: string;
  title: string;
  icon: React.ReactNode;
  sections: string[]; // Array of section IDs
}

interface CodeExample {
  python: string;
  javascript: string;
  curl: string;
}

function Documentation() {
  const [activeSection, setActiveSection] = useState('quickstart');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    'getting-started': true,
    'core-api': true,
    'advanced-features': true
  });
  const [selectedLanguage, setSelectedLanguage] = useState<'python' | 'javascript' | 'curl'>('python');

  const codeExamples: Record<string, CodeExample> = {
    imageGen: {
      python: `import requests

# Replace with your actual API key, prompt, and model
api_key = "<your_api_key>"
prompt = "<your_prompt>"
model = "<model>"

# API endpoint
url = "https://n8n.stylefort.store/webhook/Image-Gen"

# JSON payload
payload = {
    "key": api_key,
    "Prompt": prompt,
    "Model": model
}

# Make the POST request
try:
    response = requests.post(url, json=payload)
    response.raise_for_status()  # Raise an error for bad responses
    print("Response Status Code:", response.status_code)
    print("Response Body:", response.json())  # Assuming the API returns JSON
except requests.exceptions.RequestException as e:
    print("An error occurred:", e)
`,
      javascript: `// Replace with your actual API key, prompt, and model
const apiKey = "<your_api_key>";
const prompt = "<your_prompt>";
const model = "<model>";

const url = "https://n8n.stylefort.store/webhook/Image-Gen";

const payload = {
  key: apiKey,
  Prompt: prompt,
  Model: model
};

fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(payload)
})
  .then(response => {
    if (!response.ok) {
      throw new Error(\`HTTP error! Status: \${response.status}\`);
    }
    return response.json();
  })
  .then(data => {
    console.log("Response:", data);
  })
  .catch(error => {
    console.error("An error occurred:", error);
  });`,
      curl: `curl -X POST https://n8n.stylefort.store/webhook/Image-Gen \
  -H "Content-Type: application/json" \
  -d '{
    "key": "<your_api_key>",
    "Prompt": "<your_prompt>",
    "Model": "<model>"
  }'`
    }
  };

  const sections: Section[] = [
    {
      id: 'quickstart',
      title: 'Quick Start',
      icon: <Zap className="w-4 h-4" />,
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Start using our API in minutes. Follow these simple steps to integrate AI capabilities into your application.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="p-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30">
                <div className="w-4 h-4 text-blue-600 dark:text-blue-400 font-bold">1</div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Get your API key</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  Send '!api_key' on Converso AI Number At Whatsapp to generate your API key.
                </p>
                <a
                  href="https://api.whatsapp.com/send?phone=923444081558&text=!api_key"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium"
                >
                  Get Api key on WhatsApp
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30">
                <div className="w-4 h-4 text-blue-600 dark:text-blue-400 font-bold">3</div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-2">Make your first API call</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  Choose your preferred language and try this example:
                </p>
                
                <div className="flex gap-2 mb-4">
                  {(['python', 'javascript', 'curl'] as const).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setSelectedLanguage(lang)}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                        selectedLanguage === lang
                          ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300'
                          : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      {lang.charAt(0).toUpperCase() + lang.slice(1)}
                    </button>
                  ))}
                </div>

                <div className="relative">
                  <CodeEditor
                    language={selectedLanguage}
                    initialCode={codeExamples.imageGen[selectedLanguage]}
                    theme="dark"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'authentication',
      title: 'Authentication',
      icon: <Shield className="w-4 h-4" />,
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-4">Authentication</h2>
          <p className="text-gray-600 dark:text-gray-400">
            All API requests require authentication using your API key. We provide two types of API keys:
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-100 dark:border-blue-800">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h3 className="font-semibold">Stable API</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Production-ready API with stable models and reliable performance.
              </p>
              <div className="font-mono text-sm bg-white dark:bg-gray-900/50 p-2 rounded">
                mg-xxx
              </div>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border border-yellow-100 dark:border-yellow-800">
              <div className="flex items-center gap-3 mb-3">
                <Rocket className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                <h3 className="font-semibold">Beta API</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Access to latest models and features in beta testing.
              </p>
              <div className="font-mono text-sm bg-white dark:bg-gray-900/50 p-2 rounded">
                mg-beta-xxx
              </div>
            </div>
          </div>

          <div className="p-4 bg-amber-50 dark:bg-amber-900/30 rounded-xl mb-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5" />
              <div>
                <h3 className="font-semibold mb-1">Security Best Practices</h3>
                <ul className="text-sm text-amber-800 dark:text-amber-200 space-y-2">
                  <li>• Never expose your API key in client-side code</li>
                  <li>• Use environment variables for API key storage</li>
                  <li>• Rotate your API key if compromised</li>
                  <li>• Don't share your API key with others</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-semibold text-xl mb-4">Common Authentication Issues</h3>
            
            <div className="space-y-4">
              {/* Invalid API Key */}
              <div className="p-4 rounded-xl border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 mt-1" />
                  <div>
                    <h4 className="font-medium mb-2">Invalid API Key</h4>
                    <p className="text-sm text-red-600 dark:text-red-400 mb-2">
                      This error occurs when your API key is incorrect or expired.
                    </p>
                    <div className="bg-red-100 dark:bg-red-900/40 p-3 rounded text-sm font-mono text-red-700 dark:text-red-300">
                      {"Error: Invalid API key provided"}
                    </div>
                    <div className="mt-3 text-sm text-red-600 dark:text-red-400">
                      <strong>Solution:</strong> Double check your API key or generate a new one if needed.
                    </div>
                  </div>
                </div>
              </div>

              {/* Wrong API Base URL */}
              <div className="p-4 rounded-xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-1" />
                  <div>
                    <h4 className="font-medium mb-2">Incorrect Base URL</h4>
                    <p className="text-sm text-amber-600 dark:text-amber-400 mb-2">
                      This happens when using the wrong API endpoint (beta vs stable).
                    </p>
                    <div className="bg-amber-100 dark:bg-amber-900/40 p-3 rounded text-sm font-mono text-amber-700 dark:text-amber-300">
                      {"Error: Could not resolve host"}
                    </div>
                    <div className="mt-3 text-sm text-amber-600 dark:text-amber-400">
                      <strong>Solution:</strong> Verify you're using the correct base URL for your API key type.
                    </div>
                  </div>
                </div>
              </div>

              {/* Rate Limit */}
              <div className="p-4 rounded-xl border border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/20">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-1" />
                  <div>
                    <h4 className="font-medium mb-2">Rate Limit Exceeded</h4>
                    <p className="text-sm text-purple-600 dark:text-purple-400 mb-2">
                      You've exceeded the requests per minute (RPM) limit.
                    </p>
                    <div className="bg-purple-100 dark:bg-purple-900/40 p-3 rounded text-sm font-mono text-purple-700 dark:text-purple-300">
                      {"Error: Too many requests. Rate limit exceeded"}
                    </div>
                    <div className="mt-3 text-sm text-purple-600 dark:text-purple-400">
                      <strong>Solution:</strong> Implement rate limiting in your code or upgrade your plan.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 mt-8">
              <h3 className="font-semibold text-xl mb-4">Authentication Examples</h3>

              <div className="grid sm:grid-cols-2 gap-6">
                {/* Stable API */}
                <div className="space-y-4">
                  <h4 className="font-medium text-lg">Stable API</h4>
                  <CodeEditor
                    language={selectedLanguage}
                    initialCode={codeExamples.imageGen[selectedLanguage]}
                    theme="dark"
                  />
                </div>

                {/* Beta API */}
                <div className="space-y-4">
                  <h4 className="font-medium text-lg">Beta API</h4>
                  <CodeEditor
                    language={selectedLanguage}
                    initialCode='Comming Soon'
                    theme="dark"
                  />
                </div>
              </div>

              <div className="flex gap-2 justify-center">
                {(['python', 'javascript', 'curl'] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setSelectedLanguage(lang)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                      selectedLanguage === lang
                        ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    {lang.charAt(0).toUpperCase() + lang.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'image-generation',
      title: 'Image Generation',
      icon: <Image className="w-4 h-4" />,
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-4">Image Generation</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Generate high-quality images from text prompts using our image generation API.
          </p>

          <div className="space-y-6">
            <h3 className="font-semibold text-xl mb-4">Basic Usage</h3>
            
            <div className="flex gap-2 mb-4">
              {(['python', 'javascript', 'curl'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setSelectedLanguage(lang)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    selectedLanguage === lang
                      ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {lang.charAt(0).toUpperCase() + lang.slice(1)}
                </button>
              ))}
            </div>

            <CodeEditor
              language={selectedLanguage}
              initialCode={codeExamples.imageGen[selectedLanguage]}
              theme="dark"
            />
          </div>

          <div className="space-y-4 mt-8">
            <h3 className="font-semibold text-xl mb-4">API Reference</h3>
            
            <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
                    <Image className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Image Generations</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Generate images from text prompts</p>
                  </div>
                </div>
                <div className="text-sm font-mono bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded">
                  POST
                </div>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 px-4 py-2 rounded-lg mb-5 border-l-4 border-green-500 dark:border-green-400">
                <code className="block text-sm font-bold text-green-700 dark:text-green-300">
                  https://n8n.stylefort.store/webhook/Image-Gen
                </code>
              </div>
              
              <div className="space-y-2 mb-4">
                <h5 className="font-medium text-sm inline-flex items-center bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                  <span className="text-green-600 dark:text-green-400 mr-2">⚙️</span> 
                  Required Parameters
                </h5>
                <ul className="text-sm space-y-2 pl-4 border-l-2 border-gray-200 dark:border-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400">•</span>
                    <div>
                      <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">key</code>
                      <span className="text-gray-600 dark:text-gray-400 ml-2">The api key for generating images</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400">•</span>
                    <div>
                      <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">Prompt</code>
                      <span className="text-gray-600 dark:text-gray-400 ml-2">The text prompt to generate an image from</span>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-2 mb-4">
                <h5 className="font-medium text-sm inline-flex items-center bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                  <span className="text-green-600 dark:text-green-400 mr-2">⚙️</span> 
                  Optional Parameters
                </h5>
                <ul className="text-sm space-y-2 pl-4 border-l-2 border-gray-200 dark:border-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400">•</span>
                    <div>
                      <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">Model</code>
                      <span className="text-gray-600 dark:text-gray-400 ml-2">Enter The model name you want to use(e.g., "fpu")</span>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="mt-4">
                <h5 className="font-medium text-sm inline-flex items-center bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded mb-2">
                  <span className="text-green-600 dark:text-green-400 mr-2">↩️</span> 
                  Response Format
                </h5>
                <div className="bg-gray-50 dark:bg-gray-900/50 p-3 rounded-lg text-sm font-mono border border-gray-200 dark:border-gray-700 shadow-sm">
                  {`{
    "type": "img",
    "url": "https://hxqiiulotzjpqlsxqlel.supabase.co/storage/v1/object/generated-images-api/923164525711@s.whatsapp.net/2025-06-06T10:03:15.407-04:00.jpg",
    "Remaining Tokens": "99920",
    "Message id": "13",
    "Prompt": "Write a Beautiful Text in image 'Welcome to Converso AI'",
    "Total Images Generated": "926",
    "Creation Time": "10.535"
}
`}
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-amber-50 dark:bg-amber-900/30 rounded-xl mt-8">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5" />
              <div>
                <h3 className="font-semibold mb-1">Best Practices</h3>
                <ul className="text-sm text-amber-800 dark:text-amber-200 space-y-2">
                  <li>• Use detailed, descriptive prompts for better results</li>
                  <li>• Specify artistic styles if you want a particular look</li>
                  <li>• Include details about lighting, perspective, and composition</li>
                  <li>• For best quality, use the 1024x1024 size option</li>
                  <li>• Store generated images on your own servers for production use</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'beta',
      title: 'Beta API',
      icon: <Rocket className="w-4 h-4" />,
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-4">Beta API Access</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Get early access to new features and models with our Beta API.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-xl bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border border-yellow-100 dark:border-yellow-800">
              <div className="flex items-center gap-3 mb-3">
                <Sparkles className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                <h3 className="font-semibold">Beta Features</h3>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-yellow-600" />
                  <span>Latest model versions</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Beta API Example</h3>
            
            <div className="flex gap-2 mb-4">
              {(['python', 'javascript', 'curl'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setSelectedLanguage(lang)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    selectedLanguage === lang
                      ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {lang.charAt(0).toUpperCase() + lang.slice(1)}
                </button>
              ))}
            </div>

            <CodeEditor
              language={selectedLanguage}
              initialCode='Comming Soon'
              theme="dark"
            />
          </div>
        </div>
      )
    }
  ];

  // Define categories
  const categories: Category[] = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: <Book className="w-4 h-4" />,
      sections: ['quickstart', 'authentication']
    },
    {
      id: 'advanced-features',
      title: 'Advanced Features',
      icon: <Lightbulb className="w-4 h-4" />,
      sections: ['image-generation', 'beta']
    }
  ];

  // Toggle category expansion
  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  // Filter sections based on search query
  const getFilteredSections = () => {
    if (!searchQuery) {
      return { filteredCategories: categories, filteredSections: sections };
    }

    const query = searchQuery.toLowerCase();
    
    // Filter sections that match the query
    const matchingSections = sections.filter(section =>
      section.title.toLowerCase().includes(query)
    );
    
    // Get the IDs of matching sections
    const matchingSectionIds = matchingSections.map(section => section.id);
    
    // Filter categories that have at least one matching section
    const matchingCategories = categories.map(category => ({
      ...category,
      sections: category.sections.filter(sectionId => 
        matchingSectionIds.includes(sectionId)
      )
    })).filter(category => category.sections.length > 0);

    return { 
      filteredCategories: matchingCategories, 
      filteredSections: matchingSections 
    };
  };

  const { filteredCategories, filteredSections } = getFilteredSections();

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            <span>Developer Documentation</span>
          </div>
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            API Documentation
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about integrating with our API
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-64 flex-shrink-0">
            <div className="sticky top-20">
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              <nav className="space-y-4">
                {filteredCategories.map((category) => (
                  <div key={category.id} className="space-y-1">
                    <button
                      onClick={() => toggleCategory(category.id)}
                      className="w-full px-3 py-2 rounded-lg text-left flex items-center justify-between transition-colors bg-gray-50 dark:bg-gray-800/50 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      <div className="flex items-center gap-2">
                        {category.icon}
                        <span className="text-sm font-semibold">{category.title}</span>
                      </div>
                      {expandedCategories[category.id] ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </button>
                    
                    {expandedCategories[category.id] && (
                      <div className="ml-2 pl-2 border-l-2 border-gray-200 dark:border-gray-700 space-y-1 pt-1">
                        {category.sections.map(sectionId => {
                          const section = sections.find(s => s.id === sectionId);
                          if (!section) return null;
                          
                          return (
                            <button
                              key={section.id}
                              onClick={() => setActiveSection(section.id)}
                              className={`w-full px-3 py-1.5 rounded-lg text-left flex items-center gap-2 transition-colors ${
                                activeSection === section.id
                                  ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                                  : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400'
                              }`}
                            >
                              {section.icon}
                              <span className="text-sm">{section.title}</span>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}
                
                {/* If search is active but no categories match, show flat list of matching sections */}
                {searchQuery && filteredCategories.length === 0 && filteredSections.length > 0 && (
                  <div className="mt-2 space-y-1">
                    <div className="px-3 py-1 text-sm text-gray-500 dark:text-gray-400">Search results:</div>
                    {filteredSections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => setActiveSection(section.id)}
                        className={`w-full px-3 py-1.5 rounded-lg text-left flex items-center gap-2 transition-colors ${
                          activeSection === section.id
                            ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                            : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400'
                        }`}
                      >
                        {section.icon}
                        <span className="text-sm">{section.title}</span>
                      </button>
                    ))}
                  </div>
                )}
              </nav>
            </div>
          </div>

          <div className="flex-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100 dark:border-gray-700">
              {sections.find(s => s.id === activeSection)?.content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Documentation;
