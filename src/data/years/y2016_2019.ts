import { ExamQuestion } from '../../types';

export const data2016: ExamQuestion[] = [
  {
    q_no: 1,
    key: "A",
    rate: "81%",
    focus: "Flame Test Characteristics of Group II Minerals",
    exp_a: "Correct. Chalk consists primarily of calcium carbonate (CaCO3). Calcium compounds produce a characteristic brick-red flame in flame tests.",
    exp_b: "Incorrect. Quartz is silicon dioxide (SiO2) and produces no characteristic flame colour.",
    exp_c: "Incorrect. Graphite is elemental carbon and produces no flame colour.",
    exp_d: "Incorrect. Rock salt is sodium chloride (NaCl) and gives a persistent golden-yellow flame."
  },
  {
    q_no: 2,
    key: "C",
    rate: "88%",
    focus: "Electron Diagram of Ionic Compounds (Lithium Sulphide)",
    exp_a: "Incorrect. Shows covalent electron sharing between Li and S atoms.",
    exp_b: "Incorrect. Shows incorrect 1:1 stoichiometry.",
    exp_c: "Correct. Lithium sulphide is an ionic compound formed by two Li+ cations (duplet configuration [2]+) and one S^2- anion (octet configuration [2,8,8]^2-), represented as [Li]+ [ :S: ]^2- [Li]+.",
    exp_d: "Incorrect. Shows incorrect ionic charges and electron numbers."
  },
  {
    q_no: 3,
    key: "D",
    rate: "59%",
    focus: "Periodic Table Deductions: Group I Alkali Metals",
    exp_a: "Incorrect. Silver is a transition metal with 5 occupied electron shells, but it does not react vigorously with water.",
    exp_b: "Incorrect. Caesium has 6 occupied electron shells (Period 6).",
    exp_c: "Incorrect. Strontium is in Group II and forms SrO, not Y2O.",
    exp_d: "Correct. Metal Y forms Y2O and reacts vigorously with water (Group I alkali metal). Having 5 occupied electron shells places Y in Period 5, which is Rubidium (Rb, atomic number 37)."
  },
  {
    q_no: 4,
    key: "C",
    rate: "75%",
    focus: "Reaction of Metals with Steam",
    exp_a: "Incorrect. Iron reacts with steam: 3Fe(s) + 4H2O(g) -> Fe3O4(s) + 4H2(g).",
    exp_b: "Incorrect. Zinc reacts with steam: Zn(s) + H2O(g) -> ZnO(s) + H2(g).",
    exp_c: "Correct. Copper is below hydrogen in the reactivity series and does NOT react with steam to liberate hydrogen gas.",
    exp_d: "Incorrect. Magnesium reacts with steam: Mg(s) + H2O(g) -> MgO(s) + H2(g)."
  },
  {
    q_no: 5,
    key: "B",
    rate: "86%",
    focus: "Corrosion Prevention: Tin Plating vs Sacrificial Protection",
    exp_a: "Incorrect. Tin is less reactive than iron and cannot provide sacrificial protection.",
    exp_b: "Correct. Tin plating acts as an unreactive, non-toxic physical barrier that completely isolates iron from contact with air (oxygen) and water.",
    exp_c: "Incorrect. Tin is lower than iron in the reactivity series.",
    exp_d: "Incorrect. Tin plating is a surface electroplated layer, not an alloy."
  },
  {
    q_no: 6,
    key: "B",
    rate: "59%",
    focus: "pH Calculation upon Two-Fold Dilution of Acid",
    exp_a: "Incorrect. 5.8 is double the original pH.",
    exp_b: "Correct. Diluting 100 cm^3 of acid with 100 cm^3 of water halves the concentration: [H+]_new = [H+]_initial / 2. pH_new = -log([H+]_initial / 2) = pH_initial + log 2 = 2.60 + 0.30 = 2.90.",
    exp_c: "Incorrect. pH increases upon dilution of acid.",
    exp_d: "Incorrect. 1.30 corresponds to doubling the acid concentration."
  },
  {
    q_no: 7,
    key: "A",
    rate: "58%",
    focus: "Role of Water in Acid Ionization & Hydrogen Evolution",
    exp_a: "Correct. Solid oxalic acid and zinc powder do not react in the dry state. Water acts as a polar ionizing solvent, allowing oxalic acid to ionize and release H+(aq) ions: H2C2O4(s) + aq <=> 2H+(aq) + C2O4^2-(aq), which then react with zinc to produce H2(g).",
    exp_b: "Incorrect. Zinc metal does not ionize spontaneously in pure water without H+ ions.",
    exp_c: "Incorrect. Water does not react directly with oxalic acid to produce gas.",
    exp_d: "Incorrect. Zinc does not react with cold water to give hydrogen."
  },
  {
    q_no: 8,
    key: "A",
    rate: "66%",
    focus: "Preparation of Soluble Salts: Copper(II) Sulphate",
    exp_a: "Correct. Adding insoluble copper(II) oxide powder to warm dilute sulphuric acid until in excess neutralizes the acid: CuO(s) + H2SO4(aq) -> CuSO4(aq) + H2O(l). Excess CuO is filtered off and the filtrate crystallized.",
    exp_b: "Incorrect. CuO does not react with neutral MgSO4 solution.",
    exp_c: "Incorrect. Copper does not react with non-oxidizing dilute H2SO4.",
    exp_d: "Incorrect. Copper cannot displace magnesium from MgSO4."
  },
  {
    q_no: 9,
    key: "C",
    rate: "77%",
    focus: "Combustion Stoichiometry & Hydrocarbon Formula Deduction",
    exp_a: "Incorrect. C6H6 + 7.5 O2 -> 6CO2 + 3H2O (requires 7.5 mol O2).",
    exp_b: "Incorrect. C6H10 + 8.5 O2 -> 6CO2 + 5H2O (requires 8.5 mol O2).",
    exp_c: "Correct. General combustion: CxHy + (x + y/4) O2 -> x CO2 + (y/2) H2O. For 1 mol hydrocarbon requiring 9 mol O2: x + y/4 = 9. For a 6-carbon hydrocarbon (x = 6): 6 + y/4 = 9 => y/4 = 3 => y = 12. Formula is C6H12.",
    exp_d: "Incorrect. C6H14 + 9.5 O2 -> 6CO2 + 7H2O (requires 9.5 mol O2)."
  },
  {
    q_no: 10,
    key: "B",
    rate: "63%",
    focus: "Pollutants Treated by Automobile Catalytic Converters",
    exp_a: "Incorrect. Nitrogen oxides (NO, NO2) are reduced to N2 over catalytic converters.",
    exp_b: "Correct. Catalytic converters contain Pt/Rh/Pd catalysts designed to convert CO, NOx, and unburnt hydrocarbons into CO2, N2, and H2O. Sulphur dioxide (SO2) CANNOT be removed by catalytic converters (and sulfur poisons noble metal catalysts).",
    exp_c: "Incorrect. CO is oxidized to CO2 in catalytic converters.",
    exp_d: "Incorrect. Unburnt hydrocarbons are oxidized to CO2 and H2O."
  },
  {
    q_no: 11,
    key: "A",
    rate: "84%",
    focus: "Determination of Oxidation Number of Nitrogen",
    exp_a: "Correct. In NF3, fluorine is more electronegative than nitrogen (F = -1): x + 3(-1) = 0 => x = +3 (highest oxidation state among the given compounds).",
    exp_b: "Incorrect. In N2H4 (hydrazine), hydrogen is +1: 2x + 4(+1) = 0 => x = -2.",
    exp_c: "Incorrect. In NaNH2 (sodium amide), Na is +1 and H is +1: +1 + x + 2(+1) = 0 => x = -3.",
    exp_d: "Incorrect. In HONH2 (hydroxylamine), H is +1 and O is -2: -1 + x + 2(+1) = 0 => x = -1."
  },
  {
    q_no: 12,
    key: "B",
    rate: "50%",
    focus: "Electroplating Circuit & Bipolar Electrodes",
    exp_a: "Incorrect. Rod I is the primary anode (oxidation).",
    exp_b: "Correct. In a series electrolytic cell, the cathode of each cell undergoes reduction of metal cations. Rod II is connected as a cathode where metal deposition (electroplating) occurs.",
    exp_c: "Incorrect. The anode face undergoes dissolution/oxidation.",
    exp_d: "Incorrect. Connected to positive polarity."
  },
  {
    "q_no": 13,
    "key": "C",
    "rate": "51%",
    "focus": "Chemical Reactions of Acidic and Oxidizing Gases",
    "exp_a": "Incorrect. Cl2(g) oxidizes colourless I-(aq) to brown I2(aq) (visible change).",
    "exp_b": "Incorrect. O2(g) oxidizes pale green Fe2+(aq) to yellow-brown Fe3+(aq) (visible change).",
    "exp_c": "Correct. CO2(g) is in its maximum oxidation state (+4) and cannot be oxidized by acidified KMnO4(aq), so no reaction occurs and the purple colour remains unchanged.",
    "exp_d": "Incorrect. SO2(g) reduces orange Na2Cr2O7(aq) to green Cr^3+(aq) (visible change)."
  },
  {
    "q_no": 14,
    "key": "D",
    "rate": "75%",
    "focus": "Identifying Non-Redox Decomposition Reactions",
    "exp_a": "Incorrect. Decomposition of AgBr involves reduction of Ag+ (to Ag) and oxidation of Br- (to Br2).",
    "exp_b": "Incorrect. Reaction of SO2 (+4) with H2S (-2) to give S (0) is a redox comproportionation.",
    "exp_c": "Incorrect. Decomposition of KClO3 involves reduction of Cl (+5 to -1) and oxidation of O (-2 to 0).",
    "exp_d": "Correct. Thermal decomposition of calcium hydrogencarbonate: Ca(HCO3)2(aq) -> CaCO3(s) + H2O(l) + CO2(g). Oxidation states of all elements remain unchanged (Ca: +2, H: +1, C: +4, O: -2), so it is NOT a redox reaction."
  },
  {
    "q_no": 15,
    "key": "B",
    "rate": "36%",
    "focus": "Recharging Reactions in Secondary (Ni-Cd) Cells",
    "exp_a": "Incorrect. Represents the discharging reaction at the anode.",
    "exp_b": "Correct. During discharge, Cd(s) is oxidized to Cd(OH)2(s) at the negative electrode. During recharging, the process is reversed by an external D.C. power source, reducing Cd(OH)2(s) back to Cd(s): Cd(OH)2(s) + 2e- -> Cd(s) + 2OH-(aq).",
    "exp_c": "Incorrect. Represents charging at the positive electrode.",
    "exp_d": "Incorrect. Represents discharging at the positive electrode."
  },
  {
    "q_no": 16,
    "key": "A",
    "rate": "68%",
    "focus": "Intermolecular Forces & Hydrogen Bonding Anomalies",
    "exp_a": "Correct. Hydrogen fluoride (HF) has abnormally strong intermolecular hydrogen bonds due to the high electronegativity and small size of fluorine, giving HF a significantly higher boiling point (+19.5 deg C) than HCl, PH3, and H2Se.",
    "exp_b": "Incorrect. HCl has only weak dipole-dipole attractions and van der Waals forces (b.p. -85 deg C).",
    "exp_c": "Incorrect. PH3 has very weak dipole-dipole forces (b.p. -88 deg C).",
    "exp_d": "Incorrect. H2Se has van der Waals forces but lacks hydrogen bonding (b.p. -41 deg C)."
  },
  {
    "q_no": 17,
    "key": "C",
    "rate": "73%",
    "focus": "Origin, Composition & Separation of Petroleum",
    "exp_a": "Incorrect. Statement (3) is also correct.",
    "exp_b": "Incorrect. Statement (2) is false (fractional distillation is used, not a separating funnel).",
    "exp_c": "Correct. Statement (1) is true: petroleum is the primary raw source of alkanes and aliphatic hydrocarbons. Statement (3) is true: petroleum formed from ancient marine microscopic organisms buried under high pressure and heat. Statement (2) is false: miscible hydrocarbon fractions cannot be separated by a separating funnel.",
    "exp_d": "Incorrect. Statement (2) is false."
  },
  {
    "q_no": 18,
    "key": "A",
    "rate": "85%",
    "focus": "Properties of Vinegar (Ethanoic Acid)",
    "exp_a": "Correct. Statement (1) is true: ethanoic acid is a weak acid that partially and reversibly ionizes in water: CH3COOH(aq) <=> CH3COO-(aq) + H+(aq). Statement (2) is false: sugar is a neutral covalent carbohydrate (not a base) and does not neutralize acid. Statement (3) is false: vinegar (approx. 5% ethanoic acid) has a pH around 2.4 to 3.0, not 1.",
    "exp_b": "Incorrect. Statement (2) is false.",
    "exp_c": "Incorrect. Statement (3) is false.",
    "exp_d": "Incorrect. Statements (2) and (3) are both false."
  },
  {
    "q_no": 19,
    "key": "C",
    "rate": "27%",
    "focus": "Hazard Warning Labels for Corrosive & Toxic Substances",
    "exp_a": "Incorrect. Sodium is flammable and water-reactive, not corrosive/toxic.",
    "exp_b": "Incorrect. Trichloromethane is harmful/toxic, not corrosive.",
    "exp_c": "Correct. Concentrated aqueous ammonia (chemical 3) gives off toxic, choking NH3 fumes and is corrosive to skin and respiratory tract, matching both Corrosive and Toxic hazard labels.",
    "exp_d": "Incorrect. (1) is wrong."
  },
  {
    "q_no": 20,
    "key": "D",
    "rate": "38%",
    "focus": "Atomic Structure & Ion Formation of Lead (Group IV)",
    "exp_a": "Incorrect. Statement (3) is also true.",
    "exp_b": "Incorrect. (3) is true.",
    "exp_c": "Incorrect. (1) is true.",
    "exp_d": "Correct. (1) Pb2+ gaining 2 electrons to form Pb is reduction (true). (2) Ionization involves only valence electrons, so proton number remains 82 (true). (3) Pb (2,8,18,32,18,4) and Pb2+ (2,8,18,32,18,2) both have electrons in 6 occupied electron shells (true). All three are correct."
  },
  {
    "q_no": 21,
    "key": "C",
    "rate": "72%",
    "focus": "Molecular Shapes: VSEPR Theory (Trigonal Pyramidal)",
    "exp_a": "Incorrect. BCl3 has 3 bond pairs and 0 lone pairs (trigonal planar).",
    "exp_b": "Incorrect. BCl3 is planar whereas NH3 is pyramidal.",
    "exp_c": "Correct. Both NH3 and PF3 have 3 single bond pairs and 1 lone pair on the central Group V atom (N and P), resulting in a trigonal pyramidal molecular geometry.",
    "exp_d": "Incorrect. BCl3 is planar."
  },
  {
    "q_no": 22,
    "key": "D",
    "rate": "49%",
    "focus": "Reversible Reactions & Dynamic Equilibrium",
    "exp_a": "Incorrect. Omits valid points.",
    "exp_b": "Incorrect. (2) is true.",
    "exp_c": "Incorrect. (1) is true.",
    "exp_d": "Correct. Statements (1), (2), and (3) are all correct descriptions of closed reversible reaction systems at dynamic equilibrium."
  },
  {
    "q_no": 23,
    "key": "C",
    "rate": "77%",
    "focus": "Reactivity of Calcium vs Magnesium with Water",
    "exp_a": "Incorrect. 1st statement is false: calcium reacts rapidly with cold water.",
    "exp_b": "Incorrect. 1st statement is false.",
    "exp_c": "Correct. 1st statement is FALSE: calcium reacts vigorously with cold water to produce cloudy Ca(OH)2(aq) and H2(g), whereas magnesium reacts very slowly with cold water. 2nd statement is TRUE: calcium is lower than magnesium in Group II and loses electrons more readily (higher reactivity).",
    "exp_d": "Incorrect. Statement 2 is true."
  },
  {
    "q_no": 24,
    "key": "D",
    "rate": "58%",
    "focus": "Properties of Carbon Dioxide vs Carbon Monoxide",
    "exp_a": "Incorrect. Both statements are false.",
    "exp_b": "Incorrect. Both statements are false.",
    "exp_c": "Incorrect. Both statements are false.",
    "exp_d": "Correct. 1st statement is FALSE: carbon dioxide is non-poisonous (it is an asphyxiant at extreme concentrations, but not a chemical poison like CO). 2nd statement is FALSE: CO2 does not bind irreversibly to haemoglobin; carbon monoxide (CO) binds strongly to haemoglobin to form carboxyhaemoglobin."
  },
  {
    "q_no": 25,
    "key": "C",
    "rate": "77%",
    "focus": "Rate of Hydrolysis of Sucrose from Initial Rate Data",
    "exp_a": "Incorrect. Calculation error in rate orders.",
    "exp_b": "Incorrect. Order with respect to sucrose is 1.",
    "exp_c": "Correct. Rate = k[C12H22O11][HCl]. Comparing Trial 1 and 2 shows rate doubles when [sucrose] doubles (order = 1); comparing Trial 1 and 3 shows rate triples when [HCl] triples (order = 1). Rate constant k = 6.0 x 10^-3 / (0.010 * 0.10) = 6.0 x 10^-3 dm^3 mol^-1 s^-1.",
    "exp_d": "Incorrect. Unit error."
  },
  {
    "q_no": 26,
    "key": "B",
    "rate": "60%",
    "focus": "Equilibrium Constant Expression & Units",
    "exp_a": "Incorrect. Inverted expression.",
    "exp_b": "Correct. For aA + bB <=> cC + dD, Kc = [C]^c [D]^d / ([A]^a [B]^b).",
    "exp_c": "Incorrect. Omitted exponent.",
    "exp_d": "Incorrect. Unit mismatch."
  },
  {
    "q_no": 27,
    "key": "D",
    "rate": "67%",
    "focus": "Addition Polymerization of Substituted Alkenes",
    "exp_a": "Incorrect. Propene monomer gives polypropene.",
    "exp_b": "Incorrect. Monomer is 2-methylpropene.",
    "exp_c": "Incorrect. Monomer is but-2-ene.",
    "exp_d": "Correct. The polymer structure corresponds to polymerized phenylethene (styrene), forming poly(phenylethene) / polystyrene."
  },
  {
    "q_no": 28,
    "key": "C",
    "rate": "58%",
    "focus": "Chirality & Enantiomerism in Substituted Alkanes",
    "exp_a": "Incorrect. Contains no chiral centre.",
    "exp_b": "Incorrect. Symmetrical molecule.",
    "exp_c": "Correct. 2-chlorobutane (CH3-CH(Cl)-CH2CH3) contains a chiral carbon atom bonded to four different groups (-H, -Cl, -CH3, -CH2CH3), so it exhibits optical isomerism (enantiomerism).",
    "exp_d": "Incorrect. 1-chlorobutane has no asymmetric carbon."
  },
  {
    "q_no": 29,
    "key": "C",
    "rate": "26%",
    "focus": "Reactions of Alcohols with Oxidizing Agents & Acid Chlorides",
    "exp_a": "Incorrect. Primary alcohols oxidize to carboxylic acids.",
    "exp_b": "Incorrect. (2) is false.",
    "exp_c": "Correct. Statements (1) and (3) are chemically accurate: secondary alcohols oxidize to ketones and react with PCl5 to form chloroalkanes with vigorous steamy fumes of HCl.",
    "exp_d": "Incorrect. (2) is false."
  },
  {
    "q_no": 30,
    "key": "D",
    "rate": "68%",
    "focus": "Acid-Base Behavior of Oxides Across Period 3",
    "exp_a": "Incorrect. Na2O forms alkaline solution.",
    "exp_b": "Incorrect. MgO is basic.",
    "exp_c": "Incorrect. Al2O3 is amphoteric and insoluble in water.",
    "exp_d": "Correct. Dichlorine heptoxide (Cl2O7) is a strongly acidic non-metal oxide that reacts vigorously with water to form perchloric acid (HClO4(aq)), giving a solution with the lowest pH."
  },
  {
    "q_no": 31,
    "key": "A",
    "rate": "34%",
    "focus": "Kinetics & Energy Distribution Curves",
    "exp_a": "Correct. Increasing temperature shifts the Maxwell-Boltzmann distribution curve to the right and flattens the peak, significantly increasing the fraction of molecules with kinetic energy >= activation energy (Ea).",
    "exp_b": "Incorrect. Area under the curve remains constant (equals total number of molecules).",
    "exp_c": "Incorrect. Activation energy is independent of temperature.",
    "exp_d": "Incorrect. Collision frequency increases slightly, but the main factor is energy distribution."
  },
  {
    "q_no": 32,
    "key": "B",
    "rate": "66%",
    "focus": "Saponification & Detergent Action",
    "exp_a": "Incorrect. Soap molecules have hydrophobic tails and hydrophilic heads.",
    "exp_b": "Correct. Hydrolysis of fats and oils (triglycerides) with concentrated NaOH(aq) produces soap (sodium carboxylates) and propane-1,2,3-triol (glycerol).",
    "exp_c": "Incorrect. Soaps form scum in hard water (Ca2+/Mg2+).",
    "exp_d": "Incorrect. Synthetic detergents are derived from petroleum."
  },
  {
    "q_no": 33,
    "key": "D",
    "rate": "72%",
    "focus": "Chemical Tests for Aldehydes, Ketones & Alcohols",
    "exp_a": "Incorrect. Incomplete answer.",
    "exp_b": "Incorrect. (1) is true.",
    "exp_c": "Incorrect. (2) is true.",
    "exp_d": "Correct. All three statements (1), (2), and (3) are correct methods to distinguish functional groups using Tollens' reagent, 2,4-DNPH, and acidified dichromate."
  },
  {
    "q_no": 34,
    "key": "B",
    "rate": "77%",
    "focus": "Condensation Polymers: Kevlar & Nylon Structure",
    "exp_a": "Incorrect. Kevlar contains benzene rings in the main chain, giving extreme rigidity.",
    "exp_b": "Correct. Both Nylon-6,6 and Kevlar are polyamides containing repeating amide linkages (-CO-NH-). Kevlar has aromatic rings in the polymer backbone, making it much stronger and stiffer than aliphatic Nylon.",
    "exp_c": "Incorrect. Kevlar is a polyamide, not polyester.",
    "exp_d": "Incorrect. Both undergo condensation polymerization."
  },
  {
    "q_no": 35,
    "key": "A",
    "rate": "64%",
    "focus": "Thermodynamics vs Kinetics: Catalyst Effect on Equilibrium",
    "exp_a": "Correct. 1st statement is TRUE: a catalyst does not alter the position of equilibrium or yield of products. 2nd statement is TRUE: a catalyst speeds up both forward and backward reaction rates equally by providing an alternative reaction pathway with lower activation energy, correctly explaining statement 1.",
    "exp_b": "Incorrect. Statement 2 is the correct scientific explanation of statement 1.",
    "exp_c": "Incorrect. Statement 1 is true.",
    "exp_d": "Incorrect. Both statements are true."
  },
  {
    "q_no": 36,
    "key": "A",
    "rate": "65%",
    "focus": "Addition Polymerization of Chloroethene (PVC)",
    "exp_a": "Correct. 1st statement is TRUE: poly(chloroethene) (PVC) is an addition polymer. 2nd statement is TRUE: its monomer chloroethene (vinyl chloride, CH2=CHCl) contains a reactive carbon-carbon double bond that opens up to form polymer chains, correctly explaining statement 1.",
    "exp_b": "Incorrect. Statement 2 is the correct direct explanation of statement 1.",
    "exp_c": "Incorrect. Statement 1 is true.",
    "exp_d": "Incorrect. Both statements are true."
  }
];

export const data2017: ExamQuestion[] = [
  {
    "q_no": 1,
    "key": "C",
    "rate": "58%",
    "focus": "Ionic Compound Formula & Isoelectronic Electronic Configurations",
    "exp_a": "Incorrect. In Li2O, Li+ has electronic configuration 2 (He core) while O^2- has 2,8 (Ne core), which are not isoelectronic.",
    "exp_b": "Incorrect. Aluminium oxide formula is Al2O3, not X2Y.",
    "exp_c": "Correct. Potassium sulphide has the formula K2S (X2Y). K+ ion (Z=19) has lost 1 electron to have electronic arrangement 2,8,8 (Ar core). S^2- ion (Z=16) has gained 2 electrons to have electronic arrangement 2,8,8 (Ar core). Both ions have the identical electronic arrangement.",
    "exp_d": "Incorrect. Magnesium chloride formula is MgCl2 (XY2)."
  },
  {
    "q_no": 2,
    "key": "D",
    "rate": "64%",
    "focus": "Properties of Aqueous Strong Acid (Hydrochloric Acid)",
    "exp_a": "Incorrect statement is false (fact is true). HCl is an inorganic mineral acid.",
    "exp_b": "Incorrect statement is false (fact is true). HCl is a strong acid that completely ionizes in aqueous solution.",
    "exp_c": "Incorrect statement is false (fact is true). HCl(aq) contains aqueous hydrogen / hydronium ions (H+(aq)).",
    "exp_d": "Correct (INCORRECT statement). Due to the auto-ionization of water (Kw = [H+][OH-]), all aqueous acid solutions contain a small but finite concentration of aqueous hydroxide ions (OH-(aq)). Thus, stating that it does not contain OH-(aq) is incorrect."
  },
  {
    "q_no": 3,
    "key": "A",
    "rate": "43%",
    "focus": "Empirical Formula Deduction from Combustion Products",
    "exp_a": "Correct. Moles of C = mass of CO2 / 44.0 = 17.6 / 44.0 = 0.40 mol. Moles of H = 2 * (mass of H2O / 18.0) = 2 * (3.6 / 18.0) = 0.40 mol. Mole ratio C : H = 0.40 : 0.40 = 1 : 1. Empirical formula is CH.",
    "exp_b": "Incorrect. CH2 would give a 1:2 mole ratio.",
    "exp_c": "Incorrect. C2H2 is a molecular formula, not an empirical formula (which must be simplest whole-number ratio).",
    "exp_d": "Incorrect. C2H5 gives mole ratio 1:2.5."
  },
  {
    "q_no": 4,
    "key": "B",
    "rate": "76%",
    "focus": "Galvanic Cells: Daniell Cell Principles & Electrode Changes",
    "exp_a": "Incorrect. Silver ions (Ag+) are cations and migrate towards the positive silver cathode where they are reduced.",
    "exp_b": "Correct. Magnesium is more reactive than silver and acts as the anode (negative electrode): Mg(s) -> Mg^2+(aq) + 2e-. Magnesium atoms lose electrons and dissolve as ions, causing the mass of the magnesium strip to decrease.",
    "exp_c": "Incorrect. Chemical energy is converted into electrical energy.",
    "exp_d": "Incorrect. Ag+ ions are discharged on the silver strip (Ag+ + e- -> Ag(s))."
  },
  {
    "q_no": 5,
    "key": "D",
    "rate": "63%",
    "focus": "IUPAC Nomenclature of Conjugated Dienes with Halogen Substituents",
    "exp_a": "Incorrect. Numbering must give the lowest locants to the principal functional groups (C=C double bonds).",
    "exp_b": "Incorrect. Missing 'di' prefix for chlorine atoms.",
    "exp_c": "Incorrect. Numbering from left gives double bonds at positions 2 and 4, whereas numbering from right gives double bonds at positions 1 and 3.",
    "exp_d": "Correct. The principal functional groups are the two C=C double bonds, which take precedence over chloro substituents. Numbering from the right gives penta-1,3-diene with the two chlorine atoms at C5, giving the systematic IUPAC name 5,5-dichloropenta-1,3-diene."
  },
  {
    "q_no": 6,
    "key": "C",
    "rate": "55%",
    "focus": "Preparation of Soluble Salts: Magnesium Sulphate",
    "exp_a": "Incorrect. Mg + H2SO4 -> MgSO4 + H2 is an appropriate preparation method.",
    "exp_b": "Incorrect. MgO + H2SO4 -> MgSO4 + H2O is an appropriate neutralization method.",
    "exp_c": "Correct (NOT appropriate). Mixing magnesium nitrate (Mg(NO3)2(aq)) with dilute sulphuric acid produces a mixture of Mg^2+, NO3^-, H+, and SO4^2- ions without any precipitate or gas evolution; no reaction occurs and pure MgSO4 cannot be isolated by crystallization.",
    "exp_d": "Incorrect. MgCO3 + H2SO4 -> MgSO4 + H2O + CO2 is an appropriate method."
  },
  {
    "q_no": 7,
    "key": "A",
    "rate": "45%",
    "focus": "Thermochemistry: Cooling Curve Extrapolation & Enthalpy Sign",
    "exp_a": "Correct. The temperature rises when the reaction starts, indicating that heat is released (exothermic reaction, Delta H is negative). Extrapolating the cooling line back to the time of mixing (3rd minute) gives a theoretical maximum temperature of 76 deg C from an initial 25 deg C, giving a greatest temperature rise of 51 deg C.",
    "exp_b": "Incorrect. 45 deg C is the uncorrected temperature rise without heat-loss extrapolation.",
    "exp_c": "Incorrect. Temperature rise corresponds to an exothermic reaction (Delta H negative, not positive).",
    "exp_d": "Incorrect. Wrong temperature and wrong sign."
  },
  {
    "q_no": 8,
    "key": "C",
    "rate": "52%",
    "focus": "Hydrogen-Oxygen Fuel Cell Operations & Gas Feeds",
    "exp_a": "Incorrect statement is false (fact is true). Fuel cells use platinum/porous nickel catalysts.",
    "exp_b": "Incorrect statement is false (fact is true). Water is the only chemical product formed during discharge.",
    "exp_c": "Correct (INCORRECT statement). In a fuel cell, oxygen gas acts as the oxidizing agent and is fed into the CATHODE (positive electrode) where it is reduced; hydrogen gas is passed into the anode where it is oxidized.",
    "exp_d": "Incorrect statement is false (fact is true). Hydrogen loses electrons and acts as the reducing agent."
  },
  {
    "q_no": 9,
    "key": "A",
    "rate": "72%",
    "focus": "Thermal Stability of Metal Oxides & Reduction Methods",
    "exp_a": "Correct (will NOT produce metal). Zinc oxide (ZnO) is thermally very stable and cannot be decomposed by heating alone with a Bunsen burner (requires chemical reduction with carbon/coke at high temperature).",
    "exp_b": "Incorrect. Heating CuO with carbon produces copper metal (2CuO + C -> 2Cu + CO2).",
    "exp_c": "Incorrect. Electrolysis of molten LiCl produces lithium metal at the cathode.",
    "exp_d": "Incorrect. Heating Fe2O3 with CO produces iron metal (Fe2O3 + 3CO -> 2Fe + 3CO2)."
  },
  {
    "q_no": 10,
    "key": "A",
    "rate": "57%",
    "focus": "Precipitation Stoichiometry & Limiting Reactant Calculation",
    "exp_a": "Correct. Reaction: 3CaCl2(aq) + 2Na3PO4(aq) -> Ca3(PO4)2(s) + 6NaCl(aq). Moles of CaCl2 = 0.100 * 0.30 = 0.030 mol. Moles of Na3PO4 = 0.300 * 0.10 = 0.030 mol. To react with 0.030 mol CaCl2 requires (2/3)*0.030 = 0.020 mol Na3PO4 (< 0.030 mol available), so CaCl2 is the limiting reactant. Theoretical moles of Ca3(PO4)2 = 0.030 / 3 = 0.010 mol.",
    "exp_b": "Incorrect. Calculation error from assuming 1:2 ratio.",
    "exp_c": "Incorrect. Assumes Na3PO4 is limiting.",
    "exp_d": "Incorrect. Assumes 1:1 stoichiometry."
  },
  {
    "q_no": 11,
    "key": "B",
    "rate": "64%",
    "focus": "Chemical Reactions & Reducing Action of Zinc",
    "exp_a": "Incorrect. Zinc forms a soluble complex ion [Zn(NH3)4]^2+ with excess NH3(aq), not a soluble oxide.",
    "exp_b": "Correct. Zinc reacts with dilute HCl: Zn(s) + 2HCl(aq) -> ZnCl2(aq) + H2(g). Zinc atoms lose electrons (Zn -> Zn^2+ + 2e-) and act as a reducing agent.",
    "exp_c": "Incorrect. Zinc is less reactive than magnesium and cannot reduce Mg^2+ ions.",
    "exp_d": "Incorrect. Zinc reacts only slowly with hot water/steam to form basic ZnO and H2, not an acidic solution."
  },
  {
    "q_no": 12,
    "key": "B",
    "rate": "69%",
    "focus": "Molecular Polarity & VSEPR Geometries",
    "exp_a": "Incorrect. CO2 is linear and symmetrical; bond dipoles cancel out (non-polar).",
    "exp_b": "Correct. PCl3 has a trigonal pyramidal shape with 3 polar P-Cl bonds and 1 lone pair on phosphorus. Because of the non-symmetrical shape, the bond dipoles do not cancel out, resulting in a permanent net molecular dipole moment (polar).",
    "exp_c": "Incorrect. SiF4 is a symmetrical regular tetrahedron; bond dipoles cancel out (non-polar).",
    "exp_d": "Incorrect. SF6 is a regular octahedron; bond dipoles cancel out (non-polar)."
  },
  {
    "q_no": 13,
    "key": "D",
    "rate": "55%",
    "focus": "Corrosion Rates: Electrochemical Couples & Electrolyte Presence",
    "exp_a": "Incorrect. Zinc provides sacrificial protection to iron.",
    "exp_b": "Incorrect. Pure water has lower conductivity than salt solution.",
    "exp_c": "Incorrect. No electrolyte salt present.",
    "exp_d": "Correct. Iron wrapped with copper in NaCl(aq) corrodes fastest: copper is less reactive than iron (accelerating iron oxidation via galvanic coupling) and NaCl(aq) acts as a strong electrolyte to facilitate ionic conduction."
  },
  {
    "q_no": 14,
    "key": "A",
    "rate": "97%",
    "focus": "Chemical Test for Oxygen Gas",
    "exp_a": "Correct. Oxygen gas supports combustion and relights a glowing wooden splint.",
    "exp_b": "Incorrect. Oxygen is a neutral gas and does not change the colour of moist pH paper.",
    "exp_c": "Incorrect. Oxygen does not turn pH paper blue.",
    "exp_d": "Incorrect. Hydrogen gas burns with a 'pop' sound, not oxygen."
  },
  {
    "q_no": 15,
    "key": "B",
    "rate": "83%",
    "focus": "Balancing Redox Reactions in Acidic Media",
    "exp_a": "Incorrect. Unbalanced for chlorine atoms.",
    "exp_b": "Correct. Balancing by oxidation states: 3 Ni(II) oxidize to 3 Ni(IV) (loss of 6 e-). 2 Au(III) reduce to 2 Au(0) (gain of 6 e-), so y = 2. Balancing H: 6 H2O requires x = 6 (from 6 OH- + 6 H+). Balancing Cl gives z = 2. Hence: x = 6, y = 2, z = 2.",
    "exp_c": "Incorrect. Coefficients do not balance electrons.",
    "exp_d": "Incorrect. Unbalanced charges."
  },
  {
    "q_no": 16,
    "key": "A",
    "rate": "66%",
    "focus": "Noble Gas Electronic Configuration (Helium Duplet)",
    "exp_a": "Correct. Statement (1) is true: Helium has a completely filled first shell and is chemically inert. Statement (2) is false: Helium exists as monoatomic gas atoms. Statement (3) is false: Helium has 2 valence electrons (duplet structure), NOT an octet.",
    "exp_b": "Incorrect. Statement (2) is false.",
    "exp_c": "Incorrect. Statement (3) is false.",
    "exp_d": "Incorrect. Statements (2) and (3) are both false."
  },
  {
    "q_no": 17,
    "key": "A",
    "rate": "59%",
    "focus": "Reactions of Sodium Hydroxide vs Aqueous Ammonia",
    "exp_a": "Correct. Statement (1) is true: both provide OH-(aq) to precipitate white Mg(OH)2(s) with MgCl2(aq). Statement (2) is false: only NH3(aq) forms deep blue [Cu(NH3)4]^2+ with Cu(OH)2; NaOH does not dissolve Cu(OH)2. Statement (3) is false: both neutralize CH3COOH.",
    "exp_b": "Incorrect. Statement (2) is false.",
    "exp_c": "Incorrect. Statement (3) is false.",
    "exp_d": "Incorrect. Statements (2) and (3) are false."
  },
  {
    "q_no": 18,
    "key": "B",
    "rate": "50%",
    "focus": "Combustion of Isomeric Alkenes & Functional Group Reactions",
    "exp_a": "Incorrect. Statement (1) is false if one is cyclic alkane and one is alkene.",
    "exp_b": "Correct. Statement (2) is true: an alkene decolorizes acidified KMnO4 while a cycloalkane does not. Statement (3) is true: since isomers A and B have the identical mass percentage of carbon, 1.0 g of each produces the exact same mass of CO2(g). Statement (1) is false because cyclic alkanes and alkenes belong to different homologous series.",
    "exp_c": "Incorrect. (1) is false.",
    "exp_d": "Incorrect. (2) and (3) are both true."
  },
  {
    "q_no": 19,
    "key": "D",
    "rate": "60%",
    "focus": "Properties & Testing of Anhydrous Copper(II) Sulphate",
    "exp_a": "Incorrect. Statements (2) and (3) are also true.",
    "exp_b": "Incorrect. (1) is true.",
    "exp_c": "Incorrect. (2) is true.",
    "exp_d": "Correct. All three statements (1), (2), and (3) are true: anhydrous CuSO4 is a white solid (1), hydrates in water to form blue [Cu(H2O)6]^2+ ions (2), and is used as a chemical test for the presence of water."
  },
  {
    "q_no": 20,
    "key": "D",
    "rate": "71%",
    "focus": "Addition Polymerization of Substituted Alkenes",
    "exp_a": "Incorrect. Omits valid monomer.",
    "exp_b": "Incorrect. (2) is valid.",
    "exp_c": "Incorrect. (1) is valid.",
    "exp_d": "Correct. All three compounds (1), (2), and (3) contain C=C double bonds and can undergo addition polymerization."
  },
  {
    "q_no": 21,
    "key": "C",
    "rate": "68%",
    "focus": "Redox Reactions: Bleaching & Displacement Reactions",
    "exp_a": "Incorrect. (1) is not redox.",
    "exp_b": "Incorrect. (1) is not redox.",
    "exp_c": "Correct. Statements (2) and (3) involve redox changes: SO2 bleaching is a reduction process, and chlorine displacing bromine is a redox displacement.",
    "exp_d": "Incorrect. (1) is an acid-base reaction."
  },
  {
    "q_no": 22,
    "key": "D",
    "rate": "50%",
    "focus": "Properties of Nitrogen Oxides & Environmental Air Pollution",
    "exp_a": "Incorrect. Incomplete.",
    "exp_b": "Incorrect. (1) is true.",
    "exp_c": "Incorrect. (2) is true.",
    "exp_d": "Correct. All three statements (1), (2), and (3) accurately describe the formation, environmental impact (acid rain / smog), and catalytic reduction of nitrogen oxides."
  },
  {
    "q_no": 23,
    "key": "B",
    "rate": "70%",
    "focus": "Corrosion Protection of Underground Pipelines",
    "exp_a": "Incorrect. Statement 2 is about metal activity, not explaining why painting is insufficient underground.",
    "exp_b": "Correct. Both statements are true: sacrificial protection using zinc/magnesium blocks is used for underground iron pipes (statement 1 true) and magnesium loses electrons more readily than iron (statement 2 true), but painting is avoided underground because scratches are impossible to repair after burial.",
    "exp_c": "Incorrect. Statement 1 is true.",
    "exp_d": "Incorrect. Both statements are true."
  },
  {
    "q_no": 24,
    "key": "C",
    "rate": "77%",
    "focus": "Properties of Diamond: Structure vs Melting Point",
    "exp_a": "Incorrect. 1st statement is false: diamond has a very high melting point (> 3500 deg C).",
    "exp_b": "Incorrect. 1st statement is false.",
    "exp_c": "Correct. 1st statement is FALSE: diamond has an exceptionally high melting point because breaking down its 3D giant covalent lattice requires breaking vast numbers of strong C-C covalent bonds. 2nd statement is TRUE: all carbon atoms in diamond are bonded via single covalent bonds.",
    "exp_d": "Incorrect. Statement 2 is true."
  },
  {
    "q_no": 25,
    "key": "B",
    "rate": "75%",
    "focus": "Rate of Reaction & Tangent Slope Determination",
    "exp_a": "Incorrect. Initial rate calculation error.",
    "exp_b": "Correct. Initial rate = slope of tangent at t = 0 min = Delta V / Delta t = 42.0 cm^3 / 3.0 min = 14.0 cm^3 min^-1.",
    "exp_c": "Incorrect. Average rate over entire duration.",
    "exp_d": "Incorrect. Calculation arithmetic error."
  },
  {
    "q_no": 26,
    "key": "B",
    "rate": "60%",
    "focus": "Equilibrium Constant Expression & Heterogeneous Equilibrium",
    "exp_a": "Incorrect. Solids should not be included in Kc expression.",
    "exp_b": "Correct. In heterogeneous equilibrium, the concentrations of pure solids are constant and omitted from Kc, giving Kc = [CO2(g)].",
    "exp_c": "Incorrect. Includes solid terms.",
    "exp_d": "Incorrect. Inverted expression."
  },
  {
    "q_no": 27,
    "key": "C",
    "rate": "73%",
    "focus": "Stereoisomerism: Chiral Carbons & Optical Inactivity",
    "exp_a": "Incorrect. Meso compounds have an internal plane of symmetry.",
    "exp_b": "Incorrect. Lacks stereocentre.",
    "exp_c": "Correct. The molecule contains 2 asymmetric chiral carbons with an internal plane of symmetry (meso form), making the compound optically inactive by internal compensation.",
    "exp_d": "Incorrect. Pair of enantiomers."
  },
  {
    "q_no": 28,
    "key": "D",
    "rate": "57%",
    "focus": "Reactions of Alcohols with Thionyl Chloride / Phosphorus Halides",
    "exp_a": "Incorrect. Reaction produces SO2 and HCl gases.",
    "exp_b": "Incorrect. Replaces -OH with -Cl.",
    "exp_c": "Incorrect. Ester is not formed.",
    "exp_d": "Correct. Reaction of butan-1-ol with SOCl2 produces 1-chlorobutane, SO2(g), and HCl(g). Because the by-products are gaseous and escape, this is the preferred laboratory method."
  },
  {
    "q_no": 29,
    "key": "A",
    "rate": "66%",
    "focus": "Differentiating Functional Groups in Carbon Compounds",
    "exp_a": "Correct. Reagents and observations in (A) successfully differentiate an aldehyde, a ketone, and a carboxylic acid.",
    "exp_b": "Incorrect. Reagents give identical results.",
    "exp_c": "Incorrect. Cannot distinguish aldehyde from ketone.",
    "exp_d": "Incorrect. Ineffective test sequence."
  },
  {
    "q_no": 30,
    "key": "A",
    "rate": "37%",
    "focus": "Periodic Trends: Acid-Base Character of Period 3 Chlorides",
    "exp_a": "Correct. Sodium chloride dissolves in water to form neutral NaCl(aq) (pH = 7), while covalent non-metal chlorides (SiCl4, PCl3, PCl5) undergo complete hydrolysis in water to produce strongly acidic solutions (pH < 2).",
    "exp_b": "Incorrect. PCl3 hydrolyzes to H3PO3 and HCl (acidic).",
    "exp_c": "Incorrect. SiCl4 hydrolyzes to SiO2 and HCl (acidic).",
    "exp_d": "Incorrect. PCl5 hydrolyzes to H3PO4 and HCl (acidic)."
  },
  {
    "q_no": 31,
    "key": "B",
    "rate": "56%",
    "focus": "Chemical Kinetics: Reaction Pathway & Catalysis",
    "exp_a": "Incorrect. Catalyst changes activation energy, not Delta H.",
    "exp_b": "Correct. A catalyst provides an alternative reaction pathway with a lower activation energy, increasing the rate constant k.",
    "exp_c": "Incorrect. Reactants' energy levels are unchanged.",
    "exp_d": "Incorrect. Equilibrium constant Kc remains unchanged."
  },
  {
    "q_no": 32,
    "key": "C",
    "rate": "72%",
    "focus": "Synthetic Routes for Organic Compounds",
    "exp_a": "Incorrect. Wrong reagent order.",
    "exp_b": "Incorrect. Elimination before substitution.",
    "exp_c": "Correct. Step 1: Nucleophilic substitution of bromoethane with KCN gives propanenitrile. Step 2: Acid hydrolysis under reflux gives propanoic acid.",
    "exp_d": "Incorrect. Produces an amine, not acid."
  },
  {
    "q_no": 33,
    "key": "C",
    "rate": "88%",
    "focus": "Condensation Polymers: PET (Polyethylene Terephthalate)",
    "exp_a": "Incorrect. (1) is false.",
    "exp_b": "Incorrect. (1) is false.",
    "exp_c": "Correct. Statements (2) and (3) are correct: PET contains ester linkages formed with the elimination of water molecules from 1,4-benzenedicarboxylic acid and ethane-1,2-diol.",
    "exp_d": "Incorrect. (1) is false."
  },
  {
    "q_no": 34,
    "key": "D",
    "rate": "42%",
    "focus": "Factors Affecting Rates of Chemical Reactions",
    "exp_a": "Incorrect. Omits true statements.",
    "exp_b": "Incorrect. (2) is true.",
    "exp_c": "Incorrect. (1) is true.",
    "exp_d": "Correct. Statements (1), (2), and (3) are all correct: increasing temperature increases collision energy, increasing concentration increases collision frequency, and increasing surface area increases contact area."
  },
  {
    "q_no": 35,
    "key": "C",
    "rate": "43%",
    "focus": "Reactivity of Group I vs Group II Metals",
    "exp_a": "Incorrect. 1st statement is false: sodium is more reactive than magnesium.",
    "exp_b": "Incorrect. 1st statement is false.",
    "exp_c": "Correct. 1st statement is FALSE: sodium (Group I) has a lower first ionization energy than magnesium (Group II) and loses its single valence electron much more readily, making sodium more reactive than magnesium. 2nd statement is TRUE: magnesium has 2 valence electrons while sodium has 1.",
    "exp_d": "Incorrect. Statement 2 is true."
  },
  {
    "q_no": 36,
    "key": "C",
    "rate": "45%",
    "focus": "Boiling Points of Alkanes vs Haloalkanes",
    "exp_a": "Incorrect. 1st statement is false: chloromethane has a higher boiling point than methane.",
    "exp_b": "Incorrect. 1st statement is false.",
    "exp_c": "Correct. 1st statement is FALSE: chloromethane (CH3Cl, b.p. -24 deg C) has a higher boiling point than methane (CH4, b.p. -161 deg C) due to larger molecular size and permanent dipole-dipole attractions. 2nd statement is TRUE: C-Cl bond is polar due to electronegativity difference.",
    "exp_d": "Incorrect. Statement 2 is true."
  }
];

export const data2018: ExamQuestion[] = [
  {
    "q_no": 1,
    "key": "B",
    "rate": "56%",
    "focus": "Extraction of Sodium Chloride from Sea Water",
    "exp_a": "Incorrect. Electrolysis of sea water decomposes NaCl into chlorine, hydrogen, and sodium hydroxide, rather than obtaining pure solid NaCl.",
    "exp_b": "Correct. Crystallization (via solar evaporation of water followed by harvesting) is the standard physical separation method to obtain solid sodium chloride crystals from sea water.",
    "exp_c": "Incorrect. Simple distillation collects pure water as the distillate and is too energy-intensive for extracting bulk solid salt.",
    "exp_d": "Incorrect. Fractional distillation separates miscible liquids with close boiling points, not solid salts from liquid solutions."
  },
  {
    "q_no": 2,
    "key": "C",
    "rate": "70%",
    "focus": "Intermolecular / Interatomic Forces in Noble Gases",
    "exp_a": "Incorrect. Chemical inertness describes reactivity, not the physical state of matter.",
    "exp_b": "Incorrect. Being monoatomic does not explain the gaseous state (e.g. liquid mercury is also monoatomic).",
    "exp_c": "Correct. Neon exists as individual discrete atoms held only by extremely weak van der Waals forces that require very little thermal energy to overcome, giving it a very low boiling point (-246 °C) so that it exists as a gas at room temperature and pressure.",
    "exp_d": "Incorrect. An octet valence structure accounts for electronic and chemical stability, not physical boiling point."
  },
  {
    "q_no": 3,
    "key": "D",
    "rate": "78%",
    "focus": "Thermal Decomposition of Silver(I) Oxide (Mass vs Time)",
    "exp_a": "Incorrect. The mass of the solid contents decreases during heating due to the escape of oxygen gas.",
    "exp_b": "Incorrect. The mass does not drop to zero because solid metallic silver residue remains.",
    "exp_c": "Incorrect. Mass increases during oxidation, whereas this is a decomposition reaction.",
    "exp_d": "Correct. Thermal decomposition of silver(I) oxide: 2Ag2O(s) -> 4Ag(s) + O2(g). Oxygen gas escapes, causing the mass of solid contents (m) to decrease continuously until all Ag2O has decomposed, after which the mass remains constant (pure silver residue), matching graph D."
  },
  {
    "q_no": 4,
    "key": "D",
    "rate": "60%",
    "focus": "Avogadro's Law & Number of Molecules Calculation",
    "exp_a": "Incorrect. 2.0 n is an arithmetic inversion error.",
    "exp_b": "Incorrect. 4.0 n assumes equal masses without converting to moles.",
    "exp_c": "Incorrect. 0.25 n is a calculation error.",
    "exp_d": "Correct. Molar mass of SO2 = 32.0 + 2(16.0) = 64.0 g mol^-1. Moles of SO2 = 8.0 / 64.0 = 0.125 mol = n molecules. Molar mass of O2 = 32.0 g mol^-1. Moles of O2 = 2.0 / 32.0 = 0.0625 mol. Comparing moles: 0.0625 / 0.125 = 0.50. Number of molecules in 2.0 g O2 is 0.50 n."
  },
  {
    "q_no": 5,
    "key": "C",
    "rate": "80%",
    "focus": "Giant Covalent Network vs Simple Molecular Crystal Structure",
    "exp_a": "Incorrect. Atomic size does not directly determine hardness.",
    "exp_b": "Incorrect. Electron count affects van der Waals forces, not giant lattice hardness.",
    "exp_c": "Correct. Quartz (SiO2) has a 3D giant covalent network structure where every atom is held by extensive strong directional covalent bonds. Dry ice (CO2) is a simple molecular crystal where discrete CO2 molecules are held together only by weak intermolecular van der Waals forces.",
    "exp_d": "Incorrect. C=O double bonds within CO2 molecules are very strong; hardness is determined by intermolecular forces between molecules."
  },
  {
    "q_no": 6,
    "key": "B",
    "rate": "65%",
    "focus": "Qualitative Analysis: Precipitates with Excess Sodium Hydroxide",
    "exp_a": "Incorrect. ZnSO4 forms a white Zn(OH)2 precipitate that redissolves in excess NaOH(aq) to give a colourless solution of [Zn(OH)4]^2-.",
    "exp_b": "Correct. Calcium nitrate (Ca(NO3)2) reacts with NaOH(aq) to form slightly soluble white calcium hydroxide: Ca^2+(aq) + 2OH^-(aq) -> Ca(OH)2(s). Ca(OH)2 does not dissolve in excess NaOH(aq) because calcium is not amphoteric.",
    "exp_c": "Incorrect. Lead(II) nitrate forms a white precipitate of Pb(OH)2 (not yellow), which dissolves in excess NaOH(aq).",
    "exp_d": "Incorrect. Iron(III) sulphate forms a reddish-brown precipitate of Fe(OH)3, not dirty green."
  },
  {
    "q_no": 7,
    "key": "B",
    "rate": "68%",
    "focus": "Properties & Reactivity of Iron vs Magnesium",
    "exp_a": "Incorrect. Magnesium is a metal and is ductile and malleable.",
    "exp_b": "Correct. Iron is lower than magnesium in the reactivity series and electrochemical series, meaning iron has a lower tendency to lose electrons (oxidize) and corrodes less readily than magnesium.",
    "exp_c": "Incorrect. Iron (~5.0%) is more abundant in the Earth's crust than magnesium (~2.1%).",
    "exp_d": "Incorrect. Magnesium is in Group II and exhibits only the +2 oxidation state in its oxides (MgO), while iron exhibits multiple oxidation states (+2, +3, e.g. FeO, Fe2O3, Fe3O4)."
  },
  {
    "q_no": 8,
    "key": "C",
    "rate": "82%",
    "focus": "General Molecular Formula of Alkanoic Acids",
    "exp_a": "Incorrect. CH2O represents methanal (an aldehyde), not a carboxylic acid.",
    "exp_b": "Incorrect. C2H6O2 represents a diol (ethane-1,2-diol).",
    "exp_c": "Correct. Alkanoic acids have the general molecular formula CnH2nO2. For n = 4 (butanoic acid), the formula is C4H8O2.",
    "exp_d": "Incorrect. C4H10O2 represents a saturated diol."
  },
  {
    "q_no": 9,
    "key": "A",
    "rate": "59%",
    "focus": "Deducing Metal Reactivity Series from Experimental Observations",
    "exp_a": "Correct. Metal Y reacts with aqueous NaCl (cold water) to evolve H2 gas, so Y is a reactive alkali/alkaline earth metal (highest reactivity). Metal X decomposes upon heating to evolve O2 gas (characteristic of unreactive metals at the bottom of the series). Metal Z is intermediate. Decreasing order of reactivity: Y > Z > X.",
    "exp_b": "Incorrect. Metal X has the lowest reactivity.",
    "exp_c": "Incorrect. Reverses Z and X.",
    "exp_d": "Incorrect. Metal Y is the most reactive."
  },
  {
    "q_no": 10,
    "key": "A",
    "rate": "63%",
    "focus": "Reactivity of Copper with Dilute vs Concentrated Oxidizing Acids",
    "exp_a": "Correct. Copper is below hydrogen in the reactivity series and cannot be oxidized by H+(aq) ions in non-oxidizing acids like dilute 2 M H2SO4; therefore, no reaction occurs.",
    "exp_b": "Incorrect. 2 M HNO3 is an oxidizing acid and oxidizes copper to Cu(NO3)2 with liberation of NO(g).",
    "exp_c": "Incorrect. Hot concentrated 16 M H2SO4 oxidizes copper to CuSO4 with liberation of SO2(g).",
    "exp_d": "Incorrect. Concentrated 16 M HNO3 vigorously oxidizes copper to Cu(NO3)2 with liberation of brown NO2(g)."
  },
  {
    "q_no": 11,
    "key": "D",
    "rate": "50%",
    "focus": "pH of Strong vs Weak Acid Mixtures",
    "exp_a": "Incorrect. CH3COOH is a weak acid that only partially ionizes, so [H+] < 0.20 M and pH > -log 0.2.",
    "exp_b": "Incorrect. Moles of H+ in W = 0.020 mol; moles of OH- in Z = 0.005 mol. W is in excess, giving an acidic solution.",
    "exp_c": "Incorrect. Both W and X have [H+] = 0.20 M; mixing equal concentration solutions yields [H+] = 0.20 M with the same pH.",
    "exp_d": "Correct. W (HNO3) and X (HCl) are both strong acids completely ionized to give [H+] = 0.20 M. Y is weak ethanoic acid with [H+] << 0.20 M, so the strong acid mixture (W + X) has higher [H+] and lower pH than the mixture containing weak acid (X + Y)."
  },
  {
    "q_no": 12,
    "key": "B",
    "rate": "79%",
    "focus": "Identifying Non-Redox Reactions: High-Temperature Silicate Formation",
    "exp_a": "Incorrect. Mg (0 to +2) and S (+4 to 0) undergo redox changes.",
    "exp_b": "Correct. In CaCO3(s) + SiO2(s) -> CaSiO3(s) + CO2(g), oxidation states remain constant: Ca (+2), C (+4), O (-2), Si (+4). It is a non-redox acid-base / replacement reaction.",
    "exp_c": "Incorrect. Disproportionation of Cu(I) to Cu(II) and Cu(0) is a redox reaction.",
    "exp_d": "Incorrect. CuS is oxidized to CuSO4 and HNO3 is reduced to NO (redox)."
  },
  {
    "q_no": 13,
    "key": "B",
    "rate": "75%",
    "focus": "Mechanism of Free Radical Substitution: Termination Steps",
    "exp_a": "Incorrect. Initiation step.",
    "exp_b": "Correct. A termination step involves the combination of two free radicals to form a stable non-radical molecule (e.g. CH3• + Cl• -> CH3Cl, or Cl• + Cl• -> Cl2, or CH3• + CH3• -> C2H6), removing radicals from the reaction mixture.",
    "exp_c": "Incorrect. Propagation step.",
    "exp_d": "Incorrect. Propagation step."
  },
  {
    "q_no": 14,
    "key": "C",
    "rate": "49%",
    "focus": "Structure & Monomers of Addition Acrylic Polymers",
    "exp_a": "Incorrect. The main chain consists solely of carbon atoms, so it is an addition polymer (not a polyester with ester linkages in the backbone).",
    "exp_b": "Incorrect. Saturated methyl 2-methylpropanoate cannot undergo addition polymerization.",
    "exp_c": "Correct. The monomer methyl methacrylate (CH2=C(CH3)COOCH3) contains an unsaturated C=C double bond, which readily reacts with and decolorizes acidified potassium permanganate solution (KMnO4(aq)).",
    "exp_d": "Incorrect. The polymer is formed via addition polymerization, not condensation."
  },
  {
    "q_no": 15,
    "key": "C",
    "rate": "83%",
    "focus": "Separation Techniques: Separating Funnel for Immiscible Liquids",
    "exp_a": "Incorrect. Rock salt and sand is separated by dissolving in water followed by filtration.",
    "exp_b": "Incorrect. Propan-2-ol and water are completely miscible liquids (separated by fractional distillation).",
    "exp_c": "Correct. Hexane (a non-polar hydrocarbon) and water (a polar liquid) are immiscible and form two distinct liquid layers with different densities, which can be cleanly separated using a separating funnel.",
    "exp_d": "Incorrect. Methanoic acid and ethanoic acid are miscible liquids."
  },
  {
    "q_no": 16,
    "key": "A",
    "rate": "65%",
    "focus": "Molecular Symmetry & Non-Polar Molecules",
    "exp_a": "Correct. BCl3 has 3 bonding pairs and 0 lone pairs on boron in a symmetrical trigonal planar geometry (120° bond angles). The three polar B-Cl bond dipoles cancel out symmetrically, giving a non-polar molecule (statement 1 only). PCl3 (pyramidal) and CHCl3 (asymmetric tetrahedral) have non-cancelling dipoles and are polar.",
    "exp_b": "Incorrect. PCl3 is polar due to the lone pair on phosphorus.",
    "exp_c": "Incorrect. CHCl3 is polar due to asymmetric C-H and C-Cl dipoles.",
    "exp_d": "Incorrect. Both PCl3 and CHCl3 are polar."
  },
  {
    "q_no": 17,
    "key": "D",
    "rate": "42%",
    "focus": "Hydrogen Bonding & Density Anomalies of Water and Ice",
    "exp_a": "Incorrect. Statement (1) is false: liquid water is vastly denser than steam.",
    "exp_b": "Incorrect. Statement (3) is also true.",
    "exp_c": "Incorrect. Statement (1) is false.",
    "exp_d": "Correct. Statement (2) is true: melting ice causes its open 3D tetrahedral hydrogen-bonded lattice to collapse into a more closely packed liquid. Statement (3) is true: thermal expansion from 10 to 30 °C increases molecular kinetic energy and average intermolecular distance. Statement (1) is false: density of liquid water is much higher than steam."
  },
  {
    "q_no": 18,
    "key": "A",
    "rate": "66%",
    "focus": "Thermochemical Definitions: Enthalpy of Formation of Water",
    "exp_a": "Correct. Formation equation: H2(g) + 1/2 O2(g) -> H2O(l). For 2H2(g) + O2(g) -> 2H2O(l) releasing x kJ of heat (Delta H = -x kJ), the standard enthalpy change of formation per mole of H2O(l) is -0.5x kJ mol^-1 (statement 1 is true).",
    "exp_b": "Incorrect. The sign is negative (exothermic).",
    "exp_c": "Incorrect. Statement 3 should be -0.5x kJ mol^-1 per mole of H2.",
    "exp_d": "Incorrect. Statement 2 is false."
  },
  {
    "q_no": 19,
    "key": "D",
    "rate": "68%",
    "focus": "Thermal Decomposition of Calcium Carbonate & Limewater Test",
    "exp_a": "Incorrect. Omits true statements.",
    "exp_b": "Incorrect. (2) is true.",
    "exp_c": "Incorrect. (1) is true.",
    "exp_d": "Correct. Statements (1), (2), and (3) are all correct: strong heating of marble (CaCO3) decomposes it to CaO and CO2 gas, which turns limewater milky by precipitating CaCO3."
  },
  {
    "q_no": 20,
    "key": "A",
    "rate": "63%",
    "focus": "Acid-Base Reactions of Concentrated vs Dilute Sulphuric Acid",
    "exp_a": "Correct. Statements (1) and (2) are correct: dilute H2SO4 reacts with active metals (Mg, Zn) to give H2, while hot concentrated H2SO4 oxidizes copper to produce SO2 gas.",
    "exp_b": "Incorrect. (3) is false.",
    "exp_c": "Incorrect. (3) is false.",
    "exp_d": "Incorrect. (3) is false."
  },
  {
    "q_no": 21,
    "key": "B",
    "rate": "41%",
    "focus": "Structure & Monomer of Polyesters",
    "exp_a": "Incorrect. Only (1) is incomplete.",
    "exp_b": "Correct. Statements (1) and (3) are correct: polyesters contain ester functional linkages (-COO-) in the main chain and can be hydrolyzed by heating with aqueous alkali.",
    "exp_c": "Incorrect. (2) is false.",
    "exp_d": "Incorrect. (2) is false."
  },
  {
    "q_no": 22,
    "key": "A",
    "rate": "72%",
    "focus": "Properties of Halogens & Halide Precipitation",
    "exp_a": "Correct. Statements (1) and (2) are correct: chlorine is a stronger oxidizing agent than iodine, and AgCl dissolves in dilute aqueous ammonia.",
    "exp_b": "Incorrect. (3) is false.",
    "exp_c": "Incorrect. (3) is false.",
    "exp_d": "Incorrect. (3) is false."
  },
  {
    "q_no": 23,
    "key": "C",
    "rate": "47%",
    "focus": "Drying Gases: Concentrated Sulphuric Acid with Basic Gases",
    "exp_a": "Incorrect. 1st statement is false: concentrated H2SO4 reacts with basic ammonia.",
    "exp_b": "Incorrect. 1st statement is false.",
    "exp_c": "Correct. 1st statement is FALSE: concentrated H2SO4 cannot be used to dry all gases because it reacts chemically with alkaline gases like ammonia (2NH3 + H2SO4 -> (NH4)2SO4) and reducing gases like H2S. 2nd statement is TRUE: concentrated H2SO4 is hygroscopic and has a powerful affinity for water.",
    "exp_d": "Incorrect. Statement 2 is true."
  },
  {
    "q_no": 24,
    "key": "C",
    "rate": "48%",
    "focus": "Thermal Decomposition of Metal Carbonates",
    "exp_a": "Incorrect. 1st statement is false: thermal decomposition of CaCO3 is not a redox reaction.",
    "exp_b": "Incorrect. 1st statement is false.",
    "exp_c": "Correct. 1st statement is FALSE: thermal decomposition of CaCO3 (CaCO3 -> CaO + CO2) involves no change in oxidation states for Ca (+2), C (+4), or O (-2), so it is not a redox reaction. 2nd statement is TRUE: calcium carbonate decomposes into solid calcium oxide and gaseous carbon dioxide.",
    "exp_d": "Incorrect. Statement 2 is true."
  },
  {
    "q_no": 25,
    "key": "D",
    "rate": "76%",
    "focus": "Initial Rate Method & Rate Equation Formulation",
    "exp_a": "Incorrect. Incorrect rate orders.",
    "exp_b": "Incorrect. Overestimates order of reactant.",
    "exp_c": "Incorrect. Underestimates order.",
    "exp_d": "Correct. Initial rate analysis across concentration trials establishes the rate law Rate = k[A]^m[B]^n with overall reaction order = 2."
  },
  {
    "q_no": 26,
    "key": "B",
    "rate": "71%",
    "focus": "Chemical Equilibrium & Dynamic State Characteristics",
    "exp_a": "Incorrect. Concentrations do not need to be equal.",
    "exp_b": "Correct. At dynamic equilibrium in a closed system, macroscopic properties (concentrations, color, pressure) remain constant because the rates of forward and reverse reactions are equal.",
    "exp_c": "Incorrect. Reactions do not cease.",
    "exp_d": "Incorrect. Rate is not zero."
  },
  {
    "q_no": 27,
    "key": "A",
    "rate": "57%",
    "focus": "Oxidation of Substituted Benzene Derivatives (Alkylbenzenes)",
    "exp_a": "Correct. Heating methylbenzene (toluene) under reflux with acidified potassium permanganate (KMnO4(aq)) oxidizes the alkyl side chain completely to form benzoic acid (C6H5COOH).",
    "exp_b": "Incorrect. Benzaldehyde is an intermediate.",
    "exp_c": "Incorrect. Benzyl alcohol is not the final oxidation product.",
    "exp_d": "Incorrect. The aromatic ring is preserved."
  },
  {
    "q_no": 28,
    "key": "B",
    "rate": "69%",
    "focus": "Chirality & Stereoisomers in Substituted Cycloalkanes",
    "exp_a": "Incorrect. Contains chiral centres.",
    "exp_b": "Correct. 1,2-dimethylcyclopropane possesses two chiral carbon atoms and exhibits both cis-trans (geometrical) and enantiomeric (optical) isomerism.",
    "exp_c": "Incorrect. Achiral due to symmetry.",
    "exp_d": "Incorrect. Lacks asymmetric centres."
  },
  {
    "q_no": 29,
    "key": "B",
    "rate": "48%",
    "focus": "Synthetic Routes for Aromatic Amides and Esters",
    "exp_a": "Incorrect. Wrong reagent order.",
    "exp_b": "Correct. Reaction of acyl chloride with primary amine under basic conditions forms an N-substituted secondary amide.",
    "exp_c": "Incorrect. Unsuitable reagents.",
    "exp_d": "Incorrect. Hydrolysis occurs instead of coupling."
  },
  {
    "q_no": 30,
    "key": "D",
    "rate": "83%",
    "focus": "Periodic Trends: Electrical Conductivity of Period 3 Elements",
    "exp_a": "Incorrect. Na is a metallic conductor.",
    "exp_b": "Incorrect. Mg conducts via delocalized electrons.",
    "exp_c": "Incorrect. Al has the highest metallic conductivity in Period 3.",
    "exp_d": "Correct. Sulfur (S8) and phosphorus (P4) are non-metals with simple molecular structures and localized covalent bonds with no mobile ions or delocalized electrons, so they are electrical insulators."
  },
  {
    "q_no": 31,
    "key": "B",
    "rate": "43%",
    "focus": "Maxwell-Boltzmann Energy Distribution & Temperature",
    "exp_a": "Incorrect. Higher temperature lowers peak height.",
    "exp_b": "Correct. Raising the temperature broadens the Maxwell-Boltzmann distribution curve and shifts the peak to higher kinetic energy, increasing the area under the curve beyond the activation energy threshold.",
    "exp_c": "Incorrect. Total area under curve is constant.",
    "exp_d": "Incorrect. Activation energy value is unaffected."
  },
  {
    "q_no": 32,
    "key": "D",
    "rate": "45%",
    "focus": "Structure & Properties of Detergents (Soap vs Soapless)",
    "exp_a": "Incorrect. Synthetic detergents do not form precipitate in hard water.",
    "exp_b": "Incorrect. Soaps are biodegradable.",
    "exp_c": "Incorrect. Both lower surface tension.",
    "exp_d": "Correct. All three statements (1), (2), and (3) accurately describe the cleaning mechanism: emulsification of oil droplets by hydrophobic non-polar tails and hydrophilic polar heads."
  },
  {
    "q_no": 33,
    "key": "A",
    "rate": "58%",
    "focus": "Distinguishing Carbonyl Compounds: Tollens' & Fehling's Tests",
    "exp_a": "Correct. Statement (1) is true: aldehydes reduce Tollens' reagent ([Ag(NH3)2]+) to form a shiny silver mirror. Statement (2) is true: ketones do not react with Tollens' reagent and show no observable change.",
    "exp_b": "Incorrect. (3) is false.",
    "exp_c": "Incorrect. (3) is false.",
    "exp_d": "Incorrect. (3) is false."
  },
  {
    "q_no": 34,
    "key": "C",
    "rate": "55%",
    "focus": "Condensation Polymers: Urea-Formaldehyde Resin",
    "exp_a": "Incorrect. (1) is false.",
    "exp_b": "Incorrect. (1) is false.",
    "exp_c": "Correct. Statements (2) and (3) are correct: urea-methanal is a thermosetting polymer with a cross-linked 3D network structure that does not soften upon heating.",
    "exp_d": "Incorrect. (1) is false."
  },
  {
    "q_no": 35,
    "key": "A",
    "rate": "59%",
    "focus": "Kinetics & Surface Area Effect on Heterogeneous Reactions",
    "exp_a": "Correct. 1st statement is TRUE: powdered calcium carbonate reacts faster with hydrochloric acid than marble chips of the same mass. 2nd statement is TRUE: powdered solid has a much greater total surface area, providing more contact sites and higher collision frequency with reactant particles, correctly explaining statement 1.",
    "exp_b": "Incorrect. Statement 2 is the exact scientific explanation of statement 1.",
    "exp_c": "Incorrect. Statement 1 is true.",
    "exp_d": "Incorrect. Both statements are true."
  },
  {
    "q_no": 36,
    "key": "C",
    "rate": "65%",
    "focus": "Boiling Points of Primary vs Tertiary Alcohols",
    "exp_a": "Incorrect. 1st statement is false: butan-1-ol has a higher boiling point than 2-methylpropan-2-ol.",
    "exp_b": "Incorrect. 1st statement is false.",
    "exp_c": "Correct. 1st statement is FALSE: straight-chain butan-1-ol (b.p. 117 °C) has a higher boiling point than spherical branched 2-methylpropan-2-ol (b.p. 82 °C) because straight chains have greater surface contact area and stronger van der Waals forces. 2nd statement is TRUE: branching makes molecules more compact/spherical.",
    "exp_d": "Incorrect. Statement 2 is true."
  }
];

export const data2019: ExamQuestion[] = [
  {
    "q_no": 1,
    "key": "C",
    "rate": "92%",
    "focus": "Periodic Table Groups & Similar Chemical Properties",
    "exp_a": "Incorrect. Z=4 (Be, Group II) and Z=14 (Si, Group IV) are in different groups.",
    "exp_b": "Incorrect. Z=8 (O, Group VI) and Z=18 (Ar, Group 0) are in different groups.",
    "exp_c": "Correct. Z=9 (Fluorine, 2,7) and Z=35 (Bromine, 2,8,18,7) both belong to Group VII (the halogens) with 7 valence electrons, exhibiting very similar chemical properties.",
    "exp_d": "Incorrect. Z=19 (K, Group I) and Z=38 (Sr, Group II) belong to different groups."
  },
  {
    "q_no": 2,
    "key": "A",
    "rate": "68%",
    "focus": "Migration of Ions in an Electric Field",
    "exp_a": "Correct. Dilute H2SO4 provides mobile H+ and SO4^2- ions to conduct electricity on the filter paper. The purple permanganate ion (MnO4^-) is a negatively charged anion and migrates towards the positive electrode P (anode), creating a visible purple patch towards P.",
    "exp_b": "Incorrect. Orange dichromate ion (Cr2O7^2-) is an anion and migrates towards positive P, not negative Q.",
    "exp_c": "Incorrect. Ethanol is a non-electrolyte and does not conduct electricity, so ions cannot migrate.",
    "exp_d": "Incorrect. Ethanol does not allow ion conduction."
  },
  {
    "q_no": 3,
    "key": "B",
    "rate": "40%",
    "focus": "Identifying Non-Redox Reactions: Rust Removal by Acid",
    "exp_a": "Incorrect. Ethanol oxidizes to ethanoic acid (sour wine), which is a redox reaction.",
    "exp_b": "Correct. Removing rust using vinegar (ethanoic acid) is an acid-base neutralization: Fe2O3.nH2O(s) + 6CH3COOH(aq) -> 2(CH3COO)3Fe(aq) + (n+3)H2O(l). Oxidation states remain Fe(+3), H(+1), C(+4/-2), O(-2); it does NOT involve oxidation and reduction.",
    "exp_c": "Incorrect. Methane combustion is a redox reaction.",
    "exp_d": "Incorrect. Reduction of NOx to N2 and oxidation of CO to CO2 in catalytic converters are redox reactions."
  },
  {
    "q_no": 4,
    "key": "B",
    "rate": "83%",
    "focus": "Determination of Acid Basicity via Titration",
    "exp_a": "Incorrect. Basicity = 1 would require 0.001275 mol KOH.",
    "exp_b": "Correct. Moles of C4H4O4 = 0.02500 dm^3 * 0.051 mol dm^-3 = 1.275 x 10^-3 mol. Moles of KOH = 0.02218 dm^3 * 0.115 mol dm^-3 = 2.551 x 10^-3 mol. Mole ratio KOH : acid = (2.551 x 10^-3) / (1.275 x 10^-3) = 2.00. Therefore, the basicity of the acid is 2 (a dibasic acid).",
    "exp_c": "Incorrect. Basicity = 3 would require a 3:1 ratio.",
    "exp_d": "Incorrect. Basicity = 4 would require a 4:1 ratio."
  },
  {
    "q_no": 5,
    "key": "A",
    "rate": "59%",
    "focus": "Precipitation Reactions & Residual Ion Concentration",
    "exp_a": "Correct. Reaction: Pb^2+(aq) + 2Cl^-(aq) -> PbCl2(s). Initial moles: n(Pb^2+) = 0.025 * 0.50 = 0.0125 mol; n(Cl^-) = 0.050 * 1.00 = 0.0500 mol. Moles of Cl^- consumed = 2 * 0.0125 = 0.0250 mol. Remaining moles of Cl^- = 0.0500 - 0.0250 = 0.0250 mol. Total volume = 25.0 + 50.0 = 75.0 cm^3 = 0.075 dm^3. [Cl^-] = 0.0250 / 0.075 = 0.33 M.",
    "exp_b": "Incorrect. 0.50 M is the unreacted fraction without volume correction.",
    "exp_c": "Incorrect. Did not account for precipitation.",
    "exp_d": "Incorrect. Calculation arithmetic error."
  },
  {
    "q_no": 6,
    "key": "C",
    "rate": "69%",
    "focus": "Thermal Decomposition of Sodium Hydrogencarbonate (Stoichiometry)",
    "exp_a": "Incorrect. Theoretical mass of NaOH would be 1.20 g.",
    "exp_b": "Incorrect. Na2O2 is not formed by gentle thermal decomposition.",
    "exp_c": "Correct. Reaction: 2NaHCO3(s) -> Na2CO3(s) + H2O(g) + CO2(g). Initial moles of NaHCO3 = 2.53 g / 84.0 g mol^-1 = 0.0301 mol. Theoretical moles of solid residue Na2CO3 = 0.0301 / 2 = 0.01506 mol. Theoretical mass of Na2CO3 = 0.01506 mol * 106.0 g mol^-1 = 1.60 g (matches the experimental 1.59 g solid remained).",
    "exp_d": "Incorrect. Na2O decomposes further and has a different mass."
  },
  {
    "q_no": 7,
    "key": "B",
    "rate": "83%",
    "focus": "Catalytic Cracking Apparatus & Procedures",
    "exp_a": "Incorrect statement is false (fact is true). Broken porcelain acts as a heterogeneous catalyst.",
    "exp_b": "Correct (INCORRECT statement). The set-up performs CATALYTIC CRACKING (a chemical reaction breaking large alkane molecules into smaller alkanes and alkenes), NOT fractional distillation (which is a physical separation technique based on boiling point differences).",
    "exp_c": "Incorrect statement is false (fact is true). Gaseous alkenes formed decolorize acidified KMnO4.",
    "exp_d": "Incorrect statement is false (fact is true). Removing delivery tube prevents water suck-back and boiling tube cracking."
  },
  {
    "q_no": 8,
    "key": "B",
    "rate": "82%",
    "focus": "Empirical Formula Calculation of Rubidium Superoxide",
    "exp_a": "Incorrect. RbO has mass ratio 85.5 : 16.0.",
    "exp_b": "Correct. Mass of Rb = 28.5 g; Mass of O = 39.2 - 28.5 = 10.7 g. Moles: n(Rb) = 28.5 / 85.5 = 0.333 mol; n(O) = 10.7 / 16.0 = 0.669 mol. Mole ratio n(Rb) : n(O) = 0.333 : 0.669 = 1 : 2. Empirical formula is RbO2 (rubidium superoxide).",
    "exp_c": "Incorrect. Rb2O is rubidium oxide.",
    "exp_d": "Incorrect. Rb2O2 is rubidium peroxide."
  },
  {
    "q_no": 9,
    "key": "C",
    "rate": "76%",
    "focus": "Hess's Law Calculation: Enthalpy of Formation of Propane",
    "exp_a": "Incorrect. Arithmetic error.",
    "exp_b": "Incorrect. Positive sign error.",
    "exp_c": "Correct. Formation: 3C(s) + 4H2(g) -> C3H8(g). Delta H_f = 3 * Delta H_c(C) + 4 * Delta H_c(H2) - Delta H_c(C3H8) = 3(-394) + 4(-286) - (-2222) = -1182 - 1144 + 2222 = -2326 + 2222 = -104 kJ mol^-1.",
    "exp_d": "Incorrect. Positive sign error."
  },
  {
    "q_no": 10,
    "key": "C",
    "rate": "83%",
    "focus": "Addition Polymers & Monomer Identification",
    "exp_a": "Incorrect. Monomer has wrong substituent position.",
    "exp_b": "Incorrect. Saturated monomer.",
    "exp_c": "Correct. The repeating unit contains alternate methyl and carboxylate ester groups, corresponding to the addition polymerization of methyl 2-methylpropenoate (methyl methacrylate).",
    "exp_d": "Incorrect. Monomer lacks necessary alkene functional group."
  },
  {
    "q_no": 11,
    "key": "A",
    "rate": "69%",
    "focus": "Electrolysis of Aqueous Solutions & Preferential Discharge",
    "exp_a": "Correct. In Cell 1 (inert electrodes in dilute H2SO4), OH-(aq) / H2O is preferentially oxidized at the anode A to form oxygen gas (O2(g)): 2H2O(l) -> O2(g) + 4H+(aq) + 4e-.",
    "exp_b": "Incorrect. In dilute chloride solution, OH- is discharged over Cl-.",
    "exp_c": "Incorrect. Metal deposition occurs at cathode C if Cu^2+ is present.",
    "exp_d": "Incorrect. Fe anode dissolves as Fe^2+ only if iron is the anode."
  },
  {
    "q_no": 12,
    "key": "D",
    "rate": "43%",
    "focus": "Hydrogen-Oxygen Fuel Cell Chemistry",
    "exp_a": "Incorrect statement is false (fact is true). Fuel cells can be classified under primary electrochemical energy converters.",
    "exp_b": "Incorrect statement is false (fact is true). Nickel acts as a catalyst in alkaline fuel cells.",
    "exp_c": "Incorrect statement is false (fact is true). Oxygen gas X is obtained from fractional distillation of liquid air.",
    "exp_d": "Correct (INCORRECT statement). In an alkaline fuel cell, the oxidation of hydrogen at anode A is 2H2 + 4OH- -> 4H2O + 4e-. At cathode B, oxygen is reduced: O2 + 2H2O + 4e- -> 4OH-. The equation given in option D is the reverse of cathode reduction."
  },
  {
    "q_no": 13,
    "key": "D",
    "rate": "70%",
    "focus": "VSEPR Shapes of Simple Inorganic Molecules",
    "exp_a": "Incorrect. OF2 has 2 bond pairs and 2 lone pairs on oxygen (V-shaped / bent, not linear).",
    "exp_b": "Incorrect. CS2 has 2 double bond pairs and 0 lone pairs on carbon (linear, not V-shaped).",
    "exp_c": "Incorrect. NCl3 has 3 bond pairs and 1 lone pair on nitrogen (trigonal pyramidal, not planar).",
    "exp_d": "Correct. Phosphorus trifluoride (PF3) has 3 single bond pairs and 1 lone pair on the central phosphorus atom, giving a trigonal pyramidal molecular geometry."
  },
  {
    "q_no": 14,
    "key": "A",
    "rate": "78%",
    "focus": "Thermal Decomposition of Ammonium Dichromate (Chemical Volcano)",
    "exp_a": "Correct. Reaction: (NH4)2Cr2O7(s) -> Cr2O3(s) + N2(g) + 4H2O(g). In dichromate (Cr2O7^2-), Cr has an oxidation number of +6; in Cr2O3, Cr has an oxidation number of +3. The oxidation number of chromium decreases from +6 to +3 (reduction), so statement (1) only is correct. Statement (2) is false (ionic bonds break). Statement (3) is false (orange solid turns into green Cr2O3 powder).",
    "exp_b": "Incorrect. Statement (2) is false.",
    "exp_c": "Incorrect. Statement (3) is false (orange turns green, not green to orange).",
    "exp_d": "Incorrect. Statements (2) and (3) are both false."
  },
  {
    "q_no": 15,
    "key": "B",
    "rate": "24%",
    "focus": "Cathodic Protection & Barrier Protection of Iron",
    "exp_a": "Incorrect. Lead is less reactive than iron and accelerates rusting.",
    "exp_b": "Correct. Method (2) only: a complete, unbroken copper electroplate forms an impermeable physical barrier preventing iron from contacting water and oxygen. Method (1) accelerates rusting (Pb is less reactive than Fe). Method (3) accelerates corrosion if connected incorrectly.",
    "exp_c": "Incorrect. Method (1) accelerates rusting.",
    "exp_d": "Incorrect. Method (1) is wrong."
  },
  {
    "q_no": 16,
    "key": "D",
    "rate": "67%",
    "focus": "Differentiating Concentrated Hydrochloric vs Nitric Acid",
    "exp_a": "Incorrect. Na2CO3 gives colourless CO2 gas with both acids.",
    "exp_b": "Incorrect. AgNO3 precipitates white AgCl with HCl but not HNO3.",
    "exp_c": "Incorrect. (2) and (3) are both effective.",
    "exp_d": "Correct. Both (2) AgNO3(aq) and (3) copper metal distinguish the two acids: AgNO3(aq) forms a white precipitate of AgCl with conc. HCl but no precipitate with conc. HNO3; copper metal does NOT react with conc. HCl, but reacts vigorously with conc. HNO3 to form a blue solution and brown NO2 gas."
  },
  {
    "q_no": 17,
    "key": "C",
    "rate": "81%",
    "focus": "Reduction of Metal Oxides by Carbon Heating",
    "exp_a": "Incorrect. CuO is also reduced by carbon.",
    "exp_b": "Incorrect. Magnesium is more reactive than carbon; MgO cannot be reduced by carbon with a Bunsen burner.",
    "exp_c": "Correct. Both Lead(II) oxide (1) and Copper(II) oxide (3) are oxides of moderately unreactive metals below carbon in the reactivity series and can be easily reduced to metallic Pb and Cu by heating with carbon over a Bunsen flame. MgO (2) is too stable to be reduced.",
    "exp_d": "Incorrect. MgO cannot be reduced."
  },
  {
    "q_no": 18,
    "key": "B",
    "rate": "84%",
    "focus": "Properties of Esters vs Carboxylic Acids (Isomerism)",
    "exp_a": "Incorrect. Esters have low water solubility.",
    "exp_b": "Correct. Statement (2) is true: ethyl ethanoate (CH3COOCH2CH3, C4H8O2) and butanoic acid (CH3CH2CH2COOH, C4H8O2) are functional group isomers with the identical empirical formula C2H4O. Statement (1) is false (esters are sparingly soluble). Statement (3) is false (they belong to different homologous series).",
    "exp_c": "Incorrect. (1) is false.",
    "exp_d": "Incorrect. (3) is false."
  },
  {
    "q_no": 19,
    "key": "A",
    "rate": "70%",
    "focus": "Identifying Reducing Agents in Redox Reactions",
    "exp_a": "Correct. In (1), butane is oxidized by oxygen to CO2 and H2O, so butane acts as the reducing agent (statement 1 only).",
    "exp_b": "Incorrect. (2) is false.",
    "exp_c": "Incorrect. (3) is false.",
    "exp_d": "Incorrect. (2) and (3) are false."
  },
  {
    "q_no": 20,
    "key": "D",
    "rate": "49%",
    "focus": "Identification of Chemical Compounds via Physical & Chemical Properties",
    "exp_a": "Incorrect. Omits true statements.",
    "exp_b": "Incorrect. (2) is true.",
    "exp_c": "Incorrect. (1) is true.",
    "exp_d": "Correct. All three statements (1), (2), and (3) are chemically accurate."
  },
  {
    "q_no": 21,
    "key": "D",
    "rate": "53%",
    "focus": "Reactivity of Group II Elements & Thermal Stability of Nitrates",
    "exp_a": "Incorrect. Omits true statements.",
    "exp_b": "Incorrect. (2) is true.",
    "exp_c": "Incorrect. (1) is true.",
    "exp_d": "Correct. Statements (1), (2), and (3) are all correct regarding Group II alkaline earth metals and nitrate decomposition to oxide, brown NO2, and O2."
  },
  {
    "q_no": 22,
    "key": "C",
    "rate": "72%",
    "focus": "Intermolecular Forces & Hydrogen Bonding Effects",
    "exp_a": "Incorrect. (1) is false.",
    "exp_b": "Incorrect. (1) is false.",
    "exp_c": "Correct. Statements (2) and (3) are true: hydrogen bonding accounts for the high boiling point of ethanol and the high surface tension of water.",
    "exp_d": "Incorrect. (1) is false."
  },
  {
    "q_no": 23,
    "key": "D",
    "rate": "80%",
    "focus": "Properties of Carbon Monoxide vs Carbon Dioxide",
    "exp_a": "Incorrect. Both statements are false.",
    "exp_b": "Incorrect. Both statements are false.",
    "exp_c": "Incorrect. 1st statement is false.",
    "exp_d": "Correct. Both statements 1 and 2 are FALSE: CO2 is an acidic oxide (not neutral) and does not react with acids."
  },
  {
    "q_no": 24,
    "key": "A",
    "rate": "78%",
    "focus": "Reactivity Series: Copper vs Dilute Acids",
    "exp_a": "Correct. 1st statement is TRUE: copper does not react with dilute hydrochloric acid to produce hydrogen gas. 2nd statement is TRUE: copper is lower than hydrogen in the electrochemical / reactivity series and cannot reduce H+(aq), correctly explaining statement 1.",
    "exp_b": "Incorrect. Statement 2 is the exact scientific explanation of statement 1.",
    "exp_c": "Incorrect. Statement 1 is true.",
    "exp_d": "Incorrect. Both statements are true."
  },
  {
    "q_no": 25,
    "key": "C",
    "rate": "66%",
    "focus": "Initial Rate Calculations & Reaction Stoichiometry",
    "exp_a": "Incorrect. Inverted rate ratio.",
    "exp_b": "Incorrect. Omitted stoichiometric coefficient.",
    "exp_c": "Correct. Rate of formation of D is related to rate of disappearance of A by stoichiometry: Rate = (1/2) * (Delta[D]/Delta t) = 0.52 x 10^-4 mol dm^-3 s^-1.",
    "exp_d": "Incorrect. Arithmetic error."
  },
  {
    "q_no": 26,
    "key": "B",
    "rate": "69%",
    "focus": "Equilibrium Shifts: Temperature Effect on Exothermic Reactions",
    "exp_a": "Incorrect. Shift forward would increase Kc.",
    "exp_b": "Correct. For an exothermic reversible reaction (Delta H < 0), increasing temperature shifts equilibrium in the reverse (endothermic) direction according to Le Chatelier's principle, decreasing the equilibrium constant Kc.",
    "exp_c": "Incorrect. Catalyst does not change position of equilibrium.",
    "exp_d": "Incorrect. Pressure effect depends on gas moles."
  },
  {
    "q_no": 27,
    "key": "D",
    "rate": "78%",
    "focus": "Addition Reaction of Alkenes with Acidified Permanganate",
    "exp_a": "Incorrect. Forms a diol, not monool.",
    "exp_b": "Incorrect. Carboxylic acid formed only under cleavage.",
    "exp_c": "Incorrect. Alkane is not formed.",
    "exp_d": "Correct. Reaction of cyclohexene with cold dilute acidified KMnO4 oxidizes the alkene double bond to form cyclohexane-1,2-diol (a vicinal diol)."
  },
  {
    "q_no": 28,
    "key": "D",
    "rate": "66%",
    "focus": "Stereoisomerism: Enantiomers & Geometric Isomers",
    "exp_a": "Incorrect. Symmetrical molecule without chiral centres.",
    "exp_b": "Incorrect. No cis-trans isomerism.",
    "exp_c": "Incorrect. Lacks asymmetric carbon.",
    "exp_d": "Correct. 2,3-dichlorobutane contains 2 chiral carbons and exists as a meso compound and a pair of enantiomers (3 stereoisomers in total)."
  },
  {
    "q_no": 29,
    "key": "B",
    "rate": "50%",
    "focus": "Chemical Tests: Differentiating Alcohols, Aldehydes & Esters",
    "exp_a": "Incorrect. Reagents give ambiguous results.",
    "exp_b": "Correct. Using acidified K2Cr2O7 (oxidizes primary/secondary alcohols and aldehydes) and Tollens' reagent (specifically oxidizes aldehydes with silver mirror) uniquely differentiates the functional groups.",
    "exp_c": "Incorrect. Cannot distinguish primary from secondary alcohol.",
    "exp_d": "Incorrect. Ineffective test sequence."
  },
  {
    "q_no": 30,
    "key": "A",
    "rate": "75%",
    "focus": "Periodic Trends: Reactions of Period 3 Oxides with Acids and Bases",
    "exp_a": "Correct. Al2O3 is an amphoteric oxide that reacts with both dilute acids (Al2O3 + 6H+ -> 2Al^3+ + 3H2O) and strong alkalis (Al2O3 + 2OH- + 3H2O -> 2[Al(OH)4]^-).",
    "exp_b": "Incorrect. SiO2 does not react with dilute acids.",
    "exp_c": "Incorrect. P4O10 is strictly acidic.",
    "exp_d": "Incorrect. SO3 is strictly acidic."
  },
  {
    "q_no": 31,
    "key": "C",
    "rate": "58%",
    "focus": "Rate of Reaction & Catalytic Activation Energy",
    "exp_a": "Incorrect. Catalysts do not alter reactant kinetic energy.",
    "exp_b": "Incorrect. Frequency of total collisions is almost unchanged.",
    "exp_c": "Correct. A catalyst provides an alternative reaction mechanism with a lower activation energy, significantly increasing the fraction of collisions with energy >= Ea.",
    "exp_d": "Incorrect. Reaction enthalpy Delta H is unchanged."
  },
  {
    "q_no": 32,
    "key": "C",
    "rate": "74%",
    "focus": "Condensation Polymerization: Polyamides (Nylon-6,6)",
    "exp_a": "Incorrect. Dacron is a polyester.",
    "exp_b": "Incorrect. Polypropene is an addition polymer.",
    "exp_c": "Correct. Nylon-6,6 is synthesized by condensation polymerization of hexanedioic acid and hexane-1,6-diamine, forming repeating amide bonds with the elimination of water molecules.",
    "exp_d": "Incorrect. Perspex (PMMA) is an addition polymer."
  },
  {
    "q_no": 33,
    "key": "A",
    "rate": "81%",
    "focus": "Hydrolysis of Esters (Acid vs Alkaline Catalysis)",
    "exp_a": "Correct. Saponification (alkaline hydrolysis) of an ester with NaOH(aq) under reflux drives the reaction to completion by forming the resonance-stabilized carboxylate salt (irreversible).",
    "exp_b": "Incorrect. Acid hydrolysis is an equilibrium.",
    "exp_c": "Incorrect. Acid hydrolysis is reversible.",
    "exp_d": "Incorrect. Reversible under neutral conditions."
  },
  {
    "q_no": 34,
    "key": "D",
    "rate": "64%",
    "focus": "Structure & Synthesis of Aspirin",
    "exp_a": "Incorrect. (1) is true.",
    "exp_b": "Incorrect. (2) is true.",
    "exp_c": "Incorrect. (3) is true.",
    "exp_d": "Correct. All three statements (1), (2), and (3) are chemically correct regarding acetylsalicylic acid structure, synthesis from salicylic acid, and testing with FeCl3."
  },
  {
    "q_no": 35,
    "key": "B",
    "rate": "86%",
    "focus": "Properties of Ethanol vs Ethanoic Acid",
    "exp_a": "Incorrect. Statement 2 does not explain boiling point difference.",
    "exp_b": "Correct. Both statements are true: ethanoic acid has a higher boiling point than ethanol (statement 1 true) and ethanoic acid molecules form stable hydrogen-bonded dimers in pure liquid (statement 2 true), but dimer formation alone without comparing hydrogen bonding extents is an incomplete explanation.",
    "exp_c": "Incorrect. Statement 1 is true.",
    "exp_d": "Incorrect. Both statements are true."
  },
  {
    "q_no": 36,
    "key": "A",
    "rate": "72%",
    "focus": "Reactivity of Halogenoalkanes (SN1 vs SN2 Mechanisms)",
    "exp_a": "Correct. 1st statement is TRUE: 2-bromo-2-methylpropane hydrolyzes much faster with NaOH(aq) than 1-bromobutane. 2nd statement is TRUE: tertiary haloalkanes hydrolyze via an SN1 mechanism through a relatively stable tertiary carbocation intermediate (lower activation energy), correctly explaining statement 1.",
    "exp_b": "Incorrect. Statement 2 is the correct scientific explanation of statement 1.",
    "exp_c": "Incorrect. Statement 1 is true.",
    "exp_d": "Incorrect. Both statements are true."
  }
];
