import { homeView } from "./views/home.js";
import { ideasView, ideasSetup } from "./views/ideas.js";
import { matchesView, matchesSetup } from "./views/matches.js";

// Router for coder dashboard views
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
            document.getElementById('coder-content').innerHTML = homeView();
            break;
    }
}