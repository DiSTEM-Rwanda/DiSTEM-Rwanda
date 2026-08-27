import { useEffect, useState } from 'react'
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useParams,
} from 'react-router'

import './App.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Learning from './components/Learning'
import Teachers from './components/Teachers'
import Auth from './components/Auth'
import ForgotPassword from './components/ForgotPassword'
import ResetPassword from './components/ResetPassword'
import VerifyEmail from './components/VerifyEmail'
import Dashboard from './components/Dashboard'
import Courses from './components/Courses'
import CourseDetails from './components/CourseDetails'
import Lesson from './components/Lesson'
import Footer from './components/Footer'
import { authService } from './services/authService'

import physicsLessons from './data/physicsLessons'
import chemistryLessons from './data/chemistryLessons'
import mathematicsLessons from './data/mathematicsLessons'
import biologyLessons from './data/biologyLessons'


// ============================================================
// LESSON LOADERS
// ============================================================

function getPhysicsLessons() {
  return Object.values(physicsLessons).flatMap(
    (unit) => unit.lessons || []
  )
}

function getChemistryLessons() {
  return Object.values(chemistryLessons).flatMap(
    (unit) => unit.lessons || []
  )
}

function getMathematicsLessons() {
  return Object.values(mathematicsLessons).flatMap(
    (unit) => unit.lessons || []
  )
}

function getBiologyLessons() {
  return Object.values(biologyLessons).flatMap(
    (unit) => unit.lessons || []
  )
}


// ============================================================
// ALL REAL LESSONS
// ============================================================

function getAllLessons() {
  return [
    ...getPhysicsLessons(),
    ...getChemistryLessons(),
    ...getMathematicsLessons(),
    ...getBiologyLessons(),
  ]
}


// ============================================================
// NORMALIZE TEXT
// ============================================================

function normalizeText(value) {
  return String(value || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}


// ============================================================
// FIND LESSON
// ============================================================

function findLessonById(lessonId, courseId = '') {
  const lessons = getAllLessons()

  if (!lessonId) {
    return null
  }

  // ----------------------------------------------------------
  // 1. Exact lesson ID
  // ----------------------------------------------------------

  const exactMatch = lessons.find(
    (lesson) =>
      String(lesson.id) === String(lessonId)
  )

  if (exactMatch) {
    return exactMatch
  }

  // ----------------------------------------------------------
  // 2. Generated course + lesson title slug
  //
  // Example:
  // biology-introduction-to-biology
  // ----------------------------------------------------------

  const normalizedLessonId =
    normalizeText(lessonId)

  const course =
    findCourseById(courseId)

  if (course) {
    const titleMatch = lessons.find(
      (lesson) => {
        const title =
          lesson.title ||
          lesson.topic ||
          ''

        const generatedId =
          `${course.title}-${title}`

        return (
          normalizeText(generatedId) ===
          normalizedLessonId
        )
      }
    )

    if (titleMatch) {
      return titleMatch
    }
  }

  // ----------------------------------------------------------
  // 3. Match lesson title/topic slug
  // ----------------------------------------------------------

  const topicMatch = lessons.find(
    (lesson) => {
      const title =
        lesson.title ||
        lesson.topic ||
        ''

      return (
        normalizeText(title) ===
        normalizedLessonId
      )
    }
  )

  if (topicMatch) {
    return topicMatch
  }

  // ----------------------------------------------------------
  // 4. Direct title/topic match
  // ----------------------------------------------------------

  const directMatch = lessons.find(
    (lesson) => {
      const title =
        String(
          lesson.title ||
          lesson.topic ||
          ''
        )
          .trim()
          .toLowerCase()

      return (
        title ===
        String(lessonId)
          .trim()
          .toLowerCase()
      )
    }
  )

  if (directMatch) {
    return directMatch
  }

  return null
}


// ============================================================
// COURSES
// ============================================================

function getCourses() {
  return [
    {
      id: 'mathematics',
      icon: '📐',
      title: 'Mathematics',
      description:
        'Explore numbers, algebra, geometry, statistics and problem-solving.',
      level: 'Secondary School',
      lessons: getMathematicsLessons().length || 24,
    },

    {
      id: 'physics',
      icon: '⚡',
      title: 'Physics',
      description:
        'Discover motion, forces, energy, electricity and the physical world.',
      level: 'Secondary School',
      lessons: getPhysicsLessons().length || 20,
    },

    {
      id: 'chemistry',
      icon: '🧪',
      title: 'Chemistry',
      description:
        'Learn about matter, elements, reactions and chemical processes.',
      level: 'Secondary School',
      lessons: getChemistryLessons().length || 22,
    },

    {
      id: 'biology',
      icon: '🧬',
      title: 'Biology',
      description:
        'Explore cells, organisms, ecosystems and human biology.',
      level: 'Secondary School',
      lessons: getBiologyLessons().length || 26,
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
}


// ============================================================
// FIND COURSE
// ============================================================

function findCourseById(courseId) {
  return (
    getCourses().find(
      (course) =>
        course.id === courseId
    ) || null
  )
}


// ============================================================
// COURSE TOPICS
// ============================================================

function getCourseTopics(courseTitle) {
  const topics = {
    Mathematics: [
      'Algebra',
      'Geometry',
      'Statistics',
      'Problem Solving',
    ],

    Physics: [
      'Motion',
      'Forces',
      'Energy',
      'Electricity',
    ],

    Chemistry: [
      'Matter',
      'Elements',
      'Chemical Reactions',
      'Acids and Bases',
      'Solutions',
      'Metals and Non-metals',
      'Carbon Chemistry',
      'Chemistry in Everyday Life',
    ],

    Biology: [
      'Introduction to Biology',
      'Characteristics of Living Things',
      'Cell Structure and Functions',
      'Differences Between Plant and Animal Cells',
      'Levels of Organization in Living Things',
    ],

    Technology: [
      'Digital Skills',
      'Computational Thinking',
      'Programming',
      'Innovation',
    ],

    'STEM Projects': [
      'Project Design',
      'Investigation',
      'Building Solutions',
      'Project Presentation',
    ],
  }

  return topics[courseTitle] || []
}


// ============================================================
// GET COURSE LESSONS
// ============================================================

function getLessonsForCourse(courseId) {
  switch (courseId) {
    case 'physics':
      return getPhysicsLessons()

    case 'chemistry':
      return getChemistryLessons()

    case 'mathematics':
      return getMathematicsLessons()

    case 'biology':
      return getBiologyLessons()

    default:
      return []
  }
}


// ============================================================
// FORGOT PASSWORD PAGE
// ============================================================

function ForgotPasswordPage() {
  const navigate = useNavigate()

  return (
    <section className="section auth-section">
      <ForgotPassword
        onBackToSignIn={() => navigate('/')}
        onSuccess={() => navigate('/')}
      />
    </section>
  )
}

// ============================================================
// HOME PAGE
// ============================================================

function HomePage({ user, onLogin }) {
  return (
    <>
      <section id="home">
        <Hero user={user} />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="learning">
        <Learning />
      </section>

      <section id="teachers">
        <Teachers />
      </section>

      {!user && (
        <section id="auth">
          <Auth onLogin={onLogin} />
        </section>
      )}
    </>
  )
}


// ============================================================
// LEARNING HOME
// ============================================================

function LearningHomePage({ user }) {
  return (
    <>
      <section id="home">
        <Hero user={user} />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="learning">
        <Learning />
      </section>

      <section id="teachers">
        <Teachers />
      </section>
    </>
  )
}


// ============================================================
// DASHBOARD PAGE
// ============================================================

function DashboardPage({
  completedLessons,
  calculateCourseProgress,
}) {
  const navigate = useNavigate()

  const courses = getCourses().map(
    (course) => {
      const lessons =
        getLessonsForCourse(
          course.id
        )

      const completedCount =
        lessons.filter(
          (lesson) =>
            completedLessons.includes(
              lesson.id
            )
        ).length

      return {
        ...course,

        progress:
          calculateCourseProgress(
            course.title
          ),

        totalLessons:
          lessons.length > 0
            ? lessons.length
            : course.lessons,

        completedLessons:
          completedCount,
      }
    }
  )

  function handleStartCourse(courseId) {
    navigate(
      courseId ? `/courses/${courseId}` : '/courses'
    )

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }, 100)
  }

  return (
    <section
      id="dashboard"
      className="learning-app-page"
    >
      <Dashboard
        courses={courses}
        onBrowseCourses={() => handleStartCourse('')}
        onStartCourse={
          handleStartCourse
        }
        totalCompleted={
          completedLessons.length
        }
      />
    </section>
  )
}


// ============================================================
// COURSES PAGE
// ============================================================

function CoursesPage() {
  const navigate = useNavigate()

  function handleSelectCourse(course) {
    if (!course || !course.id) {
      return
    }

    navigate(
      `/courses/${course.id}`
    )

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }, 100)
  }

  return (
    <section
      id="courses"
      className="learning-app-page"
    >
      <Courses
        onSelectCourse={
          handleSelectCourse
        }
        courses={getCourses()}
      />
    </section>
  )
}


// ============================================================
// COURSE DETAILS PAGE
// ============================================================

function CourseDetailsPage({
  completedLessons,
  calculateCourseProgress,
}) {
  const { courseId } =
    useParams()

  const navigate =
    useNavigate()

  const course =
    findCourseById(courseId)

  if (!course) {
    return (
      <Navigate
        to="/courses"
        replace
      />
    )
  }

  const realLessons =
    getLessonsForCourse(
      courseId
    )

  const topics =
    getCourseTopics(
      course.title
    )

  /*
   * Use real lesson data whenever it exists.
   *
   * Only courses without lesson files
   * receive placeholder lessons.
   */
  let lessons = realLessons

  if (lessons.length === 0) {
    lessons = topics.map(
      (topic) => ({
        id:
          `${courseId}-${normalizeText(
            topic
          )}`,

        title: topic,

        topic: topic,

        course: course.title,

        description:
          `Learn about ${topic.toLowerCase()}.`,

        placeholder: true,
      })
    )
  }

  const enrichedCourse = {
    ...course,

    lessons,

    topics,
  }

  function handleStartLesson(lesson) {
    if (!lesson) {
      return
    }

    const lessonId =
      lesson.id ||
      `${courseId}-${normalizeText(
        lesson.title ||
        lesson.topic
      )}`

    navigate(
      `/courses/${courseId}/lessons/${lessonId}`
    )

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }, 100)
  }

  const progress =
    calculateCourseProgress(
      course.title
    )

  return (
    <section
      className="learning-app-page"
    >
      <CourseDetails
        course={enrichedCourse}
        onStartLesson={
          handleStartLesson
        }
        completedLessons={
          completedLessons
        }
        progress={progress}
      />
    </section>
  )
}


// ============================================================
// LESSON PAGE
// ============================================================

function LessonPage({
  completedLessons,
  onCompleteLesson,
}) {
  const {
    courseId,
    lessonId,
  } = useParams()

  const navigate =
    useNavigate()

  const course =
    findCourseById(courseId)

  const realLesson =
    findLessonById(
      lessonId,
      courseId
    )

  let lesson = realLesson

  // ----------------------------------------------------------
  // Placeholder lesson fallback
  // ----------------------------------------------------------

  if (!lesson && course) {
    const topics =
      getCourseTopics(
        course.title
      )

    const matchingTopic =
      topics.find(
        (topic) =>
          `${courseId}-${normalizeText(
            topic
          )}` === lessonId
      )

    if (matchingTopic) {
      lesson = {
        id: lessonId,

        title: matchingTopic,

        topic: matchingTopic,

        course: course.title,

        description:
          `Learn about ${matchingTopic.toLowerCase()}.`,

        placeholder: true,
      }
    }
  }

  // ----------------------------------------------------------
  // COURSE NOT FOUND
  // ----------------------------------------------------------

  if (!course) {
    return (
      <section className="learning-app-page">
        <div className="lesson-header">
          <h2>
            Course not available
          </h2>

          <p>
            The requested course could
            not be found.
          </p>

          <button
            type="button"
            className="lesson-back-button"
            onClick={() =>
              navigate('/courses')
            }
          >
            ← Back to Courses
          </button>
        </div>
      </section>
    )
  }

  // ----------------------------------------------------------
  // LESSON NOT FOUND
  // ----------------------------------------------------------

  if (!lesson) {
    return (
      <section className="learning-app-page">
        <div className="lesson-header">
          <button
            type="button"
            className="lesson-back-button"
            onClick={() =>
              navigate(
                `/courses/${courseId}`
              )
            }
          >
            ← Back to Course
          </button>

          <p className="eyebrow">
            {course.title}
          </p>

          <h2>
            Lesson not available
          </h2>

          <p>
            The requested lesson could
            not be found in this course.
          </p>
        </div>
      </section>
    )
  }

  function handleBack() {
    navigate(
      `/courses/${courseId}`
    )

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }, 100)
  }

  function handleComplete(
    lessonData
  ) {
    onCompleteLesson(
      lessonData
    )
  }

  const isCompleted =
    completedLessons.includes(
      lesson.id
    )

  return (
    <section className="learning-app-page">
      <Lesson
        lesson={{
          ...lesson,

          course:
            lesson.course ||
            course.title,

          topic:
            lesson.topic ||
            lesson.title,
        }}

        onBack={handleBack}

        onComplete={
          handleComplete
        }

        isCompleted={
          isCompleted
        }
      />
    </section>
  )
}


// ============================================================
// APP
// ============================================================

function App() {
  const navigate =
    useNavigate()

  // ==========================================================
  // USER
  // ==========================================================

  const [user, setUser] = useState(null)
  const [authLoading, setAuthLoading] = useState(true)

  useEffect(() => {
    authService.me().then(({ user: currentUser }) => setUser(currentUser)).catch(() => setUser(null)).finally(() => setAuthLoading(false))
  }, [])

  // ==========================================================
  // COMPLETED LESSONS
  // ==========================================================

  const [
    completedLessons,
    setCompletedLessons,
  ] = useState(() => {
    try {
      const oldProgress =
        localStorage.getItem(
          'distemCompletedLessons'
        )

      const newProgress =
        localStorage.getItem(
          'distem-progress'
        )

      const saved =
        oldProgress ||
        newProgress

      if (!saved) {
        return []
      }

      const parsed =
        JSON.parse(saved)

      return Array.isArray(parsed)
        ? parsed
        : []
    } catch (error) {
      console.error(
        'Unable to load completed lessons:',
        error
      )

      return []
    }
  })

  // ==========================================================
  // COURSE PROGRESS
  // ==========================================================

  function calculateCourseProgress(
    courseName
  ) {
    const course =
      getCourses().find(
        (item) =>
          item.title ===
          courseName
      )

    if (!course) {
      return 0
    }

    const lessons =
      getLessonsForCourse(
        course.id
      )

    /*
     * Real lesson data exists.
     */
    if (lessons.length > 0) {
      const completedCount =
        lessons.filter(
          (lesson) =>
            completedLessons.includes(
              lesson.id
            )
        ).length

      return Math.round(
        (completedCount /
          lessons.length) *
          100
      )
    }

    /*
     * Placeholder course.
     */
    return 0
  }

  // ==========================================================
  // COMPLETE LESSON
  // ==========================================================

  function handleCompleteLesson(
    lessonData
  ) {
    if (
      !lessonData ||
      !lessonData.id
    ) {
      return
    }

    const lessonId =
      lessonData.id

    setCompletedLessons(
      (previousLessons) => {
        if (
          previousLessons.includes(
            lessonId
          )
        ) {
          return previousLessons
        }

        const updatedLessons = [
          ...previousLessons,
          lessonId,
        ]

        /*
         * Keep both keys for compatibility
         * with the existing application.
         */
        localStorage.setItem(
          'distemCompletedLessons',
          JSON.stringify(
            updatedLessons
          )
        )

        localStorage.setItem(
          'distem-progress',
          JSON.stringify(
            updatedLessons
          )
        )

        return updatedLessons
      }
    )
  }

  // ==========================================================
  // LOGIN
  // ==========================================================

  async function handleLogin(credentials) {
    const { user: userData } = await authService.login(credentials)
    setUser(userData)

    navigate('/dashboard')

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }, 100)
  }

  // ==========================================================
  // LOGOUT
  // ==========================================================

  async function handleLogout() {
    await authService.logout()
    setUser(null)

    navigate('/')

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }, 100)
  }

  // ==========================================================
  // APPLICATION
  // ==========================================================

  if (authLoading) {
    return (
      <div className="app">
        <Navbar user={null} onLogout={handleLogout} />
        <main aria-busy="true" />
        <Footer />
      </div>
    )
  }

  return (
    <div className="app">

      <Navbar
        user={user}
        onLogout={
          handleLogout
        }
      />

      <main>

        <Routes>

          {/* ==================================================
              PUBLIC HOME
              ================================================== */}

          <Route
            path="/"
            element={
              <HomePage
                user={user}
                onLogin={
                  handleLogin
                }
              />
            }
          />

          {/* ==================================================
              PASSWORD RESET
              ================================================== */}

          <Route
            path="/forgot-password"
            element={<ForgotPasswordPage />}
          />

          <Route
            path="/reset-password"
            element={<ResetPassword />}
          />

          <Route
            path="/verify-email"
            element={<VerifyEmail />}
          />

          {/* ==================================================
              DASHBOARD
              ================================================== */}

          <Route
            path="/dashboard"
            element={
              user ? (
                <DashboardPage
                  completedLessons={
                    completedLessons
                  }
                  calculateCourseProgress={
                    calculateCourseProgress
                  }
                />
              ) : (
                <Navigate
                  to="/"
                  replace
                />
              )
            }
          />


          {/* ==================================================
              HOME AFTER LOGIN
              ================================================== */}

          <Route
            path="/dashboard-home"
            element={
              user ? (
                <LearningHomePage user={user} />
              ) : (
                <Navigate
                  to="/"
                  replace
                />
              )
            }
          />


          {/* ==================================================
              COURSES
              ================================================== */}

          <Route
            path="/courses"
            element={
              user ? (
                <CoursesPage />
              ) : (
                <Navigate
                  to="/"
                  replace
                />
              )
            }
          />


          {/* ==================================================
              COURSE DETAILS
              ================================================== */}

          <Route
            path="/courses/:courseId"
            element={
              user ? (
                <CourseDetailsPage
                  completedLessons={
                    completedLessons
                  }
                  calculateCourseProgress={
                    calculateCourseProgress
                  }
                />
              ) : (
                <Navigate
                  to="/"
                  replace
                />
              )
            }
          />


          {/* ==================================================
              LESSON
              ================================================== */}

          <Route
            path="/courses/:courseId/lessons/:lessonId"
            element={
              user ? (
                <LessonPage
                  completedLessons={
                    completedLessons
                  }
                  onCompleteLesson={
                    handleCompleteLesson
                  }
                />
              ) : (
                <Navigate
                  to="/"
                  replace
                />
              )
            }
          />


          {/* ==================================================
              UNKNOWN ROUTE
              ================================================== */}

          <Route
            path="*"
            element={
              <Navigate
                to={
                  user
                    ? '/dashboard'
                    : '/'
                }
                replace
              />
            }
          />

        </Routes>

      </main>


      {/* ======================================================
          FOOTER
          ====================================================== */}

      <Footer />

    </div>
  )
}

export default App
