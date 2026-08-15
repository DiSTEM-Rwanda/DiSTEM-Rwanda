import { useState } from 'react'
import physicsLessons from '../data/physicsLessons'

function Lesson({
  lesson,
  onBack,
  onComplete,
  isCompleted,
}) {
  const [selectedAnswer, setSelectedAnswer] =
    useState(null)

  const [feedback, setFeedback] = useState('')

  if (!lesson) {
    return null
  }

  /*
   * Find the actual lesson in our
   * Physics lesson data.
   *
   * At the moment:
   *
   * Physics
   *   └── Motion
   *       └── Introduction to Linear Motion
   */

  const physicsLesson =
    physicsLessons.motion.lessons[0]

  /*
   * Safety fallback
   */

  if (!physicsLesson) {
    return (
      <section
        className="lesson-section"
        id="lesson"
      >
        <div className="lesson-header">
          <button
            type="button"
            className="lesson-back-button"
            onClick={onBack}
          >
            ← Back to Course
          </button>

          <p className="eyebrow">
            {lesson.course}
          </p>

          <h2>{lesson.topic}</h2>

          <p className="lesson-intro">
            Lesson content is not available yet.
          </p>
        </div>
      </section>
    )
  }

  /*
   * Find individual lesson sections.
   */

  const introductionSection =
    physicsLesson.sections.find(
      (section) =>
        section.type === 'introduction'
    )

  const conceptSections =
    physicsLesson.sections.filter(
      (section) =>
        section.type === 'concept'
    )

  const exampleSection =
    physicsLesson.sections.find(
      (section) =>
        section.type === 'example'
    )

  const practiceSection =
    physicsLesson.sections.find(
      (section) =>
        section.type === 'practice'
    )

  const summarySection =
    physicsLesson.sections.find(
      (section) =>
        section.type === 'summary'
    )

  /*
   * Practice answer handling
   */

  function handleAnswer(answer) {
    setSelectedAnswer(answer)

    if (
      answer ===
      practiceSection?.correctAnswer
    ) {
      setFeedback(
        practiceSection.feedback?.correct ||
          'Excellent! Your answer is correct. Keep going!'
      )
    } else {
      setFeedback(
        practiceSection.feedback?.incorrect ||
          'Not quite. Review the lesson and try again.'
      )
    }
  }

  /*
   * Complete lesson
   */

  function handleComplete() {
    if (onComplete && !isCompleted) {
      onComplete({
        course: lesson.course,
        topic: lesson.topic,
      })
    }
  }

  return (
    <section
      className="lesson-section"
      id="lesson"
    >

      {/* =========================
          LESSON HEADER
      ========================= */}

      <div className="lesson-header">

        <button
          type="button"
          className="lesson-back-button"
          onClick={onBack}
        >
          ← Back to Course
        </button>

        <p className="eyebrow">
          {physicsLesson.course}
        </p>

        <h2>
          {physicsLesson.topic}
        </h2>

        <p className="lesson-intro">
          Learn the key concepts, explore
          examples and practise what you
          have learned.
        </p>

      </div>


      {/* =========================
          LESSON OBJECTIVES
      ========================= */}

      {physicsLesson.objectives?.length > 0 && (
        <article className="lesson-content-card">

          <span className="lesson-icon">
            🎯
          </span>

          <p className="eyebrow">
            Learning Objectives
          </p>

          <h3>
            By the end of this lesson, you
            should be able to:
          </h3>

          <ul className="lesson-summary">
            {physicsLesson.objectives.map(
              (objective) => (
                <li key={objective}>
                  {objective}
                </li>
              )
            )}
          </ul>

        </article>
      )}


      {/* =========================
          LESSON PROGRESS
      ========================= */}

      <div className="lesson-progress-card">

        <div className="lesson-progress-header">

          <span>
            Lesson Progress
          </span>

          <strong>
            {isCompleted ? '100%' : '25%'}
          </strong>

        </div>

        <div className="progress-bar">

          <div
            className="progress-fill"
            style={{
              width: isCompleted
                ? '100%'
                : '25%',
            }}
          ></div>

        </div>

      </div>


      {/* =========================
          LESSON CONTENT
      ========================= */}

      <div className="lesson-content">

        {/* INTRODUCTION */}

        {introductionSection && (
          <article className="lesson-content-card">

            <span className="lesson-icon">
              📖
            </span>

            <p className="eyebrow">
              01 • Introduction
            </p>

            <h3>
              {introductionSection.title}
            </h3>

            {introductionSection.content.map(
              (paragraph) => (
                <p key={paragraph}>
                  {paragraph}
                </p>
              )
            )}

          </article>
        )}


        {/* KEY CONCEPTS */}

        {conceptSections.map(
          (section, index) => (
            <article
              className="lesson-content-card"
              key={section.title}
            >

              <span className="lesson-icon">
                💡
              </span>

              <p className="eyebrow">
                02 • Key Concept{' '}
                {index + 1}
              </p>

              <h3>
                {section.title}
              </h3>

              {section.content.map(
                (paragraph) => (
                  <p key={paragraph}>
                    {paragraph}
                  </p>
                )
              )}

              {section.formula && (
                <div className="formula-box">
                  <span>
                    {section.formula}
                  </span>
                </div>
              )}

              {section.remember && (
                <div className="lesson-definition">

                  <strong>
                    Remember:
                  </strong>

                  <p>
                    {section.remember}
                  </p>

                </div>
              )}

            </article>
          )
        )}


        {/* WORKED EXAMPLE */}

        {exampleSection && (
          <article className="lesson-content-card">

            <span className="lesson-icon">
              🧮
            </span>

            <p className="eyebrow">
              03 • Worked Example
            </p>

            <h3>
              {exampleSection.title}
            </h3>

            <p>
              <strong>
                Problem:
              </strong>
            </p>

            <p>
              {exampleSection.problem}
            </p>

            <div className="example-answer">

              <strong>
                Solution
              </strong>

              {exampleSection.solution.map(
                (step) => (
                  <p key={step}>
                    {step}
                  </p>
                )
              )}

            </div>

          </article>
        )}


        {/* PRACTICE */}

        {practiceSection && (
          <article className="lesson-content-card practice-card">

            <span className="lesson-icon">
              🧠
            </span>

            <p className="eyebrow">
              04 • Practice
            </p>

            <h3>
              {practiceSection.title}
            </h3>

            <p>
              {practiceSection.question}
            </p>

            <div className="practice-options">

              {practiceSection.options.map(
                (option) => (
                  <button
                    key={option}
                    type="button"
                    className={
                      selectedAnswer === option
                        ? 'selected'
                        : ''
                    }
                    onClick={() =>
                      handleAnswer(option)
                    }
                  >
                    {option}
                  </button>
                )
              )}

            </div>

            {feedback && (
              <div
                className={
                  selectedAnswer ===
                  practiceSection.correctAnswer
                    ? 'practice-feedback correct'
                    : 'practice-feedback'
                }
                role="status"
              >
                {feedback}
              </div>
            )}

          </article>
        )}


        {/* SUMMARY */}

        {summarySection && (
          <article className="lesson-content-card">

            <span className="lesson-icon">
              📝
            </span>

            <p className="eyebrow">
              05 • Summary
            </p>

            <h3>
              {summarySection.title}
            </h3>

            <ul className="lesson-summary">

              {summarySection.points.map(
                (point) => (
                  <li key={point}>
                    {point}
                  </li>
                )
              )}

            </ul>

          </article>
        )}

      </div>


      {/* =========================
          LESSON COMPLETION
      ========================= */}

      <div className="lesson-completion">

        <span className="lesson-completion-icon">
          {isCompleted ? '✅' : '🚀'}
        </span>

        <div>

          <p className="eyebrow">
            {isCompleted
              ? 'Lesson completed'
              : 'Ready for the next step?'}
          </p>

          <h3>
            {isCompleted
              ? 'Great work!'
              : 'Complete this lesson'}
          </h3>

          <p>
            {isCompleted
              ? 'Your progress has been saved. Keep building your STEM knowledge.'
              : 'Finish the lesson and continue building your STEM knowledge.'}
          </p>

        </div>

        <button
          type="button"
          className="start-course-button"
          onClick={handleComplete}
          disabled={isCompleted}
        >
          {isCompleted
            ? '✓ Completed'
            : 'Complete Lesson'}
        </button>

      </div>

    </section>
  )
}

export default Lesson