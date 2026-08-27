'use client';
import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import { glossaryTerms, glossaryCategories } from '../../content/glossary';
import { 
  BookOpen, 
  Search, 
  Sparkles, 
  Calculator, 
  ArrowRight, 
  Layers, 
  Tag, 
  X, 
  Hash,
  TrendingUp,
  Clock,
  DollarSign,
  ShieldAlert
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

  const getCategoryBadge = (cat) => {
    switch (cat) {
      case 'Pricing & Billing':
        return 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800';
      case 'Profitability & Margins':
        return 'bg-primary-50 text-primary-700 dark:bg-primary-950/40 dark:text-primary-400 border-primary-200 dark:border-primary-800';
      case 'Capacity & Utilization':
        return 'bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400 border-blue-200 dark:border-blue-800';
      case 'Operations & Risk':
        return 'bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400 border-amber-200 dark:border-amber-800';
      default:
        return 'bg-slate-100 text-slate-700 dark:bg-zinc-800 dark:text-slate-300 border-slate-200 dark:border-zinc-700';
    }
  };

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
      <main className="pt-32 pb-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <div className="mb-8">
          <Breadcrumbs items={[
            { name: 'Home', path: '/' },
            { name: 'Agency Glossary', path: '/glossary' }
          ]} />
        </div>

        {/* Header Hero */}
        <header className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 dark:bg-primary-950/40 text-primary-600 dark:text-primary-400 font-bold text-xs rounded-full mb-4 border border-primary-200 dark:border-primary-800">
            <BookOpen className="w-3.5 h-3.5" />
            <span>VeloTime Agency Knowledge Base</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-4">
            Agency Economics & Time Billing Glossary
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Definitions, real-world applications, and mathematical formulas for the most critical metrics in agency finance, billable capacity, and retainer management.
          </p>
        </header>

        {/* Interactive Search & Filter Controls */}
        <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-sm mb-12 space-y-6">
          
          {/* Live Search Bar */}
          <div className="relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text"
              placeholder="Search glossary terms, definitions, formulas (e.g. EHR, Burn Rate, WIP)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 dark:bg-zinc-800/60 border border-slate-200 dark:border-zinc-700 rounded-xl pl-12 pr-10 py-3.5 text-sm focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                title="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5" />
              <span>Browse by Category</span>
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
                    className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-transparent shadow-sm'
                        : 'bg-slate-50 dark:bg-zinc-800/80 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-zinc-700 hover:border-slate-300 dark:hover:border-zinc-600'
                    }`}
                  >
                    {cat !== 'All' && getCategoryIcon(cat)}
                    <span>{cat}</span>
                    <span className={`px-1.5 py-0.5 rounded-md text-[10px] font-bold ${
                      isSelected 
                        ? 'bg-slate-700 text-slate-200 dark:bg-zinc-200 dark:text-zinc-800' 
                        : 'bg-slate-200 dark:bg-zinc-700 text-slate-600 dark:text-slate-300'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Alphabetical A-Z Jump Bar */}
          <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-zinc-800">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <Hash className="w-3.5 h-3.5" />
                <span>A–Z Alphabetical Index</span>
              </div>
              {selectedLetter !== 'ALL' && (
                <button
                  onClick={() => setSelectedLetter('ALL')}
                  className="text-xs text-primary-600 dark:text-primary-400 font-bold hover:underline cursor-pointer"
                >
                  Reset Letter Filter
                </button>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 pt-1">
              <button
                onClick={() => setSelectedLetter('ALL')}
                className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                  selectedLetter === 'ALL'
                    ? 'bg-primary-600 text-white'
                    : 'bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-zinc-700'
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
                    className={`w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-xs font-bold rounded-lg transition-all ${
                      isSelected
                        ? 'bg-primary-600 text-white shadow-sm'
                        : hasTerms
                        ? 'bg-slate-100 dark:bg-zinc-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-zinc-700 cursor-pointer'
                        : 'bg-slate-50 dark:bg-zinc-900 text-slate-300 dark:text-zinc-700 cursor-not-allowed opacity-50'
                    }`}
                  >
                    {letter}
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Results Metadata */}
        <div className="flex items-center justify-between mb-8 px-1">
          <div className="text-sm font-semibold text-slate-500 dark:text-slate-400">
            Showing <span className="text-slate-900 dark:text-white font-bold">{filteredTerms.length}</span> terms
            {selectedCategory !== 'All' && <span> in <span className="text-primary-600 dark:text-primary-400 font-bold">{selectedCategory}</span></span>}
            {selectedLetter !== 'ALL' && <span> starting with <span className="text-primary-600 dark:text-primary-400 font-bold">"{selectedLetter}"</span></span>}
            {searchQuery && <span> matching <span className="text-primary-600 dark:text-primary-400 font-bold">"{searchQuery}"</span></span>}
          </div>

          {(searchQuery || selectedCategory !== 'All' || selectedLetter !== 'ALL') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSelectedLetter('ALL');
              }}
              className="text-xs font-bold text-primary-600 dark:text-primary-400 hover:underline cursor-pointer"
            >
              Clear all filters
            </button>
          )}
        </div>

        {/* Alphabetical Term Groupings */}
        {Object.keys(groupedByLetter).length > 0 ? (
          <div className="space-y-12">
            {Object.keys(groupedByLetter).map((letter) => (
              <section key={letter} id={`letter-${letter}`} className="space-y-4 scroll-mt-36">
                <div className="flex items-center gap-3 border-b-2 border-slate-200 dark:border-zinc-800 pb-2">
                  <span className="w-9 h-9 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-black text-lg shadow-sm">
                    {letter}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {groupedByLetter[letter].length} {groupedByLetter[letter].length === 1 ? 'Term' : 'Terms'}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {groupedByLetter[letter].map((term) => (
                    <Link
                      key={term.slug}
                      href={`/glossary/${term.slug}`}
                      className="group bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-primary-500 dark:hover:border-primary-500 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                    >
                      <div>
                        {/* Top Category Badge */}
                        <div className="flex items-center justify-between mb-3">
                          <span className={`text-[11px] font-bold px-2.5 py-1 rounded-md border flex items-center gap-1.5 ${getCategoryBadge(term.category)}`}>
                            {getCategoryIcon(term.category)}
                            <span>{term.category}</span>
                          </span>

                          {term.toolUrl && (
                            <span 
                              className="inline-flex items-center gap-1 text-[11px] font-bold text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 px-2 py-0.5 rounded-md"
                              title="Interactive tool available"
                            >
                              <Calculator className="w-3 h-3" />
                              <span>Tool</span>
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h2 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors mb-2 tracking-tight">
                          {term.term}
                        </h2>

                        {/* Definition Preview */}
                        <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-3 leading-relaxed">
                          {term.definition}
                        </p>
                      </div>

                      {/* Footer Link & Related Chips */}
                      <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800/80 flex items-center justify-between text-xs font-bold text-primary-600 dark:text-primary-400 group-hover:translate-x-1 transition-transform">
                        <span>Read Full Guide</span>
                        <ArrowRight className="w-4 h-4" />
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
            <div className="w-12 h-12 bg-slate-100 dark:bg-zinc-800 rounded-2xl flex items-center justify-center mx-auto mb-4 text-slate-400">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No matching glossary terms</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-6">
              We couldn't find any terms matching "{searchQuery}". Try searching for another metric or reset your filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSelectedLetter('ALL');
              }}
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-200 text-white dark:text-slate-900 font-bold px-6 py-2.5 rounded-xl text-sm transition-colors cursor-pointer"
            >
              <span>Reset All Filters</span>
            </button>
          </div>
        )}

        {/* Global Bottom CTA */}
        <div className="not-prose bg-slate-900 dark:bg-zinc-900 border border-slate-800 text-white p-8 sm:p-10 rounded-2xl mt-20 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary-950/60 text-primary-400 font-bold text-xs rounded-full mb-3 border border-primary-800">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Real-Time Telemetry</span>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">
              Ready to automate your agency timesheet economics?
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Stop calculating realization rates and margin formulas in messy spreadsheets. VeloTime gives your team a 10-second weekly keyboard matrix with live executive reporting.
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
