// src/main.ts

import { renderHome } from './pages/home';

function init() {
    const app = document.getElementById('app');
    if (app) {
        renderHome(app);
    }
}

window.onload = init;