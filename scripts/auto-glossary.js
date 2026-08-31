const fs = require('fs');
const path = require('path');

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
    category: 'Profitability & Margins',
    term: 'Agency Overhead Multiplier',
    searchKeywords: ['agency overhead multiplier', 'overhead rate formula', 'agency cost accounting', 'loaded labor multiplier'],
    definition: 'A financial ratio that measures total agency operating expenses relative to direct client labor costs.',
    expanded: 'The overhead multiplier is the fundamental number agencies use to determine how much indirect cost (rent, software, non-billable executive salaries, insurance) is incurred for every dollar of direct client work. If an agency spends $100,000 on developer salaries and $150,000 on overhead, the overhead multiplier is 1.5x (or a 2.5x total labor multiplier). Understanding your overhead multiplier is essential for setting profitable hourly rates and avoiding underpricing on large retainer contracts.',
    relatedTerms: ['cost-rate', 'effective-hourly-rate', 'break-even-billing-rate']
  },
  {
    slug: 'bench-cost',
    category: 'Capacity & Utilization',
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
    category: 'Profitability & Margins',
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
    category: 'Operations & Risk',
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
                    <span className={"font-bold " + (result.rating.includes('Healthy') ? 'text-emerald-600' : result.rating.includes('Moderate') ? 'text-amber-600' : 'text-rose-600')}>
                      {result.rating}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-slate-200 pb-2">
                    <span className="text-slate-600">Daily Invoiced Billing:</span>
                    <span className="font-medium text-slate-800">\${result.dailySales}/day</span>
                  </div>
                  <div className="flex justify-between items-center text-sm pt-1">
                    <span className="text-slate-600">{'Trapped Cash (>30 Days):'}</span>
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
    category: 'Pricing & Billing',
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
    category: 'Profitability & Margins',
    term: 'Agency Gross Margin',
    searchKeywords: ['agency gross margin benchmark', 'digital agency profit margin', 'services gross profit formula'],
    definition: 'Total client revenue minus all direct project labor and direct subcontractor costs, expressed as a percentage of revenue.',
    expanded: 'Healthy agencies target an Agency Gross Margin of 50% to 60%+. If gross margin dips below 45%, overhead expenses and administrative payroll will quickly push the firm into net losses. Tracking gross margin per project in VeloTime ensures underperforming accounts are renegotiated before fiscal year-end.',
    relatedTerms: ['effective-hourly-rate', 'project-overrun', 'blended-rate'],
    toolUrl: '/tools/project-profitability',
    toolName: 'Project Profitability & Gross Margin Tool'
  },
  {
    slug: 'client-concentration-risk',
    category: 'Operations & Risk',
    term: 'Client Concentration Risk',
    searchKeywords: ['client concentration risk agency', 'agency revenue concentration formula', 'single client dependency risk', 'agency revenue risk calculator'],
    definition: 'The financial exposure and operational vulnerability caused by relying on a single client for an outsized portion of total agency revenue.',
    expanded: 'In digital agencies and software consultancies, client concentration risk occurs when a single client accounts for more than 20% to 25% of annual revenue. If an agency with $1,000,000 in revenue receives $350,000 from one account, losing that client triggers immediate payroll deficits and emergency layoffs. Tracking daily timesheet hours in VeloTime ensures leadership spots account dependency early and actively monitors margin resilience.',
    relatedTerms: ['retainer', 'burn-rate', 'days-sales-outstanding'],
    tool: {
      slug: 'client-concentration-risk',
      name: 'Client Concentration & Revenue Risk Calculator',
      category: 'Operations & Risk',
      tag: 'Risk Telemetry',
      desc: 'Calculate your agency’s revenue dependency on your largest client and model the required pipeline to dilute concentration risk.',
      generateComponent: () => `
'use client';
import Breadcrumbs from '../../../components/Breadcrumbs';
import React, { useState } from 'react';
import Link from 'next/link';
import { ShieldAlert, Calculator, TrendingUp, ArrowRight, DollarSign, CheckCircle2 } from 'lucide-react';

export default function ClientConcentrationCalculator() {
  const [topClientRevenue, setTopClientRevenue] = useState(300000);
  const [totalAgencyRevenue, setTotalAgencyRevenue] = useState(1000000);
  const [result, setResult] = useState(null);

  const calculate = () => {
    const top = parseFloat(topClientRevenue) || 0;
    const total = parseFloat(totalAgencyRevenue) || 0;
    if (total <= 0 || top <= 0) return;

    const ratio = (top / total) * 100;
    let rating = 'Healthy & Diversified (Low Risk)';
    let badgeColor = 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800';

    if (ratio > 40) {
      rating = 'Severe / Existential Risk (>40%)';
      badgeColor = 'text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-800';
    } else if (ratio > 25) {
      rating = 'High Concentration Risk (25% - 40%)';
      badgeColor = 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800';
    } else if (ratio > 15) {
      rating = 'Moderate Concentration (15% - 25%)';
      badgeColor = 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800';
    }

    const targetTotal = top / 0.20;
    const pipelineRequired = Math.max(0, targetTotal - total);

    setResult({
      ratio: ratio.toFixed(1),
      rating,
      badgeColor,
      pipelineRequired: Math.round(pipelineRequired).toLocaleString(),
      otherRevenue: Math.round(Math.max(0, total - top)).toLocaleString()
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 font-sans text-slate-900 dark:text-slate-100 transition-colors">
      <main className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="bg-white dark:bg-zinc-900 rounded-3xl shadow-sm border border-slate-200 dark:border-zinc-800 p-6 sm:p-10">
          <div className="mb-8">
            <Breadcrumbs items={[
              { name: 'Home', path: '/' },
              { name: 'Free Tools', path: '/tools' },
              { name: 'Client Concentration Risk Calculator', path: '/tools/client-concentration-risk' }
            ]} />
          </div>

          <div className="mb-8 border-b border-slate-200 dark:border-zinc-800 pb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary-50 dark:bg-primary-950/40 text-primary-700 dark:text-primary-400 font-bold text-xs rounded-full mb-3 border border-primary-200 dark:border-primary-800">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Agency Risk Management</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Client Concentration Risk Calculator
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
              Model your agency’s revenue dependency on your #1 account and discover how much new pipeline is needed to dilute concentration risk.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-slate-900 dark:text-slate-100 mb-1.5">
                  Annual Revenue from Largest Client ($)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">$</span>
                  <input 
                    type="number" 
                    className="w-full bg-slate-50 dark:bg-zinc-800/80 border border-slate-200 dark:border-zinc-700 rounded-xl pl-8 pr-4 py-3 text-sm font-medium focus:ring-2 focus:ring-primary-500 outline-none"
                    value={topClientRevenue} 
                    onChange={(e) => setTopClientRevenue(e.target.value)} 
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 dark:text-slate-100 mb-1.5">
                  Total Annual Agency Revenue ($)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">$</span>
                  <input 
                    type="number" 
                    className="w-full bg-slate-50 dark:bg-zinc-800/80 border border-slate-200 dark:border-zinc-700 rounded-xl pl-8 pr-4 py-3 text-sm font-medium focus:ring-2 focus:ring-primary-500 outline-none"
                    value={totalAgencyRevenue} 
                    onChange={(e) => setTotalAgencyRevenue(e.target.value)} 
                  />
                </div>
              </div>

              <button 
                onClick={calculate}
                className="w-full bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-200 text-white dark:text-slate-900 font-bold py-3.5 rounded-xl transition-all cursor-pointer text-sm shadow-sm"
              >
                Analyze Concentration Risk
              </button>
            </div>

            <div className="bg-slate-50 dark:bg-zinc-800/60 rounded-2xl p-6 border border-slate-200 dark:border-zinc-700 flex flex-col justify-center">
              {result ? (
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm border-b border-slate-200 dark:border-zinc-700 pb-3">
                    <span className="text-slate-600 dark:text-slate-400">Top Client Share:</span>
                    <span className="font-black text-2xl text-slate-900 dark:text-white">{result.ratio}%</span>
                  </div>
                  
                  <div className="border-b border-slate-200 dark:border-zinc-700 pb-3">
                    <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1">Exposure Level:</span>
                    <span className={"inline-block px-3 py-1 rounded-lg text-xs font-bold border " + result.badgeColor}>
                      {result.rating}
                    </span>
                  </div>

                  <div className="flex justify-between items-center text-sm border-b border-slate-200 dark:border-zinc-700 pb-3">
                    <span className="text-slate-600 dark:text-slate-400">Rest of Agency Revenue:</span>
                    <span className="font-bold text-slate-900 dark:text-white">\${result.otherRevenue}</span>
                  </div>

                  <div className="pt-1">
                    <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1">Pipeline to Dilute to ≤20%:</span>
                    <span className="font-black text-emerald-600 dark:text-emerald-400 text-xl">
                      +\${result.pipelineRequired}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="text-center text-slate-400 dark:text-slate-500 py-8">
                  <p className="text-sm font-medium">Input your revenue figures and click analyze to model client risk.</p>
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
    slug: 'context-switching-cost',
    category: 'Capacity & Utilization',
    term: 'Context Switching Tax',
    searchKeywords: ['context switching cost software engineering', 'multitasking productivity loss formula', 'agency cognitive load tax', 'context switching calculator'],
    definition: 'The progressive loss of engineering and creative billable capacity caused by splitting staff across multiple simultaneous client projects.',
    expanded: 'Based on Gerald Weinberg’s landmark research, an engineer working on 2 projects loses 20% of their work week to context switching friction. On 3 simultaneous projects, 40% of their time is lost to mental reorientation and administrative drag. At a loaded salary of $110,000, having 10 developers juggle 3 projects each burns $440,000 in unrecoverable payroll waste every single year.',
    relatedTerms: ['billable-utilization', 'bench-cost', 'non-billable-time'],
    tool: {
      slug: 'context-switching-cost',
      name: 'Context Switching Drag & Lost Payroll Estimator',
      category: 'Capacity & Utilization',
      tag: 'Workforce Velocity',
      desc: 'Estimate the annual dollar payroll and engineering hours lost to project multitasking based on Weinberg’s Law.',
      generateComponent: () => `
'use client';
import Breadcrumbs from '../../../components/Breadcrumbs';
import React, { useState } from 'react';
import { Layers, Calculator, ArrowRight, ShieldAlert, Clock } from 'lucide-react';

export default function ContextSwitchingCalculator() {
  const [headcount, setHeadcount] = useState(10);
  const [avgLoadedSalary, setAvgLoadedSalary] = useState(115000);
  const [activeProjects, setActiveProjects] = useState(3);
  const [result, setResult] = useState(null);

  const calculate = () => {
    const count = parseInt(headcount) || 0;
    const salary = parseFloat(avgLoadedSalary) || 0;
    const projects = parseInt(activeProjects) || 1;

    if (count <= 0 || salary <= 0) return;

    let lossPercent = 0;
    if (projects === 2) lossPercent = 20;
    else if (projects === 3) lossPercent = 40;
    else if (projects === 4) lossPercent = 60;
    else if (projects >= 5) lossPercent = 75;

    const totalPayroll = count * salary;
    const annualWaste = totalPayroll * (lossPercent / 100);
    const hoursPerPersonLostPerWeek = (40 * lossPercent) / 100;
    const totalTeamHoursLostPerYear = count * hoursPerPersonLostPerWeek * 50;

    setResult({
      lossPercent,
      annualWaste: Math.round(annualWaste).toLocaleString(),
      hoursPerPersonLostPerWeek: hoursPerPersonLostPerWeek.toFixed(1),
      totalTeamHoursLostPerYear: Math.round(totalTeamHoursLostPerYear).toLocaleString(),
      totalPayroll: Math.round(totalPayroll).toLocaleString()
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 font-sans text-slate-900 dark:text-slate-100 transition-colors">
      <main className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="bg-white dark:bg-zinc-900 rounded-3xl shadow-sm border border-slate-200 dark:border-zinc-800 p-6 sm:p-10">
          <div className="mb-8">
            <Breadcrumbs items={[
              { name: 'Home', path: '/' },
              { name: 'Free Tools', path: '/tools' },
              { name: 'Context Switching Estimator', path: '/tools/context-switching-cost' }
            ]} />
          </div>

          <div className="mb-8 border-b border-slate-200 dark:border-zinc-800 pb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary-50 dark:bg-primary-950/40 text-primary-700 dark:text-primary-400 font-bold text-xs rounded-full mb-3 border border-primary-200 dark:border-primary-800">
              <Layers className="w-3.5 h-3.5" />
              <span>Engineering Cognitive Telemetry</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Context Switching Drag & Lost Payroll Estimator
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
              Calculate the true payroll waste and engineering bandwidth destroyed by assigning engineers to multiple simultaneous client projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-slate-900 dark:text-slate-100 mb-1.5">
                  Billable Engineering Headcount
                </label>
                <input 
                  type="number" 
                  min="1"
                  className="w-full bg-slate-50 dark:bg-zinc-800/80 border border-slate-200 dark:border-zinc-700 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-primary-500 outline-none"
                  value={headcount} 
                  onChange={(e) => setHeadcount(e.target.value)} 
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 dark:text-slate-100 mb-1.5">
                  Avg Fully-Loaded Annual Salary ($)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">$</span>
                  <input 
                    type="number" 
                    className="w-full bg-slate-50 dark:bg-zinc-800/80 border border-slate-200 dark:border-zinc-700 rounded-xl pl-8 pr-4 py-3 text-sm font-medium focus:ring-2 focus:ring-primary-500 outline-none"
                    value={avgLoadedSalary} 
                    onChange={(e) => setAvgLoadedSalary(e.target.value)} 
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 dark:text-slate-100 mb-1.5">
                  Simultaneous Client Projects per Person
                </label>
                <select 
                  className="w-full bg-slate-50 dark:bg-zinc-800/80 border border-slate-200 dark:border-zinc-700 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-primary-500 outline-none"
                  value={activeProjects} 
                  onChange={(e) => setActiveProjects(e.target.value)}
                >
                  <option value={1}>1 Project (0% Switching Loss - Deep Work)</option>
                  <option value={2}>2 Projects (20% Capacity Lost)</option>
                  <option value={3}>3 Projects (40% Capacity Lost)</option>
                  <option value={4}>4 Projects (60% Capacity Lost)</option>
                  <option value={5}>5+ Projects (75% Severe Cognitive Overload)</option>
                </select>
              </div>

              <button 
                onClick={calculate}
                className="w-full bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-200 text-white dark:text-slate-900 font-bold py-3.5 rounded-xl transition-all cursor-pointer text-sm shadow-sm"
              >
                Estimate Context Switching Waste
              </button>
            </div>

            <div className="bg-slate-50 dark:bg-zinc-800/60 rounded-2xl p-6 border border-slate-200 dark:border-zinc-700 flex flex-col justify-center">
              {result ? (
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm border-b border-slate-200 dark:border-zinc-700 pb-3">
                    <span className="text-slate-600 dark:text-slate-400">Capacity Lost to Reorientation:</span>
                    <span className="font-black text-rose-600 dark:text-rose-400 text-2xl">{result.lossPercent}%</span>
                  </div>

                  <div className="flex justify-between items-center text-sm border-b border-slate-200 dark:border-zinc-700 pb-3">
                    <span className="text-slate-600 dark:text-slate-400">Annual Payroll Destroyed:</span>
                    <span className="font-black text-rose-600 dark:text-rose-400 text-xl">\${result.annualWaste} / yr</span>
                  </div>

                  <div className="flex justify-between items-center text-sm border-b border-slate-200 dark:border-zinc-700 pb-3">
                    <span className="text-slate-600 dark:text-slate-400">Hours Lost per Person/Week:</span>
                    <span className="font-bold text-slate-900 dark:text-white">{result.hoursPerPersonLostPerWeek} hrs/wk</span>
                  </div>

                  <div className="pt-1">
                    <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1">Total Team Lost Engineering Hours:</span>
                    <span className="font-black text-slate-900 dark:text-white text-lg">
                      {result.totalTeamHoursLostPerYear} hrs / yr
                    </span>
                  </div>
                </div>
              ) : (
                <div className="text-center text-slate-400 dark:text-slate-500 py-8">
                  <p className="text-sm font-medium">Select your project load and click estimate to reveal cognitive drag.</p>
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
    slug: 'subcontractor-margin',
    category: 'Pricing & Billing',
    term: 'Subcontractor Margin & Markup Ratio',
    searchKeywords: ['subcontractor markup agency formula', 'freelancer margin calculation', 'subcontractor pass through spread', 'contractor labor markup calculator'],
    definition: 'The gross profit spread between what an agency bills a client for specialized contract labor and what it pays the 1099 contractor.',
    expanded: 'Agencies frequently augment core teams with external contractors. A healthy Subcontractor Margin typically ranges between 35% and 50% (equivalent to a 1.5x to 2.0x markup). If an agency bills a freelance cloud architect at $180/hr and pays them $100/hr, the agency captures a $80/hr spread (44.4% margin) to cover project management, client communication, and agency profit.',
    relatedTerms: ['blended-rate', 'cost-rate', 'effective-hourly-rate'],
    tool: {
      slug: 'subcontractor-margin',
      name: 'Subcontractor Margin & Markup Calculator',
      category: 'Pricing & Billing',
      tag: 'Labor Economics',
      desc: 'Calculate your exact profit margin percentage, markup multiplier, and annual net spread when billing contract talent.',
      generateComponent: () => `
'use client';
import Breadcrumbs from '../../../components/Breadcrumbs';
import React, { useState } from 'react';
import { DollarSign, Calculator, ArrowRight, CheckCircle2, TrendingUp } from 'lucide-react';

export default function SubcontractorMarginCalculator() {
  const [clientHourlyRate, setClientHourlyRate] = useState(175);
  const [subHourlyRate, setSubHourlyRate] = useState(105);
  const [annualContractorHours, setAnnualContractorHours] = useState(800);
  const [result, setResult] = useState(null);

  const calculate = () => {
    const client = parseFloat(clientHourlyRate) || 0;
    const sub = parseFloat(subHourlyRate) || 0;
    const hours = parseFloat(annualContractorHours) || 0;

    if (client <= 0 || sub <= 0) return;

    const spread = client - sub;
    const marginPercent = (spread / client) * 100;
    const markupFactor = client / sub;
    const annualProfitSpread = spread * hours;

    setResult({
      spread: spread.toFixed(2),
      marginPercent: marginPercent.toFixed(1),
      markupFactor: markupFactor.toFixed(2),
      annualProfitSpread: Math.round(annualProfitSpread).toLocaleString()
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 font-sans text-slate-900 dark:text-slate-100 transition-colors">
      <main className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="bg-white dark:bg-zinc-900 rounded-3xl shadow-sm border border-slate-200 dark:border-zinc-800 p-6 sm:p-10">
          <div className="mb-8">
            <Breadcrumbs items={[
              { name: 'Home', path: '/' },
              { name: 'Free Tools', path: '/tools' },
              { name: 'Subcontractor Margin Calculator', path: '/tools/subcontractor-margin' }
            ]} />
          </div>

          <div className="mb-8 border-b border-slate-200 dark:border-zinc-800 pb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary-50 dark:bg-primary-950/40 text-primary-700 dark:text-primary-400 font-bold text-xs rounded-full mb-3 border border-primary-200 dark:border-primary-800">
              <DollarSign className="w-3.5 h-3.5" />
              <span>Contract Labor Economics</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Subcontractor Margin & Markup Calculator
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
              Determine your gross profit spread, markup factor, and total annual earnings on pass-through contractor hours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-slate-900 dark:text-slate-100 mb-1.5">
                  Client Billing Rate ($/hr)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">$</span>
                  <input 
                    type="number" 
                    className="w-full bg-slate-50 dark:bg-zinc-800/80 border border-slate-200 dark:border-zinc-700 rounded-xl pl-8 pr-4 py-3 text-sm font-medium focus:ring-2 focus:ring-primary-500 outline-none"
                    value={clientHourlyRate} 
                    onChange={(e) => setClientHourlyRate(e.target.value)} 
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 dark:text-slate-100 mb-1.5">
                  Subcontractor Cost Rate ($/hr)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">$</span>
                  <input 
                    type="number" 
                    className="w-full bg-slate-50 dark:bg-zinc-800/80 border border-slate-200 dark:border-zinc-700 rounded-xl pl-8 pr-4 py-3 text-sm font-medium focus:ring-2 focus:ring-primary-500 outline-none"
                    value={subHourlyRate} 
                    onChange={(e) => setSubHourlyRate(e.target.value)} 
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 dark:text-slate-100 mb-1.5">
                  Estimated Annual Subcontractor Hours
                </label>
                <input 
                  type="number" 
                  className="w-full bg-slate-50 dark:bg-zinc-800/80 border border-slate-200 dark:border-zinc-700 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-primary-500 outline-none"
                  value={annualContractorHours} 
                  onChange={(e) => setAnnualContractorHours(e.target.value)} 
                />
              </div>

              <button 
                onClick={calculate}
                className="w-full bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-200 text-white dark:text-slate-900 font-bold py-3.5 rounded-xl transition-all cursor-pointer text-sm shadow-sm"
              >
                Calculate Subcontractor Yield
              </button>
            </div>

            <div className="bg-slate-50 dark:bg-zinc-800/60 rounded-2xl p-6 border border-slate-200 dark:border-zinc-700 flex flex-col justify-center">
              {result ? (
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm border-b border-slate-200 dark:border-zinc-700 pb-3">
                    <span className="text-slate-600 dark:text-slate-400">Gross Margin Spread:</span>
                    <span className="font-black text-emerald-600 dark:text-emerald-400 text-2xl">{result.marginPercent}%</span>
                  </div>

                  <div className="flex justify-between items-center text-sm border-b border-slate-200 dark:border-zinc-700 pb-3">
                    <span className="text-slate-600 dark:text-slate-400">Hourly Profit Spread:</span>
                    <span className="font-bold text-slate-900 dark:text-white">\${result.spread} / hr</span>
                  </div>

                  <div className="flex justify-between items-center text-sm border-b border-slate-200 dark:border-zinc-700 pb-3">
                    <span className="text-slate-600 dark:text-slate-400">Effective Markup Multiplier:</span>
                    <span className="font-bold text-slate-900 dark:text-white">{result.markupFactor}x</span>
                  </div>

                  <div className="pt-1">
                    <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1">Total Annual Agency Profit Spread:</span>
                    <span className="font-black text-emerald-600 dark:text-emerald-400 text-xl">
                      +\${result.annualProfitSpread} / yr
                    </span>
                  </div>
                </div>
              ) : (
                <div className="text-center text-slate-400 dark:text-slate-500 py-8">
                  <p className="text-sm font-medium">Input client and subcontractor rates to model profit spread.</p>
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
    slug: 'fixed-time-flex-scope',
    category: 'Pricing & Billing',
    term: 'Fixed-Time Flex-Scope Contract',
    searchKeywords: ['fixed time flex scope contract', 'agile agency fixed budget contract', 'flex scope time tracking', 'fixed fee vs flex scope'],
    definition: 'A client engagement model where project schedule and financial budget are strictly locked, but feature deliverables flex according to priority.',
    expanded: 'Traditional fixed-bid projects fail because client requirements inevitably change while deadlines and budgets remain immovable. In a Fixed-Time Flex-Scope framework, the client purchases dedicated sprint capacity (e.g. 6 two-week sprints at $20,000/sprint). The agency guarantees delivery on the deadline, while the client prioritizes backlog user stories. Timesheet telemetry in VeloTime gives both parties continuous visibility into burn pacing and sprint velocity.',
    relatedTerms: ['fixed-fee-project', 'time-and-materials', 'burn-rate']
  },
  {
    slug: 'cost-of-delay',
    category: 'Profitability & Margins',
    term: 'Cost of Delay (CoD)',
    searchKeywords: ['cost of delay formula software', 'agency cost of delay calculation', 'project delay revenue impact'],
    definition: 'The financial cost incurred over time by delaying the delivery of a feature, campaign, or client deliverable.',
    expanded: 'Cost of Delay (CoD) combines urgency and monetary value. If launching an e-commerce redesign is delayed by 4 weeks, and the redesign is expected to generate $50,000/month in incremental revenue, the Cost of Delay is $50,000. Understanding CoD helps agency account executives push back on scope creep and client review bottlenecks with objective financial numbers.',
    relatedTerms: ['project-overrun', 'scope-creep', 'work-in-progress']
  },
  {
    slug: 'sprint-based-retainer',
    category: 'Pricing & Billing',
    term: 'Sprint-Based Agile Retainer',
    searchKeywords: ['sprint based retainer pricing', 'agile agency retainer model', 'fixed capacity billing model'],
    definition: 'A recurring billing agreement where an agency sells dedicated sprint teams and cycles rather than hourly timesheet increments.',
    expanded: 'Sprint-based retainers represent the gold standard for software consultancies. Instead of haggling over individual 15-minute tasks, clients buy guaranteed developer velocity per two-week cycle. Logging time in VeloTime provides the audit trail required for client confidence without turning timesheets into micromanaged disputes.',
    relatedTerms: ['retainer', 'blended-rate', 'billable-utilization']
  },
  {
    slug: 'revenue-churn-rate',
    category: 'Profitability & Margins',
    term: 'Agency Net Revenue Churn',
    searchKeywords: ['agency net revenue churn rate', 'consulting client churn benchmark', 'agency client retention formula'],
    definition: 'The percentage of recurring client retainer revenue lost over a given period due to cancellations and contract downgrades.',
    expanded: 'While customer logo churn measures lost accounts, Net Revenue Churn measures the actual dollar impact on agency cash flow. Top digital agencies maintain negative net revenue churn by expanding existing client retainers faster than losing departed accounts. Monitoring client margin and utilization trends in VeloTime provides early warning signals before a dissatisfied retainer churns.',
    relatedTerms: ['retainer', 'burn-rate', 'days-sales-outstanding']
  },
  {
    slug: 'unbilled-wip',
    category: 'Operations & Risk',
    term: 'Unbilled Work in Progress (Unbilled WIP)',
    searchKeywords: ['unbilled wip accounting agency', 'unbilled work in progress formula', 'accrued unbilled client revenue'],
    definition: 'The total dollar value of billable client hours that have been worked and logged but have not yet been invoiced.',
    expanded: 'Unbilled WIP represents trapped cash. If an agency works 500 billable hours in August but delays sending invoices until mid-September, its unbilled WIP sits idle on the balance sheet. High unbilled WIP stresses agency payroll reserves. Using VeloTime’s instant timesheet exports reduces the gap between time entry and invoice dispatch to zero.',
    relatedTerms: ['work-in-progress', 'days-sales-outstanding', 'realization-rate'],
    toolUrl: '/tools/invoice-generator',
    toolName: 'Free Invoice Generator & PDF Maker'
  },
  {
    slug: 'realized-billing-multiplier',
    category: 'Pricing & Billing',
    term: 'Realized Billing Multiplier',
    searchKeywords: ['realized billing multiplier vs target multiplier', 'agency labor markup yield', 'actual direct labor multiplier'],
    definition: 'The actual client revenue collected per dollar of direct labor cost after accounting for write-downs, discounts, and unbilled overtime.',
    expanded: 'While an agency may set a target billing multiplier of 3.0x, unbilled scope creep, administrative friction, and negotiated discounts often drop the Realized Billing Multiplier to 2.2x or lower. Calculating your realized multiplier highlights exactly where profit leaks occur across your project portfolio.',
    relatedTerms: ['overhead-multiplier', 'effective-hourly-rate', 'cost-rate'],
    toolUrl: '/tools/hourly-rate',
    toolName: 'Hourly Rate & Labor Multiplier Calculator'
  },
  {
    slug: 'capacity-buffer',
    category: 'Capacity & Utilization',
    term: 'Capacity Buffer & Utilization Slack',
    searchKeywords: ['agency capacity buffer benchmark', 'utilization slack percentage', 'burnout prevention utilization rate'],
    definition: 'The intentionally unallocated portion of team bandwidth (typically 15% to 20%) reserved for deep work, emergency client requests, and illness.',
    expanded: 'Scheduling agency staff at 100% capacity creates compounding project delays whenever the slightest disruption occurs. Elite engineering firms target an 80% to 85% utilization rate, reserving a 15% capacity buffer. This buffer prevents developer burnout while maintaining the agility to absorb urgent client requests without blowing sprint commitments.',
    relatedTerms: ['target-utilization', 'billable-utilization', 'non-billable-time'],
    toolUrl: '/tools/billable-utilization',
    toolName: 'Billable Utilization & Capacity Calculator'
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
    const { google } = require('googleapis');
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
    { name: "🏷️ Category", value: term.category || "Profitability & Margins" },
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
    category: nextItem.category || 'Profitability & Margins',
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
    `    category: '${termEntry.category}',\n` +
    (termEntry.toolUrl ? `    toolUrl: '${termEntry.toolUrl}',\n    toolName: '${termEntry.toolName}',\n` : '') +
    `    term: '${termEntry.term}',\n` +
    `    definition: ${JSON.stringify(termEntry.definition)},\n` +
    `    expanded: ${JSON.stringify(termEntry.expanded)},\n` +
    `    relatedTerms: ${JSON.stringify(termEntry.relatedTerms)}\n` +
    `  }\n];`;

  // TARGET: Exactly the end of the `glossaryTerms` array (right before `export const glossaryCategories`)
  const termsEndPattern = /\n\s*\];\s*\nexport const glossaryCategories/;

  if (!termsEndPattern.test(content)) {
    throw new Error("Could not find the end of glossaryTerms array in src/content/glossary.js");
  }

  content = content.replace(termsEndPattern, termEntryStr + '\n\nexport const glossaryCategories');
  fs.writeFileSync(glossaryPath, content, 'utf8');
  console.log(`✅ Appended "${nextItem.term}" into glossaryTerms array in src/content/glossary.js`);

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
  console.log(`🏷️ Category: ${termEntry.category}`);
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
