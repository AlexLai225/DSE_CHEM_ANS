import React from 'react';
import { Search, X } from 'lucide-react';
import { DifficultyLevel, FilterOptions } from '../types';

interface FilterBarProps {
  filters: FilterOptions;
  onChangeFilters: (filters: FilterOptions) => void;
  totalQuestions: number;
  filteredCount: number;
  difficultyCounts: {
    all: number;
    challenging: number;
    moderate: number;
    high: number;
    deleted: number;
  };
  onJumpToQuestion: (qNo: number) => void;
  availableQNos: number[];
}

export const FilterBar: React.FC<FilterBarProps> = ({
  filters,
  onChangeFilters,
  totalQuestions,
  filteredCount,
  difficultyCounts,
  onJumpToQuestion,
  availableQNos,
}) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeFilters({ ...filters, search: e.target.value });
  };

  const handleDifficultyChange = (diff: DifficultyLevel) => {
    onChangeFilters({ ...filters, difficulty: diff });
  };

  const handleResetFilters = () => {
    onChangeFilters({
      search: '',
      difficulty: 'all',
      selectedQNo: null,
    });
  };

  const hasActiveFilters = 
    filters.search !== '' || 
    filters.difficulty !== 'all' || 
    filters.selectedQNo !== null;

  return (
    <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-3.5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-3">
        
        {/* Top Controls: Search, Difficulty Pills */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={filters.search}
              onChange={handleSearchChange}
              placeholder="Search Q# (e.g. 18) or focus keywords (e.g. Hess, titration, polymer)..."
              className="block w-full pl-9 pr-8 py-2 text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-hidden focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-sans"
            />
            {filters.search && (
              <button
                onClick={() => onChangeFilters({ ...filters, search: '' })}
                className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Difficulty Segmented Filter Pills */}
          <div className="flex items-center flex-wrap gap-1.5">
            <button
              onClick={() => handleDifficultyChange('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center space-x-1 border ${
                filters.difficulty === 'all'
                  ? 'bg-slate-900 text-white border-slate-900 dark:bg-emerald-500 dark:text-slate-950 dark:border-emerald-400 shadow-xs'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-emerald-500'
              }`}
            >
              <span>All ({difficultyCounts.all})</span>
            </button>

            <button
              onClick={() => handleDifficultyChange('challenging')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center space-x-1.5 border ${
                filters.difficulty === 'challenging'
                  ? 'bg-rose-600 text-white border-rose-600 dark:bg-rose-600 dark:text-white dark:border-rose-500 shadow-xs'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-rose-400'
              }`}
              title="Facility Index < 40%"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500 shrink-0" />
              <span>Challenging &lt;40% ({difficultyCounts.challenging})</span>
            </button>

            <button
              onClick={() => handleDifficultyChange('moderate')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center space-x-1.5 border ${
                filters.difficulty === 'moderate'
                  ? 'bg-amber-600 text-white border-amber-600 dark:bg-amber-600 dark:text-white dark:border-amber-500 shadow-xs'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-amber-400'
              }`}
              title="Facility Index 40% – 70%"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 shrink-0" />
              <span>Moderate 40–70% ({difficultyCounts.moderate})</span>
            </button>

            <button
              onClick={() => handleDifficultyChange('high')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center space-x-1.5 border ${
                filters.difficulty === 'high'
                  ? 'bg-emerald-600 text-white border-emerald-600 dark:bg-emerald-600 dark:text-white dark:border-emerald-500 shadow-xs'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-emerald-500'
              }`}
              title="Facility Index > 70%"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
              <span>High &gt;70% ({difficultyCounts.high})</span>
            </button>

            {difficultyCounts.deleted > 0 && (
              <button
                onClick={() => handleDifficultyChange('deleted')}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                  filters.difficulty === 'deleted'
                    ? 'bg-slate-600 text-white border-slate-600 shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-300 dark:border-slate-700 hover:bg-slate-200'
                }`}
              >
                <span>Deleted ({difficultyCounts.deleted})</span>
              </button>
            )}

            {hasActiveFilters && (
              <button
                onClick={handleResetFilters}
                className="px-2 py-1.5 rounded-lg text-xs font-medium text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center space-x-1"
                title="Reset all filters"
              >
                <X className="w-3 h-3" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>

        {/* Quick Question Number Jump Bar (Q1 to Q36) */}
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center space-x-1 overflow-x-auto pb-1 no-scrollbar">
            <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mr-2 shrink-0">
              Q-JUMP:
            </span>
            {availableQNos.map((q) => {
              const isSelected = filters.selectedQNo === q;
              return (
                <button
                  key={q}
                  onClick={() => onJumpToQuestion(q)}
                  className={`w-8 h-8 rounded border text-xs font-mono font-bold transition-all shrink-0 flex items-center justify-center ${
                    isSelected
                      ? 'border-emerald-500 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-500 shadow-xs'
                      : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:border-emerald-500'
                  }`}
                >
                  {q}
                </button>
              );
            })}
          </div>
        </div>

        {/* Filter Result Count Bar */}
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pt-1">
          <div>
            Showing <span className="font-semibold text-slate-800 dark:text-slate-200 font-mono">{filteredCount}</span> of{' '}
            <span className="font-semibold text-slate-800 dark:text-slate-200 font-mono">{totalQuestions}</span> questions
            {hasActiveFilters && <span className="italic ml-1 text-emerald-600 dark:text-emerald-400">(active filter)</span>}
          </div>
          <div className="text-[11px] text-slate-400">
            Click question or option to check answer breakdown
          </div>
        </div>

      </div>
    </div>
  );
};

