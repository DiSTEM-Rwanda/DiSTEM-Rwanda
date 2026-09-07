import { useEffect, useMemo, useState } from 'react'

/*
|--------------------------------------------------------------------------
| Helpers
|--------------------------------------------------------------------------
*/

function isObject(value) {
  return (
    value !== null &&
    typeof value === 'object' &&
    !Array.isArray(value)
  )
}

function getSectionIcon(type) {
  const icons = {
    objective: '🎯',
    introduction: '📖',
    concept: '💡',
    definition: '📘',
    vocabulary: '📚',
    illustration: '🎨',
    drawing: '✏️',
    diagram: '🔬',
    example: '🧠',
    workedExample: '🧠',
    practice: '✏️',
    activity: '🧪',
    experiment: '🧪',
    formula: '📐',
    comparison: '⚖️',
    table: '📊',
    summary: '📌',
    conclusion: '🎓',
    video: '🎥',
    simulation: '🧪',
  }

  return icons[type] || '📚'
}

function getTypeLabel(type) {
  const labels = {
    objective: 'Learning Objectives',
    introduction: 'Introduction',
    concept: 'Concept',
    definition: 'Definition',
    vocabulary: 'Vocabulary',
    illustration: 'Illustration',
    drawing: 'Drawing',
    diagram: 'Diagram',
    example: 'Worked Example',
    workedExample: 'Worked Example',
    practice: 'Practice',
    activity: 'Activity',
    experiment: 'Experiment',
    formula: 'Formula',
    comparison: 'Comparison',
    table: 'Table',
    summary: 'Summary',
    conclusion: 'Conclusion',
    video: 'Video',
    simulation: 'Simulation',
  }

  return labels[type] || 'Lesson Content'
}

/*
|--------------------------------------------------------------------------
| Rich Content
|--------------------------------------------------------------------------
*/

function RichContent({ content }) {
  if (
    content === null ||
    content === undefined ||
    content === ''
  ) {
    return null
  }

  if (
    typeof content === 'string' ||
    typeof content === 'number' ||
    typeof content === 'boolean'
  ) {
    return <p>{String(content)}</p>
  }

  if (Array.isArray(content)) {
    return (
      <div className="lesson-rich-list">
        {content.map((item, index) => {
          if (
            typeof item === 'string' ||
            typeof item === 'number' ||
            typeof item === 'boolean'
          ) {
            return (
              <p key={index}>
                {String(item)}
              </p>
            )
          }

          if (isObject(item)) {
            return (
              <div
                key={index}
                className="lesson-rich-item"
              >
                {item.title && (
                  <h4>{item.title}</h4>
                )}

                {item.text && (
                  <p>{item.text}</p>
                )}

                {item.description && (
                  <p>{item.description}</p>
                )}

                {item.items &&
                  Array.isArray(item.items) && (
                    <ul>
                      {item.items.map(
                        (subItem, subIndex) => (
                          <li key={subIndex}>
                            {typeof subItem ===
                            'object'
                              ? subItem.text ||
                                subItem.label ||
                                JSON.stringify(
                                  subItem
                                )
                              : String(subItem)}
                          </li>
                        )
                      )}
                    </ul>
                  )}
              </div>
            )
          }

          return null
        })}
      </div>
    )
  }

  if (isObject(content)) {
    return (
      <div className="lesson-rich-object">
        {content.title && (
          <h4>{content.title}</h4>
        )}

        {content.text && (
          <p>{content.text}</p>
        )}

        {content.description && (
          <p>{content.description}</p>
        )}

        {content.items &&
          Array.isArray(content.items) && (
            <ul>
              {content.items.map(
                (item, index) => (
                  <li key={index}>
                    {typeof item === 'object'
                      ? item.text ||
                        item.label ||
                        JSON.stringify(item)
                      : String(item)}
                  </li>
                )
              )}
            </ul>
          )}
      </div>
    )
  }

  return null
}

/*
|--------------------------------------------------------------------------
| Table
|--------------------------------------------------------------------------
*/

function normalizeTable(table, content) {
  if (
    table &&
    !Array.isArray(table) &&
    Array.isArray(table.headers) &&
    Array.isArray(table.rows)
  ) {
    return {
      headers: table.headers,
      rows: table.rows,
    }
  }

  if (Array.isArray(table)) {
    if (table.length < 2) {
      return null
    }

    return {
      headers: table[0],
      rows: table.slice(1),
    }
  }

  if (Array.isArray(content)) {
    const tableRows = content
      .filter(
        (item) =>
          typeof item === 'string' &&
          item.includes('|')
      )
      .map((row) =>
        row
          .split('|')
          .map((cell) => cell.trim())
      )

    if (tableRows.length >= 2) {
      return {
        headers: tableRows[0],
        rows: tableRows.slice(1),
      }
    }
  }

  return null
}

function LessonTable({ table, content }) {
  const normalized = normalizeTable(
    table,
    content
  )

  if (!normalized) {
    return null
  }

  return (
    <div className="lesson-table-wrapper">
      <table className="lesson-table">
        <thead>
          <tr>
            {normalized.headers.map(
              (header, index) => (
                <th key={index}>
                  {header}
                </th>
              )
            )}
          </tr>
        </thead>

        <tbody>
          {normalized.rows.map(
            (row, rowIndex) => (
              <tr key={rowIndex}>
                {normalized.headers.map(
                  (_, columnIndex) => (
                    <td key={columnIndex}>
                      {Array.isArray(row)
                        ? row[columnIndex] ?? ''
                        : String(row)}
                    </td>
                  )
                )}
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  )
}

/*
|--------------------------------------------------------------------------
| Illustration
|--------------------------------------------------------------------------
*/

function LessonIllustration({
  illustration,
  drawing,
  diagram,
}) {
  const visual =
    illustration ||
    drawing ||
    diagram

  if (!visual) {
    return null
  }

  if (typeof visual === 'string') {
    return (
      <div className="lesson-illustration">
        <div className="lesson-illustration-icon">
          🎨
        </div>

        <div>
          <p>{visual}</p>
        </div>
      </div>
    )
  }

  if (
    isObject(visual) &&
    visual.url
  ) {
    return (
      <figure className="lesson-illustration">
        <img
          src={visual.url}
          alt={
            visual.alt ||
            visual.title ||
            'Lesson illustration'
          }
          className="lesson-illustration-image"
        />

        {(visual.title ||
          visual.caption) && (
          <figcaption>
            {visual.title && (
              <strong>
                {visual.title}
              </strong>
            )}

            {visual.caption && (
              <span>
                {visual.caption}
              </span>
            )}
          </figcaption>
        )}
      </figure>
    )
  }

  if (
    isObject(visual) &&
    (visual.symbol || visual.emoji)
  ) {
    return (
      <div className="lesson-illustration">
        <div className="lesson-illustration-symbol">
          {visual.symbol ||
            visual.emoji}
        </div>

        <div>
          {visual.title && (
            <h3>{visual.title}</h3>
          )}

          {visual.description && (
            <p>
              {visual.description}
            </p>
          )}
        </div>
      </div>
    )
  }

  if (isObject(visual)) {
    return (
      <div className="lesson-illustration">
        <div className="lesson-illustration-icon">
          🔬
        </div>

        <div>
          {visual.title && (
            <h3>{visual.title}</h3>
          )}

          {visual.description && (
            <p>
              {visual.description}
            </p>
          )}
        </div>
      </div>
    )
  }

  return null
}

/*
|--------------------------------------------------------------------------
| Remember
|--------------------------------------------------------------------------
*/

function RememberBox({ text }) {
  if (!text) {
    return null
  }

  return (
    <div className="lesson-remember">
      <div className="remember-icon">
        💡
      </div>

      <div>
        <strong>Remember</strong>
        <p>{text}</p>
      </div>
    </div>
  )
}

/*
|--------------------------------------------------------------------------
| Formula
|--------------------------------------------------------------------------
*/

function FormulaBox({ formula }) {
  if (!formula) {
    return null
  }

  return (
    <div className="lesson-formula">
      <div className="formula-label">
        Formula / Key Relationship
      </div>

      <div className="formula-content">
        {formula}
      </div>
    </div>
  )
}

/*
|--------------------------------------------------------------------------
| Media
|--------------------------------------------------------------------------
*/

function LessonMedia({
  video,
  simulation,
}) {
  if (!video && !simulation) {
    return null
  }

  return (
    <div className="lesson-media">
      {video && (
        <article className="lesson-media-card">
          <div className="lesson-media-icon">
            🎥
          </div>

          <div>
            <span className="lesson-media-label">
              Video
            </span>

            <h3>
              {video.title ||
                'Video Lesson'}
            </h3>

            {video.description && (
              <p>
                {video.description}
              </p>
            )}

            {video.url && (
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="lesson-media-button"
              >
                Watch Video →
              </a>
            )}
          </div>
        </article>
      )}

      {simulation && (
        <article className="lesson-media-card">
          <div className="lesson-media-icon">
            🧪
          </div>

          <div>
            <span className="lesson-media-label">
              Simulation
            </span>

            <h3>
              {simulation.title ||
                'Interactive Simulation'}
            </h3>

            {simulation.description && (
              <p>
                {simulation.description}
              </p>
            )}

            {simulation.url && (
              <a
                href={simulation.url}
                target="_blank"
                rel="noopener noreferrer"
                className="lesson-media-button"
              >
                Open Simulation →
              </a>
            )}
          </div>
        </article>
      )}
    </div>
  )
}

/*
|--------------------------------------------------------------------------
| Worked Example
|--------------------------------------------------------------------------
*/

function WorkedExample({
  example,
}) {
  if (!example) {
    return null
  }

  const problem =
    example.problem ||
    example.question

  const solution =
    example.solution ||
    example.answer

  const steps =
    Array.isArray(example.steps)
      ? example.steps
      : Array.isArray(solution)
      ? solution
      : null

  return (
    <div className="lesson-example">
      {problem && (
        <div className="example-problem">
          <h3>🧩 Problem</h3>
          <RichContent
            content={problem}
          />
        </div>
      )}

      {steps ? (
        <div className="example-solution">
          <h3>✅ Solution</h3>

          <ol>
            {steps.map(
              (step, index) => (
                <li key={index}>
                  <RichContent
                    content={step}
                  />
                </li>
              )
            )}
          </ol>
        </div>
      ) : solution ? (
        <div className="example-solution">
          <h3>✅ Solution</h3>
          <RichContent
            content={solution}
          />
        </div>
      ) : null}

      {example.remember && (
        <RememberBox
          text={example.remember}
        />
      )}
    </div>
  )
}

/*
|--------------------------------------------------------------------------
| Practice
|--------------------------------------------------------------------------
*/

function PracticeContent({
  practice,
  selectedAnswer,
  answerSubmitted,
  onAnswer,
}) {
  if (!practice) {
    return null
  }

  const question =
    practice.question ||
    practice.prompt

  const options =
    Array.isArray(practice.options)
      ? practice.options
      : []

  const correctAnswer =
    practice.correctAnswer ??
    practice.answer

  const selectedIsCorrect =
    selectedAnswer === correctAnswer

  return (
    <div className="lesson-practice">
      <div className="practice-question">
        <span>Question</span>

        <RichContent
          content={question}
        />
      </div>

      {options.length > 0 && (
        <div className="practice-options">
          {options.map(
            (option, index) => {
              const value =
                isObject(option)
                  ? option.value ??
                    option.text ??
                    option.label
                  : option

              const label =
                isObject(option)
                  ? option.text ||
                    option.label ||
                    option.value
                  : option

              const isSelected =
                selectedAnswer === value

              const isCorrect =
                value === correctAnswer

              let className =
                'practice-option'

              if (
                answerSubmitted &&
                isCorrect
              ) {
                className +=
                  ' correct'
              }

              if (
                answerSubmitted &&
                isSelected &&
                !isCorrect
              ) {
                className +=
                  ' incorrect'
              }

              return (
                <button
                  key={index}
                  type="button"
                  className={className}
                  onClick={() =>
                    onAnswer(value)
                  }
                  disabled={
                    answerSubmitted
                  }
                >
                  <span className="option-letter">
                    {String.fromCharCode(
                      65 + index
                    )}
                  </span>

                  <span>
                    {label}
                  </span>

                  {answerSubmitted &&
                    isCorrect && (
                      <span className="answer-icon">
                        ✓
                      </span>
                    )}

                  {answerSubmitted &&
                    isSelected &&
                    !isCorrect && (
                      <span className="answer-icon">
                        ✕
                      </span>
                    )}
                </button>
              )
            }
          )}
        </div>
      )}

      {answerSubmitted && (
        <div
          className={`practice-feedback ${
            selectedIsCorrect
              ? 'correct'
              : 'incorrect'
          }`}
        >
          <strong>
            {selectedIsCorrect
              ? '🎉 Correct!'
              : '❌ Not quite'}
          </strong>

          <p>
            {selectedIsCorrect
              ? practice.feedback
                  ?.correct ||
                'Excellent work!'
              : practice.feedback
                  ?.incorrect ||
                'Review the concept and try again.'}
          </p>
        </div>
      )}
    </div>
  )
}

/*
|--------------------------------------------------------------------------
| Objectives
|--------------------------------------------------------------------------
*/

function ObjectivesContent({
  objectives,
}) {
  if (
    !Array.isArray(objectives) ||
    objectives.length === 0
  ) {
    return null
  }

  return (
    <div className="lesson-objectives-content">
      <ul>
        {objectives.map(
          (objective, index) => (
            <li key={index}>
              <span className="objective-number">
                {index + 1}
              </span>

              <span>
                {typeof objective ===
                'object'
                  ? objective.text ||
                    objective.title ||
                    JSON.stringify(
                      objective
                    )
                  : objective}
              </span>
            </li>
          )
        )}
      </ul>
    </div>
  )
}

/*
|--------------------------------------------------------------------------
| Summary
|--------------------------------------------------------------------------
*/

function SummaryContent({
  summary,
}) {
  if (!summary) {
    return null
  }

  if (Array.isArray(summary)) {
    return (
      <div className="lesson-summary">
        {summary.map(
          (point, index) => (
            <div
              className="summary-point"
              key={index}
            >
              <span>✓</span>

              <p>
                {typeof point ===
                'object'
                  ? point.text ||
                    point.title ||
                    JSON.stringify(
                      point
                    )
                  : point}
              </p>
            </div>
          )
        )}
      </div>
    )
  }

  if (typeof summary === 'string') {
    return (
      <div className="lesson-summary">
        <RichContent
          content={summary}
        />
      </div>
    )
  }

  if (isObject(summary)) {
    return (
      <div className="lesson-summary">
        {summary.title && (
          <h3>{summary.title}</h3>
        )}

        {summary.text && (
          <p>{summary.text}</p>
        )}

        {summary.description && (
          <p>
            {summary.description}
          </p>
        )}

        {Array.isArray(
          summary.points
        ) &&
          summary.points.map(
            (point, index) => (
              <div
                className="summary-point"
                key={index}
              >
                <span>✓</span>
                <p>{point}</p>
              </div>
            )
          )}
      </div>
    )
  }

  return null
}

/*
|--------------------------------------------------------------------------
| Build Lesson Sequence
|
| This is important.
|
| Instead of rendering everything as one giant page, we create
| a controlled sequence:
|
| Objectives
| Introduction
| Concepts
| Illustrations
| Worked Example
| Practice
| Summary
|
|--------------------------------------------------------------------------
*/

function buildLessonSequence(lesson) {
  const sequence = []

  if (
    Array.isArray(lesson.objectives) &&
    lesson.objectives.length > 0
  ) {
    sequence.push({
      id: 'objectives',
      type: 'objective',
      title: 'Learning Objectives',
      objectives:
        lesson.objectives,
      icon: '🎯',
    })
  }

  if (
    Array.isArray(lesson.sections)
  ) {
    lesson.sections.forEach(
      (section, index) => {
        if (!section) {
          return
        }

        sequence.push({
          ...section,
          id:
            section.id ||
            `section-${index}`,
          type:
            section.type ||
            'concept',
          title:
            section.title ||
            `Concept ${index + 1}`,
        })
      }
    )
  }

  /*
   * Top-level illustration
   */

  if (lesson.illustration) {
    sequence.push({
      id: 'lesson-illustration',
      type: 'illustration',
      title:
        lesson.illustration.title ||
        'Lesson Illustration',
      illustration:
        lesson.illustration,
      icon: '🎨',
    })
  }

  /*
   * Top-level drawing
   */

  if (lesson.drawing) {
    sequence.push({
      id: 'lesson-drawing',
      type: 'drawing',
      title:
        lesson.drawing.title ||
        'Lesson Drawing',
      drawing: lesson.drawing,
      icon: '✏️',
    })
  }

  /*
   * Top-level table
   */

  if (lesson.table) {
    sequence.push({
      id: 'lesson-table',
      type: 'table',
      title:
        lesson.table.title ||
        'Key Information',
      table: lesson.table,
      icon: '📊',
    })
  }

  /*
   * Top-level worked example
   */

  if (lesson.workedExample) {
    sequence.push({
      id: 'worked-example',
      type: 'workedExample',
      title: 'Worked Example',
      workedExample:
        lesson.workedExample,
      icon: '🧠',
    })
  }

  /*
   * Top-level practice
   */

  if (lesson.practice) {
    const practices =
      Array.isArray(lesson.practice)
        ? lesson.practice
        : [lesson.practice]

    practices.forEach(
      (practice, index) => {
        sequence.push({
          id: `practice-${index}`,
          type: 'practice',
          title:
            practice.title ||
            `Practice ${index + 1}`,
          practice,
          icon: '✏️',
        })
      }
    )
  }

  /*
   * Top-level video
   */

  if (lesson.video) {
    sequence.push({
      id: 'lesson-video',
      type: 'video',
      title:
        lesson.video.title ||
        'Video Lesson',
      video: lesson.video,
      icon: '🎥',
    })
  }

  /*
   * Top-level simulation
   */

  if (lesson.simulation) {
    sequence.push({
      id: 'lesson-simulation',
      type: 'simulation',
      title:
        lesson.simulation.title ||
        'Interactive Simulation',
      simulation:
        lesson.simulation,
      icon: '🧪',
    })
  }

  /*
   * Top-level summary
   */

  if (lesson.summary) {
    sequence.push({
      id: 'lesson-summary',
      type: 'summary',
      title: 'Lesson Summary',
      summary: lesson.summary,
      icon: '📌',
    })
  }

  return sequence
}

/*
|--------------------------------------------------------------------------
| Current Section Renderer
|--------------------------------------------------------------------------
*/

function LessonContent({
  item,
  selectedAnswer,
  answerSubmitted,
  onAnswer,
}) {
  const type =
    item.type || 'concept'

  /*
   * OBJECTIVES
   */

  if (type === 'objective') {
    return (
      <ObjectivesContent
        objectives={
          item.objectives
        }
      />
    )
  }

  /*
   * PRACTICE
   */

  if (type === 'practice') {
    return (
      <PracticeContent
        practice={
          item.practice ||
          item
        }
        selectedAnswer={
          selectedAnswer
        }
        answerSubmitted={
          answerSubmitted
        }
        onAnswer={onAnswer}
      />
    )
  }

  /*
   * WORKED EXAMPLE
   */

  if (
    type === 'example' ||
    type === 'workedExample'
  ) {
    return (
      <WorkedExample
        example={
          item.workedExample ||
          item
        }
      />
    )
  }

  /*
   * SUMMARY
   */

  if (
    type === 'summary' ||
    type === 'conclusion'
  ) {
    return (
      <SummaryContent
        summary={
          item.summary ||
          item.content ||
          item.points
        }
      />
    )
  }

  /*
   * NORMAL CONTENT
   */

  return (
    <>
      {item.content && (
        <div className="lesson-section-content">
          <RichContent
            content={item.content}
          />
        </div>
      )}

      {item.table && (
        <LessonTable
          table={item.table}
          content={item.content}
        />
      )}

      <LessonIllustration
        illustration={
          item.illustration
        }
        drawing={item.drawing}
        diagram={item.diagram}
      />

      <FormulaBox
        formula={item.formula}
      />

      {item.steps &&
        Array.isArray(item.steps) && (
          <div className="lesson-activity-steps">
            <h3>Procedure</h3>

            <ol>
              {item.steps.map(
                (step, index) => (
                  <li key={index}>
                    {step}
                  </li>
                )
              )}
            </ol>
          </div>
        )}

      <RememberBox
        text={item.remember}
      />

      <LessonMedia
        video={item.video}
        simulation={
          item.simulation
        }
      />
    </>
  )
}

/*
|--------------------------------------------------------------------------
| Main Lesson Component
|--------------------------------------------------------------------------
*/

function Lesson({
  lesson,
  onBack,
  onComplete,
  isCompleted = false,
}) {
  const sequence = useMemo(
    () =>
      lesson
        ? buildLessonSequence(
            lesson
          )
        : [],
    [lesson]
  )

  const [
    currentConcept,
    setCurrentConcept,
  ] = useState(0)

  const [
    selectedAnswer,
    setSelectedAnswer,
  ] = useState(null)

  const [
    answerSubmitted,
    setAnswerSubmitted,
  ] = useState(false)

  const [completed, setCompleted] =
    useState(
      Boolean(isCompleted)
    )

  const [completionPending, setCompletionPending] =
    useState(false)

  /*
   * Synchronize completion
   */

  useEffect(() => {
    // This synchronizes state from an external parent prop.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCompleted(
      Boolean(isCompleted)
    )
  }, [isCompleted])

  /*
   * Reset when lesson changes
   */

  useEffect(() => {
    // Resetting the local lesson UI is intentional when its identity changes.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentConcept(0)
    setSelectedAnswer(null)
    setAnswerSubmitted(false)
  }, [lesson?.id])

  /*
   * Missing lesson
   */

  if (!lesson) {
    return (
      <main className="lesson-page">
        <div className="lesson-container">
          <div className="lesson-not-found">
            <div className="lesson-not-found-icon">
              🔎
            </div>

            <h1>
              Lesson Not Found
            </h1>

            <p>
              We could not find the
              requested lesson.
            </p>

            <button
              type="button"
              className="lesson-back-button"
              onClick={onBack}
            >
              ← Back to Courses
            </button>
          </div>
        </div>
      </main>
    )
  }

  /*
   * Empty lesson
   */

  if (sequence.length === 0) {
    return (
      <main className="lesson-page">
        <section className="lesson-header">
          <div className="lesson-container">
            <button
              type="button"
              className="lesson-back-button"
              onClick={onBack}
            >
              ← Back to Course
            </button>

            <div className="lesson-header-content">
              <div className="lesson-icon">
                {lesson.icon || '📚'}
              </div>

              <div className="lesson-header-text">
                <span className="lesson-course">
                  {lesson.course ||
                    'Course'}
                </span>

                <h1>
                  {lesson.title}
                </h1>

                {lesson.description && (
                  <p>
                    {lesson.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        <div className="lesson-container lesson-main">
          <div className="lesson-not-found">
            <h2>
              Lesson Content Coming Soon
            </h2>

            <p>
              This lesson does not
              contain learning content yet.
            </p>

            <button
              type="button"
              className="lesson-back-button"
              onClick={onBack}
            >
              ← Back to Course
            </button>
          </div>
        </div>
      </main>
    )
  }

  /*
   * Protect index
   */

  const safeIndex = Math.min(
    currentConcept,
    sequence.length - 1
  )

  const currentItem =
    sequence[safeIndex]

  const total =
    sequence.length

  const progress =
    ((safeIndex + 1) / total) *
    100

  const nextItem =
    sequence[safeIndex + 1]

  const previousItem =
    sequence[safeIndex - 1]

  const isLast =
    safeIndex === total - 1

  /*
   * Navigation
   */

  function goToConcept(index) {
    if (
      index < 0 ||
      index >= total
    ) {
      return
    }

    setCurrentConcept(index)
    setSelectedAnswer(null)
    setAnswerSubmitted(false)

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  function handlePrevious() {
    goToConcept(
      safeIndex - 1
    )
  }

  function handleAnswer(answer) {
    if (answerSubmitted) {
      return
    }

    setSelectedAnswer(answer)
    setAnswerSubmitted(true)
  }

  async function finishLesson() {
    if (completed || completionPending) return

    setCompletionPending(true)
    try {
      if (typeof onComplete === 'function') {
        await onComplete(lesson)
      }
      setCompleted(true)
    } finally {
      setCompletionPending(false)
    }
  }

  function handleNext() {
    /*
     * Practice cannot continue
     * until the learner answers.
     */

    if (
      currentItem.type ===
        'practice' &&
      !answerSubmitted
    ) {
      return
    }

    if (isLast) {
      void finishLesson().catch(() => undefined)
      return
    }

    goToConcept(
      safeIndex + 1
    )
  }

  /*
   * Render
   */

  return (
    <main className="lesson-page">

      {/* ======================================================
          LESSON HEADER
          ====================================================== */}

      <section className="lesson-header">
        <div className="lesson-container">

          <button
            type="button"
            className="lesson-back-button"
            onClick={onBack}
          >
            ← Back to Course
          </button>

          <div className="lesson-header-content">

            <div className="lesson-icon">
              {lesson.icon || '📚'}
            </div>

            <div className="lesson-header-text">

              <span className="lesson-course">
                {lesson.course ||
                  'Course'}
              </span>

              <h1>
                {lesson.title || lesson.topic || 'Lesson'}
              </h1>

              {lesson.description && (
                <p>
                  {lesson.description}
                </p>
              )}

            </div>

          </div>

          {/* ==================================================
              PROGRESS
              ================================================== */}

          <div className="lesson-progress-area">

            <div className="lesson-progress-info">

              <span>
                Progress
              </span>

              <strong>
                {Math.round(
                  progress
                )}
                %
              </strong>

            </div>

            <div className="lesson-progress-bar">

              <div
                className="lesson-progress-fill"
                style={{
                  width: `${progress}%`,
                }}
              />

            </div>

            <div className="lesson-progress-details">

              <span>
                Concept{' '}
                {safeIndex + 1} of{' '}
                {total}
              </span>

              <span>
                {currentItem.title}
              </span>

            </div>

          </div>

        </div>
      </section>

      {/* ======================================================
          MAIN CONTENT
          ====================================================== */}

      <div className="lesson-container lesson-main">

        {/* ====================================================
            CONCEPT NAVIGATION
            ==================================================== */}

        <nav className="lesson-section-nav">

          {sequence.map(
            (item, index) => (
              <button
                key={item.id}
                type="button"
                className={
                  index === safeIndex
                    ? 'active'
                    : ''
                }
                onClick={() =>
                  goToConcept(
                    index
                  )
                }
              >

                <span className="nav-item-icon">
                  {item.icon ||
                    getSectionIcon(
                      item.type
                    )}
                </span>

                <span className="nav-item-text">
                  {item.title}
                </span>

                {index <
                  safeIndex && (
                  <span className="nav-item-check">
                    ✓
                  </span>
                )}

              </button>
            )
          )}

        </nav>

        {/* ====================================================
            CURRENT CONCEPT
            ==================================================== */}

        <article
          className={`lesson-section lesson-section-${currentItem.type}`}
        >

          {/* Section heading */}

          <header className="lesson-section-header">

            <div className="lesson-section-icon">
              {currentItem.icon ||
                getSectionIcon(
                  currentItem.type
                )}
            </div>

            <div>

              <span className="lesson-section-type">
                {getTypeLabel(
                  currentItem.type
                )}
              </span>

              <h2>
                {currentItem.title}
              </h2>

            </div>

          </header>

          {/* Content */}

          <LessonContent
            item={currentItem}
            selectedAnswer={
              selectedAnswer
            }
            answerSubmitted={
              answerSubmitted
            }
            onAnswer={
              handleAnswer
            }
          />

        </article>

        {/* ====================================================
            PREVIEW NEXT CONTENT
            ==================================================== */}

        {nextItem && (
          <section className="lesson-next-preview">

            <div className="next-preview-label">
              <span>
                Up Next
              </span>
            </div>

            <div className="next-preview-content">

              <div className="next-preview-icon">
                {nextItem.icon ||
                  getSectionIcon(
                    nextItem.type
                  )}
              </div>

              <div className="next-preview-text">

                <small>
                  Next Concept
                </small>

                <h3>
                  {nextItem.title}
                </h3>

                <p>
                  {nextItem.description ||
                    `Continue with ${nextItem.title}.`}
                </p>

              </div>

              <button
                type="button"
                className="next-preview-button"
                onClick={() =>
                  goToConcept(
                    safeIndex + 1
                  )
                }
              >
                Preview →
              </button>

            </div>

          </section>
        )}

        {/* ====================================================
            NAVIGATION
            ==================================================== */}

        <div className="lesson-navigation">

          <button
            type="button"
            className="lesson-nav-button previous"
            onClick={
              handlePrevious
            }
            disabled={
              safeIndex === 0
            }
          >

            <span className="nav-arrow">
              ←
            </span>

            <div>
              <small>
                Previous
              </small>

              <strong>
                {previousItem
                  ? previousItem.title
                  : 'Start'}
              </strong>
            </div>

          </button>

          <button
            type="button"
            className="lesson-nav-button next"
            onClick={handleNext}
            disabled={
              currentItem.type ===
                'practice' &&
              !answerSubmitted
            }
          >

            <div>
              <small>
                {isLast
                  ? 'Finish'
                  : 'Next Concept'}
              </small>

              <strong>
                {isLast
                  ? 'Complete Lesson'
                  : nextItem?.title}
              </strong>
            </div>

            <span className="nav-arrow">
              →
            </span>

          </button>

        </div>

        {/* ====================================================
            COMPLETION
            ==================================================== */}

        {completed && (
          <section className="lesson-completed">

            <div className="completed-icon">
              ✓
            </div>

            <div>
              <strong>
                Lesson Completed
              </strong>

              <p>
                You have successfully
                completed this lesson.
              </p>
            </div>

          </section>
        )}

      </div>
    </main>
  )
}

export default Lesson
