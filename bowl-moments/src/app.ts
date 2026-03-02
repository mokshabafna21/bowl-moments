// This file sets up the application logic, including routing and rendering of components.

import { renderHome } from './pages/home';

const appElement = document.getElementById('app');

if (appElement) {
    renderHome(appElement);
} else {
    console.error('App element not found');
}