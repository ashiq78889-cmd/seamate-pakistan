export default function MarineDashboard() {
  return (
    <section className="dashboard">

      <div className="compass">

        <div className="compass-ring">

          <span className="north">N</span>
          <span className="east">E</span>
          <span className="south">S</span>
          <span className="west">W</span>

          <div className="compass-needle"></div>

          <div className="compass-center">
            000°
          </div>

        </div>

        <small>HEADING</small>

      </div>

      <div className="position-grid">

        <div className="position-card">
          <label>LATITUDE</label>
          <strong>--° --.---' N</strong>
        </div>

        <div className="position-card">
          <label>LONGITUDE</label>
          <strong>--° --.---' E</strong>
        </div>

      </div>

      <div className="navigation-stats">

        <div>
          <label>SOG</label>
          <strong>
            0.0 <small>kn</small>
          </strong>
        </div>

        <div>
          <label>COG</label>
          <strong>000°</strong>
        </div>

        <div>
          <label>GPS ACCURACY</label>
          <strong>-- m</strong>
        </div>

      </div>

    </section>
  );
}
