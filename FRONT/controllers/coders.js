import { getUserToken } from './session.js';

async function fetchCoders() {
  const token = getUserToken();
  const response = await fetch('http://localhost:3000/coders', {
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { 'Authorization': `Bearer ${token}` } : {})
    }
  });
  if (!response.ok) throw new Error('No se pudieron obtener los coders');
  return await response.json();
}

function getInitials(first, last) {
  return `${(first?.[0] || '').toUpperCase()}${(last?.[0] || '').toUpperCase()}`;
}

function renderCoders(coders, container) {
  if (!Array.isArray(coders) || coders.length === 0) {
    container.innerHTML = '<p class="text-center text-gray-400">No hay coders registrados.</p>';
    return;
  }
  container.innerHTML = coders.map(coder => {
    const initials = getInitials(coder.first_name, coder.last_name);
    const name = `${coder.first_name || ''} ${coder.last_name || ''}`.trim();
    const id_coder = coder.id_coder;
    const desc = coder.description || 'Full-stack developer with 5+ years of experience building scalable web applications. Passionate about clean code and user experience.';
    return `
      <div id="div-coders" class="bg-white rounded-2xl shadow-md border border-gray-200 p-6 flex flex-col gap-4 items-start">
        <div class="flex items-center gap-4 mb-2">
          <div class="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-xl font-bold text-white">${initials}</div>
          <div>
            <div class="font-bold text-lg text-gray-900">${name}</div>
          </div>
        </div>
        <div class="text-gray-700 mb-4">${desc}</div>
        <button class="w-full bg-blue-600 text-white rounded-lg px-4 py-2 font-semibold" data-id="${id_coder}">View Profile</button>
      </div>
    `;
  }).join('');
}

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

async function getCoder(coderId){
  try{
    const token = getUserToken();

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

    if (!res.ok || !res1.ok){
      throw new Error(`Error HTTP: ${res.status}`); 
    }

    const coder = await res.json();
    const numideas = await res1.json();
    coder['ideas'] = numideas.length

    return coder;

  } catch (err){
    console.error("There was an error bringing the coder: ",err)
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  const codersContainer = document.getElementById('coders-list');
  try {
    const coders = await fetchCoders();
    renderCoders(coders, codersContainer);
    viewProfile();
  } catch (err) {
    codersContainer.innerHTML = `<p class="text-center text-red-500">No se pudieron cargar los coders.</p>`;
  }
});
