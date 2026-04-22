import React from 'react';
import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  desc: string;
  icon: LucideIcon;
  index: number;
  key?: React.Key;
}

export function FeatureCard({ title, desc, icon: Icon, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 flex flex-col items-center text-center group transition-all hover:bg-white hover:shadow-2xl hover:shadow-brand-green/10"
    >
      <div className="w-24 h-24 bg-white rounded-3xl shadow-sm flex items-center justify-center text-brand-green mb-8 group-hover:scale-110 transition-transform border border-slate-50">
        <Icon size={42} />
      </div>
      <h3 className="text-2xl font-extrabold mb-4">{title}</h3>
      <p className="text-slate-500 leading-relaxed font-medium">{desc}</p>
    </motion.div>
  );
}
