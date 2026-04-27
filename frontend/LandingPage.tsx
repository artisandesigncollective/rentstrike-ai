import React from 'react';

/**
 * RentStrike AI: Landing Page
 * 
 * Pain Point: Slumlords refuse to fix heat, plumbing, mold, or pests. Tenants are terrified
 * they'll be evicted if they complain. Most don't know that the "Implied Warranty of Habitability"
 * gives them the legal right to withhold rent or "Repair and Deduct."
 * Solution: Upload photos of the damage. AI cross-references state habitability laws to draft
 * a legally bulletproof notice that protects the tenant while forcing the landlord's hand.
 */

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-red-50 text-slate-900 font-sans selection:bg-red-600 selection:text-white">
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto border-b border-red-200">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center text-white font-black">R</div>
          <span className="text-xl font-black tracking-tighter">RentStrike AI</span>
        </div>
        <button className="text-sm font-bold text-red-700 hover:text-black transition">Know Your Rights</button>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-24 pb-32 text-center">
        <div className="inline-block bg-red-200 text-red-800 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest mb-8 border border-red-300">
          HABITABILITY DEFENDER
        </div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[1.05] mb-8 text-slate-900">
          Broken heat? Mold? <span className="text-red-600 underline decoration-red-300">You can legally stop paying rent.</span>
        </h1>
        
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
          Your landlord is legally required to maintain livable conditions. If they refuse to fix dangerous issues, every state gives you the right to withhold rent or "Repair and Deduct." Our AI drafts the exact legal notice that protects you from eviction while forcing repairs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-red-600 text-white px-12 py-5 rounded-xl font-black text-xl hover:bg-red-700 transition shadow-[0_10px_40px_rgba(220,38,38,0.3)] w-full sm:w-auto">
            Generate Legal Notice ($29)
          </button>
          
          <button className="bg-slate-900 text-white px-12 py-5 rounded-xl font-black text-xl hover:bg-black transition shadow-lg w-full sm:w-auto flex flex-col items-center">
            <span>Mail it to my Landlord</span>
            <span className="text-[10px] font-normal opacity-70 uppercase">Certified Mail + Proof of Service</span>
          </button>
        </div>
        <p className="text-sm text-slate-500 mt-6 font-medium">Covers all 50 states. Includes "Repair and Deduct" and "Rent Withholding" options based on your jurisdiction.</p>
      </main>

      <section className="bg-white border-y border-slate-200 py-24">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-left">
          <div>
            <div className="text-4xl mb-4">🔥</div>
            <h2 className="text-lg font-black text-slate-900 mb-3">No Heat / No Hot Water</h2>
            <p className="text-slate-600 text-sm leading-relaxed">In most states, loss of heat in winter is an emergency habitability violation. You can legally withhold rent AND call code enforcement.</p>
          </div>
          <div>
            <div className="text-4xl mb-4">🦠</div>
            <h2 className="text-lg font-black text-slate-900 mb-3">Mold & Pests</h2>
            <p className="text-slate-600 text-sm leading-relaxed">Black mold and roach infestations are health hazards. AI drafts a notice citing state health codes and the implied warranty of habitability.</p>
          </div>
          <div>
            <div className="text-4xl mb-4">🛡️</div>
            <h2 className="text-lg font-black text-slate-900 mb-3">Eviction Protection</h2>
            <p className="text-slate-600 text-sm leading-relaxed">Retaliatory eviction is illegal in 43 states. Our notice includes anti-retaliation language, creating a legal paper trail that protects you.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
