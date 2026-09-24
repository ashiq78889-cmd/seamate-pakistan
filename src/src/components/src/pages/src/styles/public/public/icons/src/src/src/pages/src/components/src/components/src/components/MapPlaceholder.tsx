export default function MapPlaceholder() {
  return (
    <section className="map-container">

      <div className="map-grid"></div>

      <div className="map-top-label">
        MARINE MAP
      </div>

      <div className="boat-marker">
        🛥️
      </div>

      <div className="map-message">
        <strong>Waiting for GPS</strong>

        <span>
          Your boat position will appear here
        </span>
      </div>

      <div className="scale">
        0 ───── 0.5 ───── 1 NM
      </div>

    </section>
  );
}
