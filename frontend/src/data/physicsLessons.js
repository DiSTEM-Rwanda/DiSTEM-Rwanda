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

            formula: 'Average speed = Total distance ÷ Total time',
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
    ],
  },
}

export default physicsLessons