import "./Assignment_3.css";

export default function Assignment_3() {
  return (
    <div className="page">

      <header className="header3">
        <h1>My Website Header</h1>
      </header>

      <nav className="navbar">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Services</a>
        <a href="">Contact</a>
      </nav>

      <div className="layout">
        <main className="main">

          <h2>Main Content Area</h2>
          <p>
            This is the main content area. It flexibly abjusts with screeen
            size.
          </p>

          <div className="features3">
            <div className="feature-3">Feature 1</div>
            <div className="feature-3">Feature 2</div>
            <div className="feature-3">Feature 3</div>
            <div className="feature-3 full">Feature 4</div>
          </div>
        </main>

        <aside className="sidebar">
          <h2>Sidebar</h2>
          <p>
            This is the sidebar content. On desktop it stays on the right, on
            smaller screens it moves below main content.
          </p>
        </aside>
      </div>

      <footer className="footer">Footer Section © 2025</footer>
    </div>
  );
}
