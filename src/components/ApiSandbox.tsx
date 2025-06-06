
import React, { useState, useEffect } from 'react';
import { Terminal, Play, Loader2, Sparkles, FileCode } from 'lucide-react';
import CodeEditor from './CodeEditor';

const INITIAL_CODE = {
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
  });
`,
  curl: `curl -X POST https://n8n.stylefort.store/webhook/Image-Gen \
  -H "Content-Type: application/json" \
  -d '{
    "key": "<your_api_key>",
    "Prompt": "<your_prompt>",
    "Model": "<model>"
  }'
`
};

const SAMPLE_RESPONSE = {
    "type": "img",
    "url": "https://hxqiiulotzjpqlsxqlel.supabase.co/storage/v1/object/generated-images-api/923164525711@s.whatsapp.net/2025-06-06T10:03:15.407-04:00.jpg",
    "Remaining Tokens": "99920",
    "Message id": "13",
    "Prompt": "Write a Beautiful Text in image 'Welcome to Converso AI'",
    "Total Images Generated": "926",
    "Creation Time": "10.535"
}
;

const LoadingAnimation = () => (
  <div className="flex flex-col items-center justify-center h-[400px] gap-6">
    <div className="relative">
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 blur-lg opacity-20 animate-pulse"></div>
      <div className="w-20 h-20 border-4 border-blue-100 dark:border-blue-900/50 rounded-full"></div>
      <div className="w-20 h-20 border-4 border-blue-600 dark:border-blue-400 rounded-full border-t-transparent absolute top-0 left-0 animate-spin"></div>
      <div className="absolute inset-[6px] rounded-full border-2 border-indigo-400 dark:border-indigo-300 border-dashed animate-spin-slow"></div>
    </div>
    <div className="space-y-2 text-center">
      <div className="text-blue-600 dark:text-blue-400 font-medium animate-pulse flex items-center gap-2">
        <Sparkles className="w-4 h-4" />
        <span>Processing Request</span>
        <Sparkles className="w-4 h-4" />
      </div>
      <div className="text-sm text-gray-500 dark:text-gray-400">
        Analyzing and generating response...
      </div>
    </div>
  </div>
);

const ApiSandbox: React.FC = () => {
  const [language, setLanguage] = useState<'python' | 'javascript' | 'curl'>('python');
  const [theme] = useState<'light' | 'dark'>('dark');
  const [isRunning, setIsRunning] = useState(false);
  const [code, setCode] = useState(INITIAL_CODE[language]);
  const [response, setResponse] = useState<typeof SAMPLE_RESPONSE | null>(SAMPLE_RESPONSE);

  useEffect(() => {
    setCode(INITIAL_CODE[language]);
  }, [language]);

  const handleLanguageChange = (newLanguage: 'python' | 'javascript' | 'curl') => {
    setLanguage(newLanguage);
  };

  const handleRun = async () => {
    setIsRunning(true);
    setResponse(null);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setResponse(SAMPLE_RESPONSE);
    setIsRunning(false);
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl border border-gray-100 dark:border-gray-700">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl shadow-lg">
            <Terminal className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              API Sandbox
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Test our API with different languages
            </p>
          </div>
        </div>
        <div className="w-full sm:w-auto flex gap-2 bg-gray-100 dark:bg-gray-900 p-1.5 rounded-xl overflow-x-auto">
          {(['python', 'javascript', 'curl'] as const).map((lang) => (
            <button
              key={lang}
              onClick={() => handleLanguageChange(lang)}
              className={`flex-1 sm:flex-none px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                language === lang
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20 scale-105'
                  : 'hover:bg-white dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300'
              }`}
            >
              {lang.charAt(0).toUpperCase() + lang.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-4">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400">
              <FileCode className="w-4 h-4" />
              Request Editor
            </div>
            <button
              onClick={handleRun}
              disabled={isRunning}
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300
                ${isRunning 
                  ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transform hover:-translate-y-0.5'
                }`}
            >
              {isRunning ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Running...
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  Execute Request
                </>
              )}
            </button>
          </div>
          <div className="relative rounded-xl overflow-hidden bg-gray-50 dark:bg-gray-900 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5"></div>
            <CodeEditor
              initialCode={code}
              language={language}
              theme={theme}
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400">
              <Terminal className="w-4 h-4" />
              Response Preview
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden bg-gray-50 dark:bg-gray-900 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5"></div>
            {isRunning ? (
              <LoadingAnimation />
            ) : response ? (
              <CodeEditor
                initialCode={JSON.stringify(response, null, 2)}
                language="json"
                theme={theme}
                isResponse={true}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiSandbox;
