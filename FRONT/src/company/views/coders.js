import { getToken } from "../../auth/token.js";

// View for displaying coders list and profile modal
export function codersView() {
    const view = `
    <div class="max-w-6xl mx-auto py-10 px-4">
        <h1 class="text-4xl font-bold text-center mb-2">Talented Coders</h1>
        <p class="text-center text-gray-500 mb-8">Meet our community of skilled developers ready to tackle your next
        challenge.</p>
        <div class="flex items-center justify-between mb-6">
        <div></div>
        <div class="flex items-center gap-2">
            <button class="border rounded-lg px-3 py-2 flex items-center gap-2 text-gray-500"><svg
                xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg> </button>
            <select id="skillsFilter" class="border rounded px-3 py-2 text-gray-500">
            <option value="">All Skills</option>
            </select>
        </div>
        </div>
        <!-- Container -->

        <div id="coders-list" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        </div>

        <!-- View profile modal -->

        <div id="modal-overlay" class="fixed inset-0 bg-black bg-opacity-50 hidden items-center justify-center z-50">
        <div class="bg-white rounded-2xl shadow-lg w-full max-w-md p-6">
            <div class="flex items-center gap-3 mb-4">
            <i class="fa-solid fa-user text-2xl text-gray-700"></i>
            <div>
                <h3 id="name-coder" class="text-xl font-semibold">
                
                </h3>
                <h5 id="status-coder" class="text-sm text-gray-500">Active</h5>
            </div>
            </div>
            <p id="txt-coderDescription" class="text-gray-600 mb-4">
            
            </p>
            <div class="flex items-center gap-2 mb-2">
            <i class="fa-solid fa-trophy text-yellow-500"></i>
            <p id="num-ideas" class="text-gray-700">
                
            </p>
            </div>
            <div class="flex items-center gap-2 mb-4">
            <i class="fa-solid fa-envelope text-blue-500"></i>
            <p id="phone-coder" class="text-gray-700">
                
            </p>
            </div>
            <div class="flex justify-end gap-2">
            <button id="btn-modalclose" class="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400">
                Close
            </button>
            </div>
        </div>
        </div>

    </div>
    `
    return view;
}

// Setup function to fetch and render coders
export async function codersSetup() {
    const coders = await getCoders();
    const container = document.getElementById('coders-list');
    container.innerHTML = '';
    for (const coder of coders) {
        container.innerHTML += `
        <div id="div-coders" class="bg-white rounded-2xl shadow-md border border-gray-200 p-6 flex flex-col gap-4 items-start">
            <div class="flex items-center gap-4 mb-2">
            <div class="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-xl font-bold text-white">
            ${coder.first_name[0].toUpperCase()}${coder.last_name[0].toUpperCase()}
            </div>
            <div>
                <div class="font-bold text-lg text-gray-900">
                ${coder.first_name} ${coder.last_name}
                </div>
            </div>
            </div>
            <div class="text-gray-700 mb-4">
            ${coder.description}
            </div>
            <button class="w-full bg-blue-600 text-white rounded-lg px-4 py-2 font-semibold" data-id="${coder.id_coder}">View Profile</button>
        </div>
        `
    }
    viewProfile();
}

// Fetch all coders from API
async function getCoders() {
    try {
        const token = getToken();
        const res = await fetch('http://localhost:3000/coders', {
            headers: {
                'Content-Type': 'application/json',
                ...(token ? { 'Authorization': `Bearer ${token}` } : {})
            }
        });
        if (!res.ok) {
            throw new Error('Failed to fetch coders');
        }
        const coders = await res.json();
        return coders;

    } catch (error) {
        console.error("Error fetching coders:", error);
    }
}

// Handle view profile modal logic
function viewProfile() {
  document.getElementById("coders-list").addEventListener('click', async (event) => {
    if (event.target.matches("button[data-id]")) {
      event.preventDefault();
      const coderName = document.getElementById('name-coder');
      const coderDescp = document.getElementById('txt-coderDescription');
      const numIdeas = document.getElementById('num-ideas');
      const coderPhone = document.getElementById('phone-coder');

      const coder = await getCoder(event.target.dataset.id);

      coderName.innerHTML = `${coder.first_name} ${coder.last_name}`
      coderDescp.innerHTML = coder.description
      numIdeas.innerHTML = `${coder.ideas} Ideas published`
      coderPhone.innerHTML = coder.phone

      document.getElementById("modal-overlay").classList.remove("hidden");
      document.getElementById("modal-overlay").classList.add("flex");

      document.getElementById('btn-modalclose').addEventListener('click', (event) => {
        document.getElementById("modal-overlay").classList.add("hidden");
        document.getElementById("modal-overlay").classList.remove("flex");
      })

    }
  })
};

// Fetch coder details and number of ideas
async function getCoder(coderId){
  try{
    const token = getToken();
    const res = await fetch(`http://localhost:3000/coders/${coderId}`, {
      headers:{
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization':`Bearer ${token}` }: {})
      }
    });
    const res1 = await fetch(`http://localhost:3000/ideas/iduser/${coderId}`, {
      headers:{
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization':`Bearer ${token}` }: {})
      }
    });

    if (!res.ok) {
      const errorBody = await res.text();
      throw new Error(`Coders error: ${res.status} - ${errorBody}`);
    }
    if (!res1.ok) {
      const errorBody = await res1.text();
      throw new Error(`Ideas error: ${res1.status} - ${errorBody}`);
    }

    const coder = await res.json();
    const numideas = await res1.json();
    coder['ideas'] = numideas.length

    return coder;

  } catch (err){
    console.error("There was an error bringing the coder: ",err)
  }
}