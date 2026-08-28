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
  Filter
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
        
        {/* Breadcrumbs */}
        <header className="space-y-4">
          <Breadcrumbs items={[
            { name: 'Home', path: '/' },
            { name: 'Agency Glossary', path: '/glossary' }
          ]} />

          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-100 dark:bg-zinc-900 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-zinc-700 text-[11px] font-mono uppercase tracking-wider font-semibold">
              <BookOpen className="w-3 h-3 text-slate-500" />
              <span>Agency Knowledge Base [2026]</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-slate-100">
            Agency Economics & Time Billing Glossary
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-normal max-w-3xl leading-relaxed">
            Mathematical definitions, real-world formulas, and benchmarks for agency finance, billable capacity, and margin control.
          </p>
        </header>

        {/* INTERACTIVE SEARCH & SPREADSHEET FILTER MATRIX */}
        <section className="border-2 border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-900">
          <div className="bg-slate-100 dark:bg-zinc-800/80 border-b border-slate-300 dark:border-zinc-700 px-4 py-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
              <Filter className="w-3.5 h-3.5 text-slate-500" />
              <span>CELL_00 // SEARCH_AND_FILTERS</span>
            </div>
            <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
              INDEX_FILTER
            </span>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Live Search Bar */}
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text"
                placeholder="Search terms, formulas, or abbreviations (e.g. EHR, Burn Rate, Scope Creep)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 dark:bg-zinc-950 border border-slate-300 dark:border-zinc-700 rounded-none pl-10 pr-10 py-3 text-xs sm:text-sm font-mono focus:ring-1 focus:ring-slate-900 dark:focus:ring-slate-100 focus:border-slate-900 dark:focus:border-slate-100 outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                  title="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Filter Pills (Square Spreadsheet Matrix) */}
            <div className="space-y-2">
              <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <Tag className="w-3 h-3 text-slate-500" />
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
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-none text-xs font-mono font-bold border transition-colors cursor-pointer ${
                        isSelected
                          ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-900 dark:border-white'
                          : 'bg-slate-50 dark:bg-zinc-950 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-zinc-800 hover:border-slate-400 dark:hover:border-zinc-700'
                      }`}
                    >
                      {cat !== 'All' && getCategoryIcon(cat)}
                      <span>{cat}</span>
                      <span className={`px-1.5 py-0.2 rounded-none text-[10px] font-mono ${
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

            {/* Alphabetical A-Z Jump Bar (Square Matrix) */}
            <div className="space-y-2 pt-4 border-t border-slate-200 dark:border-zinc-800">
              <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Hash className="w-3 h-3 text-slate-500" />
                  <span>A–Z Alphabetical Jump Index:</span>
                </div>
                {selectedLetter !== 'ALL' && (
                  <button
                    onClick={() => setSelectedLetter('ALL')}
                    className="text-xs font-mono text-slate-900 dark:text-slate-100 underline hover:text-primary-600 cursor-pointer"
                  >
                    [RESET_LETTER_FILTER]
                  </button>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-1 pt-1">
                <button
                  onClick={() => setSelectedLetter('ALL')}
                  className={`px-3 py-1 text-xs font-mono font-bold rounded-none border transition-colors cursor-pointer ${
                    selectedLetter === 'ALL'
                      ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-900 dark:border-white'
                      : 'bg-slate-50 dark:bg-zinc-950 text-slate-600 dark:text-slate-400 border-slate-300 dark:border-zinc-800 hover:border-slate-400'
                  }`}
                >
                  ALL
                </button>

                {ALPHABET.map((letter) => {
                  const hasTerms = availableLetters.has(letter);
                  const isSelected = selectedLetter === letter;

                  return (
                    <button
                      key={letter}
                      disabled={!hasTerms}
                      onClick={() => setSelectedLetter(isSelected ? 'ALL' : letter)}
                      className={`w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-xs font-mono font-bold rounded-none border transition-colors ${
                        isSelected
                          ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-900 dark:border-white'
                          : hasTerms
                          ? 'bg-slate-50 dark:bg-zinc-950 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-zinc-800 hover:border-slate-900 dark:hover:border-slate-100 cursor-pointer'
                          : 'bg-slate-100 dark:bg-zinc-900 text-slate-300 dark:text-zinc-700 border-slate-200 dark:border-zinc-800 cursor-not-allowed opacity-40'
                      }`}
                    >
                      {letter}
                    </button>
                  );
                })}
              </div>
            </div>

          </div>
        </section>

        {/* Results Metadata */}
        <div className="flex items-center justify-between px-1 font-mono text-xs text-slate-600 dark:text-slate-400">
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
              className="text-xs font-mono font-bold text-slate-900 dark:text-slate-100 underline hover:text-primary-600 cursor-pointer"
            >
              [CLEAR_ALL_FILTERS]
            </button>
          )}
        </div>

        {/* Alphabetical Term Groupings */}
        {Object.keys(groupedByLetter).length > 0 ? (
          <div className="space-y-10">
            {Object.keys(groupedByLetter).map((letter) => (
              <section key={letter} id={`letter-${letter}`} className="space-y-3 scroll-mt-36">
                
                {/* Section Letter Header Strip */}
                <div className="flex items-center gap-2 border-b-2 border-slate-300 dark:border-zinc-700 pb-2">
                  <span className="px-2 py-0.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-mono font-black text-sm">
                    {letter}
                  </span>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {groupedByLetter[letter].length} {groupedByLetter[letter].length === 1 ? 'Metric' : 'Metrics'}
                  </span>
                </div>

                {/* Square Spreadsheet Card Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {groupedByLetter[letter].map((term) => (
                    <Link
                      key={term.slug}
                      href={`/glossary/${term.slug}`}
                      className="group bg-white dark:bg-zinc-900 border-2 border-slate-300 dark:border-zinc-800 hover:border-slate-900 dark:hover:border-slate-100 rounded-none p-5 transition-colors flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        {/* Top Category Badge */}
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 border border-slate-300 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-950 text-slate-700 dark:text-slate-300 flex items-center gap-1">
                            {getCategoryIcon(term.category)}
                            <span>{term.category}</span>
                          </span>

                          {term.toolUrl && (
                            <span 
                              className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-slate-900 dark:text-slate-100 bg-slate-100 dark:bg-zinc-800 border border-slate-300 dark:border-zinc-700 px-1.5 py-0.5"
                              title="Interactive tool available"
                            >
                              <Calculator className="w-2.5 h-2.5" />
                              <span>CALC</span>
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h2 className="text-base font-bold text-slate-900 dark:text-white group-hover:underline transition-colors tracking-tight font-mono">
                          {term.term}
                        </h2>

                        {/* Definition Preview */}
                        <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed font-sans">
                          {term.definition}
                        </p>
                      </div>

                      {/* Footer Link */}
                      <div className="mt-5 pt-3 border-t border-slate-200 dark:border-zinc-800 flex items-center justify-between text-xs font-mono font-bold text-slate-900 dark:text-slate-100">
                        <span>[SPEC_GUIDE]</span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="text-center py-16 bg-white dark:bg-zinc-900 border-2 border-slate-300 dark:border-zinc-800 rounded-none p-8">
            <div className="w-10 h-10 bg-slate-100 dark:bg-zinc-800 flex items-center justify-center mx-auto mb-3 text-slate-500">
              <Search className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold font-mono text-slate-900 dark:text-white mb-1">NO MATCHING TERMS FOUND</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-4 font-sans">
              No metrics matched "{searchQuery}". Reset filters or search for another abbreviation.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSelectedLetter('ALL');
              }}
              className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-200 text-white dark:text-slate-900 font-mono font-bold px-4 py-2 text-xs transition-colors cursor-pointer border border-slate-900 dark:border-white"
            >
              <span>RESET ALL FILTERS</span>
            </button>
          </div>
        )}

        {/* Global Bottom Conversion Spreadsheet Cell */}
        <section className="border-2 border-slate-900 dark:border-slate-100 bg-slate-950 dark:bg-black text-white p-8 sm:p-10 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 border border-slate-700 text-slate-300 text-xs font-mono font-semibold uppercase">
            <span className="w-2 h-2 bg-emerald-400"></span>
            <span>TELEMETRY_ENGINE</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Automate Agency Timesheet Economics in 10 Seconds.
          </h2>

          <p className="text-slate-400 max-w-xl mx-auto text-xs sm:text-sm font-sans leading-relaxed">
            Stop calculating realization rates and margin formulas in manual spreadsheets. VeloTime gives your team a 10-second weekly keyboard matrix with live executive reporting.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href="https://app.velotime.dg.tools"
              className="w-full sm:w-auto bg-white hover:bg-slate-100 text-slate-950 font-mono font-bold text-xs py-3 px-6 transition-colors border border-white"
            >
              START 14-DAY FREE TRIAL &rarr;
            </a>
            <Link
              href="/tools"
              className="w-full sm:w-auto bg-transparent hover:bg-slate-900 text-slate-300 font-mono font-bold text-xs py-3 px-6 transition-colors border border-slate-700"
            >
              EXPLORE ALL TOOLS
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}
