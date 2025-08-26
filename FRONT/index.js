/* DOM */

import renderHtml from "./controllers/renderViewsController";









document.addEventListener('hashchange', renderHtml(location.hash));
document.addEventListener('load', renderHtml(location.hash));