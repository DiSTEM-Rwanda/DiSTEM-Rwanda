function Courses({ onSelectCourse }) {
  const courses = [
    {
      icon: '📐',
      title: 'Mathematics',
      description:
        'Explore numbers, algebra, geometry, statistics and problem-solving.',
      level: 'Secondary School',
      lessons: 24,
    },
    {
      icon: '⚡',
      title: 'Physics',
      description:
        'Discover motion, forces, energy, electricity and the physical world.',
      level: 'Secondary School',
      lessons: 20,
    },
    {
      icon: '🧪',
      title: 'Chemistry',
      description:
        'Learn about matter, elements, reactions and chemical processes.',
      level: 'Secondary School',
      lessons: 22,
    },
    {
      icon: '🧬',
      title: 'Biology',
      description:
        'Explore cells, organisms, ecosystems and human biology.',
      level: 'Secondary School',
      lessons: 26,
    },
    {
      icon: '💻',
      title: 'Technology',
      description:
        'Develop digital skills, computational thinking and innovation.',
      level: 'Secondary School',
      lessons: 18,
    },
    {
      icon: '🔬',
      title: 'STEM Projects',
      description:
        'Apply STEM knowledge through practical projects and challenges.',
      level: 'Project Based',
      lessons: 12,
    },
  ]

  function handleSelectCourse(course) {
    onSelectCourse(course)

    setTimeout(() => {
      document
        .getElementById('course-details')
        ?.scrollIntoView({
          behavior: 'smooth',
        })
    }, 50)
  }

  return (
    <section
      className="courses-section"
      id="courses"
    >
      <div className="courses-header">
        <p className="eyebrow">
          STEM Courses
        </p>

        <h2>
          Explore your learning journey
        </h2>

        <p>
          Discover curriculum-aligned STEM courses designed
          to help you understand concepts, practise skills
          and solve real-world problems.
        </p>
      </div>

      <div className="course-grid">

        {courses.map((course) => (
          <article
            className="course-card"
            key={course.title}
          >
            <div className="course-card-icon">
              {course.icon}
            </div>

            <div className="course-card-content">

              <span className="course-level">
                {course.level}
              </span>

              <h3>
                {course.title}
              </h3>

              <p>
                {course.description}
              </p>

              <div className="course-card-footer">

                <span>
                  📚 {course.lessons} lessons
                </span>

                <button
                  type="button"
                  onClick={() =>
                    handleSelectCourse(course)
                  }
                >
                  Start Course
                </button>

              </div>
            </div>
          </article>
        ))}

      </div>
    </section>
  )
}

export default Courses