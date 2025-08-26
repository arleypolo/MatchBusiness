async function getMatches(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error('Error al obtener matches');
  return await response.json();
}

document.addEventListener('DOMContentLoaded', async () => {
  const matchContainer = document.getElementById('match-list');
  if (!matchContainer) return;

  function getInitials(name) {
    if (!name) return '';
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0,2);
  }

  try {
    const matches = await getMatches('http://localhost:3000/matches');
    if (!Array.isArray(matches) || matches.length === 0) {
      matchContainer.innerHTML = '<p class="text-center text-gray-400">No hay matches registrados.</p>';
      return;
    }
    matchContainer.innerHTML = matches.map(match => {
      // Simulación de datos para demo visual
      const coderName = match.coder_name || 'María González';
      const companyName = match.company_name || 'Sistecrédito';
      const matchTitle = match.title || 'API Integration System';
      const matchDesc = match.description || 'Sin descripción';
      const date = match.created_at ? new Date(match.created_at).toLocaleDateString() : '15/1/2024';
      return `
      <div class="bg-white rounded-2xl shadow-md border border-gray-200 p-6 flex flex-col gap-4 md:flex-row md:gap-6 max-w-3xl mx-auto">
        <div class="flex flex-col items-center md:items-start gap-2 w-full md:w-1/4">
          <div class="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-xl font-bold text-white">${getInitials(coderName)}</div>
          <span class="font-semibold text-gray-800">${coderName}</span>
        </div>
        <div class="flex-1">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
            <div class="flex items-center gap-2">
              <span class="font-bold text-lg text-gray-900">${matchTitle}</span>
              <span class="px-2 py-1 rounded-full text-xs font-semibold bg-pink-100 text-pink-700">Match</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-pink-600 font-bold text-sm">${companyName}</span>
            </div>
          </div>
          <div class="text-gray-700 mb-2">
            <span class="font-semibold">Propuesta:</span> ${matchDesc}
          </div>
          <div class="text-xs text-purple-500 mb-2">Aceptado: ${date}</div>
          <div class="flex gap-2 mt-2">
            <button class="border border-gray-300 rounded-lg px-3 py-1 text-xs flex items-center gap-1"><span>👁️</span> Ver Perfil Completo</button>
            <button class="bg-green-100 text-green-700 rounded-lg px-3 py-1 text-xs font-semibold">Contactar Riwi para Proceder</button>
          </div>
        </div>
      </div>
      `;
    }).join('');
  } catch (err) {
    matchContainer.innerHTML = `<p class=\"text-center text-red-500\">No se pudieron cargar los matches.</p>`;
  }
});