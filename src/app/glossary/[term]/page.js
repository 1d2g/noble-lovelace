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
  Hash,
  Check,
  Terminal,
  Grid
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
              <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-100 dark:bg-zinc-900 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-zinc-700 text-[11px] font-mono uppercase tracking-wider font-semibold">
                <Layers className="w-3 h-3 text-slate-500" />
                <span>{term.category}</span>
              </span>
            )}
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-100 dark:bg-zinc-900 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-zinc-700 text-[11px] font-mono uppercase tracking-wider font-semibold">
              <span className="w-1.5 h-1.5 bg-emerald-500"></span>
              <span>Agency Metric [2026 Spec]</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-slate-100 tracking-tight leading-tight">
            {term.term}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-normal max-w-3xl leading-relaxed">
            Standard definition, mathematical formula, practical agency calculation walkthrough, and 2026 benchmarks.
          </p>
        </header>

        {/* 1. SPREADSHEET CELL: DEFINITION (QUICK REFERENCE) */}
        <section className="border-2 border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-900">
          <div className="bg-slate-100 dark:bg-zinc-800/80 border-b border-slate-300 dark:border-zinc-700 px-4 py-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
              <Hash className="w-3.5 h-3.5 text-slate-500" />
              <span>CELL_01 // DEFINITION</span>
            </div>
            <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
              SPEC: DEFINED_TERM
            </span>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <p className="text-base sm:text-lg text-slate-900 dark:text-slate-100 font-medium leading-relaxed">
              <strong className="font-bold text-slate-950 dark:text-white underline decoration-slate-400 underline-offset-4">{term.term}</strong> is {term.definition.charAt(0).toLowerCase() + term.definition.slice(1)}
            </p>

            <div className="pt-4 border-t border-slate-200 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-slate-900 dark:bg-slate-100"></span>
                <span>Core Economic Lever for Billable Teams</span>
              </div>

              {term.toolUrl && (
                <Link 
                  href={term.toolUrl}
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-slate-900 dark:text-slate-100 hover:text-primary-600 dark:hover:text-primary-400 underline"
                >
                  <Calculator className="w-3.5 h-3.5" />
                  <span>[LAUNCH_CALCULATOR &rarr;]</span>
                </Link>
              )}
            </div>
          </div>
        </section>

        {/* 2. SPREADSHEET CELL: FORMULA & VARIABLES */}
        {term.formula && (
          <section className="border-2 border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-900">
            <div className="bg-slate-100 dark:bg-zinc-800/80 border-b border-slate-300 dark:border-zinc-700 px-4 py-2.5 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
                <Terminal className="w-3.5 h-3.5 text-slate-500" />
                <span>EQ_02 // CALCULATION_FORMULA</span>
              </div>
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                MATH_LOGIC
              </span>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <div className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400 mb-1.5">
                  Standard Mathematical Equation:
                </div>
                <div className="bg-slate-950 dark:bg-black border border-slate-800 p-4 sm:p-5 overflow-x-auto">
                  <code className="text-emerald-400 font-mono text-sm sm:text-base font-bold tracking-wide">
                    {term.formula}
                  </code>
                </div>
              </div>

              {term.formulaComponents && term.formulaComponents.length > 0 && (
                <div>
                  <div className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400 mb-3">
                    Variable Breakdown:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {term.formulaComponents.map((comp, idx) => (
                      <div 
                        key={idx}
                        className="bg-slate-50 dark:bg-zinc-950 border border-slate-300 dark:border-zinc-800 p-3.5 space-y-1"
                      >
                        <div className="font-mono text-xs font-bold text-slate-900 dark:text-slate-100">
                          {comp.name}
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

        {/* 3. SPREADSHEET CELL: REAL-WORLD EXAMPLE & STEP-BY-STEP */}
        {term.example && (
          <section className="border-2 border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-900">
            <div className="bg-slate-100 dark:bg-zinc-800/80 border-b border-slate-300 dark:border-zinc-700 px-4 py-2.5 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
                <FileText className="w-3.5 h-3.5 text-slate-500" />
                <span>DATA_03 // AGENCY_CASE_STUDY</span>
              </div>
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                NUMERICAL_WALKTHROUGH
              </span>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <div className="bg-slate-50 dark:bg-zinc-950 border border-slate-300 dark:border-zinc-800 p-4">
                <div className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400 mb-1">
                  1. Agency Scenario:
                </div>
                <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-sans leading-relaxed">
                  {term.example.scenario}
                </p>
              </div>

              <div className="bg-slate-100 dark:bg-zinc-800/60 border border-slate-300 dark:border-zinc-700 p-4 font-mono text-xs sm:text-sm text-slate-900 dark:text-slate-100">
                <div className="text-[11px] uppercase text-slate-500 dark:text-slate-400 mb-1">
                  2. Step-by-Step Calculation:
                </div>
                <div className="font-bold text-slate-950 dark:text-white">
                  {term.example.calculation}
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-zinc-950 border border-slate-300 dark:border-zinc-800 p-4">
                <div className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-slate-900 dark:bg-slate-100"></span>
                  <span>3. Financial Takeaway:</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-sans leading-relaxed">
                  {term.example.takeaway}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* 4. SPREADSHEET CELL: EXECUTIVE DECISION VECTORS */}
        {term.whyUseIt && (
          <section className="border-2 border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-900">
            <div className="bg-slate-100 dark:bg-zinc-800/80 border-b border-slate-300 dark:border-zinc-700 px-4 py-2.5 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
                <Grid className="w-3.5 h-3.5 text-slate-500" />
                <span>EXEC_04 // DECISION_DRIVERS</span>
              </div>
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                LEADERSHIP_ANALYSIS
              </span>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
                {term.whyUseIt.summary}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {term.whyUseIt.keyReasons.map((reason, idx) => (
                  <div 
                    key={idx}
                    className="bg-slate-50 dark:bg-zinc-950 border border-slate-300 dark:border-zinc-800 p-4 space-y-2"
                  >
                    <div className="font-mono text-xs font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                      <span className="text-[10px] font-mono px-1.5 py-0.5 bg-slate-200 dark:bg-zinc-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-zinc-700">
                        0{idx + 1}
                      </span>
                      <span>{reason.title}</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 5. SPREADSHEET CELL: BENCHMARKS & WARNING THRESHOLDS */}
        {(term.benchmarks || term.warningSigns) && (
          <section className="border-2 border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-900">
            <div className="bg-slate-100 dark:bg-zinc-800/80 border-b border-slate-300 dark:border-zinc-700 px-4 py-2.5 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
                <Gauge className="w-3.5 h-3.5 text-slate-500" />
                <span>BM_05 // BENCHMARKS_AND_THRESHOLDS</span>
              </div>
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                2026_STANDARDS
              </span>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              {term.benchmarks && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-slate-50 dark:bg-zinc-950 border border-slate-300 dark:border-zinc-800 p-4 space-y-1">
                    <div className="text-[11px] font-mono uppercase text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-emerald-600"></span>
                      <span>Target Band</span>
                    </div>
                    <div className="text-xs font-mono text-slate-900 dark:text-slate-100">
                      {term.benchmarks.target}
                    </div>
                  </div>

                  <div className="bg-slate-50 dark:bg-zinc-950 border border-slate-300 dark:border-zinc-800 p-4 space-y-1">
                    <div className="text-[11px] font-mono uppercase text-amber-700 dark:text-amber-400 font-bold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-amber-500"></span>
                      <span>Warning Threshold</span>
                    </div>
                    <div className="text-xs font-mono text-slate-900 dark:text-slate-100">
                      {term.benchmarks.warning}
                    </div>
                  </div>

                  <div className="bg-slate-50 dark:bg-zinc-950 border border-slate-300 dark:border-zinc-800 p-4 space-y-1">
                    <div className="text-[11px] font-mono uppercase text-rose-700 dark:text-rose-400 font-bold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-rose-600"></span>
                      <span>Critical Danger</span>
                    </div>
                    <div className="text-xs font-mono text-slate-900 dark:text-slate-100">
                      {term.benchmarks.danger}
                    </div>
                  </div>
                </div>
              )}

              {term.warningSigns && term.warningSigns.length > 0 && (
                <div className="bg-slate-50 dark:bg-zinc-950 border border-slate-300 dark:border-zinc-800 p-4 sm:p-5 space-y-3">
                  <div className="text-[11px] font-mono font-bold uppercase text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                    <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
                    <span>Early Warning Signals & Drift Indicators:</span>
                  </div>
                  <div className="space-y-2">
                    {term.warningSigns.map((sign, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300 font-sans">
                        <span className="w-1.5 h-1.5 bg-slate-400 dark:bg-zinc-600 shrink-0 mt-1.5"></span>
                        <span>{sign}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* 6. SPREADSHEET CELL: COMPARISON MATRIX */}
        {term.comparisons && term.comparisons.length > 0 && (
          <section className="border-2 border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-900">
            <div className="bg-slate-100 dark:bg-zinc-800/80 border-b border-slate-300 dark:border-zinc-700 px-4 py-2.5 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
                <Scale className="w-3.5 h-3.5 text-slate-500" />
                <span>MTX_06 // METRIC_COMPARISON</span>
              </div>
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                CROSS_EVALUATION
              </span>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              {term.comparisons.map((comp, idx) => (
                <div 
                  key={idx}
                  className="bg-slate-50 dark:bg-zinc-950 border border-slate-300 dark:border-zinc-800 p-4 space-y-3"
                >
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-slate-900 dark:text-slate-100">
                    <span className="px-2 py-0.5 bg-slate-200 dark:bg-zinc-800 border border-slate-300 dark:border-zinc-700">
                      {term.term}
                    </span>
                    <span className="text-slate-400">vs</span>
                    <span className="px-2 py-0.5 bg-slate-200 dark:bg-zinc-800 border border-slate-300 dark:border-zinc-700">
                      {comp.compareTerm}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-sans leading-relaxed">
                    {comp.comparison}
                  </p>

                  <div className="text-xs font-mono text-slate-600 dark:text-slate-400 bg-white dark:bg-zinc-900 border border-slate-300 dark:border-zinc-800 p-2.5">
                    <strong className="text-slate-900 dark:text-slate-100">WHEN TO USE:</strong> {comp.whenToUse}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 7. PRACTITIONER EXPANSION & RELATED TERMS */}
        <section className="border-2 border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-900">
          <div className="bg-slate-100 dark:bg-zinc-800/80 border-b border-slate-300 dark:border-zinc-700 px-4 py-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
              <FileText className="w-3.5 h-3.5 text-slate-500" />
              <span>DOC_07 // IN_DEPTH_ANALYSIS</span>
            </div>
            <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
              PRACTITIONER_GUIDE
            </span>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <div className="prose prose-slate prose-sm dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
              <p>{term.expanded}</p>
            </div>

            {/* Interactive Calculator Box */}
            {term.toolUrl && (
              <div className="bg-slate-100 dark:bg-zinc-800/60 border-2 border-slate-300 dark:border-zinc-700 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-[11px] font-mono uppercase font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                    <Calculator className="w-3.5 h-3.5 text-slate-500" />
                    <span>INTERACTIVE CALCULATOR READY</span>
                  </div>
                  <div className="text-sm font-bold text-slate-900 dark:text-slate-100 font-sans">
                    {term.toolName || `Model ${term.term} in Real-Time`}
                  </div>
                </div>
                <Link
                  href={term.toolUrl}
                  className="bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 font-mono font-bold text-xs py-2.5 px-4 rounded-none transition-colors shrink-0 flex items-center gap-1.5 border border-slate-900 dark:border-white"
                >
                  <span>LAUNCH TOOL</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}

            {/* Related Terms Matrix */}
            {term.relatedTerms && term.relatedTerms.length > 0 && (
              <div className="pt-6 border-t border-slate-200 dark:border-zinc-800 space-y-3">
                <div className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400 font-bold">
                  RELATED AGENCY METRICS:
                </div>
                <div className="flex flex-wrap gap-2">
                  {term.relatedTerms.map((slug) => {
                    const related = getGlossaryTerm(slug);
                    if (!related) return null;
                    return (
                      <Link
                        key={slug}
                        href={`/glossary/${slug}`}
                        className="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-50 dark:bg-zinc-950 border border-slate-300 dark:border-zinc-800 hover:border-slate-900 dark:hover:border-slate-100 text-xs font-mono text-slate-800 dark:text-slate-200 transition-colors"
                      >
                        <span>{related.term}</span>
                        <ArrowRight className="w-3 h-3 text-slate-400" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 8. SPREADSHEET CELL: FAQ SECTION */}
        <section className="border-2 border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-900">
          <div className="bg-slate-100 dark:bg-zinc-800/80 border-b border-slate-300 dark:border-zinc-700 px-4 py-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
              <HelpCircle className="w-3.5 h-3.5 text-slate-500" />
              <span>FAQ_08 // FREQUENTLY_ASKED_QUESTIONS</span>
            </div>
            <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
              INDEXED_QA
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

        {/* 9. BOTTOM CONVERSION SPREADSHEET CELL */}
        <section className="border-2 border-slate-900 dark:border-slate-100 bg-slate-950 dark:bg-black text-white p-8 sm:p-12 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 border border-slate-700 text-slate-300 text-xs font-mono font-semibold uppercase">
            <span className="w-2 h-2 bg-emerald-400"></span>
            <span>FRICTIONLESS TIME MATRIX</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Stop Guessing {term.term}. Track Accurately in 10 Seconds.
          </h2>

          <p className="text-slate-400 max-w-xl mx-auto text-xs sm:text-sm font-sans leading-relaxed">
            Replace stopwatch timers and Friday memory guessing with a keyboard-driven spreadsheet matrix. Clean client billing and real-time margin visibility without workflow friction.
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
              BROWSE ALL TOOLS
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
