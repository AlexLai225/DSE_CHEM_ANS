export interface ExamQuestion {
  q_no: number;
  key: 'A' | 'B' | 'C' | 'D' | '*';
  rate: string; // e.g. "74%" or "Deleted"
  focus: string;
  exp_a: string;
  exp_b: string;
  exp_c: string;
  exp_d: string;
  topic?: string;
}

export type ExamYear = 
  | '2012' | '2013' | '2014' | '2015' | '2016' 
  | '2017' | '2018' | '2019' | '2020' | '2021' 
  | '2022' | '2023' | '2024' | '2025';

export type DifficultyLevel = 'all' | 'challenging' | 'moderate' | 'high' | 'deleted';

export interface FilterOptions {
  search: string;
  difficulty: DifficultyLevel;
  selectedQNo: number | null;
}

export interface BookmarkItem {
  year: ExamYear;
  q_no: number;
  note?: string;
  dateAdded: number;
}

