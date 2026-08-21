import React from 'react';
import { DifficultyLevel } from '../types';

/**
 * Parses chemical text and returns formatted JSX with subscripts and superscripts.
 */
export function formatChemicalText(text: string): React.ReactNode {
  if (!text) return text;

  // Split by words/tokens while preserving standard text
  // Matches common chemical formulas with subscripts, charges, delta H, degrees, etc.
  return text.split(/(Delta H[_\w]*|°C|mol\^-?\d+|dm\^-?\d+|kJ mol\^-?\d+|[A-Z][a-z]?\d*(?:\^[0-9+-]+|\^[+-]|\^[-+]|\d+[+-]|[+-])?)/g).map((part, idx) => {
    if (!part) return null;

    if (part.startsWith('Delta H')) {
      return (
        <span key={idx} className="font-mono font-medium text-indigo-700 dark:text-indigo-300">
          Δ<i>H</i>
          {part.includes('_f') && <sub>f</sub>}
          {part.includes('_c') && <sub>c</sub>}
          {part.includes('_rxn') && <sub>rxn</sub>}
          {part.includes('1') && <sub>1</sub>}
          {part.includes('2') && <sub>2</sub>}
          {part.includes('3') && <sub>3</sub>}
          {part.includes('°') && <sup>⦵</sup>}
        </span>
      );
    }

    if (part.includes('mol^-') || part.includes('dm^-')) {
      return (
        <span key={idx} className="font-mono">
          {part.split('^').map((subpart, subIdx) => 
            subIdx === 0 ? subpart : <sup key={subIdx}>{subpart}</sup>
          )}
        </span>
      );
    }

    // Format simple chemical formula patterns like H2SO4, Ca2+, SO4^2-, Fe3+
    const formulaMatch = part.match(/^([A-Z][a-z]?)(\d+)?(?:\^([0-9+-]+)|(\d+[+-]|[+-]))?$/);
    if (formulaMatch && (formulaMatch[2] || formulaMatch[3] || formulaMatch[4])) {
      const elem = formulaMatch[1];
      const sub = formulaMatch[2];
      const sup = formulaMatch[3] || formulaMatch[4];
      return (
        <span key={idx} className="font-mono font-medium text-slate-800 dark:text-slate-200">
          {elem}
          {sub && <sub className="text-xs">{sub}</sub>}
          {sup && <sup className="text-xs font-bold">{sup}</sup>}
        </span>
      );
    }

    return part;
  });
}

/**
 * Returns numeric percentage from "74%" or -1 for Deleted items.
 */
export function parseFacilityRate(rate: string): number {
  if (!rate || rate.toLowerCase().includes('deleted')) return -1;
  const num = parseInt(rate.replace('%', '').trim(), 10);
  return isNaN(num) ? -1 : num;
}

/**
 * Returns difficulty classification.
 */
export function getDifficultyLevel(rate: string): DifficultyLevel {
  const num = parseFacilityRate(rate);
  if (num === -1) return 'deleted';
  if (num < 40) return 'challenging';
  if (num <= 70) return 'moderate';
  return 'high';
}

/**
 * Returns color classes for the facility index / difficulty pill.
 */
export function getDifficultyBadgeStyle(rate: string) {
  const diff = getDifficultyLevel(rate);
  switch (diff) {
    case 'challenging':
      return {
        bg: 'bg-rose-50 border-rose-200 text-rose-700 dark:bg-rose-950/40 dark:border-rose-800 dark:text-rose-300',
        dot: 'bg-rose-500',
        label: 'Challenging (< 40%)',
        shortLabel: 'Challenging'
      };
    case 'moderate':
      return {
        bg: 'bg-amber-50 border-amber-200 text-amber-700 dark:bg-amber-950/40 dark:border-amber-800 dark:text-amber-300',
        dot: 'bg-amber-500',
        label: 'Moderate (40–70%)',
        shortLabel: 'Moderate'
      };
    case 'high':
      return {
        bg: 'bg-emerald-50 border-emerald-200 text-emerald-700 dark:bg-emerald-950/40 dark:border-emerald-800 dark:text-emerald-300',
        dot: 'bg-emerald-500',
        label: 'High Facility (> 70%)',
        shortLabel: 'High Facility'
      };
    case 'deleted':
      return {
        bg: 'bg-slate-100 border-slate-300 text-slate-600 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400',
        dot: 'bg-slate-400',
        label: 'Deleted Item',
        shortLabel: 'Deleted'
      };
    default:
      return {
        bg: 'bg-slate-50 border-slate-200 text-slate-700',
        dot: 'bg-slate-500',
        label: rate,
        shortLabel: rate
      };
  }
}
