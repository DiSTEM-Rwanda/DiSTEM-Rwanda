import { useState } from 'react'
import physicsLessons from '../data/physicsLessons'

function Lesson({
  lesson,
  onBack,
  onComplete,
  isCompleted,
}) {
  const [currentConcept, setCurrentConcept] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [feedback, setFeedback] = useState('')

  if (!lesson) {
    return null
  }

  /*
 * Find the actual Physics lesson selected
 * from the Course Details screen.
 */
/*
 * Find the selected lesson inside the Physics units.
 *
 * Physics is organized into units such as:
 * motion, forces, energy and electricity.
 */
const physicsLesson = Object.values(
  physicsLessons
)
  .flatMap((unit) => unit.lessons || [])
  .find(
    (item) =>
      item.topic?.trim() === lesson.topic?.trim()
  )
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
   * Build the learner's concept sequence.
   *
   * Every item represents one stage
   * of the learning experience.
   */
  const concepts = [
    {
      id: 'objectives',
      title: 'Learning Objectives',
      shortTitle: 'Objectives',
      icon: '🎯',
      type: 'objectives',
    },

    ...(introductionSection
      ? [
          {
            id: 'introduction',
            title: introductionSection.title,
            shortTitle: 'Introduction',
            icon: '📖',
            type: 'introduction',
            data: introductionSection,
          },
        ]
      : []),

    ...conceptSections.map(
      (section, index) => ({
        id: `concept-${index}`,
        title: section.title,
        shortTitle: `Concept ${index + 1}`,
        icon: '💡',
        type: 'concept',
        data: section,
      })
    ),

    ...(exampleSection
      ? [
          {
            id: 'example',
            title: exampleSection.title,
            shortTitle: 'Worked Example',
            icon: '🧮',
            type: 'example',
            data: exampleSection,
          },
        ]
      : []),

    ...(practiceSection
      ? [
          {
            id: 'practice',
            title: practiceSection.title,
            shortTitle: 'Practice',
            icon: '🧠',
            type: 'practice',
            data: practiceSection,
          },
        ]
      : []),

    ...(summarySection
      ? [
          {
            id: 'summary',
            title: summarySection.title,
            shortTitle: 'Summary',
            icon: '📝',
            type: 'summary',
            data: summarySection,
          },
        ]
      : []),

    {
      id: 'complete',
      title: 'Complete Lesson',
      shortTitle: 'Complete',
      icon: '🚀',
      type: 'complete',
    },
  ]

  const totalConcepts = concepts.length

  const currentStage =
    concepts[currentConcept]

  const isFirstConcept =
    currentConcept === 0

  const isLastConcept =
    currentConcept === totalConcepts - 1

  /*
   * Calculate progress.
   *
   * The learner reaches 100% only
   * after reaching the final stage.
   */
  const progressPercentage = Math.round(
    ((currentConcept + 1) /
      totalConcepts) *
      100
  )

  /*
   * Practice answer handling.
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
   * Move to the next concept.
   *
   * Practice must be answered correctly
   * before the learner can continue.
   */
  function handleNext() {
    if (currentStage.type === 'practice') {
      if (
        selectedAnswer !==
        practiceSection?.correctAnswer
      ) {
        setFeedback(
          'Please answer the practice question correctly before continuing.'
        )

        return
      }
    }

    if (!isLastConcept) {
      setCurrentConcept(
        (previous) => previous + 1
      )

      setSelectedAnswer(null)
      setFeedback('')

      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  }

  /*
   * Move to the previous concept.
   */
  function handlePrevious() {
    if (!isFirstConcept) {
      setCurrentConcept(
        (previous) => previous - 1
      )

      setSelectedAnswer(null)
      setFeedback('')

      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  }

  /*
   * Complete the lesson.
   *
   * This only becomes available on the
   * final Complete Lesson stage.
   */
  function handleComplete() {
    if (!onComplete) {
      return
    }

    if (isCompleted) {
      return
    }

    onComplete({
      course: lesson.course,
      topic: lesson.topic,
    })
  }

  /*
   * Render the current concept.
   */
  function renderConcept() {
    if (!currentStage) {
      return null
    }

    /*
     * LEARNING OBJECTIVES
     */
    if (currentStage.type === 'objectives') {
      return (
        <article className="lesson-content-card">
          <span className="lesson-icon">
            🎯
          </span>

          <p className="eyebrow">
            01 • Learning Objectives
          </p>

          <h3>
            By the end of this lesson, you
            should be able to:
          </h3>

          <ul className="lesson-summary">
            {physicsLesson.objectives?.map(
              (objective) => (
                <li key={objective}>
                  {objective}
                </li>
              )
            )}
          </ul>
        </article>
      )
    }

    /*
     * INTRODUCTION
     */
    if (
      currentStage.type === 'introduction'
    ) {
      return (
        <article className="lesson-content-card">
          <span className="lesson-icon">
            📖
          </span>

          <p className="eyebrow">
            02 • Introduction
          </p>

          <h3>
            {currentStage.data.title}
          </h3>

          {currentStage.data.content.map(
            (paragraph) => (
              <p key={paragraph}>
                {paragraph}
              </p>
            )
          )}
        </article>
      )
    }

    /*
     * KEY CONCEPT
     */
    if (currentStage.type === 'concept') {
      const section = currentStage.data

      return (
        <article className="lesson-content-card">
          <span className="lesson-icon">
            💡
          </span>

          <p className="eyebrow">
            Key Concept
          </p>

          <h3>{section.title}</h3>

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
    }

    /*
     * WORKED EXAMPLE
     */
    if (currentStage.type === 'example') {
      const section = currentStage.data

      return (
        <article className="lesson-content-card">
          <span className="lesson-icon">
            🧮
          </span>

          <p className="eyebrow">
            Worked Example
          </p>

          <h3>{section.title}</h3>

          <p>
            <strong>
              Problem:
            </strong>
          </p>

          <p>{section.problem}</p>

          <div className="example-answer">
            <strong>
              Solution
            </strong>

            {section.solution.map(
              (step) => (
                <p key={step}>
                  {step}
                </p>
              )
            )}
          </div>
        </article>
      )
    }

    /*
     * PRACTICE
     */
    if (currentStage.type === 'practice') {
      const section = currentStage.data

      return (
        <article className="lesson-content-card practice-card">
          <span className="lesson-icon">
            🧠
          </span>

          <p className="eyebrow">
            Practice
          </p>

          <h3>{section.title}</h3>

          <p>{section.question}</p>

          <div className="practice-options">
            {section.options.map(
              (option) => (
                <button
                  key={option}
                  type="button"
                  className={
                    selectedAnswer ===
                    option
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
                section.correctAnswer
                  ? 'practice-feedback correct'
                  : 'practice-feedback'
              }
              role="status"
            >
              {feedback}
            </div>
          )}
        </article>
      )
    }

    /*
     * SUMMARY
     */
    if (currentStage.type === 'summary') {
      const section = currentStage.data

      return (
        <article className="lesson-content-card">
          <span className="lesson-icon">
            📝
          </span>

          <p className="eyebrow">
            Summary
          </p>

          <h3>{section.title}</h3>

          <ul className="lesson-summary">
            {section.points.map(
              (point) => (
                <li key={point}>
                  {point}
                </li>
              )
            )}
          </ul>
        </article>
      )
    }

    /*
     * COMPLETE LESSON
     */
    if (currentStage.type === 'complete') {
      return (
        <div className="lesson-completion">
          <span className="lesson-completion-icon">
            {isCompleted ? '✅' : '🚀'}
          </span>

          <div>
            <p className="eyebrow">
              {isCompleted
                ? 'Lesson completed'
                : 'Ready to finish?'}
            </p>

            <h3>
              {isCompleted
                ? 'Great work!'
                : 'Complete this lesson'}
            </h3>

            <p>
              {isCompleted
                ? 'Your progress has been saved. Keep building your STEM knowledge.'
                : 'You have reached the end of this lesson. Complete it to save your progress.'}
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
      )
    }

    return null
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
          Learn step by step, practise your
          knowledge and track your progress.
        </p>
      </div>

      {/* =========================
          LESSON PROGRESS
      ========================= */}

      <div className="lesson-progress-card">
        <div className="lesson-progress-header">
          <span>
            Lesson Progress
          </span>

          <strong>
            {progressPercentage}%
          </strong>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${progressPercentage}%`,
            }}
          ></div>
        </div>

        <div className="lesson-progress-meta">
          <span>
            Concept {currentConcept + 1} of{' '}
            {totalConcepts}
          </span>

          <span>
            {currentStage.shortTitle}
          </span>
        </div>
      </div>

      {/* =========================
          CONCEPT NAVIGATION
      ========================= */}

      <div className="lesson-concept-navigation">
        {concepts.map(
          (concept, index) => {
            const isCurrent =
              index === currentConcept

            const isPast =
              index < currentConcept

            return (
              <button
                key={concept.id}
                type="button"
                className={[
                  'lesson-concept-step',
                  isCurrent
                    ? 'current'
                    : '',
                  isPast
                    ? 'completed'
                    : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                onClick={() => {
                  /*
                   * For Version 1, learners can
                   * move backwards or revisit
                   * already viewed concepts.
                   *
                   * Future version will persist
                   * this progress in localStorage.
                   */
                  if (
                    index <= currentConcept
                  ) {
                    setCurrentConcept(
                      index
                    )

                    setSelectedAnswer(null)
                    setFeedback('')

                    window.scrollTo({
                      top: 0,
                      behavior: 'smooth',
                    })
                  }
                }}
              >
                <span>
                  {isPast
                    ? '✓'
                    : index + 1}
                </span>

                <small>
                  {concept.shortTitle}
                </small>
              </button>
            )
          }
        )}
      </div>

      {/* =========================
          CURRENT CONCEPT
      ========================= */}

      <div className="lesson-content">
        {renderConcept()}
      </div>

      {/* =========================
          PREVIOUS / NEXT
      ========================= */}

      <div className="lesson-navigation">
        <button
          type="button"
          className="lesson-navigation-button"
          onClick={handlePrevious}
          disabled={isFirstConcept}
        >
          ← Previous
        </button>

        <div className="lesson-navigation-current">
          <strong>
            {currentStage.icon}{' '}
            {currentStage.shortTitle}
          </strong>

          <span>
            {currentConcept + 1} /{' '}
            {totalConcepts}
          </span>
        </div>

        {!isLastConcept && (
          <button
            type="button"
            className="lesson-navigation-button primary"
            onClick={handleNext}
          >
            Next →
          </button>
        )}
      </div>
    </section>
  )
}

export default Lesson