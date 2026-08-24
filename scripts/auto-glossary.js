const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');

const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL || "https://discordapp.com/api/webhooks/1536514054388977665/9OUlS5hP3fz2xyzE4QYi5OPCcDSU_HnnDCMEwH1OcQpxMR_L9JKuDCADsj4ClGnLUH1b";

const baseDir = path.join(__dirname, '..');
const glossaryPath = path.join(baseDir, 'src', 'content', 'glossary.js');
const toolsDir = path.join(baseDir, 'src', 'app', 'tools');
const keyPath = path.join(baseDir, 'service-account.json');

// ---------------------------------------------------------------------------
// HIGH-INTENT SEARCH TERMS & CALCULATOR QUEUE
// ---------------------------------------------------------------------------
const GLOSSARY_QUEUE = [
  {
    slug: 'overhead-multiplier',
    term: 'Agency Overhead Multiplier',
    searchKeywords: ['agency overhead multiplier', 'overhead rate formula', 'agency cost accounting', 'loaded labor multiplier'],
    definition: 'A financial ratio that measures total agency operating expenses relative to direct client labor costs.',
    expanded: 'The overhead multiplier is the fundamental number agencies use to determine how much indirect cost (rent, software, non-billable executive salaries, insurance) is incurred for every dollar of direct client work. If an agency spends $100,000 on developer salaries and $150,000 on overhead, the overhead multiplier is 1.5x (or a 2.5x total labor multiplier). Understanding your overhead multiplier is essential for setting profitable hourly rates and avoiding underpricing on large retainer contracts.',
    relatedTerms: ['cost-rate', 'effective-hourly-rate', 'break-even-billing-rate'],
    tool: {
      slug: 'overhead-multiplier',
      name: 'Overhead Multiplier Calculator',
      category: 'Profitability & Pricing',
      tag: 'Cost Accounting',
      desc: 'Calculate your agency’s overhead multiplier and loaded labor rate to ensure all operating expenses are baked into client pricing.',
      formulaDesc: 'Overhead Multiplier = Total Operating Expenses / Direct Billable Labor Cost',
      defaultInputs: { directLabor: 250000, operatingExpenses: 200000, targetProfitMargin: 20 },
      generateComponent: () => `
'use client';
import Breadcrumbs from '../../../components/Breadcrumbs';
import React, { useState } from 'react';

export default function OverheadMultiplierCalculator() {
  const [directLabor, setDirectLabor] = useState(250000);
  const [operatingExpenses, setOperatingExpenses] = useState(200000);
  const [targetProfitMargin, setTargetProfitMargin] = useState(20);
  const [result, setResult] = useState(null);

  const calculate = () => {
    const labor = parseFloat(directLabor) || 0;
    const overhead = parseFloat(operatingExpenses) || 0;
    const margin = (parseFloat(targetProfitMargin) || 0) / 100;

    if (labor <= 0) return;

    const multiplier = overhead / labor;
    const totalCostMultiplier = 1 + multiplier;
    const requiredBillingMultiplier = (1 + multiplier) / (1 - margin);

    setResult({
      multiplier: multiplier.toFixed(2),
      totalCostMultiplier: totalCostMultiplier.toFixed(2),
      requiredBillingMultiplier: requiredBillingMultiplier.toFixed(2),
      breakEvenLaborCost: (labor + overhead).toLocaleString(),
      targetRevenue: Math.round((labor + overhead) / (1 - margin)).toLocaleString()
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <main className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
          <div className="mb-8">
            <Breadcrumbs items={[
              { name: 'Home', path: '/' },
              { name: 'Free Tools', path: '/tools' },
              { name: 'Overhead Multiplier Calculator', path: '/tools/overhead-multiplier' }
            ]} />
          </div>

          <header className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Agency Overhead Multiplier Calculator</h1>
            <p className="text-slate-500 mt-2">
              Determine your true overhead burden and loaded billing rate multiplier to ensure full profitability.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Direct Billable Labor Cost ($/yr)</label>
                <input 
                  type="number" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500 outline-none"
                  value={directLabor} 
                  onChange={(e) => setDirectLabor(e.target.value)} 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Total Non-Billable Overhead Expenses ($/yr)</label>
                <input 
                  type="number" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500 outline-none"
                  value={operatingExpenses} 
                  onChange={(e) => setOperatingExpenses(e.target.value)} 
                />
                <p className="text-xs text-slate-400 mt-1">Include rent, software, legal, non-billable salaries, marketing.</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Target Net Profit Margin (%)</label>
                <input 
                  type="number" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500 outline-none"
                  value={targetProfitMargin} 
                  onChange={(e) => setTargetProfitMargin(e.target.value)} 
                />
              </div>

              <button 
                onClick={calculate}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 rounded-lg transition-colors mt-4 cursor-pointer"
              >
                Calculate Multiplier
              </button>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 flex flex-col justify-center">
              {result ? (
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm border-b border-slate-200 pb-2">
                    <span className="text-slate-600">Overhead Multiplier:</span>
                    <span className="font-bold text-slate-900 text-lg">{result.multiplier}x</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-slate-200 pb-2">
                    <span className="text-slate-600">Total Loaded Cost Multiplier:</span>
                    <span className="font-bold text-slate-900">{result.totalCostMultiplier}x</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-slate-200 pb-2">
                    <span className="text-slate-600">Required Billing Multiplier:</span>
                    <span className="font-bold text-emerald-600 text-xl">{result.requiredBillingMultiplier}x</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-slate-200 pb-2">
                    <span className="text-slate-600">Break-Even Total Cost:</span>
                    <span className="font-medium text-slate-800">\${result.breakEvenLaborCost}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm pt-1">
                    <span className="text-slate-600">Target Agency Revenue:</span>
                    <span className="font-bold text-slate-900">\${result.targetRevenue}</span>
                  </div>
                </div>
              ) : (
                <div className="text-center text-slate-400 py-8">
                  <p>Click "Calculate Multiplier" to see your agency's true loaded overhead burden.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
`
    }
  },
  {
    slug: 'bench-cost',
    term: 'Bench Cost & Idle Capacity',
    searchKeywords: ['bench cost calculator', 'agency bench rate', 'idle capacity cost', 'unbillable consultant cost'],
    definition: 'The total loaded salary and overhead cost of retaining unassigned or underutilized billable staff between client engagements.',
    expanded: 'In consulting and software development agencies, "the bench" refers to billable staff members who currently have no active client project allocations. While bench time is sometimes necessary for training or business development, excessive bench cost is the fastest way for an agency to bleed cash reserves. Tracking daily time in a high-density matrix gives leadership immediate visibility into bench creep before payroll deficits mount.',
    relatedTerms: ['billable-utilization', 'capacity-planning', 'non-billable-time'],
    tool: {
      slug: 'bench-cost',
      name: 'Bench Cost & Idle Capacity Calculator',
      category: 'Capacity & Utilization',
      tag: 'Workforce Economics',
      desc: 'Calculate the true monthly and annual payroll cost of unassigned staff and bench time across your agency.',
      generateComponent: () => `
'use client';
import Breadcrumbs from '../../../components/Breadcrumbs';
import React, { useState } from 'react';

export default function BenchCostCalculator() {
  const [benchHeadcount, setBenchHeadcount] = useState(2);
  const [avgSalary, setAvgSalary] = useState(110000);
  const [overheadPercent, setOverheadPercent] = useState(25);
  const [weeksOnBench, setWeeksOnBench] = useState(4);
  const [result, setResult] = useState(null);

  const calculate = () => {
    const count = parseInt(benchHeadcount) || 0;
    const salary = parseFloat(avgSalary) || 0;
    const overhead = (parseFloat(overheadPercent) || 0) / 100;
    const weeks = parseFloat(weeksOnBench) || 0;

    const loadedAnnualCostPerPerson = salary * (1 + overhead);
    const weeklyCostPerPerson = loadedAnnualCostPerPerson / 52;
    const totalBenchLoss = count * weeklyCostPerPerson * weeks;
    const monthlyBenchRunRate = count * (loadedAnnualCostPerPerson / 12);

    setResult({
      loadedAnnualCostPerPerson: Math.round(loadedAnnualCostPerPerson).toLocaleString(),
      weeklyCostPerPerson: Math.round(weeklyCostPerPerson).toLocaleString(),
      totalBenchLoss: Math.round(totalBenchLoss).toLocaleString(),
      monthlyBenchRunRate: Math.round(monthlyBenchRunRate).toLocaleString()
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <main className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
          <div className="mb-8">
            <Breadcrumbs items={[
              { name: 'Home', path: '/' },
              { name: 'Free Tools', path: '/tools' },
              { name: 'Bench Cost Calculator', path: '/tools/bench-cost' }
            ]} />
          </div>

          <header className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Bench Cost & Idle Capacity Calculator</h1>
            <p className="text-slate-500 mt-2">
              Quantify the exact financial impact of unallocated engineering and design staff between projects.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Number of Team Members on Bench</label>
                <input 
                  type="number" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500 outline-none"
                  value={benchHeadcount} 
                  onChange={(e) => setBenchHeadcount(e.target.value)} 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Average Annual Base Salary ($)</label>
                <input 
                  type="number" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500 outline-none"
                  value={avgSalary} 
                  onChange={(e) => setAvgSalary(e.target.value)} 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Taxes, Benefits & Overhead Factor (%)</label>
                <input 
                  type="number" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500 outline-none"
                  value={overheadPercent} 
                  onChange={(e) => setOverheadPercent(e.target.value)} 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Average Weeks on Bench</label>
                <input 
                  type="number" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500 outline-none"
                  value={weeksOnBench} 
                  onChange={(e) => setWeeksOnBench(e.target.value)} 
                />
              </div>

              <button 
                onClick={calculate}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 rounded-lg transition-colors mt-4 cursor-pointer"
              >
                Calculate Bench Cost
              </button>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 flex flex-col justify-center">
              {result ? (
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm border-b border-slate-200 pb-2">
                    <span className="text-slate-600">Loaded Annual Cost / Person:</span>
                    <span className="font-bold text-slate-900">\${result.loadedAnnualCostPerPerson}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-slate-200 pb-2">
                    <span className="text-slate-600">Weekly Payroll Burn / Person:</span>
                    <span className="font-bold text-slate-900">\${result.weeklyCostPerPerson}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-slate-200 pb-2">
                    <span className="text-slate-600">Total Idle Payroll Loss:</span>
                    <span className="font-bold text-rose-600 text-xl">\${result.totalBenchLoss}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm pt-1">
                    <span className="text-slate-600">Monthly Bench Run Rate:</span>
                    <span className="font-bold text-slate-900 text-lg">\${result.monthlyBenchRunRate}/mo</span>
                  </div>
                </div>
              ) : (
                <div className="text-center text-slate-400 py-8">
                  <p>Input your team's headcount and compensation to calculate unbilled bench burn.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
`
    }
  },
  {
    slug: 'break-even-billing-rate',
    term: 'Break-Even Billing Rate',
    searchKeywords: ['break even billing rate formula', 'minimum hourly rate calculator', 'agency floor rate', 'freelance break even rate'],
    definition: 'The minimum hourly billing rate required to cover an employee’s fully loaded salary and proportional agency overhead, yielding exactly 0% profit.',
    expanded: 'Your break-even billing rate is the absolute floor for client pricing. If you bill below this rate, your agency loses money on every hour worked. It is calculated by taking the employee’s loaded annual cost (salary + taxes + benefits + overhead allocation) and dividing it by their expected billable hours per year. Knowing this number empowers account executives to avoid discounting contracts into negative margins.',
    relatedTerms: ['cost-rate', 'overhead-multiplier', 'effective-hourly-rate'],
    tool: {
      slug: 'break-even-rate',
      name: 'Break-Even Billing Rate Calculator',
      category: 'Profitability & Pricing',
      tag: 'Pricing Floor',
      desc: 'Calculate the absolute minimum hourly rate required to cover loaded employee wages and overhead allocation before profit.',
      generateComponent: () => `
'use client';
import Breadcrumbs from '../../../components/Breadcrumbs';
import React, { useState } from 'react';

export default function BreakEvenRateCalculator() {
  const [annualSalary, setAnnualSalary] = useState(95000);
  const [annualOverheadShare, setAnnualOverheadShare] = useState(25000);
  const [billableHoursPerYear, setBillableHoursPerYear] = useState(1400);
  const [result, setResult] = useState(null);

  const calculate = () => {
    const salary = parseFloat(annualSalary) || 0;
    const overhead = parseFloat(annualOverheadShare) || 0;
    const hours = parseFloat(billableHoursPerYear) || 0;

    if (hours <= 0) return;

    const totalLoadedCost = salary + overhead;
    const breakEvenRate = totalLoadedCost / hours;
    const rateAt20Margin = breakEvenRate / 0.8;
    const rateAt35Margin = breakEvenRate / 0.65;

    setResult({
      totalLoadedCost: totalLoadedCost.toLocaleString(),
      breakEvenRate: breakEvenRate.toFixed(2),
      rateAt20Margin: rateAt20Margin.toFixed(2),
      rateAt35Margin: rateAt35Margin.toFixed(2)
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <main className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
          <div className="mb-8">
            <Breadcrumbs items={[
              { name: 'Home', path: '/' },
              { name: 'Free Tools', path: '/tools' },
              { name: 'Break-Even Rate Calculator', path: '/tools/break-even-rate' }
            ]} />
          </div>

          <header className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Break-Even Billing Rate Calculator</h1>
            <p className="text-slate-500 mt-2">
              Determine your baseline floor billing rate per employee to ensure you never service clients at a loss.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Annual Salary & Direct Benefits ($)</label>
                <input 
                  type="number" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500 outline-none"
                  value={annualSalary} 
                  onChange={(e) => setAnnualSalary(e.target.value)} 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Allocated Overhead Expense Share ($/yr)</label>
                <input 
                  type="number" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500 outline-none"
                  value={annualOverheadShare} 
                  onChange={(e) => setAnnualOverheadShare(e.target.value)} 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Expected Billable Hours / Year</label>
                <input 
                  type="number" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500 outline-none"
                  value={billableHoursPerYear} 
                  onChange={(e) => setBillableHoursPerYear(e.target.value)} 
                />
                <p className="text-xs text-slate-400 mt-1">Standard 70% utilization = ~1,400 billable hrs/yr.</p>
              </div>

              <button 
                onClick={calculate}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 rounded-lg transition-colors mt-4 cursor-pointer"
              >
                Calculate Floor Rate
              </button>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 flex flex-col justify-center">
              {result ? (
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm border-b border-slate-200 pb-2">
                    <span className="text-slate-600">Total Loaded Annual Cost:</span>
                    <span className="font-bold text-slate-900">\${result.totalLoadedCost}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-slate-200 pb-2">
                    <span className="text-slate-600">Break-Even Floor Rate:</span>
                    <span className="font-bold text-rose-600 text-xl">\${result.breakEvenRate}/hr</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-slate-200 pb-2">
                    <span className="text-slate-600">Recommended Rate (20% Margin):</span>
                    <span className="font-bold text-slate-900 text-lg">\${result.rateAt20Margin}/hr</span>
                  </div>
                  <div className="flex justify-between items-center text-sm pt-1">
                    <span className="text-slate-600">High-Leverage Rate (35% Margin):</span>
                    <span className="font-bold text-emerald-600 text-lg">\${result.rateAt35Margin}/hr</span>
                  </div>
                </div>
              ) : (
                <div className="text-center text-slate-400 py-8">
                  <p>Calculate the minimum hourly floor rate before client discounting.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
`
    }
  },
  {
    slug: 'days-sales-outstanding',
    term: 'Days Sales Outstanding (DSO)',
    searchKeywords: ['days sales outstanding formula', 'agency dso calculator', 'accounts receivable collection period', 'agency cash flow metric'],
    definition: 'The average number of days it takes for an agency to collect payment from clients after an invoice has been issued.',
    expanded: 'Days Sales Outstanding (DSO) is the definitive pulse of agency cash flow health. A high DSO (e.g., >60 days) means your agency is effectively financing your clients\' businesses with your own working capital. Top digital consultancies maintain a DSO under 30-35 days through automated timesheet invoicing, milestone retainers, and upfront deposits.',
    relatedTerms: ['work-in-progress', 'retainer', 'time-and-materials'],
    tool: {
      slug: 'dso-calculator',
      name: 'Days Sales Outstanding (DSO) Calculator',
      category: 'Invoicing & Payroll Overhead',
      tag: 'Cash Flow Health',
      desc: 'Measure your agency’s invoice collection velocity and identify trapped accounts receivable capital.',
      generateComponent: () => `
'use client';
import Breadcrumbs from '../../../components/Breadcrumbs';
import React, { useState } from 'react';

export default function DSOCalculator() {
  const [accountsReceivable, setAccountsReceivable] = useState(85000);
  const [totalCreditSales, setTotalCreditSales] = useState(450000);
  const [periodDays, setPeriodDays] = useState(90);
  const [result, setResult] = useState(null);

  const calculate = () => {
    const ar = parseFloat(accountsReceivable) || 0;
    const sales = parseFloat(totalCreditSales) || 0;
    const days = parseFloat(periodDays) || 90;

    if (sales <= 0 || days <= 0) return;

    const dso = (ar / sales) * days;
    const dailyCreditSales = sales / days;
    const target30DayAR = dailyCreditSales * 30;
    const trappedCash = Math.max(0, ar - target30DayAR);

    setResult({
      dso: dso.toFixed(1),
      dailySales: Math.round(dailyCreditSales).toLocaleString(),
      trappedCash: Math.round(trappedCash).toLocaleString(),
      rating: dso <= 35 ? 'Healthy / Fast' : dso <= 55 ? 'Moderate' : 'Critical / Slow'
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <main className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
          <div className="mb-8">
            <Breadcrumbs items={[
              { name: 'Home', path: '/' },
              { name: 'Free Tools', path: '/tools' },
              { name: 'DSO Calculator', path: '/tools/dso-calculator' }
            ]} />
          </div>

          <header className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Days Sales Outstanding (DSO) Calculator</h1>
            <p className="text-slate-500 mt-2">
              Measure accounts receivable collection velocity and calculate trapped cash flow.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Ending Accounts Receivable ($)</label>
                <input 
                  type="number" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500 outline-none"
                  value={accountsReceivable} 
                  onChange={(e) => setAccountsReceivable(e.target.value)} 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Total Billed Credit Sales ($)</label>
                <input 
                  type="number" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500 outline-none"
                  value={totalCreditSales} 
                  onChange={(e) => setTotalCreditSales(e.target.value)} 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Measurement Period (Days)</label>
                <select 
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500 outline-none"
                  value={periodDays} 
                  onChange={(e) => setPeriodDays(e.target.value)}
                >
                  <option value={30}>30 Days (Monthly)</option>
                  <option value={90}>90 Days (Quarterly)</option>
                  <option value={365}>365 Days (Annual)</option>
                </select>
              </div>

              <button 
                onClick={calculate}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 rounded-lg transition-colors mt-4 cursor-pointer"
              >
                Calculate DSO
              </button>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 flex flex-col justify-center">
              {result ? (
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm border-b border-slate-200 pb-2">
                    <span className="text-slate-600">Average Collection Period:</span>
                    <span className="font-bold text-slate-900 text-xl">{result.dso} Days</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-slate-200 pb-2">
                    <span className="text-slate-600">Cash Collection Health:</span>
                    <span className={\`font-bold \${result.rating.includes('Healthy') ? 'text-emerald-600' : result.rating.includes('Moderate') ? 'text-amber-600' : 'text-rose-600'}\`}>
                      {result.rating}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-slate-200 pb-2">
                    <span className="text-slate-600">Daily Invoiced Billing:</span>
                    <span className="font-medium text-slate-800">\${result.dailySales}/day</span>
                  </div>
                  <div className="flex justify-between items-center text-sm pt-1">
                    <span className="text-slate-600">Trapped Cash (>30 Days):</span>
                    <span className="font-bold text-rose-600 text-lg">\${result.trappedCash}</span>
                  </div>
                </div>
              ) : (
                <div className="text-center text-slate-400 py-8">
                  <p>Calculate your agency's Days Sales Outstanding and invoice collection velocity.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
`
    }
  },
  {
    slug: 'direct-labor-multiplier',
    term: 'Direct Labor Multiplier',
    searchKeywords: ['direct labor multiplier formula', 'agency billing multiplier', 'labor markup factor', 'architect billing multiplier'],
    definition: 'The factor by which an employee’s base unburdened hourly wage is multiplied to establish their client billing rate.',
    expanded: 'In engineering and architecture consultancies, the standard Direct Labor Multiplier typically ranges between 2.7x and 3.5x. For example, if a developer makes $50/hr base pay, a 3.0x multiplier yields a $150/hr client billing rate. The 3.0x factor allocates 1.0x to direct wage, 1.0x to overhead and benefits, and 1.0x to agency profit margin.',
    relatedTerms: ['overhead-multiplier', 'break-even-billing-rate', 'cost-rate'],
    toolUrl: '/tools/hourly-rate',
    toolName: 'Hourly Rate & Labor Multiplier Calculator'
  },
  {
    slug: 'agency-gross-margin',
    term: 'Agency Gross Margin',
    searchKeywords: ['agency gross margin benchmark', 'digital agency profit margin', 'services gross profit formula'],
    definition: 'Total client revenue minus all direct project labor and direct subcontractor costs, expressed as a percentage of revenue.',
    expanded: 'Healthy agencies target an Agency Gross Margin of 50% to 60%+. If gross margin dips below 45%, overhead expenses and administrative payroll will quickly push the firm into net losses. Tracking gross margin per project in VeloTime ensures underperforming accounts are renegotiated before fiscal year-end.',
    relatedTerms: ['effective-hourly-rate', 'project-overrun', 'blended-rate'],
    toolUrl: '/tools/project-profitability',
    toolName: 'Project Profitability & Gross Margin Tool'
  }
];

// ---------------------------------------------------------------------------
// GOOGLE SEARCH CONSOLE INDEXING DISPATCHER
// ---------------------------------------------------------------------------
async function requestIndexing(urls) {
  if (!fs.existsSync(keyPath)) {
    console.log('ℹ️ service-account.json not found. Skipping Google Indexing API call.');
    return { success: false, reason: 'No service account key' };
  }

  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: keyPath,
      scopes: ['https://www.googleapis.com/auth/indexing', 'https://www.googleapis.com/auth/webmasters'],
    });

    const indexing = google.indexing({ version: 'v3', auth });

    for (const url of urls) {
      console.log(`🌐 Requesting Google Indexing for: ${url}`);
      try {
        await indexing.urlNotifications.publish({
          requestBody: {
            url,
            type: 'URL_UPDATED',
          },
        });
        console.log(`   ✅ Indexing request submitted successfully!`);
      } catch (err) {
        console.log(`   ⚠️ Indexing API Notice: ${err.message}`);
      }
    }

    return { success: true, count: urls.length };
  } catch (err) {
    console.error('❌ Failed to authenticate with Google Indexing API:', err.message);
    return { success: false, error: err.message };
  }
}

// ---------------------------------------------------------------------------
// DISCORD WEBHOOK NOTIFIER
// ---------------------------------------------------------------------------
async function sendDiscordNotification(term, newTool, indexingStatus) {
  if (!DISCORD_WEBHOOK_URL) return;

  const fields = [
    { name: "📖 Definition", value: term.definition },
    { name: "🔍 Target Search Intent", value: (term.searchKeywords || []).join(", ") || "Agency Glossary" },
    { name: "🔗 Glossary URL", value: `https://velotime.dg.tools/glossary/${term.slug}` }
  ];

  if (newTool) {
    fields.push({
      name: "🛠️ New Interactive Calculator Built",
      value: `[${newTool.name}](https://velotime.dg.tools/tools/${newTool.slug})`
    });
  }

  fields.push({
    name: "⚡ Google Search Console Indexing",
    value: indexingStatus.success ? `✅ Submitted (${indexingStatus.count} URLs)` : `ℹ️ Auto-Discovered in Sitemap`
  });

  const payload = {
    embeds: [
      {
        title: `📚 New Glossary Term Published: "${term.term}"`,
        description: term.expanded.substring(0, 280) + '...',
        url: `https://velotime.dg.tools/glossary/${term.slug}`,
        color: 0x3B82F6,
        fields,
        footer: { text: "VeloTime Autonomous SEO & Glossary Engine" },
        timestamp: new Date().toISOString()
      }
    ]
  };

  try {
    await fetch(DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    console.log("📢 Discord notification sent successfully!");
  } catch (err) {
    console.error("⚠️ Failed to send Discord notification:", err.message);
  }
}

// ---------------------------------------------------------------------------
// MAIN AUTONOMOUS WORKFLOW
// ---------------------------------------------------------------------------
async function run() {
  console.log("==========================================================");
  console.log("🚀 Running VeloTime Autonomous Glossary & Calculator Bot");
  console.log("==========================================================\n");

  let content = fs.readFileSync(glossaryPath, 'utf8');

  // Find next un-published term in queue
  const nextItem = GLOSSARY_QUEUE.find(item => !content.includes(`slug: '${item.slug}'`) && !content.includes(`"slug": "${item.slug}"`));

  if (!nextItem) {
    console.log("🎉 All queued glossary terms have already been published! Nothing to add.");
    return;
  }

  console.log(`✨ Found next term to publish: "${nextItem.term}" (slug: ${nextItem.slug})`);

  let newToolUrl = nextItem.toolUrl || null;
  let newToolName = nextItem.toolName || null;
  let createdTool = null;

  // 1. Build Calculator Tool if formula exists and tool doesn't exist
  if (nextItem.tool) {
    const toolSlug = nextItem.tool.slug;
    const toolDir = path.join(toolsDir, toolSlug);
    const toolPagePath = path.join(toolDir, 'page.js');

    if (!fs.existsSync(toolPagePath)) {
      console.log(`🛠️ Building new Interactive Calculator: ${nextItem.tool.name} at /tools/${toolSlug}`);
      fs.mkdirSync(toolDir, { recursive: true });
      fs.writeFileSync(toolPagePath, nextItem.tool.generateComponent().trim(), 'utf8');
      
      newToolUrl = `/tools/${toolSlug}`;
      newToolName = nextItem.tool.name;
      createdTool = nextItem.tool;
      console.log(`   ✅ Created ${toolPagePath}`);
    }
  }

  // 2. Append new glossary term to src/content/glossary.js
  const termEntry = {
    slug: nextItem.slug,
    term: nextItem.term,
    definition: nextItem.definition,
    expanded: nextItem.expanded,
    relatedTerms: nextItem.relatedTerms || ['billable-utilization', 'effective-hourly-rate']
  };

  if (newToolUrl && newToolName) {
    termEntry.toolUrl = newToolUrl;
    termEntry.toolName = newToolName;
  }

  const termEntryStr = `  ,\n  {\n` +
    `    slug: '${termEntry.slug}',\n` +
    (termEntry.toolUrl ? `    toolUrl: '${termEntry.toolUrl}',\n    toolName: '${termEntry.toolName}',\n` : '') +
    `    term: '${termEntry.term}',\n` +
    `    definition: ${JSON.stringify(termEntry.definition)},\n` +
    `    expanded: ${JSON.stringify(termEntry.expanded)},\n` +
    `    relatedTerms: ${JSON.stringify(termEntry.relatedTerms)}\n` +
    `  }\n];`;

  content = content.replace(/\n\s*\];\s*\nexport function getGlossaryTerm/, termEntryStr + '\n\nexport function getGlossaryTerm');
  fs.writeFileSync(glossaryPath, content, 'utf8');
  console.log(`✅ Appended "${nextItem.term}" to src/content/glossary.js`);

  // 3. Request Google Indexing for newly created URLs
  const urlsToIndex = [`https://velotime.dg.tools/glossary/${nextItem.slug}`];
  if (createdTool) {
    urlsToIndex.push(`https://velotime.dg.tools/tools/${createdTool.slug}`);
  }

  const indexingResult = await requestIndexing(urlsToIndex);

  // 4. Send Discord Notification
  await sendDiscordNotification(nextItem, createdTool, indexingResult);

  console.log("\n==========================================================");
  console.log(`🎉 Successfully published: "${nextItem.term}"`);
  console.log(`🌐 Glossary URL: https://velotime.dg.tools/glossary/${nextItem.slug}`);
  if (createdTool) {
    console.log(`🛠️ Calculator URL: https://velotime.dg.tools/tools/${createdTool.slug}`);
  }
  console.log("==========================================================\n");
}

run().catch(err => {
  console.error("Fatal error in auto-glossary bot:", err);
  process.exit(1);
});
