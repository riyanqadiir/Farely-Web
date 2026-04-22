import { Mail, MessageCircle, AlertCircle, HelpCircle, ArrowRight } from 'lucide-react';
import { SUPPORT_EMAIL } from '../constants';
import { motion } from 'motion/react';

export default function Support() {
  const categories = [
    { title: 'App Usage', icon: HelpCircle, desc: 'How to use comparison features and deep linking.' },
    { title: 'Ride Issues', icon: AlertCircle, desc: 'What to do if your ride has problems or delays.' },
    { title: 'Account', icon: Mail, desc: 'Privacy, data, and account management queries.' },
    { title: 'Feedback', icon: MessageCircle, desc: 'Suggest new features or report bugs.' },
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            Support Center
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 italic text-slate-900">We're here <span className="brand-underline">to help.</span></h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Find answers to common questions or reach out to our team directly. We're committed to making your Farely experience seamless.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-indigo-600 rounded-[2.5rem] p-10 text-white shadow-2xl shadow-indigo-200 border border-indigo-500">
            <Mail size={40} className="mb-6 text-indigo-200" />
            <h3 className="text-2xl font-extrabold mb-4">Email Support</h3>
            <p className="text-indigo-100 mb-8 leading-relaxed font-medium">
              For general inquiries, account issues, or technical support, drop us a line at:
            </p>
            <div className="bg-white text-indigo-900 p-4 rounded-xl font-mono text-lg mb-8 shadow-inner select-all cursor-copy">
              {SUPPORT_EMAIL}
            </div>
            <p className="text-sm text-indigo-300">
              Average response time: <span className="text-white font-extrabold">24-48 hours</span>
            </p>
          </div>

          <div className="card-vibrant p-10 shadow-xl hover:shadow-2xl transition-all">
            <AlertCircle size={40} className="mb-6 text-orange-500" />
            <h3 className="text-2xl font-extrabold mb-4 text-slate-900">Report a Ride Issue</h3>
            <p className="text-slate-600 mb-8 leading-relaxed font-medium">
              If you have an issue with a ride (e.g., late arrival, driver behavior, overcharging), you must report it directly to the provider.
            </p>
            <a
              href="#how-to-report"
              className="inline-flex items-center gap-2 text-indigo-600 font-extrabold hover:gap-4 transition-all"
            >
              Learn how to report <ArrowRight size={20} />
            </a>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-2xl font-extrabold mb-8 text-slate-900 px-4 italic">Common Topics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {categories.map((cat, i) => (
              <div key={i} className="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-indigo-100 transition-all group">
                <cat.icon size={32} className="text-indigo-600 mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="font-extrabold text-slate-900 mb-2 text-lg">{cat.title}</h4>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-950 rounded-[3rem] p-12 text-white overflow-hidden relative" id="how-to-report">
          <div className="absolute -bottom-10 -right-10 opacity-10">
            <AlertCircle size={200} />
          </div>
          <h2 className="text-2xl font-bold mb-6">How to report ride issues</h2>
          <div className="space-y-6 relative z-10">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center font-bold text-sm shrink-0">1</div>
              <p className="text-slate-400">Open the app you used to book the ride (e.g., Uber, Lyft, Bolt).</p>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center font-bold text-sm shrink-0">2</div>
              <p className="text-slate-400">Navigate to your "Activity" or "Ride History" section.</p>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center font-bold text-sm shrink-0">3</div>
              <p className="text-slate-400">Select the specific ride and look for a "Help" or "Support" button.</p>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center font-bold text-sm shrink-0">4</div>
              <p className="text-slate-400">Follow the provider's instructions to file a formal report or request a refund.</p>
            </div>
          </div>
          <p className="mt-10 text-xs text-slate-500 italic">
            Farely does not process payments or manage ride logistics. We are unable to provide refunds for rides completed through third-party apps.
          </p>
        </div>
      </div>
    </div>
  );
}
