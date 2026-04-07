function showPage(page) {
  const content = document.getElementById("content");

  if (page === "home") {
    content.innerHTML = `
      <div class="page">
        <h1>Bienvenue sur Rift FA</h1>
        <p>Choisissez une section.</p>
      </div>
    `;
  } else if (page === "general" || page === "streamer") {
    content.innerHTML = `
      <div class="page logo-background"></div>
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
