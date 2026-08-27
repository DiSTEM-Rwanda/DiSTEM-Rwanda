function CourseDetails({ course, onStartLesson }) {
  if (!course) {
    return null
  }

  const topics = {
    Mathematics: [
      {
        title: 'Algebra Fundamentals',
        description:
          'Learn variables, expressions, equations and inequalities.',
      },
      {
        title: 'Geometry',
        description:
          'Explore shapes, angles, measurements and geometric reasoning.',
      },
      {
        title: 'Statistics',
        description:
          'Understand data, graphs, averages and basic probability.',
      },
      {
        title: 'Problem Solving',
        description:
          'Apply mathematical thinking to real-world problems.',
      },
    ],

    Physics: [
      {
        title: 'Motion',
        description:
          'Understand distance, displacement, speed, velocity and acceleration.',
      },
      {
        title: 'Forces',
        description:
          "Explore forces, Newton's laws and how objects interact.",
      },
      {
        title: 'Energy',
        description:
          'Learn about kinetic energy, potential energy and energy transformations.',
      },
      {
        title: 'Electricity',
        description:
          'Explore electric current, voltage, resistance and simple circuits.',
      },
    ],

    Chemistry: [
      {
        title: 'Matter',
        description:
          'Understand solids, liquids, gases and changes of state.',
      },
      {
        title: 'Elements',
        description:
          'Explore elements, atoms and the periodic table.',
      },
      {
        title: 'Chemical Reactions',
        description:
          'Learn how substances combine and transform during reactions.',
      },
      {
        title: 'Acids and Bases',
        description:
          'Explore acids, bases, indicators and everyday applications.',
      },
    ],

    Biology: [
      {
        title: 'Cells',
        description:
          'Explore cell structures and their functions.',
      },
      {
        title: 'Living Organisms',
        description:
          'Understand the characteristics and classification of organisms.',
      },
      {
        title: 'Ecosystems',
        description:
          'Explore relationships between organisms and their environment.',
      },
      {
        title: 'Human Biology',
        description:
          'Learn about major human body systems and their functions.',
      },
    ],

    Technology: [
      {
        title: 'Digital Skills',
        description:
          'Develop essential computer and digital literacy skills.',
      },
      {
        title: 'Computational Thinking',
        description:
          'Learn logical thinking, algorithms and problem-solving.',
      },
      {
        title: 'Programming',
        description:
          'Explore programming concepts and computational creativity.',
      },
      {
        title: 'Innovation',
        description:
          'Apply technology to design solutions to real-world problems.',
      },
    ],

    'STEM Projects': [
      {
        title: 'Project Design',
        description:
          'Learn how to identify problems and design STEM solutions.',
      },
      {
        title: 'Investigation',
        description:
          'Develop research, observation and experimentation skills.',
      },
      {
        title: 'Building Solutions',
        description:
          'Create practical solutions using STEM knowledge.',
      },
      {
        title: 'Project Presentation',
        description:
          'Communicate your findings, solutions and project results.',
      },
    ],
  }

  const courseTopics = topics[course.title] || []

  function handleStartLesson(topic) {
    if (onStartLesson) {
      onStartLesson({
        course: course.title,
        topic: topic.title,
      })
    }
  }

  function handleStartCourse() {
    if (onStartLesson) {
      onStartLesson({
        course: course.title,
        topic: 'Course Introduction',
      })
    }
  }

  return (
    <section
      className="course-details-section"
      id="course-details"
    >
      <div className="course-details-hero">
        <div className="course-details-icon">
          {course.icon}
        </div>

        <div>
          <p className="eyebrow">{course.level}</p>

          <h2>{course.title}</h2>

          <p>{course.description}</p>

          <div className="course-meta">
            <span>📚 {course.lessons} lessons</span>
            <span>🌐 Offline Ready</span>
            <span>🎓 Secondary School</span>
          </div>
        </div>
      </div>

      <div className="course-details-content">
        <div className="course-overview">
          <h3>Course Overview</h3>

          <div className="topic-list">
            {courseTopics.map((topic, index) => (
              <div
                className="topic-item"
                key={topic.title}
              >
                <span className="topic-number">
                  {index + 1}
                </span>

                <div>
                  <h4>{topic.title}</h4>

                  <p>{topic.description}</p>
                </div>

                <button
                  type="button"
                  onClick={() => handleStartLesson(topic)}
                >
                  Start Lesson
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="course-progress-card">
          <span className="course-progress-icon">
            🚀
          </span>

          <h3>Ready to learn?</h3>

          <p>
            Start exploring this course and build your STEM
            knowledge step by step.
          </p>

          <div className="course-progress">
            <div className="progress-label">
              <span>Course Progress</span>
              <span>0%</span>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: '0%' }}
              ></div>
            </div>
          </div>

          <button
            type="button"
            className="start-course-button"
            onClick={handleStartCourse}
          >
            Start Course
          </button>
        </div>
      </div>
    </section>
  )
}

export default CourseDetails