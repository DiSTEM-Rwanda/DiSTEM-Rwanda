const mathematicsLessons = {
  algebra: {
    title: 'Algebra',

    lessons: [
      {
        id: 'mathematics-algebra-expressions',
        topic: 'Algebraic Expressions',
        course: 'Mathematics',
        level: 'Secondary School',

        objectives: [
          'Define an algebraic expression.',
          'Identify variables, constants and coefficients.',
          'Translate simple verbal statements into algebraic expressions.',
          'Evaluate simple algebraic expressions.',
        ],

        sections: [
          {
            type: 'introduction',
            title: 'What is an Algebraic Expression?',
            content: [
              'An algebraic expression is a mathematical phrase made up of numbers, variables and operations such as addition, subtraction, multiplication and division.',
              'For example, 3x + 5 is an algebraic expression. The letter x represents a variable whose value can change.',
            ],
          },

          {
            type: 'concept',
            title: 'Variables, Constants and Coefficients',
            content: [
              'A variable is a letter or symbol used to represent a number whose value may change.',
              'A constant is a number whose value does not change.',
              'A coefficient is the number multiplied by a variable.',
            ],

            remember:
              'In 5x + 3, 5 is the coefficient, x is the variable and 3 is the constant.',
          },

          {
            type: 'concept',
            title: 'Writing Expressions',
            content: [
              'Words can be translated into mathematical expressions.',
              'For example, “a number increased by 7” can be written as x + 7.',
            ],

            formula:
              'Expression = numbers + variables + mathematical operations',
          },

          {
            type: 'example',
            title: 'Worked Example',
            problem:
              'Write an algebraic expression for “three times a number plus 4”.',

            solution: [
              'Let the unknown number be x.',
              'Three times the number = 3x.',
              'Add 4.',
              'Expression = 3x + 4.',
            ],
          },

          {
            type: 'practice',
            title: 'Try It Yourself',
            question:
              'Which expression represents “five more than a number x”?',

            options: [
              '5x',
              'x − 5',
              'x + 5',
              '5 − x',
            ],

            correctAnswer: 'x + 5',

            feedback: {
              correct:
                'Correct! Five more than x is written as x + 5.',
              incorrect:
                'The phrase “five more than x” means add 5 to x.',
            },
          },

          {
            type: 'summary',
            title: 'Lesson Summary',
            points: [
              'An algebraic expression contains numbers, variables and operations.',
              'A variable represents a number that may change.',
              'A constant has a fixed value.',
              'A coefficient multiplies a variable.',
              'Words can be translated into algebraic expressions.',
            ],
          },
        ],
      },

      {
        id: 'mathematics-algebra-like-terms',
        topic: 'Like Terms and Simplification',
        course: 'Mathematics',
        level: 'Secondary School',

        objectives: [
          'Identify like and unlike terms.',
          'Combine like terms.',
          'Simplify simple algebraic expressions.',
          'Explain why unlike terms cannot be combined directly.',
        ],

        sections: [
          {
            type: 'introduction',
            title: 'Simplifying Algebraic Expressions',
            content: [
              'Simplifying an algebraic expression means writing it in an equivalent but simpler form.',
              'Like terms can be combined because they contain the same variables raised to the same powers.',
            ],
          },

          {
            type: 'concept',
            title: 'Like Terms',
            content: [
              'Like terms have the same variable part.',
              'For example, 3x and 5x are like terms, while 3x and 5y are unlike terms.',
            ],

            remember:
              'Only like terms can be combined.',
          },

          {
            type: 'concept',
            title: 'Combining Like Terms',
            content: [
              'To combine like terms, add or subtract their coefficients while keeping the common variable part.',
              'For example, 3x + 2x = 5x.',
            ],

            formula:
              'ax + bx = (a + b)x',
          },

          {
            type: 'example',
            title: 'Worked Example',
            problem:
              'Simplify 4x + 3 + 2x + 5.',

            solution: [
              'Group the x terms: 4x + 2x = 6x.',
              'Group the constants: 3 + 5 = 8.',
              'Therefore, the simplified expression is 6x + 8.',
            ],
          },

          {
            type: 'practice',
            title: 'Try It Yourself',
            question:
              'Simplify 7x + 3x − 2.',

            options: [
              '10x − 2',
              '10x + 2',
              '4x − 2',
              '7x + 1',
            ],

            correctAnswer: '10x − 2',

            feedback: {
              correct:
                'Excellent! 7x + 3x = 10x, so the answer is 10x − 2.',
              incorrect:
                'Combine the like x terms and keep the constant −2.',
            },
          },

          {
            type: 'summary',
            title: 'Lesson Summary',
            points: [
              'Like terms have the same variable part.',
              'Only like terms can be combined.',
              'Combine coefficients while keeping the variable.',
              'Constants can also be combined with constants.',
              'Simplification produces an equivalent expression in a simpler form.',
            ],
          },
        ],
      },

      {
        id: 'mathematics-algebra-linear-equations',
        topic: 'Linear Equations',
        course: 'Mathematics',
        level: 'Secondary School',

        objectives: [
          'Define a linear equation.',
          'Solve simple linear equations.',
          'Use inverse operations to isolate a variable.',
          'Check solutions by substitution.',
        ],

        sections: [
          {
            type: 'introduction',
            title: 'What is a Linear Equation?',
            content: [
              'An equation is a mathematical statement showing that two expressions are equal.',
              'A simple linear equation contains a variable raised to the first power, such as x + 5 = 12.',
            ],
          },

          {
            type: 'concept',
            title: 'Inverse Operations',
            content: [
              'Inverse operations undo each other. Addition and subtraction are inverse operations, while multiplication and division are also inverse operations.',
              'We use inverse operations to isolate the unknown variable.',
            ],

            remember:
              'Whatever operation you perform on one side of an equation, perform the same operation on the other side.',
          },

          {
            type: 'concept',
            title: 'Solving an Equation',
            content: [
              'To solve a linear equation, simplify the equation and isolate the variable.',
              'The final value should make the original equation true when substituted back.',
            ],

            formula:
              'If x + a = b, then x = b − a',
          },

          {
            type: 'example',
            title: 'Worked Example',
            problem:
              'Solve 2x + 4 = 12.',

            solution: [
              'Subtract 4 from both sides.',
              '2x = 8.',
              'Divide both sides by 2.',
              'x = 4.',
              'Check: 2(4) + 4 = 12.',
            ],
          },

          {
            type: 'practice',
            title: 'Try It Yourself',
            question:
              'Solve 3x + 2 = 14.',

            options: [
              '2',
              '3',
              '4',
              '6',
            ],

            correctAnswer: '4',

            feedback: {
              correct:
                'Correct! Subtract 2 to get 3x = 12, then divide by 3 to get x = 4.',
              incorrect:
                'First subtract 2 from both sides, then divide by 3.',
            },
          },

          {
            type: 'summary',
            title: 'Lesson Summary',
            points: [
              'An equation states that two expressions are equal.',
              'A linear equation has the variable to the first power.',
              'Inverse operations help isolate the variable.',
              'The same operation must be applied to both sides.',
              'Solutions should be checked by substitution.',
            ],
          },
        ],
      },

      {
        id: 'mathematics-algebra-inequalities',
        topic: 'Inequalities',
        course: 'Mathematics',
        level: 'Secondary School',

        objectives: [
          'Understand inequality symbols.',
          'Solve simple linear inequalities.',
          'Represent inequality solutions on a number line.',
          'Explain how multiplying or dividing by a negative affects the inequality sign.',
        ],

        sections: [
          {
            type: 'introduction',
            title: 'Understanding Inequalities',
            content: [
              'An inequality compares two quantities that are not necessarily equal.',
              'Common inequality symbols are greater than (>), less than (<), greater than or equal to (≥), and less than or equal to (≤).',
            ],
          },

          {
            type: 'concept',
            title: 'Inequality Symbols',
            content: [
              'The symbol > means greater than, while < means less than.',
              'The symbols ≥ and ≤ include equality as well as the comparison.',
            ],

            remember:
              'The wider side of the inequality symbol points toward the larger value.',
          },

          {
            type: 'concept',
            title: 'Solving Inequalities',
            content: [
              'Simple inequalities can be solved using the same basic operations used for equations.',
              'However, when multiplying or dividing both sides by a negative number, the inequality sign must be reversed.',
            ],

            formula:
              'If a < b, then −a > −b',
          },

          {
            type: 'example',
            title: 'Worked Example',
            problem:
              'Solve x + 3 > 7.',

            solution: [
              'Subtract 3 from both sides.',
              'x > 4.',
              'Therefore, any number greater than 4 is a solution.',
            ],
          },

          {
            type: 'practice',
            title: 'Try It Yourself',
            question:
              'Solve 2x < 10.',

            options: [
              'x < 2',
              'x < 5',
              'x > 5',
              'x > 10',
            ],

            correctAnswer: 'x < 5',

            feedback: {
              correct:
                'Correct! Divide both sides by 2 to obtain x < 5.',
              incorrect:
                'Divide both sides by 2. Since 2 is positive, the inequality sign stays the same.',
            },
          },

          {
            type: 'summary',
            title: 'Lesson Summary',
            points: [
              'Inequalities compare quantities.',
              'Common symbols include <, >, ≤ and ≥.',
              'Simple inequalities can be solved using inverse operations.',
              'The inequality sign reverses when multiplying or dividing by a negative number.',
              'Solutions can be represented on a number line.',
            ],
          },
        ],
      },

      {
        id: 'mathematics-algebra-problem-solving',
        topic: 'Algebraic Problem Solving',
        course: 'Mathematics',
        level: 'Secondary School',

        objectives: [
          'Translate word problems into algebraic expressions or equations.',
          'Identify the unknown quantity in a problem.',
          'Solve simple algebraic word problems.',
          'Check whether a solution makes sense in context.',
        ],

        sections: [
          {
            type: 'introduction',
            title: 'Using Algebra to Solve Problems',
            content: [
              'Algebra provides a powerful way to represent unknown quantities and solve real-life problems.',
              'The first step is to identify what is unknown and represent it with a variable.',
            ],
          },

          {
            type: 'concept',
            title: 'Building an Equation',
            content: [
              'Words in a problem can be converted into mathematical relationships.',
              'For example, “a number plus 8 equals 20” can be represented by x + 8 = 20.',
            ],

            remember:
              'Identify the unknown first, then translate the relationships in the problem into an equation.',
          },

          {
            type: 'example',
            title: 'Worked Example',
            problem:
              'A number increased by 7 is equal to 19. Find the number.',

            solution: [
              'Let the number be x.',
              'The equation is x + 7 = 19.',
              'Subtract 7 from both sides.',
              'x = 12.',
              'Therefore, the number is 12.',
            ],
          },

          {
            type: 'practice',
            title: 'Try It Yourself',
            question:
              'A number multiplied by 4 is 28. What is the number?',

            options: [
              '5',
              '6',
              '7',
              '8',
            ],

            correctAnswer: '7',

            feedback: {
              correct:
                'Correct! Let x be the number: 4x = 28, so x = 7.',
              incorrect:
                'Represent the problem as 4x = 28 and divide by 4.',
            },
          },

          {
            type: 'summary',
            title: 'Lesson Summary',
            points: [
              'Algebra can represent unknown quantities.',
              'Variables are useful for describing relationships.',
              'Word problems can be translated into equations.',
              'Solve the equation using appropriate operations.',
              'Always check that the answer makes sense in context.',
            ],
          },
        ],
      },
    ],
  },geometry: {
  title: 'Geometry',

  lessons: [
    {
      id: 'mathematics-geometry-angles',
      topic: 'Angles and Their Properties',
      course: 'Mathematics',
      level: 'Secondary School',

      objectives: [
        'Define and identify common types of angles.',
        'Use angle properties to find unknown angles.',
        'Understand complementary and supplementary angles.',
        'Apply basic angle relationships in geometric problems.',
      ],

      sections: [
        {
          type: 'introduction',
          title: 'Understanding Angles',
          content: [
            'An angle is formed when two lines or rays meet at a common endpoint called the vertex.',
            'Angles are measured in degrees (°) and are used to describe turns and relationships between lines.',
          ],
        },

        {
          type: 'concept',
          title: 'Types of Angles',
          content: [
            'An acute angle is less than 90°, a right angle is exactly 90°, and an obtuse angle is greater than 90° but less than 180°.',
            'A straight angle is 180°, while a reflex angle is greater than 180° but less than 360°.',
          ],
          remember:
            'Acute < 90°, right = 90°, obtuse is between 90° and 180°, and straight = 180°.',
        },

        {
          type: 'concept',
          title: 'Complementary and Supplementary Angles',
          content: [
            'Two angles are complementary when their measures add up to 90°.',
            'Two angles are supplementary when their measures add up to 180°.',
          ],
          formula:
            'Complementary angles: a + b = 90°\nSupplementary angles: a + b = 180°',
        },

        {
          type: 'example',
          title: 'Worked Example',
          problem:
            'One angle is 65°. Find its complement.',

          solution: [
            'Complementary angles add up to 90°.',
            'Unknown angle = 90° − 65°.',
            'Unknown angle = 25°.',
          ],
        },

        {
          type: 'practice',
          title: 'Try It Yourself',
          question:
            'Two angles are supplementary. One angle is 120°. What is the other angle?',

          options: [
            '30°',
            '45°',
            '60°',
            '90°',
          ],

          correctAnswer: '60°',

          feedback: {
            correct:
              'Correct! Supplementary angles add up to 180°, so 180° − 120° = 60°.',
            incorrect:
              'Remember that supplementary angles have a total of 180°.',
          },
        },

        {
          type: 'summary',
          title: 'Lesson Summary',
          points: [
            'Angles are measured in degrees.',
            'Acute angles are less than 90°.',
            'A right angle is 90°.',
            'Complementary angles add to 90°.',
            'Supplementary angles add to 180°.',
          ],
        },
      ],
    },

    {
      id: 'mathematics-geometry-triangles',
      topic: 'Triangles',
      course: 'Mathematics',
      level: 'Secondary School',

      objectives: [
        'Identify different types of triangles.',
        'State important properties of triangles.',
        'Use the angle sum of a triangle.',
        'Solve simple triangle problems.',
      ],

      sections: [
        {
          type: 'introduction',
          title: 'What is a Triangle?',
          content: [
            'A triangle is a polygon with three sides and three angles.',
            'Triangles are classified according to their side lengths or angle sizes.',
          ],
        },

        {
          type: 'concept',
          title: 'Types of Triangles',
          content: [
            'An equilateral triangle has three equal sides and three equal angles.',
            'An isosceles triangle has two equal sides and two equal angles.',
            'A scalene triangle has three different side lengths and a right-angled triangle contains one 90° angle.',
          ],
          remember:
            'The interior angles of every triangle add up to 180°.',
        },

        {
          type: 'concept',
          title: 'Angle Sum of a Triangle',
          content: [
            'The three interior angles of every triangle have a total measure of 180°.',
            'This property allows us to find an unknown angle when the other two angles are known.',
          ],
          formula:
            'Angle 1 + Angle 2 + Angle 3 = 180°',
        },

        {
          type: 'example',
          title: 'Worked Example',
          problem:
            'A triangle has angles of 50° and 60°. Find the third angle.',

          solution: [
            'The angles of a triangle add to 180°.',
            'Third angle = 180° − 50° − 60°.',
            'Third angle = 70°.',
          ],
        },

        {
          type: 'practice',
          title: 'Try It Yourself',
          question:
            'A triangle has angles 35° and 65°. What is the third angle?',

          options: [
            '70°',
            '80°',
            '90°',
            '100°',
          ],

          correctAnswer: '80°',

          feedback: {
            correct:
              'Excellent! 180° − 35° − 65° = 80°.',
            incorrect:
              'Use the fact that the angles in a triangle add up to 180°.',
          },
        },

        {
          type: 'summary',
          title: 'Lesson Summary',
          points: [
            'A triangle has three sides and three interior angles.',
            'Triangles can be classified by sides or angles.',
            'The interior angles of a triangle add up to 180°.',
            'Equilateral triangles have three equal sides and angles.',
            'The triangle angle-sum property helps find unknown angles.',
          ],
        },
      ],
    },

    {
      id: 'mathematics-geometry-quadrilaterals',
      topic: 'Quadrilaterals',
      course: 'Mathematics',
      level: 'Secondary School',

      objectives: [
        'Define a quadrilateral.',
        'Identify common types of quadrilaterals.',
        'Describe important properties of quadrilaterals.',
        'Use angle properties to solve simple problems.',
      ],

      sections: [
        {
          type: 'introduction',
          title: 'What is a Quadrilateral?',
          content: [
            'A quadrilateral is a polygon with four sides, four vertices and four interior angles.',
            'Common quadrilaterals include squares, rectangles, parallelograms, rhombuses and trapeziums.',
          ],
        },

        {
          type: 'concept',
          title: 'Common Quadrilaterals',
          content: [
            'A square has four equal sides and four right angles.',
            'A rectangle has opposite sides equal and four right angles.',
            'A parallelogram has two pairs of parallel opposite sides.',
            'A rhombus has four equal sides.',
          ],
          remember:
            'The interior angles of every quadrilateral add up to 360°.',
        },

        {
          type: 'concept',
          title: 'Properties of Quadrilaterals',
          content: [
            'Different quadrilaterals have different combinations of equal sides, parallel sides and equal angles.',
            'Knowing these properties helps us identify shapes and solve geometric problems.',
          ],
          formula:
            'Angle 1 + Angle 2 + Angle 3 + Angle 4 = 360°',
        },

        {
          type: 'example',
          title: 'Worked Example',
          problem:
            'Three angles of a quadrilateral are 80°, 90° and 100°. Find the fourth angle.',

          solution: [
            'The interior angles of a quadrilateral add to 360°.',
            'Fourth angle = 360° − 80° − 90° − 100°.',
            'Fourth angle = 90°.',
          ],
        },

        {
          type: 'practice',
          title: 'Try It Yourself',
          question:
            'What is the sum of the interior angles of a quadrilateral?',

          options: [
            '180°',
            '270°',
            '360°',
            '540°',
          ],

          correctAnswer: '360°',

          feedback: {
            correct:
              'Correct! The interior angles of every quadrilateral add to 360°.',
            incorrect:
              'A quadrilateral has four interior angles whose total is 360°.',
          },
        },

        {
          type: 'summary',
          title: 'Lesson Summary',
          points: [
            'A quadrilateral has four sides.',
            'Common examples include squares, rectangles, parallelograms and rhombuses.',
            'Different quadrilaterals have different geometric properties.',
            'The interior angles of a quadrilateral add up to 360°.',
            'Shape properties can be used to solve geometric problems.',
          ],
        },
      ],
    },

    {
      id: 'mathematics-geometry-perimeter-area',
      topic: 'Perimeter and Area',
      course: 'Mathematics',
      level: 'Secondary School',

      objectives: [
        'Define perimeter and area.',
        'Calculate the perimeter of common shapes.',
        'Calculate the area of rectangles and triangles.',
        'Use appropriate units for perimeter and area.',
      ],

      sections: [
        {
          type: 'introduction',
          title: 'Measuring Shapes',
          content: [
            'Perimeter is the total distance around the boundary of a two-dimensional shape.',
            'Area measures the amount of surface enclosed by the boundary of a shape.',
          ],
        },

        {
          type: 'concept',
          title: 'Perimeter',
          content: [
            'The perimeter of a shape is found by adding the lengths of all its outer sides.',
            'Perimeter is measured in units such as metres or centimetres.',
          ],
          formula:
            'Rectangle perimeter = 2(length + width)',
        },

        {
          type: 'concept',
          title: 'Area',
          content: [
            'Area tells us how much space is enclosed inside a two-dimensional shape.',
            'Area is measured in square units such as m² or cm².',
          ],
          formula:
            'Rectangle area = length × width\nTriangle area = ½ × base × height',
        },

        {
          type: 'example',
          title: 'Worked Example',
          problem:
            'A rectangle is 8 cm long and 5 cm wide. Find its perimeter and area.',

          solution: [
            'Perimeter = 2(8 + 5)',
            'Perimeter = 26 cm',
            'Area = 8 × 5',
            'Area = 40 cm²',
          ],
        },

        {
          type: 'practice',
          title: 'Try It Yourself',
          question:
            'What is the area of a rectangle with length 7 m and width 4 m?',

          options: [
            '11 m²',
            '22 m²',
            '28 m²',
            '44 m²',
          ],

          correctAnswer: '28 m²',

          feedback: {
            correct:
              'Excellent! Area = length × width = 7 × 4 = 28 m².',
            incorrect:
              'For a rectangle, multiply the length by the width.',
          },
        },

        {
          type: 'summary',
          title: 'Lesson Summary',
          points: [
            'Perimeter is the total distance around a shape.',
            'Area is the space enclosed inside a shape.',
            'Rectangle perimeter = 2(length + width).',
            'Rectangle area = length × width.',
            'Area is measured in square units.',
          ],
        },
      ],
    },

    {
      id: 'mathematics-geometry-circles',
      topic: 'Circles',
      course: 'Mathematics',
      level: 'Secondary School',

      objectives: [
        'Identify the main parts of a circle.',
        'Distinguish between radius and diameter.',
        'Calculate the circumference of a circle.',
        'Calculate the area of a circle.',
      ],

      sections: [
        {
          type: 'introduction',
          title: 'Understanding Circles',
          content: [
            'A circle is a set of points that are all the same distance from a fixed point called the centre.',
            'The distance from the centre to the circle is called the radius.',
          ],
        },

        {
          type: 'concept',
          title: 'Radius and Diameter',
          content: [
            'The radius is the distance from the centre of a circle to its edge.',
            'The diameter passes through the centre and connects two points on the circle.',
            'The diameter is twice the radius.',
          ],
          formula:
            'Diameter = 2 × radius',
        },

        {
          type: 'concept',
          title: 'Circumference and Area',
          content: [
            'The circumference is the distance around a circle.',
            'The area is the amount of surface enclosed by the circle.',
            'The value of π is approximately 3.14 or 22/7 for suitable calculations.',
          ],
          formula:
            'Circumference = 2πr\nArea = πr²',
        },

        {
          type: 'example',
          title: 'Worked Example',
          problem:
            'A circle has a radius of 7 cm. Using π = 22/7, calculate its circumference.',

          solution: [
            'Radius = 7 cm',
            'Circumference = 2πr',
            'Circumference = 2 × 22/7 × 7',
            'Circumference = 44 cm',
          ],
        },

        {
          type: 'practice',
          title: 'Try It Yourself',
          question:
            'A circle has a radius of 5 cm. Using π = 3.14, what is its circumference?',

          options: [
            '15.7 cm',
            '31.4 cm',
            '62.8 cm',
            '78.5 cm',
          ],

          correctAnswer: '31.4 cm',

          feedback: {
            correct:
              'Correct! Circumference = 2 × 3.14 × 5 = 31.4 cm.',
            incorrect:
              'Use circumference = 2πr.',
          },
        },

        {
          type: 'summary',
          title: 'Lesson Summary',
          points: [
            'The centre is the fixed point at the middle of a circle.',
            'The radius is the distance from the centre to the circle.',
            'The diameter is twice the radius.',
            'Circumference = 2πr.',
            'Area = πr².',
          ],
        },
      ],
    },
  ],
},statistics: {
  title: 'Statistics',

  lessons: [
    {
      id: 'mathematics-statistics-data',
      topic: 'Collecting and Organizing Data',
      course: 'Mathematics',
      level: 'Secondary School',

      objectives: [
        'Define data and explain why data is collected.',
        'Distinguish between qualitative and quantitative data.',
        'Identify suitable methods of collecting data.',
        'Organize simple data clearly for analysis.',
      ],

      sections: [
        {
          type: 'introduction',
          title: 'What is Data?',
          content: [
            'Data is a collection of facts, measurements, observations or information gathered for a purpose.',
            'Data can be collected to answer questions, identify patterns or support decisions.',
          ],
        },

        {
          type: 'concept',
          title: 'Types of Data',
          content: [
            'Qualitative data describes qualities or categories, such as colour, gender or type of transport.',
            'Quantitative data consists of numerical values that can be counted or measured, such as height, age or number of books.',
          ],
          remember:
            'Qualitative data describes categories, while quantitative data uses numbers.',
        },

        {
          type: 'concept',
          title: 'Collecting Data',
          content: [
            'Data can be collected using methods such as questionnaires, interviews, observations, measurements and surveys.',
            'The method should be appropriate for the question being investigated.',
          ],
          remember:
            'Good data collection begins with a clear question and an appropriate method.',
        },

        {
          type: 'example',
          title: 'Worked Example',
          problem:
            'A teacher wants to find out which type of transport learners use to come to school. What type of data is collected?',

          solution: [
            'The teacher records categories such as walking, bicycle, bus or car.',
            'These are categories rather than numerical measurements.',
            'Therefore, the data is qualitative data.',
          ],
        },

        {
          type: 'practice',
          title: 'Try It Yourself',
          question:
            'Which of the following is quantitative data?',

          options: [
            'Favourite colour',
            'Type of food',
            'Number of siblings',
            'Preferred sport',
          ],

          correctAnswer: 'Number of siblings',

          feedback: {
            correct:
              'Correct! Number of siblings is numerical data, so it is quantitative.',
            incorrect:
              'Look for information that can be represented by a number.',
          },
        },

        {
          type: 'summary',
          title: 'Lesson Summary',
          points: [
            'Data consists of collected facts or information.',
            'Qualitative data describes categories or qualities.',
            'Quantitative data consists of numerical values.',
            'Data can be collected through surveys, observations, interviews and measurements.',
            'A suitable data-collection method should match the purpose of the investigation.',
          ],
        },
      ],
    },

    {
      id: 'mathematics-statistics-frequency',
      topic: 'Tables and Frequency',
      course: 'Mathematics',
      level: 'Secondary School',

      objectives: [
        'Define frequency.',
        'Construct simple frequency tables.',
        'Organize raw data into categories.',
        'Interpret information from a frequency table.',
      ],

      sections: [
        {
          type: 'introduction',
          title: 'Organizing Data',
          content: [
            'Large collections of raw data can be difficult to understand when written as a list.',
            'A frequency table organizes data into categories and shows how many times each value occurs.',
          ],
        },

        {
          type: 'concept',
          title: 'Frequency',
          content: [
            'Frequency is the number of times a particular value or category occurs in a data set.',
            'A frequency table lists the possible values or categories alongside their frequencies.',
          ],
          remember:
            'Frequency tells us how often a value or category occurs.',
        },

        {
          type: 'concept',
          title: 'Constructing a Frequency Table',
          content: [
            'To construct a frequency table, identify the values or categories and count how many times each occurs.',
            'The total of all frequencies should equal the total number of observations.',
          ],
          formula:
            'Total frequency = Number of observations',
        },

        {
          type: 'example',
          title: 'Worked Example',
          problem:
            'The scores are 2, 3, 2, 4, 3, 2, 5. Find the frequency of each score.',

          solution: [
            'Score 2 occurs 3 times.',
            'Score 3 occurs 2 times.',
            'Score 4 occurs 1 time.',
            'Score 5 occurs 1 time.',
            'The total frequency is 7, which matches the number of scores.',
          ],
        },

        {
          type: 'practice',
          title: 'Try It Yourself',
          question:
            'In the data set 1, 2, 2, 3, 2, 4, what is the frequency of 2?',

          options: [
            '1',
            '2',
            '3',
            '4',
          ],

          correctAnswer: '3',

          feedback: {
            correct:
              'Correct! The value 2 occurs three times.',
            incorrect:
              'Count carefully how many times the number 2 appears.',
          },
        },

        {
          type: 'summary',
          title: 'Lesson Summary',
          points: [
            'Frequency is the number of times a value occurs.',
            'Frequency tables organize data clearly.',
            'The total frequency equals the number of observations.',
            'Raw data can be easier to interpret after being organized into a table.',
            'Frequency information can be used to create graphs and calculate statistics.',
          ],
        },
      ],
    },

    {
      id: 'mathematics-statistics-charts',
      topic: 'Bar Charts and Pie Charts',
      course: 'Mathematics',
      level: 'Secondary School',

      objectives: [
        'Identify the main features of a bar chart.',
        'Interpret information from bar charts.',
        'Understand how pie charts represent parts of a whole.',
        'Calculate simple pie-chart angles.',
      ],

      sections: [
        {
          type: 'introduction',
          title: 'Representing Data Visually',
          content: [
            'Graphs and charts make numerical information easier to understand and compare.',
            'Bar charts are useful for comparing categories, while pie charts show how categories make up a whole.',
          ],
        },

        {
          type: 'concept',
          title: 'Bar Charts',
          content: [
            'A bar chart uses rectangular bars to represent the frequencies or values of categories.',
            'The bars should be clearly labelled and separated so that different categories can be compared.',
          ],
          remember:
            'The height or length of a bar represents the value or frequency of a category.',
        },

        {
          type: 'concept',
          title: 'Pie Charts',
          content: [
            'A pie chart is a circle divided into sectors. Each sector represents a proportion of the whole.',
            'Since a full circle is 360°, the angle of a sector can be calculated from the fraction of the total represented by the category.',
          ],
          formula:
            'Sector angle = (Category frequency ÷ Total frequency) × 360°',
        },

        {
          type: 'example',
          title: 'Worked Example',
          problem:
            'A class has 20 learners. Ten learners choose football. What angle should represent football on a pie chart?',

          solution: [
            'Football frequency = 10.',
            'Total frequency = 20.',
            'Sector angle = (10 ÷ 20) × 360°.',
            'Sector angle = 180°.',
          ],
        },

        {
          type: 'practice',
          title: 'Try It Yourself',
          question:
            'A category represents 25% of a data set. What angle should it have in a pie chart?',

          options: [
            '45°',
            '60°',
            '90°',
            '120°',
          ],

          correctAnswer: '90°',

          feedback: {
            correct:
              'Excellent! 25% of 360° is 90°.',
            incorrect:
              'Convert the percentage to a fraction of 360°.',
          },
        },

        {
          type: 'summary',
          title: 'Lesson Summary',
          points: [
            'Charts help us represent data visually.',
            'Bar charts compare values or frequencies between categories.',
            'Pie charts show parts of a whole.',
            'A complete pie chart represents 360°.',
            'Sector angle = frequency ÷ total frequency × 360°.',
          ],
        },
      ],
    },

    {
      id: 'mathematics-statistics-central-tendency',
      topic: 'Mean, Median and Mode',
      course: 'Mathematics',
      level: 'Secondary School',

      objectives: [
        'Define mean, median and mode.',
        'Calculate the mean of a data set.',
        'Find the median of an ordered data set.',
        'Identify the mode of a data set.',
      ],

      sections: [
        {
          type: 'introduction',
          title: 'Measures of Central Tendency',
          content: [
            'Mean, median and mode are measures used to describe the centre or typical value of a data set.',
            'Each measure provides different information about the data.',
          ],
        },

        {
          type: 'concept',
          title: 'Mean',
          content: [
            'The mean is found by adding all the values and dividing by the number of values.',
            'It is sometimes called the arithmetic average.',
          ],
          formula:
            'Mean = Sum of values ÷ Number of values',
        },

        {
          type: 'concept',
          title: 'Median and Mode',
          content: [
            'The median is the middle value when data is arranged in order.',
            'The mode is the value that occurs most frequently.',
          ],
          remember:
            'Always arrange the data in order before finding the median.',
        },

        {
          type: 'example',
          title: 'Worked Example',
          problem:
            'Find the mean, median and mode of 2, 4, 4, 6, 9.',

          solution: [
            'Sum = 2 + 4 + 4 + 6 + 9 = 25.',
            'There are 5 values.',
            'Mean = 25 ÷ 5 = 5.',
            'The middle value is 4, so median = 4.',
            'The most frequent value is 4, so mode = 4.',
          ],
        },

        {
          type: 'practice',
          title: 'Try It Yourself',
          question:
            'What is the mean of 4, 6, 8 and 10?',

          options: [
            '6',
            '7',
            '8',
            '9',
          ],

          correctAnswer: '7',

          feedback: {
            correct:
              'Correct! (4 + 6 + 8 + 10) ÷ 4 = 28 ÷ 4 = 7.',
            incorrect:
              'Add all the values together and divide by the number of values.',
          },
        },

        {
          type: 'summary',
          title: 'Lesson Summary',
          points: [
            'The mean is the sum of values divided by the number of values.',
            'The median is the middle value after ordering the data.',
            'The mode is the most frequently occurring value.',
            'Mean, median and mode are measures of central tendency.',
            'Different measures can be more useful for different data sets.',
          ],
        },
      ],
    },

    {
      id: 'mathematics-statistics-range',
      topic: 'Range and Interpreting Data',
      course: 'Mathematics',
      level: 'Secondary School',

      objectives: [
        'Define the range of a data set.',
        'Calculate the range.',
        'Interpret simple statistical information.',
        'Use range together with measures of central tendency to describe data.',
      ],

      sections: [
        {
          type: 'introduction',
          title: 'Understanding Spread',
          content: [
            'Statistics can describe not only the centre of a data set but also how spread out the values are.',
            'The range is one simple measure of spread.',
          ],
        },

        {
          type: 'concept',
          title: 'Range',
          content: [
            'The range is the difference between the largest value and the smallest value in a data set.',
            'A large range indicates that the values are more widely spread, while a small range indicates that they are closer together.',
          ],
          formula:
            'Range = Maximum value − Minimum value',
        },

        {
          type: 'concept',
          title: 'Interpreting Data',
          content: [
            'When interpreting data, we should look at the centre, spread and overall pattern of the values.',
            'Statistics should be used to support conclusions rather than simply reporting isolated numbers.',
          ],
          remember:
            'A statistical conclusion should be based on the data as a whole.',
        },

        {
          type: 'example',
          title: 'Worked Example',
          problem:
            'Find the range of the data set 5, 8, 11, 6, 14, 9.',

          solution: [
            'Maximum value = 14.',
            'Minimum value = 5.',
            'Range = 14 − 5.',
            'Range = 9.',
          ],
        },

        {
          type: 'practice',
          title: 'Try It Yourself',
          question:
            'What is the range of 3, 7, 10, 5 and 12?',

          options: [
            '7',
            '8',
            '9',
            '10',
          ],

          correctAnswer: '9',

          feedback: {
            correct:
              'Correct! Range = 12 − 3 = 9.',
            incorrect:
              'Find the largest and smallest values, then subtract the smallest from the largest.',
          },
        },

        {
          type: 'summary',
          title: 'Lesson Summary',
          points: [
            'The range is a measure of spread.',
            'Range = maximum value − minimum value.',
            'A larger range indicates greater spread in the data.',
            'Data interpretation should consider both centre and spread.',
            'Statistics can help us make informed conclusions from data.',
          ],
        },
      ],
    },
  ],
},problemSolving: {
  title: 'Problem Solving',

  lessons: [
    {
      id: 'mathematics-problem-solving-reasoning',
      topic: 'Mathematical Reasoning',
      course: 'Mathematics',
      level: 'Secondary School',

      objectives: [
        'Explain what mathematical reasoning means.',
        'Identify relevant information in a mathematical problem.',
        'Use logical steps to justify an answer.',
        'Check whether a conclusion follows from given information.',
      ],

      sections: [
        {
          type: 'introduction',
          title: 'What is Mathematical Reasoning?',
          content: [
            'Mathematical reasoning is the process of using facts, rules and logical steps to reach a valid conclusion.',
            'Good mathematical reasoning helps us explain not only what the answer is, but also why the answer is correct.',
          ],
        },

        {
          type: 'concept',
          title: 'Finding Relevant Information',
          content: [
            'A problem may contain information that is useful and information that is not needed for the calculation.',
            'Before solving a problem, identify what is known, what is unknown and what relationship connects them.',
          ],
          remember:
            'A clear solution begins by identifying the known information and the unknown quantity.',
        },

        {
          type: 'concept',
          title: 'Checking a Conclusion',
          content: [
            'A mathematical answer should be checked to make sure it is reasonable and consistent with the original problem.',
            'Substitution, estimation and reviewing the units are useful ways to check an answer.',
          ],
          remember:
            'Always check whether your answer makes sense in the context of the problem.',
        },

        {
          type: 'example',
          title: 'Worked Example',
          problem:
            'A learner says that 15% of 200 is 25. Determine whether the answer is reasonable.',

          solution: [
            'Calculate 15% of 200.',
            '15% = 15 ÷ 100 = 0.15.',
            '0.15 × 200 = 30.',
            'Therefore, 25 is not correct. The correct answer is 30.',
          ],
        },

        {
          type: 'practice',
          title: 'Try It Yourself',
          question:
            'Which is the best first step when solving a word problem?',

          options: [
            'Guess the answer',
            'Identify the known and unknown information',
            'Multiply all the numbers',
            'Write the final answer immediately',
          ],

          correctAnswer:
            'Identify the known and unknown information',

          feedback: {
            correct:
              'Correct! Identifying the known and unknown information helps you choose an appropriate method.',
            incorrect:
              'Start by understanding what information is given and what you need to find.',
          },
        },

        {
          type: 'summary',
          title: 'Lesson Summary',
          points: [
            'Mathematical reasoning uses logic to reach valid conclusions.',
            'Identify known information and the unknown quantity.',
            'Choose a method that matches the problem.',
            'Explain the steps used to reach the answer.',
            'Always check whether the final answer is reasonable.',
          ],
        },
      ],
    },

    {
      id: 'mathematics-problem-solving-ratio',
      topic: 'Ratios and Proportions',
      course: 'Mathematics',
      level: 'Secondary School',

      objectives: [
        'Define a ratio.',
        'Simplify ratios.',
        'Understand equivalent ratios.',
        'Solve simple proportion problems.',
      ],

      sections: [
        {
          type: 'introduction',
          title: 'Understanding Ratios',
          content: [
            'A ratio compares two or more quantities of the same kind.',
            'Ratios can be written using words, a colon or a fraction.',
          ],
        },

        {
          type: 'concept',
          title: 'Simplifying Ratios',
          content: [
            'A ratio can be simplified by dividing all its parts by their common factor.',
            'The simplified ratio represents the same relationship as the original ratio.',
          ],
          formula:
            'Equivalent ratios are formed by multiplying or dividing all parts by the same non-zero number.',
          remember:
            'Always simplify a ratio to its simplest form when appropriate.',
        },

        {
          type: 'concept',
          title: 'Proportion',
          content: [
            'A proportion states that two ratios are equivalent.',
            'Proportions can be used to find an unknown quantity when two quantities have a constant relationship.',
          ],
          formula:
            'If a/b = c/d, then ad = bc',
        },

        {
          type: 'example',
          title: 'Worked Example',
          problem:
            'Simplify the ratio 12:18.',

          solution: [
            'The greatest common factor of 12 and 18 is 6.',
            'Divide both parts by 6.',
            '12 ÷ 6 : 18 ÷ 6',
            'Simplified ratio = 2:3.',
          ],
        },

        {
          type: 'practice',
          title: 'Try It Yourself',
          question:
            'Simplify the ratio 15:20.',

          options: [
            '2:3',
            '3:4',
            '4:5',
            '5:6',
          ],

          correctAnswer: '3:4',

          feedback: {
            correct:
              'Excellent! Divide both parts by 5 to get 3:4.',
            incorrect:
              'Find the greatest common factor of 15 and 20, then divide both parts by it.',
          },
        },

        {
          type: 'summary',
          title: 'Lesson Summary',
          points: [
            'A ratio compares quantities.',
            'Ratios can be simplified by dividing all parts by a common factor.',
            'Equivalent ratios represent the same relationship.',
            'A proportion states that two ratios are equivalent.',
            'Ratios and proportions are useful in many real-life situations.',
          ],
        },
      ],
    },

    {
      id: 'mathematics-problem-solving-percentages',
      topic: 'Percentages',
      course: 'Mathematics',
      level: 'Secondary School',

      objectives: [
        'Define percentage.',
        'Convert between percentages, decimals and fractions.',
        'Calculate a percentage of a quantity.',
        'Apply percentages to simple real-world problems.',
      ],

      sections: [
        {
          type: 'introduction',
          title: 'Understanding Percentages',
          content: [
            'A percentage is a number expressed as a part out of 100.',
            'Percentages are commonly used to describe discounts, results, changes and proportions.',
          ],
        },

        {
          type: 'concept',
          title: 'Percentage, Fraction and Decimal',
          content: [
            'A percentage can be converted to a decimal by dividing by 100.',
            'A decimal can be converted to a percentage by multiplying by 100.',
          ],
          formula:
            'Percentage = (Part ÷ Whole) × 100%',
        },

        {
          type: 'concept',
          title: 'Finding a Percentage of a Quantity',
          content: [
            'To find a percentage of a quantity, convert the percentage to a decimal or fraction and multiply by the quantity.',
          ],
          formula:
            'Percentage of quantity = Percentage × Quantity',
          remember:
            'Convert the percentage to a decimal or fraction before multiplying when necessary.',
        },

        {
          type: 'example',
          title: 'Worked Example',
          problem:
            'Find 20% of 150.',

          solution: [
            '20% = 20 ÷ 100 = 0.20.',
            '20% of 150 = 0.20 × 150.',
            'Answer = 30.',
          ],
        },

        {
          type: 'practice',
          title: 'Try It Yourself',
          question:
            'What is 15% of 200?',

          options: [
            '20',
            '25',
            '30',
            '35',
          ],

          correctAnswer: '30',

          feedback: {
            correct:
              'Correct! 15% of 200 = 0.15 × 200 = 30.',
            incorrect:
              'Convert 15% to 0.15, then multiply by 200.',
          },
        },

        {
          type: 'summary',
          title: 'Lesson Summary',
          points: [
            'A percentage represents a part out of 100.',
            'Percentages can be converted to decimals and fractions.',
            'To find a percentage of a quantity, multiply by the percentage expressed as a decimal or fraction.',
            'Percentages are widely used in everyday life.',
            'Always check that the percentage calculation is reasonable.',
          ],
        },
      ],
    },

    {
      id: 'mathematics-problem-solving-word-problems',
      topic: 'Word Problems',
      course: 'Mathematics',
      level: 'Secondary School',

      objectives: [
        'Translate words into mathematical operations.',
        'Identify the information needed to solve a problem.',
        'Choose an appropriate mathematical method.',
        'Present a clear solution to a word problem.',
      ],

      sections: [
        {
          type: 'introduction',
          title: 'From Words to Mathematics',
          content: [
            'Word problems describe mathematical situations using ordinary language.',
            'To solve them, we need to identify the quantities involved and translate the information into mathematical operations or equations.',
          ],
        },

        {
          type: 'concept',
          title: 'Key Mathematical Language',
          content: [
            'Words such as total, difference, product, increase and decrease often indicate specific mathematical operations.',
            'For example, “total” often suggests addition, while “difference” suggests subtraction.',
          ],
          remember:
            'Read the problem carefully before deciding which operation to use.',
        },

        {
          type: 'concept',
          title: 'A Problem-Solving Strategy',
          content: [
            'A useful strategy is to understand the problem, plan a method, carry out the calculation and check the answer.',
            'Writing down the known information can make a word problem easier to solve.',
          ],
          formula:
            'Understand → Plan → Solve → Check',
        },

        {
          type: 'example',
          title: 'Worked Example',
          problem:
            'A school buys 6 boxes of exercise books. Each box contains 25 books. How many exercise books are bought altogether?',

          solution: [
            'Number of boxes = 6.',
            'Books per box = 25.',
            'Total books = 6 × 25.',
            'Total books = 150.',
          ],
        },

        {
          type: 'practice',
          title: 'Try It Yourself',
          question:
            'A farmer has 8 baskets with 15 oranges in each basket. How many oranges are there altogether?',

          options: [
            '100',
            '110',
            '120',
            '130',
          ],

          correctAnswer: '120',

          feedback: {
            correct:
              'Excellent! 8 × 15 = 120 oranges.',
            incorrect:
              'There are 8 equal groups of 15 oranges, so multiply 8 by 15.',
          },
        },

        {
          type: 'summary',
          title: 'Lesson Summary',
          points: [
            'Word problems express mathematical relationships using language.',
            'Identify the known and unknown quantities.',
            'Translate the information into appropriate operations or equations.',
            'Solve the problem step by step.',
            'Check that the final answer makes sense in context.',
          ],
        },
      ],
    },

    {
      id: 'mathematics-problem-solving-multistep',
      topic: 'Multi-Step Real-World Problems',
      course: 'Mathematics',
      level: 'Secondary School',

      objectives: [
        'Break a complex problem into smaller steps.',
        'Combine different mathematical operations.',
        'Use formulas and reasoning in real-world situations.',
        'Check and communicate a final answer clearly.',
      ],

      sections: [
        {
          type: 'introduction',
          title: 'Solving Multi-Step Problems',
          content: [
            'Some real-world problems require more than one calculation.',
            'Breaking a complex problem into smaller steps makes it easier to solve accurately.',
          ],
        },

        {
          type: 'concept',
          title: 'Planning Multiple Steps',
          content: [
            'Start by identifying what needs to be found first and determine which later quantities depend on that result.',
            'Write each step clearly and use the result from one step when necessary in the next step.',
          ],
          remember:
            'Do not try to solve every part at once. Break a complex problem into manageable steps.',
        },

        {
          type: 'concept',
          title: 'Checking Units and Reasonableness',
          content: [
            'Units help us check whether calculations are meaningful.',
            'Estimating the expected size of an answer can also help detect errors.',
          ],
          remember:
            'A correct calculation should produce an answer with an appropriate unit and reasonable size.',
        },

        {
          type: 'example',
          title: 'Worked Example',
          problem:
            'A learner buys 3 notebooks at 1,500 RWF each and a pen costing 800 RWF. The learner pays with 10,000 RWF. How much change should the learner receive?',

          solution: [
            'Cost of notebooks = 3 × 1,500 = 4,500 RWF.',
            'Add the pen: 4,500 + 800 = 5,300 RWF.',
            'Money paid = 10,000 RWF.',
            'Change = 10,000 − 5,300.',
            'Change = 4,700 RWF.',
          ],
        },

        {
          type: 'practice',
          title: 'Try It Yourself',
          question:
            'A student buys 4 exercise books at 1,200 RWF each and a ruler costing 600 RWF. If the student pays 6,000 RWF, how much change should they receive?',

          options: [
            '400 RWF',
            '600 RWF',
            '800 RWF',
            '1,000 RWF',
          ],

          correctAnswer: '600 RWF',

          feedback: {
            correct:
              'Excellent! 4 × 1,200 = 4,800 RWF; 4,800 + 600 = 5,400 RWF; 6,000 − 5,400 = 600 RWF.',
            incorrect:
              'First calculate the total cost, then subtract it from the amount paid.',
          },
        },

        {
          type: 'summary',
          title: 'Lesson Summary',
          points: [
            'Multi-step problems require several connected calculations.',
            'Break complex problems into smaller steps.',
            'Use the result of one step when needed in the next step.',
            'Check units and whether the answer is reasonable.',
            'Present the final answer clearly in context.',
          ],
        },
      ],
    },
  ],
},
}

export default mathematicsLessons