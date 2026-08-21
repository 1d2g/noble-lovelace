const fs = require('fs');
const path = require('path');

const landingDir = 'C:\\Users\\4thge\\Desktop\\dgtools\\velotime-landing';

// 1. Create src/app/pricing/page.js
const pricingDir = path.join(landingDir, 'src', 'app', 'pricing');
if (!fs.existsSync(pricingDir)) {
  fs.mkdirSync(pricingDir, { recursive: true });
}

const pricingPageCode = `import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';

export const metadata = {
  title: 'Pricing & Plans | VeloTime - Simple, Predictable Pricing',
  description: 'Transparent pricing for solo consultants, remote teams, and growing agencies. 14-day free trial, no credit card required.',
  openGraph: {
    title: 'VeloTime Pricing | Simple, Predictable Agency Time Tracking',
    description: 'No hidden fees. Full keyboard matrix, invoice generator, and margin reports included in every plan.',
    url: 'https://velotime.dg.tools/pricing',
  }
};

const plans = [
  {
    name: 'Starter / Solo',
    badge: 'Freelancers & Solo Consultants',
    price: '$9',
    period: '/month',
    desc: 'For independent professionals who want lightning-fast time entry and beautiful client invoicing.',
    highlighted: false,
    cta: 'Start 14-Day Free Trial',
    ctaLink: 'https://app.velotime.dg.tools',
    features: [
      'Single user workspace',
      'Unlimited client projects',
      'High-velocity keyboard matrix',
      'One-click invoice generator & Stripe link',
      'Expense logging & receipt attachment',
      'CSV / PDF data exports',
      'Zero spyware or screenshot monitoring'
    ]
  },
  {
    name: 'Agency Pro',
    badge: 'Most Popular for Teams',
    price: '$29',
    period: '/month',
    desc: 'For software agencies, design studios, and consultancies that need team-wide velocity and project margin telemetry.',
    highlighted: true,
    cta: 'Start 14-Day Free Trial',
    ctaLink: 'https://app.velotime.dg.tools',
    features: [
      'Up to 10 team seats included',
      'All Starter features',
      'Team timesheet review & lock approval',
      'Real-time project profitability & margin reports',
      'Billable vs non-billable utilization tracking',
      'Custom employee cost & billing rates',
      'Dedicated priority email support'
    ]
  },
  {
    name: 'Scale Agency',
    badge: 'Growing & High-Volume Consultancies',
    price: '$79',
    period: '/month',
    desc: 'For mature agencies managing multiple retainer clients with complex project allocations.',
    highlighted: false,
    cta: 'Start 14-Day Free Trial',
    ctaLink: 'https://app.velotime.dg.tools',
    features: [
      'Unlimited team members',
      'All Pro features',
      'Multi-organization workspace support',
      'Advanced capacity planning & retainer burn alerts',
      'Custom domain & white-label invoices',
      'QuickBooks & accounting integrations',
      'Dedicated onboarding & migration assistance'
    ]
  }
];

const faqs = [
  {
    q: 'Do I need a credit card to start my free trial?',
    a: 'No. You can sign up and use VeloTime with your entire team for 14 days without entering any payment information.'
  },
  {
    q: 'Can I cancel or change plans at any time?',
    a: 'Yes, you can upgrade, downgrade, or cancel your subscription directly from your Organization Settings with one click at any time.'
  },
  {
    q: 'Does VeloTime monitor employee screens or record keystrokes?',
    a: 'Never. VeloTime is built on a strict privacy-first foundation. We do not capture screenshots, log background apps, or track mouse movement. We provide retrospective keyboard matrix entry designed for high-trust teams.'
  },
  {
    q: 'How does invoicing and payments work?',
    a: 'You can generate professional PDF invoices from your logged hours and unbilled expenses, or connect your Stripe account to let clients pay online instantly via credit card or ACH transfer.'
  }
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-zinc-950 font-sans pt-32 pb-24 text-slate-900 dark:text-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center mb-6">
            <Breadcrumbs items={[
              { name: 'Home', path: '/' },
              { name: 'Pricing', path: '/pricing' }
            ]} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.15] mb-6">
            Simple, Transparent Pricing for High-Velocity Teams
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Stop losing hours to clunky time trackers. Pick the plan that fits your agency and start recovering billable margins in 2 minutes.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={\`rounded-3xl p-8 transition-all duration-200 relative flex flex-col \${
                plan.highlighted 
                  ? 'bg-slate-900 text-white shadow-2xl ring-2 ring-primary-500 scale-105 z-10' 
                  : 'bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm'
              }\`}
            >
              {plan.badge && (
                <div className={\`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 w-max \${
                  plan.highlighted 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-slate-300'
                }\`}>
                  {plan.badge}
                </div>
              )}

              <h2 className={\`text-2xl font-bold mb-2 \${plan.highlighted ? 'text-white' : 'text-slate-900 dark:text-white'}\`}>
                {plan.name}
              </h2>
              <p className={\`text-sm mb-6 min-h-[40px] \${plan.highlighted ? 'text-slate-300' : 'text-slate-600 dark:text-slate-400'}\`}>
                {plan.desc}
              </p>

              <div className="flex items-baseline gap-1 mb-8">
                <span className={\`text-5xl font-black tracking-tight \${plan.highlighted ? 'text-white' : 'text-slate-900 dark:text-white'}\`}>
                  {plan.price}
                </span>
                <span className={\`text-sm font-semibold \${plan.highlighted ? 'text-slate-400' : 'text-slate-500'}\`}>
                  {plan.period}
                </span>
              </div>

              <a 
                href={plan.ctaLink}
                className={\`w-full py-3.5 px-6 rounded-xl font-bold text-center text-sm transition-all mb-8 block \${
                  plan.highlighted
                    ? 'bg-primary-600 hover:bg-primary-500 text-white shadow-lg'
                    : 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100'
                }\`}
              >
                {plan.cta}
              </a>

              <div className="border-t border-slate-200 dark:border-zinc-800 pt-6 mt-auto">
                <p className={\`text-xs font-bold uppercase tracking-wider mb-4 \${plan.highlighted ? 'text-slate-400' : 'text-slate-500'}\`}>
                  Everything Included:
                </p>
                <ul className="space-y-3 text-sm">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3">
                      <svg className={\`w-5 h-5 shrink-0 \${plan.highlighted ? 'text-primary-400' : 'text-primary-600 dark:text-primary-400'}\`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={plan.highlighted ? 'text-slate-200' : 'text-slate-700 dark:text-slate-300'}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-center text-slate-900 dark:text-white mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {faq.q}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <section className="mt-24 bg-slate-900 text-center p-12 rounded-3xl text-white shadow-xl">
          <h2 className="text-3xl font-black mb-4">
            Ready to stop chasing Friday timesheets?
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-8 text-sm sm:text-base">
            Join the hundreds of engineers and agency founders who track time in 10 seconds flat with VeloTime.
          </p>
          <a 
            href="https://app.velotime.dg.tools" 
            className="inline-block bg-primary-600 hover:bg-primary-500 text-white font-bold py-4 px-10 rounded-xl transition-colors shadow-lg"
          >
            Start 14-Day Free Trial &rarr;
          </a>
        </section>

      </div>
    </main>
  );
}
`;

fs.writeFileSync(path.join(pricingDir, 'page.js'), pricingPageCode, 'utf8');
console.log('1. Created dedicated src/app/pricing/page.js!');

// 2. Update layout.js to include /tools/billable-utilization in footer
const layoutPath = path.join(landingDir, 'src', 'app', 'layout.js');
let layoutContent = fs.readFileSync(layoutPath, 'utf8');

if (!layoutContent.includes('href="/tools/billable-utilization"')) {
  layoutContent = layoutContent.replace(
    '<li><a href="/tools/scope-creep-cost" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Scope Creep Cost Estimator</a></li>',
    '<li><a href="/tools/scope-creep-cost" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Scope Creep Cost Estimator</a></li>\n                  <li><a href="/tools/billable-utilization" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Billable Utilization Calculator</a></li>'
  );
  fs.writeFileSync(layoutPath, layoutContent, 'utf8');
  console.log('2. Updated layout.js with Billable Utilization Calculator in footer!');
}
`;

fs.writeFileSync(path.join(landingDir, '..', '..', 'Documents', 'antigravity', 'noble-lovelace', 'create-pricing-page.js'), pricingPageCode, 'utf8');
