import React, { useState, useEffect, useMemo } from 'react';
import { Header } from './components/Header';
import { FilterBar } from './components/FilterBar';
import { QuestionCard } from './components/QuestionCard';
import { ExamYear, FilterOptions, BookmarkItem } from './types';
import { EXAM_DATA, ALL_YEARS } from './data/examData';
import { getDifficultyLevel } from './utils/formatters';
import { ShieldCheck, ArrowUp } from 'lucide-react';

export default function App() {
  const [currentYear, setCurrentYear] = useState<ExamYear>('2012');
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Filters (search, difficulty, selectedQNo)
  const [filters, setFilters] = useState<FilterOptions>({
    search: '',
    difficulty: 'all',
    selectedQNo: null,
  });

  // User interactive answers for self-checking
  const [studyAnswers, setStudyAnswers] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>({});

  // Bookmarks in LocalStorage
  const [bookmarks, setBookmarks] = useState<BookmarkItem[]>(() => {
    try {
      const saved = localStorage.getItem('hkdse_chem_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Dark Mode State
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('hkdse_chem_dark');
      if (saved !== null) return JSON.parse(saved);
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('hkdse_chem_dark', JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('hkdse_chem_bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  // Scroll listener for back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bookmarking helpers
  const isQuestionBookmarked = (year: ExamYear, qNo: number) => {
    return bookmarks.some(b => b.year === year && b.q_no === qNo);
  };

  const toggleBookmark = (year: ExamYear, qNo: number) => {
    if (isQuestionBookmarked(year, qNo)) {
      setBookmarks(prev => prev.filter(b => !(b.year === year && b.q_no === qNo)));
    } else {
      setBookmarks(prev => [...prev, { year, q_no: qNo, dateAdded: Date.now() }]);
    }
  };

  const saveQuestionNote = (year: ExamYear, qNo: number, note: string) => {
    setBookmarks(prev => {
      const exists = prev.some(b => b.year === year && b.q_no === qNo);
      if (exists) {
        return prev.map(b => (b.year === year && b.q_no === qNo ? { ...b, note } : b));
      } else {
        return [...prev, { year, q_no: qNo, note, dateAdded: Date.now() }];
      }
    });
  };

  const getQuestionNote = (year: ExamYear, qNo: number) => {
    const item = bookmarks.find(b => b.year === year && b.q_no === qNo);
    return item?.note || '';
  };

  // Questions for current year
  const rawYearQuestions = EXAM_DATA[currentYear] || [];

  // Filtered questions
  const filteredQuestions = useMemo(() => {
    return rawYearQuestions.filter((q) => {
      // Search filter
      if (filters.search) {
        const query = filters.search.toLowerCase().trim();
        const matchesNo = query === q.q_no.toString() || query === `q${q.q_no}`;
        const matchesFocus = q.focus.toLowerCase().includes(query);
        const matchesExpA = q.exp_a.toLowerCase().includes(query);
        const matchesExpB = q.exp_b.toLowerCase().includes(query);
        const matchesExpC = q.exp_c.toLowerCase().includes(query);
        const matchesExpD = q.exp_d.toLowerCase().includes(query);
        if (!matchesNo && !matchesFocus && !matchesExpA && !matchesExpB && !matchesExpC && !matchesExpD) {
          return false;
        }
      }

      // Difficulty filter
      if (filters.difficulty !== 'all') {
        const diff = getDifficultyLevel(q.rate);
        if (diff !== filters.difficulty) return false;
      }

      // Selected Q Number
      if (filters.selectedQNo !== null) {
        if (q.q_no !== filters.selectedQNo) return false;
      }

      return true;
    });
  }, [rawYearQuestions, filters]);

  // Difficulty counts for the current year
  const difficultyCounts = useMemo(() => {
    const counts = {
      all: rawYearQuestions.length,
      challenging: 0,
      moderate: 0,
      high: 0,
      deleted: 0,
    };
    rawYearQuestions.forEach((q) => {
      const diff = getDifficultyLevel(q.rate);
      if (diff === 'challenging') counts.challenging++;
      else if (diff === 'moderate') counts.moderate++;
      else if (diff === 'high') counts.high++;
      else if (diff === 'deleted') counts.deleted++;
    });
    return counts;
  }, [rawYearQuestions]);

  const handleJumpToQuestion = (qNo: number) => {
    if (filters.selectedQNo === qNo) {
      setFilters(prev => ({ ...prev, selectedQNo: null }));
    } else {
      setFilters(prev => ({ ...prev, selectedQNo: qNo }));
      // Smooth scroll to question card if in DOM
      setTimeout(() => {
        const el = document.getElementById(`q-${qNo}`);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors">
      
      {/* Header with Year Selector & Paper Details */}
      <Header
        currentYear={currentYear}
        onSelectYear={(yr) => {
          setCurrentYear(yr);
          setFilters(prev => ({ ...prev, selectedQNo: null }));
        }}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        {/* Top Filter Bar for mobile and quick filter adjustments */}
        <div className="lg:hidden">
          <FilterBar
            filters={filters}
            onChangeFilters={setFilters}
            totalQuestions={rawYearQuestions.length}
            filteredCount={filteredQuestions.length}
            difficultyCounts={difficultyCounts}
            onJumpToQuestion={handleJumpToQuestion}
            availableQNos={rawYearQuestions.map(q => q.q_no)}
          />
        </div>

        {/* Desktop Geometric Layout (Sidebar Navigation + Question List) */}
        <div className="flex-1 max-w-7xl w-full mx-auto flex flex-col lg:flex-row">
          
          {/* Left Geometric Sidebar (Desktop) */}
          <aside className="hidden lg:flex w-80 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex-col p-5 gap-6 shrink-0 sticky top-24 self-start max-h-[calc(100vh-6rem)] overflow-y-auto">
            {/* Search in sidebar */}
            <div>
              <label className="block text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2">
                Search Question
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={filters.search}
                  onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                  placeholder="Q# or focus keyword..."
                  className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-hidden focus:border-emerald-500"
                />
                {filters.search && (
                  <button
                    onClick={() => setFilters({ ...filters, search: '' })}
                    className="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-600"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>

            {/* Question Matrix Navigation */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="block text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                  Quick Jump ({rawYearQuestions.length} Questions)
                </label>
                {filters.selectedQNo !== null && (
                  <button
                    onClick={() => setFilters({ ...filters, selectedQNo: null })}
                    className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold hover:underline"
                  >
                    View All
                  </button>
                )}
              </div>
              <div className="grid grid-cols-6 gap-1.5">
                {rawYearQuestions.map((q) => {
                  const isSelected = filters.selectedQNo === q.q_no;
                  const diff = getDifficultyLevel(q.rate);
                  let borderClass = 'border-slate-200 dark:border-slate-750 text-slate-600 dark:text-slate-300';
                  if (diff === 'challenging') borderClass = 'hover:border-rose-400';
                  else if (diff === 'moderate') borderClass = 'hover:border-amber-400';
                  else borderClass = 'hover:border-emerald-500';

                  return (
                    <button
                      key={q.q_no}
                      onClick={() => handleJumpToQuestion(q.q_no)}
                      className={`h-8 w-full rounded border flex items-center justify-center text-xs font-mono font-medium transition-all ${
                        isSelected
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-500 font-bold shadow-xs'
                          : `bg-white dark:bg-slate-800 ${borderClass}`
                      }`}
                    >
                      {q.q_no}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Filter Difficulty */}
            <div>
              <label className="block text-[10px] font-bold text-slate-400 dark:text-slate-400 uppercase tracking-widest mb-3">
                Filter by Difficulty
              </label>
              <div className="flex flex-col gap-1.5">
                <button
                  onClick={() => setFilters({ ...filters, difficulty: 'all' })}
                  className={`flex items-center gap-3 p-2 rounded-lg text-left transition-all border ${
                    filters.difficulty === 'all'
                      ? 'bg-slate-900 text-white border-slate-900 dark:bg-emerald-500 dark:text-slate-950 dark:border-emerald-400 font-bold shadow-xs'
                      : 'bg-white dark:bg-slate-800/90 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-emerald-500 dark:hover:border-emerald-500'
                  }`}
                >
                  <span className="text-xs flex-1 font-medium">All Items</span>
                  <span className="text-xs font-mono font-bold opacity-80">{difficultyCounts.all}</span>
                </button>

                <button
                  onClick={() => setFilters({ ...filters, difficulty: 'high' })}
                  className={`flex items-center gap-3 p-2 rounded-lg text-left transition-all border ${
                    filters.difficulty === 'high'
                      ? 'bg-emerald-50 dark:bg-emerald-950/80 border-emerald-500 text-emerald-900 dark:text-emerald-100 font-bold shadow-xs'
                      : 'bg-white dark:bg-slate-800/90 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-emerald-500 dark:hover:border-emerald-500'
                  }`}
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0 shadow-xs"></div>
                  <span className="text-xs flex-1 font-medium">High Facility (&gt;70%)</span>
                  <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-300">{difficultyCounts.high}</span>
                </button>

                <button
                  onClick={() => setFilters({ ...filters, difficulty: 'moderate' })}
                  className={`flex items-center gap-3 p-2 rounded-lg text-left transition-all border ${
                    filters.difficulty === 'moderate'
                      ? 'bg-amber-50 dark:bg-amber-950/80 border-amber-500 text-amber-900 dark:text-amber-100 font-bold shadow-xs'
                      : 'bg-white dark:bg-slate-800/90 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-amber-500 dark:hover:border-amber-500'
                  }`}
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400 shrink-0 shadow-xs"></div>
                  <span className="text-xs flex-1 font-medium">Moderate (40–70%)</span>
                  <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-300">{difficultyCounts.moderate}</span>
                </button>

                <button
                  onClick={() => setFilters({ ...filters, difficulty: 'challenging' })}
                  className={`flex items-center gap-3 p-2 rounded-lg text-left transition-all border ${
                    filters.difficulty === 'challenging'
                      ? 'bg-rose-50 dark:bg-rose-950/80 border-rose-500 text-rose-900 dark:text-rose-100 font-bold shadow-xs'
                      : 'bg-white dark:bg-slate-800/90 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-rose-500 dark:hover:border-rose-500'
                  }`}
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500 shrink-0 shadow-xs"></div>
                  <span className="text-xs flex-1 font-medium">Challenging (&lt;40%)</span>
                  <span className="text-xs font-mono font-bold text-rose-600 dark:text-rose-300">{difficultyCounts.challenging}</span>
                </button>
              </div>
            </div>

            {/* Paper Overview Box */}
            <div className="p-3.5 bg-slate-900 dark:bg-slate-850 rounded-xl text-white text-center border border-slate-800 dark:border-slate-700 shadow-sm mt-auto">
              <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-1 font-semibold">
                Paper {currentYear} Overview
              </p>
              <div className="text-xl font-bold font-mono text-emerald-400 dark:text-emerald-300">
                {filteredQuestions.length} / {rawYearQuestions.length} Questions
              </div>
              <div className="w-full bg-slate-800 dark:bg-slate-700 h-1.5 rounded-full mt-2 overflow-hidden">
                <div 
                  className="bg-emerald-500 h-full transition-all duration-300"
                  style={{ width: `${(filteredQuestions.length / (rawYearQuestions.length || 1)) * 100}%` }}
                />
              </div>
            </div>
          </aside>

          {/* Main Question Cards Section */}
          <section className="flex-1 p-4 sm:p-6 lg:p-8 space-y-5">
            
            {/* Copyright Compliance Banner */}
            <div className="p-3.5 bg-slate-100 dark:bg-slate-900 border-l-4 border-slate-900 dark:border-emerald-500 rounded-r-xl flex items-start space-x-3 text-xs text-slate-700 dark:text-slate-300">
              <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <div className="leading-relaxed">
                <span className="font-bold text-slate-900 dark:text-white">HKDSE Syllabus Answer Check:</span> Under copyright restrictions, original exam questions and diagram stems are not displayed. Please check your answers against the official keys, candidate facility indices, and detailed option-by-option (A–D) scientific rationales below. Options are hidden by default—click on a question to reveal explanations.
              </div>
            </div>

            {/* Question Cards */}
            {filteredQuestions.length > 0 ? (
              <div className="space-y-5">
                {filteredQuestions.map((q) => {
                  const answerKey = `${currentYear}_${q.q_no}`;
                  return (
                    <QuestionCard
                      key={`${currentYear}-${q.q_no}`}
                      question={q}
                      year={currentYear}
                      isBookmarked={isQuestionBookmarked(currentYear, q.q_no)}
                      onToggleBookmark={() => toggleBookmark(currentYear, q.q_no)}
                      userNote={getQuestionNote(currentYear, q.q_no)}
                      onSaveNote={(note) => saveQuestionNote(currentYear, q.q_no, note)}
                      selectedOption={studyAnswers[answerKey]}
                      onSelectOption={(opt) => {
                        setStudyAnswers(prev => ({ ...prev, [answerKey]: opt }));
                      }}
                      cardIndex={q.q_no}
                    />
                  );
                })}
              </div>
            ) : (
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-12 text-center border border-slate-200 dark:border-slate-800 space-y-3">
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  No questions match the selected filter criteria.
                </p>
                <button
                  onClick={() => setFilters({ search: '', difficulty: 'all', selectedQNo: null })}
                  className="px-4 py-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </section>

        </div>
      </main>

      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-30 p-3 rounded-full bg-slate-900 text-emerald-400 border border-slate-700 shadow-xl hover:bg-slate-800 transition-all hover:scale-105 focus:outline-hidden"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-6 text-center text-xs text-slate-500 dark:text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-1">
          <p className="font-semibold text-slate-700 dark:text-slate-300">
            DSE ChemInsight • HKDSE Chemistry Answer Keys & Explanations (2012–2025)
          </p>
          <p className="text-[11px] text-slate-400">
            Geometric Balance Design • Option-by-Option Breakdown • Facility Rate Analytics
          </p>
        </div>
      </footer>

    </div>
  );
}

