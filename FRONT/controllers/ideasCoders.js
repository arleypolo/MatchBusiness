import { getUserId } from './session.js';

async function getIdeasById(id) {
  const response = await fetch(`http://localhost:3000/ideas/iduser/${id}`);
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


  container.className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"; // grid responsive como la foto

  container.innerHTML = ideas.map(idea => {
    const ideaTitle = idea.title || 'Sin título';
    const ideaDesc = idea.description || 'Sin descripción';
    const date = idea.created_at ? new Date(idea.created_at).toLocaleDateString() : '';

    function getCompanyLogo(company) {
      switch (company) {
        case 'Smart Fit':
          return '<img src="../resource/images/smart-fit-logo.png" class="w-12 h-12 object-contain" alt="Smartfit">';
        case 'Auteco':
          return '<img src="../resource/images/auteco-logo.png" class="w-12 h-12 object-contain" alt="Auteco">';
        case 'Celsia':
          return '<img src="../resource/images/celsiaLogo.png" class="w-12 h-12 object-contain" alt="Auteco">';
        case 'Auteco':
          return '<img src="../resource/images/auteco-logo.png" class="w-12 h-12 object-contain" alt="Auteco">';
        default:
          // fallback: iniciales
          return `<div class="w-12 h-12 flex items-center justify-center rounded-md bg-red-500 text-white font-bold text-lg">
                ${company ? company[0] : "?"}
              </div>`;
      }
    }

    return `
      <div class="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden flex flex-col">

        <!-- Header -->
        <div class="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
          <div class="w-12 h-12 flex items-center justify-center rounded-md text-white font-bold text-lg">
            ${getCompanyLogo(idea.company_name)} 
          </div>
          <div>
            <h3 class="font-semibold text-gray-900">${idea.company_name || 'Empresa'}</h3>
          </div>
        </div>

        <!-- Body -->
        <div class="px-5 py-4 flex flex-col flex-1">
          <h2 class="font-bold text-lg text-gray-900 mb-2">${ideaTitle}</h2>
          <p class="text-sm text-gray-600 mb-4">${ideaDesc}</p>

          <div class="flex items-center text-xs text-gray-500 mt-auto">
            <span class="mr-1">📅</span>
            <span>Fecha: ${date}</span>
          </div>
        </div>

        <!-- Footer -->
        <div class="px-5 py-4 border-t border-gray-100">
          <button class="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 rounded-lg transition" data-id="${idea.id_idea}">
            Edit
          </button>
        </div>

      </div>
    `;
  }).join('');
}



function editIdea() {
  document.getElementById('ideas-list').addEventListener('click', async (event) => {
    if (event.target.matches("button[data-id]")) {
      event.preventDefault();
      document.getElementById("modal-overlay").classList.remove("hidden");
      document.getElementById("modal-overlay").classList.add("flex");

      const idea = await getIdea(event.target.dataset.id);

      document.getElementById('proposal').innerHTML = `Editar Propuesta - ${idea.title}`
      document.getElementById('company').innerHTML = `Empresa: ${idea.company}`
      
      console.log(idea.id_idea)

      document.getElementById('btn-cancel').addEventListener('click', () => {
        document.getElementById("modal-overlay").classList.add("hidden");
        document.getElementById("modal-overlay").classList.remove("flex");
      })

      document.getElementById('btn-save').addEventListener('click', async (event) => {
        event.preventDefault();
        const newTitle = document.getElementById('inp-title').value;
        const newDescp = document.getElementById('txt-description').value;

        const updatedData = {
          title: newTitle,
          description: newDescp
        };

        await putIdea(idea.id_idea, updatedData);
        location.reload();
      })
    }
  })
}

async function getIdea(ideaId){
  try{
    console.log(ideaId)
    const res = await fetch(`http://localhost:3000/ideas/${ideaId}`)
    if (!res.ok){
      throw new Error(`Error http: ${res.status}`);
    }
    const idea = await res.json();

    const res1 = await fetch(`http://localhost:3000/companies/${idea[0].id_company}`)
    if (!res1.ok){
      throw new Error(`Error http: ${res1.status}`)
    }
    const company = await res1.json();

    idea[0]['company'] = company[0].company_name

    return idea[0]

  } catch(err) {
    console.error("There was an error bringing info: ",err)
  }
}

async function putIdea(idIdea, updatedData){
  try{
    const res = await fetch(`http://localhost:3000/ideas/${idIdea}`,{
      method: "PUT",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(updatedData) 
    });

    if (!res.ok){
      throw new Error(`Error HTTP: ${res.status}`)
    }
  } catch (err){
    alert('Error al actualizar la idea')
  }
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
  editIdea();
  ideasBtn.addEventListener('click', loadIdeas);
});