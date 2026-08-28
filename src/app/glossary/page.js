'use client';
import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import { glossaryTerms, glossaryCategories } from '../../content/glossary';
import { 
  BookOpen, 
  Search, 
  Calculator, 
  ArrowRight, 
  Layers, 
  Tag, 
  X, 
  Hash,
  TrendingUp,
  Clock,
  DollarSign,
  ShieldAlert,
  ArrowUpRight,
  Filter,
  CheckCircle2
} from 'lucide-react';

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export default function GlossaryIndexPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLetter, setSelectedLetter] = useState('ALL');

  // Filter terms by search, category, and letter
  const filteredTerms = useMemo(() => {
    return glossaryTerms.filter((item) => {
      const matchesSearch = 
        item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.definition.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.expanded && item.expanded.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = 
        selectedCategory === 'All' || item.category === selectedCategory;

      const firstChar = item.term.charAt(0).toUpperCase();
      const matchesLetter = 
        selectedLetter === 'ALL' || firstChar === selectedLetter;

      return matchesSearch && matchesCategory && matchesLetter;
    });
  }, [searchQuery, selectedCategory, selectedLetter]);

  // Group filtered terms by first letter (sorted A-Z)
  const groupedByLetter = useMemo(() => {
    const groups = {};
    const sorted = [...filteredTerms].sort((a, b) => a.term.localeCompare(b.term));

    sorted.forEach((item) => {
      const char = item.term.charAt(0).toUpperCase();
      if (!groups[char]) groups[char] = [];
      groups[char].push(item);
    });

    return groups;
  }, [filteredTerms]);

  // Available letters across all glossary terms (or category-filtered)
  const availableLetters = useMemo(() => {
    const letters = new Set();
    glossaryTerms.forEach((item) => {
      if (selectedCategory === 'All' || item.category === selectedCategory) {
        letters.add(item.term.charAt(0).toUpperCase());
      }
    });
    return letters;
  }, [selectedCategory]);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts = { All: glossaryTerms.length };
    glossaryTerms.forEach((t) => {
      counts[t.category] = (counts[t.category] || 0) + 1;
    });
    return counts;
  }, []);

  const getCategoryIcon = (cat) => {
    switch (cat) {
      case 'Pricing & Billing': return <DollarSign className="w-3.5 h-3.5" />;
      case 'Profitability & Margins': return <TrendingUp className="w-3.5 h-3.5" />;
      case 'Capacity & Utilization': return <Clock className="w-3.5 h-3.5" />;
      case 'Operations & Risk': return <ShieldAlert className="w-3.5 h-3.5" />;
      default: return <Layers className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 font-sans text-slate-900 dark:text-slate-100 transition-colors">
      <main className="pt-28 pb-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header / Hero */}
        <header className="space-y-4">
          <Breadcrumbs items={[
            { name: 'Home', path: '/' },
            { name: 'Agency Glossary', path: '/glossary' }
          ]} />

          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary-50 dark:bg-primary-950/40 text-primary-700 dark:text-primary-400 border border-primary-200 dark:border-primary-800 text-xs font-semibold rounded-full">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Agency Knowledge Base & Benchmarks</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Agency Economics & Time Billing Glossary
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-normal max-w-3xl leading-relaxed">
            Mathematical definitions, real-world formulas, and benchmarks for agency finance, billable capacity, and margin control.
          </p>
        </header>

        {/* INTERACTIVE SEARCH & FILTER CARD */}
        <section className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
          
          {/* Live Search Bar */}
          <div className="relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text"
              placeholder="Search terms, formulas, or abbreviations (e.g. EHR, Burn Rate, Scope Creep, Value-Based Pricing)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-xl pl-12 pr-10 py-3.5 text-sm focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 dark:focus:border-primary-400 outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 text-slate-900 dark:text-white"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer rounded-md"
                title="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="space-y-2.5">
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-slate-400" />
              <span>Filter by Category:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {glossaryCategories.map((cat) => {
                const isSelected = selectedCategory === cat;
                const count = categoryCounts[cat] || 0;
                return (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setSelectedLetter('ALL');
                    }}
                    className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-900 dark:border-white shadow-sm'
                        : 'bg-slate-50 dark:bg-zinc-950 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-zinc-800 hover:border-slate-300 dark:hover:border-zinc-700'
                    }`}
                  >
                    {cat !== 'All' && getCategoryIcon(cat)}
                    <span>{cat}</span>
                    <span className={`px-1.5 py-0.5 rounded-md text-[10px] font-semibold ${
                      isSelected 
                        ? 'bg-slate-800 text-slate-200 dark:bg-zinc-200 dark:text-zinc-800' 
                        : 'bg-slate-200 dark:bg-zinc-800 text-slate-600 dark:text-slate-400'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Alphabetical A-Z Jump Bar */}
          <div className="space-y-2.5 pt-5 border-t border-slate-100 dark:border-zinc-800">
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <Hash className="w-3.5 h-3.5 text-slate-400" />
                <span>Alphabetical Jump Index:</span>
              </div>
              {selectedLetter !== 'ALL' && (
                <button
                  onClick={() => setSelectedLetter('ALL')}
                  className="text-xs font-semibold text-primary-600 dark:text-primary-400 hover:underline cursor-pointer"
                >
                  Reset letter filter
                </button>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              <button
                onClick={() => setSelectedLetter('ALL')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                  selectedLetter === 'ALL'
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-900 dark:border-white'
                    : 'bg-slate-50 dark:bg-zinc-950 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-zinc-800 hover:border-slate-300'
                }`}
              >
                All
              </button>

              {ALPHABET.map((letter) => {
                const hasTerms = availableLetters.has(letter);
                const isSelected = selectedLetter === letter;

                return (
                  <button
                    key={letter}
                    disabled={!hasTerms}
                    onClick={() => setSelectedLetter(isSelected ? 'ALL' : letter)}
                    className={`w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-xs font-semibold rounded-lg border transition-all ${
                      isSelected
                        ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-900 dark:border-white shadow-sm'
                        : hasTerms
                        ? 'bg-slate-50 dark:bg-zinc-950 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-zinc-800 hover:border-slate-400 dark:hover:border-zinc-600 cursor-pointer'
                        : 'bg-slate-50 dark:bg-zinc-900/50 text-slate-300 dark:text-zinc-700 border-slate-100 dark:border-zinc-800/60 cursor-not-allowed opacity-40'
                    }`}
                  >
                    {letter}
                  </button>
                );
              })}
            </div>
          </div>

        </section>

        {/* Results Metadata */}
        <div className="flex items-center justify-between px-1 text-xs text-slate-500 dark:text-slate-400">
          <div>
            Showing <strong className="text-slate-900 dark:text-white font-bold">{filteredTerms.length}</strong> terms
            {selectedCategory !== 'All' && <span> in <strong className="text-slate-900 dark:text-white">{selectedCategory}</strong></span>}
            {selectedLetter !== 'ALL' && <span> starting with <strong className="text-slate-900 dark:text-white">"{selectedLetter}"</strong></span>}
            {searchQuery && <span> matching <strong className="text-slate-900 dark:text-white">"{searchQuery}"</strong></span>}
          </div>

          {(searchQuery || selectedCategory !== 'All' || selectedLetter !== 'ALL') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSelectedLetter('ALL');
              }}
              className="text-xs font-semibold text-primary-600 dark:text-primary-400 hover:underline cursor-pointer"
            >
              Clear all filters
            </button>
          )}
        </div>

        {/* Alphabetical Term Groupings */}
        {Object.keys(groupedByLetter).length > 0 ? (
          <div className="space-y-10">
            {Object.keys(groupedByLetter).map((letter) => (
              <section key={letter} id={`letter-${letter}`} className="space-y-4 scroll-mt-36">
                
                {/* Section Letter Header Strip */}
                <div className="flex items-center gap-2 border-b border-slate-200 dark:border-zinc-800 pb-3">
                  <span className="w-8 h-8 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-sm flex items-center justify-center">
                    {letter}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {groupedByLetter[letter].length} {groupedByLetter[letter].length === 1 ? 'Term' : 'Terms'}
                  </span>
                </div>

                {/* Card Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {groupedByLetter[letter].map((term) => (
                    <Link
                      key={term.slug}
                      href={`/glossary/${term.slug}`}
                      className="group bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-primary-500 dark:hover:border-primary-500 rounded-2xl p-6 transition-all shadow-sm hover:shadow-md flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        {/* Top Category Badge */}
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-50 dark:bg-zinc-950 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-zinc-800 flex items-center gap-1.5">
                            {getCategoryIcon(term.category)}
                            <span>{term.category}</span>
                          </span>

                          {term.toolUrl && (
                            <span 
                              className="inline-flex items-center gap-1 text-[11px] font-bold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950/50 border border-primary-200 dark:border-primary-800 px-2 py-0.5 rounded-md"
                              title="Interactive tool available"
                            >
                              <Calculator className="w-3 h-3" />
                              <span>Calculator</span>
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h2 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors tracking-tight">
                          {term.term}
                        </h2>

                        {/* Definition Preview */}
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                          {term.definition}
                        </p>
                      </div>

                      {/* Footer Link */}
                      <div className="mt-5 pt-3 border-t border-slate-100 dark:border-zinc-800 flex items-center justify-between text-xs font-semibold text-slate-900 dark:text-slate-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        <span>Read guide & formula</span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="text-center py-16 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-8 shadow-sm">
            <div className="w-12 h-12 bg-slate-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-3 text-slate-500">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">No matching terms found</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-4">
              No metrics matched "{searchQuery}". Reset filters or search for another metric.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSelectedLetter('ALL');
              }}
              className="inline-flex items-center gap-1.5 bg-primary-600 hover:bg-primary-500 text-white font-semibold px-4 py-2.5 text-xs rounded-lg transition-colors cursor-pointer shadow-sm"
            >
              <span>Reset all filters</span>
            </button>
          </div>
        )}

        {/* Global Bottom Conversion Banner */}
        <div className="not-prose bg-slate-900 dark:bg-zinc-900 border border-slate-800 text-white p-8 sm:p-10 rounded-2xl my-16 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-800 rounded-full text-slate-300 text-xs font-semibold border border-slate-700">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Telemetry Engine</span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              Automate agency timesheet economics in 10 seconds.
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Stop calculating realization rates and margin formulas in manual spreadsheets. VeloTime gives your team a 10-second weekly keyboard matrix with live executive reporting.
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
              Explore all tools
            </Link>
          </div>
        </div>

      </main>
    </div>
  );
}
