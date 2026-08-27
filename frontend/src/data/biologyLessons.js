const biologyLessons = {
  introductionToBiology: {
    title: 'Introduction to Biology',
    description:
      'Discover biology, the science of life, its major branches, and its importance in understanding living organisms.',
    lessons: [
      {
        id: 'biology-introduction',
        title: 'Introduction to Biology',
        course: 'Biology',
        topic: 'Introduction to Biology',
        description:
          'Learn what biology is, what biologists study, and why biology is important in everyday life.',
        icon: '🔬',

        objectives: [
          'Define biology.',
          'Explain what biologists study.',
          'Identify major branches of biology.',
          'Explain the importance of biology in everyday life.',
          'Give examples of careers related to biology.',
        ],

        sections: [
          {
            type: 'introduction',
            title: 'What is Biology?',
            content: [
              'Biology is the scientific study of life and living organisms.',
              'Biologists study how living things are structured, how they function, how they grow and reproduce, how they interact with their environment, and how they change over time.',
              'Living organisms include microorganisms, plants, animals and humans.',
            ],
            remember: 'Biology means the scientific study of life.',
          },
          {
            type: 'concept',
            title: 'What Do Biologists Study?',
            content: [
              'Biologists investigate living organisms at many levels, from molecules and cells to whole organisms, populations, ecosystems and the biosphere.',
              'They may study the structure of organisms, their behavior, reproduction, nutrition, diseases, inheritance, evolution and relationships with the environment.',
            ],
            formula: 'Biology = Scientific study of life',
            remember: 'Biology covers both the structure and functioning of living things.',
          },
          {
            type: 'concept',
            title: 'Major Branches of Biology',
            content: [
              'Botany is the study of plants.',
              'Zoology is the study of animals.',
              'Microbiology is the study of microorganisms.',
              'Ecology is the study of relationships between organisms and their environment.',
              'Genetics is the study of heredity and variation.',
              'Anatomy is the study of body structure.',
              'Physiology is the study of how living structures function.',
            ],
            remember: 'Different branches of biology help scientists study different aspects of life.',
          },
          {
            type: 'concept',
            title: 'Importance of Biology',
            content: [
              'Biology helps us understand human health, diseases, nutrition and reproduction.',
              'It helps farmers improve crop production and manage pests and diseases.',
              'It supports conservation of biodiversity and protection of the environment.',
              'Biological knowledge is important in medicine, agriculture, biotechnology, environmental management and education.',
            ],
            remember: 'Biology is important because living organisms are part of our daily lives.',
          },
          {
            type: 'example',
            title: 'Biology in Everyday Life',
            problem:
              'A farmer notices that a crop is being damaged by insects. Which branch of biology can help investigate the relationship between the insects, crops and environment?',
            solution: [
              'The problem involves living organisms interacting with their environment.',
              'Ecology studies relationships between organisms and their environment.',
              'Therefore, ecology can help investigate this situation.',
            ],
          },
          {
            type: 'practice',
            title: 'Check Your Understanding',
            question: 'What is biology?',
            options: [
              'The study of rocks',
              'The scientific study of life',
              'The study of weather only',
              'The study of machines',
            ],
            correctAnswer: 'The scientific study of life',
            feedback: {
              correct: 'Excellent! Biology is the scientific study of life.',
              incorrect: 'Not quite. Biology is the scientific study of life.',
            },
          },
          {
            type: 'summary',
            title: 'Lesson Summary',
            points: [
              'Biology is the scientific study of life.',
              'Biologists study organisms from cells and molecules to ecosystems.',
              'Biology has many branches, including botany, zoology, ecology and genetics.',
              'Biology is important in health, agriculture, environment and technology.',
            ],
          },
        ],
      },
    ],
  },

  characteristicsOfLivingThings: {
    title: 'Characteristics of Living Things',
    description:
      'Learn the major characteristics that distinguish living organisms from non-living things.',
    lessons: [
      {
        id: 'biology-characteristics-living-things',
        title: 'Characteristics of Living Things',
        course: 'Biology',
        topic: 'Characteristics of Living Things',
        description:
          'Explore the characteristics shared by living organisms, including movement, respiration, sensitivity, growth, reproduction, excretion and nutrition.',
        icon: '🌱',

        objectives: [
          'List the main characteristics of living organisms.',
          'Explain why nutrition is necessary for life.',
          'Explain respiration as a life process.',
          'Describe growth and reproduction.',
          'Explain sensitivity and response to stimuli.',
          'Distinguish living things from non-living things.',
        ],

        sections: [
          {
            type: 'introduction',
            title: 'How Do We Know Something Is Alive?',
            content: [
              'Living organisms perform a number of life processes that distinguish them from non-living things.',
              'A plant, animal, bacterium or human carries out several processes necessary for maintaining life.',
              'A useful way to remember the traditional school-level characteristics is MRS GREN: Movement, Respiration, Sensitivity, Growth, Reproduction, Excretion and Nutrition.',
            ],
            remember: 'MRS GREN is a useful memory aid for the main characteristics of living organisms.',
          },
          {
            type: 'concept',
            title: 'Movement',
            content: [
              'Movement is a change in position or movement of parts of an organism.',
              'Animals can move from one place to another using muscles or other structures.',
              'Plants do not usually move from place to place, but parts of plants can move or grow in response to environmental conditions.',
            ],
            remember: 'Movement occurs in living organisms, even when the whole organism does not change location.',
          },
          {
            type: 'concept',
            title: 'Respiration',
            content: [
              'Respiration is the chemical process through which cells release usable energy from food.',
              'Aerobic respiration commonly uses oxygen to release energy from glucose.',
              'The energy released is used for processes such as movement, growth, repair and active transport.',
            ],
            formula: 'Glucose + Oxygen → Carbon dioxide + Water + Energy',
            remember: 'Respiration releases energy that cells can use.',
          },
          {
            type: 'concept',
            title: 'Sensitivity',
            content: [
              'Sensitivity is the ability of an organism to detect and respond to changes in its environment.',
              'A change in the environment that causes a response is called a stimulus.',
              'Examples include a person withdrawing a hand from a hot object and a plant growing toward light.',
            ],
            remember: 'Stimulus → detection → response.',
          },
          {
            type: 'concept',
            title: 'Growth',
            content: [
              'Growth is a permanent increase in size and dry mass of an organism.',
              'In animals, growth is associated with an increase in cell number and cell size.',
              'Plants continue growing in particular regions throughout much of their lives.',
            ],
            remember: 'Growth is a permanent increase in size or dry mass.',
          },
          {
            type: 'concept',
            title: 'Reproduction',
            content: [
              'Reproduction is the process by which organisms produce new individuals of their own kind.',
              'Reproduction may be sexual or asexual.',
              'Reproduction allows species to continue from one generation to the next.',
            ],
            remember: 'Reproduction ensures the continuation of a species.',
          },
          {
            type: 'concept',
            title: 'Excretion',
            content: [
              'Excretion is the removal of metabolic waste products from an organism.',
              'Humans remove carbon dioxide through the lungs and nitrogenous wastes such as urea mainly through the kidneys.',
              'Excretion is different from egestion, which is the removal of undigested food from the digestive tract.',
            ],
            remember: 'Excretion removes metabolic waste produced by cells.',
          },
          {
            type: 'concept',
            title: 'Nutrition',
            content: [
              'Nutrition is the taking in and use of nutrients needed for energy, growth, repair and normal functioning.',
              'Green plants make their own organic food through photosynthesis.',
              'Animals obtain nutrients by consuming plants, animals or other organic material.',
            ],
            remember: 'Nutrition provides organisms with materials and energy needed for life.',
          },
          {
            type: 'example',
            title: 'Living or Non-Living?',
            problem: 'A seed appears dry and inactive. Is it living or non-living?',
            solution: [
              'A dry seed may appear inactive, but it contains a living embryo.',
              'When suitable conditions are provided, the seed can germinate and grow.',
              'Therefore, a viable seed is a living structure even when its visible activity is very low.',
            ],
          },
          {
            type: 'practice',
            title: 'Check Your Understanding',
            question: 'Which process removes metabolic waste products from an organism?',
            options: ['Nutrition', 'Growth', 'Excretion', 'Reproduction'],
            correctAnswer: 'Excretion',
            feedback: {
              correct: 'Correct! Excretion removes metabolic waste products.',
              incorrect: 'Try again. The removal of metabolic waste is called excretion.',
            },
          },
          {
            type: 'summary',
            title: 'Lesson Summary',
            points: [
              'Living organisms carry out characteristic life processes.',
              'MRS GREN is a useful memory aid: Movement, Respiration, Sensitivity, Growth, Reproduction, Excretion and Nutrition.',
              'Respiration releases usable energy.',
              'Sensitivity allows organisms to detect and respond to stimuli.',
              'Reproduction allows organisms to produce new individuals.',
              'Excretion removes metabolic waste.',
              'Nutrition provides materials and energy needed for life.',
            ],
          },
        ],
      },
    ],
  },

  cellStructureAndFunctions: {
    title: 'Cell Structure and Functions',
    description:
      'Study the cell as the basic unit of life and learn the structures found in plant and animal cells.',
    lessons: [
      {
        id: 'biology-cell-structure-functions',
        title: 'Cell Structure and Functions',
        course: 'Biology',
        topic: 'Cell Structure and Functions',
        description:
          'Learn the main structures of cells and understand how each structure contributes to cell function.',
        icon: '🧫',

        objectives: [
          'Define a cell.',
          'Identify major cell structures.',
          'State the functions of major cell structures.',
          'Distinguish between plant and animal cell structures.',
          'Explain why cells are considered the basic units of life.',
        ],

        sections: [
          {
            type: 'introduction',
            title: 'The Cell',
            content: [
              'A cell is the basic structural and functional unit of living organisms.',
              'Some organisms consist of a single cell, while multicellular organisms contain many cells that work together.',
              'Cells contain structures that carry out specialized functions necessary for life.',
            ],
            remember: 'The cell is the basic unit of structure and function in living organisms.',
          },
          {
            type: 'concept',
            title: 'Animal Cell',
            content: [
              'An animal cell has a cell membrane, cytoplasm, nucleus, mitochondria, ribosomes and other structures.',
              'The cell membrane controls movement of substances into and out of the cell.',
              'The nucleus contains genetic material and helps control cell activities.',
              'Mitochondria are major sites of aerobic respiration.',
            ],
            remember: 'Animal cells have a flexible cell membrane and do not normally have a cell wall or chloroplasts.',
          },
          {
            type: 'concept',
            title: 'Plant Cell',
            content: [
              'Plant cells contain structures found in animal cells as well as a cellulose cell wall, chloroplasts and usually a large permanent vacuole.',
              'The cell wall provides support and helps maintain the shape of the cell.',
              'Chloroplasts contain chlorophyll and are the site of photosynthesis.',
              'The large vacuole contains cell sap and helps maintain pressure inside the cell.',
            ],
            remember: 'Plant cells have a cellulose cell wall, chloroplasts and a large permanent vacuole.',
          },
          {
            type: 'concept',
            title: 'Cell Structures and Their Functions',
            content: [
              'Cell membrane — controls movement of substances into and out of the cell.',
              'Cytoplasm — where many chemical reactions occur.',
              'Nucleus — contains genetic material and controls many cell activities.',
              'Mitochondria — site of most aerobic respiration.',
              'Ribosomes — involved in protein synthesis.',
              'Cell wall — supports plant cells and helps maintain their shape.',
              'Chloroplasts — contain chlorophyll and carry out photosynthesis.',
              'Vacuole — contains cell sap and helps maintain turgor in plant cells.',
            ],
            remember: 'Cell structures work together to keep the cell alive and functioning.',
          },
          {
            type: 'concept',
            title: 'Cell Structure Table',
            content: [
              'The following table summarizes important structures:',
              'Structure | Main function',
              'Cell membrane | Controls movement of substances',
              'Cytoplasm | Site of many chemical reactions',
              'Nucleus | Contains genetic material and controls activities',
              'Mitochondria | Aerobic respiration',
              'Ribosomes | Protein synthesis',
              'Cell wall | Support in plant cells',
              'Chloroplast | Photosynthesis',
              'Vacuole | Contains cell sap and supports plant cells',
            ],
            remember: 'Structure is related to function: each cell component has a particular role.',
          },
          {
            type: 'example',
            title: 'Why Do Plant Cells Have Chloroplasts?',
            problem: 'Why are chloroplasts important in green plant cells?',
            solution: [
              'Chloroplasts contain chlorophyll.',
              'Chlorophyll absorbs light energy.',
              'The absorbed light energy is used during photosynthesis to help produce glucose.',
              'Therefore, chloroplasts are important for photosynthesis.',
            ],
          },
          {
            type: 'practice',
            title: 'Check Your Understanding',
            question: 'Which cell structure controls most cell activities and contains genetic material?',
            options: ['Cell wall', 'Nucleus', 'Vacuole', 'Chloroplast'],
            correctAnswer: 'Nucleus',
            feedback: {
              correct: 'Correct! The nucleus contains genetic material and helps control cell activities.',
              incorrect: 'Try again. The nucleus contains genetic material and helps control cell activities.',
            },
          },
          {
            type: 'summary',
            title: 'Lesson Summary',
            points: [
              'Cells are the basic structural and functional units of living organisms.',
              'Animal and plant cells contain several structures in common.',
              'The nucleus contains genetic material.',
              'Mitochondria are important sites of aerobic respiration.',
              'Plant cells have a cell wall, chloroplasts and a large permanent vacuole.',
              'Each cell structure has a specific function.',
            ],
          },
        ],
      },
    ],
  },

  plantAndAnimalCells: {
    title: 'Differences Between Plant and Animal Cells',
    description:
      'Compare plant and animal cells and understand how their structures are adapted to their functions.',
    lessons: [
      {
        id: 'biology-plant-animal-cells',
        title: 'Differences Between Plant and Animal Cells',
        course: 'Biology',
        topic: 'Differences Between Plant and Animal Cells',
        description:
          'Compare the structures of plant and animal cells and identify similarities and differences.',
        icon: '🌿',

        objectives: [
          'Identify structures common to plant and animal cells.',
          'Identify structures mainly associated with plant cells.',
          'Compare plant and animal cells.',
          'Explain the functions of the main differences.',
          'Interpret a simple cell comparison table.',
        ],

        sections: [
          {
            type: 'introduction',
            title: 'Plant Cells and Animal Cells',
            content: [
              'Plant and animal cells are both eukaryotic cells and share many structures.',
              'However, plant cells have some additional structures that support photosynthesis and provide strength.',
              'Understanding these differences helps us connect cell structure with cell function.',
            ],
            remember: 'Plant and animal cells share many structures but differ in several important features.',
          },
          {
            type: 'concept',
            title: 'Structures Common to Both',
            content: [
              'Both plant and animal cells have a cell membrane, cytoplasm, nucleus, mitochondria and ribosomes.',
              'These structures perform important functions needed by both types of cells.',
            ],
            remember: 'Both plant and animal cells have a nucleus, cytoplasm, cell membrane, mitochondria and ribosomes.',
          },
          {
            type: 'concept',
            title: 'Structures More Characteristic of Plant Cells',
            content: [
              'Plant cells have a cellulose cell wall outside the cell membrane.',
              'Plant cells may contain chloroplasts, especially photosynthetic cells.',
              'Plant cells commonly have a large permanent vacuole containing cell sap.',
              'These structures help plants maintain shape, carry out photosynthesis and regulate water balance.',
            ],
            remember: 'Cell wall + chloroplasts + large permanent vacuole are key plant-cell features.',
          },
          {
            type: 'concept',
            title: 'Plant Cell vs Animal Cell',
            content: [
              'Feature | Plant Cell | Animal Cell',
              'Cell wall | Present | Absent',
              'Chloroplasts | Present in photosynthetic cells | Absent',
              'Large permanent vacuole | Usually present | Usually absent',
              'Cell membrane | Present | Present',
              'Nucleus | Present | Present',
              'Cytoplasm | Present | Present',
              'Mitochondria | Present | Present',
              'Ribosomes | Present | Present',
            ],
            remember: 'The main differences are the cell wall, chloroplasts and large permanent vacuole.',
          },
          {
            type: 'concept',
            title: 'Simple Drawing Guide',
            content: [
              'Plant cell drawing: draw a rectangular or box-like outer cell wall, a cell membrane just inside it, cytoplasm, a large central vacuole, nucleus, chloroplasts and mitochondria.',
              'Animal cell drawing: draw a rounded cell membrane, cytoplasm, nucleus and mitochondria.',
              'Always label structures clearly and use straight label lines that do not cross each other.',
            ],
            remember: 'A biological drawing should be large, clear, labelled and simple.',
          },
          {
            type: 'example',
            title: 'Identifying a Cell',
            problem:
              'A microscope image shows a cell with a cell wall, chloroplasts and a large vacuole. Is it more likely to be a plant cell or an animal cell?',
            solution: [
              'A cell wall is characteristic of plant cells.',
              'Chloroplasts are found in photosynthetic plant cells.',
              'A large permanent vacuole is also characteristic of many plant cells.',
              'Therefore, the cell is a plant cell.',
            ],
          },
          {
            type: 'practice',
            title: 'Check Your Understanding',
            question: 'Which structure is found in a typical plant cell but not in an animal cell?',
            options: ['Nucleus', 'Mitochondrion', 'Cell wall', 'Cell membrane'],
            correctAnswer: 'Cell wall',
            feedback: {
              correct: 'Correct! Plant cells have a cellulose cell wall.',
              incorrect: 'Try again. The cell wall is a characteristic plant-cell structure.',
            },
          },
          {
            type: 'summary',
            title: 'Lesson Summary',
            points: [
              'Plant and animal cells share many structures.',
              'Plant cells have a cellulose cell wall.',
              'Photosynthetic plant cells contain chloroplasts.',
              'Plant cells commonly contain a large permanent vacuole.',
              'Animal cells do not have a cell wall or chloroplasts.',
              'Cell structure is related to the functions performed by the cell.',
            ],
          },
        ],
      },
    ],
  },

  levelsOfOrganization: {
    title: 'Levels of Organization in Living Things',
    description:
      'Explore how cells combine to form tissues, organs and organ systems, and how organisms are organized within ecosystems.',
    lessons: [
      {
        id: 'biology-levels-organization',
        title: 'Levels of Organization in Living Things',
        course: 'Biology',
        topic: 'Levels of Organization in Living Things',
        description:
          'Learn how living things are organized from cells to organisms and from populations to the biosphere.',
        icon: '🧬',

        objectives: [
          'Define cell, tissue, organ and organ system.',
          'Explain how cells form tissues.',
          'Explain how tissues form organs.',
          'Explain how organs work together in organ systems.',
          'Describe organism, population, community and ecosystem.',
          'Arrange biological levels of organization in order.',
        ],

        sections: [
          {
            type: 'introduction',
            title: 'Biological Organization',
            content: [
              'Living things are organized into levels of increasing complexity.',
              'In a multicellular organism, specialized cells work together to form tissues, tissues form organs, and organs work together in organ systems.',
              'At larger ecological levels, organisms form populations and communities that interact within ecosystems.',
            ],
            remember: 'Living organization can be studied from microscopic structures to the entire biosphere.',
          },
          {
            type: 'concept',
            title: 'Cell',
            content: [
              'A cell is the basic structural and functional unit of life.',
              'Examples include muscle cells, nerve cells, red blood cells and plant cells.',
              'Some organisms, such as many bacteria, consist of a single cell.',
            ],
            remember: 'Cell → basic unit of life.',
          },
          {
            type: 'concept',
            title: 'Tissue',
            content: [
              'A tissue is a group of similar or related cells working together to perform a particular function.',
              'Examples in animals include muscle tissue and nervous tissue.',
              'Examples in plants include xylem tissue and phloem tissue.',
            ],
            remember: 'Similar cells working together form a tissue.',
          },
          {
            type: 'concept',
            title: 'Organ',
            content: [
              'An organ is a structure made from different tissues working together to perform one or more functions.',
              'Examples in humans include the heart, stomach, lungs and brain.',
              'Plant organs include roots, stems and leaves.',
            ],
            remember: 'Different tissues work together to form organs.',
          },
          {
            type: 'concept',
            title: 'Organ System',
            content: [
              'An organ system is a group of organs that work together to perform major functions in an organism.',
              'For example, the human digestive system includes organs such as the mouth, stomach and intestines.',
              'The organs cooperate to digest food and absorb nutrients.',
            ],
            remember: 'Organs working together form an organ system.',
          },
          {
            type: 'concept',
            title: 'Organism',
            content: [
              'An organism is an individual living thing.',
              'A human, dog, maize plant and bacterium can each be considered an organism.',
              'In multicellular organisms, cells, tissues, organs and organ systems work together to maintain life.',
            ],
            remember: 'An organism is an individual living thing.',
          },
          {
            type: 'concept',
            title: 'Population, Community and Ecosystem',
            content: [
              'A population is a group of organisms of the same species living in a particular area.',
              'A community consists of different populations living and interacting in the same area.',
              'An ecosystem includes living organisms and the non-living components of their environment.',
              'The biosphere includes all ecosystems on Earth.',
            ],
            remember: 'Population → Community → Ecosystem → Biosphere.',
          },
          {
            type: 'concept',
            title: 'Levels of Organization',
            content: [
              'A simplified sequence is:',
              'Cell → Tissue → Organ → Organ System → Organism → Population → Community → Ecosystem → Biosphere.',
              'At the cellular level, structures become increasingly complex as cells cooperate.',
              'At the ecological level, groups of organisms interact with one another and with their environment.',
            ],
            formula: 'Cell → Tissue → Organ → Organ System → Organism',
            remember: 'Remember the sequence from the smallest biological unit to larger levels of organization.',
          },
          {
            type: 'example',
            title: 'From Cell to Organ System',
            problem:
              'Arrange these structures in the correct order: heart, cardiac muscle cell, circulatory system, cardiac muscle tissue.',
            solution: [
              'A cardiac muscle cell is a single cell.',
              'Many related cardiac muscle cells form cardiac muscle tissue.',
              'Different tissues form the heart, which is an organ.',
              'The heart works with blood vessels as part of the circulatory system.',
              'Therefore: Cell → Tissue → Organ → Organ System.',
            ],
          },
          {
            type: 'practice',
            title: 'Check Your Understanding',
            question: 'What is formed when similar cells work together to perform a particular function?',
            options: ['Tissue', 'Organ', 'Organ system', 'Population'],
            correctAnswer: 'Tissue',
            feedback: {
              correct: 'Correct! A tissue is made of similar or related cells working together.',
              incorrect: 'Try again. Similar or related cells working together form a tissue.',
            },
          },
          {
            type: 'summary',
            title: 'Lesson Summary',
            points: [
              'Cells are the basic units of life.',
              'Groups of similar cells form tissues.',
              'Different tissues form organs.',
              'Organs working together form organ systems.',
              'An organism is an individual living thing.',
              'Populations consist of members of the same species in an area.',
              'Communities contain different populations.',
              'Ecosystems include living organisms and their non-living environment.',
              'The biosphere includes all ecosystems on Earth.',
            ],
          },
        ],
      },
    ],
  },

  nutritionInPlants: {
    title: 'Nutrition in Plants',
    description:
      'Learn how green plants make their own food through photosynthesis and how leaves are adapted for this process.',
    lessons: [
      {
        id: 'biology-nutrition-plants',
        title: 'Nutrition in Plants: Photosynthesis',
        course: 'Biology',
        topic: 'Nutrition in Plants',
        description:
          'Understand the process of photosynthesis, the raw materials and products involved, and how leaf structure suits this function.',
        icon: '🍃',

        objectives: [
          'Define photosynthesis.',
          'State the word equation and raw materials for photosynthesis.',
          'Explain the role of chlorophyll and light.',
          'Describe how leaf structure is adapted for photosynthesis.',
          'Explain factors that affect the rate of photosynthesis.',
        ],

        sections: [
          {
            type: 'introduction',
            title: 'How Do Plants Get Food?',
            content: [
              'Unlike animals, green plants do not need to eat other organisms for food.',
              'Plants make their own organic food using light energy, in a process called photosynthesis.',
              'Photosynthesis takes place mainly in the leaves, where chlorophyll is concentrated.',
            ],
            remember: 'Photosynthesis is the process by which green plants make their own food using light energy.',
          },
          {
            type: 'concept',
            title: 'The Photosynthesis Equation',
            content: [
              'Photosynthesis uses carbon dioxide and water, in the presence of light and chlorophyll, to produce glucose and oxygen.',
              'The light energy absorbed is converted into chemical energy stored in glucose.',
              'Oxygen is released as a by-product and glucose may be used, stored as starch, or converted to other substances.',
            ],
            formula: 'Carbon dioxide + Water --(light, chlorophyll)--> Glucose + Oxygen',
            remember: 'Raw materials: carbon dioxide and water. Products: glucose and oxygen.',
          },
          {
            type: 'concept',
            title: 'Leaf Structure and Adaptation',
            content: [
              'Leaves are typically broad and thin, increasing surface area for light absorption and gas exchange.',
              'The upper epidermis is transparent, allowing light to pass through to the cells beneath.',
              'The palisade mesophyll layer, near the upper surface, contains many chloroplasts and is the main site of photosynthesis.',
              'Stomata, tiny pores mostly on the lower surface, allow carbon dioxide in and oxygen and water vapor out.',
              'A network of veins (vascular bundles) supplies water and removes glucose from the leaf.',
            ],
            remember: 'Leaf structure — broad shape, palisade cells, stomata and veins — suits it for photosynthesis.',
          },
          {
            type: 'concept',
            title: 'Leaf Structure Table',
            content: [
              'Structure | Function',
              'Upper epidermis | Transparent layer that lets light through',
              'Palisade mesophyll | Contains many chloroplasts; main site of photosynthesis',
              'Spongy mesophyll | Air spaces allow gas movement within the leaf',
              'Stomata | Pores for gas exchange, mainly on the lower surface',
              'Guard cells | Control opening and closing of stomata',
              'Veins (vascular bundles) | Transport water in and glucose out',
            ],
            remember: 'Each leaf tissue has a specific role in supporting photosynthesis.',
          },
          {
            type: 'concept',
            title: 'Factors Affecting the Rate of Photosynthesis',
            content: [
              'Light intensity: more light generally increases the rate, up to a point where other factors become limiting.',
              'Carbon dioxide concentration: increasing carbon dioxide can increase the rate, up to a limiting point.',
              'Temperature: photosynthesis increases with temperature up to an optimum, beyond which enzymes are affected and the rate falls.',
              'Any factor that is in short supply and slows the rate of photosynthesis is called a limiting factor.',
            ],
            remember: 'Light, carbon dioxide and temperature are the main factors affecting photosynthesis rate.',
          },
          {
            type: 'illustration',
            title: 'Simple Drawing Guide: Leaf Cross-Section',
            content: [
              'Draw a rectangular block representing a slice through a leaf.',
              'Label from top to bottom: upper epidermis, palisade mesophyll (tall cells with dots for chloroplasts), spongy mesophyll (irregular cells with air spaces), lower epidermis.',
              'Add a pore with two bean-shaped guard cells in the lower epidermis and label it "stoma".',
              'Add a vein (vascular bundle) running through the spongy layer and label it "xylem and phloem".',
            ],
            remember: 'A good biological drawing is large, clear, correctly proportioned and fully labelled.',
          },
          {
            type: 'example',
            title: 'Testing a Leaf for Starch',
            problem: 'How can you show experimentally that a leaf has photosynthesized and produced starch?',
            solution: [
              'Destarch a plant by keeping it in the dark for at least 24 hours so any existing starch is used up.',
              'Expose the plant to light for several hours so photosynthesis can occur.',
              'Decolorize a leaf by boiling it in water and then in ethanol, then rinse it and add iodine solution.',
              'A blue-black color with iodine indicates starch is present, confirming photosynthesis has taken place.',
            ],
          },
          {
            type: 'practice',
            title: 'Check Your Understanding',
            question: 'Which gas is a raw material needed for photosynthesis?',
            options: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Hydrogen'],
            correctAnswer: 'Carbon dioxide',
            feedback: {
              correct: 'Correct! Carbon dioxide and water are the raw materials for photosynthesis.',
              incorrect: 'Try again. Carbon dioxide (with water) is a raw material for photosynthesis.',
            },
          },
          {
            type: 'summary',
            title: 'Lesson Summary',
            points: [
              'Photosynthesis is how green plants make their own food using light energy.',
              'Raw materials are carbon dioxide and water; products are glucose and oxygen.',
              'Chlorophyll in chloroplasts absorbs light energy for photosynthesis.',
              'Leaves are adapted with a broad shape, palisade cells, stomata and veins.',
              'Light, carbon dioxide concentration and temperature affect the rate of photosynthesis.',
            ],
          },
        ],
      },
    ],
  },

  nutritionInHumans: {
    title: 'Nutrition in Humans: The Digestive System',
    description:
      'Learn how humans obtain and process food, the organs of the digestive system, and the roles of enzymes.',
    lessons: [
      {
        id: 'biology-nutrition-humans',
        title: 'Nutrition in Humans: The Digestive System',
        course: 'Biology',
        topic: 'Nutrition in Humans',
        description:
          'Explore the organs of the human digestive system, the process of digestion, and the role of enzymes in breaking down food.',
        icon: '🍽️',

        objectives: [
          'List the main organs of the human digestive system in order.',
          'Explain the function of each digestive organ.',
          'Define digestion, absorption, assimilation and egestion.',
          'Explain the role of digestive enzymes.',
          'Describe a balanced diet and the main classes of food.',
        ],

        sections: [
          {
            type: 'introduction',
            title: 'Why Do Humans Need Digestion?',
            content: [
              'Humans obtain nutrients by eating food, which contains large, complex molecules.',
              'These large molecules must be broken down into smaller, soluble molecules before they can be absorbed into the blood.',
              'This breakdown process is called digestion, and it occurs in the digestive system, a long tube from mouth to anus.',
            ],
            remember: 'Digestion breaks down large food molecules into small, soluble molecules that can be absorbed.',
          },
          {
            type: 'concept',
            title: 'Organs of the Digestive System',
            content: [
              'Mouth: chews food (mechanical digestion) and mixes it with saliva, which contains an enzyme that begins starch digestion.',
              'Esophagus: a muscular tube that pushes food to the stomach by wave-like muscle contractions called peristalsis.',
              'Stomach: churns food and mixes it with acid and enzymes that begin protein digestion.',
              'Small intestine: the main site of digestion and absorption of nutrients into the blood.',
              'Large intestine: absorbs water from undigested food, forming feces.',
              'Rectum and anus: store and remove feces from the body through egestion.',
            ],
            remember: 'Food passes through the mouth, esophagus, stomach, small intestine and large intestine in order.',
          },
          {
            type: 'concept',
            title: 'Digestive Organs Table',
            content: [
              'Organ | Main function',
              'Mouth | Mechanical breakdown and starch digestion begins',
              'Esophagus | Transports food to the stomach by peristalsis',
              'Stomach | Churns food; begins protein digestion; kills some bacteria',
              'Liver | Produces bile, which helps break down fats',
              'Pancreas | Produces enzymes released into the small intestine',
              'Small intestine | Main site of digestion and nutrient absorption',
              'Large intestine | Absorbs water; forms feces',
              'Rectum/Anus | Stores and removes feces (egestion)',
            ],
            remember: 'Each digestive organ has a specific role in breaking down and absorbing food.',
          },
          {
            type: 'concept',
            title: 'Enzymes in Digestion',
            content: [
              'Enzymes are biological catalysts that speed up chemical reactions, including the breakdown of food.',
              'Amylase enzymes break down starch into sugars.',
              'Protease enzymes break down proteins into amino acids.',
              'Lipase enzymes break down fats into fatty acids and glycerol.',
              'Each enzyme works best at a particular temperature and pH.',
            ],
            remember: 'Amylase digests starch, protease digests protein, and lipase digests fat.',
          },
          {
            type: 'concept',
            title: 'Key Terms: Digestion, Absorption, Assimilation, Egestion',
            content: [
              'Digestion is the breakdown of large food molecules into smaller, soluble molecules.',
              'Absorption is the movement of digested food molecules from the small intestine into the blood.',
              'Assimilation is the use of absorbed nutrients by body cells, for example to build new proteins.',
              'Egestion is the removal of undigested food material (feces) from the body through the anus.',
            ],
            remember: 'Digestion → Absorption → Assimilation, with Egestion removing what is not digested.',
          },
          {
            type: 'concept',
            title: 'A Balanced Diet',
            content: [
              'Carbohydrates provide energy and are found in foods such as rice, bread and potatoes.',
              'Proteins are needed for growth and repair of body tissues, found in foods such as beans, meat and fish.',
              'Fats provide concentrated energy and help absorb certain vitamins.',
              'Vitamins and minerals are needed in small amounts for normal body functions.',
              'Fiber aids movement of food through the intestines, and water is essential for all body processes.',
              'A balanced diet contains appropriate amounts of all these nutrients.',
            ],
            remember: 'A balanced diet includes carbohydrates, proteins, fats, vitamins, minerals, fiber and water.',
          },
          {
            type: 'illustration',
            title: 'Simple Drawing Guide: The Digestive System',
            content: [
              'Draw a simple outline of the human body.',
              'Draw a tube starting at the mouth, curving down through a straight esophagus into a J-shaped stomach.',
              'Continue the tube as a long, coiled small intestine, then a wider large intestine framing it, ending at the rectum and anus.',
              'Label the liver and pancreas as separate organs connected to the small intestine by ducts.',
            ],
            remember: 'Label each organ clearly and show the correct order food travels through the system.',
          },
          {
            type: 'example',
            title: 'Tracing a Meal',
            problem: 'Describe, in order, what happens to a piece of bread from the moment it is eaten.',
            solution: [
              'In the mouth, the bread is chewed and mixed with saliva, and amylase begins breaking down starch.',
              'It travels down the esophagus by peristalsis into the stomach, where it is churned and mixed with acid.',
              'It passes into the small intestine, where enzymes from the pancreas and intestine complete digestion, and digested nutrients are absorbed into the blood.',
              'Any undigested material passes into the large intestine, where water is absorbed, and is eventually egested as feces.',
            ],
          },
          {
            type: 'practice',
            title: 'Check Your Understanding',
            question: 'Which organ is mainly responsible for the absorption of digested food into the blood?',
            options: ['Stomach', 'Esophagus', 'Small intestine', 'Large intestine'],
            correctAnswer: 'Small intestine',
            feedback: {
              correct: 'Correct! The small intestine is the main site of digestion and absorption.',
              incorrect: 'Try again. The small intestine absorbs most digested nutrients into the blood.',
            },
          },
          {
            type: 'summary',
            title: 'Lesson Summary',
            points: [
              'The digestive system breaks down food into small, soluble molecules.',
              'Main organs include the mouth, esophagus, stomach, small intestine and large intestine.',
              'Enzymes such as amylase, protease and lipase speed up digestion of specific nutrients.',
              'Digestion, absorption, assimilation and egestion are distinct stages of processing food.',
              'A balanced diet provides carbohydrates, proteins, fats, vitamins, minerals, fiber and water.',
            ],
          },
        ],
      },
    ],
  },

  respirationInDepth: {
    title: 'Respiration in Living Things',
    description:
      'Study aerobic and anaerobic respiration, gas exchange, and the human breathing system in depth.',
    lessons: [
      {
        id: 'biology-respiration-depth',
        title: 'Respiration and the Human Breathing System',
        course: 'Biology',
        topic: 'Respiration in Living Things',
        description:
          'Compare aerobic and anaerobic respiration, learn the structures involved in human breathing, and explore gas exchange.',
        icon: '🫁',

        objectives: [
          'Distinguish between breathing and respiration.',
          'Compare aerobic and anaerobic respiration.',
          'Identify the organs of the human breathing system.',
          'Explain gas exchange in the alveoli.',
          'Explain the mechanism of breathing (inhalation and exhalation).',
        ],

        sections: [
          {
            type: 'introduction',
            title: 'Breathing vs Respiration',
            content: [
              'Breathing is the physical movement of air into and out of the lungs.',
              'Respiration is the chemical process, occurring in cells, that releases energy from food.',
              'Breathing supplies the oxygen used in aerobic respiration and removes the carbon dioxide it produces.',
            ],
            remember: 'Breathing is a physical process; respiration is a chemical process inside cells.',
          },
          {
            type: 'concept',
            title: 'Aerobic Respiration',
            content: [
              'Aerobic respiration uses oxygen to release a large amount of energy from glucose.',
              'It occurs mainly in the mitochondria of cells.',
              'The products are carbon dioxide and water, along with energy that cells can use.',
            ],
            formula: 'Glucose + Oxygen → Carbon dioxide + Water + Energy (large amount)',
            remember: 'Aerobic respiration needs oxygen and releases a large amount of energy.',
          },
          {
            type: 'concept',
            title: 'Anaerobic Respiration',
            content: [
              'Anaerobic respiration releases energy from glucose without using oxygen.',
              'In humans, anaerobic respiration in muscle cells produces lactic acid and only a small amount of energy.',
              'In yeast, anaerobic respiration (fermentation) produces ethanol and carbon dioxide.',
              'Anaerobic respiration releases much less energy than aerobic respiration from the same amount of glucose.',
            ],
            formula: 'Glucose → Lactic acid + Energy (small amount) [in muscle cells]',
            remember: 'Anaerobic respiration does not need oxygen but releases far less energy than aerobic respiration.',
          },
          {
            type: 'concept',
            title: 'Comparing Aerobic and Anaerobic Respiration',
            content: [
              'Feature | Aerobic Respiration | Anaerobic Respiration',
              'Oxygen needed | Yes | No',
              'Energy released | Large amount | Small amount',
              'Products (humans) | Carbon dioxide, water | Lactic acid',
              'Products (yeast) | Carbon dioxide, water | Ethanol, carbon dioxide',
              'Location | Mitochondria | Cytoplasm',
            ],
            remember: 'Aerobic respiration is far more efficient at releasing energy than anaerobic respiration.',
          },
          {
            type: 'concept',
            title: 'The Human Breathing System',
            content: [
              'Air enters through the nose or mouth, passing through the trachea (windpipe).',
              'The trachea branches into two bronchi, one leading to each lung.',
              'Bronchi branch further into smaller bronchioles, ending in tiny air sacs called alveoli.',
              'Alveoli are surrounded by a network of blood capillaries, where gas exchange occurs.',
              'The rib cage and diaphragm work together to move air into and out of the lungs.',
            ],
            remember: 'Trachea → Bronchi → Bronchioles → Alveoli, where gas exchange takes place.',
          },
          {
            type: 'concept',
            title: 'Gas Exchange at the Alveoli',
            content: [
              'Alveoli have thin walls, a large surface area, and a moist lining, which suit them for efficient gas exchange.',
              'Oxygen diffuses from the air in the alveoli into the blood in the surrounding capillaries.',
              'Carbon dioxide diffuses from the blood into the alveoli, to be breathed out.',
              'Gas exchange occurs by diffusion, from an area of higher concentration to an area of lower concentration.',
            ],
            remember: 'Alveoli are adapted for gas exchange: thin walls, large surface area, good blood supply, moist lining.',
          },
          {
            type: 'concept',
            title: 'Mechanism of Breathing',
            content: [
              'Inhalation: the diaphragm contracts and flattens, the rib cage moves up and out, increasing chest volume and drawing air in.',
              'Exhalation: the diaphragm relaxes and moves up, the rib cage moves down and in, decreasing chest volume and pushing air out.',
              'These volume changes create pressure differences that cause air to move into or out of the lungs.',
            ],
            remember: 'Breathing in increases chest volume; breathing out decreases chest volume.',
          },
          {
            type: 'illustration',
            title: 'Simple Drawing Guide: Alveolus and Capillary',
            content: [
              'Draw a small grape-like cluster of thin-walled sacs to represent alveoli.',
              'Wrap a thin tube (capillary) closely around one alveolus.',
              'Draw arrows showing oxygen moving from inside the alveolus into the capillary, and carbon dioxide moving the opposite way.',
              'Label: alveolus wall (one cell thick), capillary wall, oxygen, carbon dioxide.',
            ],
            remember: 'Show diffusion direction clearly with arrows pointing the correct way for each gas.',
          },
          {
            type: 'example',
            title: 'Why Do Muscles Feel Sore After Intense Exercise?',
            problem: 'During a sprint, why might a person\'s muscles start to ache?',
            solution: [
              'During intense exercise, the body cannot supply oxygen to muscles fast enough for aerobic respiration alone.',
              'Muscle cells switch to anaerobic respiration to keep producing energy.',
              'Anaerobic respiration in muscles produces lactic acid, which builds up and contributes to muscle fatigue and soreness.',
              'After exercise, oxygen is used to help break down the accumulated lactic acid.',
            ],
          },
          {
            type: 'practice',
            title: 'Check Your Understanding',
            question: 'What is the product of anaerobic respiration in human muscle cells?',
            options: ['Ethanol', 'Lactic acid', 'Oxygen', 'Starch'],
            correctAnswer: 'Lactic acid',
            feedback: {
              correct: 'Correct! Anaerobic respiration in muscles produces lactic acid.',
              incorrect: 'Try again. In human muscles, anaerobic respiration produces lactic acid.',
            },
          },
          {
            type: 'summary',
            title: 'Lesson Summary',
            points: [
              'Breathing moves air; respiration is the chemical release of energy in cells.',
              'Aerobic respiration uses oxygen and releases a large amount of energy.',
              'Anaerobic respiration does not use oxygen and releases much less energy.',
              'Air passes through the trachea, bronchi, bronchioles, and into the alveoli.',
              'Alveoli are adapted for efficient gas exchange by diffusion.',
              'Breathing movements are caused by the diaphragm and rib cage changing chest volume.',
            ],
          },
        ],
      },
    ],
  },

  transportInHumans: {
    title: 'Transport in Humans: The Circulatory System',
    description:
      'Learn how blood, the heart and blood vessels transport substances around the human body.',
    lessons: [
      {
        id: 'biology-transport-humans',
        title: 'Transport in Humans: The Circulatory System',
        course: 'Biology',
        topic: 'Transport in Humans',
        description:
          'Explore the structure of the heart, blood vessels, blood composition, and how substances are transported around the body.',
        icon: '❤️',

        objectives: [
          'Explain why humans need a transport system.',
          'Describe the structure and function of the heart.',
          'Distinguish between arteries, veins and capillaries.',
          'Describe the components of blood and their functions.',
          'Explain the double circulation system in humans.',
        ],

        sections: [
          {
            type: 'introduction',
            title: 'Why Do Humans Need a Transport System?',
            content: [
              'Humans are large, multicellular organisms, so diffusion alone is too slow to supply all cells with what they need.',
              'A circulatory system transports oxygen, nutrients, hormones and waste products throughout the body.',
              'The main components of the human circulatory system are the heart, blood vessels and blood.',
            ],
            remember: 'Large organisms need a circulatory system because diffusion alone is too slow over long distances.',
          },
          {
            type: 'concept',
            title: 'The Heart',
            content: [
              'The heart is a muscular organ that pumps blood around the body.',
              'It has four chambers: two upper atria and two lower ventricles.',
              'The right side of the heart pumps deoxygenated blood to the lungs, and the left side pumps oxygenated blood to the body.',
              'Valves in the heart prevent the backflow of blood, ensuring it flows in one direction.',
            ],
            remember: 'The heart has four chambers and valves that keep blood flowing in one direction.',
          },
          {
            type: 'concept',
            title: 'Blood Vessels',
            content: [
              'Arteries carry blood away from the heart, usually oxygenated blood, under high pressure, and have thick, elastic walls.',
              'Veins carry blood toward the heart, usually deoxygenated blood, under lower pressure, and contain valves to prevent backflow.',
              'Capillaries are tiny vessels with walls one cell thick, allowing exchange of substances between blood and body cells.',
            ],
            remember: 'Arteries carry blood away from the heart; veins carry blood to the heart; capillaries allow exchange.',
          },
          {
            type: 'concept',
            title: 'Blood Vessel Comparison Table',
            content: [
              'Feature | Artery | Vein | Capillary',
              'Direction of blood flow | Away from heart | Toward heart | Between arteries and veins',
              'Wall thickness | Thick, muscular | Thinner | One cell thick',
              'Blood pressure | High | Low | Very low',
              'Valves | Usually absent | Present | Absent',
              'Main function | Transport blood quickly | Return blood to heart | Exchange of substances',
            ],
            remember: 'Wall thickness and valves relate directly to blood pressure and direction of flow.',
          },
          {
            type: 'concept',
            title: 'Composition of Blood',
            content: [
              'Plasma is the liquid part of blood that transports dissolved substances such as nutrients, hormones and waste.',
              'Red blood cells contain hemoglobin, which binds oxygen and transports it around the body.',
              'White blood cells help defend the body against disease-causing organisms.',
              'Platelets are cell fragments involved in blood clotting at wound sites.',
            ],
            remember: 'Blood = Plasma + Red blood cells + White blood cells + Platelets.',
          },
          {
            type: 'concept',
            title: 'Double Circulation',
            content: [
              'In humans, blood passes through the heart twice during one complete circuit of the body.',
              'Pulmonary circulation carries deoxygenated blood from the heart to the lungs and returns oxygenated blood to the heart.',
              'Systemic circulation carries oxygenated blood from the heart to the rest of the body and returns deoxygenated blood to the heart.',
              'Double circulation allows blood to be pumped at higher pressure for more efficient delivery of oxygen to body tissues.',
            ],
            remember: 'Double circulation = pulmonary circulation (heart-lungs) + systemic circulation (heart-body).',
          },
          {
            type: 'illustration',
            title: 'Simple Drawing Guide: The Heart',
            content: [
              'Draw a rounded, heart-shaped outline divided into four chambers by a central wall (septum).',
              'Label the top two chambers as the left and right atria, and the bottom two as the left and right ventricles.',
              'Draw large vessels entering and leaving the top of the heart and label major ones (e.g., vessel to lungs, vessel to body).',
              'Use arrows to show blood entering the atria and leaving through the ventricles.',
            ],
            remember: 'Remember: the "left" and "right" of the heart are from the perspective of the person, so they appear reversed in a front-facing diagram.',
          },
          {
            type: 'example',
            title: 'Identifying a Blood Vessel',
            problem: 'A blood vessel has a thick, muscular wall and carries blood under high pressure away from the heart. What type of vessel is it?',
            solution: [
              'Vessels carrying blood away from the heart under high pressure are arteries.',
              'Arteries have thick, muscular, elastic walls to withstand this high pressure.',
              'Therefore, this is an artery.',
            ],
          },
          {
            type: 'practice',
            title: 'Check Your Understanding',
            question: 'Which blood component transports oxygen around the body?',
            options: ['Plasma', 'Red blood cells', 'White blood cells', 'Platelets'],
            correctAnswer: 'Red blood cells',
            feedback: {
              correct: 'Correct! Red blood cells contain hemoglobin, which binds and transports oxygen.',
              incorrect: 'Try again. Red blood cells, containing hemoglobin, transport oxygen.',
            },
          },
          {
            type: 'summary',
            title: 'Lesson Summary',
            points: [
              'The circulatory system transports oxygen, nutrients and waste around the body.',
              'The heart has four chambers and valves that maintain one-way blood flow.',
              'Arteries carry blood away from the heart; veins return it; capillaries allow exchange.',
              'Blood consists of plasma, red blood cells, white blood cells and platelets.',
              'Humans have a double circulation: pulmonary and systemic.',
            ],
          },
        ],
      },
    ],
  },

  transportInPlants: {
    title: 'Transport in Plants',
    description:
      'Learn how water, minerals and food substances are transported through plants via xylem and phloem.',
    lessons: [
      {
        id: 'biology-transport-plants',
        title: 'Transport in Plants: Xylem, Phloem and Transpiration',
        course: 'Biology',
        topic: 'Transport in Plants',
        description:
          'Understand how xylem and phloem transport substances in plants, and explore the process of transpiration.',
        icon: '🌾',

        objectives: [
          'Distinguish between xylem and phloem tissue.',
          'Explain the pathway of water from root to leaf.',
          'Define transpiration and explain its importance.',
          'Identify factors affecting the rate of transpiration.',
          'Explain translocation of food substances in plants.',
        ],

        sections: [
          {
            type: 'introduction',
            title: 'Why Do Plants Need a Transport System?',
            content: [
              'Plants absorb water and minerals from the soil through their roots, but need these substances throughout the whole plant, including leaves that may be far away.',
              'Plants also produce food (glucose) in their leaves through photosynthesis, but need to transport this food to other parts, such as roots and growing shoots.',
              'Two specialized tissues, xylem and phloem, carry out this transport.',
            ],
            remember: 'Xylem transports water and minerals; phloem transports food substances.',
          },
          {
            type: 'concept',
            title: 'Xylem Tissue',
            content: [
              'Xylem is made of dead, hollow, tube-like cells with thickened walls that transport water and dissolved minerals.',
              'Water moves in one direction only: from the roots, up the stem, to the leaves.',
              'The movement of water through xylem, from roots to leaves, is called the transpiration stream.',
            ],
            remember: 'Xylem carries water and minerals upward, from roots to leaves, in one direction.',
          },
          {
            type: 'concept',
            title: 'Phloem Tissue',
            content: [
              'Phloem is made of living cells that transport dissolved food substances, mainly sugars, made during photosynthesis.',
              'Unlike xylem, phloem can transport substances in more than one direction, depending on where food is being made or used.',
              'The movement of food substances through phloem is called translocation.',
            ],
            remember: 'Phloem carries food substances (mainly sugars) and can transport in more than one direction.',
          },
          {
            type: 'concept',
            title: 'Xylem vs Phloem',
            content: [
              'Feature | Xylem | Phloem',
              'Cells | Dead, hollow tubes | Living cells',
              'Transports | Water and minerals | Food (sugars)',
              'Direction | One way: roots to leaves | Both ways, as needed',
              'Process name | Transpiration stream | Translocation',
            ],
            remember: 'Xylem = water up; Phloem = food, either direction.',
          },
          {
            type: 'concept',
            title: 'Transpiration',
            content: [
              'Transpiration is the loss of water vapor from the surface of a plant, mainly through the stomata in leaves.',
              'As water evaporates from leaf cells, it creates a "pull" that draws more water up through the xylem from the roots.',
              'Transpiration helps plants take up water and minerals, and also has a cooling effect on the plant.',
            ],
            remember: 'Transpiration is water loss from leaves that helps pull water up the plant through the xylem.',
          },
          {
            type: 'concept',
            title: 'Factors Affecting the Rate of Transpiration',
            content: [
              'Light intensity: more light usually causes stomata to open wider, increasing transpiration.',
              'Temperature: higher temperature increases the rate of evaporation and transpiration.',
              'Humidity: higher humidity in the air reduces the rate of transpiration.',
              'Wind (air movement): more wind removes water vapor from around the leaf faster, increasing transpiration.',
            ],
            remember: 'Transpiration increases with light, temperature and wind, but decreases with high humidity.',
          },
          {
            type: 'illustration',
            title: 'Simple Drawing Guide: Water Pathway in a Plant',
            content: [
              'Draw a simple plant outline with roots, a stem and a leaf.',
              'Draw a dotted or arrowed line beginning at root hairs, moving up through the stem (xylem), and ending at the leaf.',
              'At the leaf, draw small arrows exiting through a stoma to represent water vapor leaving as transpiration.',
              'Label: root hairs, xylem, stoma, transpiration.',
            ],
            remember: 'Show the one-way direction of water movement clearly with arrows.',
          },
          {
            type: 'example',
            title: 'Explaining Wilting',
            problem: 'On a hot, dry, windy day, a plant\'s leaves droop and appear wilted. Explain why.',
            solution: [
              'Hot, dry and windy conditions all increase the rate of transpiration.',
              'If water loss through transpiration is faster than water uptake by the roots, the plant cells lose turgor (internal water pressure).',
              'Without enough turgor, plant cells and tissues lose their rigidity, causing the leaves and stem to droop, or wilt.',
            ],
          },
          {
            type: 'practice',
            title: 'Check Your Understanding',
            question: 'Which tissue is responsible for transporting water and minerals in a plant?',
            options: ['Phloem', 'Xylem', 'Epidermis', 'Cortex'],
            correctAnswer: 'Xylem',
            feedback: {
              correct: 'Correct! Xylem transports water and minerals from roots to leaves.',
              incorrect: 'Try again. Xylem is the tissue responsible for water and mineral transport.',
            },
          },
          {
            type: 'summary',
            title: 'Lesson Summary',
            points: [
              'Plants need transport systems to move water, minerals and food throughout their bodies.',
              'Xylem transports water and minerals upward, from roots to leaves.',
              'Phloem transports food substances (translocation) in more than one direction.',
              'Transpiration is the loss of water vapor from leaves, which helps draw water up the plant.',
              'Light, temperature, humidity and wind all affect the rate of transpiration.',
            ],
          },
        ],
      },
    ],
  },

  excretionInHumans: {
    title: 'Excretion in Humans',
    description:
      'Learn how the human body removes metabolic waste, focusing on the role of the kidneys, skin and lungs.',
    lessons: [
      {
        id: 'biology-excretion-humans',
        title: 'Excretion in Humans: The Urinary System',
        course: 'Biology',
        topic: 'Excretion in Humans',
        description:
          'Explore the structure of the kidney, the process of urine formation, and other organs involved in excretion.',
        icon: '💧',

        objectives: [
          'Define excretion and distinguish it from egestion.',
          'Identify the main organs of excretion in humans.',
          'Describe the structure and function of the kidney.',
          'Explain the process of urine formation, in outline.',
          'Explain the roles of the skin and lungs in excretion.',
        ],

        sections: [
          {
            type: 'introduction',
            title: 'What Is Excretion?',
            content: [
              'Excretion is the removal from the body of waste products made by the body\'s own metabolism.',
              'This is different from egestion, which is the removal of undigested food (feces) that was never absorbed into the body.',
              'The main excretory organs in humans are the kidneys, skin and lungs.',
            ],
            remember: 'Excretion removes metabolic waste; egestion removes undigested food.',
          },
          {
            type: 'concept',
            title: 'The Kidneys',
            content: [
              'The kidneys are a pair of bean-shaped organs that filter blood and remove waste products, especially urea.',
              'Urea is a nitrogenous waste product formed in the liver from the breakdown of excess amino acids.',
              'The kidneys also help regulate the water and salt balance of the blood.',
              'Filtered waste, along with excess water and salts, leaves the kidneys as urine.',
            ],
            remember: 'Kidneys filter blood, removing urea and excess water and salts, forming urine.',
          },
          {
            type: 'concept',
            title: 'Urine Formation (Outline)',
            content: [
              'Blood enters the kidney under pressure and is filtered in tiny structures called nephrons.',
              'Filtration removes small molecules, including water, salts, urea and glucose, from the blood into the nephron tubule.',
              'Useful substances, such as glucose and most of the water and salts the body needs, are reabsorbed back into the blood.',
              'What remains, mainly water, urea and excess salts, becomes urine, which passes to the bladder for storage.',
            ],
            remember: 'Filtration removes many substances from blood; reabsorption returns useful ones; urine is what remains.',
          },
          {
            type: 'concept',
            title: 'The Urinary System Pathway',
            content: [
              'Kidneys: filter blood and produce urine.',
              'Ureters: tubes that carry urine from the kidneys to the bladder.',
              'Bladder: a muscular sac that stores urine until it is convenient to release it.',
              'Urethra: the tube through which urine leaves the body.',
            ],
            remember: 'Kidneys → Ureters → Bladder → Urethra.',
          },
          {
            type: 'concept',
            title: 'Other Excretory Organs',
            content: [
              'The skin excretes excess water and some salts as sweat, and also helps regulate body temperature.',
              'The lungs excrete carbon dioxide and some water vapor, produced as waste products of respiration, during exhalation.',
            ],
            remember: 'Skin excretes sweat (water and salts); lungs excrete carbon dioxide and water vapor.',
          },
          {
            type: 'illustration',
            title: 'Simple Drawing Guide: The Urinary System',
            content: [
              'Draw two bean-shaped kidneys, one on each side, near the top of the abdomen.',
              'Draw a thin tube (ureter) from each kidney leading down to a single, rounded bladder.',
              'Draw a single tube (urethra) from the bladder leading out of the body.',
              'Label each structure: kidney, ureter, bladder, urethra.',
            ],
            remember: 'Show the correct connections: two kidneys, two ureters, one bladder, one urethra.',
          },
          {
            type: 'example',
            title: 'Where Does Urea Come From?',
            problem: 'Explain why urea is produced in the body and how it is removed.',
            solution: [
              'The body cannot store excess amino acids, so the liver breaks them down in a process called deamination.',
              'This process produces urea as a waste product.',
              'Urea is transported in the blood to the kidneys, where it is filtered out and excreted from the body as part of urine.',
            ],
          },
          {
            type: 'practice',
            title: 'Check Your Understanding',
            question: 'Which organ mainly filters blood and produces urine?',
            options: ['Liver', 'Kidney', 'Bladder', 'Skin'],
            correctAnswer: 'Kidney',
            feedback: {
              correct: 'Correct! The kidney filters blood and produces urine.',
              incorrect: 'Try again. The kidney is the organ that filters blood and produces urine.',
            },
          },
          {
            type: 'summary',
            title: 'Lesson Summary',
            points: [
              'Excretion removes metabolic waste products; it differs from egestion.',
              'The kidneys filter blood, removing urea, excess water and salts to form urine.',
              'Urine travels from the kidneys through the ureters to the bladder, then out through the urethra.',
              'The skin excretes sweat; the lungs excrete carbon dioxide and water vapor.',
            ],
          },
        ],
      },
    ],
  },

  reproductionInPlants: {
    title: 'Reproduction in Plants',
    description:
      'Learn about flower structure, pollination, fertilization and seed dispersal in flowering plants.',
    lessons: [
      {
        id: 'biology-reproduction-plants',
        title: 'Reproduction in Flowering Plants',
        course: 'Biology',
        topic: 'Reproduction in Plants',
        description:
          'Explore the parts of a flower, the process of pollination and fertilization, and methods of seed dispersal.',
        icon: '🌸',

        objectives: [
          'Identify the main parts of a flower.',
          'Distinguish between the male and female parts of a flower.',
          'Define pollination and distinguish self- and cross-pollination.',
          'Explain fertilization in flowering plants.',
          'Describe methods of seed dispersal and their importance.',
        ],

        sections: [
          {
            type: 'introduction',
            title: 'Reproduction in Plants',
            content: [
              'Many flowering plants reproduce sexually, using flowers as their reproductive structures.',
              'A flower typically contains both male and female parts, though some plants have separate male and female flowers.',
              'Sexual reproduction in plants leads to the formation of seeds, which can grow into new plants.',
            ],
            remember: 'Flowers are the reproductive structures of flowering plants.',
          },
          {
            type: 'concept',
            title: 'Parts of a Flower',
            content: [
              'Sepals: usually green, protect the flower bud before it opens.',
              'Petals: often brightly colored, may attract pollinators such as insects.',
              'Stamens (male part): each consists of an anther, which produces pollen, and a filament, which supports the anther.',
              'Carpel/Pistil (female part): consists of the stigma, which receives pollen; the style, a tube connecting stigma to ovary; and the ovary, which contains ovules.',
            ],
            remember: 'Stamens are the male parts; the carpel is the female part of the flower.',
          },
          {
            type: 'concept',
            title: 'Flower Parts Table',
            content: [
              'Part | Type | Function',
              'Sepal | Protective | Protects the flower bud',
              'Petal | Attractive | May attract pollinators',
              'Anther | Male | Produces pollen',
              'Filament | Male | Supports the anther',
              'Stigma | Female | Receives pollen',
              'Style | Female | Connects stigma to ovary',
              'Ovary | Female | Contains ovules; develops into fruit',
              'Ovule | Female | Contains the egg cell; develops into seed after fertilization',
            ],
            remember: 'Male parts produce pollen; female parts receive pollen and contain the ovule.',
          },
          {
            type: 'concept',
            title: 'Pollination',
            content: [
              'Pollination is the transfer of pollen from the anther to the stigma of a flower.',
              'Self-pollination occurs when pollen is transferred to a stigma on the same plant.',
              'Cross-pollination occurs when pollen is transferred to a stigma on a different plant of the same species.',
              'Pollination may be carried out by agents such as insects, wind, water or birds.',
            ],
            remember: 'Self-pollination: same plant. Cross-pollination: different plant, same species.',
          },
          {
            type: 'concept',
            title: 'Fertilization and Seed Formation',
            content: [
              'After pollination, the pollen grain grows a pollen tube down through the style to the ovary.',
              'A male sex cell travels down the pollen tube to fuse with the female egg cell inside the ovule, in a process called fertilization.',
              'After fertilization, the ovule develops into a seed, and the ovary usually develops into a fruit that surrounds the seed(s).',
            ],
            formula: 'Male sex cell + Female egg cell → Fertilized egg → Seed',
            remember: 'Fertilization is the fusion of a male and female sex cell, producing a seed.',
          },
          {
            type: 'concept',
            title: 'Seed Dispersal',
            content: [
              'Seed dispersal is the spreading of seeds away from the parent plant, reducing competition for light, water and nutrients.',
              'Wind dispersal: seeds are often light, or have wing-like or feathery structures, allowing them to be carried by wind.',
              'Animal dispersal: seeds may be eaten and later passed out in feces, or have hooks that attach to animal fur.',
              'Water dispersal: some seeds are light or have structures that allow them to float on water.',
              'Explosive dispersal: some seed pods dry out and split suddenly, flinging seeds away from the plant.',
            ],
            remember: 'Seed dispersal reduces competition between parent plants and their offspring.',
          },
          {
            type: 'illustration',
            title: 'Simple Drawing Guide: A Flower',
            content: [
              'Draw a stem topped with a cup-like base holding several petals arranged around the center.',
              'In the center, draw several thin stalks (filaments) topped with small oval shapes (anthers) — these are the stamens.',
              'Draw one central structure with a rounded top (stigma), a thin tube (style) and a rounded base (ovary) — this is the carpel.',
              'Label each part: sepal, petal, anther, filament, stigma, style, ovary.',
            ],
            remember: 'Position the carpel centrally, surrounded by the stamens, petals and sepals.',
          },
          {
            type: 'example',
            title: 'Wind or Insect Pollination?',
            problem: 'A flower has small, dull-colored petals, no scent, and produces large amounts of light, powdery pollen. Is it likely wind- or insect-pollinated?',
            solution: [
              'Insect-pollinated flowers are usually brightly colored and scented, to attract insects, and produce small amounts of sticky pollen.',
              'This flower has dull, small petals, no scent, and large amounts of light pollen — features that do not attract insects but do suit being carried by wind.',
              'Therefore, this flower is likely wind-pollinated.',
            ],
          },
          {
            type: 'practice',
            title: 'Check Your Understanding',
            question: 'Which part of the flower produces pollen?',
            options: ['Stigma', 'Ovary', 'Anther', 'Sepal'],
            correctAnswer: 'Anther',
            feedback: {
              correct: 'Correct! The anther, part of the stamen, produces pollen.',
              incorrect: 'Try again. The anther is the part of the flower that produces pollen.',
            },
          },
          {
            type: 'summary',
            title: 'Lesson Summary',
            points: [
              'A flower typically has sepals, petals, stamens (male) and a carpel (female).',
              'Pollination is the transfer of pollen from anther to stigma; it can be self- or cross-pollination.',
              'Fertilization is the fusion of a male sex cell and a female egg cell, forming a seed.',
              'The ovary often develops into a fruit that surrounds the seed(s).',
              'Seeds are dispersed by wind, animals, water or explosive mechanisms to reduce competition.',
            ],
          },
        ],
      },
    ],
  },

  reproductionInHumans: {
    title: 'Reproduction in Humans',
    description:
      'Learn about the male and female reproductive systems, fertilization, and the stages of human development before birth.',
    lessons: [
      {
        id: 'biology-reproduction-humans',
        title: 'Human Reproduction and Development',
        course: 'Biology',
        topic: 'Reproduction in Humans',
        description:
          'Explore the structures of the male and female reproductive systems, fertilization, and pregnancy in outline.',
        icon: '👶',

        objectives: [
          'Identify the main parts of the male reproductive system.',
          'Identify the main parts of the female reproductive system.',
          'Explain fertilization in humans.',
          'Describe, in outline, the role of the placenta in pregnancy.',
          'Explain the general purpose of the menstrual cycle.',
        ],

        sections: [
          {
            type: 'introduction',
            title: 'Human Sexual Reproduction',
            content: [
              'Humans reproduce sexually, requiring a male sex cell (sperm) and a female sex cell (egg, or ovum) to combine.',
              'The male and female reproductive systems each contain specialized organs suited to producing sex cells and supporting development of offspring.',
            ],
            remember: 'Human reproduction requires the fusion of a sperm cell and an egg cell.',
          },
          {
            type: 'concept',
            title: 'The Male Reproductive System',
            content: [
              'Testes: produce sperm cells and the hormone testosterone.',
              'Sperm duct: carries sperm from the testes toward the penis.',
              'Prostate gland and other glands: add fluid to sperm, forming semen, which nourishes and helps transport sperm.',
              'Penis: transfers semen into the female reproductive system during sexual intercourse.',
            ],
            remember: 'The testes produce sperm; the penis transfers semen to the female system.',
          },
          {
            type: 'concept',
            title: 'The Female Reproductive System',
            content: [
              'Ovaries: produce egg cells (ova) and hormones such as estrogen and progesterone.',
              'Oviduct (fallopian tube): the tube along which an egg travels from the ovary; fertilization usually occurs here.',
              'Uterus (womb): a muscular organ where a fertilized egg implants and develops during pregnancy.',
              'Vagina: receives semen during intercourse and forms part of the birth canal.',
            ],
            remember: 'The ovaries produce eggs; fertilization usually occurs in the oviduct; the fetus develops in the uterus.',
          },
          {
            type: 'concept',
            title: 'Reproductive Systems Table',
            content: [
              'Male Organ | Function | Female Organ | Function',
              'Testes | Produce sperm | Ovaries | Produce eggs',
              'Sperm duct | Carries sperm | Oviduct | Carries egg; site of fertilization',
              'Penis | Transfers semen | Uterus | Site of fetal development',
              '— | — | Vagina | Receives semen; birth canal',
            ],
            remember: 'Compare male and female organs by their matching roles in reproduction.',
          },
          {
            type: 'concept',
            title: 'Fertilization and Early Development',
            content: [
              'Fertilization occurs when a sperm cell fuses with an egg cell, usually in the oviduct, forming a fertilized egg (zygote).',
              'The fertilized egg divides repeatedly as it travels to the uterus, where it implants into the uterine lining.',
              'Implantation marks the beginning of pregnancy, and the developing offspring is called an embryo, and later a fetus.',
            ],
            formula: 'Sperm + Egg → Fertilized egg (zygote) → Embryo → Fetus',
            remember: 'Fertilization occurs in the oviduct; implantation occurs in the uterus.',
          },
          {
            type: 'concept',
            title: 'The Placenta',
            content: [
              'The placenta is an organ that develops in the uterus during pregnancy, connected to the fetus by the umbilical cord.',
              'It allows the exchange of substances, such as oxygen, nutrients and waste, between the mother\'s blood and the fetus\'s blood, without the two blood supplies mixing directly.',
              'The placenta also produces hormones that help maintain pregnancy.',
            ],
            remember: 'The placenta allows exchange of substances between mother and fetus without mixing their blood.',
          },
          {
            type: 'concept',
            title: 'The Menstrual Cycle (Outline)',
            content: [
              'The menstrual cycle is a roughly monthly cycle of changes in the female reproductive system.',
              'Each cycle, the uterus lining thickens to prepare for a possible pregnancy, and an egg is usually released from an ovary (ovulation).',
              'If the egg is not fertilized, the thickened uterine lining breaks down and is shed, resulting in menstruation (a period).',
              'If fertilization and implantation occur, menstruation does not take place, and the uterine lining is maintained to support the pregnancy.',
            ],
            remember: 'The menstrual cycle prepares the uterus for a possible pregnancy each month.',
          },
          {
            type: 'illustration',
            title: 'Simple Drawing Guide: The Female Reproductive System',
            content: [
              'Draw a triangular uterus shape in the center.',
              'On each side of the top of the uterus, draw a curved tube (oviduct) leading to a small oval (ovary).',
              'Below the uterus, draw a tube leading downward and outward, representing the vagina.',
              'Label: ovary, oviduct, uterus, vagina.',
            ],
            remember: 'A clear, simple diagram should show the connections between ovary, oviduct, uterus and vagina.',
          },
          {
            type: 'example',
            title: 'Where Does Fertilization Occur?',
            problem: 'After sexual intercourse, sperm travel through the female reproductive system. Where does fertilization normally take place?',
            solution: [
              'Sperm travel from the vagina, through the uterus, into the oviducts.',
              'An egg released from the ovary travels down the oviduct.',
              'If a sperm cell meets and fuses with the egg, this normally happens within the oviduct.',
              'Therefore, fertilization normally occurs in the oviduct.',
            ],
          },
          {
            type: 'practice',
            title: 'Check Your Understanding',
            question: 'Where does a fertilized egg normally implant to develop during pregnancy?',
            options: ['Ovary', 'Oviduct', 'Uterus', 'Vagina'],
            correctAnswer: 'Uterus',
            feedback: {
              correct: 'Correct! The fertilized egg implants in the uterus, where it develops.',
              incorrect: 'Try again. The fertilized egg implants and develops in the uterus.',
            },
          },
          {
            type: 'summary',
            title: 'Lesson Summary',
            points: [
              'Human reproduction requires the fusion of sperm and egg cells.',
              'The male system produces and delivers sperm; the female system produces eggs and supports development.',
              'Fertilization normally occurs in the oviduct; implantation occurs in the uterus.',
              'The placenta allows exchange of substances between mother and fetus.',
              'The menstrual cycle prepares the uterus for a possible pregnancy each month.',
            ],
          },
        ],
      },
    ],
  },

  introToGenetics: {
    title: 'Introduction to Heredity and Genetics',
    description:
      'Learn the basics of genes, chromosomes, DNA and how traits are inherited from parents to offspring.',
    lessons: [
      {
        id: 'biology-intro-genetics',
        title: 'Introduction to Heredity and Genetics',
        course: 'Biology',
        topic: 'Heredity and Genetics',
        description:
          'Understand key terms in genetics, including genes, alleles, chromosomes and DNA, and interpret simple monohybrid crosses.',
        icon: '🧬',

        objectives: [
          'Define heredity, gene, allele and chromosome.',
          'Describe the relationship between DNA, genes and chromosomes.',
          'Distinguish between dominant and recessive alleles.',
          'Interpret a simple genetic (monohybrid) cross.',
          'Distinguish between genotype and phenotype.',
        ],

        sections: [
          {
            type: 'introduction',
            title: 'What Is Heredity?',
            content: [
              'Heredity is the passing of characteristics (traits) from parents to their offspring.',
              'Genetics is the branch of biology that studies heredity and variation.',
              'The information for inherited traits is carried on structures called chromosomes, found in the nucleus of cells.',
            ],
            remember: 'Heredity is the passing of traits from parents to offspring, studied in genetics.',
          },
          {
            type: 'concept',
            title: 'DNA, Genes and Chromosomes',
            content: [
              'DNA (deoxyribonucleic acid) is the molecule that carries genetic information in living organisms.',
              'A gene is a section of DNA that carries the instructions for a particular characteristic.',
              'A chromosome is a long, coiled structure made of DNA, containing many genes.',
              'Humans normally have 23 pairs of chromosomes (46 in total) in most body cells.',
            ],
            remember: 'DNA is made of genes; genes are carried on chromosomes.',
          },
          {
            type: 'concept',
            title: 'Alleles: Dominant and Recessive',
            content: [
              'Different versions of the same gene are called alleles.',
              'A dominant allele is one whose effect shows in the phenotype even if only one copy is present.',
              'A recessive allele only shows its effect in the phenotype when two copies are present (no dominant allele is present).',
              'By convention, dominant alleles are often written with an uppercase letter, and recessive alleles with a lowercase letter.',
            ],
            remember: 'Dominant alleles mask recessive alleles when both are present.',
          },
          {
            type: 'concept',
            title: 'Genotype and Phenotype',
            content: [
              'Genotype refers to the genetic makeup of an organism, i.e., the alleles it carries for a trait.',
              'Phenotype refers to the observable characteristics of an organism, resulting from its genotype (and sometimes environment).',
              'An organism with two identical alleles for a gene is called homozygous; one with two different alleles is called heterozygous.',
            ],
            remember: 'Genotype = genetic makeup (alleles); Phenotype = observable trait.',
          },
          {
            type: 'concept',
            title: 'A Simple Monohybrid Cross',
            content: [
              'Consider a gene for flower color where purple (B) is dominant and white (b) is recessive.',
              'Crossing a homozygous purple plant (BB) with a homozygous white plant (bb) produces offspring that are all heterozygous (Bb) and purple, since B is dominant.',
              'If two heterozygous (Bb) plants are crossed, the expected offspring ratio is approximately 3 purple : 1 white (genotypes: 1 BB : 2 Bb : 1 bb).',
            ],
            formula: 'Bb × Bb → 1 BB : 2 Bb : 1 bb (approximately 3 purple : 1 white)',
            remember: 'A cross between two heterozygotes for a simple dominant/recessive trait gives an approximate 3:1 phenotype ratio.',
          },
          {
            type: 'illustration',
            title: 'Simple Drawing Guide: A Punnett Square',
            content: [
              'Draw a 2x2 grid (four boxes).',
              'Write one parent\'s alleles (e.g., B and b) across the top, one letter above each column.',
              'Write the other parent\'s alleles (e.g., B and b) down the left side, one letter beside each row.',
              'Fill in each box with the combination of the row and column allele it corresponds to (e.g., BB, Bb, Bb, bb).',
            ],
            remember: 'A Punnett square shows all possible allele combinations from a genetic cross.',
          },
          {
            type: 'example',
            title: 'Predicting Offspring',
            problem: 'In pea plants, tall (T) is dominant over short (t). A heterozygous tall plant (Tt) is crossed with a short plant (tt). What phenotypes are expected, and in what ratio?',
            solution: [
              'The heterozygous parent (Tt) can pass on either a T or a t allele.',
              'The short parent (tt) can only pass on a t allele.',
              'Possible offspring genotypes are Tt (tall) and tt (short), in an expected ratio of 1:1.',
              'Therefore, about half the offspring are expected to be tall, and half short.',
            ],
          },
          {
            type: 'practice',
            title: 'Check Your Understanding',
            question: 'An organism with two identical alleles for a gene (e.g., BB) is described as:',
            options: ['Heterozygous', 'Homozygous', 'Recessive', 'Phenotype'],
            correctAnswer: 'Homozygous',
            feedback: {
              correct: 'Correct! Two identical alleles for a gene means the organism is homozygous.',
              incorrect: 'Try again. Two identical alleles for a gene is described as homozygous.',
            },
          },
          {
            type: 'summary',
            title: 'Lesson Summary',
            points: [
              'Heredity is the passing of traits from parents to offspring, studied in genetics.',
              'DNA carries genetic information; genes are sections of DNA; genes are carried on chromosomes.',
              'Dominant alleles mask recessive alleles in the phenotype.',
              'Genotype is genetic makeup; phenotype is the observable trait.',
              'A Punnett square can be used to predict the outcomes of simple genetic crosses.',
            ],
          },
        ],
      },
    ],
  },

  ecologyAndEcosystems: {
    title: 'Ecology and Ecosystems',
    description:
      'Learn how organisms interact with each other and their environment through food chains, food webs and energy flow.',
    lessons: [
      {
        id: 'biology-ecology-ecosystems',
        title: 'Ecology: Food Chains, Food Webs and Energy Flow',
        course: 'Biology',
        topic: 'Ecology and Ecosystems',
        description:
          'Explore key ecological terms, food chains and food webs, and how energy flows through an ecosystem.',
        icon: '🌍',

        objectives: [
          'Define ecosystem, habitat, population and community.',
          'Construct and interpret a simple food chain.',
          'Distinguish between producers, consumers and decomposers.',
          'Interpret a food web.',
          'Explain the flow of energy through an ecosystem.',
        ],

        sections: [
          {
            type: 'introduction',
            title: 'What Is Ecology?',
            content: [
              'Ecology is the study of relationships between living organisms and their environment.',
              'An ecosystem includes all the living organisms in an area, along with the non-living components, such as soil, water, air and sunlight.',
              'A habitat is the natural place where an organism lives.',
            ],
            remember: 'Ecology studies how organisms interact with each other and their environment.',
          },
          {
            type: 'concept',
            title: 'Key Ecological Terms',
            content: [
              'Population: all the organisms of one species living in a particular area at a particular time.',
              'Community: all the different populations of organisms living and interacting in a particular area.',
              'Habitat: the specific place where an organism lives within an ecosystem.',
              'Ecosystem: a community of organisms together with the non-living parts of their environment.',
            ],
            remember: 'Population (one species) → Community (many species) → Ecosystem (community + environment).',
          },
          {
            type: 'concept',
            title: 'Producers, Consumers and Decomposers',
            content: [
              'Producers are organisms, usually green plants, that make their own food through photosynthesis.',
              'Consumers are organisms that obtain energy by eating other organisms; they cannot make their own food.',
              'Herbivores are consumers that eat only plants; carnivores eat only animals; omnivores eat both.',
              'Decomposers, such as many bacteria and fungi, break down dead organisms and waste material, releasing nutrients back into the environment.',
            ],
            remember: 'Producers make food; consumers eat other organisms; decomposers break down dead matter.',
          },
          {
            type: 'concept',
            title: 'Food Chains',
            content: [
              'A food chain shows the transfer of energy from one organism to the next, usually starting with a producer.',
              'Each organism in the chain is called a trophic level, and arrows point in the direction of energy flow.',
              'Example: Grass → Grasshopper → Frog → Snake → Hawk.',
            ],
            formula: 'Producer → Primary consumer → Secondary consumer → Tertiary consumer',
            remember: 'Arrows in a food chain point in the direction that energy flows.',
          },
          {
            type: 'concept',
            title: 'Food Webs',
            content: [
              'A food web is a diagram showing how several food chains are linked together in an ecosystem, since most organisms eat more than one kind of food.',
              'Food webs give a more realistic picture of feeding relationships than a single food chain.',
              'If one population in a food web is removed or changes in size, it can affect many other populations connected to it.',
            ],
            remember: 'A food web links multiple food chains, showing more realistic feeding relationships.',
          },
          {
            type: 'concept',
            title: 'Energy Flow Through an Ecosystem',
            content: [
              'Energy enters most ecosystems as sunlight, captured by producers during photosynthesis.',
              'Energy is transferred along a food chain as one organism is eaten by another.',
              'At each stage, a large amount of energy is lost, mainly as heat from respiration, so less energy is available at each successive trophic level.',
              'Because of this energy loss, food chains rarely have more than four or five trophic levels, and there are usually far fewer organisms at higher trophic levels.',
            ],
            remember: 'Energy decreases at each trophic level as it passes along a food chain.',
          },
          {
            type: 'illustration',
            title: 'Simple Drawing Guide: A Food Web',
            content: [
              'Write the names of several organisms (e.g., grass, grasshopper, mouse, frog, snake, hawk) spaced around a page.',
              'Draw arrows from each food source to the organism that eats it, based on realistic feeding relationships.',
              'An organism may have multiple arrows entering it (multiple food sources) and multiple arrows leaving it (multiple predators).',
              'Label the producer(s) clearly, since they form the base of the web.',
            ],
            remember: 'Arrows always point from what is eaten toward what eats it, in the direction energy flows.',
          },
          {
            type: 'example',
            title: 'Interpreting a Food Chain',
            problem: 'In the food chain Grass → Rabbit → Fox, identify the producer and the type of consumer the fox is.',
            solution: [
              'Grass makes its own food through photosynthesis, so grass is the producer.',
              'The rabbit eats grass directly, so the rabbit is the primary consumer.',
              'The fox eats the rabbit (a consumer), so the fox is a secondary consumer.',
            ],
          },
          {
            type: 'practice',
            title: 'Check Your Understanding',
            question: 'In a food chain, what is the original source of energy for most ecosystems?',
            options: ['Soil nutrients', 'Sunlight', 'Water', 'Oxygen'],
            correctAnswer: 'Sunlight',
            feedback: {
              correct: 'Correct! Sunlight is captured by producers and is the original energy source for most ecosystems.',
              incorrect: 'Try again. Sunlight, captured by producers through photosynthesis, is the original energy source.',
            },
          },
          {
            type: 'summary',
            title: 'Lesson Summary',
            points: [
              'Ecology studies relationships between organisms and their environment.',
              'Populations, communities, habitats and ecosystems describe different levels of ecological organization.',
              'Producers make their own food; consumers eat other organisms; decomposers break down dead matter.',
              'Food chains show energy transfer; food webs link multiple food chains together.',
              'Energy decreases at each trophic level as it flows through an ecosystem.',
            ],
          },
        ],
      },
    ],
  },
}

export default biologyLessons