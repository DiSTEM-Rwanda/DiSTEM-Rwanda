const physicsLessons = {
  motion: {
    title: 'Motion',
    lessons: [
      {
        id: 'physics-motion-introduction',
        topic: 'Introduction to Linear Motion',
        course: 'Physics',
        level: 'Secondary School',

        objectives: [
          'Define motion and explain what it means for an object to change position.',
          'Identify a suitable reference point when describing motion.',
          'Distinguish between distance and displacement.',
          'Calculate average speed using distance and time.',
        ],

        sections: [
          {
            type: 'introduction',
            title: 'What is Motion?',
            content: [
              'Motion occurs when an object changes its position relative to a reference point over time.',
              'Objects can move in different ways. A car travelling along a straight road, a stone falling vertically and a cyclist moving along a path are examples of objects in motion.',
            ],
          },

          {
            type: 'concept',
            title: 'Reference Point and Position',
            content: [
              'To determine whether an object is moving, we compare its position with a reference point.',
              'A reference point is a fixed location used to describe the position or motion of an object.',
            ],
            remember:
              'Motion is described relative to a reference point.',
          },

          {
            type: 'concept',
            title: 'Distance and Displacement',
            content: [
              'Distance is the total length of the path travelled by an object.',
              'Displacement is the change in position of an object from its initial position to its final position. Displacement has both magnitude and direction.',
            ],
            remember:
              'Distance describes the path travelled, while displacement describes the change in position.',
          },

          {
            type: 'concept',
            title: 'Speed',
            content: [
              'Speed describes how quickly an object covers a distance.',
              'Average speed is calculated by dividing the total distance travelled by the total time taken.',
            ],
            formula:
              'Average speed = Total distance ÷ Total time',
          },

          {
            type: 'example',
            title: 'Worked Example',
            problem:
              'A student walks a distance of 100 metres in 20 seconds. Calculate the student’s average speed.',

            solution: [
              'Total distance = 100 m',
              'Total time = 20 s',
              'Average speed = 100 m ÷ 20 s',
              'Average speed = 5 m/s',
            ],
          },

          {
            type: 'practice',
            title: 'Try It Yourself',
            question:
              'A bicycle travels 200 metres in 40 seconds. What is its average speed?',

            options: [
              '2 m/s',
              '5 m/s',
              '8 m/s',
              '10 m/s',
            ],

            correctAnswer: '5 m/s',

            feedback: {
              correct:
                'Excellent! You correctly applied the speed formula by dividing distance by time.',

              incorrect:
                'Not quite. Think about the relationship between distance, time and speed. Try calculating 200 ÷ 40.',
            },
          },

          {
            type: 'summary',
            title: 'Lesson Summary',
            points: [
              'Motion is a change in position relative to a reference point over time.',
              'A reference point helps us describe the position and motion of an object.',
              'Distance is the total length of the path travelled.',
              'Displacement describes the change from the initial position to the final position.',
              'Average speed is calculated by dividing total distance by total time.',
            ],
          },
        ],
      },

      {
        id: 'physics-motion-distance-displacement',
        topic: 'Distance and Displacement',
        course: 'Physics',
        level: 'Secondary School',

        objectives: [
          'Define distance and displacement.',
          'Distinguish between scalar and vector quantities.',
          'Calculate displacement in simple linear motion.',
          'Explain why distance can be greater than displacement.',
        ],

        sections: [
          {
            type: 'introduction',
            title: 'Distance and Displacement',
            content: [
              'Distance and displacement both describe how an object moves from one place to another, but they do not mean the same thing.',
              'Distance tells us how much ground an object has covered, while displacement describes the overall change in position from the starting point to the ending point.',
            ],
          },

          {
            type: 'concept',
            title: 'Distance',
            content: [
              'Distance is the total length of the path followed by an object.',
              'Distance has magnitude only, so it is a scalar quantity.',
            ],
            remember:
              'Distance is the total path travelled and has no direction.',
          },

          {
            type: 'concept',
            title: 'Displacement',
            content: [
              'Displacement is the straight-line change in position from the initial position to the final position.',
              'Displacement has both magnitude and direction, so it is a vector quantity.',
            ],
            formula:
              'Displacement = Final position − Initial position',
            remember:
              'Displacement depends only on the starting and ending positions.',
          },

          {
            type: 'example',
            title: 'Worked Example',
            problem:
              'A learner walks 30 m east and then 10 m west. Find the total distance and the displacement.',

            solution: [
              'Distance = 30 m + 10 m',
              'Distance = 40 m',
              'Displacement = 30 m east − 10 m west',
              'Displacement = 20 m east',
            ],
          },

          {
            type: 'practice',
            title: 'Try It Yourself',
            question:
              'A student walks 50 m north and then returns 20 m south. What is the student’s displacement?',

            options: [
              '20 m south',
              '30 m north',
              '70 m north',
              '70 m south',
            ],

            correctAnswer: '30 m north',

            feedback: {
              correct:
                'Correct! The student has moved 30 m north from the starting point.',
              incorrect:
                'Remember that displacement compares the final position with the initial position.',
            },
          },

          {
            type: 'summary',
            title: 'Lesson Summary',
            points: [
              'Distance is the total path travelled.',
              'Displacement is the change from initial position to final position.',
              'Distance is a scalar quantity.',
              'Displacement is a vector quantity.',
              'Distance is always greater than or equal to the magnitude of displacement.',
            ],
          },
        ],
      },

      {
        id: 'physics-motion-speed',
        topic: 'Speed and Average Speed',
        course: 'Physics',
        level: 'Secondary School',

        objectives: [
          'Define speed.',
          'Use the speed formula.',
          'Calculate average speed in simple problems.',
          'Use appropriate SI units for speed.',
        ],

        sections: [
          {
            type: 'introduction',
            title: 'Understanding Speed',
            content: [
              'Speed tells us how quickly an object is moving.',
              'An object that covers a large distance in a short time has a greater speed than an object that covers the same distance in a longer time.',
            ],
          },

          {
            type: 'concept',
            title: 'Speed Formula',
            content: [
              'Speed is calculated by dividing distance travelled by the time taken.',
              'The SI unit of speed is metres per second (m/s).',
            ],
            formula:
              'Speed = Distance ÷ Time',
            remember:
              'Always check that distance and time use compatible units before calculating speed.',
          },

          {
            type: 'example',
            title: 'Worked Example',
            problem:
              'A car travels 150 km in 3 hours. Calculate its average speed in kilometres per hour.',

            solution: [
              'Distance = 150 km',
              'Time = 3 h',
              'Average speed = 150 km ÷ 3 h',
              'Average speed = 50 km/h',
            ],
          },

          {
            type: 'practice',
            title: 'Try It Yourself',
            question:
              'A runner travels 400 m in 80 s. What is the runner’s average speed?',

            options: [
              '2 m/s',
              '4 m/s',
              '5 m/s',
              '8 m/s',
            ],

            correctAnswer: '5 m/s',

            feedback: {
              correct:
                'Excellent! 400 ÷ 80 = 5 m/s.',
              incorrect:
                'Use the formula speed = distance ÷ time.',
            },
          },

          {
            type: 'summary',
            title: 'Lesson Summary',
            points: [
              'Speed describes how quickly an object moves.',
              'Speed = distance ÷ time.',
              'The SI unit of speed is m/s.',
              'Average speed uses total distance and total time.',
              'Correct units are important when calculating speed.',
            ],
          },
        ],
      },

      {
        id: 'physics-motion-velocity',
        topic: 'Velocity',
        course: 'Physics',
        level: 'Secondary School',

        objectives: [
          'Define velocity.',
          'Distinguish between speed and velocity.',
          'Explain why velocity is a vector quantity.',
          'Calculate average velocity in simple linear motion.',
        ],

        sections: [
          {
            type: 'introduction',
            title: 'What is Velocity?',
            content: [
              'Velocity describes how quickly an object changes its position in a particular direction.',
              'Velocity is closely related to speed, but velocity includes direction.',
            ],
          },

          {
            type: 'concept',
            title: 'Speed and Velocity',
            content: [
              'Speed is a scalar quantity because it has magnitude only.',
              'Velocity is a vector quantity because it has both magnitude and direction.',
            ],
            formula:
              'Average velocity = Displacement ÷ Time',
            remember:
              'Speed uses distance, while velocity uses displacement.',
          },

          {
            type: 'example',
            title: 'Worked Example',
            problem:
              'A cyclist has a displacement of 120 m east in 20 s. Calculate the cyclist’s average velocity.',

            solution: [
              'Displacement = 120 m east',
              'Time = 20 s',
              'Average velocity = 120 m ÷ 20 s',
              'Average velocity = 6 m/s east',
            ],
          },

          {
            type: 'practice',
            title: 'Try It Yourself',
            question:
              'A learner has a displacement of 60 m north in 12 s. What is the average velocity?',

            options: [
              '3 m/s north',
              '5 m/s north',
              '6 m/s north',
              '12 m/s north',
            ],

            correctAnswer: '5 m/s north',

            feedback: {
              correct:
                'Correct! 60 ÷ 12 = 5 m/s north.',
              incorrect:
                'Remember: average velocity = displacement ÷ time.',
            },
          },

          {
            type: 'summary',
            title: 'Lesson Summary',
            points: [
              'Velocity is the rate of change of displacement.',
              'Velocity has both magnitude and direction.',
              'Speed is based on distance.',
              'Velocity is based on displacement.',
              'Average velocity = displacement ÷ time.',
            ],
          },
        ],
      },

      {
        id: 'physics-motion-acceleration',
        topic: 'Acceleration',
        course: 'Physics',
        level: 'Secondary School',

        objectives: [
          'Define acceleration.',
          'Explain how velocity can change.',
          'Calculate acceleration using change in velocity and time.',
          'Identify examples of accelerating objects.',
        ],

        sections: [
          {
            type: 'introduction',
            title: 'Understanding Acceleration',
            content: [
              'Acceleration describes how quickly an object’s velocity changes with time.',
              'An object accelerates when its speed changes, its direction changes, or both change.',
            ],
          },

          {
            type: 'concept',
            title: 'Acceleration Formula',
            content: [
              'Acceleration is found by dividing the change in velocity by the time taken.',
              'The SI unit of acceleration is metres per second squared (m/s²).',
            ],
            formula:
              'Acceleration = Change in velocity ÷ Time',
            remember:
              'Acceleration can be positive, negative, or zero depending on how velocity changes.',
          },

          {
            type: 'example',
            title: 'Worked Example',
            problem:
              'A car increases its velocity from 10 m/s to 20 m/s in 5 s. Calculate its acceleration.',

            solution: [
              'Initial velocity = 10 m/s',
              'Final velocity = 20 m/s',
              'Change in velocity = 20 − 10 = 10 m/s',
              'Time = 5 s',
              'Acceleration = 10 ÷ 5',
              'Acceleration = 2 m/s²',
            ],
          },

          {
            type: 'practice',
            title: 'Try It Yourself',
            question:
              'A bicycle increases its velocity from 4 m/s to 12 m/s in 4 s. What is its acceleration?',

            options: [
              '1 m/s²',
              '2 m/s²',
              '3 m/s²',
              '4 m/s²',
            ],

            correctAnswer: '2 m/s²',

            feedback: {
              correct:
                'Excellent! The change in velocity is 8 m/s and 8 ÷ 4 = 2 m/s².',
              incorrect:
                'Calculate the change in velocity first, then divide by time.',
            },
          },

          {
            type: 'summary',
            title: 'Lesson Summary',
            points: [
              'Acceleration is the rate of change of velocity.',
              'Acceleration can involve a change in speed or direction.',
              'Acceleration = change in velocity ÷ time.',
              'The SI unit of acceleration is m/s².',
              'An object moving at constant velocity has zero acceleration.',
            ],
          },
        ],
      },
    ],
  },forces: {
  title: 'Forces',

  lessons: [
    {
      id: 'physics-forces-introduction',
      topic: 'Introduction to Forces',
      course: 'Physics',
      level: 'Secondary School',

      objectives: [
        'Define a force.',
        'Describe the effects a force can have on an object.',
        'Identify force as a push or pull.',
        'Use the SI unit of force correctly.',
      ],

      sections: [
        {
          type: 'introduction',
          title: 'What is a Force?',
          content: [
            'A force is a push or pull that can change the motion, direction or shape of an object.',
            'Forces act when objects interact. For example, a person pushing a door applies a force to the door.',
          ],
        },

        {
          type: 'concept',
          title: 'Effects of a Force',
          content: [
            'A force can make a stationary object start moving.',
            'A force can make a moving object slow down, stop or speed up.',
            'A force can also change the direction of motion or change the shape of an object.',
          ],
          remember:
            'A force can change an object’s motion or shape.',
        },

        {
          type: 'concept',
          title: 'Force and Its Unit',
          content: [
            'The SI unit of force is the newton (N).',
            'A force is a vector quantity because it has both magnitude and direction.',
          ],
          remember:
            'Force is measured in newtons (N) and has direction.',
        },

        {
          type: 'example',
          title: 'Worked Example',
          problem:
            'A learner pushes a box and the box begins to move. What effect has the force had on the box?',

          solution: [
            'The box was initially stationary.',
            'The learner applied a force to the box.',
            'The force changed the motion of the box.',
            'Therefore, the force caused the box to start moving.',
          ],
        },

        {
          type: 'practice',
          title: 'Try It Yourself',
          question:
            'Which of the following is an example of a force changing the motion of an object?',

          options: [
            'A book resting on a table',
            'A football being kicked',
            'A glass sitting on a desk',
            'A tree standing in a field',
          ],

          correctAnswer:
            'A football being kicked',

          feedback: {
            correct:
              'Correct! The kick applies a force that changes the football’s motion.',
            incorrect:
              'Think about which example involves a push or pull changing motion.',
          },
        },

        {
          type: 'summary',
          title: 'Lesson Summary',
          points: [
            'A force is a push or pull.',
            'Forces occur when objects interact.',
            'A force can change motion or shape.',
            'Force is measured in newtons (N).',
            'Force has both magnitude and direction.',
          ],
        },
      ],
    },

    {
      id: 'physics-forces-types',
      topic: 'Types of Forces',
      course: 'Physics',
      level: 'Secondary School',

      objectives: [
        'Identify contact and non-contact forces.',
        'Describe friction, tension, normal reaction and air resistance.',
        'Identify gravitational, magnetic and electrostatic forces.',
        'Give everyday examples of different forces.',
      ],

      sections: [
        {
          type: 'introduction',
          title: 'Different Types of Forces',
          content: [
            'Forces can be grouped into contact forces and non-contact forces.',
            'Contact forces occur when objects are physically touching, while non-contact forces can act without direct contact.',
          ],
        },

        {
          type: 'concept',
          title: 'Contact Forces',
          content: [
            'Contact forces include friction, air resistance, tension and normal reaction force.',
            'Friction acts between surfaces and usually opposes motion.',
            'Tension acts through a stretched rope, string or cable.',
          ],
          remember:
            'Contact forces require physical contact between objects.',
        },

        {
          type: 'concept',
          title: 'Non-Contact Forces',
          content: [
            'Gravitational, magnetic and electrostatic forces are examples of non-contact forces.',
            'These forces can act even when objects are not touching.',
          ],
          remember:
            'Non-contact forces can act over a distance.',
        },

        {
          type: 'example',
          title: 'Worked Example',
          problem:
            'A cyclist moves along a road and eventually slows down when they stop pedalling. Which force mainly opposes the motion?',

          solution: [
            'The bicycle interacts with the road and surrounding air.',
            'Friction and air resistance oppose the motion.',
            'Therefore, these resistive forces cause the bicycle to slow down.',
          ],
        },

        {
          type: 'practice',
          title: 'Try It Yourself',
          question:
            'Which of the following is a non-contact force?',

          options: [
            'Friction',
            'Tension',
            'Gravity',
            'Normal reaction',
          ],

          correctAnswer: 'Gravity',

          feedback: {
            correct:
              'Correct! Gravitational force can act without direct contact.',
            incorrect:
              'Remember that contact forces require objects to touch.',
          },
        },

        {
          type: 'summary',
          title: 'Lesson Summary',
          points: [
            'Forces may be contact or non-contact forces.',
            'Friction, tension and air resistance are contact forces.',
            'Gravity, magnetism and electrostatic force are non-contact forces.',
            'Friction usually opposes relative motion between surfaces.',
            'Different forces act in many everyday situations.',
          ],
        },
      ],
    },

    {
      id: 'physics-forces-newton-first-law',
      topic: "Newton's First Law",
      course: 'Physics',
      level: 'Secondary School',

      objectives: [
        'State Newton’s First Law of Motion.',
        'Explain the idea of inertia.',
        'Identify balanced forces.',
        'Relate Newton’s First Law to everyday situations.',
      ],

      sections: [
        {
          type: 'introduction',
          title: 'Newton’s First Law of Motion',
          content: [
            'Newton’s First Law describes what happens when the forces acting on an object are balanced.',
            'An object remains at rest or continues moving at constant velocity unless an unbalanced external force acts on it.',
          ],
        },

        {
          type: 'concept',
          title: 'Inertia',
          content: [
            'Inertia is the tendency of an object to resist changes in its state of motion.',
            'Objects with greater mass generally have greater inertia.',
          ],
          remember:
            'Objects resist changes in their motion because of inertia.',
        },

        {
          type: 'concept',
          title: 'Balanced and Unbalanced Forces',
          content: [
            'Balanced forces have a resultant force of zero and do not change an object’s velocity.',
            'Unbalanced forces produce a non-zero resultant force and can change velocity.',
          ],
          formula:
            'Resultant force = 0 N for balanced forces',
        },

        {
          type: 'example',
          title: 'Worked Example',
          problem:
            'A book is resting on a table. Explain why it remains at rest.',

          solution: [
            'Gravity pulls the book downward.',
            'The table provides an upward normal reaction force.',
            'The two forces are equal and opposite.',
            'The resultant force is zero, so the book remains at rest.',
          ],
        },

        {
          type: 'practice',
          title: 'Try It Yourself',
          question:
            'What happens to an object when the resultant force acting on it is zero?',

          options: [
            'It must speed up',
            'It must stop immediately',
            'Its velocity remains constant',
            'Its mass increases',
          ],

          correctAnswer:
            'Its velocity remains constant',

          feedback: {
            correct:
              'Correct! With zero resultant force, the object remains at rest or continues at constant velocity.',
            incorrect:
              'Think about Newton’s First Law and balanced forces.',
          },
        },

        {
          type: 'summary',
          title: 'Lesson Summary',
          points: [
            'Newton’s First Law relates motion to the resultant force.',
            'An object remains at rest or moves at constant velocity when the resultant force is zero.',
            'Inertia is resistance to a change in motion.',
            'Balanced forces have a resultant force of zero.',
            'Unbalanced forces change velocity.',
          ],
        },
      ],
    },

    {
      id: 'physics-forces-newton-second-law',
      topic: "Newton's Second Law",
      course: 'Physics',
      level: 'Secondary School',

      objectives: [
        'State Newton’s Second Law.',
        'Explain the relationship between force, mass and acceleration.',
        'Calculate resultant force.',
        'Calculate acceleration using mass and force.',
      ],

      sections: [
        {
          type: 'introduction',
          title: 'Force, Mass and Acceleration',
          content: [
            'Newton’s Second Law explains how an unbalanced force changes the motion of an object.',
            'For a given mass, a larger resultant force produces a larger acceleration.',
          ],
        },

        {
          type: 'concept',
          title: 'Newton’s Second Law',
          content: [
            'The resultant force acting on an object is related to the mass of the object and its acceleration.',
            'This relationship allows us to calculate force, mass or acceleration when the other two quantities are known.',
          ],
          formula:
            'F = m × a',
          remember:
            'Force equals mass multiplied by acceleration.',
        },

        {
          type: 'example',
          title: 'Worked Example',
          problem:
            'A 5 kg object accelerates at 2 m/s². Calculate the resultant force acting on the object.',

          solution: [
            'Mass = 5 kg',
            'Acceleration = 2 m/s²',
            'F = m × a',
            'F = 5 × 2',
            'F = 10 N',
          ],
        },

        {
          type: 'practice',
          title: 'Try It Yourself',
          question:
            'A 4 kg object accelerates at 3 m/s². What is the resultant force?',

          options: [
            '7 N',
            '12 N',
            '16 N',
            '24 N',
          ],

          correctAnswer: '12 N',

          feedback: {
            correct:
              'Excellent! F = m × a = 4 × 3 = 12 N.',
            incorrect:
              'Use Newton’s Second Law: F = m × a.',
          },
        },

        {
          type: 'summary',
          title: 'Lesson Summary',
          points: [
            'Newton’s Second Law relates resultant force, mass and acceleration.',
            'The formula is F = m × a.',
            'The SI unit of force is the newton (N).',
            'Greater force produces greater acceleration for a fixed mass.',
            'Greater mass produces less acceleration for a fixed force.',
          ],
        },
      ],
    },

    {
      id: 'physics-forces-newton-third-law',
      topic: "Newton's Third Law",
      course: 'Physics',
      level: 'Secondary School',

      objectives: [
        'State Newton’s Third Law of Motion.',
        'Identify action and reaction force pairs.',
        'Explain why action and reaction forces act on different objects.',
        'Apply Newton’s Third Law to everyday examples.',
      ],

      sections: [
        {
          type: 'introduction',
          title: 'Action and Reaction',
          content: [
            'Whenever two objects interact, they exert forces on each other.',
            'Newton’s Third Law describes the relationship between these two interacting forces.',
          ],
        },

        {
          type: 'concept',
          title: 'Newton’s Third Law',
          content: [
            'For every action force, there is an equal and opposite reaction force.',
            'The two forces act on different objects and occur at the same time.',
          ],
          remember:
            'Action and reaction forces are equal in size, opposite in direction and act on different objects.',
        },

        {
          type: 'concept',
          title: 'Everyday Applications',
          content: [
            'When a person pushes the ground backward while walking, the ground pushes the person forward.',
            'A rocket moves upward because gases are pushed downward, producing an upward reaction force.',
            'Swimming also depends on action and reaction forces between the swimmer and water.',
          ],
        },

        {
          type: 'example',
          title: 'Worked Example',
          problem:
            'A swimmer pushes water backward with their hands. Explain why the swimmer moves forward.',

          solution: [
            'The swimmer exerts a force backward on the water.',
            'The water exerts an equal and opposite force on the swimmer.',
            'The reaction force from the water acts forward.',
            'Therefore, the swimmer moves forward.',
          ],
        },

        {
          type: 'practice',
          title: 'Try It Yourself',
          question:
            'Which statement correctly describes Newton’s Third Law?',

          options: [
            'Every force must be larger than its reaction',
            'Action and reaction forces act on the same object',
            'Action and reaction forces are equal and opposite',
            'Reaction forces only occur after motion stops',
          ],

          correctAnswer:
            'Action and reaction forces are equal and opposite',

          feedback: {
            correct:
              'Correct! Newton’s Third Law describes equal and opposite interaction forces.',
            incorrect:
              'Remember that action and reaction forces are equal, opposite and act on different objects.',
          },
        },

        {
          type: 'summary',
          title: 'Lesson Summary',
          points: [
            'Newton’s Third Law describes forces between interacting objects.',
            'Every action has an equal and opposite reaction.',
            'The two forces act on different objects.',
            'Action and reaction forces occur simultaneously.',
            'Walking, swimming and rockets are everyday examples.',
          ],
        },
      ],
    },
  ],
},energy: {
  title: 'Energy',

  lessons: [
    {
      id: 'physics-energy-work',
      topic: 'Work and Energy',
      course: 'Physics',
      level: 'Secondary School',

      objectives: [
        'Define work in physics.',
        'Explain the relationship between work and energy.',
        'Calculate work done by a force.',
        'Use the correct SI unit for work and energy.',
      ],

      sections: [
        {
          type: 'introduction',
          title: 'What are Work and Energy?',
          content: [
            'In physics, work is done when a force causes an object to move through a distance in the direction of the force.',
            'Energy is the ability to do work. Energy can be transferred from one object or system to another.',
          ],
        },

        {
          type: 'concept',
          title: 'Work Done',
          content: [
            'The amount of work done depends on the force applied and the distance moved in the direction of the force.',
            'The SI unit of work is the joule (J).',
          ],
          formula:
            'Work done = Force × Distance',
          remember:
            'Work is done when a force causes displacement in the direction of the force.',
        },

        {
          type: 'concept',
          title: 'Work and Energy Transfer',
          content: [
            'When work is done on an object, energy is transferred to or from the object.',
            'For example, lifting a book transfers energy to the book and increases its gravitational potential energy.',
          ],
          remember:
            'Doing work is one way of transferring energy.',
        },

        {
          type: 'example',
          title: 'Worked Example',
          problem:
            'A learner pushes a box with a force of 20 N through a distance of 5 m. Calculate the work done.',

          solution: [
            'Force = 20 N',
            'Distance = 5 m',
            'Work done = Force × Distance',
            'Work done = 20 × 5',
            'Work done = 100 J',
          ],
        },

        {
          type: 'practice',
          title: 'Try It Yourself',
          question:
            'A force of 10 N moves an object through 4 m. How much work is done?',

          options: [
            '14 J',
            '25 J',
            '40 J',
            '50 J',
          ],

          correctAnswer: '40 J',

          feedback: {
            correct:
              'Excellent! Work done = 10 × 4 = 40 J.',
            incorrect:
              'Use the formula: Work done = Force × Distance.',
          },
        },

        {
          type: 'summary',
          title: 'Lesson Summary',
          points: [
            'Work is done when a force causes displacement.',
            'Energy is the ability to do work.',
            'Work done = force × distance.',
            'The SI unit of work and energy is the joule (J).',
            'Doing work transfers energy.',
          ],
        },
      ],
    },

    {
      id: 'physics-energy-kinetic',
      topic: 'Kinetic Energy',
      course: 'Physics',
      level: 'Secondary School',

      objectives: [
        'Define kinetic energy.',
        'Identify objects that possess kinetic energy.',
        'Explain how mass and speed affect kinetic energy.',
        'Calculate kinetic energy using the standard formula.',
      ],

      sections: [
        {
          type: 'introduction',
          title: 'Energy of Moving Objects',
          content: [
            'Kinetic energy is the energy an object has because of its motion.',
            'Any moving object can have kinetic energy, from a rolling ball to a moving vehicle.',
          ],
        },

        {
          type: 'concept',
          title: 'Kinetic Energy Formula',
          content: [
            'Kinetic energy depends on both the mass of an object and the square of its speed.',
            'The SI unit of kinetic energy is the joule (J).',
          ],
          formula:
            'Kinetic energy = ½ × mass × speed²',
          remember:
            'A faster object has more kinetic energy, and increasing speed has a strong effect because speed is squared.',
        },

        {
          type: 'example',
          title: 'Worked Example',
          problem:
            'A 2 kg object moves at 4 m/s. Calculate its kinetic energy.',

          solution: [
            'Mass = 2 kg',
            'Speed = 4 m/s',
            'Kinetic energy = ½ × m × v²',
            'Kinetic energy = ½ × 2 × 4²',
            'Kinetic energy = 1 × 16',
            'Kinetic energy = 16 J',
          ],
        },

        {
          type: 'practice',
          title: 'Try It Yourself',
          question:
            'What is the kinetic energy of a 4 kg object moving at 2 m/s?',

          options: [
            '4 J',
            '8 J',
            '16 J',
            '32 J',
          ],

          correctAnswer: '8 J',

          feedback: {
            correct:
              'Correct! ½ × 4 × 2² = 8 J.',
            incorrect:
              'Use KE = ½mv² and remember to square the speed.',
          },
        },

        {
          type: 'summary',
          title: 'Lesson Summary',
          points: [
            'Kinetic energy is the energy of motion.',
            'Kinetic energy depends on mass and speed.',
            'KE = ½mv².',
            'The SI unit of kinetic energy is the joule (J).',
            'Increasing speed greatly increases kinetic energy because speed is squared.',
          ],
        },
      ],
    },

    {
      id: 'physics-energy-potential',
      topic: 'Potential Energy',
      course: 'Physics',
      level: 'Secondary School',

      objectives: [
        'Define potential energy.',
        'Explain gravitational potential energy.',
        'Identify situations where objects store potential energy.',
        'Calculate gravitational potential energy.',
      ],

      sections: [
        {
          type: 'introduction',
          title: 'Stored Energy',
          content: [
            'Potential energy is stored energy that an object has because of its position, condition or arrangement.',
            'A raised object can store gravitational potential energy because of its height above the ground.',
          ],
        },

        {
          type: 'concept',
          title: 'Gravitational Potential Energy',
          content: [
            'Gravitational potential energy depends on the mass of an object, the gravitational field strength and its height.',
            'Near the surface of Earth, gravitational field strength is often approximated as 9.8 N/kg or 10 N/kg for simple calculations.',
          ],
          formula:
            'Gravitational potential energy = mass × gravitational field strength × height',
          remember:
            'Raising an object higher increases its gravitational potential energy.',
        },

        {
          type: 'example',
          title: 'Worked Example',
          problem:
            'A 5 kg object is lifted through a height of 2 m. Take g = 10 N/kg. Calculate its gravitational potential energy.',

          solution: [
            'Mass = 5 kg',
            'Gravitational field strength = 10 N/kg',
            'Height = 2 m',
            'GPE = m × g × h',
            'GPE = 5 × 10 × 2',
            'GPE = 100 J',
          ],
        },

        {
          type: 'practice',
          title: 'Try It Yourself',
          question:
            'A 2 kg object is raised by 5 m. Take g = 10 N/kg. What is its gravitational potential energy?',

          options: [
            '10 J',
            '50 J',
            '100 J',
            '200 J',
          ],

          correctAnswer: '100 J',

          feedback: {
            correct:
              'Excellent! GPE = 2 × 10 × 5 = 100 J.',
            incorrect:
              'Use GPE = m × g × h.',
          },
        },

        {
          type: 'summary',
          title: 'Lesson Summary',
          points: [
            'Potential energy is stored energy.',
            'Gravitational potential energy depends on mass, gravity and height.',
            'GPE = mgh.',
            'The SI unit of potential energy is the joule (J).',
            'Increasing height increases gravitational potential energy.',
          ],
        },
      ],
    },

    {
      id: 'physics-energy-power',
      topic: 'Power',
      course: 'Physics',
      level: 'Secondary School',

      objectives: [
        'Define power.',
        'Explain the difference between work and power.',
        'Calculate power from work and time.',
        'Use watts as the SI unit of power.',
      ],

      sections: [
        {
          type: 'introduction',
          title: 'What is Power?',
          content: [
            'Power describes how quickly work is done or how quickly energy is transferred.',
            'Two machines may do the same amount of work, but the one that does it in less time has greater power.',
          ],
        },

        {
          type: 'concept',
          title: 'Power Formula',
          content: [
            'Power is calculated by dividing the work done by the time taken.',
            'The SI unit of power is the watt (W).',
          ],
          formula:
            'Power = Work done ÷ Time',
          remember:
            'Power tells us how quickly work is done.',
        },

        {
          type: 'example',
          title: 'Worked Example',
          problem:
            'A machine does 600 J of work in 20 s. Calculate its power.',

          solution: [
            'Work done = 600 J',
            'Time = 20 s',
            'Power = Work ÷ Time',
            'Power = 600 ÷ 20',
            'Power = 30 W',
          ],
        },

        {
          type: 'practice',
          title: 'Try It Yourself',
          question:
            'A motor transfers 1,000 J of energy in 50 s. What is its power?',

          options: [
            '10 W',
            '20 W',
            '50 W',
            '100 W',
          ],

          correctAnswer: '20 W',

          feedback: {
            correct:
              'Correct! Power = 1,000 ÷ 50 = 20 W.',
            incorrect:
              'Remember: Power = energy transferred ÷ time.',
          },
        },

        {
          type: 'summary',
          title: 'Lesson Summary',
          points: [
            'Power is the rate of doing work or transferring energy.',
            'Power = work done ÷ time.',
            'The SI unit of power is the watt (W).',
            'A higher-power device transfers energy more quickly.',
            'The same amount of work can be done at different power levels.',
          ],
        },
      ],
    },

    {
      id: 'physics-energy-transformations',
      topic: 'Energy Transformations',
      course: 'Physics',
      level: 'Secondary School',

      objectives: [
        'Define energy transformation.',
        'Identify common forms of energy.',
        'Describe energy changes in everyday devices.',
        'Explain the principle of conservation of energy.',
      ],

      sections: [
        {
          type: 'introduction',
          title: 'Changing Forms of Energy',
          content: [
            'Energy can be transferred from one form to another.',
            'For example, a battery can store chemical energy that is transformed into electrical energy when connected to a circuit.',
          ],
        },

        {
          type: 'concept',
          title: 'Forms of Energy',
          content: [
            'Common forms of energy include kinetic, gravitational potential, chemical, electrical, thermal, light and sound energy.',
            'Energy transformations occur whenever energy changes from one form to another.',
          ],
          remember:
            'Energy can be transferred and transformed from one form to another.',
        },

        {
          type: 'concept',
          title: 'Conservation of Energy',
          content: [
            'The principle of conservation of energy states that energy cannot be created or destroyed.',
            'Instead, energy is transferred from one form to another. In real systems, some energy is often transferred to the surroundings as thermal energy or sound.',
          ],
          remember:
            'The total amount of energy is conserved even when its form changes.',
        },

        {
          type: 'example',
          title: 'Worked Example',
          problem:
            'Describe the main energy transformations that occur when a torch is switched on.',

          solution: [
            'The battery stores chemical energy.',
            'The chemical energy is transformed into electrical energy.',
            'The electrical energy is transferred to the bulb or LED.',
            'The bulb or LED produces light, with some energy also transferred as thermal energy.',
          ],
        },

        {
          type: 'practice',
          title: 'Try It Yourself',
          question:
            'Which energy transformation mainly occurs in an electric heater?',

          options: [
            'Electrical energy to thermal energy',
            'Thermal energy to chemical energy',
            'Light energy to kinetic energy',
            'Chemical energy to gravitational energy',
          ],

          correctAnswer:
            'Electrical energy to thermal energy',

          feedback: {
            correct:
              'Correct! An electric heater transforms electrical energy mainly into thermal energy.',
            incorrect:
              'Think about the useful output of an electric heater.',
          },
        },

        {
          type: 'summary',
          title: 'Lesson Summary',
          points: [
            'Energy exists in different forms.',
            'Energy can be transferred and transformed.',
            'Energy cannot be created or destroyed.',
            'Everyday devices involve useful and sometimes unwanted energy transfers.',
            'Understanding energy transformations helps us use energy efficiently.',
          ],
        },
      ],
    },
  ],
},electricity: {
  title: 'Electricity',

  lessons: [
    {
      id: 'physics-electricity-charge-current',
      topic: 'Electric Charge and Current',
      course: 'Physics',
      level: 'Secondary School',

      objectives: [
        'Define electric charge.',
        'Explain electric current as a flow of charge.',
        'Distinguish between conductors and insulators.',
        'Use the correct SI unit of electric current.',
      ],

      sections: [
        {
          type: 'introduction',
          title: 'Electric Charge and Current',
          content: [
            'Electric charge is a property of matter that causes electrical interactions.',
            'Electric current is the rate at which electric charge flows through a conductor.',
          ],
        },

        {
          type: 'concept',
          title: 'Electric Current',
          content: [
            'Electric current describes how much charge passes a point in a circuit each second.',
            'The SI unit of electric current is the ampere (A).',
          ],
          formula:
            'Current = Charge ÷ Time',
          remember:
            'Current measures the rate of flow of electric charge.',
        },

        {
          type: 'concept',
          title: 'Conductors and Insulators',
          content: [
            'Conductors allow electric charge to flow easily. Metals such as copper and aluminium are good conductors.',
            'Insulators resist the movement of charge. Materials such as rubber and plastic are commonly used as insulators.',
          ],
          remember:
            'Conductors allow charge to flow easily, while insulators resist charge flow.',
        },

        {
          type: 'example',
          title: 'Worked Example',
          problem:
            'A charge of 20 C flows through a conductor in 5 s. Calculate the current.',

          solution: [
            'Charge = 20 C',
            'Time = 5 s',
            'Current = Charge ÷ Time',
            'Current = 20 ÷ 5',
            'Current = 4 A',
          ],
        },

        {
          type: 'practice',
          title: 'Try It Yourself',
          question:
            'A charge of 30 C flows through a wire in 10 s. What is the current?',

          options: [
            '2 A',
            '3 A',
            '4 A',
            '5 A',
          ],

          correctAnswer: '3 A',

          feedback: {
            correct:
              'Excellent! Current = 30 ÷ 10 = 3 A.',
            incorrect:
              'Use the formula: Current = Charge ÷ Time.',
          },
        },

        {
          type: 'summary',
          title: 'Lesson Summary',
          points: [
            'Electric charge is a property of matter.',
            'Electric current is the rate of flow of charge.',
            'Current = charge ÷ time.',
            'The SI unit of current is the ampere (A).',
            'Conductors allow current to flow easily, while insulators resist it.',
          ],
        },
      ],
    },

    {
      id: 'physics-electricity-voltage',
      topic: 'Voltage and Potential Difference',
      course: 'Physics',
      level: 'Secondary School',

      objectives: [
        'Define potential difference.',
        'Explain the role of a voltage source in a circuit.',
        'Identify the unit used to measure potential difference.',
        'Relate voltage to energy transferred per unit charge.',
      ],

      sections: [
        {
          type: 'introduction',
          title: 'Understanding Voltage',
          content: [
            'Potential difference, commonly called voltage, describes the energy transferred per unit charge between two points in a circuit.',
            'Cells and batteries provide potential difference that can drive charge around a circuit.',
          ],
        },

        {
          type: 'concept',
          title: 'Potential Difference',
          content: [
            'Potential difference tells us how much energy is transferred for each coulomb of charge.',
            'The SI unit of potential difference is the volt (V).',
          ],
          formula:
            'Potential difference = Energy transferred ÷ Charge',
          remember:
            'One volt means one joule of energy is transferred per coulomb of charge.',
        },

        {
          type: 'concept',
          title: 'Voltage Sources',
          content: [
            'Cells and batteries are common sources of potential difference.',
            'A higher potential difference can provide more energy to each coulomb of charge in a circuit.',
          ],
          remember:
            'Batteries and cells provide the potential difference needed to drive current.',
        },

        {
          type: 'example',
          title: 'Worked Example',
          problem:
            'A device transfers 24 J of energy when 6 C of charge passes through it. Calculate the potential difference.',

          solution: [
            'Energy transferred = 24 J',
            'Charge = 6 C',
            'Potential difference = Energy ÷ Charge',
            'Potential difference = 24 ÷ 6',
            'Potential difference = 4 V',
          ],
        },

        {
          type: 'practice',
          title: 'Try It Yourself',
          question:
            'A circuit component transfers 30 J of energy when 5 C of charge passes through it. What is the potential difference?',

          options: [
            '3 V',
            '5 V',
            '6 V',
            '10 V',
          ],

          correctAnswer: '6 V',

          feedback: {
            correct:
              'Correct! Potential difference = 30 ÷ 5 = 6 V.',
            incorrect:
              'Use potential difference = energy transferred ÷ charge.',
          },
        },

        {
          type: 'summary',
          title: 'Lesson Summary',
          points: [
            'Potential difference is also called voltage.',
            'Voltage describes energy transferred per unit charge.',
            'Potential difference = energy ÷ charge.',
            'The SI unit of potential difference is the volt (V).',
            'Cells and batteries are common sources of potential difference.',
          ],
        },
      ],
    },

    {
      id: 'physics-electricity-resistance-ohms-law',
      topic: "Resistance and Ohm's Law",
      course: 'Physics',
      level: 'Secondary School',

      objectives: [
        'Define electrical resistance.',
        'State Ohm’s Law.',
        'Calculate resistance, current or voltage.',
        'Use the ohm as the SI unit of resistance.',
      ],

      sections: [
        {
          type: 'introduction',
          title: 'Electrical Resistance',
          content: [
            'Electrical resistance describes how strongly a component opposes the flow of electric current.',
            'Different materials and components have different resistances.',
          ],
        },

        {
          type: 'concept',
          title: 'Ohm’s Law',
          content: [
            'For an ohmic conductor under constant physical conditions, the current is proportional to the potential difference across it.',
            'Ohm’s Law provides a useful relationship between voltage, current and resistance.',
          ],
          formula:
            'V = I × R',
          remember:
            'Voltage equals current multiplied by resistance.',
        },

        {
          type: 'concept',
          title: 'Resistance and Its Unit',
          content: [
            'Resistance is measured in ohms (Ω).',
            'A component with greater resistance requires a greater potential difference to produce the same current.',
          ],
          formula:
            'Resistance = Voltage ÷ Current',
        },

        {
          type: 'example',
          title: 'Worked Example',
          problem:
            'A 12 V supply produces a current of 3 A through a resistor. Calculate the resistance.',

          solution: [
            'Voltage = 12 V',
            'Current = 3 A',
            'R = V ÷ I',
            'R = 12 ÷ 3',
            'R = 4 Ω',
          ],
        },

        {
          type: 'practice',
          title: 'Try It Yourself',
          question:
            'A resistor has a voltage of 10 V across it and a current of 2 A. What is its resistance?',

          options: [
            '2 Ω',
            '5 Ω',
            '8 Ω',
            '20 Ω',
          ],

          correctAnswer: '5 Ω',

          feedback: {
            correct:
              'Excellent! R = V ÷ I = 10 ÷ 2 = 5 Ω.',
            incorrect:
              'Use Ohm’s Law and rearrange it to R = V ÷ I.',
          },
        },

        {
          type: 'summary',
          title: 'Lesson Summary',
          points: [
            'Resistance opposes the flow of electric current.',
            'Ohm’s Law is V = I × R.',
            'Resistance = voltage ÷ current.',
            'The SI unit of resistance is the ohm (Ω).',
            'Resistance, current and voltage are related quantities in a circuit.',
          ],
        },
      ],
    },

    {
      id: 'physics-electricity-series-parallel',
      topic: 'Series and Parallel Circuits',
      course: 'Physics',
      level: 'Secondary School',

      objectives: [
        'Distinguish between series and parallel circuits.',
        'Describe the current and voltage characteristics of each type.',
        'Identify common advantages of parallel circuits.',
        'Apply circuit concepts to simple examples.',
      ],

      sections: [
        {
          type: 'introduction',
          title: 'Types of Circuits',
          content: [
            'Electrical components can be connected in different ways.',
            'Two important arrangements are series circuits and parallel circuits.',
          ],
        },

        {
          type: 'concept',
          title: 'Series Circuits',
          content: [
            'In a series circuit, components are connected along a single path for current.',
            'The current is the same through each component in an ideal series circuit.',
            'If one component is disconnected, the circuit path is broken.',
          ],
          remember:
            'A series circuit provides one main path for current.',
        },

        {
          type: 'concept',
          title: 'Parallel Circuits',
          content: [
            'In a parallel circuit, components are connected on separate branches.',
            'The potential difference across parallel branches is the same for an ideal circuit connected to the same source.',
            'If one branch is opened, current can still flow through other branches.',
          ],
          remember:
            'Parallel circuits provide multiple paths for current.',
        },

        {
          type: 'example',
          title: 'Worked Example',
          problem:
            'A household lighting system uses several lamps connected in parallel. Explain one advantage of this arrangement.',

          solution: [
            'Each lamp has its own branch in the circuit.',
            'If one lamp fails, the other branches can continue to operate.',
            'This makes parallel connection useful for independent operation of devices.',
          ],
        },

        {
          type: 'practice',
          title: 'Try It Yourself',
          question:
            'Which statement is true for an ideal series circuit?',

          options: [
            'There are many separate current paths',
            'The current is the same through each component',
            'The voltage is always zero',
            'Components never affect one another',
          ],

          correctAnswer:
            'The current is the same through each component',

          feedback: {
            correct:
              'Correct! In an ideal series circuit, the same current flows through each component.',
            incorrect:
              'Remember that a series circuit has one main path for current.',
          },
        },

        {
          type: 'summary',
          title: 'Lesson Summary',
          points: [
            'Series circuits have one main path for current.',
            'Parallel circuits provide multiple branches.',
            'Current is the same through components in an ideal series circuit.',
            'Potential difference is the same across ideal parallel branches.',
            'Parallel circuits allow branches to operate more independently.',
          ],
        },
      ],
    },

    {
      id: 'physics-electricity-energy-power',
      topic: 'Electrical Energy and Power',
      course: 'Physics',
      level: 'Secondary School',

      objectives: [
        'Define electrical power.',
        'Calculate electrical power using voltage and current.',
        'Calculate electrical energy transferred.',
        'Use watts and joules correctly.',
      ],

      sections: [
        {
          type: 'introduction',
          title: 'Electrical Energy and Power',
          content: [
            'Electrical devices transfer electrical energy into other forms such as light, thermal energy, sound or motion.',
            'Electrical power tells us how quickly electrical energy is transferred.',
          ],
        },

        {
          type: 'concept',
          title: 'Electrical Power',
          content: [
            'Electrical power is the rate at which electrical energy is transferred.',
            'It can be calculated from potential difference and current.',
          ],
          formula:
            'Power = Voltage × Current',
          remember:
            'Electrical power is measured in watts (W).',
        },

        {
          type: 'concept',
          title: 'Electrical Energy',
          content: [
            'Electrical energy transferred depends on the power of the device and the time for which it operates.',
            'The SI unit of energy is the joule (J).',
          ],
          formula:
            'Electrical energy = Power × Time',
          remember:
            'Energy transferred increases when power or operating time increases.',
        },

        {
          type: 'example',
          title: 'Worked Example',
          problem:
            'A 60 W lamp operates for 10 seconds. Calculate the electrical energy transferred.',

          solution: [
            'Power = 60 W',
            'Time = 10 s',
            'Energy = Power × Time',
            'Energy = 60 × 10',
            'Energy = 600 J',
          ],
        },

        {
          type: 'practice',
          title: 'Try It Yourself',
          question:
            'A device operates at 12 V and draws a current of 2 A. What is its electrical power?',

          options: [
            '6 W',
            '12 W',
            '24 W',
            '36 W',
          ],

          correctAnswer: '24 W',

          feedback: {
            correct:
              'Excellent! Power = V × I = 12 × 2 = 24 W.',
            incorrect:
              'Use the formula: Power = Voltage × Current.',
          },
        },

        {
          type: 'summary',
          title: 'Lesson Summary',
          points: [
            'Electrical power is the rate of electrical energy transfer.',
            'Power = voltage × current.',
            'The SI unit of power is the watt (W).',
            'Electrical energy = power × time.',
            'The SI unit of electrical energy is the joule (J).',
          ],
        },
      ],
    },
  ],
},
}

export default physicsLessons