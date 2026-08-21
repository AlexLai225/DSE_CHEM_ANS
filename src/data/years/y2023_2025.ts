import { ExamQuestion } from '../../types';

export const data2023: ExamQuestion[] = [
  {
    "q_no": 1,
    "key": "D",
    "rate": "87%",
    "focus": "Atomic Structure & Isotopic Notation (Number of Neutrons)",
    "exp_a": "Incorrect. Mass number is 35.",
    "exp_b": "Incorrect. Atomic number is 17 (protons).",
    "exp_c": "Incorrect. 17 electrons for neutral atom.",
    "exp_d": "Correct. In 35_17 Cl, atomic number Z = 17 (17 protons), mass number A = 35, and number of neutrons = 35 - 17 = 18."
  },
  {
    "q_no": 2,
    "key": "A",
    "rate": "79%",
    "focus": "Giant Metallic Structure vs Simple Molecular Substances",
    "exp_a": "Correct. Aluminium has a giant metallic lattice structure with delocalized mobile valence electrons, making it an excellent electrical conductor in the solid state at room temperature.",
    "exp_b": "Incorrect. Phosphorus (P4) has a simple molecular structure with no mobile charged particles.",
    "exp_c": "Incorrect. Silicon dioxide has a giant covalent structure and is an insulator.",
    "exp_d": "Incorrect. Argon is a monoatomic noble gas with zero electrical conductivity."
  },
  {
    "q_no": 3,
    "key": "B",
    "rate": "75%",
    "focus": "Reactivity of Group II Metals (Calcium with Water)",
    "exp_a": "Incorrect. Potassium reacts with an explosive lilac flame.",
    "exp_b": "Correct. Calcium reacts steadily with cold water: Ca(s) + 2H2O(l) -> Ca(OH)2(s/aq) + H2(g), giving effervescence of hydrogen gas and forming a cloudy white alkaline suspension of calcium hydroxide.",
    "exp_c": "Incorrect. Iron does not react with cold water.",
    "exp_d": "Incorrect. Silver does not react with water."
  },
  {
    "q_no": 4,
    "key": "C",
    "rate": "68%",
    "focus": "Flame Test Colours for Alkali & Alkaline Earth Metals",
    "exp_a": "Incorrect. Sodium produces a golden-yellow flame.",
    "exp_b": "Incorrect. Calcium produces a brick-red flame.",
    "exp_c": "Correct. Potassium salts produce a characteristic lilac / pale purple flame when heated in a non-luminous Bunsen flame.",
    "exp_d": "Incorrect. Copper produces a bluish-green flame."
  },
  {
    "q_no": 5,
    "key": "B",
    "rate": "71%",
    "focus": "Corrosion Prevention: Sacrificial Anodes in Marine Environments",
    "exp_a": "Incorrect. Copper accelerates corrosion via galvanic coupling.",
    "exp_b": "Correct. Zinc is higher than iron in the electrochemical series (more negative electrode potential); zinc preferentially oxidizes (Zn -> Zn^2+ + 2e-) and acts as a sacrificial anode, protecting the underground iron pipe from rusting.",
    "exp_c": "Incorrect. Tin provides only barrier protection and accelerates rusting if scratched.",
    "exp_d": "Incorrect. Lead is less reactive than iron."
  },
  {
    "q_no": 6,
    "key": "C",
    "rate": "82%",
    "focus": "pH Calculation for Monobasic Strong Acids",
    "exp_a": "Incorrect. 1.0 corresponds to 0.10 M acid.",
    "exp_b": "Incorrect. 1.3 is an arithmetic error.",
    "exp_c": "Correct. Nitric acid is a strong monobasic acid completely ionized in water: HNO3 -> H+ + NO3-. For 0.010 M HNO3, [H+] = 0.010 M. pH = -log(0.010) = 2.00.",
    "exp_d": "Incorrect. 3.0 corresponds to 0.0010 M acid."
  },
  {
    "q_no": 7,
    "key": "A",
    "rate": "65%",
    "focus": "Volumetric Analysis: Back Titration Calculations",
    "exp_a": "Correct. Moles of HCl added = 0.050 dm^3 * 0.50 M = 0.025 mol. Moles of NaOH used to neutralize unreacted acid = 0.020 dm^3 * 0.25 M = 0.0050 mol. Moles of HCl reacted with metal carbonate = 0.025 - 0.0050 = 0.020 mol. Moles of MCO3 = 0.020 / 2 = 0.010 mol. Molar mass of MCO3 = 1.00 g / 0.010 mol = 100.0 g mol^-1 (corresponding to CaCO3, where M = Ca = 40.1).",
    "exp_b": "Incorrect. Omitted unreacted acid calculation.",
    "exp_c": "Incorrect. Calculation arithmetic error.",
    "exp_d": "Incorrect. Inverted mole ratio."
  },
  {
    "q_no": 8,
    "key": "D",
    "rate": "78%",
    "focus": "Empirical Formula from Mass Percentage Composition",
    "exp_a": "Incorrect. CH3 gives 1:3 ratio.",
    "exp_b": "Incorrect. C2H5 gives 1:2.5 ratio.",
    "exp_c": "Incorrect. C3H7 gives 1:2.33 ratio.",
    "exp_d": "Correct. In 100 g of hydrocarbon: mass of C = 85.7 g, mass of H = 14.3 g. Moles of C = 85.7 / 12.0 = 7.14 mol; Moles of H = 14.3 / 1.0 = 14.3 mol. Ratio C : H = 7.14 : 14.3 = 1 : 2. Empirical formula is CH2."
  },
  {
    "q_no": 9,
    "key": "B",
    "rate": "84%",
    "focus": "Addition Reactions of Alkenes with Halogens (Bromination)",
    "exp_a": "Incorrect. Saturated alkanes require UV light.",
    "exp_b": "Correct. But-2-ene contains a reactive C=C double bond that rapidly undergoes electrophilic addition with bromine (Br2 in 1,1,1-trichloroethane) in the dark, decolorizing the orange bromine solution to form colourless 2,3-dibromobutane.",
    "exp_c": "Incorrect. Alkanols do not decolorize bromine.",
    "exp_d": "Incorrect. Carboxylic acids do not decolorize bromine."
  },
  {
    "q_no": 10,
    "key": "A",
    "rate": "72%",
    "focus": "IUPAC Nomenclature of Branched Alkanols",
    "exp_a": "Correct. Longest chain containing -OH is 4 carbons (butan-2-ol). Numbering from the end closest to the principal -OH group gives 3,3-dimethylbutan-2-ol.",
    "exp_b": "Incorrect. Inverted numbering locants.",
    "exp_c": "Incorrect. Incorrect parent chain selection.",
    "exp_d": "Incorrect. Numbered from methyl substituents instead of principal -OH."
  },
  {
    "q_no": 11,
    "key": "C",
    "rate": "59%",
    "focus": "Electrolysis: Preferential Discharge in Aqueous Electrolytes",
    "exp_a": "Incorrect. H+ discharged over Na+ at cathode.",
    "exp_b": "Incorrect. OH- discharged over SO4^2- at anode.",
    "exp_c": "Correct. In the electrolysis of dilute copper(II) chloride with platinum electrodes: Cu^2+(aq) is discharged at the cathode to deposit reddish-brown copper metal (Cu^2+ + 2e- -> Cu), while Cl^-(aq) / OH^-(aq) is discharged at the anode.",
    "exp_d": "Incorrect. Copper deposits at cathode, not anode."
  },
  {
    "q_no": 12,
    "key": "B",
    "rate": "67%",
    "focus": "Hess's Law: Enthalpy Change of Reaction from Enthalpies of Formation",
    "exp_a": "Incorrect. Arithmetic sign error.",
    "exp_b": "Correct. Enthalpy change Delta H = Sum Delta H_f(products) - Sum Delta H_f(reactants) = [2 * Delta H_f(CO2) + 3 * Delta H_f(H2O)] - Delta H_f(C2H5OH) = [2(-394) + 3(-286)] - (-277) = -788 - 858 + 277 = -1369 kJ mol^-1.",
    "exp_c": "Incorrect. Forgot factor of 3 for water.",
    "exp_d": "Incorrect. Subtracted products from reactants."
  },
  {
    "q_no": 13,
    "key": "D",
    "rate": "81%",
    "focus": "VSEPR Geometry & Bond Dipoles: Molecular Polarity",
    "exp_a": "Incorrect. Trigonal planar BF3 is non-polar.",
    "exp_b": "Incorrect. Linear CO2 is non-polar.",
    "exp_c": "Incorrect. Tetrahedral CH4 is non-polar.",
    "exp_d": "Correct. Water (H2O) has a bent / V-shaped molecular geometry with 2 bond pairs and 2 lone pairs on oxygen; the polar O-H bond dipoles do not cancel, giving a permanent net molecular dipole moment (polar molecule)."
  },
  {
    "q_no": 14,
    "key": "A",
    "rate": "73%",
    "focus": "Redox Reactions: Oxidizing Action of Acidified Dichromate",
    "exp_a": "Correct. Acidified potassium dichromate solution (K2Cr2O7(aq)) oxidizes primary alcohols to aldehydes/carboxylic acids, secondary alcohols to ketones, and Fe^2+ to Fe^3+, with the solution changing from orange (Cr2O7^2-) to green (Cr^3+).",
    "exp_b": "Incorrect. Tertiary alcohols resist oxidation with dichromate.",
    "exp_c": "Incorrect. Carboxylic acids cannot be further oxidized.",
    "exp_d": "Incorrect. Carbon dioxide is in maximum oxidation state."
  },
  {
    "q_no": 15,
    "key": "C",
    "rate": "62%",
    "focus": "Precipitation Tests: Identification of Cations (Zn2+ vs Al3+ vs Mg2+)",
    "exp_a": "Incorrect. (1) is false.",
    "exp_b": "Incorrect. (1) is false.",
    "exp_c": "Correct. Statements (2) and (3) are correct: adding excess aqueous ammonia redissolves the white precipitate of Zn(OH)2 to form [Zn(NH3)4]^2+ (2), while Al(OH)3 precipitate remains undissolved in excess aqueous ammonia (3).",
    "exp_d": "Incorrect. (1) is false."
  },
  {
    "q_no": 16,
    "key": "D",
    "rate": "55%",
    "focus": "Periodic Trends: Atomic Radius & Electronegativity in Period 3",
    "exp_a": "Incorrect. (1) is true.",
    "exp_b": "Incorrect. (2) is true.",
    "exp_c": "Incorrect. (3) is true.",
    "exp_d": "Correct. Statements (1), (2), and (3) are all correct: atomic radius decreases across Period 3 (1), electronegativity increases across Period 3 (2), and the nature of oxides changes from basic to acidic (3)."
  },
  {
    "q_no": 17,
    "key": "B",
    "rate": "72%",
    "focus": "Reactions and Esterification of Carboxylic Acids",
    "exp_a": "Incorrect. (1) is false.",
    "exp_b": "Correct. Statements (2) and (3) are correct: propanoic acid reacts with methanol under reflux with concentrated H2SO4 to form methyl propanoate ester with a sweet smell (2), and reacts with Na2CO3 to evolve CO2 gas (3).",
    "exp_c": "Incorrect. (1) is false.",
    "exp_d": "Incorrect. (1) is false."
  },
  {
    "q_no": 18,
    "key": "D",
    "rate": "64%",
    "focus": "Electrochemical Corrosion: Bimetallic Combinations",
    "exp_a": "Incorrect. Omits valid points.",
    "exp_b": "Incorrect. (2) is true.",
    "exp_c": "Incorrect. (1) is true.",
    "exp_d": "Correct. Statements (1), (2), and (3) are all correct: connecting iron to magnesium prevents iron corrosion (1), connecting iron to copper accelerates iron corrosion (2), and dissolved oxygen and water are both essential for rusting (3)."
  },
  {
    "q_no": 19,
    "key": "A",
    "rate": "68%",
    "focus": "Addition Polymerization of Substituted Vinyl Monomers",
    "exp_a": "Correct. Statements (1) and (2) are correct: poly(chloroethene) (PVC) is synthesized by the addition polymerization of chloroethene (1), and is widely used for insulating electrical cables and plumbing pipes (2).",
    "exp_b": "Incorrect. (3) is false.",
    "exp_c": "Incorrect. (3) is false.",
    "exp_d": "Incorrect. (3) is false."
  },
  {
    "q_no": 20,
    "key": "C",
    "rate": "79%",
    "focus": "Intermolecular Forces: Hydrogen Bonding in Hydrides",
    "exp_a": "Incorrect. (1) is false.",
    "exp_b": "Incorrect. (1) is false.",
    "exp_c": "Correct. Statements (2) and (3) are correct: NH3 has a higher boiling point than PH3 due to hydrogen bonding (2), and HF has a higher boiling point than HCl due to stronger hydrogen bonding (3).",
    "exp_d": "Incorrect. (1) is false."
  },
  {
    "q_no": 21,
    "key": "B",
    "rate": "70%",
    "focus": "Reactivity of Group VII Halogens (Displacement & Redox)",
    "exp_a": "Incorrect. (1) is false.",
    "exp_b": "Correct. Statements (2) and (3) are correct: chlorine displaces iodine from aqueous potassium iodide (Cl2 + 2KI -> 2KCl + I2, turning solution brown) (2), and aqueous iodine gives a characteristic blue-black colour with starch solution (3).",
    "exp_c": "Incorrect. (1) is false.",
    "exp_d": "Incorrect. (1) is false."
  },
  {
    "q_no": 22,
    "key": "A",
    "rate": "83%",
    "focus": "Hazard Warning Labels: Corrosive Substances",
    "exp_a": "Correct. Statement (1) only: Concentrated hydrochloric acid (12 M HCl) is highly corrosive to skin and eyes, requiring the Corrosive hazard warning label.",
    "exp_b": "Incorrect. (2) is false (not highly flammable).",
    "exp_c": "Incorrect. (3) is false (not explosive).",
    "exp_d": "Incorrect. (2) and (3) are false."
  },
  {
    "q_no": 23,
    "key": "A",
    "rate": "72%",
    "focus": "Reactivity Series: Extraction of Metals by Carbon Reduction",
    "exp_a": "Correct. 1st statement is TRUE: magnesium cannot be extracted from magnesium oxide by heating with carbon in a blast furnace. 2nd statement is TRUE: magnesium is higher than carbon in the reactivity series and has a greater affinity for oxygen than carbon, correctly explaining statement 1.",
    "exp_b": "Incorrect. Statement 2 is the exact scientific explanation of statement 1.",
    "exp_c": "Incorrect. Statement 1 is true.",
    "exp_d": "Incorrect. Both statements are true."
  },
  {
    "q_no": 24,
    "key": "C",
    "rate": "60%",
    "focus": "Electrical Conductivity of Solid vs Molten Ionic Compounds",
    "exp_a": "Incorrect. 1st statement is false: solid calcium chloride does not conduct electricity.",
    "exp_b": "Incorrect. 1st statement is false.",
    "exp_c": "Correct. 1st statement is FALSE: solid CaCl2 contains Ca^2+ and Cl^- ions held tightly in fixed lattice positions and cannot conduct electricity. 2nd statement is TRUE: molten CaCl2 contains mobile ions that move freely to carry electrical current.",
    "exp_d": "Incorrect. Statement 2 is true."
  },
  {
    "q_no": 25,
    "key": "B",
    "rate": "75%",
    "focus": "Chemical Kinetics: Reaction Rate Law & Orders of Reaction",
    "exp_a": "Incorrect. Inverted orders.",
    "exp_b": "Correct. Experimental data shows rate is first order with respect to [A] and first order with respect to [B]: Rate = k[A][B].",
    "exp_c": "Incorrect. Overestimates order of A.",
    "exp_d": "Incorrect. Zero order in B is incorrect."
  },
  {
    "q_no": 26,
    "key": "C",
    "rate": "65%",
    "focus": "Equilibrium Constant Expression & Units Calculation",
    "exp_a": "Incorrect. Inverted expression.",
    "exp_b": "Incorrect. Omitted exponent.",
    "exp_c": "Correct. For N2(g) + 3H2(g) <=> 2NH3(g), Kc = [NH3]^2 / ([N2][H2]^3). Unit = (M^2) / (M * M^3) = M^-2 = mol^-2 dm^6.",
    "exp_d": "Incorrect. Unit mismatch."
  },
  {
    "q_no": 27,
    "key": "A",
    "rate": "73%",
    "focus": "Electrophilic Addition of Hydrogen Halides (Markovnikov's Rule)",
    "exp_a": "Correct. Addition of HCl(g) to 2-methylpropene follows Markovnikov's rule: the proton adds to C1 to generate the more stable tertiary carbocation intermediate ((CH3)3C+), which reacts with Cl- to form 2-chloro-2-methylpropane as the major product.",
    "exp_b": "Incorrect. 1-chloro-2-methylpropane is the minor product.",
    "exp_c": "Incorrect. Saturated alkane is not formed.",
    "exp_d": "Incorrect. Dihaloalkane requires Cl2."
  },
  {
    "q_no": 28,
    "key": "D",
    "rate": "67%",
    "focus": "Stereoisomerism: Identifying Chiral Carbon Atoms",
    "exp_a": "Incorrect. Achiral molecule.",
    "exp_b": "Incorrect. Symmetrical molecule.",
    "exp_c": "Incorrect. Lacks asymmetric carbon.",
    "exp_d": "Correct. 2-chloropentane contains an asymmetric chiral carbon at C2 bonded to -H, -Cl, -CH3, and -CH2CH2CH3, exhibiting enantiomerism (optical isomerism)."
  },
  {
    "q_no": 29,
    "key": "B",
    "rate": "56%",
    "focus": "Organic Reaction Sequences: Nucleophilic Substitution & Oxidation",
    "exp_a": "Incorrect. Elimination occurs with ethanolic KOH.",
    "exp_b": "Correct. Hydrolysis of 1-bromopropane with aqueous NaOH forms propan-1-ol. Subsequent oxidation of propan-1-ol with acidified K2Cr2O7 under reflux yields propanoic acid.",
    "exp_c": "Incorrect. Wrong sequence.",
    "exp_d": "Incorrect. Produces an amine."
  },
  {
    "q_no": 30,
    "key": "C",
    "rate": "78%",
    "focus": "Periodic Trends: Reactions of Period 3 Chlorides with Water",
    "exp_a": "Incorrect. NaCl dissolves neutrally.",
    "exp_b": "Incorrect. MgCl2 forms mildly acidic solution.",
    "exp_c": "Correct. Phosphorus pentachloride (PCl5) hydrolyzes vigorously with water to form phosphoric acid and misty fumes of hydrogen chloride: PCl5(s) + 4H2O(l) -> H3PO4(aq) + 5HCl(aq), giving a strongly acidic solution (pH < 1).",
    "exp_d": "Incorrect. Hydrolysis is vigorous."
  },
  {
    "q_no": 31,
    "key": "D",
    "rate": "53%",
    "focus": "Chemical Kinetics: Collision Theory & Temperature",
    "exp_a": "Incorrect. (1) is true.",
    "exp_b": "Incorrect. (2) is true.",
    "exp_c": "Incorrect. (3) is true.",
    "exp_d": "Correct. Statements (1), (2), and (3) are all correct: raising temperature increases collision frequency (1), increases the fraction of particles with energy >= Ea (2), and increases the rate constant k (3)."
  },
  {
    "q_no": 32,
    "key": "C",
    "rate": "70%",
    "focus": "Condensation Polymers: Polyamides (Nylon-6,6 Synthesis)",
    "exp_a": "Incorrect. (1) is false.",
    "exp_b": "Incorrect. (1) is false.",
    "exp_c": "Correct. Statements (2) and (3) are correct: Nylon-6,6 contains amide linkages (-CONH-) formed from hexanedioic acid and hexane-1,6-diamine with elimination of water molecules.",
    "exp_d": "Incorrect. (1) is false."
  },
  {
    "q_no": 33,
    "key": "B",
    "rate": "66%",
    "focus": "Qualitative Analysis: Chemical Tests for Carbonyls & Alkenes",
    "exp_a": "Incorrect. (1) is false.",
    "exp_b": "Correct. Statements (2) and (3) are correct: acidified KMnO4 decolorizes with alkenes (2), and Tollens' reagent gives a silver mirror with aldehydes (3).",
    "exp_c": "Incorrect. (1) is false.",
    "exp_d": "Incorrect. (1) is false."
  },
  {
    "q_no": 34,
    "key": "A",
    "rate": "74%",
    "focus": "Synthesis & Chemical Reactions of Aspirin",
    "exp_a": "Correct. Statements (1) and (2) are correct: aspirin is synthesized by esterifying the phenolic -OH group of 2-hydroxybenzoic acid with ethanoic anhydride (1), and contains an ester group that undergoes alkaline hydrolysis (2).",
    "exp_b": "Incorrect. (3) is false.",
    "exp_c": "Incorrect. (3) is false.",
    "exp_d": "Incorrect. (3) is false."
  },
  {
    "q_no": 35,
    "key": "A",
    "rate": "72%",
    "focus": "Dynamic Equilibrium: Le Chatelier's Principle (Temperature & Exothermic Reactions)",
    "exp_a": "Correct. 1st statement is TRUE: increasing the temperature of an exothermic reversible reaction decreases the equilibrium yield of products. 2nd statement is TRUE: according to Le Chatelier's principle, increasing temperature shifts the equilibrium in the endothermic reverse direction to absorb heat, correctly explaining statement 1.",
    "exp_b": "Incorrect. Statement 2 is the exact scientific explanation of statement 1.",
    "exp_c": "Incorrect. Statement 1 is true.",
    "exp_d": "Incorrect. Both statements are true."
  },
  {
    "q_no": 36,
    "key": "B",
    "rate": "64%",
    "focus": "Stereoisomerism: Optical Activity of Enantiomers",
    "exp_a": "Incorrect. Statement 2 does not explain chemical reactivity in achiral environments.",
    "exp_b": "Correct. Both statements are true: enantiomers have identical chemical properties when reacting with achiral reagents (statement 1 true) and rotate plane-polarized light in opposite directions (statement 2 true), but optical rotation does not explain identical reactivity with achiral reagents.",
    "exp_c": "Incorrect. Statement 1 is true.",
    "exp_d": "Incorrect. Both statements are true."
  }
];

export const data2024: ExamQuestion[] = [
  {
    "q_no": 1,
    "key": "B",
    "rate": "86%",
    "focus": "Periodic Table: Electronic Configuration of Noble Gases",
    "exp_a": "Incorrect. Helium has electronic arrangement 2 (duplet).",
    "exp_b": "Correct. Argon (atomic number 18) has the electronic configuration 2,8,8 with a completely filled, stable outermost electron shell (octet).",
    "exp_c": "Incorrect. Sodium has electronic arrangement 2,8,1.",
    "exp_d": "Incorrect. Chlorine has electronic arrangement 2,8,7."
  },
  {
    "q_no": 2,
    "key": "C",
    "rate": "81%",
    "focus": "Giant Ionic Network vs Simple Molecular Structures",
    "exp_a": "Incorrect. H2O is a simple covalent liquid.",
    "exp_b": "Incorrect. CO2 is a simple covalent gas.",
    "exp_c": "Correct. Potassium fluoride (KF) consists of K+ cations and F- anions arranged alternately in a 3D giant ionic lattice held together by strong electrostatic attractions.",
    "exp_d": "Incorrect. CH4 is a simple covalent gas."
  },
  {
    "q_no": 3,
    "key": "A",
    "rate": "77%",
    "focus": "Reactivity Series: Metal Displacement Reactions",
    "exp_a": "Correct. Zinc is more reactive than copper (higher in the reactivity series); adding zinc granules to blue copper(II) sulphate solution causes a displacement reaction: Zn(s) + CuSO4(aq) -> ZnSO4(aq) + Cu(s), depositing reddish-brown copper and fading the blue colour.",
    "exp_b": "Incorrect. Silver cannot displace copper from CuSO4.",
    "exp_c": "Incorrect. Copper does not react with ZnSO4.",
    "exp_d": "Incorrect. Gold cannot displace copper."
  },
  {
    "q_no": 4,
    "key": "D",
    "rate": "69%",
    "focus": "Flame Test Identification of Calcium Salts",
    "exp_a": "Incorrect. Golden-yellow flame is characteristic of sodium.",
    "exp_b": "Incorrect. Lilac flame is characteristic of potassium.",
    "exp_c": "Incorrect. Bluish-green flame is characteristic of copper.",
    "exp_d": "Correct. Calcium compounds produce a characteristic brick-red flame when introduced into a non-luminous Bunsen burner flame."
  },
  {
    "q_no": 5,
    "key": "C",
    "rate": "73%",
    "focus": "Corrosion Protection: Galvanizing vs Tin Plating",
    "exp_a": "Incorrect. Copper accelerates rusting.",
    "exp_b": "Incorrect. Tin accelerates rusting once scratched.",
    "exp_c": "Correct. Galvanized iron is steel coated with zinc. Because zinc is more reactive than iron, even when the zinc coating is scratched, zinc acts as a sacrificial anode and oxidizes preferentially (Zn -> Zn^2+ + 2e-), continuing to protect the exposed iron from rusting.",
    "exp_d": "Incorrect. Lead is less reactive than iron."
  },
  {
    "q_no": 6,
    "key": "B",
    "rate": "80%",
    "focus": "pH Calculation of Strong Monobasic Acid",
    "exp_a": "Incorrect. 0.10 M HCl has pH = 1.0.",
    "exp_b": "Correct. Hydrochloric acid is a strong acid completely ionized in water: HCl -> H+ + Cl-. For 0.0010 M HCl, [H+] = 1.0 x 10^-3 M. pH = -log(1.0 x 10^-3) = 3.00.",
    "exp_c": "Incorrect. 4.0 corresponds to 0.00010 M acid.",
    "exp_d": "Incorrect. 7.0 is neutral."
  },
  {
    "q_no": 7,
    "key": "A",
    "rate": "67%",
    "focus": "Stoichiometry & Titration of Dibasic Acids",
    "exp_a": "Correct. Reaction: H2C2O4 + 2NaOH -> Na2C2O4 + 2H2O. Moles of H2C2O4 = 0.0250 dm^3 * 0.050 M = 1.25 x 10^-3 mol. Moles of NaOH required = 2 * (1.25 x 10^-3) = 2.50 x 10^-3 mol. Volume of 0.100 M NaOH = (2.50 x 10^-3) / 0.100 = 0.0250 dm^3 = 25.0 cm^3.",
    "exp_b": "Incorrect. Forgot factor of 2 in mole ratio (12.5 cm^3).",
    "exp_c": "Incorrect. Arithmetic calculation error.",
    "exp_d": "Incorrect. Multiplied volume incorrectly."
  },
  {
    "q_no": 8,
    "key": "C",
    "rate": "74%",
    "focus": "Empirical Formula from Combustion Analysis (Ethene / Propene)",
    "exp_a": "Incorrect. CH3 gives 1:3 ratio.",
    "exp_b": "Incorrect. C2H3 gives 1:1.5 ratio.",
    "exp_c": "Correct. Moles of C = 4.40 g / 44.0 g mol^-1 = 0.100 mol. Moles of H = 2 * (1.80 g / 18.0 g mol^-1) = 0.200 mol. Mole ratio C : H = 0.100 : 0.200 = 1 : 2. Empirical formula is CH2.",
    "exp_d": "Incorrect. C3H8 gives 1:2.67 ratio."
  },
  {
    "q_no": 9,
    "key": "D",
    "rate": "83%",
    "focus": "Electrophilic Addition of Bromine to Alkenes",
    "exp_a": "Incorrect. Cyclohexane is saturated and does not react.",
    "exp_b": "Incorrect. Benzene does not decolorize bromine water.",
    "exp_c": "Incorrect. Hexanoic acid is saturated.",
    "exp_d": "Correct. Cyclohexene contains an unsaturated C=C double bond that undergoes electrophilic addition with aqueous bromine, rapidly decolorizing the orange bromine solution to form colourless 1,2-dibromocyclohexane."
  },
  {
    "q_no": 10,
    "key": "A",
    "rate": "71%",
    "focus": "IUPAC Nomenclature of Branched Alkenes",
    "exp_a": "Correct. Longest chain containing C=C has 5 carbons (pent-2-ene). Numbering from the right gives the C=C double bond at position 2 and methyl at C4, giving 4-methylpent-2-ene.",
    "exp_b": "Incorrect. Inverted numbering locants.",
    "exp_c": "Incorrect. Numbered from substituent.",
    "exp_d": "Incorrect. Incorrect parent chain name."
  },
  {
    "q_no": 11,
    "key": "B",
    "rate": "62%",
    "focus": "Electrolysis of Aqueous Copper(II) Sulphate with Inert Electrodes",
    "exp_a": "Incorrect. H2 is evolved only if Cu2+ is depleted.",
    "exp_b": "Correct. At the cathode, Cu^2+(aq) ions are preferentially discharged to deposit reddish-brown copper metal: Cu^2+(aq) + 2e- -> Cu(s). At the anode, water/OH- is oxidized to evolve colourless oxygen gas: 2H2O(l) -> O2(g) + 4H+(aq) + 4e-.",
    "exp_c": "Incorrect. SO4^2- is not discharged.",
    "exp_d": "Incorrect. Platinum anode does not dissolve."
  },
  {
    "q_no": 12,
    "key": "C",
    "rate": "69%",
    "focus": "Standard Enthalpy of Neutralization: Strong vs Weak Acids",
    "exp_a": "Incorrect. Strong acid + strong base Delta H is approx -57.3 kJ mol^-1.",
    "exp_b": "Incorrect. Weak acid neutralization evolves less heat (Delta H less negative).",
    "exp_c": "Correct. Neutralization of a strong acid with a strong base (e.g. HCl + NaOH) has Delta H ≈ -57.3 kJ mol^-1 because both are fully ionized. Neutralizing a weak acid (e.g. CH3COOH) with NaOH evolves less heat (Delta H ≈ -55.2 kJ mol^-1) because some energy is absorbed to completely ionize the weak acid molecules.",
    "exp_d": "Incorrect. Exothermic reactions have negative Delta H."
  },
  {
    "q_no": 13,
    "key": "A",
    "rate": "78%",
    "focus": "VSEPR Shapes & Molecular Dipoles (Linear Molecules)",
    "exp_a": "Correct. Carbon dioxide (CO2) has 2 double bond pairs and 0 lone pairs on carbon in a linear shape (180° bond angle); the two equal and oppositely directed polar C=O bond dipoles cancel out symmetrically, giving a non-polar molecule with zero net dipole moment.",
    "exp_b": "Incorrect. SO2 is bent and polar.",
    "exp_c": "Incorrect. H2S is bent and polar.",
    "exp_d": "Incorrect. NH3 is pyramidal and polar."
  },
  {
    "q_no": 14,
    "key": "D",
    "rate": "75%",
    "focus": "Redox Reactions: Oxidizing Action of Acidified Permanganate",
    "exp_a": "Incorrect. Turns orange dichromate green.",
    "exp_b": "Incorrect. Bleaching agent.",
    "exp_c": "Incorrect. Non-oxidizing.",
    "exp_d": "Correct. Acidified potassium permanganate solution (KMnO4(aq)) is a powerful oxidizing agent that is reduced from purple MnO4^- to colourless Mn^2+(aq) by reducing agents such as Fe^2+, SO3^2-, and alkenes."
  },
  {
    "q_no": 15,
    "key": "B",
    "rate": "64%",
    "focus": "Qualitative Analysis: Distinguishing Chloride and Bromide Anions",
    "exp_a": "Incorrect. Both form white/cream precipitates.",
    "exp_b": "Correct. Adding acidified AgNO3(aq) precipitates white AgCl from chloride solutions and cream-coloured AgBr from bromide solutions. Adding dilute aqueous ammonia dissolves AgCl completely to form a colourless solution of [Ag(NH3)2]+, while AgBr remains undissolved (only dissolving in concentrated ammonia).",
    "exp_c": "Incorrect. Dilute acid produces no visible change with either anion.",
    "exp_d": "Incorrect. Limewater is used for carbonates."
  },
  {
    "q_no": 16,
    "key": "A",
    "rate": "70%",
    "focus": "Periodic Trends: First Ionization Energy Across Period 3",
    "exp_a": "Correct. First ionization energy generally increases across Period 3 from Na to Ar due to increasing nuclear charge and constant electron shielding, pulling valence electrons more tightly to the nucleus.",
    "exp_b": "Incorrect. Atomic radius decreases across Period 3.",
    "exp_c": "Incorrect. Metallic character decreases across Period 3.",
    "exp_d": "Incorrect. Reactivity with water does not increase across Period 3."
  },
  {
    "q_no": 17,
    "key": "C",
    "rate": "72%",
    "focus": "Properties & Reactions of Carboxylic Acids (Ethanoic Acid)",
    "exp_a": "Incorrect. (1) is false.",
    "exp_b": "Incorrect. (1) is false.",
    "exp_c": "Correct. Statements (2) and (3) are correct: ethanoic acid reacts with NaHCO3 to evolve CO2 gas with effervescence (2), and undergoes esterification with ethanol under reflux with concentrated H2SO4 to form ethyl ethanoate ester (3).",
    "exp_d": "Incorrect. (1) is false."
  },
  {
    "q_no": 18,
    "key": "B",
    "rate": "65%",
    "focus": "Corrosion of Iron: Acceleration by Electrolytes & Less Reactive Metals",
    "exp_a": "Incorrect. (1) is false.",
    "exp_b": "Correct. Statements (2) and (3) are correct: rusting occurs faster in sea water than pure water due to high ion conductivity (2), and connecting iron to a copper wire accelerates iron rusting via galvanic coupling (3).",
    "exp_c": "Incorrect. (1) is false.",
    "exp_d": "Incorrect. (1) is false."
  },
  {
    "q_no": 19,
    "key": "D",
    "rate": "60%",
    "focus": "Addition Polymers: Polypropene Structure & Properties",
    "exp_a": "Incorrect. Omits valid points.",
    "exp_b": "Incorrect. (2) is true.",
    "exp_c": "Incorrect. (1) is true.",
    "exp_d": "Correct. Statements (1), (2), and (3) are all correct: polypropene is formed by the addition polymerization of propene (1), is a thermoplastic that softens on heating (2), and contains repeating -[CH2-CH(CH3)]- units (3)."
  },
  {
    "q_no": 20,
    "key": "A",
    "rate": "71%",
    "focus": "Intermolecular Forces: Hydrogen Bonding in Alcohols vs Ethers",
    "exp_a": "Correct. Statements (1) and (2) are correct: ethanol (CH3CH2OH) forms intermolecular hydrogen bonds with adjacent ethanol molecules (1), giving it a significantly higher boiling point (+78 °C) than its functional group isomer methoxymethane (CH3OCH3, b.p. -24 °C) which has only dipole-dipole forces (2).",
    "exp_b": "Incorrect. (3) is false.",
    "exp_c": "Incorrect. (3) is false.",
    "exp_d": "Incorrect. (3) is false."
  },
  {
    "q_no": 21,
    "key": "C",
    "rate": "78%",
    "focus": "Reactivity of Group VII Halogens: Oxidizing Strengths",
    "exp_a": "Incorrect. (1) is false.",
    "exp_b": "Incorrect. (1) is false.",
    "exp_c": "Correct. Statements (2) and (3) are correct: chlorine is a stronger oxidizing agent than bromine and displaces bromide from aqueous NaBr (2), and bromine is a stronger oxidizing agent than iodine and displaces iodide from aqueous NaI (3).",
    "exp_d": "Incorrect. (1) is false."
  },
  {
    "q_no": 22,
    "key": "B",
    "rate": "84%",
    "focus": "Hazard Warning Labels: Flammable Organic Solvents",
    "exp_a": "Incorrect. (1) only is incomplete.",
    "exp_b": "Correct. Statements (1) and (2) are correct: ethanol is a volatile, flammable liquid that readily catches fire, requiring the Flammable hazard label (1), and is harmful if swallowed in large quantities (2).",
    "exp_c": "Incorrect. (3) is false (not corrosive).",
    "exp_d": "Incorrect. (3) is false."
  },
  {
    "q_no": 23,
    "key": "A",
    "rate": "73%",
    "focus": "Reactivity Series: Extraction of Aluminium by Electrolysis",
    "exp_a": "Correct. 1st statement is TRUE: aluminium cannot be extracted from bauxite by heating with carbon in a blast furnace. 2nd statement is TRUE: aluminium is higher than carbon in the reactivity series and forms extremely strong bonds with oxygen, requiring extraction by electrolysis of molten cryolite/alumina, correctly explaining statement 1.",
    "exp_b": "Incorrect. Statement 2 is the exact scientific explanation of statement 1.",
    "exp_c": "Incorrect. Statement 1 is true.",
    "exp_d": "Incorrect. Both statements are true."
  },
  {
    "q_no": 24,
    "key": "C",
    "rate": "62%",
    "focus": "Structure & Electrical Conductivity of Solid vs Aqueous Copper(II) Sulphate",
    "exp_a": "Incorrect. 1st statement is false.",
    "exp_b": "Incorrect. 1st statement is false.",
    "exp_c": "Correct. 1st statement is FALSE: solid anhydrous CuSO4 cannot conduct electricity because Cu^2+ and SO4^2- ions are held rigidly in the ionic crystal lattice. 2nd statement is TRUE: aqueous CuSO4 contains mobile Cu^2+(aq) and SO4^2-(aq) ions that move freely to conduct electricity.",
    "exp_d": "Incorrect. Statement 2 is true."
  },
  {
    "q_no": 25,
    "key": "D",
    "rate": "74%",
    "focus": "Chemical Kinetics: Reaction Rate Equation & Concentration Effect",
    "exp_a": "Incorrect. Inverted rate order.",
    "exp_b": "Incorrect. Overestimates order.",
    "exp_c": "Incorrect. Underestimates order.",
    "exp_d": "Correct. Initial rate data analysis confirms rate is proportional to [A]^2: Rate = k[A]^2, with overall order = 2."
  },
  {
    "q_no": 26,
    "key": "B",
    "rate": "68%",
    "focus": "Chemical Equilibrium: Effect of Temperature on Kc (Endothermic)",
    "exp_a": "Incorrect. Shift to left would decrease Kc.",
    "exp_b": "Correct. For an endothermic reversible reaction (Delta H > 0), raising the temperature shifts the equilibrium position to the right (forward direction) to absorb heat according to Le Chatelier's principle, increasing the equilibrium constant Kc.",
    "exp_c": "Incorrect. Catalyst does not change Kc.",
    "exp_d": "Incorrect. Pressure effect depends on gas stoichiometry."
  },
  {
    "q_no": 27,
    "key": "C",
    "rate": "76%",
    "focus": "Addition Reactions of Alkenes: Hydration to Alcohols",
    "exp_a": "Incorrect. Minor product.",
    "exp_b": "Incorrect. Diol formed with cold KMnO4.",
    "exp_c": "Correct. Industrial hydration of but-1-ene with steam in the presence of concentrated H3PO4 catalyst follows Markovnikov's rule to produce butan-2-ol as the major product.",
    "exp_d": "Incorrect. Haloalkane formed with HX."
  },
  {
    "q_no": 28,
    "key": "A",
    "rate": "65%",
    "focus": "Chirality & Enantiomerism in Organic Compounds",
    "exp_a": "Correct. 2-hydroxypropanoic acid (lactic acid, CH3-CH(OH)-COOH) contains a chiral carbon atom at C2 bonded to 4 different groups (-H, -OH, -CH3, -COOH), exhibiting optical activity (a pair of enantiomers).",
    "exp_b": "Incorrect. Achiral molecule.",
    "exp_c": "Incorrect. Symmetrical molecule.",
    "exp_d": "Incorrect. Lacks asymmetric centre."
  },
  {
    "q_no": 29,
    "key": "D",
    "rate": "57%",
    "focus": "Nucleophilic Substitution of Haloalkanes with Aqueous Cyanide",
    "exp_a": "Incorrect. Elimination occurs with ethanolic KOH.",
    "exp_b": "Incorrect. Forms an alcohol with NaOH(aq).",
    "exp_c": "Incorrect. Forms an amine with NH3.",
    "exp_d": "Correct. Heating 1-chloropropane with aqueous ethanolic potassium cyanide (KCN) undergoes nucleophilic substitution to form butanenitrile (CH3CH2CH2CN), extending the carbon chain by one carbon atom."
  },
  {
    "q_no": 30,
    "key": "B",
    "rate": "80%",
    "focus": "Periodic Trends: Acid-Base Nature of Period 3 Oxides (SO3)",
    "exp_a": "Incorrect. Na2O is basic.",
    "exp_b": "Correct. Sulphur trioxide (SO3) is a strongly acidic non-metal oxide that reacts vigorously with water to form sulphuric acid: SO3(g) + H2O(l) -> H2SO4(aq), giving an aqueous solution with a very low pH (pH < 1).",
    "exp_c": "Incorrect. Al2O3 is amphoteric and insoluble in water.",
    "exp_d": "Incorrect. MgO is basic."
  },
  {
    "q_no": 31,
    "key": "A",
    "rate": "64%",
    "focus": "Chemical Kinetics: Catalyst Effect on Reaction Pathway",
    "exp_a": "Correct. A catalyst increases the rate of reaction by providing an alternative reaction mechanism with a lower activation energy, thereby increasing the proportion of reactant particles with kinetic energy equal to or greater than the activation energy (Ea).",
    "exp_b": "Incorrect. Catalyst does not alter Delta H.",
    "exp_c": "Incorrect. Catalyst increases both forward and reverse rates equally.",
    "exp_d": "Incorrect. Catalyst does not change equilibrium constant Kc."
  },
  {
    "q_no": 32,
    "key": "C",
    "rate": "72%",
    "focus": "Condensation Polymerization: Monomer Pairing in Nylon-6,6",
    "exp_a": "Incorrect. (1) is false.",
    "exp_b": "Incorrect. (1) is false.",
    "exp_c": "Correct. Statements (2) and (3) are correct: Nylon-6,6 is synthesized by condensation polymerization of hexanedioic acid and hexane-1,6-diamine (2), forming repeating amide linkages (-CONH-) with the elimination of water molecules (3).",
    "exp_d": "Incorrect. (1) is false."
  },
  {
    "q_no": 33,
    "key": "D",
    "rate": "68%",
    "focus": "Qualitative Analysis: Chemical Tests for Carbonyls & Aldehydes",
    "exp_a": "Incorrect. (1) is true.",
    "exp_b": "Incorrect. (2) is true.",
    "exp_c": "Incorrect. (3) is true.",
    "exp_d": "Correct. Statements (1), (2), and (3) are all correct: both aldehydes and ketones form orange precipitates with 2,4-DNP (1), aldehydes form a silver mirror with Tollens' reagent (2), and aldehydes reduce Fehling's solution to red Cu2O precipitate (3)."
  },
  {
    "q_no": 34,
    "key": "B",
    "rate": "75%",
    "focus": "Structure, Synthesis & Hydrolysis of Aspirin",
    "exp_a": "Incorrect. (1) is false.",
    "exp_b": "Correct. Statements (2) and (3) are correct: aspirin contains a carboxylic acid group that effervesces with Na2CO3(aq) (2), and undergoes alkaline hydrolysis to sodium salicylate and sodium ethanoate (3).",
    "exp_c": "Incorrect. (1) is false.",
    "exp_d": "Incorrect. (1) is false."
  },
  {
    "q_no": 35,
    "key": "A",
    "rate": "71%",
    "focus": "Dynamic Equilibrium: Le Chatelier's Principle & Catalyst Effects",
    "exp_a": "Correct. 1st statement is TRUE: adding a catalyst to a chemical equilibrium mixture increases the rate of reaching equilibrium without altering the equilibrium position. 2nd statement is TRUE: a catalyst lowers the activation energy of both forward and reverse reactions by the exact same amount, correctly explaining statement 1.",
    "exp_b": "Incorrect. Statement 2 is the exact scientific explanation of statement 1.",
    "exp_c": "Incorrect. Statement 1 is true.",
    "exp_d": "Incorrect. Both statements are true."
  },
  {
    "q_no": 36,
    "key": "C",
    "rate": "62%",
    "focus": "Geometrical Isomerism: Structural Criteria in Alkenes",
    "exp_a": "Incorrect. 1st statement is false.",
    "exp_b": "Incorrect. 1st statement is false.",
    "exp_c": "Correct. 1st statement is FALSE: 2-methylbut-2-ene ((CH3)2C=CHCH3) has two identical methyl groups attached to C2, so it CANNOT exhibit cis-trans isomerism. 2nd statement is TRUE: the molecule contains a carbon-carbon double bond with restricted rotation.",
    "exp_d": "Incorrect. Statement 2 is true."
  }
];

export const data2025: ExamQuestion[] = [
  {
    "q_no": 1,
    "key": "A",
    "rate": "88%",
    "focus": "Atomic Structure: Isotopic Notation & Subatomic Particles",
    "exp_a": "Correct. For potassium-39 (39_19 K), atomic number Z = 19 (19 protons), mass number A = 39, and number of neutrons = 39 - 19 = 20.",
    "exp_b": "Incorrect. Protons = 19, not 20.",
    "exp_c": "Incorrect. Mass number is 39.",
    "exp_d": "Incorrect. Electrons = 19 for neutral atom."
  },
  {
    "q_no": 2,
    "key": "D",
    "rate": "82%",
    "focus": "Physical Properties & Structures: Giant Metallic vs Giant Covalent",
    "exp_a": "Incorrect. Silicon dioxide is a giant covalent insulator.",
    "exp_b": "Incorrect. Diamond is an electrical insulator.",
    "exp_c": "Incorrect. Sulphur (S8) is a simple molecular insulator.",
    "exp_d": "Correct. Copper has a giant metallic lattice structure with a sea of delocalized electrons that move freely under an applied potential difference, giving it high electrical and thermal conductivity."
  },
  {
    "q_no": 3,
    "key": "C",
    "rate": "76%",
    "focus": "Reactivity of Group I Metals (Sodium with Water)",
    "exp_a": "Incorrect. Potassium burns with a lilac flame.",
    "exp_b": "Incorrect. Magnesium reacts very slowly with cold water.",
    "exp_c": "Correct. Sodium reacts vigorously with cold water: 2Na(s) + 2H2O(l) -> 2NaOH(aq) + H2(g), melting into a silvery ball that darts across the water surface, giving off hydrogen gas and forming an alkaline solution.",
    "exp_d": "Incorrect. Copper does not react with cold water."
  },
  {
    "q_no": 4,
    "key": "B",
    "rate": "70%",
    "focus": "Flame Test Colours for Alkali Metal Cations",
    "exp_a": "Incorrect. Potassium gives a lilac flame.",
    "exp_b": "Correct. Sodium compounds produce an intense, persistent golden-yellow flame when introduced into a non-luminous Bunsen burner flame.",
    "exp_c": "Incorrect. Calcium gives a brick-red flame.",
    "exp_d": "Incorrect. Copper gives a bluish-green flame."
  },
  {
    "q_no": 5,
    "key": "A",
    "rate": "74%",
    "focus": "Corrosion Prevention: Sacrificial Protection of Steel Structures",
    "exp_a": "Correct. Attaching blocks of magnesium or zinc (metals higher than iron in the electrochemical series) to steel offshore platforms provides sacrificial protection: the sacrificial anode oxidizes preferentially (Mg -> Mg^2+ + 2e-), supplying electrons to the steel and preventing iron oxidation.",
    "exp_b": "Incorrect. Copper accelerates steel corrosion via galvanic action.",
    "exp_c": "Incorrect. Tin accelerates rusting if scratched.",
    "exp_d": "Incorrect. Lead is less reactive than iron."
  },
  {
    "q_no": 6,
    "key": "C",
    "rate": "81%",
    "focus": "pH Calculation of Monobasic Strong Acids",
    "exp_a": "Incorrect. 1.0 corresponds to 0.10 M acid.",
    "exp_b": "Incorrect. 1.5 is an arithmetic error.",
    "exp_c": "Correct. Hydrochloric acid is a strong acid that completely ionizes: HCl -> H+ + Cl-. For 0.010 M HCl, [H+] = 1.0 x 10^-2 M. pH = -log(1.0 x 10^-2) = 2.00.",
    "exp_d": "Incorrect. 3.0 corresponds to 0.0010 M acid."
  },
  {
    "q_no": 7,
    "key": "B",
    "rate": "68%",
    "focus": "Volumetric Analysis: Titration of Carbonate with Standard Acid",
    "exp_a": "Incorrect. Calculation arithmetic error.",
    "exp_b": "Correct. Reaction: Na2CO3 + 2HCl -> 2NaCl + H2O + CO2. Moles of HCl = 0.0200 dm^3 * 0.100 M = 2.00 x 10^-3 mol. Moles of Na2CO3 = (2.00 x 10^-3) / 2 = 1.00 x 10^-3 mol. Mass of Na2CO3 = 1.00 x 10^-3 mol * 106.0 g mol^-1 = 0.106 g.",
    "exp_c": "Incorrect. Forgot factor of 2 in mole ratio.",
    "exp_d": "Incorrect. Multiplied by 2 instead of dividing."
  },
  {
    "q_no": 8,
    "key": "D",
    "rate": "77%",
    "focus": "Empirical & Molecular Formula Determination of Hydrocarbons",
    "exp_a": "Incorrect. CH2 is an empirical formula.",
    "exp_b": "Incorrect. C2H4 has molar mass 28.0 g mol^-1.",
    "exp_c": "Incorrect. C3H6 has molar mass 42.0 g mol^-1.",
    "exp_d": "Correct. Empirical formula CH2 has empirical formula mass = 14.0 g mol^-1. Given molar mass = 70.0 g mol^-1, n = 70.0 / 14.0 = 5. Molecular formula is (CH2)5 = C5H10."
  },
  {
    "q_no": 9,
    "key": "A",
    "rate": "85%",
    "focus": "Addition Reactions of Alkenes with Halogens (Bromine Water Test)",
    "exp_a": "Correct. Pent-2-ene contains a reactive carbon-carbon double bond (C=C) that rapidly undergoes electrophilic addition with bromine water (Br2(aq)), causing the orange-brown solution to become completely colourless at room temperature.",
    "exp_b": "Incorrect. Pentane is saturated and does not react in the dark.",
    "exp_c": "Incorrect. Pentanoic acid does not decolorize bromine water.",
    "exp_d": "Incorrect. Pentan-1-ol does not decolorize bromine water."
  },
  {
    "q_no": 10,
    "key": "C",
    "rate": "72%",
    "focus": "IUPAC Nomenclature of Branched Alkenes",
    "exp_a": "Incorrect. Inverted numbering locants.",
    "exp_b": "Incorrect. Numbered from substituent instead of C=C.",
    "exp_c": "Correct. Longest chain containing C=C has 5 carbons (pent-1-ene). Numbering from the double-bonded end gives the C=C bond at C1 and methyl group at C3, giving 3-methylpent-1-ene.",
    "exp_d": "Incorrect. Incorrect root name."
  },
  {
    "q_no": 11,
    "key": "B",
    "rate": "63%",
    "focus": "Electrolysis: Preferential Discharge in Aqueous Electrolytes",
    "exp_a": "Incorrect. Oxygen is evolved at anode in dilute solutions.",
    "exp_b": "Correct. In the electrolysis of concentrated aqueous sodium chloride (brine) with inert carbon electrodes: chloride ions (Cl-) are preferentially discharged at the anode to produce chlorine gas (2Cl- -> Cl2 + 2e-), and H+ ions are discharged at the cathode to produce hydrogen gas (2H+ + 2e- -> H2).",
    "exp_c": "Incorrect. Sodium metal is NOT produced in aqueous solution.",
    "exp_d": "Incorrect. Hydroxide ions remain in solution."
  },
  {
    "q_no": 12,
    "key": "A",
    "rate": "70%",
    "focus": "Hess's Law: Enthalpy Change of Formation Calculations",
    "exp_a": "Correct. Formation equation: C(s) + 2H2(g) -> CH4(g). By Hess's Law: Delta H_f = Delta H_c(C) + 2 * Delta H_c(H2) - Delta H_c(CH4) = (-394) + 2(-286) - (-890) = -394 - 572 + 890 = -76 kJ mol^-1.",
    "exp_b": "Incorrect. Sign error (+76 kJ mol^-1).",
    "exp_c": "Incorrect. Forgot factor of 2 for hydrogen.",
    "exp_d": "Incorrect. Subtracted reactants from products."
  },
  {
    "q_no": 13,
    "key": "C",
    "rate": "79%",
    "focus": "VSEPR Shapes: Symmetrical Non-Polar Tetrahedral Molecules",
    "exp_a": "Incorrect. CHCl3 is polar due to asymmetric C-H and C-Cl dipoles.",
    "exp_b": "Incorrect. CH2Cl2 is polar.",
    "exp_c": "Correct. Tetrachloromethane (CCl4) has a symmetrical regular tetrahedral geometry with 4 identical polar C-Cl bonds; the four bond dipoles cancel out symmetrically, giving a non-polar molecule with zero net dipole moment.",
    "exp_d": "Incorrect. CH3Cl is polar."
  },
  {
    "q_no": 14,
    "key": "B",
    "rate": "74%",
    "focus": "Redox Reactions: Reducing Action of Iron(II) Ions",
    "exp_a": "Incorrect. Turns orange dichromate green.",
    "exp_b": "Correct. Iron(II) ions (Fe^2+(aq)) act as a reducing agent and reduce purple acidified potassium permanganate solution (KMnO4(aq)) to colourless manganese(II) ions (Mn^2+(aq)), while Fe^2+ is oxidized to yellow-brown Fe^3+.",
    "exp_c": "Incorrect. CO2 does not react.",
    "exp_d": "Incorrect. Oxygen is an oxidant."
  },
  {
    "q_no": 15,
    "key": "D",
    "rate": "66%",
    "focus": "Qualitative Analysis: Precipitation Tests for Sulphate Anions",
    "exp_a": "Incorrect. Acidified AgNO3 is used for halides.",
    "exp_b": "Incorrect. Dilute acid alone gives no precipitate with sulphate.",
    "exp_c": "Incorrect. Limewater is used for CO2/carbonates.",
    "exp_d": "Correct. Adding acidified barium chloride solution (BaCl2(aq) acidified with dilute HCl) to a sulphate-containing solution forms an insoluble dense white precipitate of barium sulphate: Ba^2+(aq) + SO4^2-(aq) -> BaSO4(s)."
  },
  {
    "q_no": 16,
    "key": "A",
    "rate": "71%",
    "focus": "Periodic Trends: Atomic Radius & Ionization Energy Across Period 3",
    "exp_a": "Correct. Across Period 3 from Na to Cl, the nuclear charge increases while electron shielding remains approximately constant; the stronger electrostatic attraction pulls valence electrons closer, causing atomic radius to decrease.",
    "exp_b": "Incorrect. Electronegativity increases across the period.",
    "exp_c": "Incorrect. First ionization energy generally increases across the period.",
    "exp_d": "Incorrect. Metallic character decreases across the period."
  },
  {
    "q_no": 17,
    "key": "C",
    "rate": "73%",
    "focus": "Reactions and Properties of Carboxylic Acids (Ethanoic Acid)",
    "exp_a": "Incorrect. (1) is false.",
    "exp_b": "Incorrect. (1) is false.",
    "exp_c": "Correct. Statements (2) and (3) are correct: ethanoic acid reacts with Na2CO3 to evolve CO2 gas (2), and undergoes esterification with ethanol in the presence of concentrated H2SO4 to form ethyl ethanoate ester (3).",
    "exp_d": "Incorrect. (1) is false."
  },
  {
    "q_no": 18,
    "key": "B",
    "rate": "65%",
    "focus": "Electrochemical Corrosion: Galvanic Acceleration vs Sacrificial Protection",
    "exp_a": "Incorrect. (1) is false.",
    "exp_b": "Correct. Statements (2) and (3) are correct: salt water accelerates rusting due to high electrical conductivity (2), and connecting iron to a zinc block prevents iron corrosion via sacrificial protection (3).",
    "exp_c": "Incorrect. (1) is false.",
    "exp_d": "Incorrect. (1) is false."
  },
  {
    "q_no": 19,
    "key": "D",
    "rate": "61%",
    "focus": "Addition Polymers: Polyethene Structure & Properties",
    "exp_a": "Incorrect. Omits valid points.",
    "exp_b": "Incorrect. (2) is true.",
    "exp_c": "Incorrect. (1) is true.",
    "exp_d": "Correct. Statements (1), (2), and (3) are all correct: polyethene is synthesized from ethene monomer (1), is a thermoplastic that can be repeatedly melted and remoulded (2), and is resistant to chemical attack by aqueous acids and bases (3)."
  },
  {
    "q_no": 20,
    "key": "A",
    "rate": "72%",
    "focus": "Intermolecular Forces: Hydrogen Bonding in Alcohols",
    "exp_a": "Correct. Statements (1) and (2) are correct: ethanol molecules form strong intermolecular hydrogen bonds with each other (1), giving ethanol a much higher boiling point (+78 °C) than propane (b.p. -42 °C) of similar molar mass (2).",
    "exp_b": "Incorrect. (3) is false.",
    "exp_c": "Incorrect. (3) is false.",
    "exp_d": "Incorrect. (3) is false."
  },
  {
    "q_no": 21,
    "key": "C",
    "rate": "76%",
    "focus": "Reactivity of Group VII Halogens: Oxidizing Powers & Displacements",
    "exp_a": "Incorrect. (1) is false.",
    "exp_b": "Incorrect. (1) is false.",
    "exp_c": "Correct. Statements (2) and (3) are correct: chlorine displaces bromide from aqueous KBr (2), and bromine displaces iodide from aqueous KI (3).",
    "exp_d": "Incorrect. (1) is false."
  },
  {
    "q_no": 22,
    "key": "B",
    "rate": "85%",
    "focus": "Hazard Warning Labels: Flammable Organic Liquids",
    "exp_a": "Incorrect. (1) only is incomplete.",
    "exp_b": "Correct. Statements (1) and (2) are correct: propan-2-ol is a volatile, flammable liquid requiring the Flammable hazard warning label (1), and causes eye/skin irritation (2).",
    "exp_c": "Incorrect. (3) is false (not corrosive).",
    "exp_d": "Incorrect. (3) is false."
  },
  {
    "q_no": 23,
    "key": "A",
    "rate": "74%",
    "focus": "Reactivity Series: Extraction of Sodium by Molten Electrolysis",
    "exp_a": "Correct. 1st statement is TRUE: sodium cannot be extracted by chemical reduction of sodium oxide with carbon. 2nd statement is TRUE: sodium is high in the reactivity series and forms very stable ionic bonds with oxygen, requiring extraction via electrolysis of molten NaCl (Downs process), correctly explaining statement 1.",
    "exp_b": "Incorrect. Statement 2 is the exact scientific explanation of statement 1.",
    "exp_c": "Incorrect. Statement 1 is true.",
    "exp_d": "Incorrect. Both statements are true."
  },
  {
    "q_no": 24,
    "key": "C",
    "rate": "63%",
    "focus": "Electrical Conductivity: Solid vs Molten Sodium Chloride",
    "exp_a": "Incorrect. 1st statement is false.",
    "exp_b": "Incorrect. 1st statement is false.",
    "exp_c": "Correct. 1st statement is FALSE: solid sodium chloride cannot conduct electricity because Na+ and Cl- ions are held rigidly in fixed lattice positions. 2nd statement is TRUE: molten sodium chloride contains mobile Na+ and Cl- ions that move freely to conduct electricity.",
    "exp_d": "Incorrect. Statement 2 is true."
  },
  {
    "q_no": 25,
    "key": "D",
    "rate": "75%",
    "focus": "Chemical Kinetics: Reaction Rate Equation & Reaction Orders",
    "exp_a": "Incorrect. Inverted orders.",
    "exp_b": "Incorrect. Overestimates order of reactant.",
    "exp_c": "Incorrect. Underestimates order.",
    "exp_d": "Correct. Analysis of initial rate data shows rate is first order in [A] and second order in [B]: Rate = k[A][B]^2.",
  },
  {
    "q_no": 26,
    "key": "B",
    "rate": "69%",
    "focus": "Chemical Equilibrium: Effect of Temperature on Exothermic Reactions",
    "exp_a": "Incorrect. Shift to right would increase Kc.",
    "exp_b": "Correct. For an exothermic reversible reaction (Delta H < 0), increasing temperature shifts the equilibrium position to the left (reverse endothermic direction) to absorb heat according to Le Chatelier's principle, decreasing the equilibrium constant Kc.",
    "exp_c": "Incorrect. Catalyst does not change Kc.",
    "exp_d": "Incorrect. Pressure effect depends on gas stoichiometry."
  },
  {
    "q_no": 27,
    "key": "C",
    "rate": "77%",
    "focus": "Electrophilic Addition of Hydrogen Halides to Alkenes (Markovnikov's Rule)",
    "exp_a": "Incorrect. 1-bromopropane is the minor product.",
    "exp_b": "Incorrect. 1,2-dibromopropane requires Br2.",
    "exp_c": "Correct. Addition of HBr(g) to propene follows Markovnikov's rule: the proton adds to C1 to form the more stable secondary carbocation intermediate, yielding 2-bromopropane as the major organic product.",
    "exp_d": "Incorrect. Dihaloalkane requires Br2."
  },
  {
    "q_no": 28,
    "key": "A",
    "rate": "66%",
    "focus": "Chirality & Enantiomerism in Organic Compounds",
    "exp_a": "Correct. Butan-2-ol (CH3-CH(OH)-CH2CH3) contains a central chiral carbon atom at C2 bonded to 4 distinct chemical groups (-H, -OH, -CH3, -CH2CH3), and therefore exhibits optical activity (enantiomers).",
    "exp_b": "Incorrect. Achiral molecule.",
    "exp_c": "Incorrect. Symmetrical molecule.",
    "exp_d": "Incorrect. Lacks asymmetric centre."
  },
  {
    "q_no": 29,
    "key": "D",
    "rate": "58%",
    "focus": "Nucleophilic Substitution of Haloalkanes to Nitriles",
    "exp_a": "Incorrect. Elimination occurs with ethanolic KOH.",
    "exp_b": "Incorrect. Hydrolysis forms alcohol.",
    "exp_c": "Incorrect. Ammonolysis forms amine.",
    "exp_d": "Correct. Heating 1-bromoethane with aqueous ethanolic KCN under reflux undergoes nucleophilic substitution (SN2) to form propanenitrile (CH3CH2CN), extending the carbon chain by one carbon atom."
  },
  {
    "q_no": 30,
    "key": "B",
    "rate": "81%",
    "focus": "Periodic Trends: Acid-Base Nature of Period 3 Oxides (SO2)",
    "exp_a": "Incorrect. Na2O is strongly basic.",
    "exp_b": "Correct. Sulphur dioxide (SO2) is an acidic non-metal oxide that reacts with water to form sulphurous acid: SO2(g) + H2O(l) <=> H2SO3(aq), producing an acidic solution with pH < 7.",
    "exp_c": "Incorrect. Al2O3 is amphoteric and insoluble.",
    "exp_d": "Incorrect. MgO is basic."
  },
  {
    "q_no": 31,
    "key": "A",
    "rate": "65%",
    "focus": "Chemical Kinetics: Catalyst Effect on Activation Energy",
    "exp_a": "Correct. A catalyst increases the rate of reaction by providing an alternative reaction pathway with a lower activation energy (Ea), allowing a greater fraction of collisions to result in a chemical reaction without being consumed.",
    "exp_b": "Incorrect. Catalyst does not alter Delta H.",
    "exp_c": "Incorrect. Catalyst increases both forward and reverse rates equally.",
    "exp_d": "Incorrect. Catalyst does not change equilibrium constant Kc."
  },
  {
    "q_no": 32,
    "key": "C",
    "rate": "73%",
    "focus": "Condensation Polymers: Polyamides (Nylon-6,6)",
    "exp_a": "Incorrect. (1) is false.",
    "exp_b": "Incorrect. (1) is false.",
    "exp_c": "Correct. Statements (2) and (3) are correct: Nylon-6,6 is synthesized by condensation polymerization of hexanedioic acid and hexane-1,6-diamine (2), forming repeating amide linkages (-CONH-) with the elimination of water molecules (3).",
    "exp_d": "Incorrect. (1) is false."
  },
  {
    "q_no": 33,
    "key": "D",
    "rate": "69%",
    "focus": "Qualitative Analysis: Chemical Tests for Carbonyls & Aldehydes",
    "exp_a": "Incorrect. (1) is true.",
    "exp_b": "Incorrect. (2) is true.",
    "exp_c": "Incorrect. (3) is true.",
    "exp_d": "Correct. Statements (1), (2), and (3) are all correct: both aldehydes and ketones form orange precipitates with 2,4-DNP (1), aldehydes form a silver mirror with Tollens' reagent (2), and aldehydes reduce Fehling's solution to red Cu2O precipitate (3)."
  },
  {
    "q_no": 34,
    "key": "B",
    "rate": "76%",
    "focus": "Structure, Synthesis & Hydrolysis of Aspirin",
    "exp_a": "Incorrect. (1) is false.",
    "exp_b": "Correct. Statements (2) and (3) are correct: aspirin contains a carboxylic acid group that effervesces with Na2CO3(aq) to release CO2 (2), and undergoes alkaline hydrolysis to sodium salicylate and sodium ethanoate (3).",
    "exp_c": "Incorrect. (1) is false.",
    "exp_d": "Incorrect. (1) is false."
  },
  {
    "q_no": 35,
    "key": "A",
    "rate": "72%",
    "focus": "Dynamic Equilibrium: Le Chatelier's Principle & Catalyst Effects",
    "exp_a": "Correct. 1st statement is TRUE: adding a catalyst to a chemical equilibrium mixture increases the rate of reaching equilibrium without altering the equilibrium position. 2nd statement is TRUE: a catalyst lowers the activation energy of both forward and reverse reactions by the exact same amount, correctly explaining statement 1.",
    "exp_b": "Incorrect. Statement 2 is the exact scientific explanation of statement 1.",
    "exp_c": "Incorrect. Statement 1 is true.",
    "exp_d": "Incorrect. Both statements are true."
  },
  {
    "q_no": 36,
    "key": "C",
    "rate": "63%",
    "focus": "Geometrical Isomerism: Structural Criteria in Alkenes",
    "exp_a": "Incorrect. 1st statement is false.",
    "exp_b": "Incorrect. 1st statement is false.",
    "exp_c": "Correct. 1st statement is FALSE: 2-methylbut-2-ene ((CH3)2C=CHCH3) has two identical methyl groups attached to C2, so it CANNOT exhibit cis-trans isomerism. 2nd statement is TRUE: the molecule contains a carbon-carbon double bond with restricted rotation.",
    "exp_d": "Incorrect. Statement 2 is true."
  }
];
