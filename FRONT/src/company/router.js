import { homeView } from "./views/home.js";
import { codersView, codersSetup } from "./views/coders.js";
import { ideasView, ideasSetup } from "./views/ideas.js";
import { matchesView, matchesSetup } from "./views/matches.js";

export function router() {
    const hash = window.location.hash.slice(1);
    switch (hash) {
        case 'home':
            document.getElementById('company-content').innerHTML = homeView();
            break;
        case 'coders':
            document.getElementById('company-content').innerHTML = codersView();
            codersSetup();
            break;
        case 'ideas':
            document.getElementById('company-content').innerHTML = ideasView();
            ideasSetup();
            break;
        case 'matches':
            document.getElementById('company-content').innerHTML = matchesView();
            matchesSetup();
            break;
        default:
            document.getElementById('company-content').innerHTML = `<h2 class="text-xl font-bold p-4">Welcome! Please select a section.</h2>`;
            break;
    }
}