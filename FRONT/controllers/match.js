async function getMatch(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error('Error al obtener matches');
  return await response.json();
}

document.addEventListener('DOMContentLoaded', async () => {

  const matchesContainer = document.querySelector('.match-list');
  if (!matchesContainer) return;

  try {
    const matches = await getMatch('http://localhost:3000/ideas');
    if (!Array.isArray(matches) || matches.length === 0) {
      matchesContainer.innerHTML = '<p>No hay matches aceptados.</p>';
      return;
    }
    matchesContainer.innerHTML = matches.map(match => `
      <div class="idea-card">
        <h3>${match.title || match.titulo || 'Sin título'}</h3>
        <p>${match.description || match.descripcion || ''}</p>
        <span>ID Coder: ${match.id_coder || ''}</span> <br>
        <span>ID Empresa: ${match.id_company || ''}</span>
      </div>
    `).join('');
  } catch (err) {
    matchesContainer.innerHTML = `<p style="color:red;">No se pudieron cargar las ideas.</p>`;
  }
});