import { ExamQuestion } from '../../types';

export const data2012: ExamQuestion[] = [
  {
    q_no: 1,
    key: "D",
    rate: "71%",
    focus: "Electrical Conductivity & Structure of Substances",
    exp_a: "Incorrect. Platinum (Pt) has a giant metallic structure with delocalized electrons that are free to move and conduct electricity.",
    exp_b: "Incorrect. Lead(II) bromide (PbBr2) is an ionic compound. In the molten/liquid state, the giant ionic lattice breaks down, providing mobile ions to conduct electricity.",
    exp_c: "Incorrect. Graphite has a giant covalent layered structure where each carbon atom is bonded to 3 other carbon atoms, leaving delocalized electrons free to move along the hexagonal layers to conduct electricity.",
    exp_d: "Correct. Ethanol (CH3CH2OH) is a simple molecular compound consisting of neutral molecules with no delocalized electrons or mobile ions, so it cannot conduct electricity."
  },
  {
    q_no: 2,
    key: "D",
    rate: "54%",
    focus: "Solubility of Salts & Precipitation Reactions",
    exp_a: "Incorrect. Sodium sulphate (Na2SO4) dissolves in water, but adding K2CO3(aq) will not form a precipitate because all potassium and sodium salts (Na2CO3, K2SO4) are highly water-soluble.",
    exp_b: "Incorrect. Calcium sulphate (CaSO4) is only very slightly soluble (sparingly soluble) in water and does not readily form a clear solution as described for typical limewater preparations, though it contains Ca2+.",
    exp_c: "Incorrect. Sodium hydroxide (NaOH) forms a clear solution containing Na+ and OH- ions, which do not form a precipitate when mixed with K+ and CO3^2- ions.",
    exp_d: "Correct. Calcium hydroxide (Ca(OH)2) dissolves slightly in water to form a clear solution (limewater). When mixed with K2CO3(aq), Ca2+(aq) reacts with CO3^2-(aq) to form an insoluble white precipitate of calcium carbonate (CaCO3(s)): Ca2+(aq) + CO3^2-(aq) -> CaCO3(s)."
  },
  {
    q_no: 3,
    key: "A",
    rate: "78%",
    focus: "Determination of Empirical Formula from Mass Percentages",
    exp_a: "Correct. In 100 g of oxide: mass of M = 55.0 g, mass of O = 45.0 g. Number of moles: n(M) = 55.0 / 39.1 = 1.407 mol; n(O) = 45.0 / 16.0 = 2.813 mol. Mole ratio n(M) : n(O) = 1.407 : 2.813 = 1 : 2. Hence, the empirical formula is MO2.",
    exp_b: "Incorrect. In M2O, mass % of M = (2 * 39.1) / (2 * 39.1 + 16.0) * 100% = 83.0%, which does not match 55.0%.",
    exp_c: "Incorrect. In M2O2 (or MO), mass % of M = 39.1 / (39.1 + 16.0) * 100% = 71.0%, which does not match 55.0%.",
    exp_d: "Incorrect. In M2O3, mass % of M = (2 * 39.1) / (2 * 39.1 + 3 * 16.0) * 100% = 62.0%, which does not match 55.0%."
  },
  {
    q_no: 4,
    key: "C",
    rate: "71%",
    focus: "Properties of Strong vs Weak Acids & Acid Reactions",
    exp_a: "Incorrect. Hydrochloric acid (HCl) is a strong acid that completely ionizes in water, whereas ethanoic acid (CH3COOH) is a weak acid that only partially ionizes.",
    exp_b: "Incorrect. Because HCl completely ionizes, 0.1 M HCl(aq) has [H+] = 0.1 M (pH = 1). 0.1 M CH3COOH(aq) is weakly ionized, so [H+] < 0.1 M, giving a higher pH (> 1).",
    exp_c: "Correct. Both CH3COOH(aq) and HCl(aq) act as acids and donate protons to aqueous ammonia (NH3(aq), a weak base) in neutralization reactions to form soluble ammonium salts: CH3COONH4 (ammonium ethanoate) and NH4Cl (ammonium chloride).",
    exp_d: "Incorrect. Silver (Ag) is below hydrogen in the electrochemical/reactivity series and cannot reduce H+(aq) ions in non-oxidizing acids, so no reaction or hydrogen gas evolution occurs."
  },
  {
    q_no: 5,
    key: "C",
    rate: "82%",
    focus: "Molecular Geometry & Molecular Polarity",
    exp_a: "Incorrect. BF3 has a symmetrical trigonal planar geometry (120 deg bond angles). The three polar B-F bond dipoles cancel out symmetrically, giving a non-polar molecule with zero net dipole moment.",
    exp_b: "Incorrect. C60 (buckminsterfullerene) consists of only non-polar C-C bonds arranged in a highly symmetrical spherical cage structure, so it is non-polar.",
    exp_c: "Correct. NH3 has a trigonal pyramidal shape with one lone pair on the nitrogen atom. The three polar N-H bond dipoles do not cancel out due to the non-symmetrical shape, resulting in a net molecular dipole moment.",
    exp_d: "Incorrect. SF6 has a regular octahedral shape. The six polar S-F bond dipoles symmetrically cancel each other out, resulting in a non-polar molecule."
  },
  {
    q_no: 6,
    key: "B",
    rate: "74%",
    focus: "Oxidation Number in Coordination Compounds",
    exp_a: "Incorrect. Copper is not in its elemental state; it forms a complex cation [Cu(NH3)4]^2+ balanced by two Cl- anions.",
    exp_b: "Correct. In Cu(NH3)4Cl2, NH3 is a neutral ligand (charge = 0) and each chloride ion carries a -1 charge. Let the oxidation number of Cu be x: x + 4(0) + 2(-1) = 0 => x = +2.",
    exp_c: "Incorrect. If Cu were +4, the compound would require four chloride ions for electrical neutrality.",
    exp_d: "Incorrect. Copper does not exhibit a +6 oxidation state in stable coordination complexes."
  },
  {
    q_no: 7,
    key: "A",
    rate: "56%",
    focus: "Hess's Law & Standard Enthalpy of Formation",
    exp_a: "Correct. Formation equation: 2C(graphite) + 3H2(g) + 1/2 O2(g) -> CH3CH2OH(l). By Hess's Law: Delta H_f = 2 * Delta H_c[C(graphite)] + 3 * Delta H_c[H2(g)] - Delta H_c[CH3CH2OH(l)] = 2(-394) + 3(-286) - (-1371) = -788 - 858 + 1371 = -275 kJ mol^-1.",
    exp_b: "Incorrect. This positive value (+275 kJ mol^-1) is obtained if the signs of the combustion products and reactants are reversed.",
    exp_c: "Incorrect. Calculation error from omitting stoichiometric coefficients (2 for C and 3 for H2).",
    exp_d: "Incorrect. This value (-3017 kJ mol^-1) results from subtracting all values as negative terms without reversing the combustion of ethanol."
  },
  {
    q_no: 8,
    key: "C",
    rate: "94%",
    focus: "Giant Covalent Networks & Physical Properties",
    exp_a: "Incorrect. A high melting point is a characteristic property of giant covalent structures, not the fundamental physical reason for hardness.",
    exp_b: "Incorrect. In silicon carbide (SiC), each silicon atom is tetrahedrally bonded to 4 carbon atoms via single covalent bonds (not triple bonds).",
    exp_c: "Correct. Silicon carbide possesses a three-dimensional giant covalent network structure similar to diamond, where atoms are held by extensive, strong directional covalent bonds that resist deformation, making it extremely hard.",
    exp_d: "Incorrect. Having 4 valence electrons allows tetravalency, but hardness is directly caused by the rigid 3D giant covalent network structure."
  },
  {
    q_no: 9,
    key: "D",
    rate: "81%",
    focus: "Extraction of Metals & Reactivity Series",
    exp_a: "Incorrect. Aluminium is more reactive than carbon and has a very high affinity for oxygen; carbon cannot reduce Al2O3 to aluminium metal at feasible industrial temperatures.",
    exp_b: "Incorrect. Aluminium is the most abundant metal in the Earth's crust (approx. 8% by mass), and bauxite ore is abundant.",
    exp_c: "Incorrect. In pure Al2O3, mass % of Al = (2 * 27.0) / (2 * 27.0 + 3 * 16.0) * 100% = 54.0 / 102.0 * 100% = 52.9%, which is less than 55%.",
    exp_d: "Correct. Because aluminium is high in the reactivity series, it can only be extracted from molten bauxite/cryolite via electrolysis (Hall-Heroult process), which became industrially viable only after the advancement of electricity generation."
  },
  {
    q_no: 10,
    key: "C",
    rate: "88%",
    focus: "Molar Mass & Solution Molarity Calculation",
    exp_a: "Incorrect. 0.004 M is obtained if the molar mass is calculated incorrectly or if 1.02 g is divided incorrectly.",
    exp_b: "Incorrect. 0.010 M is half of the correct concentration, resulting from an arithmetic error in volume or molar mass.",
    exp_c: "Correct. Molar mass of potassium hydrogenphthalate (C8H5O4K) = 8(12.0) + 5(1.0) + 4(16.0) + 39.1 = 204.1 g mol^-1. Moles of solute n = 1.02 g / 204.1 g mol^-1 = 0.004998 mol. Concentration = n / V = 0.004998 mol / 0.250 dm^3 = 0.020 M.",
    exp_d: "Incorrect. 4.080 M is obtained if mass (1.02 g) is divided directly by volume in dm^3 (0.250 dm^3) without converting mass to moles."
  },
  {
    q_no: 11,
    key: "B",
    rate: "61%",
    focus: "IUPAC Nomenclature of Alkenols",
    exp_a: "Incorrect. The principal functional group is the hydroxyl (-OH) group, which takes precedence over the C=C double bond and must receive the lowest possible locant (C1, not C3).",
    exp_b: "Correct. In CH2=CH-CH2-OH, the 3-carbon chain is numbered from the right so that the principal -OH group is at C1. The C=C double bond is at C2, giving the systematic IUPAC name prop-2-en-1-ol.",
    exp_c: "Incorrect. In IUPAC rules, the hydroxyl group is designated by the suffix '-ol' as the principal group, not the prefix 'hydroxy-'.",
    exp_d: "Incorrect. Uses incorrect prefix nomenclature and incorrect numbering of the double bond."
  },
  {
    q_no: 12,
    key: "A",
    rate: "84%",
    focus: "VSEPR Theory & Planar Molecular Geometries",
    exp_a: "Correct. BF3 has 3 bond pairs and 0 lone pairs around the central boron atom, resulting in a symmetrical trigonal planar shape (all 4 atoms lie in the same plane).",
    exp_b: "Incorrect. NH3 has 3 bond pairs and 1 lone pair around nitrogen, resulting in a non-planar trigonal pyramidal shape.",
    exp_c: "Incorrect. CH4 has 4 bond pairs around carbon, resulting in a three-dimensional tetrahedral geometry.",
    exp_d: "Incorrect. PCl5 has 5 bond pairs around phosphorus, resulting in a three-dimensional trigonal bipyramidal geometry."
  },
  {
    q_no: 13,
    key: "B",
    rate: "60%",
    focus: "Electrochemical Series & Redox Strengths",
    exp_a: "Incorrect. Barium (Ba) is a very reactive group II metal with a high reducing power (Ba2+ has the lowest tendency to be reduced), so Ba(s) reacts vigorously with H+(aq) to produce H2(g).",
    exp_b: "Correct. A lower tendency of a metal cation to be reduced corresponds to a greater tendency of the neutral metal to lose electrons (be oxidized). Since Na+ is harder to reduce than Hg2+, Na(s) is a stronger reducing agent than Hg(l).",
    exp_c: "Incorrect. Hg2+(aq) has the highest tendency to be reduced among the six species, making it the strongest oxidizing agent in the list.",
    exp_d: "Incorrect. Magnesium is more reactive than copper (Mg2+ is harder to reduce than Cu2+), so Cu(s) cannot displace Mg2+(aq) from MgSO4(aq)."
  },
  {
    q_no: 14,
    key: "B",
    rate: "83%",
    focus: "Enthalpy of Neutralization & Heat Released",
    exp_a: "Incorrect. 1 mol HCl + 1 mol KOH produces 1 mol of H2O; heat evolved = 1 * 57.1 kJ = 57.1 kJ.",
    exp_b: "Correct. Sulphuric acid (H2SO4) is a strong dibasic acid. 1 mol of H2SO4 reacts with 2 mol of KOH to form 2 mol of H2O: H2SO4 + 2KOH -> K2SO4 + 2H2O. Complete neutralization yields approximately 2 * 57.1 kJ = 114.2 kJ of heat, which is the largest amount.",
    exp_c: "Incorrect. Ethanedioic acid ((COOH)2) is a weak dibasic acid. Although it neutralizes 2 mol KOH to form 2 mol H2O, some energy is absorbed to completely ionize the weak acid molecules, so heat evolved < 114.2 kJ.",
    exp_d: "Incorrect. Ethanoic acid (CH3COOH) is a weak monobasic acid; neutralizing 1 mol KOH forms 1 mol H2O and evolves < 57.1 kJ."
  },
  {
    q_no: 15,
    key: "D",
    rate: "63%",
    focus: "Subatomic Particles: Protons, Neutrons & Valence Electrons",
    exp_a: "Incorrect. Statement (1) is false because Iodine (atomic number 53) has 53 protons, while Xenon (atomic number 54) has 54 protons.",
    exp_b: "Incorrect. Statement (3) is also correct, not just (2).",
    exp_c: "Incorrect. Statement (1) is false.",
    exp_d: "Correct. For 131_53 I: protons = 53, neutrons = 131 - 53 = 78, valence electrons = 7 (Group VII). For 131_54 Xe: protons = 54, neutrons = 131 - 54 = 77, valence electrons = 8 (Group 0). Thus, they have different numbers of neutrons (statement 2 is true) and different numbers of valence/outermost shell electrons (statement 3 is true)."
  },
  {
    q_no: 16,
    key: "B",
    rate: "64%",
    focus: "Corrosion Prevention Methods & Principles",
    exp_a: "Incorrect. (1) is wrong: aluminium window frames are protected by a thick, adherent aluminium oxide layer formed naturally or enhanced through anodization, not cathodic protection.",
    exp_b: "Correct. (2) is correct: galvanized iron is iron coated with zinc. Because zinc is more reactive than iron, zinc preferentially oxidizes (acts as a sacrificial anode) even if scratched, providing sacrificial protection.",
    exp_c: "Incorrect. (1) and (3) are both wrong: tin-plated cans use tin electroplating as a protective barrier layer, not alloying (alloying involves melting metals together, e.g. stainless steel).",
    exp_d: "Incorrect. (3) is wrong because tin plating is a surface coating, not an alloy."
  },
  {
    q_no: 17,
    key: "B",
    rate: "50%",
    focus: "Catalytic Cracking of Alkanes & Product Testing",
    exp_a: "Incorrect. Statement (1) is false: glass wool merely holds the liquid kerosene and is gently heated to vaporize it (a physical change); cracking occurs chemically over the hot unglazed porcelain catalyst.",
    exp_b: "Correct. Statement (2) is true: cracked products (short-chain alkanes, alkenes, hydrogen) are neutral and do not affect blue litmus solution in Tube B. Statement (3) is false because alkenes react with and decolorize purple acidified KMnO4(aq) in Tube C.",
    exp_c: "Incorrect. Statement (1) is false and statement (3) is false.",
    exp_d: "Incorrect. Statement (3) is false because unsaturated alkenes reduce acidified KMnO4, causing a color change from purple to colorless/pale pink."
  },
  {
    q_no: 18,
    key: "C",
    rate: "77%",
    focus: "Hydrogen-Oxygen Fuel Cell Principles & Characteristics",
    exp_a: "Incorrect. Statement (3) is also correct, not just (1).",
    exp_b: "Incorrect. Statement (2) is false: standard proton exchange membrane fuel cells (PEMFC) use membranes that selectively allow H+ (protons) to pass through, not OH-.",
    exp_c: "Correct. Statement (1) is true because the only direct chemical product is non-polluting water (2H2 + O2 -> 2H2O). Statement (3) is true because fuel cells operate continuously as long as fuel (H2) and oxidant (O2) are supplied without needing recharging.",
    exp_d: "Incorrect. Statement (2) is false."
  },
  {
    q_no: 19,
    key: "D",
    rate: "59%",
    focus: "Chemical Reactions Involving Gas Evolution",
    exp_a: "Incorrect. (3) also produces colorless carbon dioxide gas.",
    exp_b: "Incorrect. (2) also produces colorless ammonia gas.",
    exp_c: "Incorrect. (1) also produces colorless hydrogen gas.",
    exp_d: "Correct. In (1), Mg + H2SO4 -> MgSO4 + H2(g) (colorless H2 gas). In (2), 2NH4Cl + Ca(OH)2 -> CaCl2 + 2H2O + 2NH3(g) (colorless NH3 gas with pungent smell). In (3), citric acid dissolves in water to release H+, reacting with hydrogencarbonate: H+ + HCO3- -> H2O + CO2(g) (colorless CO2 gas). All three evolve a colorless gas."
  },
  {
    q_no: 20,
    key: "A",
    rate: "71%",
    focus: "Qualitative Analysis & Chemical Tests for Cations/Anions",
    exp_a: "Correct. (1) Adding NH3(aq): Zn2+ forms a white precipitate of Zn(OH)2 which redissolves in excess NH3(aq) to form a colorless complex ion [Zn(NH3)4]^2+, while Ca2+ forms no precipitate. (2) Flame test: Ca2+ gives a characteristic brick-red flame, whereas Zn2+ gives no characteristic flame color. Both methods successfully distinguish the two solutions.",
    exp_b: "Incorrect. (3) Evaporating to dryness leaves white solid salts (ZnCl2 and CaBr2) in both cases, which cannot be visually distinguished.",
    exp_c: "Incorrect. (3) is ineffective.",
    exp_d: "Incorrect. (3) cannot distinguish the two solutions."
  },
  {
    q_no: 21,
    key: "A",
    rate: "69%",
    focus: "Addition Polymerization & Monomer Requirements",
    exp_a: "Correct. Both (1) tetrafluoroethene (CF2=CF2) and (2) 2-ethylpropenenitrile (CH2=C(CH2CH3)CN) contain reactive carbon-carbon double bonds (C=C), which open up to form polymer chains via addition polymerization.",
    exp_b: "Incorrect. (3) is a saturated cyclic/branched alkane derivative without C=C double bonds and cannot undergo addition polymerization.",
    exp_c: "Incorrect. (3) cannot act as an addition monomer.",
    exp_d: "Incorrect. (3) lacks unsaturation (C=C)."
  },
  {
    q_no: 22,
    key: "C",
    rate: "84%",
    focus: "Identification of Redox Reactions",
    exp_a: "Incorrect. (1) Mixing methanol and ethanol is a purely physical mixing process with no electron transfer or change in oxidation states.",
    exp_b: "Incorrect. (1) is not a chemical reaction.",
    exp_c: "Correct. (2) Chlorination of methane under sunlight: CH4 + Cl2 -> CH3Cl + HCl is a free radical substitution where C is oxidized (-4 to -2) and Cl is reduced (0 to -1). (3) Reaction of ethene with acidified KMnO4: ethene is oxidized to ethane-1,2-diol (C oxidation state -2 to -1) while Mn(VII) is reduced to Mn(II). Both are redox reactions.",
    exp_d: "Incorrect. (1) does not involve a chemical reaction."
  },
  {
    q_no: 23,
    key: "C",
    rate: "49%",
    focus: "Conditions for Rusting & Electrochemical Reactivity",
    exp_a: "Incorrect. The 1st statement is false because rusting/corrosion of iron requires both oxygen and water. In non-polar anhydrous hexane, no water is present, so iron does not corrode.",
    exp_b: "Incorrect. The 1st statement is false.",
    exp_c: "Correct. 1st statement is FALSE: without water and air/electrolyte, iron cannot rust/corrode in hexane. 2nd statement is TRUE: iron is higher than copper in the reactivity/electrochemical series (Fe -> Fe2+ + 2e-) and is oxidized more readily than copper.",
    exp_d: "Incorrect. The 2nd statement is chemically true."
  },
  {
    q_no: 24,
    key: "B",
    rate: "61%",
    focus: "Environmental Chemistry: Acid Rain vs Greenhouse Gases",
    exp_a: "Incorrect. Acid rain (pH < 5.6) is caused primarily by sulfur dioxide (SO2) from sulfur impurities and nitrogen oxides (NOx) formed at high temperatures, not by carbon dioxide (which dissolves to give mildly acidic unpolluted rain of pH ~5.6).",
    exp_b: "Correct. Both statements are true: burning fossil fuels produces SO2 and NOx that cause acid rain (statement 1 is true), and complete combustion of fossil fuels produces CO2 (statement 2 is true). However, statement 2 is NOT the correct explanation of acid rain (CO2 causes the greenhouse effect).",
    exp_c: "Incorrect. The 1st statement is true.",
    exp_d: "Incorrect. Both statements are true."
  },
  {
    q_no: 25,
    key: "A",
    rate: "69%",
    focus: "Limiting Reactant & Molar Volume of Gas at RTP",
    exp_a: "Correct. Reaction: Na2CO3 + 2HNO3 -> 2NaNO3 + H2O + CO2. Molar mass of Na2CO3 = 106.0 g mol^-1. Moles of Na2CO3 = 1.2 / 106.0 = 0.01132 mol. Moles of HNO3 = 1.0 * 0.050 = 0.050 mol. Required HNO3 = 2 * 0.01132 = 0.02264 mol (< 0.050 mol available), so Na2CO3 is limiting. Theoretical volume of CO2 = 0.01132 mol * 24 000 cm^3 mol^-1 = 271.7 cm^3 = 272 cm^3.",
    exp_b: "Incorrect. 544 cm^3 results from incorrectly multiplying the mole quantity by 2.",
    exp_c: "Incorrect. 600 cm^3 results from erroneously treating HNO3 as the limiting reagent (0.050 / 2 * 24 000 = 600 cm^3).",
    exp_d: "Incorrect. 1200 cm^3 results from assuming 0.050 mol of CO2 without dividing by 2."
  },
  {
    q_no: 26,
    key: "D",
    rate: "88%",
    focus: "Reaction Stoichiometry from Concentration-Time Graphs",
    exp_a: "Incorrect. Q is the reactant (concentration decreases from 2.0 to 0 mol dm^-3) and P is the product (concentration increases from 0 to 4.0 mol dm^-3).",
    exp_b: "Incorrect. The stoichiometric ratio is 1:2 because [P] increases by twice the amount [Q] decreases.",
    exp_c: "Incorrect. Reverses reactants and products.",
    exp_d: "Correct. [Q] decreases by 2.0 mol dm^-3 (reactant) while [P] increases by 4.0 mol dm^-3 (product). The ratio of change Delta[Q] : Delta[P] = 2.0 : 4.0 = 1 : 2, which corresponds to the equation Q(g) -> 2P(g)."
  },
  {
    q_no: 27,
    key: "A",
    rate: "60%",
    focus: "Equilibrium Concentration-Time Graphs & Stoichiometry",
    exp_a: "Correct. Reaction: X2(g) <=> 2X(g). Initial [X2] = 1.0 M and [X] = 0 M. By stoichiometry, decrease in [X2] (Delta[X2] = 1.0 - 0.6 = 0.4 M) results in an increase in [X] (Delta[X] = 2 * 0.4 = 0.8 M). Both curves level off horizontally when dynamic equilibrium is reached, exactly as shown in Graph A.",
    exp_b: "Incorrect. Graph B shows Delta[X] = Delta[X2] (a 1:1 ratio), violating the 1:2 reaction stoichiometry.",
    exp_c: "Incorrect. Graph C shows an incorrect initial concentration and incorrect equilibrium values.",
    exp_d: "Incorrect. Graph D shows [X2] increasing instead of decomposing from its initial state."
  },
  {
    q_no: 28,
    key: "D",
    rate: "47%",
    focus: "Chirality, Functional Groups & Oxidation of Alcohols",
    exp_a: "Incorrect. The molecule HO-CH2-CH(OH)-CH=CH-COOH contains a chiral carbon (C3 bearing -OH, bonded to -H, -OH, -CH2OH, and -CH=CHCOOH), so it exhibits enantiomerism (optical isomerism).",
    exp_b: "Incorrect. Counting atoms gives the molecular formula C5H8O4, not C5H6O4.",
    exp_c: "Incorrect. The carbonyl oxygen belongs to a carboxylic acid group (-COOH), not a ketone group.",
    exp_d: "Correct. The molecule contains primary alcohol (-CH2OH) and secondary alcohol (-CH(OH)-) groups, both of which can be readily oxidized by acidified potassium dichromate solution (turning orange Cr2O7^2- to green Cr^3+)."
  },
  {
    q_no: 29,
    key: "D",
    rate: "79%",
    focus: "Properties of Alkenols: Naming, Formula & Unsaturation Tests",
    exp_a: "Incorrect. Compound U is CH3CH2CH=CHCH2CH2OH (C6H12O). Because the subscripts 6:12:1 cannot be simplified, the empirical formula is C6H12O, not C3H6O.",
    exp_b: "Incorrect. Numbering from the principal -OH group (C1), the C=C double bond is located at C3, giving the systematic name hex-3-en-1-ol (not hex-4-en-1-ol).",
    exp_c: "Incorrect. Reaction with HCl can produce multiple products due to Markovnikov/anti-Markovnikov addition across C=C and nucleophilic substitution of -OH by Cl.",
    exp_d: "Correct. The C=C double bond in compound U undergoes electrophilic addition with aqueous bromine (decolorizing orange Br2(aq)) and oxidation by acidified potassium permanganate (decolorizing purple KMnO4(aq))."
  },
  {
    q_no: 30,
    key: "A",
    rate: "71%",
    focus: "Variable Oxidation States: Dual Oxidizing & Reducing Behavior",
    exp_a: "Correct. Iron(II) ion (Fe^2+) has an intermediate oxidation state (+2). It can act as a reducing agent by being oxidized to Fe^3+ (Fe^2+ -> Fe^3+ + e-), and it can act as an oxidizing agent by being reduced to Fe metal (Fe^2+ + 2e- -> Fe).",
    exp_b: "Incorrect. Cu^2+ is in its maximum common oxidation state (+2) in aqueous solution and acts only as an oxidizing agent (reduced to Cu^+ or Cu).",
    exp_c: "Incorrect. Cr in Cr2O7^2- is in its maximum possible oxidation state (+6) and can only be reduced, acting exclusively as an oxidizing agent.",
    exp_d: "Incorrect. Mn in MnO4^- is in its maximum oxidation state (+7) and can only be reduced, acting exclusively as a powerful oxidizing agent."
  },
  {
    q_no: 31,
    key: "A",
    rate: "81%",
    focus: "Acid-Base Nature & Solubility of Period 2/3 Oxides",
    exp_a: "Correct. Carbon dioxide (CO2) is an acidic non-metal oxide that readily dissolves in water to form carbonic acid (H2CO3(aq)), releasing H+(aq) ions to form an acidic solution (pH < 7): CO2(g) + H2O(l) <=> H+(aq) + HCO3^-(aq).",
    exp_b: "Incorrect. Silicon dioxide (SiO2) is an acidic oxide, but its giant covalent network makes it insoluble in water, so it does not alter water's pH.",
    exp_c: "Incorrect. Aluminium oxide (Al2O3) is an amphoteric oxide that is insoluble in water.",
    exp_d: "Incorrect. Lithium oxide (Li2O) is a basic metal oxide that dissolves in water to form an alkaline solution of LiOH (pH > 7): Li2O + H2O -> 2LiOH."
  },
  {
    q_no: 32,
    key: "A",
    rate: "66%",
    focus: "Structure & Functional Groups of Aspirin",
    exp_a: "Correct. Structure (1) is 2-ethanoyloxybenzoic acid (acetylsalicylic acid), which contains a benzene ring with ortho -COOH and -OCOCH3 groups; this is the active pharmaceutical ingredient in aspirin.",
    exp_b: "Incorrect. Structure (2) is paracetamol (4-acetamidophenol / N-(4-hydroxyphenyl)ethanamide), a different painkiller.",
    exp_c: "Incorrect. Structure (3) represents a different compound (e.g. 4-aminosalicylic acid / methyl salicylate derivative).",
    exp_d: "Incorrect. Only Structure (1) is aspirin."
  },
  {
    q_no: 33,
    key: "B",
    rate: "65%",
    focus: "Acid-Catalyzed Dehydration of Alcohols & Regioselectivity",
    exp_a: "Incorrect. Structure (2) (3-methylbut-1-ene) cannot be formed because dehydration of (CH3)2C(OH)CH2CH3 removes -OH from C2 and an H atom from adjacent C1 or C3, which cannot produce a C=C bond between C3 and C4 without rearrangement.",
    exp_b: "Correct. Dehydration of 2-methylbutan-2-ol ((CH3)2C(OH)CH2CH3) eliminates the -OH group from C2. Removal of H from C3 gives (CH3)2C=CHCH3 (2-methylbut-2-ene, Structure 1, major product); removal of H from C1 gives CH2=C(CH3)CH2CH3 (2-methylbut-1-ene, Structure 3, minor product). Thus, (1) and (3) are formed.",
    exp_c: "Incorrect. Structure (1) is the major alkene formed.",
    exp_d: "Incorrect. Structure (2) is not a direct elimination product."
  },
  {
    q_no: 34,
    key: "D",
    rate: "58%",
    focus: "Chemical Reactions of Carboxylic Acids",
    exp_a: "Incorrect. Statement (3) is also correct: carboxylic acids readily undergo esterification with alkanols in the presence of concentrated H2SO4 catalyst.",
    exp_b: "Incorrect. Statement (2) is also correct: LiAlH4 is a powerful reducing agent capable of reducing carboxylic acids to primary alcohols.",
    exp_c: "Incorrect. Statement (1) is also correct: carboxylic acids react with basic NH3(aq) to form ammonium carboxylate salts.",
    exp_d: "Correct. The compound is 2,2-dimethylpropanoic acid ((CH3)3CCOOH). (1) It acts as an acid and reacts with NH3(aq) to form (CH3)3CCOONH4 (ammonium salt). (2) It is reduced by LiAlH4 in dry ether followed by acidification to form 2,2-dimethylpropan-1-ol. (3) It reacts with methanol under reflux with concentrated H2SO4 to form methyl 2,2-dimethylpropanoate (an ester). All 3 statements are correct."
  },
  {
    q_no: 35,
    key: "C",
    rate: "60%",
    focus: "Le Chatelier's Principle & Kinetics of Reversible Reactions",
    exp_a: "Incorrect. 1st statement is false because increasing temperature shifts equilibrium in the endothermic direction; for exothermic reactions (Delta H < 0), higher temperature decreases equilibrium yield.",
    exp_b: "Incorrect. 1st statement is false.",
    exp_c: "Correct. 1st statement is FALSE: increasing temperature decreases product yield for exothermic reversible reactions. 2nd statement is TRUE: increasing temperature increases the kinetic energy of particles, so a greater fraction of collisions exceed activation energy, increasing both forward and reverse reaction rates and shortening the time needed to attain equilibrium for all reversible reactions.",
    exp_d: "Incorrect. The 2nd statement is true."
  },
  {
    q_no: 36,
    key: "C",
    rate: "62%",
    focus: "Geometric (Cis-Trans) Isomerism Structural Requirements",
    exp_a: "Incorrect. 1st statement is false because C1 of the double bond is bonded to two identical hydrogen atoms (-H and -H), precluding cis-trans isomerism.",
    exp_b: "Incorrect. 1st statement is false.",
    exp_c: "Correct. 1st statement is FALSE: for geometrical (cis-trans) isomerism to occur, there must be restricted rotation about C=C AND each double-bonded carbon must be attached to two different groups. In 2-chlorobut-1-ene (CH2=C(Cl)CH2CH3), C1 is attached to two identical H atoms, so no geometrical isomerism exists. 2nd statement is TRUE: the '-1-ene' suffix confirms the presence of a carbon-carbon double bond.",
    exp_d: "Incorrect. The 2nd statement is true."
  }
];

export const data2013: ExamQuestion[] = [
  {
    q_no: 1,
    key: "C",
    rate: "70%",
    focus: "Structure & Properties of Silicon & Silicon Dioxide",
    exp_a: "Incorrect. Silicon is a semiconductor and a poor conductor of heat compared to metals.",
    exp_b: "Incorrect. Silicon has a giant covalent network structure, not simple molecular.",
    exp_c: "Correct. Silicon dioxide (SiO2) has a three-dimensional giant covalent network structure with strong directional covalent bonds, making it a very hard solid at room temperature.",
    exp_d: "Incorrect. SiO2 is insoluble in water and does not dissolve to give an acidic solution."
  },
  {
    q_no: 2,
    key: "C",
    rate: "92%",
    focus: "Relative Atomic Mass Calculation from Isotope Abundance",
    exp_a: "Incorrect. 63.3 is an arithmetic calculation error.",
    exp_b: "Incorrect. 63.5 assumes a 75%:25% ratio instead of graph values.",
    exp_c: "Correct. Relative atomic mass = (63 * 69.17 + 65 * 30.83) / 100 = 43.58 + 20.04 = 63.62 ≈ 63.6.",
    exp_d: "Incorrect. 64.0 assumes equal 50%:50% isotopic abundance."
  },
  {
    q_no: 3,
    key: "D",
    rate: "64%",
    focus: "Qualitative Analysis & Salt Solubility (Precipitation Tests)",
    exp_a: "Incorrect. Ammonium carbonate does not form a precipitate with NaOH(aq).",
    exp_b: "Incorrect. Zinc carbonate is insoluble in cold water.",
    exp_c: "Incorrect. Lead(II) chloride is only sparingly soluble in cold water and dissolves in hot water.",
    exp_d: "Correct. Magnesium chloride (MgCl2) is soluble in cold water. Adding NaOH(aq) forms a white precipitate of Mg(OH)2: Mg2+(aq) + 2OH-(aq) -> Mg(OH)2(s). Adding acidified AgNO3(aq) forms a white precipitate of AgCl: Ag+(aq) + Cl-(aq) -> AgCl(s)."
  },
  {
    q_no: 4,
    key: "B",
    rate: "62%",
    focus: "Formula of Ionic Compounds from Oxidation States (Scandium)",
    exp_a: "Incorrect. Sc2(PO4)3 would require Sc to be +3 and PO4 to be -2, but phosphate is PO4^3-.",
    exp_b: "Correct. Scandium forms Sc(NO3)3, indicating scandium is Sc^3+. The phosphate ion is PO4^3-. The 1:1 charge balance gives ScPO4.",
    exp_c: "Incorrect. Sc(PO4)2 represents incorrect valency.",
    exp_d: "Incorrect. Sc(PO4)3 represents Sc^9+."
  },
  {
    q_no: 5,
    key: "A",
    rate: "71%",
    focus: "Extraction of Reactive Metals (Magnesium)",
    exp_a: "Correct. Magnesium is high in the reactivity series and forms strong ionic bonds; it is extracted by electrolysis of molten magnesium compounds (such as molten MgCl2).",
    exp_b: "Incorrect. In aqueous solution, H+(aq) is preferentially discharged at the cathode to give H2(g) rather than Mg metal.",
    exp_c: "Incorrect. Magnesium is more reactive than carbon; carbon cannot reduce MgO.",
    exp_d: "Incorrect. MgO is thermally very stable and does not decompose upon strong heating with a laboratory burner."
  },
  {
    q_no: 6,
    key: "B",
    rate: "51%",
    focus: "Anodization of Aluminium Objects",
    exp_a: "Incorrect. Set-up A connects the aluminium object to the negative terminal (cathode), causing reduction (H2 evolution) rather than anodization.",
    exp_b: "Correct. In anodization, the aluminium object must be made the anode (positive electrode) in dilute sulphuric acid electrolyte (H2SO4(aq)). Oxygen evolved at the anode oxidizes aluminium to thicken the protective Al2O3 layer.",
    exp_c: "Incorrect. Using concentrated NaCl electrolyte produces chlorine gas at the anode rather than an oxide layer.",
    exp_d: "Incorrect. Aluminium is connected as the cathode in NaCl(aq)."
  },
  {
    q_no: 7,
    key: "A",
    rate: "66%",
    focus: "Rust Prevention for Bicycle Steel Frame and Gear System",
    exp_a: "Correct. The bicycle frame is static and exposed to air/moisture, so painting provides a durable, protective barrier. The gear system has moving parts experiencing friction, so greasing provides lubrication while excluding air and moisture to prevent rusting.",
    exp_b: "Incorrect. Galvanizing the gear system is unsuitable because zinc coating wears off rapidly under gear teeth friction.",
    exp_c: "Incorrect. Tin-plating on bicycle frames is easily scratched, accelerating rusting via galvanic action.",
    exp_d: "Incorrect. Tin-plating and galvanizing are unsuitable for moving gears."
  },
  {
    q_no: 8,
    key: "C",
    rate: "41%",
    focus: "Preparation of Insoluble Salts from Insoluble Carbonates",
    exp_a: "Incorrect. Direct addition of H2SO4(aq) to solid BaCO3 forms an insoluble crust of BaSO4 on the carbonate surface, stopping the reaction.",
    exp_b: "Incorrect. Concentrated H2SO4 also forms an insoluble BaSO4 barrier layer.",
    exp_c: "Correct. BaCO3 is first dissolved in excess dilute HCl(aq) to form soluble BaCl2(aq): BaCO3(s) + 2HCl(aq) -> BaCl2(aq) + CO2(g) + H2O(l). Then H2SO4(aq) or Na2SO4(aq) is added to precipitate pure BaSO4(s): Ba2+(aq) + SO4^2-(aq) -> BaSO4(s).",
    exp_d: "Incorrect. Concentrated HCl is unnecessary and Na2SO4 alone cannot dissolve solid BaCO3."
  },
  {
    q_no: 9,
    key: "A",
    rate: "64%",
    focus: "Reactions and Properties of Aqueous Potassium Hydroxide",
    exp_a: "Correct (INCORRECT statement). Adding KOH(aq) to iron(III) sulphate solution forms a reddish-brown precipitate of Fe(OH)3(s), NOT a dirty green precipitate (which is Fe(OH)2 from Fe^2+).",
    exp_b: "Incorrect statement is false (fact is true). Heating KOH(aq) with NH4Cl(aq) liberates alkaline ammonia gas (NH3(g)).",
    exp_c: "Incorrect statement is false (fact is true). Dilute KOH(aq) contains K+, OH-, and auto-ionized H+ ions (Kw = [H+][OH-]).",
    exp_d: "Incorrect statement is false (fact is true). Concentrated KOH(aq) is strongly caustic and corrosive."
  },
  {
    q_no: 10,
    key: "C",
    rate: "75%",
    focus: "Arranging Acidic and Alkaline Solutions in Increasing Order of pH",
    exp_a: "Incorrect. H2SO4 (dibasic) has higher [H+] and lower pH than HNO3.",
    exp_b: "Incorrect. Reverses the alkaline pH order.",
    exp_c: "Correct. X (0.01 M H2SO4) has [H+] = 0.02 M (pH = 1.70). W (0.01 M HNO3) has [H+] = 0.01 M (pH = 2.00). Y (0.01 M KOH) has [OH-] = 0.01 M (pH = 12.00). Z (0.10 M KOH) has [OH-] = 0.10 M (pH = 13.00). Increasing order of pH: X < W < Y < Z.",
    exp_d: "Incorrect. Reverses Y and Z."
  },
  {
    q_no: 11,
    key: "A",
    rate: "62%",
    focus: "Precipitation Reactions in Aqueous Solutions",
    exp_a: "Correct. Mixing lead(II) nitrate and aqueous ammonia precipitates insoluble white lead(II) hydroxide: Pb2+(aq) + 2OH-(aq) -> Pb(OH)2(s).",
    exp_b: "Incorrect. Copper(II) sulphate and sodium nitrate produce Cu(NO3)2 and Na2SO4, both of which are completely water-soluble.",
    exp_c: "Incorrect. Calcium chloride and sodium nitrate form only soluble ions.",
    exp_d: "Incorrect. FeSO4 and acidified K2Cr2O7 undergo redox to form soluble Fe3+ and Cr3+ ions (orange to green solution, no precipitate)."
  },
  {
    q_no: 12,
    key: "D",
    rate: "80%",
    focus: "Periodic Trends in Group II (Alkaline Earth Metals)",
    exp_a: "Incorrect statement is false (fact is true). Radium is a metal with delocalized electrons that conduct electricity in the solid state.",
    exp_b: "Incorrect statement is false (fact is true). Radium atoms readily donate 2 valence electrons to form Ra2+ ions.",
    exp_c: "Incorrect statement is false (fact is true). Both radium and calcium form an oxide/carbonate tarnish on exposure to air.",
    exp_d: "Correct (INCORRECT statement). Reactivity increases down Group II due to increasing atomic radius and electron shielding; Radium is MORE reactive than Calcium, not less."
  },
  {
    q_no: 13,
    key: "D",
    rate: "74%",
    focus: "Empirical Formula Calculation of Titanium Oxide",
    exp_a: "Incorrect. TiO gives mole ratio 1:1.",
    exp_b: "Incorrect. Ti2O3 gives mole ratio 2:3.",
    exp_c: "Incorrect. Ti3O4 gives mole ratio 3:4.",
    exp_d: "Correct. Mass of Ti = 2.66 g; Mass of O = 4.44 - 2.66 = 1.78 g. Moles: n(Ti) = 2.66 / 47.9 = 0.0555 mol; n(O) = 1.78 / 16.0 = 0.1113 mol. Ratio n(Ti) : n(O) = 0.0555 : 0.1113 = 1 : 2. Empirical formula = TiO2."
  },
  {
    q_no: 14,
    key: "B",
    rate: "81%",
    focus: "Monomer Identification & IUPAC Nomenclature of Addition Polymer",
    exp_a: "Incorrect. Numbering must start from the alkene carbon bearing the substituents.",
    exp_b: "Correct. The repeating unit is -[CH(CH3)-CCl2]-, which corresponds to the addition polymerization of 1,1-dichloropropene (CH3-CH=CCl2).",
    exp_c: "Incorrect. 1,2-dichloropropene gives -[CH(CH3)-CCl(Cl)]- repeating units.",
    exp_d: "Incorrect. 3,3-dichloropropene has chlorines on an sp3 carbon."
  },
  {
    q_no: 15,
    key: "B",
    rate: "46%",
    focus: "Direct vs Indirect Enthalpy Determination (Hess's Law)",
    exp_a: "Incorrect. Displacement of Cu2+ by Zn(s) in a polystyrene cup proceeds rapidly to completion and can be measured directly.",
    exp_b: "Correct. Incomplete combustion of carbon to CO(g) cannot be carried out without simultaneously forming CO2(g); therefore, Delta H must be determined indirectly using Hess's Law from the combustion of C(s) and CO(g).",
    exp_c: "Incorrect. Combustion of ethanol can be determined directly with a flame calorimeter.",
    exp_d: "Incorrect. Neutralization of MgO with HCl(aq) is fast and can be measured directly in a cup calorimeter."
  },
  {
    q_no: 16,
    key: "C",
    rate: "65%",
    focus: "Balancing Redox Chemical Equations with Hydrogen Peroxide",
    exp_a: "Incorrect. y=4 does not balance oxygen atoms.",
    exp_b: "Incorrect. y=5, z=4 does not balance hydrogen atoms.",
    exp_c: "Correct. In acidic solution: 2IO3^- + 5H2O2 + 2H+ -> I2 + 5O2 + 6H2O. Iodate is reduced (2 I(+5) -> I2(0), gaining 10 e-) and 5 H2O2 are oxidized (10 O(-1) -> 5 O2(0), losing 10 e-). Stoichiometric coefficients: y = 5 and z = 6.",
    exp_d: "Incorrect. y=6, z=6 does not balance electrons."
  },
  {
    q_no: 17,
    key: "A",
    rate: "59%",
    focus: "Oxidation Number of Sulphur & Electrolytic Production of Peroxodisulphate",
    exp_a: "Correct. In KHSO4, K is +1, H is +1, and O is -2: +1 + +1 + x + 4(-2) = 0 => x = +6. During electrolysis of saturated KHSO4(aq), HSO4^- ions are oxidized at the ANODE (positive electrode) to form peroxodisulphate: 2HSO4^-(aq) -> S2O8^2-(aq) + 2H+(aq) + 2e-.",
    exp_b: "Incorrect. Reduction of H+ occurs at the cathode, producing H2(g).",
    exp_c: "Incorrect. Oxidation number of S is +6, not +4.",
    exp_d: "Incorrect. Oxidation number of S is +6 and oxidation occurs at the anode."
  },
  {
    q_no: 18,
    key: "A",
    rate: "58%",
    focus: "Hess's Law Calculation: Standard Enthalpy of Formation of Propane",
    exp_a: "Correct. Molar enthalpy of combustion Delta H_c[C3H8] = -111 kJ / 0.050 mol = -2220 kJ mol^-1. Combustion reaction: C3H8(g) + 5O2(g) -> 3CO2(g) + 4H2O(l). By Hess's Law: Delta H_f[C3H8] = 3 * Delta H_f[CO2] + 4 * Delta H_f[H2O] - Delta H_c[C3H8] = 3(-394) + 4(-286) - (-2220) = -1182 - 1144 + 2220 = -106 kJ mol^-1.",
    exp_b: "Incorrect. Sign error (+106 kJ mol^-1).",
    exp_c: "Incorrect. Calculation arithmetic error.",
    exp_d: "Incorrect. Positive sign error."
  },
  {
    q_no: 19,
    key: "B",
    rate: "65%",
    focus: "Reactions and Properties of Limestone (Calcium Carbonate)",
    exp_a: "Incorrect. Statement (1) is false because calcium gives a brick-red flame (sodium gives golden-yellow).",
    exp_b: "Correct. Statement (2) only: Strong heating of limestone (CaCO3) decomposes it to CaO and colourless CO2 gas (CaCO3(s) -> CaO(s) + CO2(g)). Statement (1) is false (calcium gives brick-red flame). Statement (3) is false (CaCO3 forms an insoluble crust of CaSO4 in dilute H2SO4, giving a cloudy mixture).",
    exp_c: "Incorrect. Statements (1) and (3) are both false.",
    exp_d: "Incorrect. Statement (3) is false."
  },
  {
    q_no: 20,
    key: "D",
    rate: "58%",
    focus: "Properties and Reactions of Methanol",
    exp_a: "Incorrect. Statement (1) is false because methanol is completely miscible with water in all proportions.",
    exp_b: "Incorrect. Statement (3) is also correct.",
    exp_c: "Incorrect. Statement (1) is false.",
    exp_d: "Correct. Statement (2) is true: methanol is a neutral organic molecule and does not change the colour of litmus. Statement (3) is true: methanol has a low carbon-to-hydrogen ratio and burns completely with a clean, non-luminous pale blue flame. Statement (1) is false (completely miscible with water)."
  },
  {
    q_no: 21,
    key: "D",
    rate: "72%",
    focus: "Classification of Electrochemical Cells: Primary vs Secondary Cells",
    exp_a: "Incorrect. Alkaline manganese cell (1) is a primary cell and cannot be recharged.",
    exp_b: "Incorrect. Statement (3) is also a secondary cell.",
    exp_c: "Incorrect. Alkaline manganese cell is a primary cell.",
    exp_d: "Correct. Secondary cells are rechargeable batteries. Lithium-ion cells (2) and nickel-metal hydride (NiMH) cells (3) can be recharged by reversing the electrochemical reactions using an external electrical power source. Alkaline manganese cells (1) are non-rechargeable primary cells."
  },
  {
    q_no: 22,
    key: "D",
    rate: "49%",
    focus: "Distinguishing Sodium Sulphite and Sodium Sulphate using Redox Reagents",
    exp_a: "Incorrect. Iron(II) chloride solution does not give a distinctive observable change with either salt.",
    exp_b: "Incorrect. Reagent (3) is also effective.",
    exp_c: "Incorrect. Reagent (1) is ineffective.",
    exp_d: "Correct. Reagents (2) and (3) both distinguish sodium sulphite (reducing agent) from sodium sulphate (non-reducing): (2) Acidified KMnO4 is decolorized from purple to colourless by SO3^2- but unaffected by SO4^2-; (3) Concentrated HNO3 oxidizes SO3^2- to SO4^2- with the evolution of pungent brown NO2 gas, while no reaction occurs with SO4^2-."
  },
  {
    q_no: 23,
    key: "B",
    rate: "61%",
    focus: "Octet Rule Applicability in Covalent Molecules (Odd-Electron Molecules)",
    exp_a: "Incorrect. OF2 has 8 electrons around oxygen and 8 around each fluorine (octet holds).",
    exp_b: "Correct. In nitrogen dioxide (NO2), nitrogen has 5 valence electrons and each oxygen has 6, totaling 17 valence electrons (an odd-electron molecule / free radical); the central nitrogen atom possesses only 7 valence electrons, so the octet rule is NOT applicable.",
    exp_c: "Incorrect. CS2 follows the octet rule with two C=S double bonds.",
    exp_d: "Incorrect. CS2 obeys the octet rule."
  },
  {
    q_no: 24,
    key: "C",
    rate: "54%",
    focus: "Intermolecular Forces: Hydrogen Bonding in HF vs Van der Waals in HCl",
    exp_a: "Incorrect. 1st statement is false.",
    exp_b: "Incorrect. 1st statement is false.",
    exp_c: "Correct. 1st statement is FALSE: hydrogen fluoride (HF, b.p. +19.5 °C) has a much higher boiling point than hydrogen chloride (HCl, b.p. -85 °C) due to extensive intermolecular hydrogen bonding. 2nd statement is TRUE: chlorine has a larger atomic radius and more electron shells than fluorine, so the molecular size of HCl is greater than that of HF.",
    exp_d: "Incorrect. Statement 2 is true."
  },
  {
    q_no: 25,
    key: "D",
    rate: "79%",
    focus: "Kinetics: Effect of Surface Area on Reaction Rate vs Total Gas Yield",
    exp_a: "Incorrect. Higher plateau represents increased moles of reactant.",
    exp_b: "Incorrect. Slower rate should not have a steeper initial slope.",
    exp_c: "Incorrect. Granules react slower, so the curve should be less steep initially.",
    exp_d: "Correct. Using the same mass of calcium carbonate granules instead of powder reduces the exposed solid surface area, lowering the collision frequency and decreasing the initial rate of reaction (gentler initial slope), but since the mass of CaCO3 is identical, the final volume of CO2 gas liberated is the same, matching graph D."
  },
  {
    q_no: 26,
    key: "C",
    rate: "72%",
    focus: "Characteristic Properties of Transition Metals",
    exp_a: "Incorrect statement is false (fact is true). Transition metals form coloured compounds due to d-d electronic transitions.",
    exp_b: "Incorrect statement is false (fact is true). Transition metals exhibit variable oxidation states (e.g. Fe^2+, Fe^3+).",
    exp_c: "Correct (NOT a characteristic property). Reacting with dilute HCl to give H2 gas is a property of metals with negative standard reduction potentials (including s-block metals like Na, Mg); many transition metals (Cu, Ag, Au, Pt) do not react with dilute acids, so it is NOT a defining characteristic of transition metals.",
    exp_d: "Incorrect statement is false (fact is true). Transition metals and their compounds exhibit excellent catalytic properties."
  },
  {
    q_no: 27,
    key: "D",
    rate: "61%",
    focus: "Equilibrium Constant (Kc) Expression & Calculation",
    exp_a: "Incorrect. Forgot to divide moles by 2.0 dm^3 volume.",
    exp_b: "Incorrect. Inverted Kc expression.",
    exp_c: "Incorrect. Omitted power of 3 for Y2.",
    exp_d: "Correct. Reaction: X2(g) + 3Y2(g) <=> 2XY3(g). In 2.0 dm^3 vessel: [X2] = 0.4 / 2.0 = 0.20 M; [Y2] = 0.3 / 2.0 = 0.15 M; [XY3] = 0.4 / 2.0 = 0.20 M. Kc = [XY3]^2 / ([X2][Y2]^3) = (0.20)^2 / [0.20 * (0.15)^3] = 0.040 / [0.20 * 0.003375] = 0.040 / 0.000675 = 59.3 mol^-2 dm^6."
  },
  {
    q_no: 28,
    key: "A",
    rate: "79%",
    focus: "Effect of Catalyst on Forward Rate, Backward Rate & Equilibrium Yield",
    exp_a: "Correct. A catalyst provides an alternative reaction pathway with a lower activation energy for BOTH the forward and reverse reactions, increasing the forward rate and backward rate equally while leaving the equilibrium position and percentage yield of XY3(g) UNCHANGED.",
    exp_b: "Incorrect. Catalyst increases both reaction rates.",
    exp_c: "Incorrect. Catalyst does not increase equilibrium yield.",
    exp_d: "Incorrect. Catalyst does not decrease rates or yields."
  },
  {
    q_no: 29,
    key: "B",
    rate: "56%",
    focus: "Structure, Functional Groups & Properties of Fructose",
    exp_a: "Incorrect. Empirical formula of fructose is CH2O (molecular formula is C6H12O6).",
    exp_b: "Correct. Fructose contains primary and secondary alcohol functional groups (-CH2OH and -CH(OH)-) that are oxidized by acidified potassium dichromate solution upon warming, turning the solution from orange (Cr2O7^2-) to green (Cr^3+).",
    exp_c: "Incorrect. Fructose contains five polar -OH groups that form extensive hydrogen bonds with water, making it highly water-soluble.",
    exp_d: "Incorrect. Fructose has 3 chiral carbon atoms (C3, C4, C5), not 5."
  },
  {
    q_no: 30,
    key: "D",
    rate: "65%",
    focus: "Enantiomers: Physical & Thermodynamic Properties",
    exp_a: "Incorrect. X and Y are non-superimposable mirror images (a pair of enantiomers), not identical molecules.",
    exp_b: "Incorrect. They have the same structural connectivity; they are stereoisomers (enantiomers).",
    exp_c: "Incorrect. Enantiomers have identical boiling points and cannot be separated by simple or fractional distillation.",
    exp_d: "Correct. Enantiomers possess identical chemical bonding and thermodynamic stability in achiral environments, so they have the identical standard enthalpy change of combustion."
  },
  {
    q_no: 31,
    key: "B",
    rate: "70%",
    focus: "Reactions of Alkenes: Hydrogenation & Bromination",
    exp_a: "Incorrect. X (2-methylpropene) and Y (but-2-ene) are structural (positional/chain) isomers, not geometrical isomers.",
    exp_b: "Correct. Both X and Y contain carbon-carbon double bonds (C=C) and undergo catalytic hydrogenation with H2(g) in the presence of a finely divided nickel catalyst to form butane and 2-methylpropane respectively.",
    exp_c: "Incorrect. X reacts with Br2 in CH3CCl3 to give 1,2-dibromo-2-methylpropane, while Y gives 2,3-dibromobutane (different products).",
    exp_d: "Incorrect. Polymerization of X yields poly(2-methylpropene), while Y does not readily homopolymerize to the same addition polymer."
  },
  {
    q_no: 32,
    key: "A",
    rate: "41%",
    focus: "Alkaline Hydrolysis of Amides (Ethanamide with Sodium Hydroxide)",
    exp_a: "Correct. Statement (1) only: Heating ethanamide with NaOH(aq) hydrolyzes the amide to form sodium ethanoate and ammonia gas: CH3CONH2 + NaOH -> CH3COONa + NH3(g). Statement (2) is false (NaOH is a stoichiometric reactant consumed in the reaction, not a catalyst). Statement (3) is false (ammonia gas escapes under reflux, driving the reaction to completion).",
    exp_b: "Incorrect. Statement (2) is false.",
    exp_c: "Incorrect. Statement (3) is false.",
    exp_d: "Incorrect. Statements (2) and (3) are both false."
  },
  {
    q_no: 33,
    key: "B",
    rate: "81%",
    focus: "Monitoring Reaction Progress using Colorimetry",
    exp_a: "Incorrect. Reaction (2) produces no coloured species (both SO3^2- and SO2 are colourless).",
    exp_b: "Correct. Colorimetry measures the change in light absorbance of a coloured species over time. In Reaction (1), purple MnO4^-(aq) is reduced to colourless Mn^2+(aq). In Reaction (3), orange-brown aqueous bromine (Br2(aq)) is consumed to form colourless bromide ions. Reaction (2) involves only colourless species.",
    exp_c: "Incorrect. Reaction (2) cannot be followed by colorimetry.",
    exp_d: "Incorrect. Reaction (2) has no coloured species."
  },
  {
    q_no: 34,
    key: "C",
    rate: "56%",
    focus: "Organic Synthetic Pathway: Benzylic Free Radical Halogenation & Hydrolysis",
    exp_a: "Incorrect. Statement (1) is false: using excess Br2(l) causes multiple substitutions on the methyl side chain.",
    exp_b: "Incorrect. Statement (1) is false.",
    exp_c: "Correct. Statement (2) is true: free radical substitution of the benzylic methyl group of toluene requires UV light or heat to initiate homolytic fission of Br2. Statement (3) is true: (bromomethyl)benzene undergoes nucleophilic substitution with warm aqueous KOH(aq) to form phenylmethanol.",
    exp_d: "Incorrect. Statement (1) is false."
  },
  {
    q_no: 35,
    key: "A",
    rate: "31%",
    focus: "Preparation & Purification of 2-chloro-2-methylpropane (Tertiary Haloalkane)",
    exp_a: "Correct. Statements (1) and (2) are correct: (1) 2-chloro-2-methylpropane is immiscible with water and separates as an upper organic layer above the aqueous acid layer; (2) washing with dilute Na2CO3(aq) neutralizes and removes residual acidic HCl. Statement (3) is false: unreacted tertiary alcohol is removed by washing with water, not simple distillation.",
    exp_b: "Incorrect. Statement (3) is false.",
    exp_c: "Incorrect. Statement (3) is false.",
    exp_d: "Incorrect. Statement (3) is false."
  },
  {
    q_no: 36,
    key: "C",
    rate: "62%",
    focus: "Acid-Base Nature & Bonding of Period 3 Oxides (Al2O3 vs MgO)",
    exp_a: "Incorrect. 1st statement is false.",
    exp_b: "Incorrect. 1st statement is false.",
    exp_c: "Correct. 1st statement is FALSE: aluminium oxide (Al2O3) is an AMPHOTERIC oxide (reacts with both acids and strong bases), whereas magnesium oxide (MgO) is a strictly BASIC oxide (reacts with acids only). 2nd statement is TRUE: both Al2O3 and MgO are giant ionic oxides held together by ionic bonds between metal cations and oxide anions.",
    exp_d: "Incorrect. Statement 2 is true."
  }
];

export const data2014: ExamQuestion[] = [
  {
    q_no: 1,
    key: "C",
    rate: "74%",
    focus: "Number of Neutrons in Transition Metal Isotopes",
    exp_a: "Incorrect. 63Cu (Z=29): number of neutrons = 63 - 29 = 34.",
    exp_b: "Incorrect. 59Co (Z=27): number of neutrons = 59 - 27 = 32.",
    exp_c: "Correct. 58Ni (Z=28): number of neutrons = 58 - 28 = 30. (57Fe has 57 - 26 = 31 neutrons). 58Ni has the smallest number of neutrons.",
    exp_d: "Incorrect. 57Fe (Z=26): number of neutrons = 57 - 26 = 31."
  },
  {
    q_no: 2,
    key: "D",
    rate: "75%",
    focus: "Giant Ionic Structure vs Simple Molecular Substances",
    exp_a: "Incorrect. N2O4 consists of discrete simple covalent molecules held by weak van der Waals forces.",
    exp_b: "Incorrect. Pure HNO3 consists of simple covalent molecules held by hydrogen bonds and van der Waals forces.",
    exp_c: "Incorrect. NCl3 has a simple molecular trigonal pyramidal structure.",
    exp_d: "Correct. Ammonium nitrate (NH4NO3) is an ionic compound composed of polyatomic NH4+ cations and NO3- anions held in a 3D giant ionic lattice by strong electrostatic attractions."
  },
  {
    q_no: 3,
    key: "A",
    rate: "19%",
    focus: "Electrochemical Corrosion Rates of Iron in Aqueous Media",
    exp_a: "Correct. In Z (distilled water), corrosion is slowest due to low ion concentration and unaccelerated conditions. In Y (1 M Zn(NO3)2(aq)), Zn2+ does not displace iron, but the salt solution conducts ions, moderately speeding corrosion. In X (1 M AgNO3(aq)), iron displaces silver (Fe + 2Ag+ -> Fe2+ + 2Ag), forming a Fe-Ag galvanic couple where Ag accelerates iron oxidation very rapidly. Ascending order: Z < Y < X.",
    exp_b: "Incorrect. Y is faster than Z because electrolyte ions increase corrosion rate.",
    exp_c: "Incorrect. X corrodes fastest due to galvanic coupling with displaced silver.",
    exp_d: "Incorrect. X has the fastest corrosion rate, not the slowest."
  },
  {
    q_no: 4,
    key: "D",
    rate: "62%",
    focus: "Stoichiometry & Limiting Reactant in Blast Furnace Iron Reduction",
    exp_a: "Incorrect. N moles assumes Fe2O3 is limiting with 1:1 conversion.",
    exp_b: "Incorrect. 2N moles assumes 100% conversion of CO without stoichiometric factor.",
    exp_c: "Incorrect. Inverted 3/2 stoichiometric factor.",
    exp_d: "Correct. Reaction: Fe2O3(s) + 3CO(g) -> 2Fe(s) + 3CO2(g). Stoichiometric ratio Fe2O3 : CO = 1 : 3. With N moles Fe2O3 and 2N moles CO, CO is the limiting reactant (N moles Fe2O3 would require 3N moles CO). Moles of Fe formed = (2/3) * (moles of CO) = (2/3) * (2N) = 4/3 N."
  },
  {
    q_no: 5,
    key: "C",
    rate: "84%",
    focus: "Water of Crystallization & Formula of Hydrated Salt",
    exp_a: "Incorrect. n=2 gives mass % of water = 36.0 / (120.3 + 36.0) = 23.0%.",
    exp_b: "Incorrect. n=5 gives mass % of water = 90.0 / (120.3 + 90.0) = 42.8%.",
    exp_c: "Correct. Mass % of water = [18.0n / (120.3 + 18.0n)] * 100% = 51.16%. Solving: 18.0n = 0.5116(120.3) + 0.5116(18.0n) => 18.0n(1 - 0.5116) = 61.545 => 8.791n = 61.545 => n = 7.00.",
    exp_d: "Incorrect. n=10 gives mass % of water = 180.0 / (120.3 + 180.0) = 59.9%."
  },
  {
    q_no: 6,
    key: "C",
    rate: "64%",
    focus: "Sulphate Ion Concentration in Mixed Salt Solutions",
    exp_a: "Incorrect. Arithmetic dilution error.",
    exp_b: "Incorrect. Omitted factor of 3 for Fe2(SO4)3.",
    exp_c: "Correct. Moles of SO4^2- from FeSO4 = 0.050 dm^3 * 0.6 M = 0.030 mol. Moles of SO4^2- from Fe2(SO4)3 = 0.150 dm^3 * 0.2 M * 3 = 0.090 mol. Total moles of SO4^2- = 0.030 + 0.090 = 0.120 mol. Total volume = 50.0 + 150.0 = 200.0 cm^3 = 0.200 dm^3. Resulting [SO4^2-] = 0.120 mol / 0.200 dm^3 = 0.60 M.",
    exp_d: "Incorrect. Directly summed concentrations without volume weighting."
  },
  {
    q_no: 7,
    key: "B",
    rate: "32%",
    focus: "Electrical Conductivity & Precipitation Neutralization Reactions",
    exp_a: "Incorrect. HNO3 + KOH produces soluble KNO3(aq) containing mobile K+ and NO3- ions (high conductivity).",
    exp_b: "Correct. Mixing equimolar H2SO4(aq) and Ba(OH)2(aq) undergoes precipitation and neutralization: H2SO4(aq) + Ba(OH)2(aq) -> BaSO4(s) + 2H2O(l). Insoluble BaSO4 precipitates completely and water is virtually non-ionized, removing virtually all mobile ions and resulting in the lowest electrical conductivity.",
    exp_c: "Incorrect. CH3COOH + NH3 produces soluble CH3COONH4(aq) with mobile ammonium and ethanoate ions.",
    exp_d: "Incorrect. HCl + glucose retains mobile H+(aq) and Cl-(aq) ions from HCl."
  },
  {
    q_no: 8,
    key: "B",
    rate: "78%",
    focus: "Electrophilic Addition of Halogens to Haloalkenes",
    exp_a: "Incorrect. Structure shows 1,1-dichloro-2-bromoethane with incorrect regiochemistry.",
    exp_b: "Correct. Reaction of bromoethene (CH2=CHBr) with chlorine (Cl2) in an organic solvent is an electrophilic addition across the C=C double bond, adding one Cl atom to each carbon to form 1-bromo-1,2-dichloroethane (CH2Cl-CHBrCl, matching structure B).",
    exp_c: "Incorrect. Shows 1,2-dichloroethene instead of saturated product.",
    exp_d: "Incorrect. Shows substitution of bromine by chlorine."
  },
  {
    q_no: 9,
    key: "A",
    rate: "76%",
    focus: "Hess's Law Calculation: Standard Enthalpy of Formation of Diborane",
    exp_a: "Correct. Target formation reaction: 2B(s) + 3H2(g) -> B2H6(g). Given: (1) B2H6 + 3O2 -> B2O3 + 3H2O (Delta H = -2170 kJ); (2) 2B + 3/2 O2 -> B2O3 (Delta H = 2 * -635 = -1270 kJ); (3) 3H2 + 3/2 O2 -> 3H2O (Delta H = 3 * -286 = -858 kJ). By Hess's Law: Delta H_f[B2H6] = Delta H(2) + Delta H(3) - Delta H(1) = (-1270) + (-858) - (-2170) = -2128 + 2170 = +42 kJ mol^-1.",
    exp_b: "Incorrect. Calculation arithmetic error.",
    exp_c: "Incorrect. Sign error in cycle summation.",
    exp_d: "Incorrect. Omitted reversing equation (1)."
  },
  {
    q_no: 10,
    key: "D",
    rate: "70%",
    focus: "Free Radical Polysubstitution of Methane with Halogens",
    exp_a: "Incorrect. Reaction cannot be stopped selectively at CCl4 with 1:2 molar ratio.",
    exp_b: "Incorrect. Free radical substitution is non-selective and produces a statistical mixture.",
    exp_c: "Incorrect. Monochloromethane (CH3Cl) and trichloromethane (CHCl3) are also formed.",
    exp_d: "Correct. In the photochemical reaction between methane and chlorine, successive free radical chain propagation steps occur concurrently, yielding a mixture containing all four chloromethanes: CH3Cl, CH2Cl2, CHCl3, and CCl4."
  },
  {
    q_no: 11,
    key: "C",
    rate: "61%",
    focus: "Electroplating Circuitry & Cathode Reactions",
    exp_a: "Incorrect. Metal M can be an inert electrode (e.g. platinum) if silver ions are replenished in the solution.",
    exp_b: "Incorrect. Silver chloride (AgCl) is practically insoluble in water and cannot form an electrolytic solution.",
    exp_c: "Correct. In electroplating, the object to be plated (the spoon) must act as the CATHODE and be connected to the negative pole of the battery, where silver cations are reduced and deposited: Ag+(aq) + e- -> Ag(s).",
    exp_d: "Incorrect. Electrons flow through external wire circuits, not through the electrolytic solution (ions carry current in solution)."
  },
  {
    q_no: 12,
    key: "D",
    rate: "48%",
    focus: "Thermometric Titration: Graphical Extrapolation of Temperature Rise",
    exp_a: "Incorrect. 2.0 °C is an un-extrapolated incremental reading.",
    exp_b: "Incorrect. 4.6 °C is an uncorrected temperature rise.",
    exp_c: "Incorrect. 6.2 °C is the uncorrected maximum rise from recorded points.",
    exp_d: "Correct. By extrapolating the rising and cooling lines on the temperature-volume graph, the theoretical maximum temperature achieved without heat loss is 31.6 °C. With an initial temperature of 25.0 °C, the greatest temperature rise is 31.6 - 25.0 = 6.6 °C."
  },
  {
    q_no: 13,
    key: "C",
    rate: "76%",
    focus: "pH of Gaseous Oxides and Hydrides in Aqueous Solution",
    exp_a: "Incorrect. NO2 dissolves in water to form acidic HNO2 and HNO3 (pH < 7).",
    exp_b: "Incorrect. SO2 dissolves in water to form acidic H2SO3 (pH < 7).",
    exp_c: "Correct. Ammonia (NH3) is an alkaline gas that dissolves in water to form aqueous ammonia: NH3(aq) + H2O(l) <=> NH4+(aq) + OH-(aq), releasing hydroxide ions to give an alkaline solution with pH > 7 (highest pH).",
    exp_d: "Incorrect. HCl dissolves completely to form strongly acidic hydrochloric acid (pH ≈ 2.7 for 0.002 M)."
  },
  {
    q_no: 14,
    key: "A",
    rate: "68%",
    focus: "Thermal Decomposition of Metal Oxides (Reactivity Series)",
    exp_a: "Correct. Mercury(II) oxide (HgO) is thermally unstable because mercury is very low in the reactivity series; strong heating decomposes it into liquid mercury and oxygen gas (2HgO(s) -> 2Hg(l) + O2(g)), which relights a glowing wooden splint.",
    exp_b: "Incorrect. Al2O3 is thermally very stable and does not decompose upon Bunsen heating.",
    exp_c: "Incorrect. CaCO3 decomposes into CaO and CO2 (which extinguishes flames).",
    exp_d: "Incorrect. MgCO3 decomposes into MgO and CO2."
  },
  {
    q_no: 15,
    key: "B",
    rate: "70%",
    focus: "Hazard Warning Labels for Concentrated Mineral Acids",
    exp_a: "Incorrect. Neither acid is classified under irritant alone.",
    exp_b: "Correct. Label (2) CORROSIVE only: Both concentrated sulphuric acid (18 M H2SO4) and concentrated hydrochloric acid (12 M HCl) cause severe chemical burns and skin destruction, requiring the standard 'Corrosive' hazard symbol. Concentrated HCl is non-oxidizing (so label 3 is absent on HCl bottles).",
    exp_c: "Incorrect. Concentrated HCl is not an oxidizing acid.",
    exp_d: "Incorrect. Concentrated HCl does not carry the oxidizing hazard label."
  },
  {
    q_no: 16,
    key: "A",
    rate: "88%",
    focus: "Zinc-Carbon (Leclanché) Dry Cell Operations",
    exp_a: "Correct. Statement (1) only: In a zinc-carbon cell, zinc metal is oxidized at the anode casing during discharge (Zn(s) -> Zn2+(aq) + 2e-), causing the outer zinc casing to become progressively thinner. Statement (2) is false (voltage drops gradually from 1.5 V). Statement (3) is false (zinc-carbon is a non-rechargeable primary cell).",
    exp_b: "Incorrect. Statement (2) is false.",
    exp_c: "Incorrect. Statement (3) is false.",
    exp_d: "Incorrect. Statements (2) and (3) are both false."
  },
  {
    q_no: 17,
    key: "A",
    rate: "88%",
    focus: "Environmental Advantages of Natural Gas vs Coal",
    exp_a: "Correct. Statements (1) and (2) are correct: (1) Natural gas (methane) mixes readily with air and burns cleanly with virtually no soot particulates; (2) Natural gas contains negligible sulfur impurities, significantly reducing SO2 acid rain emissions compared to coal. Statement (3) is false (natural gas is a non-renewable fossil fuel).",
    exp_b: "Incorrect. Statement (3) is false.",
    exp_c: "Incorrect. Statement (3) is false.",
    exp_d: "Incorrect. Statement (3) is false."
  },
  {
    q_no: 18,
    key: "B",
    rate: "66%",
    focus: "Reactions and Observations of Potassium with Water",
    exp_a: "Incorrect. Statement (2) is false because KOH(aq) turns phenolphthalein pink/magenta.",
    exp_b: "Correct. Statements (1) and (3) are correct: (1) Reaction 2K(s) + 2H2O(l) -> 2KOH(aq) + H2(g) is highly exothermic; (3) Heat ignites hydrogen gas, burning with a characteristic lilac flame due to potassium excitation. Statement (2) is false (solution turns pink, not colourless).",
    exp_c: "Incorrect. Statement (2) is false.",
    exp_d: "Incorrect. Statement (2) is false."
  },
  {
    q_no: 19,
    key: "D",
    rate: "38%",
    focus: "Gas Reaction Stoichiometry: Oxygen Absorption by Hot Metals",
    exp_a: "Incorrect. Statement (3) is also correct.",
    exp_b: "Incorrect. Statement (2) is also correct.",
    exp_c: "Incorrect. Statement (1) is also correct.",
    exp_d: "Correct. All three statements (1), (2), and (3) are correct: (1) Hot copper reacts with O2 to form black copper(II) oxide (2Cu + O2 -> 2CuO); (2) 25 cm3 of O2 is completely absorbed, decreasing gas volume by 25 cm3 (N2 and He remain unreacted); (3) Excess iron powder also reacts with and completely absorbs the 25 cm3 of O2."
  },
  {
    q_no: 20,
    key: "A",
    rate: "63%",
    focus: "Electrical Conductivity of Ionic Solids vs Molten/Aqueous Electrolytes",
    exp_a: "Correct. Solid NaBr contains ions locked in fixed lattice positions and cannot conduct electricity. Melting NaBr (1) or dissolving it in deionized water (2) breaks down the giant ionic lattice, liberating mobile Na+ and Br- ions to conduct electricity and light the bulb. Liquid bromine (3) is a non-conducting simple covalent molecular substance.",
    exp_b: "Incorrect. Liquid bromine does not contain mobile ions.",
    exp_c: "Incorrect. Liquid bromine cannot conduct electricity.",
    exp_d: "Incorrect. Method (3) does not conduct electricity."
  },
  {
    q_no: 21,
    key: "D",
    rate: "32%",
    focus: "Qualitative Analysis: Chemical Reactions Showing Blue Colour",
    exp_a: "Incorrect. Process (3) also shows a blue colour.",
    exp_b: "Incorrect. Process (2) also shows a deep blue colour.",
    exp_c: "Incorrect. Process (1) also shows a blue colour.",
    exp_d: "Correct. All three processes (1), (2), and (3) produce a blue colour: (1) Alkaline NaOH(aq) turns litmus indicator blue; (2) Excess aqueous ammonia with CuSO4 forms deep blue tetraamminecopper(II) complex [Cu(NH3)4]^2+(aq); (3) Mixing K3Fe(CN)6(aq) with FeCl2(aq) forms a dark blue precipitate (Turnbull's blue / Prussian blue, Fe3[Fe(CN)6]2)."
  },
  {
    q_no: 22,
    key: "D",
    rate: "62%",
    focus: "Lewis Structures & Non-Octet Valence Configurations",
    exp_a: "Incorrect. Molecule (3) also has a non-octet structure.",
    exp_b: "Incorrect. Molecule (2) also has a non-octet structure.",
    exp_c: "Incorrect. Molecule (1) also has a non-octet structure.",
    exp_d: "Correct. All three molecules (1), (2), and (3) do not follow the octet rule: (1) NO2 has 17 valence electrons (odd-electron molecule with 7 electrons on N); (2) PBr5 has 10 valence electrons around phosphorus (expanded octet); (3) BCl3 has 6 valence electrons around boron (incomplete octet / electron-deficient)."
  },
  {
    q_no: 23,
    key: "B",
    rate: "74%",
    focus: "Molecular Polarity & Electrostatic Jet Deflection",
    exp_a: "Incorrect. Hexane is non-polar and does not deflect.",
    exp_b: "Correct. Polar liquids contain permanent molecular dipoles that align and attract towards a charged electrostatic rod. Water (1) is strongly polar (bent shape, H-bonding) and trichloromethane (3, CHCl3) is polar (tetrahedral with net dipole), so both deflect towards the rod. Hexane (2) is non-polar and shows no deflection.",
    exp_c: "Incorrect. Hexane is non-polar.",
    exp_d: "Incorrect. Hexane cannot deflect."
  },
  {
    q_no: 24,
    key: "D",
    rate: "51%",
    focus: "Properties & Definitions of Acidic Gases",
    exp_a: "Incorrect. Both statements are false.",
    exp_b: "Incorrect. Both statements are false.",
    exp_c: "Incorrect. 1st statement is false.",
    exp_d: "Correct. Both statements are FALSE: 1st statement is false because acidic gases like SO2 and CO2 react with basic solid CaO to form salts ONLY (CaO + SO2 -> CaSO3, CaO + CO2 -> CaCO3) without producing water. 2nd statement is false because acidic non-metal oxides (SO2, CO2, NO2) do not contain hydrogen."
  },
  {
    q_no: 25,
    key: "A",
    rate: "73%",
    focus: "Chemical Kinetics: Effect of Reactant Concentration on Initial Rate vs Gas Yield",
    exp_a: "Correct. Exp 1 uses 2.0 M H2O2 (higher concentration), so initial collision frequency is higher and initial rate of O2 formation in Exp 1 > Exp 2. Total moles of H2O2 = 0.050 dm^3 * 2.0 M = 0.10 mol in Exp 1, and 0.100 dm^3 * 1.0 M = 0.10 mol in Exp 2; since moles of reactant are equal, total volume of O2 formed is equal (Exp 1 = Exp 2).",
    exp_b: "Incorrect. Total volume of gas formed is equal in both experiments.",
    exp_c: "Incorrect. Initial rate is faster in Exp 1.",
    exp_d: "Incorrect. Initial rate is faster in Exp 1."
  },
  {
    q_no: 26,
    key: "B",
    rate: "68%",
    focus: "Equilibrium Constants for Combined & Reversed Reactions",
    exp_a: "Incorrect. Unit of K3 is mol^-1 dm^3.",
    exp_b: "Correct. Reaction 1 + Reaction 2 gives: A + B <=> E + F + G with equilibrium constant K_forward = K1 * K2. Reaction 3 is the reverse reaction (E + F + G <=> A + B), so K3 = 1 / K_forward = 1 / (K1 * K2). Unit of K3 = [A][B] / ([E][F][G]) = (M * M) / (M * M * M) = M^-1 = mol^-1 dm^3.",
    exp_c: "Incorrect. K3 is the reciprocal of K1 * K2.",
    exp_d: "Incorrect. K3 is the reciprocal."
  },
  {
    q_no: 27,
    key: "D",
    rate: "62%",
    focus: "Isomerism in Alkenes: Cis-Trans vs Optical Isomerism",
    exp_a: "Incorrect. Molecule has no chiral carbon and 0 enantiomers.",
    exp_b: "Incorrect. Molecule is achiral.",
    exp_c: "Incorrect. Molecule exhibits cis-trans isomerism.",
    exp_d: "Correct. For CH3-CH=CH-CH2-CH(C2H5)2: the C=C double bond has two different groups on each carbon (-H and -CH3 on C2; -H and -CH2CH(C2H5)2 on C3), giving 2 geometrical isomers (cis and trans). The C5 carbon is bonded to -H, -CH2CH=CHCH3, and two IDENTICAL ethyl groups (-C2H5), so it is NOT chiral and has 0 enantiomers."
  },
  {
    q_no: 28,
    key: "A",
    rate: "67%",
    focus: "Organic Reaction Sequences: Electrophilic Addition, Nucleophilic Substitution & Oxidation",
    exp_a: "Correct. Addition of HBr(g) to but-1-ene follows Markovnikov's rule to give P = 2-bromobutane (CH3CH2CHBrCH3). Nucleophilic substitution of P with NaOH(aq) yields secondary alcohol Q = butan-2-ol (CH3CH2CH(OH)CH3). Oxidation of Q with acidified K2Cr2O7 yields ketone R = butanone (CH3CH2COCH3).",
    exp_b: "Incorrect. Addition of HBr gives 2-bromobutane as major product, not 1-bromobutane.",
    exp_c: "Incorrect. Reagents give butan-2-ol, not alkene.",
    exp_d: "Incorrect. Oxidation of secondary alcohol yields ketone, not carboxylic acid."
  },
  {
    q_no: 29,
    key: "B",
    rate: "55%",
    focus: "Stereoisomerism: Identifying Identical 3D Conformers",
    exp_a: "Incorrect. Molecules in A are enantiomers.",
    exp_b: "Correct. In option B, both structures represent (2R)-2-bromobutane. Rotating molecule Z around its C-C sigma bonds superimposes directly onto molecule Y, confirming they are identical molecules.",
    exp_c: "Incorrect. Molecules in C are enantiomers.",
    exp_d: "Incorrect. Molecules in D are structural isomers (ester vs carboxylic acid)."
  },
  {
    q_no: 30,
    key: "C",
    rate: "77%",
    focus: "Periodic Trends: Electrical Conductivity of Period 3 Elements",
    exp_a: "Incorrect. Silicon is a semiconductor with low conductivity, not zero.",
    exp_b: "Incorrect. Aluminium has higher metallic conductivity than sodium and magnesium.",
    exp_c: "Correct. Metallic conductivity increases from Na (1 valence electron) to Mg (2 valence electrons) to Al (3 delocalized valence electrons per atom). Silicon is a semiconductor with very low conductivity. Non-metals (P4, S8, Cl2, Ar) have simple molecular structures with localized covalent bonds and zero conductivity, matching Graph C.",
    exp_d: "Incorrect. Non-metals have zero conductivity."
  },
  {
    q_no: 31,
    key: "D",
    rate: "28%",
    focus: "Le Chatelier's Principle & Reaction Rates on Decreasing Volume",
    exp_a: "Incorrect. Statement (1) is false: Kc depends strictly on temperature.",
    exp_b: "Incorrect. Statement (3) is also correct.",
    exp_c: "Incorrect. Statement (1) is false.",
    exp_d: "Correct. Statements (2) and (3) are correct: decreasing system volume increases total pressure and concentrations; the system shifts to the side with fewer gas moles (right side, forming SO3) (2), and because all concentrations are higher, both the forward rate and backward decomposition rate of SO3 increase (3). Statement (1) is false (Kc is constant at fixed T)."
  },
  {
    q_no: 32,
    key: "D",
    rate: "48%",
    focus: "Chemical Reactions and Medical Properties of Aspirin",
    exp_a: "Incorrect. Statement (1) is false because aspirin lacks a free phenolic -OH group.",
    exp_b: "Incorrect. Statement (3) is also correct.",
    exp_c: "Incorrect. Statement (1) is false.",
    exp_d: "Correct. Statements (2) and (3) are correct: aspirin (2-acetoxybenzoic acid) contains a carboxylic acid group (-COOH) that reacts with Na2CO3(aq) to liberate colourless CO2 gas (2), and functions pharmacologically as an analgesic/anti-inflammatory drug (3). Statement (1) is false because aspirin contains an ester and carboxylic acid, not a free alcohol/phenol to undergo esterification with ethanoic acid."
  },
  {
    q_no: 33,
    key: "A",
    rate: "49%",
    focus: "Functional Group Reactions of Substituted Cinnamate Esters",
    exp_a: "Correct. Statement (1) and (2) only: The active sunblock ingredient contains an ester functional group (-COOCH2CH(C2H5)C4H9) which hydrolyzes upon heating with NaOH(aq) (1), and an alkene C=C double bond which is oxidized and decolorizes acidified KMnO4(aq) (2). Statement (3) is false because PCl5 reacts with -OH and -COOH groups, which are absent in this ester molecule.",
    exp_b: "Incorrect. (1) also reacts.",
    exp_c: "Incorrect. (3) does not react.",
    exp_d: "Incorrect. (3) does not react."
  },
  {
    q_no: 34,
    key: "A",
    rate: "63%",
    focus: "Structure & Properties of Synthetic Detergents (Alkylbenzene Sulphonates)",
    exp_a: "Correct. Statements (1) and (2) are correct: (1) Synthetic alkylbenzene sulphonate detergents do not form precipitates (scum) with Ca2+ or Mg2+ ions in hard water; (2) Their hydrophobic non-polar hydrocarbon tail and hydrophilic polar sulphonate head (-SO3- Na+) act as an emulsifier to form stable oil-in-water emulsions. Statement (3) is false (reacting vegetable oil with NaOH produces soap carboxylates, not alkylbenzene sulphonates).",
    exp_b: "Incorrect. Statement (3) is false.",
    exp_c: "Incorrect. Statement (3) is false.",
    exp_d: "Incorrect. Statement (3) is false."
  },
  {
    q_no: 35,
    key: "D",
    rate: "80%",
    focus: "Dynamic Nature of Chemical Equilibrium",
    exp_a: "Incorrect. Both statements are false.",
    exp_b: "Incorrect. Both statements are false.",
    exp_c: "Incorrect. 1st statement is false.",
    exp_d: "Correct. Both statements are FALSE: 1st statement is false because chemical equilibrium is dynamic, meaning the forward reaction rate and backward reaction rate are EQUAL and NON-ZERO (not zero). 2nd statement is false because reactants continually react to form products at the exact same rate products reform reactants."
  },
  {
    q_no: 36,
    key: "C",
    rate: "62%",
    focus: "Solubility and Amphoteric Behavior of Aluminium Oxide",
    exp_a: "Incorrect. 1st statement is false.",
    exp_b: "Incorrect. 1st statement is false.",
    exp_c: "Correct. 1st statement is FALSE: aluminium oxide (Al2O3) has a very high lattice energy and is practically INSOLUBLE in pure water. 2nd statement is TRUE: aluminium oxide is an amphoteric oxide that reacts with both acids (forming Al3+(aq)) and strong alkalis (forming [Al(OH)4]-(aq)).",
    exp_d: "Incorrect. Statement 2 is true."
  }
];

export const data2015: ExamQuestion[] = [
  {
    q_no: 1,
    key: "A",
    rate: "46%",
    focus: "Auto-ionization of Water & Definition of Aqueous Acids",
    exp_a: "Correct. Due to the auto-ionization equilibrium of water (H2O(l) <=> H+(aq) + OH-(aq)), ALL aqueous solutions (acidic, neutral, or alkaline) contain a non-zero concentration of H+(aq) ions (Kw = [H+][OH-] = 1.0 x 10^-14 at 298 K).",
    exp_b: "Incorrect. Very concentrated strong acid solutions (e.g. 2 M HCl) have [H+] > 1.0 M and a negative pH value (< 0).",
    exp_c: "Incorrect. Lewis acids (such as AlCl3 and BF3) do not contain hydrogen atoms.",
    exp_d: "Incorrect. Very dilute or weak acid solutions (such as 0.001 M citric acid) are non-corrosive."
  },
  {
    q_no: 2,
    key: "D",
    rate: "77%",
    focus: "Chemical Reactions Producing Gases (Hydrogen vs Oxygen)",
    exp_a: "Incorrect. Strongly heating mercury(II) oxide decomposes it into mercury metal and oxygen gas: 2HgO(s) -> 2Hg(l) + O2(g).",
    exp_b: "Incorrect. Electrolysis of dilute sulphuric acid oxidizes water at the anode to produce oxygen gas: 2H2O(l) -> O2(g) + 4H+(aq) + 4e-.",
    exp_c: "Incorrect. Fractional distillation of liquid air separates nitrogen and oxygen based on their boiling points.",
    exp_d: "Correct. Passing steam over heated magnesium produces white solid magnesium oxide and HYDROGEN gas (Mg(s) + H2O(g) -> MgO(s) + H2(g)), NOT oxygen gas."
  },
  {
    q_no: 3,
    key: "B",
    rate: "73%",
    focus: "Deducing Periodic Table Groups from Ionic Compound Formula",
    exp_a: "Incorrect. Group III elements form R^3+ cations.",
    exp_b: "Correct. Element Q belongs to Group II (forming Q^2+ cations). For the ionic compound Q3R2 to be electrically neutral: 3(+2) + 2(charge of R) = 0 => charge of R = -3. Group V non-metals have 5 valence electrons and gain 3 electrons to form stable R^3- anions.",
    exp_c: "Incorrect. Group VI non-metals form R^2- anions (giving compound formula QR).",
    exp_d: "Incorrect. Group VII halogens form R^- anions (giving compound formula QR2)."
  },
  {
    q_no: 4,
    key: "D",
    rate: "74%",
    focus: "Reactivity Series: Copper vs Non-Oxidizing Dilute Acids",
    exp_a: "Incorrect. Zinc is above hydrogen in the reactivity series and reacts with dilute H2SO4 to form ZnSO4.",
    exp_b: "Incorrect. Iron reacts with dilute HCl to form FeCl2.",
    exp_c: "Incorrect. Calcium reacts with dilute HCl to form CaCl2.",
    exp_d: "Correct. Copper is below hydrogen in the electrochemical series / reactivity series and cannot reduce H+(aq) ions in non-oxidizing dilute sulphuric acid; therefore, copper(II) sulphate CANNOT be prepared by reacting copper metal directly with dilute sulphuric acid."
  },
  {
    q_no: 5,
    key: "C",
    rate: "70%",
    focus: "Rust Indicator (Ferroxyl Gel) Color Changes",
    exp_a: "Incorrect. Blue colour is observed where Fe^2+ ions react with potassium hexacyanoferrate(III) (K3[Fe(CN)6]).",
    exp_b: "Incorrect. Pink colour is observed where OH- ions are generated at cathodic reduction sites (turning phenolphthalein pink).",
    exp_c: "Correct. Ferroxyl rust indicator gel containing K3[Fe(CN)6] and phenolphthalein exhibits blue (presence of Fe^2+), pink (presence of OH-), and original yellow background colours during rusting; GREY is NOT an observed indicator colour in the gel.",
    exp_d: "Incorrect. Yellow is the initial background colour of the potassium hexacyanoferrate(III) solution."
  },
  {
    q_no: 6,
    key: "A",
    rate: "72%",
    focus: "Oxidation Numbers of Nitrogen in Industrial Processes (Haber Process)",
    exp_a: "Correct. Step 1 converts elemental nitrogen (N2, oxidation state = 0) to ammonia (NH3, oxidation state = -3) in the Haber process. A decrease in oxidation number from 0 to -3 represents REDUCTION.",
    exp_b: "Incorrect. Step 2 oxidizes NH3 (oxidation state -3) to NO (oxidation state +2).",
    exp_c: "Incorrect. Step 3 oxidizes NO (oxidation state +2) to NO2 (oxidation state +4).",
    exp_d: "Incorrect. Step 4 oxidizes NO2 (oxidation state +4) to HNO3 (oxidation state +5)."
  },
  {
    q_no: 7,
    key: "B",
    rate: "87%",
    focus: "Galvanic Corrosion & Bimetallic Couples",
    exp_a: "Incorrect. Aluminium is more reactive than iron, so the aluminium board provides sacrificial protection to iron hook (1).",
    exp_b: "Correct. Iron hook (2) is attached to a copper board. Because iron is more reactive than copper (higher in the electrochemical series), iron acts as the sacrificial anode and loses electrons preferentially (Fe(s) -> Fe2+(aq) + 2e-), causing hook (2) to corrode first.",
    exp_c: "Incorrect. Copper hook (3) is protected by the more reactive aluminium board.",
    exp_d: "Incorrect. Copper hook (4) is cathodic relative to the iron board."
  },
  {
    q_no: 8,
    key: "D",
    rate: "88%",
    focus: "Apparatus Selection for Accurate Volumetric Titration",
    exp_a: "Incorrect. Measuring cylinders lack the precision required for analytical volumetric analysis.",
    exp_b: "Incorrect. Measuring cylinders have high uncertainty.",
    exp_c: "Incorrect. Titrations are performed in conical flasks rather than beakers to allow swirling without splashing.",
    exp_d: "Correct. A 25.0 cm^3 bulb pipette (apparatus X) is used to accurately transfer an exact aliquot of standard HCl(aq) into a conical flask (apparatus Y), which allows vigorous swirling without risk of spillage during titration."
  },
  {
    q_no: 9,
    key: "B",
    rate: "87%",
    focus: "Precipitation Stoichiometry: Calcium Sulphate Formation",
    exp_a: "Incorrect. 0.68 g is half the theoretical mass.",
    exp_b: "Correct. Precipitation equation: Ca(NO3)2(aq) + H2SO4(aq) -> CaSO4(s) + 2HNO3(aq). Moles of Ca^2+ = 0.010 dm^3 * 1.0 mol dm^-3 = 0.010 mol. Molar mass of CaSO4 = 40.1 + 32.1 + 4(16.0) = 136.2 g mol^-1. Theoretical mass of CaSO4 precipitate = 0.010 mol * 136.2 g mol^-1 = 1.36 g.",
    exp_c: "Incorrect. Double counting error.",
    exp_d: "Incorrect. Triple counting error."
  },
  {
    q_no: 10,
    key: "B",
    rate: "82%",
    focus: "Monomer Identification from Addition Polymer Structure",
    exp_a: "Incorrect. Propene monomer produces alternating -[CH2-CH(CH3)]- repeating units.",
    exp_b: "Correct. The addition polymer chain has an ethyl group (-CH2CH3) attached to alternate carbon atoms along the main chain (-CH2-CH(CH2CH3)-), which is synthesized by the addition polymerization of but-1-ene (CH2=CH-CH2CH3).",
    exp_c: "Incorrect. But-2-ene produces -[CH(CH3)-CH(CH3)]- repeating units.",
    exp_d: "Incorrect. 2-methylpropene produces -[CH2-C(CH3)2]- repeating units."
  },
  {
    q_no: 11,
    key: "B",
    rate: "77%",
    focus: "Lewis Structures & Incomplete Octets (Carbene Radicals)",
    exp_a: "Incorrect. In SF2, sulfur has 2 single bonds and 2 lone pairs (8 valence electrons, complete octet).",
    exp_b: "Correct. In difluorocarbene (CF2), the central carbon atom forms 2 single covalent bonds with fluorine atoms and retains 1 lone pair of electrons, possessing only 6 valence electrons (an incomplete octet).",
    exp_c: "Incorrect. In carbon disulphide (CS2), carbon forms two double bonds (4 pairs = 8 electrons, complete octet).",
    exp_d: "Incorrect. In nitrogen trichloride (NCl3), nitrogen has 3 single bonds and 1 lone pair (8 electrons, complete octet)."
  },
  {
    q_no: 12,
    key: "C",
    rate: "66%",
    focus: "Standard Enthalpy Change of Neutralization Definition",
    exp_a: "Incorrect. Represents a synthesis combination reaction.",
    exp_b: "Incorrect. Involves solid oxide reactant.",
    exp_c: "Correct. The standard enthalpy change of neutralization is defined as the enthalpy change when an aqueous acid reacts with an aqueous alkali to form ONE mole of liquid water under standard conditions: H+(aq) + OH-(aq) -> H2O(l), represented by Delta H3.",
    exp_d: "Incorrect. Involves the formation of 2 moles of water."
  },
  {
    q_no: 13,
    key: "C",
    rate: "58%",
    focus: "Electrolysis of Dilute Sodium Chloride with Litmus Indicator",
    exp_a: "Incorrect. Litmus turns red in acid and blue in alkali.",
    exp_b: "Incorrect. Swapped electrode colours.",
    exp_c: "Correct. In the electrolysis of very dilute NaCl(aq) with inert carbon electrodes: at anode X, water is oxidized to evolve O2(g) and generate H+(aq) ions (2H2O -> O2 + 4H+ + 4e-), turning litmus RED. At cathode Y, water is reduced to evolve H2(g) and generate OH-(aq) ions (2H2O + 2e- -> H2 + 2OH-), turning litmus BLUE.",
    exp_d: "Incorrect. Bleaching occurs only in concentrated brine where Cl2 gas is evolved."
  },
  {
    q_no: 14,
    key: "A",
    rate: "79%",
    focus: "Reactivity Series Deducible from Chemical Behavior of Metals",
    exp_a: "Correct. Metal W undergoes thermal decomposition of its oxide upon simple heating with a Bunsen burner, which is a unique characteristic of extremely unreactive metals (e.g. Ag, Hg, Pt, Au) located at the bottom of the reactivity series, making W the least reactive metal.",
    exp_b: "Incorrect. Metal X reacts with steam (moderate reactivity, like Fe, Zn).",
    exp_c: "Incorrect. Metal Y reacts with dilute acids to evolve H2 (moderate reactivity).",
    exp_d: "Incorrect. Metal Z displaces copper from CuSO4(aq) (more reactive than copper)."
  },
  {
    q_no: 15,
    key: "A",
    rate: "60%",
    focus: "Fundamental Structure & Neutrality of Atoms",
    exp_a: "Correct. In any neutral atom, the number of positively charged nuclear protons equals the number of negatively charged extranuclear electrons, so all neutral atoms carry no net electrical charge.",
    exp_b: "Incorrect. Almost all the mass of an atom is concentrated in the dense nucleus, not distributed evenly.",
    exp_c: "Incorrect. A protium atom (1H) has 1 proton and 1 electron with NO neutrons.",
    exp_d: "Incorrect. Atoms of the same element can have different mass numbers (isotopes)."
  },
  {
    q_no: 16,
    key: "D",
    rate: "38%",
    focus: "Redox Reaction Stoichiometry: Dichromate with Iron(II)",
    exp_a: "Incorrect. Assumes a 1:1 mole ratio.",
    exp_b: "Incorrect. Calculation arithmetic error.",
    exp_c: "Incorrect. Did not account for the 1:6 stoichiometric ratio.",
    exp_d: "Correct. Redox equation: Cr2O7^2-(aq) + 6Fe^2+(aq) + 14H+(aq) -> 2Cr^3+(aq) + 6Fe^3+(aq) + 7H2O(l). Decrease in [Cr2O7^2-] = 0.50 - 0.47 = 0.03 mol dm^-3. Concentration of Fe^2+ consumed = 6 * 0.03 = 0.18 mol dm^-3. Remaining [Fe^2+] = 0.50 - 0.18 = 0.32 mol dm^-3."
  },
  {
    q_no: 17,
    key: "A",
    rate: "73%",
    focus: "Aerial Oxidation of Aqueous Potassium Iodide",
    exp_a: "Correct. Statement (1) only: Atmospheric oxygen slowly oxidizes iodide ions (I-) to aqueous iodine (I2) in the presence of dissolved acidic CO2 (4I-(aq) + O2(g) + 4H+(aq) -> 2I2(aq) + 2H2O(l)), so I- is oxidized (oxidation number increases from -1 to 0). Statement (2) is false (oxygen is the oxidant, not CO2). Statement (3) is false (yellow-brown colour is due to I2/I3-, not colourless K2CO3).",
    exp_b: "Incorrect. Statement (2) is false.",
    exp_c: "Incorrect. Statement (3) is false.",
    exp_d: "Incorrect. Statements (2) and (3) are both false."
  },
  {
    q_no: 18,
    key: "C",
    rate: "68%",
    focus: "Synthesis & Properties of Esters",
    exp_a: "Incorrect. Statement (3) is also true.",
    exp_b: "Incorrect. Statement (2) is false (esterification is catalyzed by concentrated H2SO4, not alkali).",
    exp_c: "Correct. Statements (1) and (3) are correct: esterification between carboxylic acids and alcohols is heated under reflux to prevent loss of volatile organic compounds (1), and esters are volatile liquids with characteristic sweet, fruity smells (3). Statement (2) is false.",
    exp_d: "Incorrect. Statement (2) is false."
  },
  {
    q_no: 19,
    key: "B",
    rate: "73%",
    focus: "Chemical Tests: Cycloalkanes vs Alkenes with Acidified Permanganate",
    exp_a: "Incorrect. Both pent-1-ene and pent-2-ene are unsaturated alkenes that decolorize acidified KMnO4.",
    exp_b: "Correct. Cyclohexane is a saturated cycloalkane that does NOT react with acidified KMnO4(aq) (solution remains purple), whereas cyclohexene contains an unsaturated C=C double bond that undergoes oxidation, rapidly decolorizing acidified KMnO4(aq) from purple to colourless.",
    exp_c: "Incorrect. Both polyethene and poly(chloroethene) are saturated polymers with only C-C single bonds.",
    exp_d: "Incorrect. Pair (3) cannot be distinguished with KMnO4."
  },
  {
    q_no: 20,
    key: "B",
    rate: "55%",
    focus: "Amphoteric Properties of Aluminium Oxide & Hydroxide",
    exp_a: "Incorrect. Statement (1) is false.",
    exp_b: "Correct. Statement (2) only: Aluminium oxide (Al2O3) is an amphoteric oxide that reacts with strong acids to form aluminium salts and with strong alkalis to form soluble aluminate complex ions: Al2O3(s) + 2NaOH(aq) + 3H2O(l) -> 2Na[Al(OH)4](aq). Statements (1) and (3) are false.",
    exp_c: "Incorrect. Statement (1) is false.",
    exp_d: "Incorrect. Statements (1) and (3) are false."
  },
  {
    q_no: 21,
    key: "D",
    rate: "55%",
    focus: "Structures & Properties of Carbon Allotropes (Diamond, Graphite, C60)",
    exp_a: "Incorrect. Omits valid statements.",
    exp_b: "Incorrect. (2) is true.",
    exp_c: "Incorrect. (1) is true.",
    exp_d: "Correct. Statements (1), (2), and (3) are all correct: buckminsterfullerene (C60) is a simple molecular form of carbon soluble in organic solvents like methylbenzene (1), graphite has delocalized electrons along layers that conduct electricity (2), and diamond has a 3D giant covalent network structure with high hardness and melting point (3)."
  },
  {
    q_no: 22,
    key: "C",
    rate: "84%",
    focus: "Thermochemical Equations: Standard Enthalpies of Combustion and Formation",
    exp_a: "Incorrect. Statement (1) is false.",
    exp_b: "Incorrect. Statement (1) is false.",
    exp_c: "Correct. Statements (2) and (3) are correct applications of standard enthalpy definitions and Hess's Law cycles. Statement (1) is false.",
    exp_d: "Incorrect. Statement (1) is false."
  },
  {
    q_no: 23,
    key: "D",
    rate: "53%",
    focus: "Electrochemical Cells: Energy Conversions & Electrode Definitions",
    exp_a: "Incorrect. Both statements are false.",
    exp_b: "Incorrect. Both statements are false.",
    exp_c: "Incorrect. 1st statement is false.",
    exp_d: "Correct. Both statements 1 and 2 are FALSE: in a chemical (galvanic) cell, chemical energy is converted into electrical energy (not electrical into chemical), and reduction always occurs at the positive cathode (not negative anode)."
  },
  {
    q_no: 24,
    key: "C",
    rate: "59%",
    focus: "Reactivity of Halogens: Displacement Reactions of Bromide and Iodide",
    exp_a: "Incorrect. 1st statement is false: iodine cannot displace bromine from KBr(aq).",
    exp_b: "Incorrect. 1st statement is false.",
    exp_c: "Correct. 1st statement is FALSE: iodine is lower in Group VII than bromine and is a weaker oxidizing agent, so it cannot oxidize or displace bromide ions from KBr(aq). 2nd statement is TRUE: bromine is higher than iodine in Group VII and has a stronger oxidizing power.",
    exp_d: "Incorrect. Statement 2 is true."
  },
  {
    q_no: 25,
    key: "B",
    rate: "49%",
    focus: "Chemical Kinetics: Rate Equation & Reaction Order Determination",
    exp_a: "Incorrect. Incorrect reaction order.",
    exp_b: "Correct. Comparing initial rates across experimental trials: doubling [A] while keeping [B] constant quadruples the rate (rate proportional to [A]^2, order 2 in A); doubling [B] while keeping [A] constant doubles the rate (rate proportional to [B], order 1 in B). The overall rate equation is Rate = k[A]^2[B].",
    exp_c: "Incorrect. Overestimates order of B.",
    exp_d: "Incorrect. Underestimates order of A."
  },
  {
    q_no: 26,
    key: "C",
    rate: "14%",
    focus: "Chemical Equilibrium: Temperature Dependence of Equilibrium Constant (Kc)",
    exp_a: "Incorrect. For endothermic reactions, Kc increases with temperature.",
    exp_b: "Incorrect. For exothermic reactions, Kc decreases with temperature.",
    exp_c: "Correct. For an exothermic reversible reaction (Delta H < 0), increasing temperature shifts the equilibrium position in the reverse (endothermic) direction according to Le Chatelier's principle, decreasing the equilibrium concentrations of products and lowering the value of Kc.",
    exp_d: "Incorrect. Catalysts do not alter the value of Kc."
  },
  {
    q_no: 27,
    key: "A",
    rate: "60%",
    focus: "Electrophilic Addition of Bromine Water to Alkenes (Halohydrin Formation)",
    exp_a: "Correct. When ethene reacts with bromine water (Br2(aq)), electrophilic addition forms a cyclic bromonium ion intermediate. In aqueous solution, water molecules act as the predominant competing nucleophile to attack the intermediate, forming 2-bromoethanol (CH2Br-CH2OH) as the major organic product.",
    exp_b: "Incorrect. 1,2-dibromoethane is formed in non-polar organic solvents.",
    exp_c: "Incorrect. Ethane-1,2-diol is formed with cold alkaline KMnO4.",
    exp_d: "Incorrect. Bromoethane is formed with HBr."
  },
  {
    q_no: 28,
    key: "D",
    rate: "78%",
    focus: "Stereoisomerism: Geometrical (Cis-Trans) & Optical (Chiral) Isomerism",
    exp_a: "Incorrect. Symmetrical molecule with no chiral centre.",
    exp_b: "Incorrect. Does not exhibit cis-trans isomerism.",
    exp_c: "Incorrect. Lacks asymmetric carbon.",
    exp_d: "Correct. 3-methylpent-2-ene (CH3-CH=C(CH3)-CH2CH3) has restricted rotation about the C=C double bond with two different substituents on each double-bonded carbon (cis-trans isomerism) and contains an asymmetric carbon atom (optical isomerism / enantiomers)."
  },
  {
    q_no: 29,
    key: "C",
    rate: "60%",
    focus: "Organic Structure Elucidation via Qualitative Chemical Tests",
    exp_a: "Incorrect. Compound does not react with NaHCO3.",
    exp_b: "Incorrect. Compound does not decolorize bromine water.",
    exp_c: "Correct. The organic molecule contains an unsaturated C=C double bond (decolorizes Br2 in organic solvent), a primary alcohol group (oxidizes to carboxylic acid with orange to green dichromate), and a carboxylic acid group (evolves CO2 with NaHCO3(aq)).",
    exp_d: "Incorrect. Inconsistent with chemical test results."
  },
  {
    q_no: 30,
    key: "D",
    rate: "85%",
    focus: "Periodic Trends: Acid-Base Properties of Period 3 Oxides",
    exp_a: "Incorrect. Sodium oxide (Na2O) forms strongly alkaline NaOH(aq) (pH ≈ 14).",
    exp_b: "Incorrect. Magnesium oxide (MgO) forms basic Mg(OH)2(aq) (pH ≈ 10).",
    exp_c: "Incorrect. Aluminium oxide (Al2O3) is insoluble in water.",
    exp_d: "Correct. Sulphur trioxide (SO3) is a strongly acidic non-metal oxide that dissolves vigorously in water to form sulphuric acid (SO3(g) + H2O(l) -> H2SO4(aq)), producing a solution with the lowest pH (pH < 1)."
  },
  {
    q_no: 31,
    key: "B",
    rate: "61%",
    focus: "Intermolecular Forces: Hydrogen Bonding in Alcohols vs Amines",
    exp_a: "Incorrect. Nitrogen is less electronegative than oxygen.",
    exp_b: "Correct. Ethanol and ethylamine have comparable molecular masses, but oxygen is significantly more electronegative than nitrogen, making the O-H...O hydrogen bonds between ethanol molecules much stronger than the N-H...N hydrogen bonds between ethylamine molecules, resulting in a higher boiling point for ethanol (+78 deg C vs +16.6 deg C).",
    exp_c: "Incorrect. Both molecules form intermolecular hydrogen bonds.",
    exp_d: "Incorrect. Primary amines form hydrogen bonds."
  },
  {
    q_no: 32,
    key: "A",
    rate: "68%",
    focus: "Synthesis & Purification of Aspirin (Recrystallization & Melting Point)",
    exp_a: "Correct. Crude aspirin is purified by recrystallization from hot water/ethanol. Its purity is verified by measuring its sharp melting point (136 deg C) or testing with neutral FeCl3(aq) (absence of purple colour confirms complete removal of unreacted salicylic acid).",
    exp_b: "Incorrect. Simple distillation would decompose solid aspirin.",
    exp_c: "Incorrect. Fractional distillation is unsuitable for solids.",
    exp_d: "Incorrect. Aspirin does not sublime cleanly."
  },
  {
    q_no: 33,
    key: "*",
    rate: "Deleted",
    focus: "Item Deleted by HKEAA (Unsatisfactory Discrimination Index)",
    exp_a: "Item deleted by HKEAA. In the live 2015 HKDSE Chemistry Examination, Question 33 was officially deleted from mark calculation due to unsatisfactory discrimination index across candidate ability tiers.",
    exp_b: "Item deleted by HKEAA.",
    exp_c: "Item deleted by HKEAA.",
    exp_d: "Item deleted by HKEAA."
  },
  {
    q_no: 34,
    key: "C",
    rate: "62%",
    focus: "Chemical Equilibrium: Le Chatelier's Principle (Concentration & Pressure)",
    exp_a: "Incorrect. Statement (1) is false: adding inert gas at constant volume does not alter partial pressures or equilibrium position.",
    exp_b: "Incorrect. Statement (1) is false.",
    exp_c: "Correct. Statements (2) and (3) are correct: adding reactants shifts the equilibrium position to the right to consume added reactants, and increasing pressure shifts equilibrium towards the side with fewer gas moles.",
    exp_d: "Incorrect. Statement (1) is false."
  },
  {
    q_no: 35,
    key: "B",
    rate: "69%",
    focus: "Environmental Chemistry: Nitrogen Monoxide & Catalytic Converters",
    exp_a: "Incorrect. Statement 2 describes environmental hazards, not the catalytic reduction mechanism.",
    exp_b: "Correct. Both statements are true: catalytic converters in cars convert toxic NO and CO into harmless N2 and CO2 (2NO + 2CO -> N2 + 2CO2) (statement 1 true) and nitrogen monoxide contributes to photochemical smog and acid rain (statement 2 true), but statement 2 does not explain the function of catalytic converters.",
    exp_c: "Incorrect. Statement 1 is true.",
    exp_d: "Incorrect. Both statements are true."
  },
  {
    q_no: 36,
    key: "C",
    rate: "60%",
    focus: "Geometrical Isomerism: Maleic vs Fumaric Acid (Butenedioic Acid)",
    exp_a: "Incorrect. 1st statement is false: butenedioic acid DOES exhibit cis-trans isomerism.",
    exp_b: "Incorrect. 1st statement is false.",
    exp_c: "Correct. 1st statement is FALSE: butenedioic acid possesses restricted rotation about its C=C double bond with -H and -COOH on each carbon, existing as cis-butenedioic acid (maleic acid) and trans-butenedioic acid (fumaric acid). 2nd statement is TRUE: both isomers contain two carboxylic acid (-COOH) groups and undergo esterification with alcohols.",
    exp_d: "Incorrect. Statement 2 is true."
  }
];
