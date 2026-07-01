import './App.css'

function App() {
  return (
    <main className="app-shell">
      <section className="hero-card">
        <p className="eyebrow">Welcome</p>
        <h1>Build your first simple page</h1>
        <p className="hero-text">
          This React app is now ready with a clean layout for your next idea.
        </p>
        <div className="actions">
          <a className="primary-btn" href="#features">
            Get started
          </a>
          <a className="secondary-btn" href="#about">
            Learn more
          </a>
        </div>
      </section>

      <section id="features" className="features">
        <article className="feature-card">
          <h2>Fast</h2>
          <p>Lightweight structure that makes your content easy to scan.</p>
        </article>
        <article className="feature-card">
          <h2>Simple</h2>
          <p>Clean styling and a focused layout for your first page.</p>
        </article>
        <article className="feature-card">
          <h2>Flexible</h2>
          <p>You can expand this page with more sections anytime.</p>
        </article>
      </section>

      <section id="about" className="about-card">
        <h2>About this page</h2>
        <p>
          You can now customize the text, colors, and sections to match your project.
        </p>
      </section>
    </main>
  )
}

export default App
