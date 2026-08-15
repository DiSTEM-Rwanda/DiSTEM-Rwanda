function Dashboard({
  completedLessons = [],
  calculateCourseProgress,
}) {
  const completedCount = completedLessons.length

  function getCourseProgress(courseName) {
    if (calculateCourseProgress) {
      return calculateCourseProgress(courseName)
    }

    return 0
  }

  const mathematicsProgress =
    getCourseProgress('Mathematics')

  const physicsProgress =
    getCourseProgress('Physics')

  const chemistryProgress =
    getCourseProgress('Chemistry')

  const biologyProgress =
    getCourseProgress('Biology')

  const technologyProgress =
    getCourseProgress('Technology')

  const stemProjectsProgress =
    getCourseProgress('STEM Projects')

  const totalLessons = 24

  const overallProgress =
    totalLessons > 0
      ? Math.round(
          (completedCount / totalLessons) * 100
        )
      : 0

  function handleExploreCourses() {
    document
      .getElementById('courses')
      ?.scrollIntoView({
        behavior: 'smooth',
      })
  }

  return (
    <section
      className="dashboard-section"
      id="dashboard"
    >
      {/* Dashboard Header */}
      <div className="dashboard-header">
        <div>
          <p className="eyebrow">
            Student Dashboard
          </p>

          <h2>
            Welcome back! 👋
          </h2>

          <p>
            Continue learning, track your progress and
            build your STEM skills step by step.
          </p>
        </div>

        <div className="offline-status">
          <span className="status-dot"></span>
          Offline Ready
        </div>
      </div>

      {/* Dashboard Statistics */}
      <div className="dashboard-stats">

        <div className="stat-card">
          <span>📚</span>

          <strong>6</strong>

          <p>
            Available Courses
          </p>
        </div>

        <div className="stat-card">
          <span>✅</span>

          <strong>
            {completedCount}
          </strong>

          <p>
            Lessons Completed
          </p>
        </div>

        <div className="stat-card">
          <span>📈</span>

          <strong>
            {overallProgress}%
          </strong>

          <p>
            Learning Progress
          </p>
        </div>

        <div className="stat-card">
          <span>🔥</span>

          <strong>
            {completedCount > 0 ? '1' : '0'}
          </strong>

          <p>
            Learning Streak
          </p>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="dashboard-content">

        {/* Course Progress */}
        <div className="dashboard-card">

          <div className="card-heading">
            <div>
              <p className="eyebrow">
                Continue Learning
              </p>

              <h3>
                Your Courses
              </h3>
            </div>

            <button
              type="button"
              onClick={handleExploreCourses}
            >
              View All
            </button>
          </div>

          <div className="course-list">

            {/* Mathematics */}
            <div className="course-item">
              <div className="course-icon">
                🧮
              </div>

              <div>
                <h4>
                  Mathematics
                </h4>

                <p>
                  Algebra, geometry, statistics and
                  problem solving.
                </p>

                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{
                      width: `${mathematicsProgress}%`,
                    }}
                  ></div>
                </div>

                <small>
                  {mathematicsProgress}% complete
                </small>
              </div>
            </div>

            {/* Physics */}
            <div className="course-item">
              <div className="course-icon">
                ⚛️
              </div>

              <div>
                <h4>
                  Physics
                </h4>

                <p>
                  Motion, forces, energy and electricity.
                </p>

                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{
                      width: `${physicsProgress}%`,
                    }}
                  ></div>
                </div>

                <small>
                  {physicsProgress}% complete
                </small>
              </div>
            </div>

            {/* Chemistry */}
            <div className="course-item">
              <div className="course-icon">
                🧪
              </div>

              <div>
                <h4>
                  Chemistry
                </h4>

                <p>
                  Matter, elements, reactions and
                  acids and bases.
                </p>

                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{
                      width: `${chemistryProgress}%`,
                    }}
                  ></div>
                </div>

                <small>
                  {chemistryProgress}% complete
                </small>
              </div>
            </div>

            {/* Biology */}
            <div className="course-item">
              <div className="course-icon">
                🧬
              </div>

              <div>
                <h4>
                  Biology
                </h4>

                <p>
                  Cells, organisms, ecosystems and
                  human biology.
                </p>

                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{
                      width: `${biologyProgress}%`,
                    }}
                  ></div>
                </div>

                <small>
                  {biologyProgress}% complete
                </small>
              </div>
            </div>

            {/* Technology */}
            <div className="course-item">
              <div className="course-icon">
                💻
              </div>

              <div>
                <h4>
                  Technology
                </h4>

                <p>
                  Digital skills, programming and
                  computational thinking.
                </p>

                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{
                      width: `${technologyProgress}%`,
                    }}
                  ></div>
                </div>

                <small>
                  {technologyProgress}% complete
                </small>
              </div>
            </div>

            {/* STEM Projects */}
            <div className="course-item">
              <div className="course-icon">
                🚀
              </div>

              <div>
                <h4>
                  STEM Projects
                </h4>

                <p>
                  Design, investigation, building and
                  project presentation.
                </p>

                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{
                      width: `${stemProjectsProgress}%`,
                    }}
                  ></div>
                </div>

                <small>
                  {stemProjectsProgress}% complete
                </small>
              </div>
            </div>

          </div>
        </div>

        {/* Learning Activity */}
        <div className="dashboard-card">

          <div className="card-heading">
            <div>
              <p className="eyebrow">
                Learning Activity
              </p>

              <h3>
                Recent Progress
              </h3>
            </div>
          </div>

          <div className="assessment-list">

            {completedCount === 0 ? (
              <div className="assessment-item">
                <div>
                  <strong>
                    No completed lessons yet
                  </strong>

                  <p>
                    Start your first lesson to begin
                    tracking your progress.
                  </p>
                </div>

                <span className="score">
                  0%
                </span>
              </div>
            ) : (
              <div className="assessment-item">
                <div>
                  <strong>
                    Learning progress updated
                  </strong>

                  <p>
                    Your completed lessons have been
                    saved successfully.
                  </p>
                </div>

                <span className="score">
                  ✓
                </span>
              </div>
            )}

            <div className="assessment-item">
              <div>
                <strong>
                  Completed Lessons
                </strong>

                <p>
                  Total lessons completed
                </p>
              </div>

              <span className="score">
                {completedCount}
              </span>
            </div>

          </div>
        </div>
      </div>

      {/* Recommendation */}
      <div className="dashboard-card recommendation-card">

        <p className="eyebrow">
          Recommended For You
        </p>

        <h3>
          Keep building your STEM skills 🚀
        </h3>

        <p>
          Continue exploring DiSTEM Rwanda lessons and
          practise what you learn. Every lesson brings
          you one step closer to becoming future ready.
        </p>

        <button
          type="button"
          onClick={handleExploreCourses}
        >
          Explore Courses
        </button>
      </div>
    </section>
  )
}

export default Dashboard