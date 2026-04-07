function showPage(page) {
  const content = document.getElementById("content");

  if (page === "home") {
    content.innerHTML = `
      <section class="hero">
        <div class="hero-overlay">
          <button class="hero-title">REGLEMENT</button>

          <div class="card-grid">
            <div class="card" onclick="showPage('general')">
              <img src="meteor-logo-rift-roleplay-wbgd.png" alt="Général">
              <span>Général</span>
            </div>

            <div class="card" onclick="showPage('lspd')">
              <img src="meteor-logo-rift-roleplay-green.png" alt="Légal">
              <span>Légal</span>
            </div>

            <div class="card" onclick="showPage('illegal')">
              <img src="meteor-logo-rift-roleplay-red.png" alt="Illégal">
              <span>Illégal</span>
            </div>
          </div>
        </div>
      </section>
    `;
  } else if (page === "general") {
    content.innerHTML = `
      <section class="subpage">
        <div class="subpage-hero">
          <button class="hero-title">Règlement Général</button>
        </div>
      </section>
    `;
  } else if (page === "streamer") {
    content.innerHTML = `
      <section class="subpage">
        <div class="subpage-hero">
          <button class="hero-title">Règlement Streamer</button>
        </div>
      </section>
    `;
  } else if (page === "lspd") {
    content.innerHTML = `
      <section class="subpage">
        <div class="subpage-hero">
          <button class="hero-title">Services Publique</button>
        </div>
      </section>
    `;
  } else if (page === "ems") {
    content.innerHTML = `
      <section class="subpage">
        <div class="subpage-hero">
          <button class="hero-title">Immobilier</button>
        </div>
      </section>
    `;
  } else if (page === "illegal") {
    content.innerHTML = `
      <section class="subpage">
        <div class="subpage-hero">
          <button class="hero-title">Illégal</button>
        </div>
      </section>
    `;
  }
}

showPage("home");
