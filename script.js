function showPage(page) {
  const content = document.getElementById("content");

  else if (page === "home") {
    content.innerHTML = "<h1>Bienvenue sur Rift FA</h1><p>Choisissez une section.</p>";
  }

  else if (page === "general" || page === "streamer") {
  content.innerHTML = `<div class="logo-background"></div>`;
}

  else if (page === "lspd") {
    content.innerHTML = "<h1>LSPD / Sheriff</h1><p>Règlement police.</p>";
  }

  else if (page === "ems") {
    content.innerHTML = "<h1>EMS</h1><p>Règlement médical.</p>";
  }

  else if (page === "illegal") {
    content.innerHTML = "<h1>Illégal</h1><p>Contenu à venir...</p>";
  }
}

showPage("home");
