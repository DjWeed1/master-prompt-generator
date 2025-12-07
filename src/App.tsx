import { useState } from 'react';
import { Copy, Sparkles, Wand2, Check } from 'lucide-react';

function App() {
  const [targetAI, setTargetAI] = useState('chatgpt');
  const [userGoal, setUserGoal] = useState('');
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [copied, setCopied] = useState(false);

  const generatePrompt = () => {
    if (!userGoal.trim()) return;

    let prompt = '';

    switch (targetAI) {
      case 'chatgpt':
      case 'claude':
        prompt = `You are an expert AI assistant specialized in ${targetAI === 'chatgpt' ? 'ChatGPT' : 'Claude'} prompting.
        
TASK:
${userGoal}

INSTRUCTIONS:
1. Analyze the user's request above.
2. Act as a world-class expert in the relevant field.
3. Provide a comprehensive, detailed, and highly accurate response.
4. Use clear formatting, bullet points, and headers where appropriate.
5. If the request involves code, provide clean, commented, and efficient code.
6. Ensure the tone is professional yet accessible.

Please execute the task now with maximum quality.`;
        break;

      case 'midjourney':
        prompt = `/imagine prompt: ${userGoal}, high quality, 8k resolution, photorealistic, highly detailed, cinematic lighting, trending on artstation, unreal engine 5 render, --v 6.0 --ar 16:9`;
        break;

      case 'dalle':
        prompt = `Create a high-quality, detailed image of: ${userGoal}. The style should be photorealistic and highly detailed, with professional lighting and composition.`;
        break;

      case 'stable-diffusion':
        prompt = `(masterpiece), (best quality), (ultra-detailed), ${userGoal}, cinematic lighting, 8k, detailed background, professional photography`;
        break;

      default:
        prompt = `Act as an expert.
        
Task: ${userGoal}
        
Requirements:
- Be detailed and comprehensive.
- Use a professional tone.
- Provide examples if applicable.`;
    }

    setGeneratedPrompt(prompt);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center justify-center gap-2">
            <Sparkles className="w-8 h-8 text-indigo-600" />
            Master Prompt Generator
          </h1>
          <p className="text-gray-600 mt-2">Create perfect prompts for any AI model instantly.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Input Section */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Wand2 className="w-5 h-5 text-indigo-600" />
              Configuration
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Target AI / Platform
                </label>
                <select
                  value={targetAI}
                  onChange={(e) => setTargetAI(e.target.value)}
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
                >
                  <option value="chatgpt">ChatGPT (GPT-4)</option>
                  <option value="claude">Claude 3</option>
                  <option value="midjourney">Midjourney</option>
                  <option value="dalle">DALL-E 3</option>
                  <option value="stable-diffusion">Stable Diffusion</option>
                  <option value="general">General / Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  What do you want? (Your Goal)
                </label>
                <textarea
                  value={userGoal}
                  onChange={(e) => setUserGoal(e.target.value)}
                  placeholder="E.g., A python script to scrape a website OR A cyberpunk city in the rain..."
                  className="w-full h-32 rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border resize-none"
                />
              </div>

              <button
                onClick={generatePrompt}
                disabled={!userGoal.trim()}
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
              >
                Generate Master Prompt
              </button>
            </div>
          </div>

          {/* Output Section */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Result</h2>
              {generatedPrompt && (
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              )}
            </div>

            <div className="flex-1 bg-gray-50 rounded-lg border border-gray-200 p-4 relative">
              {generatedPrompt ? (
                <pre className="whitespace-pre-wrap font-sans text-gray-800 text-sm overflow-auto h-full max-h-[400px]">
                  {generatedPrompt}
                </pre>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-gray-400 text-center">
                  <Sparkles className="w-12 h-12 mb-2 opacity-20" />
                  <p>Enter your goal and click generate to see the magic happen.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
