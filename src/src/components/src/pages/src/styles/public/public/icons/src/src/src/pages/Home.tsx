import Header from "../components/Header";
import MarineDashboard from "../components/MarineDashboard";
import MapPlaceholder from "../components/MapPlaceholder";
import BottomNav from "../components/BottomNav";

export default function Home() {
  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <MarineDashboard />

        <MapPlaceholder />

        <section className="quick-actions">
          <button>
            <span>📍</span>
            GPS
          </button>

          <button>
            <span>🧭</span>
            Compass
          </button>

          <button>
            <span>📌</span>
            Point
          </button>

          <button>
            <span>🗺️</span>
            Map
          </button>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}
