import React from 'react';
import { Smartphone } from 'lucide-react';

export function PhoneMockup() {
  return (
    <div className="relative z-10 w-[300px] h-[600px] bg-slate-900 rounded-[3rem] border-8 border-slate-800 shadow-2xl p-4">
      <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden flex flex-col">
        <div className="p-6 space-y-4">
          <div className="flex justify-between items-center">
            <div className="w-10 h-10 bg-brand-green rounded-lg flex items-center justify-center text-white font-bold">F</div>
            <div className="w-24 h-4 bg-slate-100 rounded-full" />
          </div>
          <div className="space-y-2">
            <div className="w-full h-10 bg-slate-50 rounded-xl border border-slate-100 flex items-center px-4 md:px-4 text-[10px] text-slate-400 font-bold uppercase tracking-tight">Pickup: Karachi Central</div>
            <div className="w-full h-10 bg-slate-50 rounded-xl border border-slate-100 flex items-center px-4 md:px-4 text-[10px] text-slate-400 font-bold uppercase tracking-tight">Dropoff: Airport Terminal</div>
          </div>
          <div className="space-y-3 pt-4">
            <div className="p-4 bg-brand-green/5 border border-brand-green/10 rounded-2xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#00b050] rounded-lg flex items-center justify-center text-[7px] text-white font-black leading-none px-0.5">BYKEA</div>
                <span className="text-xs font-bold text-slate-900">Bykea Moto</span>
              </div>
              <span className="text-xs font-bold text-brand-green">PKR 250</span>
            </div>
            <div className="p-4 bg-white border border-slate-100 rounded-2xl flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#ff0000] rounded-lg flex items-center justify-center text-[9px] text-white font-black italic">Y</div>
                <span className="text-xs font-bold text-slate-900">Yango Eco</span>
              </div>
              <span className="text-xs font-bold text-slate-900">PKR 435</span>
            </div>
          </div>
        </div>
        <div className="mt-auto p-4 bg-slate-50 border-t border-slate-100">
          <div className="w-full h-12 bg-brand-green rounded-xl flex items-center justify-center text-white font-bold text-sm">Open Provider App</div>
        </div>
      </div>

      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white p-4 rounded-3xl shadow-xl flex flex-col items-center justify-center gap-2 border border-slate-100 hidden sm:flex">
        <div className="w-full aspect-square bg-slate-900 rounded-lg flex items-center justify-center text-white text-[10px] uppercase font-bold tracking-tighter">QR CODE</div>
        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none">Scan App</span>
      </div>
    </div>
  );
}
