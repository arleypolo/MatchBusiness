async function getIdeas(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error('Error al obtener ideas');
  return await response.json();
}

document.addEventListener('DOMContentLoaded', async () => {
  const ideasContainer = document.getElementById('ideas-list');
  if (!ideasContainer) return;

  function getInitials(name) {
    if (!name) return '';
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0,2);
  }

  try {
    const ideas = await getIdeas('http://localhost:3000/ideas');
    if (!Array.isArray(ideas) || ideas.length === 0) {
      ideasContainer.innerHTML = '<p class="text-center text-gray-400">No hay ideas registradas.</p>';
      return;
    }
    ideasContainer.innerHTML = ideas.map(idea => {
      // Simulación de datos para demo visual
      const coderName = idea.coder_name || 'María González';
      const companyName = idea.company_name || 'Sistecrédito';
      const ideaTitle = idea.title || 'API Integration System';
      const ideaDesc = idea.description || 'Sin descripción';
      const status = idea.status || 'Pendiente';
      const date = idea.created_at ? new Date(idea.created_at).toLocaleDateString() : '15/1/2024';
      const isMatch = idea.status === 'Match';
      return `
      <div class="bg-white rounded-2xl shadow-md border border-gray-200 p-6 flex flex-col gap-4 md:flex-row md:gap-6 max-w-3xl mx-auto">
        <div class="flex flex-col items-center md:items-start gap-2 w-full md:w-1/4">
          <div class="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-xl font-bold text-white">${getInitials(coderName)}</div>
          <span class="font-semibold text-gray-800">${coderName}</span>
        </div>
        <div class="flex-1">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
            <div class="flex items-center gap-2">
              <span class="font-bold text-lg text-gray-900">${ideaTitle}</span>
              <span class="px-2 py-1 rounded-full text-xs font-semibold ${isMatch ? 'bg-pink-100 text-pink-700' : 'bg-yellow-100 text-yellow-700'}">${status}</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-pink-600 font-bold text-sm">${companyName}</span>
            </div>
          </div>
          <div class="text-gray-700 mb-2">
            <span class="font-semibold">Propuesta:</span> ${ideaDesc}
          </div>
          <div class="text-xs text-purple-500 mb-2">Enviado: ${date}</div>
          <div class="flex gap-2 mt-2">
            <button class="border border-gray-300 rounded-lg px-3 py-1 text-xs flex items-center gap-1"><span>👁️</span> Ver Perfil Completo</button>
            ${isMatch
              ? `<button class="bg-green-100 text-green-700 rounded-lg px-3 py-1 text-xs font-semibold">Contactar Riwi para Proceder</button>`
              : `<button class="bg-pink-500 text-white rounded-lg px-3 py-1 text-xs font-semibold">❤ Match!</button>`}
          </div>
        </div>
      </div>
      `;
    }).join('');
  } catch (err) {
    ideasContainer.innerHTML = `<p class=\"text-center text-red-500\">No se pudieron cargar las ideas.</p>`;
  }
});