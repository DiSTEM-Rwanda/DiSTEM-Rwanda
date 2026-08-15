import { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Learning from './components/Learning'
import Teachers from './components/Teachers'
import Auth from './components/Auth'
import Dashboard from './components/Dashboard'
import Courses from './components/Courses'
import CourseDetails from './components/CourseDetails'
import Lesson from './components/Lesson'

function App() {
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [selectedLesson, setSelectedLesson] = useState(null)
  const [user, setUser] = useState(null)

  /*
   * Load completed lessons from localStorage.
   * This allows learner progress to remain available
   * after refreshing the browser.
   */
  const [completedLessons, setCompletedLessons] = useState(() => {
    try {
      const savedLessons = localStorage.getItem(
        'distemCompletedLessons'
      )

      return savedLessons
        ? JSON.parse(savedLessons)
        : []
    } catch (error) {
      console.error(
        'Unable to load completed lessons:',
        error
      )

      return []
    }
  })

  /*
   * Course lesson structure.
   *
   * Each course currently contains four lessons.
   * Later, this can be connected to the
   * DiSTEM Rwanda content database.
   */
  const courseTopics = {
    Mathematics: [
      'Algebra Fundamentals',
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
    ],

    Biology: [
      'Cells',
      'Living Organisms',
      'Ecosystems',
      'Human Biology',
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

  /*
   * Calculate the percentage of completed lessons
   * for a specific course.
   */
  function calculateCourseProgress(courseName) {
    const topics = courseTopics[courseName] || []

    if (topics.length === 0) {
      return 0
    }

    const completedCount = topics.filter((topic) =>
      completedLessons.includes(
        `${courseName}-${topic}`
      )
    ).length

    return Math.round(
      (completedCount / topics.length) * 100
    )
  }

  /*
   * Calculate the total number of completed lessons.
   */
  function getCompletedLessonCount() {
    return completedLessons.length
  }

  /*
   * Login
   */
  function handleLogin(userData) {
    setUser(userData)
  }

  /*
   * Logout
   */
  function handleLogout() {
    setUser(null)
    setSelectedCourse(null)
    setSelectedLesson(null)

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  /*
   * Start a lesson.
   */
  function handleStartLesson(lessonData) {
    setSelectedLesson(lessonData)

    setTimeout(() => {
      document
        .getElementById('lesson')
        ?.scrollIntoView({
          behavior: 'smooth',
        })
    }, 100)
  }

  /*
   * Return from a lesson to the selected course.
   */
  function handleBackToCourse() {
    setSelectedLesson(null)

    setTimeout(() => {
      document
        .getElementById('course-details')
        ?.scrollIntoView({
          behavior: 'smooth',
        })
    }, 100)
  }

  /*
   * Complete a lesson.
   *
   * Each lesson receives a unique ID:
   *
   * Physics-Motion
   * Physics-Forces
   * Mathematics-Geometry
   *
   * This prevents duplicate completion records.
   */
  function handleCompleteLesson(lessonData) {
    if (!lessonData) {
      return
    }

    const lessonId =
      `${lessonData.course}-${lessonData.topic}`

    setCompletedLessons((previousLessons) => {
      /*
       * Do not add the same lesson twice.
       */
      if (previousLessons.includes(lessonId)) {
        return previousLessons
      }

      const updatedLessons = [
        ...previousLessons,
        lessonId,
      ]

      /*
       * Save progress locally.
       */
      localStorage.setItem(
        'distemCompletedLessons',
        JSON.stringify(updatedLessons)
      )

      return updatedLessons
    })
  }

  return (
    <div className="app">
      <Navbar
        user={user}
        onLogout={handleLogout}
      />

      <main>
        {/* =========================
            HOME
        ========================= */}
        <section id="home">
          <Hero />
        </section>

        {/* =========================
            ABOUT
        ========================= */}
        <About />

        {/* =========================
            LEARNING
        ========================= */}
        <Learning />

        {/* =========================
            TEACHERS
        ========================= */}
        <Teachers />

        {/* =========================
            AUTHENTICATION
        ========================= */}
        {!user && (
          <Auth onLogin={handleLogin} />
        )}

        {/* =========================
            LOGGED-IN EXPERIENCE
        ========================= */}
        {user && (
          <>
            {/* Dashboard */}
            <Dashboard
              completedLessons={completedLessons}
              calculateCourseProgress={
                calculateCourseProgress
              }
              completedLessonCount={
                getCompletedLessonCount()
              }
            />

            {/* =========================
                COURSE AREA
            ========================= */}
            {!selectedLesson && (
              <>
                <Courses
                  onSelectCourse={(course) => {
                    setSelectedCourse(course)
                    setSelectedLesson(null)
                  }}
                />

                <CourseDetails
                  course={
                    selectedCourse || undefined
                  }
                  onStartLesson={
                    handleStartLesson
                  }
                />
              </>
            )}

            {/* =========================
                LESSON AREA
            ========================= */}
            {selectedLesson && (
              <Lesson
                lesson={selectedLesson}
                onBack={handleBackToCourse}
                onComplete={
                  handleCompleteLesson
                }
                isCompleted={completedLessons.includes(
                  `${selectedLesson.course}-${selectedLesson.topic}`
                )}
              />
            )}
          </>
        )}
      </main>

      {/* =========================
          FOOTER
      ========================= */}
      <footer>
        <div className="logo">
          DiSTEM <span>Rwanda</span>
        </div>

        <p>
          Offline Today, Future Ready Tomorrow.
        </p>

        <p className="copyright">
          © 2026 DiSTEM Rwanda. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default App