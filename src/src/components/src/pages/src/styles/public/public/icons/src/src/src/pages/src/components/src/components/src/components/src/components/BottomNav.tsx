export default function BottomNav() {
  return (
    <nav className="bottom-nav">

      <button className="active">
        <span>🧭</span>
        <small>Navigate</small>
      </button>

      <button>
        <span>📍</span>
        <small>Points</small>
      </button>

      <button>
        <span>🗺️</span>
        <small>Routes</small>
      </button>

      <button>
        <span>☁️</span>
        <small>Weather</small>
      </button>

      <button>
        <span>⚙️</span>
        <small>Settings</small>
      </button>

    </nav>
  );
}
