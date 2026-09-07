function CourseDetails({ course, onStartLesson, onOpenVirtualLab, hasRelatedExperiments = false, completedLessons = [], progress = 0 }) {
  if (!course) {
    return null
  }

  /*
   * ============================================================
   * COURSE LESSONS
   * ============================================================
   *
   * App.jsx provides the real lessons through:
   *
   * course.lessons
   *
   * This keeps CourseDetails independent from individual
   * subject data files.
   */

  const lessons = Array.isArray(course.lessons)
    ? course.lessons
    : []

  /*
   * ============================================================
   * GROUP LESSONS INTO UNITS
   * ============================================================
   *
   * Real lesson data normally contains unit information through
   * the structure supplied by the subject data file.
   *
   * If App.jsx has already supplied grouped data, use it.
   * Otherwise create one unit from course.topics / lessons.
   */

  let courseUnits = []

  if (Array.isArray(course.units) && course.units.length > 0) {
    courseUnits = course.units
  } else {
    /*
     * Build units from lesson.unit when available.
     */

    const groupedUnits = []

    lessons.forEach((lesson) => {
      const unitName =
        lesson.unit ||
        lesson.unitTitle ||
        'Course Lessons'

      let existingUnit = groupedUnits.find(
        (unit) => unit.unit === unitName
      )

      if (!existingUnit) {
        existingUnit = {
          unit: unitName,
          lessons: [],
        }

        groupedUnits.push(existingUnit)
      }

      existingUnit.lessons.push(lesson)
    })

    courseUnits = groupedUnits

    /*
     * If no unit information exists, keep all lessons together.
     */

    if (courseUnits.length === 0 && lessons.length > 0) {
      courseUnits = [
        {
          unit: course.title,
          lessons,
        },
      ]
    }
  }

  /*
   * ============================================================
   * TOTAL LESSONS
   * ============================================================
   */

  const totalLessons = courseUnits.reduce(
    (total, unit) =>
      total +
      (Array.isArray(unit?.lessons)
        ? unit.lessons.length
        : 0),
    0
  )

  /*
   * ============================================================
   * CREATE FALLBACK LESSON ID
   * ============================================================
   */

  function createLessonId(value) {
    const safeValue =
      value ||
      'lesson'

    return `${course.title}-${safeValue}`
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
  }

  /*
   * ============================================================
   * START LESSON
   * ============================================================
   */

  function handleStartLesson(lesson) {
    if (!onStartLesson || !lesson) {
      return
    }

    const lessonTitle =
      lesson.title ||
      lesson.topic ||
      'Untitled Lesson'

    const lessonTopic =
      lesson.topic ||
      lesson.title ||
      'Untitled Lesson'

    /*
     * IMPORTANT:
     *
     * Preserve the real lesson ID whenever one exists.
     *
     * This is especially important for Chemistry, Physics,
     * Mathematics and Biology lesson data.
     */

    const lessonId =
      lesson.id ||
      createLessonId(lessonTopic)

    onStartLesson({
      ...lesson,

      id: lessonId,

      course:
        lesson.course ||
        course.title,

      topic:
        lessonTopic,

      title:
        lessonTitle,

      description:
        lesson.description ||
        '',
    })
  }

  /*
   * ============================================================
   * START COURSE
   * ============================================================
   */

  function handleStartCourse() {
    if (!onStartLesson) {
      return
    }

    if (!courseUnits.length) {
      return
    }

    const firstUnit = courseUnits[0]

    if (
      !firstUnit ||
      !Array.isArray(firstUnit.lessons) ||
      firstUnit.lessons.length === 0
    ) {
      return
    }

    handleStartLesson(
      firstUnit.lessons[0]
    )
  }

  /*
   * ============================================================
   * RENDER
   * ============================================================
   */

  let lessonNumber = 0

  return (
    <section
      className="course-details-section"
      id="course-details"
    >
      {/* ======================================================
          COURSE HERO
          ====================================================== */}

      <div className="course-details-hero">
        <div className="course-details-icon">
          {course.icon}
        </div>

        <div>
          <p className="eyebrow">
            {course.level}
          </p>

          <h2>
            {course.title}
          </h2>

          <p>
            {course.description}
          </p>

          <div className="course-meta">
            <span>
              📚 {totalLessons} lessons
            </span>

            <span>
              🌐 Offline Ready
            </span>

            <span>
              🎓 Secondary School
            </span>
          </div>
        </div>
      </div>

      {/* ======================================================
          COURSE CONTENT
          ====================================================== */}

      <div className="course-details-content">

        {/* ====================================================
            COURSE OVERVIEW
            ==================================================== */}

        <div className="course-overview">
          <h3>
            Course Overview
          </h3>

          <div className="topic-list">

            {courseUnits.length === 0 ? (
              <div className="course-empty-state">
                <p>
                  No lessons are available for this course yet.
                </p>
              </div>
            ) : (
              courseUnits.map(
                (unit, unitIndex) => (
                  <div
                    className="course-unit"
                    key={`${course.id}-unit-${unitIndex}`}
                  >
                    <h3 className="course-unit-title">
                      {unit.unit ||
                        unit.title ||
                        `Unit ${unitIndex + 1}`}
                    </h3>

                    {(
                      Array.isArray(unit.lessons)
                        ? unit.lessons
                        : []
                    ).map(
                      (lesson, lessonIndex) => {
                        lessonNumber += 1

                        const lessonId =
                          lesson.id ||
                          createLessonId(
                            lesson.topic ||
                            lesson.title ||
                            `lesson-${lessonNumber}`
                          )

                        const isCompleted = completedLessons.includes(lessonId)

                        return (
                          <div
                            className={`topic-item ${isCompleted ? 'is-completed' : ''}`}
                            key={`${lessonId}-${unitIndex}-${lessonIndex}`}
                          >
                            <span className="topic-number">
                              {isCompleted ? '✓' : lessonNumber}
                            </span>

                            <div>
                              <h4>
                                {lesson.title ||
                                  lesson.topic ||
                                  `Lesson ${lessonNumber}`}
                              </h4>

                              <p>
                                {lesson.description ||
                                  'Learn and explore this topic.'}
                              </p>
                            </div>

                            <button
                              type="button"
                              onClick={() =>
                                handleStartLesson(
                                  lesson
                                )
                              }
                              disabled={
                                !onStartLesson
                              }
                            >
                              {isCompleted ? 'Review Lesson' : 'Start Lesson'}
                            </button>
                          </div>
                        )
                      }
                    )}
                  </div>
                )
              )
            )}

          </div>
        </div>

        {/* ====================================================
            COURSE PROGRESS CARD
            ==================================================== */}

        <div className="course-progress-card">

          <span className="course-progress-icon">
            🚀
          </span>

          <h3>
            Ready to learn?
          </h3>

          <p>
            Start exploring this course and build
            your STEM knowledge step by step.
          </p>

          <div className="course-progress">

            <div className="progress-label">
              <span>
                Course Progress
              </span>

              <span>{progress}%</span>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>

          </div>

          <button
            type="button"
            className="start-course-button"
            onClick={handleStartCourse}
            disabled={
              courseUnits.length === 0 ||
              !onStartLesson
            }
          >
            Start Course
          </button>

          {hasRelatedExperiments && (
            <div className="related-lab-experiments">
              <h4>Related Virtual Laboratory</h4>
              <p>Explore these offline interactive experiments for {course.title}.</p>
              <button
                type="button"
                className="related-lab-button"
                onClick={onOpenVirtualLab}
                disabled={!onOpenVirtualLab}
              >
                Open {course.title} experiments
              </button>
            </div>
          )}

        </div>
      </div>
    </section>
  )
}

export default CourseDetails
