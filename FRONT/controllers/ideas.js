async function getIdeas(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error('Error al obtener ideas');
  return await response.json();
}

document.addEventListener('DOMContentLoaded', async () => {
  // Selecciona el contenedor correcto por clase (según ideas.html)
  const ideasContainer = document.querySelector('.ideas-list');
  if (!ideasContainer) return;

  try {
    const ideas = await getIdeas('http://localhost:3000/ideas');
    if (!Array.isArray(ideas) || ideas.length === 0) {
      ideasContainer.innerHTML = '<p>No hay ideas registradas.</p>';
      return;
    }
    ideasContainer.innerHTML = ideas.map(idea => `
      <div class="idea-card">
        <h3>${idea.title || idea.titulo || 'Sin título'}</h3>
        <p>${idea.description || idea.descripcion || ''}</p>
        <span>ID Coder: ${idea.id_coder || ''}</span> <br>
        <span>ID Empresa: ${idea.id_company || ''}</span>
      </div>
    `).join('');
  } catch (err) {
    ideasContainer.innerHTML = `<p style="color:red;">No se pudieron cargar las ideas.</p>`;
  }
});