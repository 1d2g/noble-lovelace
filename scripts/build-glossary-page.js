const fs = require('fs');
const path = require('path');

const targetPage = 'c:\\\\Users\\\\4thge\\\\Desktop\\\\dgtools\\\\velotime-landing\\\\src\\\\app\\\\glossary\\\\[term]\\\\page.js';

const pageCode = `import { notFound } from 'next/navigation';
import { glossaryTerms, getGlossaryTerm } from '../../../content/glossary';
import Link from 'next/link';
import Breadcrumbs from '../../../components/Breadcrumbs';
import { 
  Calculator, 
  CheckCircle2, 
  ArrowRight, 
  Lightbulb, 
  TrendingUp, 
  BarChart3, 
  Target, 
  AlertTriangle, 
  Layers, 
  ShieldCheck, 
  HelpCircle, 
  Scale, 
  FileText, 
  Sparkles,
  ArrowUpRight,
  Gauge
} from 'lucide-react';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const termSlug = resolvedParams.slug || resolvedParams.term;
  const term = getGlossaryTerm(termSlug);
  if (!term) return {};

  const title = \`\${term.term}: Meaning, Formula, Benchmarks & Guide [2026] | VeloTime\`;
  const description = \`\${term.definition} Detailed formula, real-world agency calculation example, 2026 benchmarks, and metric comparison.\`;

  return {
    title,
    description,
    keywords: [
      \`\${term.term.toLowerCase()}\`,
      \`what is \${term.term.toLowerCase()}\`,
      \`\${term.term.toLowerCase()} formula\`,
      \`how to calculate \${term.term.toLowerCase()}\`,
      \`\${term.term.toLowerCase()} benchmarks\`,
      \`\${term.term.toLowerCase()} agency example\`,
      \`\${term.term.toLowerCase()} vs\`,
      'agency economics',
      'billable time tracking'
    ],
    alternates: {
      canonical: \`/glossary/\${term.slug}\`,
    },
    openGraph: {
      title,
      description,
      url: \`https://velotime.dg.tools/glossary/\${term.slug}\`,
      siteName: 'VeloTime',
      images: [{ url: 'https://velotime.dg.tools/og-image.jpg' }]
    }
  };
}

export async function generateStaticParams() {
  return glossaryTerms.flatMap((t) => [
    { slug: t.slug, term: t.slug }
  ]);
}

export default async function GlossaryTermPage({ params }) {
  const resolvedParams = await params;
  const termSlug = resolvedParams.slug || resolvedParams.term;
  const term = getGlossaryTerm(termSlug);

  if (!term) {
    notFound();
  }

  const faqItems = [
    {
      question: \`What is \${term.term} in an agency context?\`,
      answer: term.definition
    },
    ...(term.formula ? [{
      question: \`How do you calculate \${term.term}?\`,
      answer: \`\${term.term} is calculated using the formula: \${term.formula}. For example: \${term.example?.scenario || ''} Result: \${term.example?.calculation || ''}\`
    }] : []),
    {
      question: \`Why is tracking \${term.term} critical for agency profitability?\`,
      answer: term.whyUseIt?.summary || term.expanded
    },
    ...(term.benchmarks ? [{
      question: \`What are the typical agency benchmarks for \${term.term} in 2026?\`,
      answer: \`Target: \${term.benchmarks.target}. Warning: \${term.benchmarks.warning} Danger: \${term.benchmarks.danger}\`
    }] : []),
    {
      question: \`How does VeloTime simplify tracking \${term.term}?\`,
      answer: \`VeloTime provides a high-density, 10-second weekly keyboard timesheet matrix that eliminates stopwatch timers and Friday timesheet guesswork, giving leadership instant, accurate visibility into \${term.term}.\`
    }
  ];

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

  const definedTermSchema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    'name': term.term,
    'description': term.definition,
    'inDefinedTermSet': 'https://velotime.dg.tools/glossary'
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-zinc-950 font-sans pt-32 pb-24 text-slate-900 dark:text-slate-100 transition-colors">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }}
      />
      
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <header className="mb-8">
          <Breadcrumbs items={[
            { name: 'Home', path: '/' },
            { name: 'Glossary', path: '/glossary' },
            { name: term.term, path: \`/glossary/\${term.slug}\` }
          ]} />
          
          <div className="flex flex-wrap items-center gap-2.5 mt-6 mb-4">
            {term.category && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary-50 dark:bg-primary-950/40 text-primary-700 dark:text-primary-400 border border-primary-200 dark:border-primary-800/60 rounded-md text-xs font-bold uppercase tracking-wider">
                <Layers className="w-3.5 h-3.5" />
                <span>{term.category}</span>
              </span>
            )}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60 rounded-md text-xs font-bold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Agency Metric &bull; 2026 Edition</span>
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-slate-100 tracking-tight leading-[1.15] mb-4">
            What is {term.term}?
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
            A comprehensive practitioner guide to <strong className="text-slate-900 dark:text-slate-200">{term.term}</strong> in modern software agencies, design studios, and consulting firms.
          </p>
        </header>

        {/* 1. QUICK DEFINITION CARD (GOOGLE FEATURED SNIPPET SNIPER) */}
        <section className="bg-white dark:bg-zinc-900 border-2 border-primary-500/30 dark:border-primary-600/40 rounded-xl p-6 sm:p-8 shadow-sm mb-8 not-prose">
          <div className="flex items-center justify-between gap-4 mb-3">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-primary-600 dark:text-primary-400">
              <Lightbulb className="w-4 h-4 text-primary-500" />
              <span>Key Definition (Quick Reference)</span>
            </div>
            <span className="text-[11px] font-mono font-semibold text-slate-400 dark:text-slate-500 uppercase">
              Snippet Ready
            </span>
          </div>

          <p className="text-lg sm:text-xl text-slate-800 dark:text-slate-100 font-semibold leading-relaxed mb-6">
            <strong className="text-primary-600 dark:text-primary-400 font-black">{term.term}</strong> is {term.definition.charAt(0).toLowerCase() + term.definition.slice(1)}
          </p>

          <div className="pt-4 border-t border-slate-100 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-4 text-xs font-medium text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Core Economic Lever for Billable Teams</span>
            </div>

            {term.toolUrl && (
              <Link 
                href={term.toolUrl}
                className="inline-flex items-center gap-1.5 font-bold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 hover:underline"
              >
                <Calculator className="w-3.5 h-3.5" />
                <span>Launch Live Calculator &rarr;</span>
              </Link>
            )}
          </div>
        </section>

        {/* 2. THE FORMULA & MATHEMATICAL BREAKDOWN CARD */}
        {term.formula && (
          <section className="bg-slate-900 dark:bg-zinc-950 border-2 border-slate-800 dark:border-zinc-800 rounded-xl p-6 sm:p-8 text-white shadow-md mb-8 not-prose">
            <div className="flex items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-emerald-400">
                <Calculator className="w-4 h-4 text-emerald-400" />
                <span>How to Calculate {term.term}</span>
              </div>
              <span className="text-[11px] font-mono px-2 py-0.5 bg-slate-800 dark:bg-zinc-900 border border-slate-700 text-slate-300 rounded font-semibold">
                Formula
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-white mb-4">
              The Mathematical Formula
            </h2>

            <div className="bg-slate-950 dark:bg-black/80 border border-slate-800 rounded-lg p-4 sm:p-5 mb-6 overflow-x-auto">
              <div className="text-xs font-mono text-slate-400 uppercase mb-1">Standard Equation:</div>
              <code className="text-emerald-400 font-mono text-base sm:text-lg font-bold tracking-wide">
                {term.formula}
              </code>
            </div>

            {term.formulaComponents && term.formulaComponents.length > 0 && (
              <div>
                <h3 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-3">
                  Formula Variables & Breakdown
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {term.formulaComponents.map((comp, idx) => (
                    <div 
                      key={idx}
                      className="bg-slate-800/60 dark:bg-zinc-900/80 border border-slate-700/60 dark:border-zinc-800 rounded-lg p-3.5"
                    >
                      <div className="text-xs font-bold text-emerald-300 mb-1">
                        {comp.name}
                      </div>
                      <div className="text-xs text-slate-300 leading-relaxed">
                        {comp.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* 3. REAL-WORLD AGENCY CALCULATION EXAMPLE CARD */}
        {term.example && (
          <section className="bg-white dark:bg-zinc-900 border-2 border-slate-200 dark:border-zinc-800 rounded-xl p-6 sm:p-8 shadow-sm mb-8 not-prose">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3">
              <FileText className="w-4 h-4 text-blue-500" />
              <span>Real-World Agency Example</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100 mb-4">
              Step-by-Step Calculation Scenario
            </h2>

            <div className="space-y-4 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              <div className="bg-slate-50 dark:bg-zinc-950/60 border border-slate-200 dark:border-zinc-800 rounded-lg p-4">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
                  1. Practical Agency Scenario:
                </div>
                <p className="text-slate-800 dark:text-slate-200 font-medium">
                  {term.example.scenario}
                </p>
              </div>

              <div className="bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/50 rounded-lg p-4 font-mono text-xs sm:text-sm text-slate-900 dark:text-slate-100">
                <div className="text-[11px] font-sans font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
                  2. Calculation Walkthrough:
                </div>
                <div className="font-bold text-blue-900 dark:text-blue-300">
                  {term.example.calculation}
                </div>
              </div>

              <div className="bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/50 rounded-lg p-4">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>3. Strategic Financial Takeaway:</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm">
                  {term.example.takeaway}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* 4. WHY AGENCY LEADERS TRACK THIS METRIC & STRATEGIC USE CASES */}
        {term.whyUseIt && (
          <section className="bg-white dark:bg-zinc-900 border-2 border-slate-200 dark:border-zinc-800 rounded-xl p-6 sm:p-8 shadow-sm mb-8 not-prose">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-3">
              <Target className="w-4 h-4 text-indigo-500" />
              <span>Leadership & Executive Decisions</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100 mb-3">
              Why Agency Founders & CFOs Track {term.term}
            </h2>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              {term.whyUseIt.summary}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {term.whyUseIt.keyReasons.map((reason, idx) => (
                <div 
                  key={idx}
                  className="bg-slate-50 dark:bg-zinc-950/60 border border-slate-200 dark:border-zinc-800 rounded-lg p-4"
                >
                  <div className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded bg-primary-100 dark:bg-primary-950 text-primary-700 dark:text-primary-400 text-xs font-black flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span>{reason.title}</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 5. INDUSTRY BENCHMARKS & WARNING SIGNS */}
        {(term.benchmarks || term.warningSigns) && (
          <section className="bg-white dark:bg-zinc-900 border-2 border-slate-200 dark:border-zinc-800 rounded-xl p-6 sm:p-8 shadow-sm mb-8 not-prose">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-3">
              <Gauge className="w-4 h-4 text-amber-500" />
              <span>2026 Industry Benchmarks & Threat Diagnostics</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100 mb-6">
              Performance Targets & Warning Signs
            </h2>

            {term.benchmarks && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 rounded-lg p-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400 mb-1 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Target Range</span>
                  </div>
                  <div className="text-xs text-slate-800 dark:text-slate-200 font-medium">
                    {term.benchmarks.target}
                  </div>
                </div>

                <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 rounded-lg p-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400 mb-1 flex items-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Warning Threshold</span>
                  </div>
                  <div className="text-xs text-slate-800 dark:text-slate-200 font-medium">
                    {term.benchmarks.warning}
                  </div>
                </div>

                <div className="bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800/60 rounded-lg p-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-rose-800 dark:text-rose-400 mb-1 flex items-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Danger Zone</span>
                  </div>
                  <div className="text-xs text-slate-800 dark:text-slate-200 font-medium">
                    {term.benchmarks.danger}
                  </div>
                </div>
              </div>
            )}

            {term.warningSigns && term.warningSigns.length > 0 && (
              <div className="bg-slate-50 dark:bg-zinc-950/60 border border-slate-200 dark:border-zinc-800 rounded-lg p-4 sm:p-5">
                <div className="text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                  ⚠️ Early Warning Signals That {term.term} Is Drifting:
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  {term.warningSigns.map((sign, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold mt-0.5">•</span>
                      <span>{sign}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}

        {/* 6. METRIC COMPARISON MATRIX */}
        {term.comparisons && term.comparisons.length > 0 && (
          <section className="bg-white dark:bg-zinc-900 border-2 border-slate-200 dark:border-zinc-800 rounded-xl p-6 sm:p-8 shadow-sm mb-8 not-prose">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-3">
              <Scale className="w-4 h-4 text-purple-500" />
              <span>Metric Comparison Matrix</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100 mb-3">
              {term.term} vs Companion Metrics
            </h2>

            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
              How <strong className="text-slate-900 dark:text-slate-200">{term.term}</strong> compares to other foundational agency KPIs, including key trade-offs and when to apply each.
            </p>

            <div className="space-y-4">
              {term.comparisons.map((comp, idx) => (
                <div 
                  key={idx}
                  className="bg-slate-50 dark:bg-zinc-950/60 border border-slate-200 dark:border-zinc-800 rounded-lg p-4 sm:p-5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-primary-100 dark:bg-primary-950 text-primary-700 dark:text-primary-400 rounded text-xs font-bold">
                        {term.term}
                      </span>
                      <span className="text-xs text-slate-400 font-bold">vs</span>
                      <span className="px-2 py-0.5 bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-400 rounded text-xs font-bold">
                        {comp.compareTerm}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
                    {comp.comparison}
                  </p>

                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded p-2.5">
                    <strong className="text-slate-800 dark:text-slate-200">When to use which:</strong> {comp.whenToUse}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 7. DETAILED PRACTITIONER EXPANSION */}
        <section className="bg-white dark:bg-zinc-900 border-2 border-slate-200 dark:border-zinc-800 rounded-xl p-6 sm:p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100 mb-4">
            Understanding {term.term} in Daily Practice
          </h2>
          <div className="prose prose-slate prose-base dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 leading-relaxed">
            <p>{term.expanded}</p>
          </div>

          {/* Interactive Calculator Banner */}
          {term.toolUrl && (
            <div className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-950/40 dark:to-zinc-900 border-2 border-primary-300 dark:border-primary-800/60 p-6 rounded-xl mt-8 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 not-prose">
              <div>
                <div className="text-xs font-extrabold uppercase tracking-wider text-primary-700 dark:text-primary-400 mb-1 flex items-center gap-1.5">
                  <Calculator className="w-3.5 h-3.5" />
                  <span>⚡ Free Interactive Agency Tool</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  {term.toolName || \`Calculate \${term.term}\`}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                  Model live numbers for your team using our verified agency calculator.
                </p>
              </div>
              <Link
                href={term.toolUrl}
                className="bg-primary-600 hover:bg-primary-700 text-white font-bold text-xs py-2.5 px-5 rounded-lg whitespace-nowrap transition-colors shadow-sm shrink-0 flex items-center gap-1.5"
              >
                <span>Open Calculator</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          )}

          {/* Related Terms Cross-Links */}
          {term.relatedTerms && term.relatedTerms.length > 0 && (
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-zinc-800 not-prose">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                Related Agency Terms & Concepts
              </h3>
              <div className="flex flex-wrap gap-2">
                {term.relatedTerms.map((slug) => {
                  const related = getGlossaryTerm(slug);
                  if (!related) return null;
                  return (
                    <Link
                      key={slug}
                      href={\`/glossary/\${slug}\`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 hover:border-primary-500 dark:hover:border-primary-500 text-xs font-bold text-slate-700 dark:text-slate-200 transition-all shadow-sm group"
                    >
                      <span>{related.term}</span>
                      <ArrowRight className="w-3 h-3 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </section>

        {/* 8. FAQ SECTION */}
        <section className="bg-white dark:bg-zinc-900 border-2 border-slate-200 dark:border-zinc-800 rounded-xl p-6 sm:p-8 shadow-sm mb-12 not-prose">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
            <HelpCircle className="w-4 h-4 text-primary-500" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100 mb-6">
            Everything You Need to Know About {term.term}
          </h2>

          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 dark:bg-zinc-950/60 border border-slate-200 dark:border-zinc-800 rounded-lg p-4 sm:p-5"
              >
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100 mb-2">
                  {item.question}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 9. GLOBAL CONVERSION CTA */}
        <section className="bg-slate-900 dark:bg-zinc-900 border border-slate-800 text-center p-8 sm:p-12 rounded-2xl shadow-xl text-white not-prose">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary-950/60 text-primary-400 font-bold text-xs rounded-full mb-4 border border-primary-800">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Frictionless Timesheets for High-Margin Agencies</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black mb-3 text-white">
            Track {term.term} with Zero Timesheet Friction
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
            Replace clunky stopwatch timers and Friday memory guessing with a 10-second weekly keyboard matrix. Capture accurate project hours and maintain healthy margins effortlessly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://app.velotime.dg.tools"
              className="w-full sm:w-auto bg-primary-600 hover:bg-primary-500 text-white font-bold py-3.5 px-8 rounded-lg shadow-sm transition-colors text-sm border border-primary-700"
            >
              Start 14-day free trial &rarr;
            </a>
            <Link
              href="/tools"
              className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold py-3.5 px-6 rounded-lg transition-colors text-sm border border-slate-700"
            >
              Explore Free Agency Calculators
            </Link>
          </div>
        </section>

      </article>
    </main>
  );
}
`;

fs.writeFileSync(targetPage, pageCode, 'utf8');
console.log('✅ Successfully updated ' + targetPage);
