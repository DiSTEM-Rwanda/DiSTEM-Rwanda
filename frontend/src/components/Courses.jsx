function Courses({ onSelectCourse, courses: suppliedCourses }) {
  const fallbackCourses = [
    {
      id: 'mathematics',
      icon: '📐',
      title: 'Mathematics',
      description:
        'Explore numbers, algebra, geometry, statistics and problem-solving.',
      level: 'Secondary School',
      lessons: 24,
    },
    {
      id: 'physics',
      icon: '⚡',
      title: 'Physics',
      description:
        'Discover motion, forces, energy, electricity and the physical world.',
      level: 'Secondary School',
      lessons: 20,
    },
    {
      id: 'chemistry',
      icon: '🧪',
      title: 'Chemistry',
      description:
        'Learn about matter, elements, reactions and chemical processes.',
      level: 'Secondary School',
      lessons: 22,
    },
    {
      id: 'biology',
      icon: '🧬',
      title: 'Biology',
      description:
        'Explore cells, organisms, ecosystems and human biology.',
      level: 'Secondary School',
      lessons: 26,
    },
    {
      id: 'technology',
      icon: '💻',
      title: 'Technology',
      description:
        'Develop digital skills, computational thinking and innovation.',
      level: 'Secondary School',
      lessons: 18,
    },
    {
      id: 'stem-projects',
      icon: '🔬',
      title: 'STEM Projects',
      description:
        'Apply STEM knowledge through practical projects and challenges.',
      level: 'Project Based',
      lessons: 12,
    },
  ]

  const courses = suppliedCourses?.length ? suppliedCourses : fallbackCourses

  return (
    <section id="courses" className="courses-section">
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
            key={course.id}
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
                  onClick={() => onSelectCourse(course)}
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
