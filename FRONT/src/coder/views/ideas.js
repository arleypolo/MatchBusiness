import { getToken, getUser } from "../../auth/token.js";

export function ideasView() {
    const view = `
    <div class="w-full bg-gray-50 min-h-screen">
        <main class="max-w-4xl mx-auto py-8 px-2">
            <h1 class="text-2xl font-bold text-center mb-2">See The Ideas and Match</h1>
            <div class="text-center mb-6">
                <span class="block text-gray-400 text-sm">Ideas enviadas por mí.</span>
            </div>
            <div class="flex justify-end">
                <button
                id="addIdea" class="w-38 bg-blue-500 hover:bg-blue-600 text-white font-medium py-1.5 px-4 rounded-md text-sm shadow-md mb-4 transition">
                    Agregar Idea 💡
                </button>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="ideas-list">
            </div>
            <div id="modal-overlay" class="fixed inset-0 bg-black/50 flex items-center justify-center hidden">
                <div class="bg-white rounded-2xl shadow-lg w-full max-w-lg p-6">
                    <h2 id="proposal" class="text-xl font-bold mb-4">Editar Propuesta - </h2>
                    <div id="challenge-info" class="mb-4">
                        <b class="block mb-1 text-gray-800">Información del Desafío</b>
                        <p id="company" class="text-gray-600">Empresa: </p>
                    </div>
                    <div id="warning" class="bg-yellow-100 border-l-4 border-yellow-500 p-3 rounded-md mb-4">
                        <h4 class="font-semibold text-yellow-700">Importante</h4>
                        <p class="text-sm text-yellow-700">
                            Solo puedes editar propuestas que están en estado "Pendiente" o "En revisión".
                            Una vez edites tu propuesta, la empresa será notificada del cambio
                        </p>
                    </div>
                    <div class="mb-3">
                        <h3 class="font-semibold text-gray-800 mb-1">Título de tu Propuesta *</h3>
                        <input type="text" id="inp-title"
                            class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    </div>
                    <div class="mb-4">
                        <h3 class="font-semibold text-gray-800 mb-1">Descripción de tu propuesta *</h3>
                        <textarea id="txt-description" rows="4"
                            class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                    </div>
                    <div class="flex justify-end gap-2">
                        <button id="btn-cancel"
                            class="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold">
                            <i class="fa-solid fa-xmark"></i> Cancelar
                        </button>
                        <button id="btn-save"
                            class="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                            <i class="fa-solid fa-floppy-disk"></i> Guardar
                        </button>
                    </div>
                </div>
            </div>
            <div id="add-modal-overlay" class="fixed inset-0 bg-black/50 flex items-center justify-center hidden">
                <div class="bg-white rounded-2xl shadow-lg w-full max-w-lg p-6">
                    <h2 id="append" class="text-xl font-bold mb-4">+ Agregar Nueva Propuesta </h2>
                    <div id="warning" class="bg-yellow-100 border-l-4 border-yellow-500 p-3 rounded-md mb-4">
                        <h4 class="font-semibold text-yellow-700">Nueva Propuesta</h4>
                        <p class="text-sm text-yellow-700">
                            Envia tu propuesta innovadora a las empresas aliadas. Asegúrate de ser específico sobre tu
                            enfoque, metodología y el valor que puedes aportar
                        </p>
                    </div>
                    <div class="mb-3">
                        <h3 class="font-semibold text-gray-800 mb-1">Seleccionar Empresa *</h3>
                        <select id="newIdeaCompany"
                            class="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        </select>
                        <h3 class="font-semibold text-gray-800 mb-1">Título de tu Propuesta  *</h3>
                        <input type="text" id="inp-title-addIdea"
                            class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    </div>

                    <div class="mb-4">
                        <h3 class="font-semibold text-gray-800 mb-1">Descripción de tu propuesta *</h3>
                        <textarea id="txt-description-addIdea" rows="4"
                            class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                    </div>
                    <div class="flex justify-end gap-2">
                        <button id="btn-cancel-add"
                            class="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold">
                            <i class="fa-solid fa-xmark"></i> Cancelar
                        </button>
                        <button id="btn-save-add"
                            class="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                            <i class="fa-solid fa-floppy-disk"></i> Guardar
                        </button>
                    </div>
                </div>
            </div>
        </main>
    </div>
    `
    return view;
}

export async function ideasSetup() {
    const ideas = await getIdeas(getUser().id);
    const container = document.getElementById('ideas-list');
    container.innerHTML = '';
    for (const idea of ideas) {
        container.innerHTML += `
        <div class="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden flex flex-col">
            <div class="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
            <div class="w-12 h-12 flex items-center justify-center rounded-md text-white font-bold text-lg">
                ${getCompanyLogo(idea.company_name)} 
            </div>
            <div>
                <h3 class="font-semibold text-gray-900">${idea.company_name || 'Empresa'}</h3>
            </div>
            </div>
            <div class="px-5 py-4 flex flex-col flex-1">
            <h2 class="font-bold text-lg text-gray-900 mb-2">${idea.title}</h2>
            <p class="text-sm text-gray-600 mb-4">${idea.description}</p>
            <div class="flex items-center text-xs text-gray-500 mt-auto">
                <span class="mr-1">📅</span>
                <span>Fecha: ${new Date(idea.created_at).toLocaleDateString()}</span>
            </div>
            </div>
            <div class="px-5 py-4 border-t border-gray-100">
            <button class="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 rounded-lg transition" data-id="${idea.id_idea}">
                Edit
            </button>
            </div>
        </div>
        `
    }
    addIdea();
    editIdea();
}

async function getIdeas(id) {
    try {
        const token = getToken();
        const res = await fetch(`http://localhost:3000/ideas/iduser/${id}`);
        if (!res.ok) {
            throw new Error('Failed to fetch matches');
        }
        const ideas = await res.json();
        return ideas;
    } catch (error) {
        console.error("Error fetching matches:", error);
    }
}

function getCompanyLogo(company) {
    switch (company) {
        case 'Smart Fit':
            return '<img src="./assets/smart-fit-logo.png" class="w-12 h-12 object-contain" alt="Smartfit">';
        case 'Auteco':
            return '<img src="./assets/auteco-logo.png" class="w-12 h-12 object-contain" alt="Auteco">';
        case 'Celsia':
            return '<img src="./assets/celsiaLogo.png" class="w-12 h-12 object-contain" alt="Auteco">';
        case 'Auteco':
            return '<img src="./assets/auteco-logo.png" class="w-12 h-12 object-contain" alt="Auteco">';
        default:
            return `<div class="w-12 h-12 flex items-center justify-center rounded-md bg-red-500 text-white font-bold text-lg">
                ${company ? company[0] : "?"}
              </div>`;
    }
}

function addIdea() {
    document.getElementById('addIdea').addEventListener('click', async (event) => {
        event.preventDefault();
        document.getElementById("add-modal-overlay").classList.remove("hidden");
        document.getElementById("add-modal-overlay").classList.add("flex");

        const selectCompany = document.getElementById('newIdeaCompany');

        const res = await fetch("http://localhost:3000/companies");
        if (!res.ok) {
            throw new Error(`Error http: ${res.status}`);
        }
        const companies = await res.json();
        // const companies = await getCompanies();
        
        companies.forEach(company => {
            console.log(company.id_company);
            console.log(company.company_name);

            const companyOption = document.createElement('option');
            companyOption.value = company.id_company;
            companyOption.textContent = company.company_name;
            selectCompany.appendChild(companyOption)

        });
    })
    document.getElementById('btn-cancel-add').addEventListener('click', () => {
        document.getElementById("add-modal-overlay").classList.add("hidden");
        document.getElementById("add-modal-overlay").classList.remove("flex");
    })
    document.getElementById('btn-save-add').addEventListener('click', async (event) => {
        event.preventDefault();
        const newIdeaTitle = document.getElementById('inp-title-addIdea').value;
        const newIdeaDescp = document.getElementById('txt-description-addIdea').value;

        const userId = getUser().id;
        const companyId = document.getElementById('newIdeaCompany').value;

        if (!newIdeaTitle || !newIdeaDescp || !companyId) {
            alert('Por favor, completa todos los campos.');
            return;
        }
        const newIdea = {
            id_coder: userId,
            id_company: companyId,
            title: newIdeaTitle,
            description: newIdeaDescp
        };
        await postIdea(newIdea);
        location.reload();
    })
}

async function postIdea(newIdea) {
  try {
    const res = await fetch(`http://localhost:3000/ideas`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newIdea)
    });

    if (!res.ok) {
      throw new Error(`Error HTTP: ${res.status}`)
    }
  } catch (err) {
    alert('Error al agregar la idea')
  }
}

function editIdea() {
  document.getElementById('ideas-list').addEventListener('click', async (event) => {
    if (event.target.matches("button[data-id]")) {
      event.preventDefault();

      const id_idea = event.target.dataset.id;

      document.getElementById("modal-overlay").classList.remove("hidden");
      document.getElementById("modal-overlay").classList.add("flex");

      const company = event.target.parentElement.parentElement.querySelector('h3').innerText;
      const title = event.target.parentElement.parentElement.querySelector('h2').innerText;

      document.getElementById('proposal').innerHTML = `Editar Propuesta - ${company}`
      document.getElementById('company').innerHTML = `Empresa: ${title}`

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
        await putIdea(id_idea, updatedData);
        location.reload();
      })
    }
  })
}

async function putIdea(idIdea, updatedData) {
  try {
    const res = await fetch(`http://localhost:3000/ideas/${idIdea}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedData)
    });

    if (!res.ok) {
      throw new Error(`Error HTTP: ${res.status}`)
    }
  } catch (err) {
    alert('Error al actualizar la idea')
  }
}