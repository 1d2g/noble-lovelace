import { notFound } from 'next/navigation';
import { glossaryTerms, getGlossaryTerm } from '../../../content/glossary';
import Link from 'next/link';
import Breadcrumbs from '../../../components/Breadcrumbs';
import { 
  Calculator, 
  ArrowRight, 
  Layers, 
  ShieldAlert, 
  HelpCircle, 
  Scale, 
  FileText, 
  ArrowUpRight,
  Gauge,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  BookOpen,
  AlertTriangle,
  Lightbulb
} from 'lucide-react';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const termSlug = resolvedParams.slug || resolvedParams.term;
  const term = getGlossaryTerm(termSlug);
  if (!term) return {};

  const title = `${term.term}: Meaning, Formula, Benchmarks & Guide [2026] | VeloTime`;
  const description = `${term.definition} Detailed formula, real-world agency calculation example, 2026 benchmarks, and metric comparison.`;

  return {
    title,
    description,
    keywords: [
      `${term.term.toLowerCase()}`,
      `what is ${term.term.toLowerCase()}`,
      `${term.term.toLowerCase()} formula`,
      `how to calculate ${term.term.toLowerCase()}`,
      `${term.term.toLowerCase()} benchmarks`,
      `${term.term.toLowerCase()} agency example`,
      `${term.term.toLowerCase()} vs`,
      'agency economics',
      'billable time tracking'
    ],
    alternates: {
      canonical: `/glossary/${term.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://velotime.dg.tools/glossary/${term.slug}`,
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
      question: `What is ${term.term} in an agency context?`,
      answer: term.definition
    },
    ...(term.formula ? [{
      question: `How do you calculate ${term.term}?`,
      answer: `${term.term} is calculated using the formula: ${term.formula}. For example: ${term.example?.scenario || ''} Result: ${term.example?.calculation || ''}`
    }] : []),
    {
      question: `Why is tracking ${term.term} critical for agency profitability?`,
      answer: term.whyUseIt?.summary || term.expanded
    },
    ...(term.benchmarks ? [{
      question: `What are the typical agency benchmarks for ${term.term} in 2026?`,
      answer: `Target: ${term.benchmarks.target}. Warning: ${term.benchmarks.warning} Danger: ${term.benchmarks.danger}`
    }] : []),
    {
      question: `How does VeloTime simplify tracking ${term.term}?`,
      answer: `VeloTime provides a high-density, 10-second weekly keyboard timesheet matrix that eliminates stopwatch timers and Friday timesheet guesswork, giving leadership instant, accurate visibility into ${term.term}.`
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
    <main className="min-h-screen bg-slate-50 dark:bg-zinc-950 font-sans pt-28 pb-24 text-slate-900 dark:text-slate-100 transition-colors">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }}
      />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* HEADER BLOCK */}
        <header className="space-y-4">
          <Breadcrumbs items={[
            { name: 'Home', path: '/' },
            { name: 'Glossary', path: '/glossary' },
            { name: term.term, path: `/glossary/${term.slug}` }
          ]} />
          
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {term.category && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary-50 dark:bg-primary-950/40 text-primary-700 dark:text-primary-400 border border-primary-200 dark:border-primary-800 text-xs font-semibold rounded-full">
                <Layers className="w-3.5 h-3.5" />
                <span>{term.category}</span>
              </span>
            )}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 text-xs font-semibold rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>Agency Metric Guide</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            {term.term}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-normal max-w-3xl leading-relaxed">
            Standard definition, mathematical formula, practical agency calculation walkthrough, and 2026 benchmarks.
          </p>
        </header>

        {/* 1. DEFINITION CARD (FEATURED SNIPPET) */}
        <section className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-zinc-800 pb-4 mb-6">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-primary-50 dark:bg-primary-950/50 text-primary-600 dark:text-primary-400 rounded-lg">
                <BookOpen className="w-4 h-4" />
              </div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Core Definition
              </h2>
            </div>
            <span className="text-xs font-medium text-slate-400 dark:text-slate-500">
              Agency Financial Telemetry
            </span>
          </div>

          <div className="space-y-6">
            <p className="text-lg sm:text-xl text-slate-900 dark:text-slate-100 font-medium leading-relaxed">
              <strong className="font-bold text-slate-950 dark:text-white underline decoration-primary-300 dark:decoration-primary-700 underline-offset-4">{term.term}</strong> is {term.definition.charAt(0).toLowerCase() + term.definition.slice(1)}
            </p>

            <div className="pt-4 border-t border-slate-100 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Core economic lever for billable teams</span>
              </div>

              {term.toolUrl && (
                <Link 
                  href={term.toolUrl}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 hover:bg-primary-100 dark:hover:bg-primary-900/60 rounded-lg text-xs font-bold transition-all border border-primary-200 dark:border-primary-800"
                >
                  <Calculator className="w-4 h-4" />
                  <span>Launch Interactive Calculator &rarr;</span>
                </Link>
              )}
            </div>
          </div>
        </section>

        {/* 2. FORMULA & VARIABLES CARD */}
        {term.formula && (
          <section className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-zinc-800 pb-4 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 rounded-lg">
                  <Calculator className="w-4 h-4" />
                </div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Calculation Formula
                </h2>
              </div>
              <span className="text-xs font-medium text-slate-400 dark:text-slate-500">
                Standard Equation
              </span>
            </div>

            <div className="space-y-6">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  Mathematical Formula:
                </div>
                <div className="bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-xl p-5 overflow-x-auto">
                  <code className="text-slate-900 dark:text-slate-100 font-mono text-base sm:text-lg font-bold tracking-tight">
                    {term.formula}
                  </code>
                </div>
              </div>

              {term.formulaComponents && term.formulaComponents.length > 0 && (
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                    Variable Breakdown:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {term.formulaComponents.map((comp, idx) => (
                      <div 
                        key={idx}
                        className="bg-slate-50 dark:bg-zinc-950/60 border border-slate-200 dark:border-zinc-800/80 rounded-xl p-4 space-y-1.5"
                      >
                        <div className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                          <span>{comp.name}</span>
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                          {comp.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* 3. REAL-WORLD AGENCY CASE STUDY CARD */}
        {term.example && (
          <section className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-zinc-800 pb-4 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 rounded-lg">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Real-World Calculation Example
                </h2>
              </div>
              <span className="text-xs font-medium text-slate-400 dark:text-slate-500">
                Step-by-Step Scenario
              </span>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800/80 rounded-xl p-4 sm:p-5 space-y-1.5">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  1. Agency Scenario:
                </div>
                <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                  {term.example.scenario}
                </p>
              </div>

              <div className="bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 rounded-xl p-4 sm:p-5 space-y-1.5">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400">
                  2. Step-by-Step Calculation:
                </div>
                <div className="font-semibold text-sm sm:text-base text-slate-900 dark:text-slate-100">
                  {term.example.calculation}
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800/80 rounded-xl p-4 sm:p-5 space-y-1.5">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                  <span>3. Financial Takeaway:</span>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {term.example.takeaway}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* 4. STRATEGIC VALUE & DECISION DRIVERS */}
        {term.whyUseIt && (
          <section className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-zinc-800 pb-4 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-purple-50 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 rounded-lg">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Why This Metric Matters
                </h2>
              </div>
              <span className="text-xs font-medium text-slate-400 dark:text-slate-500">
                Executive Strategy
              </span>
            </div>

            <div className="space-y-6">
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                {term.whyUseIt.summary}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {term.whyUseIt.keyReasons.map((reason, idx) => (
                  <div 
                    key={idx}
                    className="bg-slate-50 dark:bg-zinc-950/60 border border-slate-200 dark:border-zinc-800/80 rounded-xl p-5 space-y-2.5 flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="w-7 h-7 rounded-lg bg-primary-100 dark:bg-primary-950/60 text-primary-700 dark:text-primary-400 text-xs font-bold flex items-center justify-center">
                        0{idx + 1}
                      </div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                        {reason.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 5. BENCHMARKS & WARNING THRESHOLDS */}
        {(term.benchmarks || term.warningSigns) && (
          <section className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-zinc-800 pb-4 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 rounded-lg">
                  <Gauge className="w-4 h-4" />
                </div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  2026 Industry Benchmarks
                </h2>
              </div>
              <span className="text-xs font-medium text-slate-400 dark:text-slate-500">
                Operating Standards
              </span>
            </div>

            <div className="space-y-6">
              {term.benchmarks && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 rounded-xl p-5 space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      <span>Target Band</span>
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-slate-900 dark:text-slate-100 leading-relaxed">
                      {term.benchmarks.target}
                    </div>
                  </div>

                  <div className="bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 rounded-xl p-5 space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                      <span>Warning Threshold</span>
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-slate-900 dark:text-slate-100 leading-relaxed">
                      {term.benchmarks.warning}
                    </div>
                  </div>

                  <div className="bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40 rounded-xl p-5 space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                      <span>Critical Danger</span>
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-slate-900 dark:text-slate-100 leading-relaxed">
                      {term.benchmarks.danger}
                    </div>
                  </div>
                </div>
              )}

              {term.warningSigns && term.warningSigns.length > 0 && (
                <div className="bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-xl p-5 space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-amber-600" />
                    <span>Early Warning Signals & Drift Indicators:</span>
                  </div>
                  <div className="space-y-2 pt-1">
                    {term.warningSigns.map((sign, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                        <span>{sign}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* 6. COMPARISON MATRIX */}
        {term.comparisons && term.comparisons.length > 0 && (
          <section className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-zinc-800 pb-4 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 rounded-lg">
                  <Scale className="w-4 h-4" />
                </div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Metric Comparisons
                </h2>
              </div>
              <span className="text-xs font-medium text-slate-400 dark:text-slate-500">
                Strategic Trade-offs
              </span>
            </div>

            <div className="space-y-4">
              {term.comparisons.map((comp, idx) => (
                <div 
                  key={idx}
                  className="bg-slate-50 dark:bg-zinc-950/60 border border-slate-200 dark:border-zinc-800/80 rounded-xl p-5 space-y-3"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-slate-100">
                    <span className="px-2.5 py-1 bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-md">
                      {term.term}
                    </span>
                    <span className="text-slate-400 font-normal">vs</span>
                    <span className="px-2.5 py-1 bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-md">
                      {comp.compareTerm}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {comp.comparison}
                  </p>

                  <div className="text-xs text-slate-600 dark:text-slate-400 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-lg p-3">
                    <strong className="text-slate-900 dark:text-slate-100">When to use:</strong> {comp.whenToUse}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 7. PRACTITIONER GUIDE & CALCULATOR CTA */}
        <section className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-zinc-800 pb-4 mb-6">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-teal-50 dark:bg-teal-950/50 text-teal-600 dark:text-teal-400 rounded-lg">
                <FileText className="w-4 h-4" />
              </div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                In-Depth Practitioner Guide
              </h2>
            </div>
            <span className="text-xs font-medium text-slate-400 dark:text-slate-500">
              Agency Operations
            </span>
          </div>

          <div className="space-y-6">
            <div className="prose prose-slate prose-sm sm:prose-base dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 leading-relaxed">
              <p>{term.expanded}</p>
            </div>

            {/* Interactive Calculator Callout */}
            {term.toolUrl && (
              <div className="bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-primary-50 dark:bg-primary-950/50 text-primary-600 dark:text-primary-400 text-xs font-bold rounded-md">
                    <Calculator className="w-3.5 h-3.5" />
                    <span>Interactive Model</span>
                  </div>
                  <div className="text-base font-bold text-slate-900 dark:text-white">
                    {term.toolName || `Model ${term.term} in Real-Time`}
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Test different agency parameters and generate instant projections.
                  </p>
                </div>
                <Link
                  href={term.toolUrl}
                  className="bg-primary-600 hover:bg-primary-500 text-white font-bold text-xs py-3 px-5 rounded-lg transition-colors shrink-0 flex items-center gap-1.5 shadow-sm"
                >
                  <span>Launch Free Calculator</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            )}

            {/* Related Terms */}
            {term.relatedTerms && term.relatedTerms.length > 0 && (
              <div className="pt-6 border-t border-slate-100 dark:border-zinc-800 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Related Metrics & Benchmarks:
                </div>
                <div className="flex flex-wrap gap-2">
                  {term.relatedTerms.map((slug) => {
                    const related = getGlossaryTerm(slug);
                    if (!related) return null;
                    return (
                      <Link
                        key={slug}
                        href={`/glossary/${slug}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 hover:border-primary-500 dark:hover:border-primary-500 text-xs font-semibold text-slate-800 dark:text-slate-200 rounded-lg transition-all"
                      >
                        <span>{related.term}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 8. FAQ SECTION */}
        <section className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-zinc-800 pb-4 mb-6">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 rounded-lg">
                <HelpCircle className="w-4 h-4" />
              </div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Frequently Asked Questions
              </h2>
            </div>
            <span className="text-xs font-medium text-slate-400 dark:text-slate-500">
              Verified Q&A
            </span>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 dark:bg-zinc-950/60 border border-slate-200 dark:border-zinc-800/80 rounded-xl p-5 space-y-2"
              >
                <div className="text-sm font-bold text-slate-900 dark:text-slate-100">
                  {item.question}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 9. GLOBAL CTA BANNER */}
        <div className="not-prose bg-slate-900 dark:bg-zinc-900 border border-slate-800 text-white p-8 sm:p-10 rounded-2xl my-16 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-800 rounded-full text-slate-300 text-xs font-semibold border border-slate-700">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>10-Second Time Tracking Matrix</span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              Stop guessing {term.term}. Track accurately in seconds.
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Replace stopwatch timers and Friday memory guessing with a keyboard-driven spreadsheet matrix. Clean client billing and real-time margin visibility without friction.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href="https://app.velotime.dg.tools"
              className="w-full sm:w-auto bg-primary-600 hover:bg-primary-500 text-white font-bold py-3.5 px-7 rounded-lg shadow-sm transition-colors text-sm text-center"
            >
              Start 14-day free trial &rarr;
            </a>
            <Link
              href="/tools"
              className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold py-3.5 px-5 rounded-lg transition-colors text-sm border border-slate-700 text-center"
            >
              Browse all tools
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
