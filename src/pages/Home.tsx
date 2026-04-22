import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Download, Smartphone } from 'lucide-react';
import { APP_STORE_URL, PLAY_STORE_URL } from '../constants';
import { SITE_DATA } from '../config/siteData';
import { FAQItem } from '../components/FAQItem';
import { FeatureCard } from '../components/FeatureCard';
import { PhoneMockup } from '../components/PhoneMockup';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-24 md:pt-32 md:pb-32 flex items-center min-h-[90vh]">
        <div className="mx-auto max-w-7xl px-4 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-bold uppercase tracking-wider mb-8">
                {SITE_DATA.hero.tag}
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-8 text-slate-900">
                {SITE_DATA.hero.title.split('in one app.')[0]}
                <span className="brand-underline">in one app.</span>
              </h1>
              <p className="text-xl text-slate-500 leading-relaxed mb-12 max-w-lg">
                {SITE_DATA.hero.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <a
                  href={APP_STORE_URL}
                  className="bg-brand-green text-white px-8 py-4 rounded-xl flex items-center justify-center gap-3 transition-all hover:opacity-90 hover:-translate-y-1 active:scale-95 shadow-lg shadow-green-200"
                >
                  <div className="w-5 h-5 border-2 border-white rounded-sm"></div>
                  <div className="text-left">
                    <div className="text-[9px] font-medium opacity-70 leading-none uppercase">Available on</div>
                    <div className="text-sm font-bold leading-none mt-1">App Store</div>
                  </div>
                </a>
                <a
                  href={PLAY_STORE_URL}
                  className="bg-slate-900 text-white px-8 py-4 rounded-xl flex items-center justify-center gap-3 transition-all hover:bg-slate-800 hover:-translate-y-1 active:scale-95 shadow-lg"
                >
                  <div className="w-5 h-5 bg-white opacity-30 rounded-full"></div>
                  <div className="text-left">
                    <div className="text-[9px] font-medium opacity-70 leading-none uppercase">Get it on</div>
                    <div className="text-sm font-bold leading-none mt-1">Google Play</div>
                  </div>
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-slate-200 pt-12">
                <div className="space-y-1">
                  <h3 className="font-bold text-slate-900 text-lg">Save 30%</h3>
                  <p className="text-sm text-slate-500">On average per ride compared to others.</p>
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-slate-900 text-lg">Real-time</h3>
                  <p className="text-sm text-slate-500">Live estimates for price and ETA instantly.</p>
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-slate-900 text-lg">Transparent</h3>
                  <p className="text-sm text-slate-500">No hidden surcharges or platform fees.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative flex items-center justify-center"
            >
              <div className="absolute inset-0 hero-gradient-overlay -z-10" />
              <PhoneMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-white" id="how-it-works">
        <div className="mx-auto max-w-7xl px-4 md:px-12">
          <motion.div {...fadeInUp} className="text-center mb-20 px-4">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6">How it works</h2>
            <p className="text-slate-500 text-xl max-w-2xl mx-auto font-medium">
              Comparing rides in Pakistan has never been easier. Three simple steps to get you on your way.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {SITE_DATA.howItWorks.map((step, i) => (
              <FeatureCard key={i} index={i} {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Farely Section */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl md:text-6xl font-extrabold mb-8 italic text-slate-900">Why choose Farely?</h2>
              <p className="text-xl text-slate-500 mb-12 leading-relaxed font-medium">
                We believe in transportation transparency. Farely puts the power back in your hands by revealing all your options before you commit.
              </p>
              <div className="grid grid-cols-2 gap-8">
                {SITE_DATA.whyFarely.map((item, i) => (
                  <div key={i} className="flex flex-col gap-4">
                    <div className="w-14 h-14 bg-brand-green rounded-2xl flex items-center justify-center text-white shadow-lg shadow-green-100">
                      <item.icon size={28} />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-lg mb-2">{item.title}</h4>
                      <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-brand-green rounded-[3rem] p-12 md:p-16 text-white relative overflow-hidden shadow-2xl shadow-green-200"
            >
              <div className="absolute top-0 right-0 p-8">
                <CheckCircle2 size={140} className="text-white opacity-10" />
              </div>
              <h3 className="text-4xl font-extrabold mb-8 leading-tight">Stop switching apps. Start comparing.</h3>
              <ul className="space-y-6 mb-12">
                <li className="flex items-center gap-4 group">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                    <CheckCircle2 size={16} className="text-teal-300" />
                  </div>
                  <span className="font-bold text-lg">Real-time price comparisons</span>
                </li>
                <li className="flex items-center gap-4 group">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                    <CheckCircle2 size={16} className="text-teal-300" />
                  </div>
                  <span className="font-bold text-lg">Accurate ETA estimates</span>
                </li>
                <li className="flex items-center gap-4 group">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                    <CheckCircle2 size={16} className="text-teal-300" />
                  </div>
                  <span className="font-bold text-lg">Direct deep-linking to provider apps</span>
                </li>
              </ul>
              <button
                onClick={() => {
                  const el = document.getElementById('download');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-indigo-600 px-10 py-5 rounded-2xl font-extrabold hover:bg-slate-50 transition-all flex items-center gap-3 shadow-xl active:scale-95"
              >
                Learn More <ArrowRight size={24} />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Providers Section */}
      <section className="py-24 bg-slate-900 border-y border-slate-800 text-white">
        <div className="mx-auto max-w-7xl px-4 md:px-12 text-center">
          <motion.div {...fadeInUp} className="mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Supported in Pakistan</h2>
            <p className="text-slate-400 max-w-xl mx-auto font-medium">
              We aggregate data from the most popular ride services in the region.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            {SITE_DATA.providers.map((name, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-10 py-5 bg-slate-800/50 border border-slate-700/50 rounded-2xl text-slate-300 font-extrabold hover:border-brand-green hover:text-white transition-all cursor-default"
              >
                {name.toUpperCase()}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-24" id="download">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-green-50 rounded-[3rem] p-8 md:p-20 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
              <div className="w-full h-full bg-green-100 rounded-l-[10rem] translate-x-1/4 flex items-center justify-center">
                <div className="p-8 bg-white rounded-3xl shadow-2xl">
                  <div className="w-48 h-48 bg-slate-50 border-2 border-dashed border-green-200 rounded-2xl flex flex-col items-center justify-center p-4">
                    <Smartphone size={60} className="text-green-200 mb-4" />
                    <div className="text-[10px] text-center text-green-300 font-bold uppercase tracking-widest">Scan to download</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative lg:w-1/2 z-10">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-brand-green leading-[1.1]">Ready to ride better?</h2>
              <p className="text-lg text-green-700/80 mb-10 leading-relaxed font-medium">
                Download Farely today and save time and money on every trip. Smart comparisons are just a tap away.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href={APP_STORE_URL} className="bg-black text-white px-8 py-4 rounded-2xl flex items-center gap-3 transition-transform hover:scale-105">
                  <Download size={24} />
                  <div className="text-left">
                    <div className="text-[10px] uppercase font-bold opacity-70 leading-none">Available on</div>
                    <div className="text-xl font-bold leading-none mt-1">App Store</div>
                  </div>
                </a>
                <a href={PLAY_STORE_URL} className="bg-white border border-green-100 text-brand-green px-8 py-4 rounded-2xl flex items-center gap-3 transition-transform hover:scale-105">
                  <Smartphone size={24} />
                  <div className="text-left">
                    <div className="text-[10px] uppercase font-bold opacity-70 leading-none">Get it on</div>
                    <div className="text-xl font-bold leading-none mt-1">Google Play</div>
                  </div>
                </a>
              </div>

              <div className="flex items-center gap-3 text-green-900/60 text-sm font-bold">
                <CheckCircle2 size={16} className="text-teal-500" /> Free to download • Pakistan-wide
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white" id="faq">
        <div className="mx-auto max-w-7xl px-4 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <motion.div {...fadeInUp} className="lg:col-span-12 text-center">
              <h2 className="text-5xl md:text-6xl font-extrabold mb-8 italic text-slate-900">Frequently Asked Questions</h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-12 max-w-4xl mx-auto w-full bg-slate-50 p-10 md:p-16 rounded-[3rem] border border-slate-100"
            >
              {SITE_DATA.faqs.map((faq, i) => (
                <FAQItem key={i} {...faq} />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-24 bg-brand-green relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.2),transparent)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8">Simplify your city travel today.</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href={APP_STORE_URL} className="bg-white text-brand-green px-10 py-5 rounded-full font-extrabold shadow-xl hover:bg-slate-50 transition-colors uppercase text-sm tracking-widest">
                Download on App Store
              </a>
              <a href={PLAY_STORE_URL} className="bg-slate-900 text-white px-10 py-5 rounded-full font-extrabold shadow-xl hover:bg-slate-800 transition-colors uppercase text-sm tracking-widest">
                Get it on Google Play
              </a>
            </div>
        </div>
      </section>
    </div>
  );
}
