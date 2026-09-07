function Courses({ onSelectCourse, courses = [] }) {

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
