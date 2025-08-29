import { getToken, getUser } from "../../auth/token.js";

export function ideasView() {
    const view = `
    <div class="w-full bg-gray-50 min-h-screen">
        <main class="max-w-4xl mx-auto py-8 px-2">
            <h1 class="text-2xl font-bold text-center mb-2">Ideas recibidas</h1>
            <div class="text-center mb-6">
                <span class="block text-gray-400 text-sm">Ideas enviadas por coders para tus desafíos. Puedes dar "Match" a
                    las que te interesen.</span>
            </div>
            <div class="flex flex-col gap-8" id="ideas-list"></div>
        </main>
    </div>
    `
    return view;
}

export async function ideasSetup(){
    const ideas = await getIdeas(getUser().id);
    const container = document.getElementById('ideas-list');
    container.innerHTML = '';
    ideas.forEach(idea => {
        container.innerHTML += `
        <div class="bg-white rounded-2xl shadow-md border border-gray-200 p-6 flex flex-col gap-4 max-w-3xl mx-auto">
            <div class="flex flex-col md:flex-row md:gap-6">
                <div class="flex flex-col items-center md:items-start gap-2 w-full md:w-1/4 mb-4 md:mb-0">
                    <div
                        class="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-xl font-bold text-white">
                        ${getCompanyLogo(idea.company_name)}
                        </div>
                    <span class="font-semibold text-gray-800">Coder: ${idea.coder_name} ${idea.coder_lastname}
                    </span>
                </div>
                <div class="flex-1">
                    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                        <div class="flex items-center gap-2">
                            <span class="font-bold text-lg text-gray-900">${idea.title}</span>
                        </div>
                    </div>
                    <div class="text-gray-700 mb-2">
                        <span class="font-semibold">Propuesta:</span> ${idea.description}
                    </div>
                    <div class="text-xs text-purple-500 mb-2">${new Date(idea.created_at).toLocaleDateString()}</div>
                    <div class="flex gap-2 mt-2 w-full justify-start">
                        <button
                            class="border border-gray-300 rounded-lg px-3 py-1 text-xs flex items-center gap-1"><span>👁️</span>
                            Ver Perfil Completo</button>
                        <button class="bg-pink-100 text-pink-700 rounded-lg px-3 py-1 text-xs font-semibold"><span>💖</span>
                            Match! </button>
                    </div>
                </div>
            </div>
        </div>
        `
    });
}

async function getIdeas(id) {
    try {
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