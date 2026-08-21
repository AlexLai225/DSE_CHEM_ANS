import React from 'react';
import { 
  Moon, 
  Sun,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { ExamYear } from '../types';
import { ALL_YEARS, EXAM_DATA } from '../data/examData';
import { parseFacilityRate } from '../utils/formatters';

interface HeaderProps {
  currentYear: ExamYear;
  onSelectYear: (year: ExamYear) => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentYear,
  onSelectYear,
  darkMode,
  onToggleDarkMode,
}) => {
  const currentQuestions = EXAM_DATA[currentYear] || [];
  
  // Calculate average facility rate for current year
  const validRates = currentQuestions
    .map(q => parseFacilityRate(q.rate))
    .filter(r => r > 0);
  const avgRate = validRates.length > 0
    ? Math.round(validRates.reduce((a, b) => a + b, 0) / validRates.length)
    : 0;

  return (
    <header className="sticky top-0 z-40 bg-slate-900 text-white shadow-md border-b border-slate-800">
      {/* Top Banner with Brand & Utilities */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          
          {/* Brand & Title */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center font-bold text-slate-900 text-sm shadow-xs">
              CH
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-semibold tracking-tight text-white flex items-center gap-1.5">
                DSE Chem<span className="text-emerald-400 font-normal">Insight</span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded bg-slate-800 text-emerald-400 border border-slate-700">
                  Answer Key Companion
                </span>
              </h1>
              <p className="text-[11px] text-slate-400">
                Official Answer Keys • Facility Rates • Option A–D Explanations
              </p>
            </div>
          </div>

          {/* Quick Stats & Utilities */}
          <div className="flex items-center flex-wrap gap-2">
            {/* Year Stats Pill */}
            <div className="flex items-center space-x-3 px-3 py-1.5 bg-slate-800 rounded-lg text-xs border border-slate-700 text-slate-300">
              <span className="text-slate-400">{currentYear} Paper:</span>
              <span className="font-semibold text-white">{currentQuestions.length} Questions</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400">Avg Facility:</span>
              <span className="font-bold text-emerald-400 font-mono">{avgRate}%</span>
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={onToggleDarkMode}
              className="p-1.5 rounded-lg text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-300" />}
            </button>
          </div>
        </div>

        {/* Year Selector Bar (2012 to 2025 in ascending order) */}
        <div className="mt-3 border-t border-slate-800 pt-2.5 flex items-center space-x-2 overflow-x-auto pb-1 no-scrollbar">
          <div className="flex items-center space-x-1 shrink-0 text-slate-400 mr-1">
            <Calendar className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-[10px] font-bold uppercase tracking-widest">
              SELECT EXAM YEAR:
            </span>
          </div>

          <div className="flex gap-1 bg-slate-800 p-1 rounded-lg border border-slate-750 shrink-0">
            {ALL_YEARS.map((yr) => {
              const isSelected = currentYear === yr;
              return (
                <button
                  key={yr}
                  onClick={() => onSelectYear(yr)}
                  className={`px-3 py-1 rounded-md text-xs font-medium font-mono transition-all shrink-0 ${
                    isSelected
                      ? 'bg-emerald-500 text-slate-900 font-bold shadow-xs'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {yr}
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </header>
  );
};

