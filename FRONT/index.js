/* DOM */

import renderHtml from "./controllers/renderViewsController";









window.addEventListener('hashchange', renderHtml);
window.addEventListener('load', renderHtml);