import { getToken, getUser } from "../../auth/token.js";

// View for displaying coder's matches
export function matchesView(){
    return `
    <div class="max-w-5xl mx-auto px-6 py-10">
        <!-- Card container -->
        <div class="bg-white border border-gray-300 rounded-2xl shadow-lg p-8">
            <!-- Header -->
            <h1 class="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 flex items-center gap-2">
                ❤️ Matches - Interested Companies
            </h1>
            <p class="text-gray-700 mb-8 text-sm md:text-base leading-relaxed">
                These companies have shown interest in your proposals.
                The <span class="font-semibold text-pink-600">Riwi</span> team will contact you
                to coordinate the next steps.
            </p>

            <!-- Matches list -->
            <div class="flex flex-col gap-8" id="match-list"></div>
        </div>
    </div>
    `;
}

// Setup function to fetch and render matches
export async function matchesSetup(){
    const matches = await getMatches();
    const container = document.getElementById('match-list');
    container.innerHTML = '';
    for(const match of matches){
        // Render each match card
        container.innerHTML += `
        <div class="w-full bg-white shadow-md rounded-2xl border border-gray-200 mb-6 overflow-hidden">
            <!-- Header -->
            <div class="p-4 border-b border-gray-100 flex justify-between items-center bg-blue-50">
            <h2 class="text-lg font-bold text-blue-600">
            💡 ${match.title}
            </h2>
            <span class="text-sm text-gray-500">
            ${match.company}
            </span>
            </div>

            <!-- Body -->
            <div class="p-4 space-y-4">
            <!-- Status -->
            <div class="bg-green-50 border border-green-200 rounded-xl p-3">
                <p class="text-green-700 font-semibold">✅ This company is interested in your proposal!</p>
                <p class="text-sm text-gray-500">
                ${new Date(match.match_date).toLocaleDateString()}
                </p>
            </div>

            <!-- Proposal -->
            <div>
                <h3 class="text-sm font-semibold text-gray-700 mb-1">Your Proposal:</h3>
                <p class="text-gray-600 text-sm">
                ${match.description}
                </p>
            </div>

            <!-- Next steps -->
                <div class="bg-green-50 border border-green-200 rounded-xl p-3">
                <p class="text-sm text-green-800">
                    <span class="font-semibold">Next Steps:
                    The Riwi team will contact you soon.
                    </span>
                </p>
                </div>
            </div>
        </div>
        `
    }
}

// Fetch matches from API for the current coder
async function getMatches(){
    try{
        const token = getToken();
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