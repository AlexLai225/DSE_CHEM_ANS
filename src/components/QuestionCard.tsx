import React, { useState } from 'react';
import { 
  Check, 
  X, 
  Bookmark, 
  BookmarkCheck, 
  Copy, 
  CheckCircle2, 
  Eye, 
  EyeOff,
  StickyNote
} from 'lucide-react';
import { ExamQuestion, ExamYear } from '../types';
import { formatChemicalText, getDifficultyBadgeStyle } from '../utils/formatters';

interface QuestionCardProps {
  question: ExamQuestion;
  year: ExamYear;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
  userNote?: string;
  onSaveNote?: (note: string) => void;
  selectedOption?: 'A' | 'B' | 'C' | 'D' | null;
  onSelectOption?: (opt: 'A' | 'B' | 'C' | 'D') => void;
  cardIndex: number;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  year,
  isBookmarked,
  onToggleBookmark,
  userNote = '',
  onSaveNote,
  selectedOption: externalSelectedOption,
  onSelectOption,
  cardIndex,
}) => {
  // Options are hidden by default as requested
  const [localSelectedOption, setLocalSelectedOption] = useState<'A' | 'B' | 'C' | 'D' | null>(null);
  const [isRevealed, setIsRevealed] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [showNoteEditor, setShowNoteEditor] = useState<boolean>(false);
  const [noteText, setNoteText] = useState<string>(userNote);

  // Sync state if controlled
  const activeSelectedOption = externalSelectedOption !== undefined ? externalSelectedOption : localSelectedOption;
  const isDeleted = question.key === '*' || question.rate.toLowerCase().includes('deleted');

  const diffStyle = getDifficultyBadgeStyle(question.rate);

  const handleOptionClick = (option: 'A' | 'B' | 'C' | 'D') => {
    if (onSelectOption) {
      onSelectOption(option);
    } else {
      setLocalSelectedOption(option);
    }
    // Auto-reveal explanations after making a choice
    setIsRevealed(true);
  };

  const handleCopySummary = () => {
    const text = `HKDSE Chemistry ${year} Q${question.q_no}
Key Assessment Focus: ${question.focus}
Official Answer: ${question.key} (${question.rate} Correct)
A: ${question.exp_a}
B: ${question.exp_b}
C: ${question.exp_c}
D: ${question.exp_d}`;
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleSaveNoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSaveNote) {
      onSaveNote(noteText);
    }
    setShowNoteEditor(false);
  };

  const options: Array<{ label: 'A' | 'B' | 'C' | 'D'; exp: string }> = [
    { label: 'A', exp: question.exp_a },
    { label: 'B', exp: question.exp_b },
    { label: 'C', exp: question.exp_c },
    { label: 'D', exp: question.exp_d },
  ];

  return (
    <div 
      id={`q-${question.q_no}`}
      className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all overflow-hidden scroll-mt-28 flex flex-col p-5 sm:p-6 gap-4"
    >
      {/* Top Header Row with Title, Facility & Hero Key Answer */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div className="space-y-1.5 flex-1">
          {/* Geometric Badges & Action Toolbar */}
          <div className="flex items-center flex-wrap gap-2 justify-between sm:justify-start">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 bg-slate-200 dark:bg-slate-750 text-slate-800 dark:text-slate-200 rounded text-xs font-bold uppercase tracking-wide">
                Question {question.q_no} • {year}
              </span>
              <span className={`px-2.5 py-1 rounded text-xs font-bold uppercase border font-mono ${diffStyle.bg}`}>
                {question.rate} Correct
              </span>
            </div>

            {/* Micro Actions */}
            <div className="flex items-center space-x-1.5">
              <button
                onClick={onToggleBookmark}
                className={`p-1.5 rounded border transition-colors ${
                  isBookmarked
                    ? 'bg-amber-50 border-amber-300 text-amber-600 dark:bg-amber-950/50 dark:border-amber-700 dark:text-amber-400'
                    : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
                }`}
                title={isBookmarked ? 'Remove bookmark' : 'Bookmark this question'}
              >
                {isBookmarked ? <BookmarkCheck className="w-3.5 h-3.5" /> : <Bookmark className="w-3.5 h-3.5" />}
              </button>

              <button
                onClick={() => setShowNoteEditor(!showNoteEditor)}
                className={`p-1.5 rounded border transition-colors ${
                  userNote
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-600 dark:bg-emerald-950/50 dark:border-emerald-700 dark:text-emerald-400'
                    : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
                }`}
                title="Add personal note / reminder"
              >
                <StickyNote className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={handleCopySummary}
                className="p-1.5 rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                title="Copy question explanation"
              >
                {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Question Main Focus Heading */}
          <h2 className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-100 leading-snug pt-1">
            {formatChemicalText(question.focus)}
          </h2>
        </div>

        {/* Geometric Key Answer Badge (Hidden by default, toggleable) */}
        <button
          type="button"
          onClick={() => setIsRevealed(!isRevealed)}
          className={`p-3 sm:p-3.5 rounded-xl flex flex-col items-center justify-center min-w-[85px] sm:min-w-[95px] shadow-sm shrink-0 self-start sm:self-center transition-all cursor-pointer ${
            isRevealed
              ? 'bg-emerald-500 text-slate-900 shadow-md ring-2 ring-emerald-400/30'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-750 border border-slate-200 dark:border-slate-700 hover:border-emerald-500'
          }`}
          title={isRevealed ? 'Click to hide key answer' : 'Click to reveal key answer'}
        >
          <span className="text-[10px] font-bold uppercase opacity-75 tracking-wider">
            {isRevealed ? 'Key Answer' : 'Key Answer'}
          </span>
          <span className="text-2xl sm:text-3xl font-black font-mono leading-none mt-0.5">
            {isRevealed ? question.key : '?'}
          </span>
          {!isRevealed && (
            <span className="text-[9px] font-medium mt-1 text-emerald-600 dark:text-emerald-400 flex items-center gap-0.5">
              <Eye className="w-2.5 h-2.5" /> Reveal
            </span>
          )}
        </button>
      </div>

      {/* User Custom Note Drawer (if opened or present) */}
      {(showNoteEditor || userNote) && (
        <div className="p-3 bg-amber-50/80 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 rounded-xl text-xs">
          {showNoteEditor ? (
            <form onSubmit={handleSaveNoteSubmit} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-amber-800 dark:text-amber-300 flex items-center gap-1">
                  <StickyNote className="w-3.5 h-3.5" /> Personal Note:
                </span>
                <button
                  type="button"
                  onClick={() => setShowNoteEditor(false)}
                  className="text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
              <textarea
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                placeholder="Write your note, common mistake, or key equation..."
                rows={2}
                className="w-full p-2 bg-white dark:bg-slate-800 border border-amber-300 dark:border-amber-800 rounded-lg text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-amber-500 focus:outline-hidden text-xs"
              />
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => {
                    setNoteText('');
                    if (onSaveNote) onSaveNote('');
                    setShowNoteEditor(false);
                  }}
                  className="px-2.5 py-1 text-xs text-rose-600 hover:bg-rose-50 rounded-md"
                >
                  Clear
                </button>
                <button
                  type="submit"
                  className="px-3 py-1 text-xs font-semibold bg-amber-600 hover:bg-amber-700 text-white rounded-md shadow-2xs"
                >
                  Save Note
                </button>
              </div>
            </form>
          ) : (
            <div className="flex items-start justify-between">
              <div className="text-amber-900 dark:text-amber-200 flex items-start gap-1.5">
                <StickyNote className="w-3.5 h-3.5 text-amber-600 mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold mr-1">My Note:</span>
                  <span>{userNote}</span>
                </div>
              </div>
              <button
                onClick={() => setShowNoteEditor(true)}
                className="text-[11px] font-medium text-amber-700 dark:text-amber-400 hover:underline ml-2"
              >
                Edit
              </button>
            </div>
          )}
        </div>
      )}

      {/* Interactive Option Checker & Reveal Control */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/80 dark:border-slate-800">
        <div className="flex items-center space-x-2 flex-wrap">
          <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mr-1">
            {isRevealed ? 'Official Key:' : 'Select Choice:'}
          </span>

          {(['A', 'B', 'C', 'D'] as const).map((opt) => {
            const isOfficialKey = question.key === opt;
            const isUserSelected = activeSelectedOption === opt;
            
            let btnClass = 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:border-emerald-500 border-slate-200 dark:border-slate-700';

            if (isRevealed) {
              if (isOfficialKey) {
                btnClass = 'bg-emerald-500 text-slate-900 border-emerald-500 font-bold shadow-xs';
              } else if (isUserSelected && !isOfficialKey) {
                btnClass = 'bg-rose-600 text-white border-rose-600 line-through opacity-80';
              } else {
                btnClass = 'bg-slate-100 dark:bg-slate-850 text-slate-400 dark:text-slate-600 border-slate-200 dark:border-slate-800 opacity-60';
              }
            } else if (isUserSelected) {
              btnClass = 'bg-slate-900 dark:bg-emerald-500 text-white dark:text-slate-900 font-bold shadow-xs border-slate-900';
            }

            return (
              <button
                key={opt}
                disabled={isDeleted}
                onClick={() => handleOptionClick(opt)}
                className={`w-8 h-8 rounded border font-mono text-xs font-bold transition-all flex items-center justify-center ${btnClass}`}
              >
                {opt}
              </button>
            );
          })}

          {isDeleted && (
            <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-400">
              * Deleted Item
            </span>
          )}
        </div>

        {/* Reveal / Hide Options Toggle */}
        <div className="flex items-center space-x-2 self-end sm:self-center">
          {activeSelectedOption && (
            <div className="text-xs font-semibold flex items-center space-x-1">
              {activeSelectedOption === question.key ? (
                <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Correct!
                </span>
              ) : (
                <span className="text-rose-600 dark:text-rose-400 flex items-center gap-1">
                  <X className="w-3.5 h-3.5" /> Incorrect
                </span>
              )}
            </div>
          )}

          <button
            type="button"
            onClick={() => setIsRevealed(!isRevealed)}
            className="inline-flex items-center space-x-1 px-3 py-1 text-xs font-medium rounded-lg text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
          >
            {isRevealed ? (
              <>
                <EyeOff className="w-3.5 h-3.5" />
                <span>Hide Key & Explanations</span>
              </>
            ) : (
              <>
                <Eye className="w-3.5 h-3.5" />
                <span>Reveal Key & Explanations</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* 2x2 Geometric Option Explanations (A, B, C, D) - Hidden by default */}
      {isRevealed ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 flex-1 pt-1">
          {options.map(({ label, exp }) => {
            const isCorrectOption = question.key === label;
            const isSelectedByUser = activeSelectedOption === label;

            if (isCorrectOption) {
              return (
                <div 
                  key={label}
                  className="bg-emerald-50 dark:bg-emerald-950/30 p-4 sm:p-5 rounded-xl border border-emerald-200 dark:border-emerald-800 flex flex-col ring-2 ring-emerald-500/10 dark:ring-emerald-400/20 justify-between space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-base font-bold text-emerald-700 dark:text-emerald-400 font-mono">
                      Option {label}
                    </span>
                    <span className="text-[10px] font-bold text-white bg-emerald-500 px-2 py-0.5 rounded uppercase tracking-wider">
                      Correct Key
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-emerald-900 dark:text-emerald-100 font-medium leading-relaxed">
                    {formatChemicalText(exp)}
                  </p>
                </div>
              );
            }

            return (
              <div 
                key={label}
                className={`p-4 sm:p-5 rounded-xl border flex flex-col justify-between space-y-2 transition-all ${
                  isSelectedByUser
                    ? 'bg-rose-50 dark:bg-rose-950/30 border-rose-300 dark:border-rose-800'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="text-base font-bold text-slate-400 dark:text-slate-500 font-mono">
                    Option {label}
                  </span>
                  <span className="text-[10px] font-bold text-rose-500 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 px-2 py-0.5 rounded border border-rose-100 dark:border-rose-900 uppercase tracking-wider">
                    Incorrect
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {formatChemicalText(exp)}
                </p>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="py-3 px-4 text-center bg-slate-50/70 dark:bg-slate-850/50 rounded-xl border border-dashed border-slate-200 dark:border-slate-800">
          <button
            type="button"
            onClick={() => setIsRevealed(true)}
            className="inline-flex items-center space-x-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Show Official Key Answer & Option Explanations (A–D)</span>
          </button>
        </div>
      )}
    </div>
  );
};

