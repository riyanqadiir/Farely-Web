import { useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Info, Terminal, ChevronRight } from 'lucide-react';

export default function UberCallback() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  
  const params = {
    code: searchParams.get('code') || 'None provided',
    state: searchParams.get('state') || 'None provided',
    error: searchParams.get('error') || 'None detecting',
  };

  return (
    <div className="py-24 flex items-center justify-center min-h-[60vh]">
      <div className="mx-auto max-w-2xl px-4 w-full">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           className="bg-slate-950 rounded-[2rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Terminal size={120} />
          </div>

          <div className="flex items-center gap-3 text-teal-400 mb-6">
            <Info size={20} />
            <span className="text-xs font-bold uppercase tracking-widest">Debug Console</span>
          </div>

          <h1 className="text-3xl font-bold mb-4">Uber OAuth Callback</h1>
          <p className="text-slate-400 mb-10 text-lg">
            This is a temporary callback test page for Farely OAuth setup. Use this page to verify that your redirection parameters are being passed correctly.
          </p>

          <div className="space-y-4">
            {Object.entries(params).map(([key, value]) => (
              <div key={key} className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <ChevronRight size={16} className="text-indigo-500" />
                  <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">{key}</span>
                </div>
                <code className={`text-sm break-all ${value === 'None provided' || value === 'None detecting' ? 'text-slate-600' : 'text-indigo-400'}`}>
                  {value}
                </code>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-slate-800 text-center">
            <button
               onClick={() => window.location.href = '/'}
               className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
            >
              Return to Home
            </button>
          </div>
        </motion.div>
        
        <p className="text-center mt-8 text-slate-400 text-xs">
          Production environments should handle these parameters server-side or within a secure app context.
        </p>
      </div>
    </div>
  );
}
