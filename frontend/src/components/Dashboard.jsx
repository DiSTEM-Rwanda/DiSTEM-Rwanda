function Dashboard() {
  return (
    <section id="dashboard" className="dashboard-section">
      <div className="dashboard-header">
        <div>
          <p className="eyebrow">Student Dashboard</p>

          <h2>Welcome back, Learner 👋</h2>

          <p>
            Continue your STEM learning journey, track your progress and
            discover new learning opportunities.
          </p>
        </div>

        <div className="offline-status">
          <span className="status-dot"></span>
          Offline Ready
        </div>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <span>📚</span>
          <strong>6</strong>
          <p>Courses</p>
        </div>

        <div className="stat-card">
          <span>📈</span>
          <strong>72%</strong>
          <p>Progress</p>
        </div>

        <div className="stat-card">
          <span>📝</span>
          <strong>12</strong>
          <p>Assessments</p>
        </div>

        <div className="stat-card">
          <span>⭐</span>
          <strong>8</strong>
          <p>Achievements</p>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="dashboard-card courses-card">
          <div className="card-heading">
            <div>
              <p className="eyebrow">Continue Learning</p>
              <h3>My Courses</h3>
            </div>

            <button type="button">View All</button>
          </div>

          <div className="course-list">
            <div className="course-item">
              <span className="course-icon">📐</span>

              <div>
                <h4>Mathematics</h4>
                <p>Algebra & Geometry</p>

                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '78%' }}></div>
                </div>

                <small>78% complete</small>
              </div>
            </div>

            <div className="course-item">
              <span className="course-icon">⚡</span>

              <div>
                <h4>Physics</h4>
                <p>Mechanics & Energy</p>

                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '64%' }}></div>
                </div>

                <small>64% complete</small>
              </div>
            </div>

            <div className="course-item">
              <span className="course-icon">🧪</span>

              <div>
                <h4>Chemistry</h4>
                <p>Matter & Reactions</p>

                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '52%' }}></div>
                </div>

                <small>52% complete</small>
              </div>
            </div>
          </div>
        </div>

        <div className="dashboard-card">
          <div className="card-heading">
            <div>
              <p className="eyebrow">Your Activity</p>
              <h3>Recent Assessments</h3>
            </div>
          </div>

          <div className="assessment-list">
            <div className="assessment-item">
              <div>
                <strong>Mathematics Quiz</strong>
                <p>Algebra Fundamentals</p>
              </div>

              <span className="score">85%</span>
            </div>

            <div className="assessment-item">
              <div>
                <strong>Physics Assessment</strong>
                <p>Motion & Forces</p>
              </div>

              <span className="score">78%</span>
            </div>

            <div className="assessment-item">
              <div>
                <strong>Chemistry Quiz</strong>
                <p>States of Matter</p>
              </div>

              <span className="score">91%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-card recommendation-card">
        <p className="eyebrow">Recommended</p>

        <h3>Keep exploring STEM 🚀</h3>

        <p>
          Explore new lessons, practise your skills and work on practical
          STEM projects to strengthen your understanding.
        </p>

        <button type="button">Explore Learning</button>
      </div>
    </section>
  )
}

export default Dashboard