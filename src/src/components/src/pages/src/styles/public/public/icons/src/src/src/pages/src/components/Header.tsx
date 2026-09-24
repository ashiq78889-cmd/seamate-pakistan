export default function Header() {
  return (
    <header className="top-header">

      <div className="brand">
        <div className="brand-icon">
          🌊
        </div>

        <div>
          <h1>SeaMate Pakistan</h1>
          <p>Marine GPS & Navigation</p>
        </div>
      </div>

      <div className="status-area">
        <span className="gps-status">
          <i></i>
          GPS ON
        </span>

        <span className="free-badge">
          FREE
        </span>
      </div>

    </header>
  );
}
