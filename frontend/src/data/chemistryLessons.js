const chemistryLessons = {
  matter: {
    title: "Matter",
    description: "Understand the fundamental nature of matter, its properties, and the three common states.",
    lessons: [
      {
        id: "chemistry-matter-intro",
        title: "Introduction to Matter",
        course: "Chemistry",
        topic: "Matter",
        description: "Define matter and explore its core properties.",
        sections: [
          {
            type: "introduction",
            title: "Introduction",
            content: [
              "Matter is anything that has mass and occupies space. Everything around us, from the air we breathe to the stars in the sky, is made of matter. Understanding matter is the foundation of chemistry."
            ]
          },
          {
            type: "concept",
            title: "What is Matter?",
            content: [
              "Matter is anything that has mass and takes up space. It is composed of tiny particles called atoms and molecules."
            ],
            illustration: {
              title: "What is Matter?",
              description: "Examples of matter: solid rock, liquid water, and gas (air)"
            }
          },
          {
            type: "concept",
            title: "The Particle Theory of Matter",
            content: [
              "The particle theory states that all matter is made up of tiny particles that are in constant motion. The arrangement and energy of these particles determine the state of matter."
            ],
            illustration: {
              title: "The Particle Theory of Matter",
              description: "Particle arrangement in solid, liquid, and gas"
            }
          },
          {
            type: "concept",
            title: "States of Matter",
            content: [
              "Matter commonly exists in three states: solid, liquid, and gas. Each state has a different particle arrangement and movement."
            ],
            table: {
              headers: [
                "State",
                "Shape",
                "Volume",
                "Particle Arrangement",
                "Particle Movement"
              ],
              rows: [
                [
                  "Solid",
                  "Fixed",
                  "Fixed",
                  "Closely packed in a regular pattern",
                  "Vibrate in fixed positions"
                ],
                [
                  "Liquid",
                  "Takes shape of container",
                  "Fixed",
                  "Close together, but no regular pattern",
                  "Move past each other"
                ],
                [
                  "Gas",
                  "Fills container",
                  "Variable",
                  "Far apart, no regular pattern",
                  "Move freely and rapidly"
                ]
              ]
            },
            illustration: {
              title: "States of Matter",
              description: "Comparison of solid, liquid, and gas states"
            }
          },
          {
            type: "concept",
            title: "Properties of Matter",
            content: [
              "Matter has physical and chemical properties. Physical properties can be observed without changing the substance (e.g., color, density). Chemical properties describe how a substance reacts with other substances (e.g., flammability).",
              {
                title: "Key Points",
                items: [
                  "**Mass:** The amount of matter in an object.",
                  "**Volume:** The amount of space matter occupies.",
                  "**Density:** Mass per unit volume (Density = Mass / Volume).",
                  "**Melting Point:** The temperature at which a solid becomes a liquid.",
                  "**Boiling Point:** The temperature at which a liquid becomes a gas."
                ]
              }
            ]
          },
          {
            type: "activity",
            title: "Activity: Observing States of Matter",
            content: [
              "Take an ice cube (solid), a glass of water (liquid), and a balloon filled with air (gas). Observe their properties. How do they differ in shape and volume?"
            ]
          },
          {
            type: "practice",
            title: "Check Your Understanding",
            question: "Which of the following is matter?",
            options: [
              "Air",
              "Light",
              "Sound",
              "Time"
            ],
            correctAnswer: "Air",
            feedback: {
              correct: "Air has mass and occupies space, making it matter. Light and sound are forms of energy, and time is a concept.",
              incorrect: "Not quite. Air has mass and occupies space, making it matter. Light and sound are forms of energy, and time is a concept."
            }
          },
          {
            type: "practice",
            title: "Check Your Understanding",
            question: "Which state of matter has a fixed shape and fixed volume?",
            options: [
              "Solid",
              "Liquid",
              "Gas",
              "None"
            ],
            correctAnswer: "Solid",
            feedback: {
              correct: "Solids have a definite shape and volume because their particles are held tightly in a fixed arrangement.",
              incorrect: "Not quite. Solids have a definite shape and volume because their particles are held tightly in a fixed arrangement."
            }
          },
          {
            type: "practice",
            title: "Check Your Understanding",
            question: "Which state of matter takes the shape of its container?",
            options: [
              "Solid",
              "Liquid",
              "Gas",
              "None"
            ],
            correctAnswer: "Liquid",
            feedback: {
              correct: "Liquids take the shape of their container while maintaining a fixed volume, as their particles can flow past each other.",
              incorrect: "Not quite. Liquids take the shape of their container while maintaining a fixed volume, as their particles can flow past each other."
            }
          },
          {
            type: "summary",
            title: "Lesson Summary",
            points: [
              "Matter is anything that has mass and occupies space. Its properties and behavior are explained by the arrangement and movement of its particles. Understanding matter is crucial for further study in chemistry.",
              "Matter has mass and occupies space.",
              "All matter is made of tiny particles.",
              "The three common states are solid, liquid, and gas.",
              "Particles are arranged differently in each state.",
              "Heating and cooling can cause changes of state."
            ]
          }
        ]
      },
      {
        id: "chemistry-changes-of-state",
        title: "Changes of State",
        course: "Chemistry",
        topic: "Matter",
        description: "Learn how heating and cooling cause matter to change from one state to another.",
        sections: [
          {
            type: "introduction",
            title: "Introduction",
            content: [
              "Matter can change from one state to another when energy is added or removed. These changes are physical changes because the chemical composition of the substance remains the same."
            ]
          },
          {
            type: "concept",
            title: "Energy and State Changes",
            content: [
              "Adding energy (heating) typically causes particles to move faster and spread apart, leading to changes from solid to liquid to gas. Removing energy (cooling) has the opposite effect."
            ],
            illustration: {
              title: "Energy and State Changes",
              description: "Diagram showing melting, freezing, evaporation, condensation, sublimation, and deposition"
            }
          },
          {
            type: "concept",
            title: "Melting",
            content: [
              "Melting is the change of state from a solid to a liquid when heat is supplied. For example, ice melts into liquid water at 0°C."
            ],
            illustration: {
              title: "Melting",
              description: "Ice cube melting into water"
            }
          },
          {
            type: "concept",
            title: "Freezing",
            content: [
              "Freezing is the change from a liquid to a solid when heat is removed. Water freezes into ice at 0°C."
            ],
            illustration: {
              title: "Freezing",
              description: "Water turning into ice"
            }
          },
          {
            type: "concept",
            title: "Evaporation and Boiling",
            content: [
              "Evaporation is the change of state from a liquid to a gas at the surface of the liquid and can occur at any temperature. Boiling is the rapid change of liquid to gas throughout the liquid at its boiling point."
            ],
            illustration: {
              title: "Evaporation and Boiling",
              description: "Diagram comparing evaporation and boiling"
            }
          },
          {
            type: "concept",
            title: "Condensation",
            content: [
              "Condensation is the change of state from a gas to a liquid when a gas cools. Water vapor condensing into liquid water on a cold glass is a common example."
            ],
            illustration: {
              title: "Condensation",
              description: "Water droplets forming on a cold glass"
            }
          },
          {
            type: "concept",
            title: "Sublimation and Deposition",
            content: [
              "Sublimation is the change of state from a solid directly to a gas (e.g., dry ice turning into carbon dioxide gas). Deposition is the reverse—gas directly to a solid (e.g., frost forming on a cold surface)."
            ],
            illustration: {
              title: "Sublimation and Deposition",
              description: "Dry ice sublimating into gas"
            }
          },
          {
            type: "practice",
            title: "Check Your Understanding",
            question: "What happens when ice melts?",
            options: [
              "It changes from solid to liquid",
              "It changes from liquid to gas",
              "It changes from gas to liquid",
              "It remains solid"
            ],
            correctAnswer: "It changes from solid to liquid",
            feedback: {
              correct: "Melting is the process of a solid turning into a liquid due to the addition of heat.",
              incorrect: "Not quite. Melting is the process of a solid turning into a liquid due to the addition of heat."
            }
          },
          {
            type: "practice",
            title: "Check Your Understanding",
            question: "What is the change from gas to liquid called?",
            options: [
              "Melting",
              "Freezing",
              "Condensation",
              "Sublimation"
            ],
            correctAnswer: "Condensation",
            feedback: {
              correct: "Condensation is the process where a gas turns into a liquid, often due to cooling.",
              incorrect: "Not quite. Condensation is the process where a gas turns into a liquid, often due to cooling."
            }
          },
          {
            type: "summary",
            title: "Lesson Summary",
            points: [
              "Changes of state occur when matter gains or loses thermal energy. These are physical changes that do not alter the chemical identity of the substance.",
              "Melting changes a solid into a liquid.",
              "Freezing changes a liquid into a solid.",
              "Evaporation and boiling change liquid into gas.",
              "Condensation changes gas into liquid.",
              "Sublimation changes solid directly into gas.",
              "Energy is gained or lost during changes of state."
            ]
          }
        ]
      }
    ],
  },
  elements: {
    title: "Elements and Atoms",
    description: "Explore the building blocks of matter—elements, atoms, and their organization on the periodic table.",
    lessons: [
      {
        id: "chemistry-elements",
        title: "Elements",
        course: "Chemistry",
        topic: "Elements",
        description: "Define elements, understand atoms, and get an overview of the periodic table.",
        sections: [
          {
            type: "introduction",
            title: "Introduction",
            content: [
              "An element is a pure substance made up of only one type of atom. There are 118 known elements, each with unique properties. They are the fundamental building blocks of all matter."
            ]
          },
          {
            type: "concept",
            title: "What is an Element?",
            content: [
              "An element is a pure substance that cannot be broken down into simpler substances by ordinary chemical methods. Each element is defined by its atomic number—the number of protons in its nucleus."
            ],
            illustration: {
              title: "What is an Element?",
              description: "Examples of elements: Hydrogen, Oxygen, Gold, and Carbon"
            }
          },
          {
            type: "concept",
            title: "Atoms: The Smallest Unit",
            content: [
              "Atoms are the smallest units of an element that retain the chemical properties of that element. An atom consists of a nucleus (containing protons and neutrons) and orbiting electrons."
            ],
            illustration: {
              title: "Atoms: The Smallest Unit",
              description: "Diagram of an atom: nucleus with protons and neutrons, electrons in orbits"
            }
          },
          {
            type: "concept",
            title: "Examples of Common Elements",
            content: [
              "Familiar elements include hydrogen (H), oxygen (O), carbon (C), iron (Fe), copper (Cu), and gold (Au). Each has unique properties and uses."
            ],
            table: {
              headers: [
                "Element",
                "Symbol",
                "Atomic Number",
                "Common Use"
              ],
              rows: [
                [
                  "Hydrogen",
                  "H",
                  "1",
                  "Fuel, water production"
                ],
                [
                  "Oxygen",
                  "O",
                  "8",
                  "Respiration, combustion"
                ],
                [
                  "Carbon",
                  "C",
                  "6",
                  "Organic compounds, diamonds, graphite"
                ],
                [
                  "Iron",
                  "Fe",
                  "26",
                  "Construction, steel production"
                ],
                [
                  "Copper",
                  "Cu",
                  "29",
                  "Electrical wiring, plumbing"
                ],
                [
                  "Gold",
                  "Au",
                  "79",
                  "Jewelry, electronics"
                ]
              ]
            },
            illustration: {
              title: "Examples of Common Elements",
              description: "Collage showing uses of different elements"
            }
          },
          {
            type: "concept",
            title: "Introduction to the Periodic Table",
            content: [
              "The periodic table organizes elements according to their atomic number and chemical properties. It is a powerful tool for understanding the relationships between elements."
            ],
            illustration: {
              title: "Introduction to the Periodic Table",
              description: "Image of the periodic table of elements"
            }
          },
          {
            type: "practice",
            title: "Check Your Understanding",
            question: "What is an element?",
            options: [
              "A pure substance made of one type of atom",
              "A mixture of substances",
              "A type of energy",
              "A solution"
            ],
            correctAnswer: "A pure substance made of one type of atom",
            feedback: {
              correct: "An element is a fundamental substance that cannot be broken down further. It consists of atoms with the same number of protons.",
              incorrect: "Not quite. An element is a fundamental substance that cannot be broken down further. It consists of atoms with the same number of protons."
            }
          },
          {
            type: "practice",
            title: "Check Your Understanding",
            question: "Where are elements organized?",
            options: [
              "The periodic table",
              "The food table",
              "The energy table",
              "The data table"
            ],
            correctAnswer: "The periodic table",
            feedback: {
              correct: "The periodic table is the systematic arrangement of elements based on their atomic number and properties.",
              incorrect: "Not quite. The periodic table is the systematic arrangement of elements based on their atomic number and properties."
            }
          },
          {
            type: "summary",
            title: "Lesson Summary",
            points: [
              "Elements are pure substances made of one type of atom. They are the simplest forms of matter and are organized in the periodic table according to their properties and atomic numbers.",
              "An element contains only one type of atom.",
              "Atoms are the basic units of elements.",
              "Each element has a unique chemical symbol and atomic number.",
              "Elements are organized in the periodic table by atomic number."
            ]
          }
        ]
      },
      {
        id: "chemistry-atomic-structure",
        title: "Atomic Structure",
        course: "Chemistry",
        topic: "Elements",
        description: "Dive deep into the structure of an atom: protons, neutrons, electrons, and the nucleus.",
        sections: [
          {
            type: "introduction",
            title: "Introduction",
            content: [
              "Atoms are made of even smaller particles called subatomic particles: protons, neutrons, and electrons. Understanding their arrangement is key to understanding chemistry."
            ]
          },
          {
            type: "concept",
            title: "Subatomic Particles",
            content: [
              "Atoms consist of three main subatomic particles."
            ],
            table: {
              headers: [
                "Particle",
                "Charge",
                "Mass (approx.)",
                "Location in Atom"
              ],
              rows: [
                [
                  "Proton (p⁺)",
                  "+1",
                  "1 a.m.u.",
                  "Nucleus"
                ],
                [
                  "Neutron (n⁰)",
                  "0",
                  "1 a.m.u.",
                  "Nucleus"
                ],
                [
                  "Electron (e⁻)",
                  "-1",
                  "1/1836 a.m.u.",
                  "Energy levels/shells around the nucleus"
                ]
              ]
            },
            illustration: {
              title: "Subatomic Particles",
              description: "Diagram showing protons (red), neutrons (grey) in the nucleus, and electrons (blue) in orbits"
            }
          },
          {
            type: "concept",
            title: "The Nucleus",
            content: [
              "The nucleus is the small, dense, positively charged center of the atom. It contains protons and neutrons and accounts for nearly all the mass of the atom."
            ],
            illustration: {
              title: "The Nucleus",
              description: "Zoomed-in view of an atom's nucleus"
            }
          },
          {
            type: "concept",
            title: "Electron Shells (Energy Levels)",
            content: [
              "Electrons orbit the nucleus in specific regions called shells or energy levels. Electrons in shells further from the nucleus have higher energy."
            ],
            illustration: {
              title: "Electron Shells (Energy Levels)",
              description: "Diagram of electron shells (K, L, M) around the nucleus"
            }
          },
          {
            type: "concept",
            title: "Atomic Number and Mass Number",
            content: [
              "The **atomic number** is the number of protons in an atom. The **mass number** is the total number of protons and neutrons in the atom."
            ]
          },
          {
            type: "practice",
            title: "Check Your Understanding",
            question: "Which particle has a positive charge?",
            options: [
              "Electron",
              "Proton",
              "Neutron",
              "Molecule"
            ],
            correctAnswer: "Proton",
            feedback: {
              correct: "Protons are positively charged particles found in the nucleus of an atom.",
              incorrect: "Not quite. Protons are positively charged particles found in the nucleus of an atom."
            }
          },
          {
            type: "practice",
            title: "Check Your Understanding",
            question: "Which particle has no electrical charge?",
            options: [
              "Proton",
              "Electron",
              "Neutron",
              "Ion"
            ],
            correctAnswer: "Neutron",
            feedback: {
              correct: "Neutrons are neutral particles, meaning they have no electrical charge, and are found in the nucleus.",
              incorrect: "Not quite. Neutrons are neutral particles, meaning they have no electrical charge, and are found in the nucleus."
            }
          },
          {
            type: "practice",
            title: "Check Your Understanding",
            question: "Which particle has a negative charge?",
            options: [
              "Proton",
              "Neutron",
              "Electron",
              "Nucleus"
            ],
            correctAnswer: "Electron",
            feedback: {
              correct: "Electrons are negatively charged particles that orbit the nucleus.",
              incorrect: "Not quite. Electrons are negatively charged particles that orbit the nucleus."
            }
          },
          {
            type: "summary",
            title: "Lesson Summary",
            points: [
              "Atoms contain protons, neutrons, and electrons. The number of protons determines which element the atom represents. The nucleus contains protons and neutrons, while electrons orbit in shells.",
              "Protons have a positive charge.",
              "Neutrons have no charge (neutral).",
              "Electrons have a negative charge.",
              "Protons and neutrons are found in the nucleus.",
              "Electrons occupy regions around the nucleus called energy levels.",
              "The number of protons defines the element."
            ]
          }
        ]
      },
      {
        id: "chemistry-periodic-table",
        title: "The Periodic Table",
        course: "Chemistry",
        topic: "Elements",
        description: "Master the organization of the periodic table: groups, periods, and the information it provides.",
        sections: [
          {
            type: "introduction",
            title: "Introduction",
            content: [
              "The periodic table is a systematic arrangement of chemical elements based mainly on atomic number and repeating chemical properties. It is a cornerstone of chemistry."
            ]
          },
          {
            type: "concept",
            title: "Organization of the Periodic Table",
            content: [
              "Elements are arranged in rows (periods) and columns (groups) based on their atomic number and electron configuration."
            ],
            illustration: {
              title: "Organization of the Periodic Table",
              description: "Detailed periodic table with elements, atomic numbers, and symbols"
            }
          },
          {
            type: "concept",
            title: "Atomic Number and Symbols",
            content: [
              "Each element has a unique atomic number and a chemical symbol (e.g., H for Hydrogen, O for Oxygen, Fe for Iron). The atomic number is usually shown above the symbol."
            ],
            illustration: {
              title: "Atomic Number and Symbols",
              description: "Close-up of an element box showing atomic number, symbol, and name"
            }
          },
          {
            type: "concept",
            title: "Groups (Columns)",
            content: [
              "Vertical columns in the periodic table are called groups. Elements in the same group have similar chemical properties because they have the same number of valence electrons (electrons in the outer shell)."
            ],
            table: {
              headers: [
                "Group",
                "Name",
                "Examples",
                "Key Property"
              ],
              rows: [
                [
                  "1",
                  "Alkali Metals",
                  "Li, Na, K",
                  "Highly reactive, form +1 ions"
                ],
                [
                  "2",
                  "Alkaline Earth Metals",
                  "Mg, Ca, Ba",
                  "Reactive, form +2 ions"
                ],
                [
                  "17",
                  "Halogens",
                  "F, Cl, Br",
                  "Highly reactive non-metals, form -1 ions"
                ],
                [
                  "18",
                  "Noble Gases",
                  "He, Ne, Ar",
                  "Very unreactive (inert), full outer shells"
                ]
              ]
            },
            illustration: {
              title: "Groups (Columns)",
              description: "Periodic table with groups highlighted"
            }
          },
          {
            type: "concept",
            title: "Periods (Rows)",
            content: [
              "Horizontal rows in the periodic table are called periods. As you move from left to right across a period, the atomic number increases, and the properties of elements change gradually."
            ],
            illustration: {
              title: "Periods (Rows)",
              description: "Periodic table with periods highlighted"
            }
          },
          {
            type: "concept",
            title: "Metals, Non-metals, and Metalloids",
            content: [
              "The periodic table can be broadly divided into metals (left and center), non-metals (right), and metalloids (stair-step line between them)."
            ],
            illustration: {
              title: "Metals, Non-metals, and Metalloids",
              description: "Diagram showing the location of metals, non-metals, and metalloids on the periodic table"
            }
          },
          {
            type: "activity",
            title: "Activity: Using the Periodic Table",
            content: [
              "Using a periodic table, find the symbols and atomic numbers for the elements: Magnesium (Mg), Chlorine (Cl), and Gold (Au). What group and period are they in?"
            ]
          },
          {
            type: "practice",
            title: "Check Your Understanding",
            question: "What determines the atomic number of an element?",
            options: [
              "Number of protons",
              "Number of neutrons",
              "Number of molecules",
              "Number of compounds"
            ],
            correctAnswer: "Number of protons",
            feedback: {
              correct: "The atomic number is equal to the number of protons in the nucleus of an atom. It defines the element.",
              incorrect: "Not quite. The atomic number is equal to the number of protons in the nucleus of an atom. It defines the element."
            }
          },
          {
            type: "practice",
            title: "Check Your Understanding",
            question: "What are vertical columns in the periodic table called?",
            options: [
              "Periods",
              "Groups",
              "Rows",
              "Blocks"
            ],
            correctAnswer: "Groups",
            feedback: {
              correct: "Groups are the vertical columns in the periodic table. Elements in the same group share similar chemical properties.",
              incorrect: "Not quite. Groups are the vertical columns in the periodic table. Elements in the same group share similar chemical properties."
            }
          },
          {
            type: "summary",
            title: "Lesson Summary",
            points: [
              "The periodic table organizes elements according to atomic number and repeating chemical properties. Understanding its structure is fundamental to chemistry.",
              "Elements are arranged by increasing atomic number.",
              "Each element has a chemical symbol.",
              "Vertical columns are called groups (similar properties).",
              "Horizontal rows are called periods.",
              "Elements in the same group often have similar chemical properties.",
              "Metals, non-metals, and metalloids have distinct locations."
            ]
          }
        ]
      }
    ],
  },
  compoundsMixtures: {
    title: "Compounds and Mixtures",
    description: "Distinguish between compounds and mixtures. Understand how elements combine chemically vs. physically.",
    lessons: [
      {
        id: "chemistry-compounds",
        title: "Compounds",
        course: "Chemistry",
        topic: "Compounds and Mixtures",
        description: "Understand compounds and how elements combine chemically.",
        sections: [
          {
            type: "introduction",
            title: "Introduction",
            content: [
              "A compound is a pure substance formed when two or more different elements chemically combine in fixed proportions. The properties of a compound are different from the properties of the elements that form it."
            ]
          },
          {
            type: "concept",
            title: "What is a Compound?",
            content: [
              "A compound contains atoms of different elements that are chemically bonded together in a specific ratio. For example, water (H₂O) is a compound composed of hydrogen and oxygen."
            ],
            illustration: {
              title: "What is a Compound?",
              description: "Visuals of water molecule (H₂O) and carbon dioxide molecule (CO₂)"
            }
          },
          {
            type: "concept",
            title: "Properties of Compounds",
            content: [
              "Compounds have definite compositions and properties that are distinct from the elements that form them. For example, sodium (a reactive metal) and chlorine (a poisonous gas) combine to form sodium chloride (table salt), which is safe to eat."
            ],
            illustration: {
              title: "Properties of Compounds",
              description: "Diagram showing the reaction of sodium and chlorine to form sodium chloride"
            }
          },
          {
            type: "concept",
            title: "Chemical Formulae",
            content: [
              "Chemical formulae show which elements are present and the ratio of their atoms. For example, H₂O means two hydrogen atoms and one oxygen atom. CO₂ means one carbon atom and two oxygen atoms."
            ],
            table: {
              headers: [
                "Compound Name",
                "Chemical Formula",
                "Elements Present"
              ],
              rows: [
                [
                  "Water",
                  "H₂O",
                  "2 Hydrogen, 1 Oxygen"
                ],
                [
                  "Carbon Dioxide",
                  "CO₂",
                  "1 Carbon, 2 Oxygen"
                ],
                [
                  "Methane",
                  "CH₄",
                  "1 Carbon, 4 Hydrogen"
                ],
                [
                  "Sodium Chloride",
                  "NaCl",
                  "1 Sodium, 1 Chlorine"
                ]
              ]
            },
            illustration: {
              title: "Chemical Formulae",
              description: "Visuals showing H₂O, CO₂, and NaCl structures"
            }
          },
          {
            type: "concept",
            title: "Bonding in Compounds",
            content: [
              "Atoms in compounds are held together by chemical bonds. There are different types of bonds: ionic bonds (transfer of electrons) and covalent bonds (sharing of electrons)."
            ],
            illustration: {
              title: "Bonding in Compounds",
              description: "Diagram comparing ionic and covalent bonding"
            }
          },
          {
            type: "practice",
            title: "Check Your Understanding",
            question: "What is a compound?",
            options: [
              "A substance formed by the chemical combination of elements",
              "A physical mixture only",
              "A single atom",
              "A type of energy"
            ],
            correctAnswer: "A substance formed by the chemical combination of elements",
            feedback: {
              correct: "Compounds are formed when two or more different elements are chemically bonded together in a fixed ratio.",
              incorrect: "Not quite. Compounds are formed when two or more different elements are chemically bonded together in a fixed ratio."
            }
          },
          {
            type: "practice",
            title: "Check Your Understanding",
            question: "What does H₂O represent?",
            options: [
              "Oxygen",
              "Hydrogen",
              "Water",
              "Carbon dioxide"
            ],
            correctAnswer: "Water",
            feedback: {
              correct: "H₂O is the chemical formula for water, indicating two hydrogen atoms and one oxygen atom.",
              incorrect: "Not quite. H₂O is the chemical formula for water, indicating two hydrogen atoms and one oxygen atom."
            }
          },
          {
            type: "summary",
            title: "Lesson Summary",
            points: [
              "Compounds are pure substances formed when different elements chemically combine in fixed proportions. They have distinct properties and are represented by chemical formulae.",
              "Compounds contain two or more different elements.",
              "The elements in a compound are chemically bonded in fixed proportions.",
              "Compounds have definite compositions.",
              "Compounds have properties that are different from their constituent elements.",
              "Chemical formulae are used to represent compounds."
            ]
          }
        ]
      },
      {
        id: "chemistry-mixtures",
        title: "Mixtures",
        course: "Chemistry",
        topic: "Compounds and Mixtures",
        description: "Learn how mixtures differ from compounds and how mixtures can be separated.",
        sections: [
          {
            type: "introduction",
            title: "Introduction",
            content: [
              "A mixture contains two or more substances that are physically combined and can often be separated by physical methods. Unlike compounds, the components of a mixture are not chemically bonded."
            ]
          },
          {
            type: "concept",
            title: "What is a Mixture?",
            content: [
              "A mixture is formed when substances are combined without forming new chemical bonds. The components retain their individual properties and can be present in any proportion."
            ],
            illustration: {
              title: "What is a Mixture?",
              description: "Examples of mixtures: air, salt water, soil, and sand"
            }
          },
          {
            type: "concept",
            title: "Homogeneous vs. Heterogeneous Mixtures",
            content: [
              "Mixtures can be classified based on their uniformity."
            ],
            table: {
              headers: [
                "Type",
                "Description",
                "Example"
              ],
              rows: [
                [
                  "Homogeneous",
                  "Uniform composition throughout",
                  "Saltwater, air, sugar solution"
                ],
                [
                  "Heterogeneous",
                  "Non-uniform composition",
                  "Sand and water, oil and water, trail mix"
                ]
              ]
            },
            illustration: {
              title: "Homogeneous vs. Heterogeneous Mixtures",
              description: "Visual comparison of homogeneous (salt water) and heterogeneous (oil and water) mixtures"
            }
          },
          {
            type: "concept",
            title: "Separation of Mixtures",
            content: [
              "Mixtures can be separated using physical methods based on differences in physical properties."
            ],
            table: {
              headers: [
                "Method",
                "Property Used",
                "Example"
              ],
              rows: [
                [
                  "Filtration",
                  "Particle size",
                  "Separating sand from water"
                ],
                [
                  "Evaporation",
                  "Boiling point",
                  "Recovering salt from saltwater"
                ],
                [
                  "Distillation",
                  "Boiling point difference",
                  "Separating ethanol and water"
                ],
                [
                  "Chromatography",
                  "Solubility and adhesion",
                  "Separating pigments in ink"
                ],
                [
                  "Magnetic Separation",
                  "Magnetism",
                  "Separating iron filings from sulfur powder"
                ]
              ]
            },
            illustration: {
              title: "Separation of Mixtures",
              description: "Collage showing filtration, distillation, and chromatography setups"
            }
          },
          {
            type: "practice",
            title: "Check Your Understanding",
            question: "Which is a mixture?",
            options: [
              "Air",
              "Oxygen",
              "Gold",
              "Water"
            ],
            correctAnswer: "Air",
            feedback: {
              correct: "Air is a mixture of gases (nitrogen, oxygen, argon, carbon dioxide, etc.) that are not chemically bonded.",
              incorrect: "Not quite. Air is a mixture of gases (nitrogen, oxygen, argon, carbon dioxide, etc.) that are not chemically bonded."
            }
          },
          {
            type: "practice",
            title: "Check Your Understanding",
            question: "Which type of mixture has a uniform composition?",
            options: [
              "Heterogeneous",
              "Homogeneous",
              "Element",
              "Compound"
            ],
            correctAnswer: "Homogeneous",
            feedback: {
              correct: "A homogeneous mixture has a uniform composition throughout, like salt dissolved in water.",
              incorrect: "Not quite. A homogeneous mixture has a uniform composition throughout, like salt dissolved in water."
            }
          },
          {
            type: "summary",
            title: "Lesson Summary",
            points: [
              "Mixtures contain substances that are physically combined and can be separated using physical methods. They are classified as homogeneous or heterogeneous based on uniformity.",
              "Mixtures contain two or more substances physically combined.",
              "The substances in a mixture are not chemically combined.",
              "Mixtures can often be separated by physical methods.",
              "Mixtures may be homogeneous (uniform) or heterogeneous (non-uniform).",
              "Components of a mixture retain their individual properties."
            ]
          }
        ]
      }
    ],
  },
  chemicalReactions: {
    title: "Chemical Reactions",
    description: "Understand how substances transform into new substances with different properties through chemical reactions.",
    lessons: [
      {
        id: "chemistry-chemical-reactions",
        title: "Chemical Reactions",
        course: "Chemistry",
        topic: "Chemical Reactions",
        description: "Learn the basics of chemical reactions: reactants, products, and signs of a reaction.",
        sections: [
          {
            type: "introduction",
            title: "Introduction",
            content: [
              "A chemical reaction occurs when substances (reactants) change to form one or more new substances (products) with different properties. It involves the breaking and forming of chemical bonds."
            ]
          },
          {
            type: "concept",
            title: "Reactants and Products",
            content: [
              "Reactants are the starting substances, and products are the new substances formed. The general form is: Reactants → Products."
            ],
            illustration: {
              title: "Reactants and Products",
              description: "Diagram showing the transformation of reactants into products"
            }
          },
          {
            type: "concept",
            title: "Signs of a Chemical Reaction",
            content: [
              "Evidence of a chemical reaction can include:"
            ],
            illustration: {
              title: "Signs of a Chemical Reaction",
              description: "Collage showing signs: color change, gas bubbles, precipitate, and heat"
            }
          },
          {
            type: "concept",
            title: "Example: Rusting",
            content: [
              "When iron reacts with oxygen in the presence of moisture, rust (iron oxide) is formed. This is a chemical reaction because a new substance with different properties is produced."
            ],
            illustration: {
              title: "Example: Rusting",
              description: "Iron nail showing rust formation"
            }
          },
          {
            type: "practice",
            title: "Check Your Understanding",
            question: "What are the starting substances in a chemical reaction called?",
            options: [
              "Reactants",
              "Products",
              "Elements",
              "Solutions"
            ],
            correctAnswer: "Reactants",
            feedback: {
              correct: "Reactants are the substances that are consumed in a chemical reaction to form products.",
              incorrect: "Not quite. Reactants are the substances that are consumed in a chemical reaction to form products."
            }
          },
          {
            type: "practice",
            title: "Check Your Understanding",
            question: "What is formed during a chemical reaction?",
            options: [
              "Products",
              "Reactants",
              "Atoms only",
              "Containers"
            ],
            correctAnswer: "Products",
            feedback: {
              correct: "Products are the new substances that are formed as a result of a chemical reaction.",
              incorrect: "Not quite. Products are the new substances that are formed as a result of a chemical reaction."
            }
          },
          {
            type: "summary",
            title: "Lesson Summary",
            points: [
              "Chemical reactions transform reactants into products. The products have different properties from the original substances. Observing signs like color change or gas production can indicate a reaction.",
              "Chemical reactions produce new substances (products).",
              "Reactants are present before the reaction.",
              "Products are formed during the reaction.",
              "Chemical reactions involve the rearrangement of atoms and breaking/forming bonds.",
              "Signs include color change, gas production, precipitate formation, temperature change, and light/odor change."
            ]
          }
        ]
      },
      {
        id: "chemistry-conservation-mass",
        title: "Conservation of Mass",
        course: "Chemistry",
        topic: "Chemical Reactions",
        description: "Understand the fundamental law of conservation of mass.",
        sections: [
          {
            type: "introduction",
            title: "Introduction",
            content: [
              "In a chemical reaction, atoms are rearranged but are not created or destroyed. Therefore, the total mass is conserved in a closed system. This is the Law of Conservation of Mass."
            ]
          },
          {
            type: "concept",
            title: "The Law of Conservation of Mass",
            content: [
              "The total mass of the reactants equals the total mass of the products when a reaction takes place in a closed system. Matter is neither created nor destroyed, only transformed."
            ],
            illustration: {
              title: "The Law of Conservation of Mass",
              description: "Diagram showing equal mass on a balance before and after a reaction"
            }
          },
          {
            type: "concept",
            title: "Atoms are Rearranged",
            content: [
              "Chemical reactions rearrange atoms to form new substances. The atoms themselves remain present and unchanged. The number of each type of atom is the same on both sides of a chemical equation."
            ],
            illustration: {
              title: "Atoms are Rearranged",
              description: "Diagram showing atoms rearranging in a reaction"
            }
          },
          {
            type: "concept",
            title: "Balanced Equations",
            content: [
              "Chemical equations are balanced to show the conservation of mass. This means the number of atoms of each element is the same on both sides of the equation."
            ]
          },
          {
            type: "practice",
            title: "Check Your Understanding",
            question: "What happens to atoms during a chemical reaction?",
            options: [
              "They are rearranged",
              "They disappear",
              "They are destroyed",
              "They become energy only"
            ],
            correctAnswer: "They are rearranged",
            feedback: {
              correct: "Atoms are conserved in a reaction; they are simply rearranged to form new substances.",
              incorrect: "Not quite. Atoms are conserved in a reaction; they are simply rearranged to form new substances."
            }
          },
          {
            type: "practice",
            title: "Check Your Understanding",
            question: "Why are chemical equations balanced?",
            options: [
              "To conserve atoms",
              "To increase temperature",
              "To change the elements",
              "To remove products"
            ],
            correctAnswer: "To conserve atoms",
            feedback: {
              correct: "Balancing equations ensures that the number of atoms of each element is the same on both sides, reflecting the conservation of mass.",
              incorrect: "Not quite. Balancing equations ensures that the number of atoms of each element is the same on both sides, reflecting the conservation of mass."
            }
          },
          {
            type: "summary",
            title: "Lesson Summary",
            points: [
              "The law of conservation of mass states that matter is neither created nor destroyed in a chemical reaction. This is why chemical equations must be balanced.",
              "Mass is conserved in chemical reactions in a closed system.",
              "Atoms are rearranged rather than destroyed or created.",
              "Balanced equations show the conservation of atoms.",
              "The total number and type of atoms are the same in reactants and products."
            ]
          }
        ]
      },
      {
        id: "chemistry-types-reactions",
        title: "Types of Chemical Reactions",
        course: "Chemistry",
        topic: "Chemical Reactions",
        description: "Identify and understand common types of chemical reactions: combination, decomposition, displacement, and combustion.",
        sections: [
          {
            type: "introduction",
            title: "Introduction",
            content: [
              "Chemical reactions can be classified into different types based on how reactants change into products. Recognizing these patterns helps predict the products of reactions."
            ]
          },
          {
            type: "concept",
            title: "Combination (Synthesis) Reactions",
            content: [
              "In a combination reaction, two or more substances combine to form one main product."
            ],
            illustration: {
              title: "Combination (Synthesis) Reactions",
              description: "Diagram of A and B combining to form AB"
            }
          },
          {
            type: "concept",
            title: "Decomposition Reactions",
            content: [
              "In a decomposition reaction, one compound breaks down into simpler substances."
            ],
            illustration: {
              title: "Decomposition Reactions",
              description: "Diagram of AB breaking down into A and B"
            }
          },
          {
            type: "concept",
            title: "Displacement (Single Replacement) Reactions",
            content: [
              "In a displacement reaction, one element replaces another element in a compound."
            ],
            illustration: {
              title: "Displacement (Single Replacement) Reactions",
              description: "Diagram of A displacing B in compound BC"
            }
          },
          {
            type: "concept",
            title: "Combustion Reactions",
            content: [
              "Combustion is a reaction in which a substance reacts rapidly with oxygen, usually releasing heat and light (fire)."
            ],
            illustration: {
              title: "Combustion Reactions",
              description: "Flame and chemical equation for methane combustion"
            }
          },
          {
            type: "practice",
            title: "Check Your Understanding",
            question: "What type of reaction breaks a compound into simpler substances?",
            options: [
              "Combination",
              "Decomposition",
              "Combustion",
              "Neutralization"
            ],
            correctAnswer: "Decomposition",
            feedback: {
              correct: "Decomposition reactions involve a single compound breaking down into two or more simpler substances.",
              incorrect: "Not quite. Decomposition reactions involve a single compound breaking down into two or more simpler substances."
            }
          },
          {
            type: "practice",
            title: "Check Your Understanding",
            question: "Which gas commonly supports combustion?",
            options: [
              "Oxygen",
              "Nitrogen",
              "Hydrogen",
              "Carbon dioxide"
            ],
            correctAnswer: "Oxygen",
            feedback: {
              correct: "Oxygen is essential for combustion to occur. It acts as the oxidizing agent.",
              incorrect: "Not quite. Oxygen is essential for combustion to occur. It acts as the oxidizing agent."
            }
          },
          {
            type: "summary",
            title: "Lesson Summary",
            points: [
              "Chemical reactions can be grouped into types such as combination, decomposition, displacement, and combustion. Each type has a characteristic pattern.",
              "Chemical reactions can be classified into different types.",
              "Combination reactions form a new substance from simpler substances.",
              "Decomposition breaks compounds into simpler substances.",
              "Displacement involves an element replacing another in a compound.",
              "Combustion commonly involves oxygen and releases energy in the form of heat and light."
            ]
          }
        ]
      }
    ],
  },
  acidsBases: {
    title: "Acids and Bases",
    description: "Explore the properties of acids and bases, indicators, the pH scale, and neutralization reactions.",
    lessons: [
      {
        id: "chemistry-acids-bases",
        title: "Acids and Bases",
        course: "Chemistry",
        topic: "Acids and Bases",
        description: "Understand the characteristics, properties, and uses of acids and bases.",
        sections: [
          {
            type: "introduction",
            title: "Introduction",
            content: [
              "Acids and bases are important groups of substances with different chemical properties. They are common in both nature and industry, and they play a vital role in our daily lives and biological systems."
            ]
          },
          {
            type: "concept",
            title: "Properties of Acids",
            content: [
              "Acids are substances that produce hydrogen ions (H⁺) when dissolved in water. They have a sour taste (e.g., citric acid in lemons), can corrode metals, and turn blue litmus paper red."
            ],
            illustration: {
              title: "Properties of Acids",
              description: "Examples of acids: lemon, vinegar, battery acid, and stomach acid"
            }
          },
          {
            type: "concept",
            title: "Properties of Bases",
            content: [
              "Bases are substances that produce hydroxide ions (OH⁻) when dissolved in water, or accept hydrogen ions. They have a bitter taste and a slippery feel (e.g., soap). Bases can neutralize acids and turn red litmus paper blue."
            ],
            illustration: {
              title: "Properties of Bases",
              description: "Examples of bases: soap, baking soda, milk of magnesia, and household cleaners"
            }
          },
          {
            type: "concept",
            title: "Indicators",
            content: [
              "Indicators are substances that change color depending on whether a solution is acidic or basic. Common indicators include litmus paper, phenolphthalein, and universal indicator (which shows a range of colors)."
            ],
            table: {
              headers: [
                "Indicator",
                "Color in Acid",
                "Color in Base",
                "Color in Neutral"
              ],
              rows: [
                [
                  "Blue Litmus Paper",
                  "Red",
                  "Blue (no change)",
                  "Blue (no change)"
                ],
                [
                  "Red Litmus Paper",
                  "Red (no change)",
                  "Blue",
                  "Red (no change)"
                ],
                [
                  "Phenolphthalein",
                  "Colorless",
                  "Pink",
                  "Colorless"
                ],
                [
                  "Universal Indicator",
                  "Red/Yellow/Orange",
                  "Blue/Purple/Green",
                  "Green"
                ]
              ]
            },
            illustration: {
              title: "Indicators",
              description: "Color changes of litmus paper, phenolphthalein, and universal indicator"
            }
          },
          {
            type: "concept",
            title: "Neutralization Reactions",
            content: [
              "When an acid reacts with a base, a neutralization reaction occurs, producing a salt and water. This is a specific type of chemical reaction."
            ],
            illustration: {
              title: "Neutralization Reactions",
              description: "Diagram of a neutralization reaction forming salt and water"
            }
          },
          {
            type: "practice",
            title: "Check Your Understanding",
            question: "What can be used to identify whether a solution is acidic or basic?",
            options: [
              "An indicator",
              "A ruler",
              "A thermometer only",
              "A balance"
            ],
            correctAnswer: "An indicator",
            feedback: {
              correct: "Indicators change color in the presence of acids or bases, allowing us to determine the nature of a solution.",
              incorrect: "Not quite. Indicators change color in the presence of acids or bases, allowing us to determine the nature of a solution."
            }
          },
          {
            type: "practice",
            title: "Check Your Understanding",
            question: "What type of reaction occurs between an acid and a base?",
            options: [
              "Neutralization",
              "Evaporation",
              "Freezing",
              "Melting"
            ],
            correctAnswer: "Neutralization",
            feedback: {
              correct: "Neutralization is the chemical reaction between an acid and a base, resulting in salt and water.",
              incorrect: "Not quite. Neutralization is the chemical reaction between an acid and a base, resulting in salt and water."
            }
          },
          {
            type: "summary",
            title: "Lesson Summary",
            points: [
              "Acids and bases are important chemical substances. Indicators can help identify them, while neutralization reactions produce salt and water.",
              "Acids have a sour taste, turn blue litmus red, and release H⁺ ions.",
              "Bases have a bitter taste, feel slippery, turn red litmus blue, and release or accept OH⁻ ions.",
              "Indicators are used to identify acids, bases, or neutral substances.",
              "Neutralization is the reaction of an acid and a base to form salt and water."
            ]
          }
        ]
      },
      {
        id: "chemistry-ph-scale",
        title: "The pH Scale",
        course: "Chemistry",
        topic: "Acids and Bases",
        description: "Understand the pH scale, its range, and what different pH values indicate.",
        sections: [
          {
            type: "introduction",
            title: "Introduction",
            content: [
              "The pH scale is used to indicate how acidic or basic an aqueous solution is. It is a logarithmic scale, meaning each whole pH value below 7 is ten times more acidic than the next higher value."
            ]
          },
          {
            type: "concept",
            title: "The pH Scale Range",
            content: [
              "The pH scale typically ranges from 0 (strongly acidic) to 14 (strongly basic). A pH of 7 is neutral at standard conditions (e.g., pure water)."
            ],
            illustration: {
              title: "The pH Scale Range",
              description: "A color-coded pH scale chart showing values from 0 to 14 and examples"
            }
          },
          {
            type: "concept",
            title: "Acidic Solutions (pH < 7)",
            content: [
              "Solutions with pH values below 7 are acidic. The lower the pH, the stronger the acid. Examples include:"
            ],
            illustration: {
              title: "Acidic Solutions (pH < 7)",
              description: "Visual representation of acidic solutions and their pH values"
            }
          },
          {
            type: "concept",
            title: "Neutral Solutions (pH ~ 7)",
            content: [
              "A neutral solution has a pH of about 7 under standard conditions. Pure water is a classic example. Human blood is slightly basic, with a pH around 7.4."
            ],
            illustration: {
              title: "Neutral Solutions (pH ~ 7)",
              description: "Visual of water and a pH test showing green (neutral)"
            }
          },
          {
            type: "concept",
            title: "Basic (Alkaline) Solutions (pH > 7)",
            content: [
              "Solutions with pH values above 7 are basic or alkaline. The higher the pH, the stronger the base. Examples include:"
            ],
            illustration: {
              title: "Basic (Alkaline) Solutions (pH > 7)",
              description: "Visual representation of basic solutions and their pH values"
            }
          },
          {
            type: "practice",
            title: "Check Your Understanding",
            question: "A solution with pH 3 is:",
            options: [
              "Acidic",
              "Neutral",
              "Basic",
              "A mixture"
            ],
            correctAnswer: "Acidic",
            feedback: {
              correct: "A pH below 7 indicates an acidic solution. pH 3 is strongly acidic.",
              incorrect: "Not quite. A pH below 7 indicates an acidic solution. pH 3 is strongly acidic."
            }
          },
          {
            type: "practice",
            title: "Check Your Understanding",
            question: "A solution with pH 7 is:",
            options: [
              "Strongly acidic",
              "Neutral",
              "Basic",
              "Metallic"
            ],
            correctAnswer: "Neutral",
            feedback: {
              correct: "A pH of 7 is neutral. Pure water has a pH of 7 at room temperature.",
              incorrect: "Not quite. A pH of 7 is neutral. Pure water has a pH of 7 at room temperature."
            }
          },
          {
            type: "practice",
            title: "Check Your Understanding",
            question: "A solution with pH 10 is:",
            options: [
              "Acidic",
              "Neutral",
              "Basic",
              "Pure water"
            ],
            correctAnswer: "Basic",
            feedback: {
              correct: "A pH above 7 indicates a basic (alkaline) solution. pH 10 is moderately basic.",
              incorrect: "Not quite. A pH above 7 indicates a basic (alkaline) solution. pH 10 is moderately basic."
            }
          },
          {
            type: "summary",
            title: "Lesson Summary",
            points: [
              "The pH scale is a critical tool for comparing the acidity and alkalinity of solutions. It ranges from 0 to 14, with 7 being neutral.",
              "pH describes how acidic or basic a solution is.",
              "pH below 7 is acidic.",
              "pH 7 is neutral.",
              "pH above 7 is basic.",
              "The pH scale is logarithmic and commonly used for aqueous solutions."
            ]
          }
        ]
      }
    ],
  },
  solutions: {
    title: "Solutions",
    description: "Understand the composition of solutions: solutes, solvents, and concentration. Learn about separation techniques.",
    lessons: [
      {
        id: "chemistry-solutions",
        title: "Solutions",
        course: "Chemistry",
        topic: "Solutions",
        description: "Define solutes, solvents, and solutions. Explore different types of solutions.",
        sections: [
          {
            type: "introduction",
            title: "Introduction",
            content: [
              "A solution is a homogeneous mixture formed when one substance (the solute) dissolves in another (the solvent). Solutions are all around us, from seawater and air to beverages and medicines."
            ]
          },
          {
            type: "concept",
            title: "Solute",
            content: [
              "A solute is the substance that is dissolved in a solution. It is usually present in a smaller amount. For example, in saltwater, salt is the solute."
            ],
            illustration: {
              title: "Solute",
              description: "Diagram showing salt crystals dissolving in water"
            }
          },
          {
            type: "concept",
            title: "Solvent",
            content: [
              "A solvent is the substance that dissolves the solute. It is usually present in a larger amount. In saltwater, water is the solvent. Water is often called the \"universal solvent.\""
            ],
            illustration: {
              title: "Solvent",
              description: "Visual of water as a solvent"
            }
          },
          {
            type: "concept",
            title: "Solution",
            content: [
              "A solution is the homogeneous mixture formed when the solute dissolves completely in the solvent. The resulting mixture has a uniform composition."
            ],
            illustration: {
              title: "Solution",
              description: "Visual of a homogeneous mixture of salt dissolved in water"
            }
          },
          {
            type: "concept",
            title: "Types of Solutions",
            content: [
              "Solutions can exist in different states. Common examples include:"
            ],
            table: {
              headers: [
                "State of Solvent",
                "State of Solute",
                "Example"
              ],
              rows: [
                [
                  "Liquid",
                  "Gas",
                  "Carbonated water (CO₂ in water)"
                ],
                [
                  "Liquid",
                  "Liquid",
                  "Vinegar (acetic acid in water)"
                ],
                [
                  "Liquid",
                  "Solid",
                  "Saltwater (salt in water), Sugar water"
                ],
                [
                  "Solid",
                  "Solid",
                  "Alloys (e.g., brass: copper and zinc)"
                ],
                [
                  "Gas",
                  "Gas",
                  "Air (oxygen and nitrogen)"
                ]
              ]
            },
            illustration: {
              title: "Types of Solutions",
              description: "Collage of different types of solutions"
            }
          },
          {
            type: "concept",
            title: "Concentration of Solutions",
            content: [
              "Concentration refers to the amount of solute dissolved in a given amount of solvent. It can be expressed in various ways, such as mass/volume percentage or molarity."
            ]
          },
          {
            type: "practice",
            title: "Check Your Understanding",
            question: "What is the substance that is dissolved called?",
            options: [
              "Solute",
              "Solvent",
              "Product",
              "Reactant"
            ],
            correctAnswer: "Solute",
            feedback: {
              correct: "The solute is the component of a solution that is dissolved in the solvent.",
              incorrect: "Not quite. The solute is the component of a solution that is dissolved in the solvent."
            }
          },
          {
            type: "practice",
            title: "Check Your Understanding",
            question: "In saltwater, what is the solvent?",
            options: [
              "Salt",
              "Water",
              "Sodium",
              "Chlorine"
            ],
            correctAnswer: "Water",
            feedback: {
              correct: "Water is the solvent in saltwater because it is the substance that dissolves the salt (solute).",
              incorrect: "Not quite. Water is the solvent in saltwater because it is the substance that dissolves the salt (solute)."
            }
          },
          {
            type: "summary",
            title: "Lesson Summary",
            points: [
              "Solutions are homogeneous mixtures containing a solute dissolved in a solvent. They can be found in gas, liquid, and solid states. The concentration indicates how much solute is present.",
              "A solution is a homogeneous mixture.",
              "The solute is the substance being dissolved.",
              "The solvent is the substance that does the dissolving.",
              "Water is a common and versatile solvent.",
              "Solutions can be found in all three states of matter.",
              "Concentration describes the amount of solute in a solution."
            ]
          }
        ]
      },
      {
        id: "chemistry-separation",
        title: "Separation of Mixtures",
        course: "Chemistry",
        topic: "Solutions",
        description: "Learn common techniques used to separate mixtures based on physical properties.",
        sections: [
          {
            type: "introduction",
            title: "Introduction",
            content: [
              "Mixtures can be separated into their components using physical methods that take advantage of differences in properties such as particle size, boiling point, magnetism, and solubility."
            ]
          },
          {
            type: "concept",
            title: "Filtration",
            content: [
              "Filtration is used to separate an insoluble solid from a liquid (or a mixture of liquids) using a porous barrier like filter paper. The solid is retained, while the liquid passes through."
            ],
            illustration: {
              title: "Filtration",
              description: "Diagram of a filtration setup: filter paper in a funnel, catching solid particles"
            }
          },
          {
            type: "concept",
            title: "Evaporation",
            content: [
              "Evaporation is used to separate a dissolved solid from its solution by heating the solution to remove the solvent (usually water), leaving the solid behind."
            ],
            illustration: {
              title: "Evaporation",
              description: "Diagram showing a solution being heated, evaporating water to leave crystals of solid"
            }
          },
          {
            type: "concept",
            title: "Distillation",
            content: [
              "Distillation separates a mixture of liquids based on differences in their boiling points. The liquid with the lower boiling point vaporizes first, is cooled, and is collected as a distillate."
            ],
            illustration: {
              title: "Distillation",
              description: "Diagram of a distillation apparatus: flask, condenser, and collection flask"
            }
          },
          {
            type: "concept",
            title: "Chromatography",
            content: [
              "Chromatography separates the components of a mixture based on their different affinities for a stationary phase and a mobile phase. It is commonly used to separate pigments in ink or dyes."
            ],
            illustration: {
              title: "Chromatography",
              description: "Paper chromatography showing different colored pigments separating"
            }
          },
          {
            type: "concept",
            title: "Magnetic Separation",
            content: [
              "Magnetic separation uses a magnet to separate magnetic materials (like iron) from non-magnetic materials in a mixture."
            ],
            illustration: {
              title: "Magnetic Separation",
              description: "A magnet attracting iron filings from a mixture with sand"
            }
          },
          {
            type: "practice",
            title: "Check Your Understanding",
            question: "Which method can separate sand from water?",
            options: [
              "Filtration",
              "Distillation only",
              "Magnetism",
              "Freezing"
            ],
            correctAnswer: "Filtration",
            feedback: {
              correct: "Filtration can separate sand (insoluble solid) from water (liquid) using filter paper.",
              incorrect: "Not quite. Filtration can separate sand (insoluble solid) from water (liquid) using filter paper."
            }
          },
          {
            type: "practice",
            title: "Check Your Understanding",
            question: "Which method uses differences in boiling points?",
            options: [
              "Filtration",
              "Distillation",
              "Magnetic separation",
              "Sieving"
            ],
            correctAnswer: "Distillation",
            feedback: {
              correct: "Distillation separates liquids based on their different boiling points.",
              incorrect: "Not quite. Distillation separates liquids based on their different boiling points."
            }
          },
          {
            type: "summary",
            title: "Lesson Summary",
            points: [
              "Mixtures can be separated using physical methods such as filtration, evaporation, distillation, chromatography, and magnetic separation, based on differences in physical properties.",
              "Filtration separates insoluble solids from liquids.",
              "Evaporation can recover dissolved solids from a solution.",
              "Distillation uses differences in boiling points to separate liquids.",
              "Chromatography separates substances based on their interaction with a stationary and mobile phase.",
              "Magnetic separation can remove magnetic materials."
            ]
          }
        ]
      }
    ],
  },
  metalsNonMetals: {
    title: "Metals and Non-metals",
    description: "Compare the properties and uses of metals and non-metals. Understand the reactivity series.",
    lessons: [
      {
        id: "chemistry-metals-nonmetals",
        title: "Metals and Non-metals",
        course: "Chemistry",
        topic: "Metals and Non-metals",
        description: "Compare the physical and chemical properties and uses of metals and non-metals.",
        sections: [
          {
            type: "introduction",
            title: "Introduction",
            content: [
              "Elements can be broadly classified as metals, non-metals, and metalloids based on their physical and chemical properties. This classification helps predict their behavior and uses."
            ]
          },
          {
            type: "concept",
            title: "Physical Properties of Metals",
            content: [
              "Metals are generally characterized by:"
            ],
            illustration: {
              title: "Physical Properties of Metals",
              description: "Images showing shine, malleability (hammered metal), ductility (wire), and conductivity (light bulb circuit)"
            }
          },
          {
            type: "concept",
            title: "Physical Properties of Non-metals",
            content: [
              "Non-metals are generally:"
            ],
            illustration: {
              title: "Physical Properties of Non-metals",
              description: "Images showing dull appearance, brittleness, and poor conductivity"
            }
          },
          {
            type: "concept",
            title: "Uses of Metals",
            content: [
              "Metals are widely used in many industries due to their properties:"
            ],
            table: {
              headers: [
                "Metal",
                "Key Property",
                "Common Use"
              ],
              rows: [
                [
                  "Iron (Fe)",
                  "Strength, structural",
                  "Construction, steel making"
                ],
                [
                  "Aluminium (Al)",
                  "Lightweight, corrosion-resistant",
                  "Aircraft, beverage cans, kitchen foil"
                ],
                [
                  "Copper (Cu)",
                  "Good conductor",
                  "Electrical wiring, plumbing"
                ],
                [
                  "Gold (Au)",
                  "Non-reactive, shiny",
                  "Jewelry, electronics"
                ],
                [
                  "Silver (Ag)",
                  "Best electrical conductor",
                  "Jewelry, coins, industrial uses"
                ]
              ]
            },
            illustration: {
              title: "Uses of Metals",
              description: "Collage showing uses of iron, aluminium, copper, and gold"
            }
          },
          {
            type: "concept",
            title: "Uses of Non-metals",
            content: [
              "Non-metals are essential in many applications:"
            ],
            table: {
              headers: [
                "Non-metal",
                "Key Property",
                "Common Use"
              ],
              rows: [
                [
                  "Oxygen (O₂)",
                  "Supports life and combustion",
                  "Breathing, medical use, industrial processes"
                ],
                [
                  "Nitrogen (N₂)",
                  "Inert gas",
                  "Fertilizers, food preservation"
                ],
                [
                  "Carbon (C)",
                  "Forms many compounds",
                  "Fuels, plastics, steel production"
                ],
                [
                  "Chlorine (Cl₂)",
                  "Reactive, disinfectant",
                  "Water treatment, producing plastics"
                ],
                [
                  "Sulfur (S)",
                  "Burns, used in compounds",
                  "Fertilizers, production of sulfuric acid"
                ]
              ]
            },
            illustration: {
              title: "Uses of Non-metals",
              description: "Collage showing uses of oxygen, nitrogen, carbon, and chlorine"
            }
          },
          {
            type: "practice",
            title: "Check Your Understanding",
            question: "Which is generally a good conductor of electricity?",
            options: [
              "Copper",
              "Sulfur",
              "Oxygen",
              "Carbon dioxide"
            ],
            correctAnswer: "Copper",
            feedback: {
              correct: "Copper is a metal that is an excellent conductor of electricity, making it ideal for electrical wiring.",
              incorrect: "Not quite. Copper is a metal that is an excellent conductor of electricity, making it ideal for electrical wiring."
            }
          },
          {
            type: "practice",
            title: "Check Your Understanding",
            question: "Which property is commonly associated with metals?",
            options: [
              "Malleability",
              "Poor conductivity",
              "Extreme brittleness",
              "No shine"
            ],
            correctAnswer: "Malleability",
            feedback: {
              correct: "Malleability, the ability to be hammered into thin sheets, is a characteristic property of metals.",
              incorrect: "Not quite. Malleability, the ability to be hammered into thin sheets, is a characteristic property of metals."
            }
          },
          {
            type: "summary",
            title: "Lesson Summary",
            points: [
              "Metals and non-metals have distinct properties that determine their uses. Metals are good conductors and are used in construction and wiring, while non-metals have many uses in industry and living systems.",
              "Metals are generally shiny, malleable, ductile, and good conductors.",
              "Non-metals are generally dull, brittle, and poor conductors.",
              "Metals and non-metals have different physical and chemical properties.",
              "The uses of elements are closely linked to their properties."
            ]
          }
        ]
      },
      {
        id: "chemistry-metals-reactivity",
        title: "Reactivity of Metals",
        course: "Chemistry",
        topic: "Metals and Non-metals",
        description: "Understand the reactivity series of metals and their reactions with oxygen, water, and acids.",
        sections: [
          {
            type: "introduction",
            title: "Introduction",
            content: [
              "Different metals have different levels of chemical reactivity. The reactivity series is a list that ranks metals in order of their reactivity, from most reactive (potassium) to least reactive (gold)."
            ]
          },
          {
            type: "concept",
            title: "The Reactivity Series",
            content: [
              "The reactivity series helps predict how a metal will react with other substances. The most reactive metals are at the top, and the least reactive are at the bottom."
            ],
            illustration: {
              title: "The Reactivity Series",
              description: "Reactivity series of metals: K > Na > Ca > Mg > Al > Zn > Fe > Sn > Pb > Cu > Hg > Ag > Au"
            }
          },
          {
            type: "concept",
            title: "Reaction with Oxygen",
            content: [
              "Many metals react with oxygen to form metal oxides. The reactivity determines how quickly and vigorously the reaction occurs."
            ],
            illustration: {
              title: "Reaction with Oxygen",
              description: "Burning magnesium ribbon, rusting iron, and tarnishing silver"
            }
          },
          {
            type: "concept",
            title: "Reaction with Water",
            content: [
              "Some metals react with water, producing metal hydroxide and hydrogen gas. The speed and nature of the reaction depend on the metal's reactivity."
            ],
            table: {
              headers: [
                "Metal",
                "Reaction with Water",
                "Product(s)"
              ],
              rows: [
                [
                  "K (Potassium)",
                  "Very vigorous, explodes",
                  "KOH + H₂"
                ],
                [
                  "Na (Sodium)",
                  "Vigorous, fizzes",
                  "NaOH + H₂"
                ],
                [
                  "Ca (Calcium)",
                  "Reacts with cold water, bubbling",
                  "Ca(OH)₂ + H₂"
                ],
                [
                  "Mg (Magnesium)",
                  "Reacts very slowly with cold water, reacts with steam",
                  "MgO (steam) or Mg(OH)₂ + H₂"
                ],
                [
                  "Fe (Iron)",
                  "Does not react with cold water, reacts slowly with steam",
                  "Fe₃O₄ + H₂ (steam)"
                ],
                [
                  "Cu (Copper)",
                  "No reaction with water",
                  "N/A"
                ]
              ]
            },
            illustration: {
              title: "Reaction with Water",
              description: "Sodium reacting with water, magnesium reacting with steam"
            }
          },
          {
            type: "concept",
            title: "Reaction with Acids",
            content: [
              "Many metals react with acids to produce a salt and hydrogen gas. The reaction is generally more vigorous for more reactive metals."
            ],
            illustration: {
              title: "Reaction with Acids",
              description: "Zinc granules reacting with hydrochloric acid to produce hydrogen gas"
            }
          },
          {
            type: "practice",
            title: "Check Your Understanding",
            question: "What can form when a metal reacts with oxygen?",
            options: [
              "Metal oxide",
              "Only water",
              "Only hydrogen",
              "Salt only"
            ],
            correctAnswer: "Metal oxide",
            feedback: {
              correct: "When a metal reacts with oxygen, a metal oxide is formed. For example, magnesium oxide (MgO) is formed when magnesium burns in oxygen.",
              incorrect: "Not quite. When a metal reacts with oxygen, a metal oxide is formed. For example, magnesium oxide (MgO) is formed when magnesium burns in oxygen."
            }
          },
          {
            type: "practice",
            title: "Check Your Understanding",
            question: "Some metals react with acids to produce hydrogen and:",
            options: [
              "A salt",
              "Oxygen",
              "Carbon",
              "Water only"
            ],
            correctAnswer: "A salt",
            feedback: {
              correct: "The general reaction of a metal with an acid is: Metal + Acid → Salt + Hydrogen.",
              incorrect: "Not quite. The general reaction of a metal with an acid is: Metal + Acid → Salt + Hydrogen."
            }
          },
          {
            type: "summary",
            title: "Lesson Summary",
            points: [
              "The reactivity of metals determines how readily they react with other substances like oxygen, water, and acids. The reactivity series is a crucial tool for predicting these reactions.",
              "Metals differ in their chemical reactivity.",
              "The reactivity series ranks metals from most to least reactive.",
              "More reactive metals react vigorously with oxygen, water, and acids.",
              "Reactions with acids produce hydrogen gas and a salt.",
              "The reactivity series helps predict possible reactions and their products."
            ]
          }
        ]
      }
    ],
  },
  carbonChemistry: {
    title: "Carbon Chemistry",
    description: "Explore the chemistry of carbon, its compounds, and its importance in life and industry.",
    lessons: [
      {
        id: "chemistry-carbon",
        title: "Carbon and Its Compounds",
        course: "Chemistry",
        topic: "Carbon Chemistry",
        description: "Explore carbon, its allotropes, and its important compounds.",
        sections: [
          {
            type: "introduction",
            title: "Introduction",
            content: [
              "Carbon is a remarkably versatile element. It forms a vast number of compounds, more than any other element, and is the basis of all known life. Its ability to form strong bonds with other carbon atoms and many other elements is unique."
            ]
          },
          {
            type: "concept",
            title: "Carbon: The Element",
            content: [
              "Carbon is a non-metallic element with the symbol C and atomic number 6. It exists in different structural forms called allotropes."
            ],
            illustration: {
              title: "Carbon: The Element",
              description: "Carbon atom diagram, symbol, and location on periodic table"
            }
          },
          {
            type: "concept",
            title: "Allotropes of Carbon",
            content: [
              "Allotropes are different forms of the same element with different physical properties. Carbon has several allotropes, including:"
            ],
            table: {
              headers: [
                "Allotrope",
                "Structure",
                "Properties",
                "Uses"
              ],
              rows: [
                [
                  "Diamond",
                  "Tetrahedral, strong 3D network",
                  "Hard, transparent, good heat conductor, poor electrical conductor",
                  "Jewelry, cutting tools"
                ],
                [
                  "Graphite",
                  "Layers of hexagonal sheets",
                  "Soft, slippery, good electrical conductor",
                  "Lubricants, pencil lead, battery electrodes"
                ],
                [
                  "Fullerenes (e.g., C₆₀)",
                  "Cage-like structures",
                  "Varied, can be strong, can be used in electronics and materials science",
                  "Nanotechnology, materials science, potential drug delivery"
                ],
                [
                  "Amorphous Carbon",
                  "Disordered structure",
                  "Porous, often black",
                  "Pigments, filtration, fuel (charcoal)"
                ]
              ]
            },
            illustration: {
              title: "Allotropes of Carbon",
              description: "Structures and images of diamond, graphite, and fullerene"
            }
          },
          {
            type: "concept",
            title: "Important Carbon Compounds",
            content: [
              "Carbon forms many important compounds, both organic (containing carbon) and inorganic (not containing carbon as a main component, but can contain it)."
            ],
            table: {
              headers: [
                "Compound",
                "Formula",
                "Type",
                "Key Facts"
              ],
              rows: [
                [
                  "Carbon Dioxide",
                  "CO₂",
                  "Inorganic",
                  "Produced by respiration and combustion, used by plants in photosynthesis, a greenhouse gas"
                ],
                [
                  "Carbon Monoxide",
                  "CO",
                  "Inorganic",
                  "Poisonous gas produced by incomplete combustion"
                ],
                [
                  "Methane",
                  "CH₄",
                  "Organic",
                  "Main component of natural gas, a potent greenhouse gas"
                ],
                [
                  "Glucose",
                  "C₆H₁₂O₆",
                  "Organic",
                  "Simple sugar, crucial for energy in living organisms"
                ],
                [
                  "Ethanol",
                  "C₂H₅OH",
                  "Organic",
                  "Alcohol, used in beverages, as a disinfectant, and as a fuel"
                ]
              ]
            },
            illustration: {
              title: "Important Carbon Compounds",
              description: "Molecular structures of CO₂, CO, CH₄, C₆H₁₂O₆, and C₂H₅OH"
            }
          },
          {
            type: "practice",
            title: "Check Your Understanding",
            question: "What is the chemical symbol for carbon?",
            options: [
              "Ca",
              "C",
              "Co",
              "Cr"
            ],
            correctAnswer: "C",
            feedback: {
              correct: "The chemical symbol for carbon is C. It is derived from its Latin name, \"Carbonium\".",
              incorrect: "Not quite. The chemical symbol for carbon is C. It is derived from its Latin name, \"Carbonium\"."
            }
          },
          {
            type: "practice",
            title: "Check Your Understanding",
            question: "What is the formula of carbon dioxide?",
            options: [
              "CO",
              "CO₂",
              "C₂O",
              "O₂C₂"
            ],
            correctAnswer: "CO₂",
            feedback: {
              correct: "Carbon dioxide is composed of one carbon atom and two oxygen atoms, giving it the formula CO₂.",
              incorrect: "Not quite. Carbon dioxide is composed of one carbon atom and two oxygen atoms, giving it the formula CO₂."
            }
          },
          {
            type: "summary",
            title: "Lesson Summary",
            points: [
              "Carbon forms a wide variety of compounds and allotropes. Its unique bonding ability makes it central to life, fuels, and industry. Understanding carbon chemistry is fundamental to many areas of science.",
              "Carbon has the symbol C and is a non-metal.",
              "Carbon forms more compounds than any other element.",
              "Allotropes include diamond, graphite, and fullerenes, which have different properties.",
              "Carbon dioxide is essential for photosynthesis and is a greenhouse gas.",
              "Carbon monoxide is a poisonous gas.",
              "Carbon is the basis of organic chemistry and life."
            ]
          }
        ]
      }
    ],
  },
  chemistryInLife: {
    title: "Chemistry in Everyday Life",
    description: "Discover how chemistry is connected to cooking, cleaning, agriculture, medicine, and more.",
    lessons: [
      {
        id: "chemistry-everyday-life",
        title: "Chemistry in Everyday Life",
        course: "Chemistry",
        topic: "Chemistry in Everyday Life",
        description: "Explore the applications of chemistry in our daily activities and the materials we use.",
        sections: [
          {
            type: "introduction",
            title: "Introduction",
            content: [
              "Chemistry is not just a subject in a textbook—it is the science of the world around us. It is present in cooking, cleaning, agriculture, medicine, construction, and almost every aspect of our daily lives."
            ]
          },
          {
            type: "concept",
            title: "Chemistry in Cooking",
            content: [
              "Cooking involves a series of chemical and physical changes. Heat causes proteins to denature, starches to gelatinize, and sugars to caramelize, creating new flavors and textures."
            ],
            illustration: {
              title: "Chemistry in Cooking",
              description: "Collage showing chemical changes in cooking: baking a cake, frying an egg, and caramelizing sugar"
            }
          },
          {
            type: "concept",
            title: "Chemistry in Cleaning",
            content: [
              "Cleaning products rely on chemistry to remove dirt, grease, and microorganisms. Soaps and detergents are surfactants that help water interact with oils and dirt, allowing them to be rinsed away."
            ],
            illustration: {
              title: "Chemistry in Cleaning",
              description: "Collage showing soap molecules, detergents, bleach, and vinegar"
            }
          },
          {
            type: "concept",
            title: "Chemistry in Agriculture",
            content: [
              "Chemistry is crucial for modern agriculture. Fertilizers provide essential nutrients (nitrogen, phosphorus, potassium) for plants. Soil chemistry affects nutrient availability and plant health."
            ],
            illustration: {
              title: "Chemistry in Agriculture",
              description: "Images of fertilizer application, soil pH testing, and plant growth"
            }
          },
          {
            type: "concept",
            title: "Chemistry and Health",
            content: [
              "Chemistry is fundamental to the development of medicines, disinfectants, and our understanding of nutrition and disease."
            ],
            illustration: {
              title: "Chemistry and Health",
              description: "Images of pills, a first-aid kit, and balanced diet foods"
            }
          },
          {
            type: "practice",
            title: "Check Your Understanding",
            question: "Which area uses chemistry to provide nutrients to crops?",
            options: [
              "Agriculture",
              "Astronomy",
              "Geography",
              "Music"
            ],
            correctAnswer: "Agriculture",
            feedback: {
              correct: "Agriculture relies on fertilizers (chemical compounds) to provide essential nutrients like nitrogen, phosphorus, and potassium to crops.",
              incorrect: "Not quite. Agriculture relies on fertilizers (chemical compounds) to provide essential nutrients like nitrogen, phosphorus, and potassium to crops."
            }
          },
          {
            type: "practice",
            title: "Check Your Understanding",
            question: "Which products commonly rely on chemistry for cleaning?",
            options: [
              "Soaps and detergents",
              "Books",
              "Rulers",
              "Pencils only"
            ],
            correctAnswer: "Soaps and detergents",
            feedback: {
              correct: "Soaps and detergents are chemical products that use surfactants to remove dirt and grease, making them essential for cleaning.",
              incorrect: "Not quite. Soaps and detergents are chemical products that use surfactants to remove dirt and grease, making them essential for cleaning."
            }
          },
          {
            type: "summary",
            title: "Lesson Summary",
            points: [
              "Chemistry helps us understand and improve many processes and materials used in everyday life, from the food we eat to the medicines we take.",
              "Chemistry is present in everyday activities.",
              "Cooking involves chemical and physical changes that alter the properties of food.",
              "Cleaning products use chemical principles to remove dirt and kill germs.",
              "Chemistry is vital in agriculture for fertilizers, pesticides, and understanding soil health.",
              "Chemistry underpins medicine, nutrition, and public health."
            ]
          }
        ]
      }
    ],
  }
};

export default chemistryLessons;