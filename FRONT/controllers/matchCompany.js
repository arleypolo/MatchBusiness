
import { getUserId } from './session.js';

async function getMatchesById(id) {
  const response = await fetch(`http://localhost:3000/matches/${id}`);
  if (!response.ok) throw new Error('Error al obtener matches');
  return await response.json();
}

document.addEventListener('DOMContentLoaded', () => {
  const matchesBtn = document.getElementById('btn-matches');
  const matchContainer = document.getElementById('match-list');
  if (!matchesBtn || !matchContainer) return;

  function renderMatches(matches, container) {
    if (!Array.isArray(matches) || matches.length === 0) {
      container.innerHTML = '<p class="text-center text-gray-400">No hay matches registrados.</p>';
      return;
    }
    container.innerHTML = matches.map(match => {
      const matchTitle = match.title || 'Sin título';
      const matchDesc = match.description || 'Sin descripción';
      const company = match.company || 'Sin empresa';
      const status = match.match_status || 'Pendiente';
      const date = match.match_date ? new Date(match.match_date).toLocaleDateString() : '';
      return `
        <div class="bg-white rounded-2xl shadow-md border border-gray-200 p-6 flex flex-col gap-4 md:flex-row md:gap-6 max-w-3xl mx-auto">
          <div class="flex flex-col items-center md:items-start gap-2 w-full md:w-1/4">
            <div class="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-xl font-bold text-white">${company.slice(0,2).toUpperCase()}</div>
            <span class="font-semibold text-gray-800">${company}</span>
          </div>
          <div class="flex-1">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
              <div class="flex items-center gap-2">
                <span class="font-bold text-lg text-gray-900">${matchTitle}</span>
                <span class="px-2 py-1 rounded-full text-xs font-semibold bg-pink-100 text-pink-700">${status}</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-pink-600 font-bold text-sm">${company}</span>
              </div>
            </div>
            <div class="text-gray-700 mb-2">
              <span class="font-semibold">Propuesta:</span> ${matchDesc}
            </div>
            <div class="text-xs text-purple-500 mb-2">${date ? `Aceptado: ${date}` : ''}</div>
            <div class="flex gap-2 mt-2">
              <button class="border border-gray-300 rounded-lg px-3 py-1 text-xs flex items-center gap-1"><span>👁️</span> Ver Perfil Completo</button>
              <button class="bg-blue-100 text-blue-700 rounded-lg px-3 py-1 text-xs font-semibold">Contactar Riwi para Proceder</button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // Cargar matches automáticamente al cargar la página
  async function loadMatches() {
    try {
      const userId = getUserId();
      if (!userId) {
        matchContainer.innerHTML = `<p class="text-center text-red-500">Debes iniciar sesión para ver tus matches.</p>`;
        return;
      }
      const matches = await getMatchesById(userId);
      renderMatches(matches, matchContainer);
    } catch (err) {
      matchContainer.innerHTML = `<p class="text-center text-red-500">No se pudieron cargar los matches.</p>`;
    }
  }

  loadMatches();
  matchesBtn.addEventListener('click', loadMatches);
});