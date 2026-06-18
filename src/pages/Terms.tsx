import { LAST_UPDATED_DATE, LEGAL_ENTITY_NAME, GOVERNING_LAW_REGION } from '../constants';
import { motion } from 'motion/react';
import { AlertCircle, Scale, Gavel, FileCheck } from 'lucide-react';

export default function Terms() {
  const terms = [
    {
      title: "1. Service Scope",
      icon: Scale,
      content: "Farely provides a comparison interface for ride-sharing fares. We do not provide transportation services ourselves. Our service is limited to aggregating and displaying third-party data for informational purposes."
    },
    {
      title: "2. Estimate Disclaimer",
      icon: AlertCircle,
      content: "All fare estimates displayed on Farely are provided 'as-is' by third-party services. Farely does not guarantee the accuracy of these estimates. Real-world conditions such as traffic, weather, and surge pricing may result in final charges that differ from the estimate."
    },
    {
      title: "3. Provider Responsibility",
      icon: Gavel,
      content: "Any ride booked after using Farely is a contract between you and the respective ride-sharing provider (Yango or Bykea). Farely is not responsible for the safety, quality, or legality of the rides, nor for any disputes arising from the ride service."
    },
    {
      title: "4. User Obligations",
      icon: FileCheck,
      content: "Users agree to use Farely for legal purposes only. You must be at least 18 years old or the age of majority in your jurisdiction to use this service. You are responsible for ensuring you have the necessary third-party apps installed to complete bookings."
    },
    {
      title: "5. Limitation of Liability",
      icon: Scale,
      content: "To the maximum extent permitted by law, Farely and its affiliates shall not be liable for any indirect, incidental, or consequential damages resulting from your use or inability to use the service."
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
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 italic text-slate-900">Terms of <span className="brand-underline">Service</span></h1>
          <p className="text-slate-500 font-extrabold uppercase tracking-widest text-xs">Last updated: {LAST_UPDATED_DATE}</p>
        </motion.div>

        <div className="prose prose-slate max-w-none text-slate-600 space-y-12">
          {terms.map((term, i) => (
            <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 transition-all hover:shadow-2xl hover:shadow-indigo-100 group">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-100 group-hover:scale-110 transition-transform">
                  <term.icon size={24} />
                </div>
                <h2 className="text-2xl font-extrabold text-slate-900 m-0 italic">{term.title}</h2>
              </div>
              <p className="leading-relaxed m-0 text-lg font-medium text-slate-500">
                {term.content}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 space-y-12">
          <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
            <h3 className="text-2xl font-extrabold mb-4 text-slate-900 italic">Termination</h3>
            <p className="text-slate-600 leading-relaxed font-medium">
              We reserve the right to terminate or suspend access to our service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
          </div>
          <div className="bg-indigo-600 p-10 rounded-[2.5rem] text-white shadow-xl shadow-indigo-200">
            <h3 className="text-2xl font-extrabold mb-4 italic">Governing Law</h3>
            <p className="text-indigo-100 leading-relaxed font-medium text-lg">
              These Terms shall be governed and construed in accordance with the laws of <span className="font-extrabold text-white underline decoration-white decoration-2 underline-offset-4">{GOVERNING_LAW_REGION}</span>, without regard to its conflict of law provisions.
            </p>
          </div>
          <p className="pt-12 text-sm text-slate-400 font-bold uppercase tracking-widest text-center">
            © {new Date().getFullYear()} {LEGAL_ENTITY_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
