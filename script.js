function showPage(page) {
  const content = document.getElementById("content");

  if (page === "home") {
    content.innerHTML = `
      <div class="page">
        <h1>Bienvenue sur Rift FA</h1>
        <p>Choisissez une section.</p>
      </div>
    `;
  } else if (page === "general") {
    content.innerHTML = `
      <div class="page">
        <img class="banner" src="meteor-logo-rift-roleplay-bgd.png" alt="Bannière Rift FA">
        <h1>Règlement Général</h1>
        <p>Ici tu pourras mettre tout le règlement général.</p>
      </div>
    `;
  } else if (page === "streamer") {
    content.innerHTML = `
      <div class="page">
        <img class="banner" src="meteor-logo-rift-roleplay-bgd.png" alt="Bannière Streamer">
        <h1>Règlement Streamer</h1>
        <p>Ici tu pourras mettre les règles stream.</p>
      </div>
    `;
  } else if (page === "lspd") {
    content.innerHTML = `
      <div class="page">
        <h1>LSPD / Sheriff</h1>
        <p>Règlement police.</p>
      </div>
    `;
  } else if (page === "ems") {
    content.innerHTML = `
      <div class="page">
        <h1>EMS</h1>
        <p>Règlement médical.</p>
      </div>
    `;
  } else if (page === "illegal") {
    content.innerHTML = `
      <div class="page">
        <h1>Illégal</h1>
        <p>Contenu à venir...</p>
      </div>
    `;
  }
}

showPage("home");
