import { ExamQuestion, ExamYear } from '../types';
import { data2012, data2013, data2014, data2015 } from './years/y2012_2015';
import { data2016, data2017, data2018, data2019 } from './years/y2016_2019';
import { data2020, data2021, data2022 } from './years/y2020_2022';
import { data2023, data2024, data2025 } from './years/y2023_2025';

export const RAW_EXAM_DATA: Record<ExamYear, ExamQuestion[]> = {
  "2012": data2012,
  "2013": data2013,
  "2014": data2014,
  "2015": data2015,
  "2016": data2016,
  "2017": data2017,
  "2018": data2018,
  "2019": data2019,
  "2020": data2020,
  "2021": data2021,
  "2022": data2022,
  "2023": data2023,
  "2024": data2024,
  "2025": data2025
};

// Map each question to a primary syllabus topic for categorization
export function getTopicForQuestion(focus: string): string {
  const f = focus.toLowerCase();
  if (f.includes('isotope') || f.includes('neutron') || f.includes('proton') || f.includes('electron') || f.includes('vsepr') || f.includes('geometry') || f.includes('polar') || f.includes('giant') || f.includes('intermolecular') || f.includes('hydrogen bond') || f.includes('octet') || f.includes('structure of') || f.includes('allotrope') || f.includes('lattice')) {
    return 'Microscopic World & Structure';
  }
  if (f.includes('metal') || f.includes('extraction') || f.includes('corrosion') || f.includes('rust') || f.includes('galvanic') || f.includes('sacrificial') || f.includes('reactivity series') || f.includes('displacement') || f.includes('anodiz')) {
    return 'Metals & Reactivity';
  }
  if (f.includes('acid') || f.includes('base') || f.includes('ph') || f.includes('titration') || f.includes('neutralization') || f.includes('salt') || f.includes('precipitation') || f.includes('alkali') || f.includes('limewater') || f.includes('calcium') || f.includes('flame test') || f.includes('qualitative analysis')) {
    return 'Acids, Bases & Salts';
  }
  if (f.includes('redox') || f.includes('oxidation number') || f.includes('electrolysis') || f.includes('fuel cell') || f.includes('reducing') || f.includes('oxidizing') || f.includes('permanganate') || f.includes('dichromate') || f.includes('disproportionation') || f.includes('electrochemical cell')) {
    return 'Redox & Electrochemistry';
  }
  if (f.includes('enthalpy') || f.includes('hess') || f.includes('combustion') || f.includes('formation') || f.includes('energetics') || f.includes('calorimetry') || f.includes('exothermic') || f.includes('endothermic') || f.includes('bond energy')) {
    return 'Chemical Energetics';
  }
  if (f.includes('rate') || f.includes('kinetic') || f.includes('maxwell') || f.includes('catalyst') || f.includes('activation energy') || f.includes('collision')) {
    return 'Chemical Kinetics';
  }
  if (f.includes('equilibrium') || f.includes('le chatelier') || f.includes('kc') || f.includes('reversible') || f.includes('quotient')) {
    return 'Chemical Equilibrium';
  }
  if (f.includes('iupac') || f.includes('alkane') || f.includes('alkene') || f.includes('alcohol') || f.includes('carboxylic') || f.includes('ester') || f.includes('polymer') || f.includes('cracking') || f.includes('chiral') || f.includes('isomer') || f.includes('aspirin') || f.includes('detergent') || f.includes('amide') || f.includes('carbonyl') || f.includes('petroleum') || f.includes('haloalkane') || f.includes('hydrocarbon') || f.includes('addition reaction') || f.includes('markovnikov') || f.includes('stereoisomerism') || f.includes('nucleophilic')) {
    return 'Fossil Fuels & Carbon Chemistry';
  }
  if (f.includes('period') || f.includes('group') || f.includes('periodic') || f.includes('transition metal') || f.includes('halogen') || f.includes('noble gas')) {
    return 'Periodic Table & Trends';
  }
  if (f.includes('pollut') || f.includes('environment') || f.includes('acid rain') || f.includes('greenhouse') || f.includes('gas') || f.includes('precipitator') || f.includes('hazard')) {
    return 'Environmental & Practical Chemistry';
  }
  return 'General Chemistry';
}

// Enhance exam data with calculated topics
export const EXAM_DATA: Record<ExamYear, ExamQuestion[]> = Object.entries(RAW_EXAM_DATA).reduce(
  (acc, [year, questions]) => {
    acc[year as ExamYear] = questions.map((q) => ({
      ...q,
      topic: getTopicForQuestion(q.focus),
    }));
    return acc;
  },
  {} as Record<ExamYear, ExamQuestion[]>
);

export const ALL_YEARS: ExamYear[] = [
  '2012', '2013', '2014', '2015', '2016', 
  '2017', '2018', '2019', '2020', '2021', 
  '2022', '2023', '2024', '2025'
];

export const SYLLABUS_TOPICS = [
  'All Topics',
  'Microscopic World & Structure',
  'Metals & Reactivity',
  'Acids, Bases & Salts',
  'Redox & Electrochemistry',
  'Chemical Energetics',
  'Chemical Kinetics',
  'Chemical Equilibrium',
  'Fossil Fuels & Carbon Chemistry',
  'Periodic Table & Trends',
  'Environmental & Practical Chemistry'
];
