import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import { 
  Calculator, 
  Clock, 
  DollarSign, 
  Receipt, 
  TrendingUp, 
  Users, 
  Flame, 
  AlertTriangle,
  ArrowRight,
  Sparkles,
  Scale
} from 'lucide-react';

export const metadata = {
  title: 'Free Agency & Freelance Calculator Suite | VeloTime',
  description: '10 powerful interactive calculators to model project margins, calculate value-based pricing, optimize billable rates, and audit team utilization in seconds.',
  openGraph: {
    title: 'Free Agency & Freelance Calculators | VeloTime',
    description: 'Free interactive financial and operational calculators for software consultancies, design agencies, and freelancers.',
    url: 'https://velotime.dg.tools/tools',
  }
};

const toolCategories = [
  {
    category: 'Profitability & Pricing',
    desc: 'Model project rates, prevent budget overages, and optimize gross margins.',
    tools: [
      {
        slug: 'value-based-pricing-calculator',
        name: 'Value-Based Pricing & Proposal ROI Calculator',
        desc: 'Quantify client economic ROI, model 10%–25% value capture tiers, and verify your resulting Effective Hourly Rate (EHR).',
        icon: 'Scale',
        tag: 'Agency Strategy'
      },
      {
        slug: 'hourly-rate',
        name: 'Hourly Rate Calculator',
        desc: 'Calculate the exact hourly billing rate required to hit your annual revenue and profit targets after taxes and overhead.',
        icon: 'DollarSign',
        tag: 'Pricing Strategy'
      },
      {
        slug: 'project-profitability',
        name: 'Project Profitability Calculator',
        desc: 'Calculate expected profit margins and gross ROI across fixed-fee and hourly client projects.',
        icon: 'TrendingUp',
        tag: 'Financial Telemetry'
      },
      {
        slug: 'scope-creep-cost',
        name: 'Scope Creep Cost Estimator',
        desc: 'Calculate how many thousands of dollars in unbilled micro-tasks and out-of-scope revisions your agency bleeds each year.',
        icon: 'AlertTriangle',
        tag: 'Margin Protection'
      },
      {
        slug: 'overhead-multiplier',
        name: 'Overhead Multiplier Calculator',
        desc: "Calculate your agency's overhead multiplier and loaded labor rate to ensure all operating expenses are baked into client pricing.",
        icon: 'Calculator',
        tag: 'Cost Accounting'
      }
    ]
  },
  {
    category: 'Capacity & Utilization',
    desc: 'Track team bandwidth, retainer burn, and billable engineering velocity.',
    tools: [
      {
        slug: 'billable-utilization',
        name: 'Billable Utilization Calculator',
        desc: "Measure your team's ratio of billable client hours vs administrative overhead to optimize billable efficiency.",
        icon: 'Clock',
        tag: 'Team Operations'
      },
      {
        slug: 'retainer-burn-rate',
        name: 'Retainer Burn Rate Calculator',
        desc: 'Track monthly retainer hour pacing to ensure your team never exceeds client budgets or works for free.',
        icon: 'Flame',
        tag: 'Retainer Management'
      },
      {
        slug: 'bench-cost',
        name: 'Bench Cost & Idle Capacity Calculator',
        desc: 'Calculate the true monthly and annual payroll cost of unassigned staff and bench time across your agency.',
        icon: 'Users',
        tag: 'Workforce Economics'
      }
    ]
  },
  {
    category: 'Invoicing & Payroll Overhead',
    desc: 'Generate instant invoices and model true loaded labor costs.',
    tools: [
      {
        slug: 'timesheet-friction-calculator',
        name: 'Timesheet Drag & Lost Salary Calculator',
        desc: 'Quantify the direct annual payroll cost of slow dropdown modals, floating timers, and Friday afternoon timesheet reconstruction.',
        icon: 'Clock',
        tag: 'Operations Friction'
      },
      {
        slug: 'invoice-generator',
        name: 'Free Invoice Generator & PDF Maker',
        desc: 'Create, customize, and print beautiful, professional client invoices with zero watermarks or signup required.',
        icon: 'Receipt',
        tag: 'Client Billing'
      },
      {
        slug: 'employee-cost',
        name: 'True Employee Cost Calculator',
        desc: 'Calculate the fully loaded hourly cost of hiring employees including benefits, payroll taxes, equipment, and overhead.',
        icon: 'Users',
        tag: 'Payroll & HR'
      },
      {
        slug: 'freelance-tax',
        name: 'Freelance Tax Estimator',
        desc: 'Estimate quarterly estimated tax obligations, self-employment tax, and take-home income for 1099 contractors.',
        icon: 'Calculator',
        tag: 'Tax Planning'
      }
    ]
  }
];

export default function ToolsHubPage() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Scale': return <Scale className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'DollarSign': return <DollarSign className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-primary-600 dark:text-primary-400" />;
      case 'AlertTriangle': return <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-400" />;
      case 'Clock': return <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
      case 'Flame': return <Flame className="w-6 h-6 text-rose-600 dark:text-rose-400" />;
      case 'Receipt': return <Receipt className="w-6 h-6 text-purple-600 dark:text-purple-400" />;
      case 'Users': return <Users className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />;
      case 'Calculator': return <Calculator className="w-6 h-6 text-teal-600 dark:text-teal-400" />;
      default: return <Calculator className="w-6 h-6 text-slate-600 dark:text-slate-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 font-sans text-slate-900 dark:text-slate-100 transition-colors">
      <main className="pt-32 pb-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <div className="mb-8">
          <Breadcrumbs items={[
            { name: 'Home', path: '/' },
            { name: 'Free Tools Suite', path: '/tools' }
          ]} />
        </div>

        {/* Hero Section */}
        <header className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 dark:bg-primary-950/40 text-primary-600 dark:text-primary-400 font-bold text-xs rounded-full mb-4 border border-primary-200 dark:border-primary-800">
            <Sparkles className="w-3.5 h-3.5" />
            <span>100% Free Tools & Calculators</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-4">
            Agency Economics & Margin Calculators
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Free, zero-signup financial models and calculators designed for digital agencies, dev shops, and consultancies to price work accurately, audit loaded costs, and protect project margins.
          </p>
        </header>

        {/* Categories & Tools Grid */}
        <div className="space-y-16">
          {toolCategories.map((cat, idx) => (
            <section key={idx} className="space-y-6">
              <div className="border-b border-slate-200 dark:border-zinc-800 pb-4">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                  <span>{cat.category}</span>
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  {cat.desc}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.tools.map((tool) => (
                  <Link 
                    key={tool.slug} 
                    href={`/tools/${tool.slug}`}
                    className="group bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-primary-500 dark:hover:border-primary-500 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-slate-50 dark:bg-zinc-800 rounded-xl group-hover:scale-110 transition-transform">
                          {getIcon(tool.icon)}
                        </div>
                        <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-slate-300 rounded-md">
                          {tool.tag}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors mb-2">
                        {tool.name}
                      </h3>

                      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                        {tool.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800/80 flex items-center justify-between text-xs font-bold text-primary-600 dark:text-primary-400 group-hover:translate-x-1 transition-transform">
                      <span>Launch Calculator</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Global CTA */}
        <div className="not-prose bg-slate-900 dark:bg-zinc-900 border border-slate-800 text-white p-8 sm:p-10 rounded-2xl my-16 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="text-2xl font-bold mb-2 text-white">
              Ready to automate your timesheets & project margins?
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Stop guessing on project profitability. VeloTime gives your team a 10-second weekly keyboard matrix with live margin dashboards.
            </p>
          </div>
          <a
            href="https://app.velotime.dg.tools"
            className="inline-block bg-primary-600 hover:bg-primary-500 text-white font-bold py-3.5 px-8 rounded-lg shadow-sm transition-colors text-sm shrink-0 border border-primary-700"
          >
            Start 14-day free trial &rarr;
          </a>
        </div>

      </main>
    </div>
  );
}
