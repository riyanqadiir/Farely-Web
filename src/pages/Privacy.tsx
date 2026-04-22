import { Shield, Lock, Eye, FileText, Smartphone } from 'lucide-react';
import { LAST_UPDATED_DATE, SUPPORT_EMAIL, LEGAL_ENTITY_NAME } from '../constants';
import { motion } from 'motion/react';

export default function Privacy() {
  const sections = [
    {
      title: "1. Information We Collect",
      icon: Eye,
      content: "Farely collects minimal data to function. This includes search queries (pickup and dropoff locations), device type, and limited usage metrics. We do not store your exact home address unless you explicitly save it as a favorite."
    },
    {
      title: "2. How We Use Information",
      icon: Smartphone,
      content: "Your search data is used exclusively to fetch real-time fare estimates from third-party ride providers. We use anonymized usage statistics to improve app performance and user interface design."
    },
    {
      title: "3. Third-Party Providers",
      icon: Shield,
      content: "When you comparison shop, your search parameters are shared with our supported partners (Uber, Yango, Bykea, etc.) to fetch estimates. When you select a ride, you are redirected to the partner app, and their respective privacy policies apply to any data shared thereafter."
    },
    {
      title: "4. Data Retention",
      icon: Lock,
      content: "Search history is stored locally on your device and can be cleared at any time. We do not maintain long-term server-side logs of your specific movements or travel patterns."
    },
    {
      title: "5. User Rights",
      icon: FileText,
      content: "You have the right to access, export, or delete any data associated with your Farely account. Since we collect minimal persistent data, most of these actions can be performed directly within the app settings."
    }
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="mb-16 border-b border-slate-100 pb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 italic text-slate-900"><span className="brand-underline">Privacy</span> Policy</h1>
          <p className="text-slate-500 font-extrabold uppercase tracking-widest text-xs">Last updated: {LAST_UPDATED_DATE}</p>
        </motion.div>

        <div className="space-y-12">
          {sections.map((section, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-8 items-start">
              <div className="shrink-0 bg-white p-4 rounded-[1.5rem] shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-100">
                  <section.icon size={24} />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-extrabold mb-4 text-slate-900 italic">{section.title}</h2>
                <div className="prose prose-slate max-w-none">
                   <p className="text-slate-600 leading-relaxed text-lg font-medium">
                     {section.content}
                   </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-slate-900 rounded-[3rem] text-white overflow-hidden relative shadow-2xl shadow-slate-200">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Shield size={120} />
          </div>
          <h3 className="text-3xl font-extrabold mb-6 italic">Contact Us</h3>
          <p className="text-slate-300 mb-8 leading-relaxed font-medium text-lg">
            If you have any questions about this Privacy Policy or our data practices, please contact our data protection officer at:
          </p>
          <a href={`mailto:${SUPPORT_EMAIL}`} className="text-indigo-400 font-extrabold text-2xl hover:text-white transition-colors underline decoration-indigo-400 underline-offset-8">
            {SUPPORT_EMAIL}
          </a>
          <p className="mt-12 text-sm text-slate-500 font-bold uppercase tracking-widest">
            {LEGAL_ENTITY_NAME} • Data Privacy Team
          </p>
        </div>
      </div>
    </div>
  );
}
