import { getToken, getUser } from "../../auth/token.js";

export function matchesView(){
    const view = `
    <div class="w-full bg-gray-50 min-h-screen">
        <main class="max-w-4xl mx-auto py-8 px-2">
            <h1 class="text-2xl font-bold text-center mb-2">Matches</h1>
            <div class="text-center mb-6">
                <span class="block text-gray-400 text-sm">Matches aceptados por la empresa para iniciar desarrollo con un
                    Coder.</span>
            </div>
            <div class="flex flex-col gap-8" id="match-list"></div>
        </main>
    </div>
    `;
    return view;
}

export async function matchesSetup(){
    const matches = await getMatches();
    const container = document.getElementById('match-list');
    container.innerHTML = '';
    matches.forEach(match => {
        container.innerHTML += `
        <div
            class="bg-white rounded-2xl shadow-md border border-gray-200 p-6 flex flex-col gap-4 md:flex-row md:gap-6 max-w-3xl mx-auto">
            <div class="flex flex-col items-center md:items-start gap-2 w-full md:w-1/4">
                <div class="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-xl font-bold text-white">
                    ${getCompanyLogo(match.company)}
                    </div>
                <span class="font-semibold text-gray-800">${match.company}</span>
            </div>
            <div class="flex-1">
                <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <div class="flex items-center gap-2">
                        <span class="font-bold text-lg text-gray-900">${match.title}</span>
                        <span class="px-2 py-1 rounded-full text-xs font-semibold bg-pink-100 text-pink-700">${status}</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="text-pink-600 font-bold text-sm">${match.company}</span>
                    </div>
                </div>
                <div class="text-gray-700 mb-2">
                    <span class="font-semibold">Propuesta:</span> ${match.description}
                </div>
                <div class="text-xs text-purple-500 mb-2">${new Date(match.created_at).toLocaleDateString()}</div>
                <div class="flex gap-2 mt-2">
                    <button class="border border-gray-300 rounded-lg px-3 py-1 text-xs flex items-center gap-1"><span>👁️</span>
                        Ver Perfil Completo</button>
                    <button class="bg-blue-100 text-blue-700 rounded-lg px-3 py-1 text-xs font-semibold">Contactar Riwi para
                        Proceder</button>
                </div>
            </div>
        </div>
        `;
    });
}

async function getMatches(){
    try{
        const res = await fetch(`http://localhost:3000/matches/${getUser().id}`);
        if(!res.ok){
            throw new Error('Failed to fetch matches');
        }
        const matches = await res.json();
        return matches;
    }catch(error){
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