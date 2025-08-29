import { homeView } from "./views/home.js";
import { ideasView, ideasSetup } from "./views/ideas.js";
import { matchesView, matchesSetup } from "./views/matches.js";

export function router(){
    const hash = window.location.hash.slice(1);
    switch (hash){
        case 'home':
            document.getElementById('coder-content').innerHTML = homeView();
            break;
        case 'ideas':
            document.getElementById('coder-content').innerHTML = ideasView();
            ideasSetup();
            break;
        case 'matches':
            document.getElementById('coder-content').innerHTML = matchesView();
            matchesSetup();
            break;
        default:
            document.getElementById('coder-content').innerHTML = `<h2 class="text-xl font-bold p-4">Welcome! Please select a section.</h2>`;
            break;
    }
}