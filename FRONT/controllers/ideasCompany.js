import { getUserId } from './session.js';

async function getIdeasById(id) {
  const response = await fetch(`http://localhost:3000/ideas/coder/${id}`);
  if (!response.ok) throw new Error('Error al obtener ideas');
  return await response.json();
}

function getInitialsFromId(id) {
  if (!id) return '';
  return String(id).slice(0, 2).toUpperCase();
}

function renderIdeas(ideas, container) {
  if (!Array.isArray(ideas) || ideas.length === 0) {
    container.innerHTML = '<p class="text-center text-gray-400">No hay ideas registradas.</p>';
    return;
  }
  container.innerHTML = ideas.map(idea => {
    const ideaTitle = idea.title || 'Sin título';
    const ideaDesc = idea.description || 'Sin descripción';
    const date = idea.created_at ? new Date(idea.created_at).toLocaleDateString() : '';
    return `
      <div class="bg-white rounded-2xl shadow-md border border-gray-200 p-6 flex flex-col gap-4 max-w-3xl mx-auto">
        <div class="flex flex-col md:flex-row md:gap-6">
          <div class="flex flex-col items-center md:items-start gap-2 w-full md:w-1/4 mb-4 md:mb-0">
            <div class="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-xl font-bold text-white">${getInitialsFromId(idea.id_coder)}</div>
            <span class="font-semibold text-gray-800">ID: ${idea.id_coder}</span>
          </div>
          <div class="flex-1">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
              <div class="flex items-center gap-2">
                <span class="font-bold text-lg text-gray-900">${ideaTitle}</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-pink-600 font-bold text-sm">Empresa: ${idea.id_company}</span>
              </div>
            </div>
            <div class="text-gray-700 mb-2">
              <span class="font-semibold">Propuesta:</span> ${ideaDesc}
            </div>
            <div class="text-xs text-purple-500 mb-2">${date ? `Enviado: ${date}` : ''}</div>
            <div class="flex gap-2 mt-2 w-full justify-start">
              <button class="border border-gray-300 rounded-lg px-3 py-1 text-xs flex items-center gap-1"><span>👁️</span> Ver Perfil Completo</button>
              <button class="bg-pink-100 text-pink-700 rounded-lg px-3 py-1 text-xs font-semibold"><span>💖</span> Match! </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}


document.addEventListener('DOMContentLoaded', () => {
  const ideasBtn = document.getElementById('btn-ideas');
  const ideasContainer = document.getElementById('ideas-list');
  if (!ideasBtn || !ideasContainer) return;

  // Cargar ideas automáticamente al cargar la página
  async function loadIdeas() {
    try {
      const userId = getUserId();
      if (!userId) {
        ideasContainer.innerHTML = `<p class="text-center text-red-500">Debes iniciar sesión para ver tus ideas.</p>`;
        return;
      }
      const ideas = await getIdeasById(userId);
      renderIdeas(ideas, ideasContainer);
    } catch (err) {
      ideasContainer.innerHTML = `<p class="text-center text-red-500">No se pudieron cargar las ideas.</p>`;
    }
  }

  loadIdeas();
  ideasBtn.addEventListener('click', loadIdeas);
});