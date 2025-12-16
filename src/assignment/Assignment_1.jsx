import "./Assignment_1.css";

export default function Assignment_1() {
  return (
    <div className="card">
      <header className="header">
        <div className="logo">
          HUMMING
          <br />
          BIRD.
        </div>

        <nav className="nav">
          <span>Episodes</span>
          <span>About</span>
        </nav>

        <div className="hamburger">☰</div>
      </header>

      <main className="content">
        <h1>
          FLUTTER WEB.
          <br />
          THE BASICS
        </h1>

        <div className="text-row">
          <p>
            In this course we will go over the basics of using Flutter Web for
            development. Topics will include Responsive Layout, Deploying, Font
            Changes, Hover functionality, Modals and more.
          </p>

          <button className="btn">Join course</button>
        </div>
      </main>
    </div>
  );
}
