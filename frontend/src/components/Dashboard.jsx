function Dashboard({ courses = [], onStartCourse, onBrowseCourses, onOpenLab, totalCompleted = 0, completedExperimentCount = 0 }) {
  const trackedCourses = courses.filter((course) => course.totalLessons > 0)
  const totalLessons = trackedCourses.reduce((sum, course) => sum + course.totalLessons, 0)
  const overallProgress = totalLessons ? Math.round((totalCompleted / totalLessons) * 100) : 0
  return (
    <section className="dashboard-section" id="dashboard">
      <div className="dashboard-header"><div><p className="eyebrow">Student Dashboard</p><h1>Build your STEM future.</h1><p>Pick up where you left off and keep your learning momentum going.</p></div><div className="offline-status"><span className="status-dot"></span> Offline ready</div></div>
      <div className="dashboard-stats"><article className="stat-card"><span>📚</span><strong>{courses.length}</strong><p>Available Courses</p></article><article className="stat-card"><span>✓</span><strong>{totalCompleted}</strong><p>Lessons Completed</p></article><article className="stat-card"><span>↗</span><strong>{overallProgress}%</strong><p>Overall Progress</p></article></div>
      <div className="dashboard-content"><section className="dashboard-card course-progress-panel"><div className="card-heading"><div><p className="eyebrow">Continue Learning</p><h2>Your courses</h2></div><button type="button" onClick={onBrowseCourses}>Browse courses</button></div><div className="course-list">{courses.map((course) => <article className="course-item" key={course.id}><div className="course-icon">{course.icon}</div><div className="course-item-body"><div className="course-item-top"><h3>{course.title}</h3><span>{course.progress}%</span></div><p>{course.description}</p><div className="progress-bar"><div className="progress-fill" style={{ width: `${course.progress}%` }} /></div><small>{course.completedLessons} of {course.totalLessons} lessons completed</small></div><button type="button" className="text-button" onClick={() => onStartCourse?.(course.id)}>Open</button></article>)}</div></section><aside className="dashboard-card recommendation-card"><p className="eyebrow">Virtual Laboratory</p><h2>{completedExperimentCount ? `${completedExperimentCount} experiments completed` : 'Experiment offline'}</h2><p>Use interactive Physics and Chemistry models that run locally on this device.</p><button type="button" onClick={onOpenLab}>Open Virtual Laboratory</button></aside></div>
    </section>
  )
}
export default Dashboard
