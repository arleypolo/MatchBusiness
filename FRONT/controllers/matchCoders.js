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
    const date = match.match_date ? new Date(match.match_date).toLocaleDateString() : '';
    const nextSteps = 'El equipo de Riwi se pondrá en contacto pronto.';

    return `
      <div class="w-full bg-white shadow-md rounded-2xl border border-gray-200 mb-6 overflow-hidden">
        <!-- Header -->
        <div class="p-4 border-b border-gray-100 flex justify-between items-center bg-blue-50">
          <h2 class="text-lg font-bold text-blue-600">💡 ${matchTitle}</h2>
          <span class="text-sm text-gray-500">${company}</span>
        </div>

        <!-- Body -->
        <div class="p-4 space-y-4">
          <!-- Estado -->
          <div class="bg-green-50 border border-green-200 rounded-xl p-3">
            <p class="text-green-700 font-semibold">✅ ¡Esta empresa está interesada en tu propuesta!</p>
            <p class="text-sm text-gray-500">${date ? `Match realizado el ${date}` : ''}</p>
          </div>

          <!-- Propuesta -->
          <div>
            <h3 class="text-sm font-semibold text-gray-700 mb-1">Tu Propuesta:</h3>
            <p class="text-gray-600 text-sm">${matchDesc}</p>
          </div>

          <!-- Próximos pasos -->
          ${nextSteps ? `
            <div class="bg-green-50 border border-green-200 rounded-xl p-3">
              <p class="text-sm text-green-800">
                <span class="font-semibold">Próximos Pasos:</span> ${nextSteps}
              </p>
            </div>
          ` : ''}
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