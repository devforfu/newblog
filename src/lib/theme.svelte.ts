import { browser } from '$app/environment';

let theme = $state('light');

if (browser) {
    theme = localStorage.getItem('color-scheme') || 'light';
    document.documentElement.setAttribute('color-scheme', theme);
}

export function getTheme() {
    return theme;
}

export function toggleTheme() {
  theme = theme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('color-scheme', theme);
  localStorage.setItem('color-scheme', theme);
}
