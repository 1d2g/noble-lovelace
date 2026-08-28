'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Breadcrumbs from '../../../components/Breadcrumbs';
import { 
  Calculator, 
  DollarSign, 
  TrendingUp, 
  Scale, 
  Layers, 
  ArrowRight, 
  Check, 
  Terminal, 
  FileText,
  ShieldCheck,
  Zap,
  ArrowUpRight,
  Sliders,
  HelpCircle,
  Clock
} from 'lucide-react';

export default function ValueBasedPricingCalculator() {
  // Input States
  const [clientBaselineRevenue, setClientBaselineRevenue] = useState(10000000); // $10M
  const [expectedLiftPercent, setExpectedLiftPercent] = useState(3.0); // 3.0%
  const [valueHorizonYears, setValueHorizonYears] = useState(1); // 1 year
  const [customCapturePercent, setCustomCapturePercent] = useState(15); // 15%
  const [estimatedDeliveryHours, setEstimatedDeliveryHours] = useState(120); // 120 internal hours
  const [internalCostPerHour, setInternalCostPerHour] = useState(90); // $90 loaded cost

  // Calculations
  const annualValueCreated = (clientBaselineRevenue * (expectedLiftPercent / 100));
  const totalValueCreated = annualValueCreated * valueHorizonYears;

  // Tier 1: Conservative (10% value capture)
  const tier1Fee = totalValueCreated * 0.10;
  const tier1EHR = estimatedDeliveryHours > 0 ? tier1Fee / estimatedDeliveryHours : 0;
  const tier1Cost = estimatedDeliveryHours * internalCostPerHour;
  const tier1Margin = tier1Fee > 0 ? Math.max(0, ((tier1Fee - tier1Cost) / tier1Fee) * 100) : 0;

  // Tier 2: Standard Strategic (18% value capture)
  const tier2Fee = totalValueCreated * 0.18;
  const tier2EHR = estimatedDeliveryHours > 0 ? tier2Fee / estimatedDeliveryHours : 0;
  const tier2Cost = estimatedDeliveryHours * internalCostPerHour;
  const tier2Margin = tier2Fee > 0 ? Math.max(0, ((tier2Fee - tier2Cost) / tier2Fee) * 100) : 0;

  // Tier 3: Turnkey Transformation (25% value capture)
  const tier3Fee = totalValueCreated * 0.25;
  const tier3EHR = estimatedDeliveryHours > 0 ? tier3Fee / estimatedDeliveryHours : 0;
  const tier3Cost = estimatedDeliveryHours * internalCostPerHour;
  const tier3Margin = tier3Fee > 0 ? Math.max(0, ((tier3Fee - tier3Cost) / tier3Fee) * 100) : 0;

  // Custom Model
  const customFee = totalValueCreated * (customCapturePercent / 100);
  const customEHR = estimatedDeliveryHours > 0 ? customFee / estimatedDeliveryHours : 0;
  const customCost = estimatedDeliveryHours * internalCostPerHour;
  const customMargin = customFee > 0 ? Math.max(0, ((customFee - customCost) / customFee) * 100) : 0;
  const customClientROI = customFee > 0 ? (totalValueCreated / customFee).toFixed(1) : 0;

  const faqItems = [
    {
      question: "What is a standard Value Capture Percentage for agency proposals?",
      answer: "In professional services and technical consulting, agencies typically capture between 10% and 25% of the quantified first-year economic value created. 10% is standard for execution-heavy projects, 15%-20% for strategic transformations, and 25%+ for mission-critical risk mitigation."
    },
    {
      question: "Why do you still need to track time on value-based pricing contracts?",
      answer: "Even when billing a flat value fee, tracking internal delivery hours is mandatory. It is the only metric that reveals your Effective Hourly Rate (EHR = Value Fee / Total Hours) and true gross margin, ensuring project scope doesn't quietly erode profitability."
    },
    {
      question: "How do you present value-based pricing options to clients?",
      answer: "Always offer three tiered options (e.g., 10%, 18%, and 25% value capture). This shifts the client's decision from 'Should we hire this agency or not?' to 'Which tier of value and speed best fits our growth goals?'"
    },
    {
      question: "How does VeloTime help agencies execute value-based contracts?",
      answer: "VeloTime provides a friction-free 10-second weekly keyboard timesheet matrix that captures internal delivery hours without micromanaging developers with timers, giving agency leadership live EHR telemetry on fixed-fee and value-based deals."
    }
  ];

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    'name': 'How to Calculate and Package Value-Based Pricing for Agency Proposals',
    'description': 'A 4-step framework for agencies to discover client ROI, calculate economic value created, price proposals at 10%-25% value capture, and track delivery margin.',
    'step': [
      {
        '@type': 'HowToStep',
        'name': 'Step 1: Quantify the Client Business Baseline',
        'text': 'Establish the client baseline annual revenue, cost structure, or customer volume before project initiation (e.g., $10M annual e-commerce sales).'
      },
      {
        '@type': 'HowToStep',
        'name': 'Step 2: Model Expected Commercial Lift',
        'text': 'Calculate the quantifiable economic impact of your delivery (e.g., a 3% conversion rate increase generates $300,000 in new annual gross margin).'
      },
      {
        '@type': 'HowToStep',
        'name': 'Step 3: Select Your Value Capture Tier',
        'text': 'Price the proposal between 10% and 25% of the annual economic value created (e.g., 18% of $300,000 = $54,000 fixed value fee).'
      },
      {
        '@type': 'HowToStep',
        'name': 'Step 4: Track Internal Hours to Measure Effective Hourly Rate',
        'text': 'Track internal delivery hours to calculate resulting EHR (EHR = Proposal Fee / Actual Hours) and protect project margin.'
      }
    ]
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqItems.map(item => ({
      '@type': 'Question',
      'name': item.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.answer
      }
    }))
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 font-sans text-slate-900 dark:text-slate-100 transition-colors">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="pt-28 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header Breadcrumbs */}
        <header className="space-y-4">
          <Breadcrumbs items={[
            { name: 'Home', path: '/' },
            { name: 'Agency Tools', path: '/tools' },
            { name: 'Value-Based Pricing Calculator', path: '/tools/value-based-pricing-calculator' }
          ]} />

          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-100 dark:bg-zinc-900 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-zinc-700 text-[11px] font-mono uppercase tracking-wider font-semibold">
              <Calculator className="w-3 h-3 text-slate-500" />
              <span>Agency Revenue Modeler [2026]</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-100 dark:bg-zinc-900 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-zinc-700 text-[11px] font-mono uppercase tracking-wider font-semibold">
              <span className="w-1.5 h-1.5 bg-emerald-500"></span>
              <span>10% – 25% Value Capture Formula</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-slate-100">
            Value-Based Pricing & Proposal ROI Calculator
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-normal max-w-3xl leading-relaxed">
            Quantify client economic ROI, price high-margin tiered proposals (10%–25% value capture), and model your resulting Effective Hourly Rate (EHR).
          </p>
        </header>

        {/* 1. SPREADSHEET INPUT MATRIX */}
        <section className="border-2 border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-900">
          <div className="bg-slate-100 dark:bg-zinc-800/80 border-b border-slate-300 dark:border-zinc-700 px-4 py-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
              <Sliders className="w-3.5 h-3.5 text-slate-500" />
              <span>CELL_01 // INPUT_PARAMETERS</span>
            </div>
            <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
              CLIENT_ROI_ENGINE
            </span>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Input 1: Client Baseline Metric */}
              <div className="space-y-1.5">
                <label className="block text-xs font-mono font-bold uppercase text-slate-700 dark:text-slate-300">
                  Client Baseline Annual Metric ($)
                </label>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-sans">
                  Target revenue, pipeline, or operational cost
                </p>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 font-mono text-xs text-slate-400">$</span>
                  <input
                    type="number"
                    value={clientBaselineRevenue}
                    onChange={(e) => setClientBaselineRevenue(Number(e.target.value) || 0)}
                    className="w-full bg-slate-50 dark:bg-zinc-950 border border-slate-300 dark:border-zinc-700 rounded-none pl-7 pr-3 py-2.5 text-xs sm:text-sm font-mono focus:ring-1 focus:ring-slate-900 dark:focus:ring-slate-100 focus:border-slate-900 dark:focus:border-slate-100 outline-none"
                  />
                </div>
              </div>

              {/* Input 2: Expected Lift % */}
              <div className="space-y-1.5">
                <label className="block text-xs font-mono font-bold uppercase text-slate-700 dark:text-slate-300">
                  Expected Impact / Growth Lift (%)
                </label>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-sans">
                  Conversion lift, efficiency gain, or margin bump
                </p>
                <div className="relative">
                  <input
                    type="number"
                    step="0.5"
                    value={expectedLiftPercent}
                    onChange={(e) => setExpectedLiftPercent(Number(e.target.value) || 0)}
                    className="w-full bg-slate-50 dark:bg-zinc-950 border border-slate-300 dark:border-zinc-700 rounded-none pl-3 pr-8 py-2.5 text-xs sm:text-sm font-mono focus:ring-1 focus:ring-slate-900 dark:focus:ring-slate-100 focus:border-slate-900 dark:focus:border-slate-100 outline-none"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 font-mono text-xs text-slate-400">%</span>
                </div>
              </div>

              {/* Input 3: Value Horizon */}
              <div className="space-y-1.5">
                <label className="block text-xs font-mono font-bold uppercase text-slate-700 dark:text-slate-300">
                  Value Timeframe (Years)
                </label>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-sans">
                  Standard 1-year first-year ROI basis
                </p>
                <select
                  value={valueHorizonYears}
                  onChange={(e) => setValueHorizonYears(Number(e.target.value))}
                  className="w-full bg-slate-50 dark:bg-zinc-950 border border-slate-300 dark:border-zinc-700 rounded-none px-3 py-2.5 text-xs sm:text-sm font-mono focus:ring-1 focus:ring-slate-900 dark:focus:ring-slate-100 focus:border-slate-900 dark:focus:border-slate-100 outline-none"
                >
                  <option value={1}>1 Year (Recommended Standard)</option>
                  <option value={2}>2 Years (Long-Term Enterprise)</option>
                  <option value={3}>3 Years (Transformation Contract)</option>
                </select>
              </div>

              {/* Input 4: Estimated Delivery Hours */}
              <div className="space-y-1.5">
                <label className="block text-xs font-mono font-bold uppercase text-slate-700 dark:text-slate-300">
                  Internal Estimated Hours (Budget)
                </label>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-sans">
                  Team hours required to execute project
                </p>
                <div className="relative">
                  <input
                    type="number"
                    value={estimatedDeliveryHours}
                    onChange={(e) => setEstimatedDeliveryHours(Number(e.target.value) || 0)}
                    className="w-full bg-slate-50 dark:bg-zinc-950 border border-slate-300 dark:border-zinc-700 rounded-none pl-3 pr-8 py-2.5 text-xs sm:text-sm font-mono focus:ring-1 focus:ring-slate-900 dark:focus:ring-slate-100 focus:border-slate-900 dark:focus:border-slate-100 outline-none"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 font-mono text-xs text-slate-400">hrs</span>
                </div>
              </div>

              {/* Input 5: Loaded Cost Per Hour */}
              <div className="space-y-1.5">
                <label className="block text-xs font-mono font-bold uppercase text-slate-700 dark:text-slate-300">
                  Agency Loaded Cost Per Hour ($/h)
                </label>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-sans">
                  Wages + payroll taxes + overhead per hour
                </p>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 font-mono text-xs text-slate-400">$</span>
                  <input
                    type="number"
                    value={internalCostPerHour}
                    onChange={(e) => setInternalCostPerHour(Number(e.target.value) || 0)}
                    className="w-full bg-slate-50 dark:bg-zinc-950 border border-slate-300 dark:border-zinc-700 rounded-none pl-7 pr-3 py-2.5 text-xs sm:text-sm font-mono focus:ring-1 focus:ring-slate-900 dark:focus:ring-slate-100 focus:border-slate-900 dark:focus:border-slate-100 outline-none"
                  />
                </div>
              </div>

              {/* Input 6: Custom Value Capture % */}
              <div className="space-y-1.5">
                <label className="block text-xs font-mono font-bold uppercase text-slate-700 dark:text-slate-300">
                  Custom Value Capture % ({customCapturePercent}%)
                </label>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-sans">
                  Fine-tune proposal pricing percentage
                </p>
                <input
                  type="range"
                  min="5"
                  max="35"
                  step="1"
                  value={customCapturePercent}
                  onChange={(e) => setCustomCapturePercent(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 dark:bg-zinc-800 rounded-none appearance-none cursor-pointer mt-3 accent-slate-900 dark:accent-white"
                />
              </div>

            </div>
          </div>
        </section>

        {/* 2. QUANTIFIED ECONOMIC VALUE BANNER */}
        <section className="border-2 border-slate-900 dark:border-slate-100 bg-slate-950 dark:bg-black text-white p-6 sm:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1">
              <div className="text-[11px] font-mono uppercase text-emerald-400 font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-emerald-400"></span>
                <span>QUANTIFIED CLIENT ECONOMIC VALUE CREATED</span>
              </div>
              <div className="text-3xl sm:text-4xl font-mono font-black text-white">
                ${Math.round(totalValueCreated).toLocaleString()}
              </div>
              <p className="text-xs text-slate-400 font-sans">
                Basis: {expectedLiftPercent}% lift on ${clientBaselineRevenue.toLocaleString()} over {valueHorizonYears} year{valueHorizonYears > 1 ? 's' : ''}.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-4 font-mono text-xs space-y-1 shrink-0">
              <div className="text-slate-400 uppercase text-[10px]">Agency Custom Quote ({customCapturePercent}% Capture)</div>
              <div className="text-xl font-bold text-emerald-400">${Math.round(customFee).toLocaleString()}</div>
              <div className="text-slate-300 text-[11px]">Resulting EHR: <strong>${Math.round(customEHR)}/hr</strong> ({customMargin.toFixed(0)}% Margin)</div>
            </div>
          </div>
        </section>

        {/* 3. 3-TIER PROPOSAL SPREADSHEET MATRIX */}
        <section className="border-2 border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-900">
          <div className="bg-slate-100 dark:bg-zinc-800/80 border-b border-slate-300 dark:border-zinc-700 px-4 py-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
              <Scale className="w-3.5 h-3.5 text-slate-500" />
              <span>TIER_02 // 3-TIER_PROPOSAL_PACKAGING_MATRIX</span>
            </div>
            <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
              PROPOSAL_SPECS
            </span>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/* Tier 1: 10% Conservative */}
              <div className="bg-slate-50 dark:bg-zinc-950 border-2 border-slate-300 dark:border-zinc-800 p-5 space-y-4 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold uppercase px-2 py-0.5 bg-slate-200 dark:bg-zinc-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-zinc-700">
                      OPTION 1: BASE
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-500">10% Capture</span>
                  </div>

                  <div className="text-2xl font-mono font-black text-slate-900 dark:text-white pt-2">
                    ${Math.round(tier1Fee).toLocaleString()}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-sans">
                    Standard core execution and deliverable handover. Low friction entry.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-zinc-800 font-mono text-xs space-y-1.5">
                  <div className="flex justify-between text-slate-600 dark:text-slate-400">
                    <span>Effective Hourly Rate:</span>
                    <strong className="text-slate-900 dark:text-white font-bold">${Math.round(tier1EHR)}/hr</strong>
                  </div>
                  <div className="flex justify-between text-slate-600 dark:text-slate-400">
                    <span>Agency Gross Margin:</span>
                    <strong className="text-emerald-600 dark:text-emerald-400 font-bold">{tier1Margin.toFixed(0)}%</strong>
                  </div>
                  <div className="flex justify-between text-slate-600 dark:text-slate-400">
                    <span>Client ROI Multiple:</span>
                    <strong className="text-slate-900 dark:text-white">10.0x</strong>
                  </div>
                </div>
              </div>

              {/* Tier 2: 18% Recommended Strategic */}
              <div className="bg-white dark:bg-zinc-900 border-2 border-slate-900 dark:border-white p-5 space-y-4 flex flex-col justify-between relative shadow-sm">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold uppercase px-2 py-0.5 bg-slate-900 text-white dark:bg-white dark:text-slate-900 border border-slate-900 dark:border-white">
                      OPTION 2: STRATEGIC
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">18% Capture (Target)</span>
                  </div>

                  <div className="text-2xl font-mono font-black text-slate-950 dark:text-white pt-2">
                    ${Math.round(tier2Fee).toLocaleString()}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-sans">
                    Full execution + advisory, priority SLA, and post-launch optimization sprint.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-zinc-800 font-mono text-xs space-y-1.5">
                  <div className="flex justify-between text-slate-600 dark:text-slate-400">
                    <span>Effective Hourly Rate:</span>
                    <strong className="text-slate-900 dark:text-white font-bold">${Math.round(tier2EHR)}/hr</strong>
                  </div>
                  <div className="flex justify-between text-slate-600 dark:text-slate-400">
                    <span>Agency Gross Margin:</span>
                    <strong className="text-emerald-600 dark:text-emerald-400 font-bold">{tier2Margin.toFixed(0)}%</strong>
                  </div>
                  <div className="flex justify-between text-slate-600 dark:text-slate-400">
                    <span>Client ROI Multiple:</span>
                    <strong className="text-slate-900 dark:text-white">5.5x</strong>
                  </div>
                </div>
              </div>

              {/* Tier 3: 25% Turnkey Transformation */}
              <div className="bg-slate-50 dark:bg-zinc-950 border-2 border-slate-300 dark:border-zinc-800 p-5 space-y-4 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold uppercase px-2 py-0.5 bg-slate-200 dark:bg-zinc-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-zinc-700">
                      OPTION 3: TRANSFORMATION
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-500">25% Capture</span>
                  </div>

                  <div className="text-2xl font-mono font-black text-slate-900 dark:text-white pt-2">
                    ${Math.round(tier3Fee).toLocaleString()}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-sans">
                    Turnkey outcome delivery, executive dashboarding, and dedicated team pod.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-zinc-800 font-mono text-xs space-y-1.5">
                  <div className="flex justify-between text-slate-600 dark:text-slate-400">
                    <span>Effective Hourly Rate:</span>
                    <strong className="text-slate-900 dark:text-white font-bold">${Math.round(tier3EHR)}/hr</strong>
                  </div>
                  <div className="flex justify-between text-slate-600 dark:text-slate-400">
                    <span>Agency Gross Margin:</span>
                    <strong className="text-emerald-600 dark:text-emerald-400 font-bold">{tier3Margin.toFixed(0)}%</strong>
                  </div>
                  <div className="flex justify-between text-slate-600 dark:text-slate-400">
                    <span>Client ROI Multiple:</span>
                    <strong className="text-slate-900 dark:text-white">4.0x</strong>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4. STEP-BY-STEP AGENCY IMPLEMENTATION FRAMEWORK */}
        <section className="border-2 border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-900">
          <div className="bg-slate-100 dark:bg-zinc-800/80 border-b border-slate-300 dark:border-zinc-700 px-4 py-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
              <FileText className="w-3.5 h-3.5 text-slate-500" />
              <span>GUIDE_03 // 4-STEP_VALUE_PRICING_PLAYBOOK</span>
            </div>
            <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
              METHODOLOGY
            </span>
          </div>

          <div className="p-6 sm:p-8 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 dark:bg-zinc-950 border border-slate-300 dark:border-zinc-800 p-4 space-y-1.5">
                <div className="font-mono text-xs font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <span className="w-5 h-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center text-[10px] font-bold">01</span>
                  <span>Discovery & Metric Baseline</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
                  Never bid without knowing the client baseline. Ask direct financial discovery questions: <em>"What is the annual gross profit of this business line?"</em> or <em>"What is the cost of delayed launch per month?"</em>
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-zinc-950 border border-slate-300 dark:border-zinc-800 p-4 space-y-1.5">
                <div className="font-mono text-xs font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <span className="w-5 h-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center text-[10px] font-bold">02</span>
                  <span>Quantify Economic Value</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
                  Calculate the 1-year financial delta: <code>Client Value = Baseline Metric × Projected % Lift</code>. Agree on this quantified number with the client sponsor before quoting fees.
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-zinc-950 border border-slate-300 dark:border-zinc-800 p-4 space-y-1.5">
                <div className="font-mono text-xs font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <span className="w-5 h-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center text-[10px] font-bold">03</span>
                  <span>Package 3 Tiered Options</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
                  Anchor with a 10% base option, an 18% strategic option (your target), and a 25% transformation option. Anchoring eliminates budget pushback by framing price against massive ROI.
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-zinc-950 border border-slate-300 dark:border-zinc-800 p-4 space-y-1.5">
                <div className="font-mono text-xs font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <span className="w-5 h-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center text-[10px] font-bold">04</span>
                  <span>Track Frictionless Delivery Hours</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
                  Do not abandon timesheets! Track internal hours with <strong>VeloTime's 10-second matrix</strong> to verify that your Effective Hourly Rate exceeds $250+/hr and delivery costs stay protected.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-zinc-800 flex items-center justify-between text-xs font-mono text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-slate-900 dark:bg-white"></span>
                <span>Companion Concept:</span>
              </div>
              <Link 
                href="/glossary/value-based-pricing"
                className="font-mono text-xs font-bold text-slate-900 dark:text-slate-100 hover:text-primary-600 dark:hover:text-primary-400 underline flex items-center gap-1"
              >
                <span>[READ_VALUE_BASED_PRICING_SPEC &rarr;]</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 5. SPREADSHEET FAQ */}
        <section className="border-2 border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-900">
          <div className="bg-slate-100 dark:bg-zinc-800/80 border-b border-slate-300 dark:border-zinc-700 px-4 py-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
              <HelpCircle className="w-3.5 h-3.5 text-slate-500" />
              <span>FAQ_04 // FREQUENTLY_ASKED_QUESTIONS</span>
            </div>
            <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
              PRICING_QA
            </span>
          </div>

          <div className="p-6 sm:p-8 space-y-4">
            {faqItems.map((item, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 dark:bg-zinc-950 border border-slate-300 dark:border-zinc-800 p-4 sm:p-5 space-y-2"
              >
                <div className="font-mono text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100">
                  {item.question}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. CONVERSION FOOTER SPREADSHEET CELL */}
        <section className="border-2 border-slate-900 dark:border-slate-100 bg-slate-950 dark:bg-black text-white p-8 sm:p-12 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 border border-slate-700 text-slate-300 text-xs font-mono font-semibold uppercase">
            <span className="w-2 h-2 bg-emerald-400"></span>
            <span>EFFECTIVE HOURLY RATE TELEMETRY</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Protect Your Value-Based Margins with 10-Second Timesheets.
          </h2>

          <p className="text-slate-400 max-w-xl mx-auto text-xs sm:text-sm font-sans leading-relaxed">
            Eliminate floating stopwatch timers and Friday memory guessing. VeloTime gives engineering and agency teams a frictionless keyboard timesheet matrix that tracks internal project hours accurately.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href="https://app.velotime.dg.tools"
              className="w-full sm:w-auto bg-white hover:bg-slate-100 text-slate-950 font-mono font-bold text-xs py-3.5 px-8 transition-colors border border-white"
            >
              START 14-DAY FREE TRIAL &rarr;
            </a>
            <Link
              href="/tools"
              className="w-full sm:w-auto bg-transparent hover:bg-slate-900 text-slate-300 font-mono font-bold text-xs py-3.5 px-6 transition-colors border border-slate-700"
            >
              BROWSE ALL AGENCY TOOLS
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}
