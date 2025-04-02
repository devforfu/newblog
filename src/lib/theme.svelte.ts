import { browser } from '$app/environment';
import { writable, get } from 'svelte/store';

export type Theme = "light" | "dark";

export const availableThemes: Theme[] = ["light", "dark"];

const createThemeStore = () => {
    const defaultTheme: Theme = "light";

    const { subscribe, set, update } = writable<Theme>(defaultTheme);

    if (browser) {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme && availableThemes.includes(storedTheme as Theme)) {
            set(storedTheme as Theme);
        }
    }

    return {
        subscribe,
        set: (value: Theme) => {
            if (availableThemes.includes(value)) {
                set(value);
                if (browser) {
                    localStorage.setItem('theme', value);
                    document.documentElement.setAttribute('color-scheme', value);
                }
            }
        },
        toggle: () => {
            update(current => {
                const newTheme = current === 'light' ? 'dark' : 'light';
                if (browser) {
                    localStorage.setItem('theme', newTheme);
                    document.documentElement.setAttribute('color-scheme', newTheme);
                }
                return newTheme;
            });
        }
    };
};

export const theme = createThemeStore();

export const getTheme = (): Theme => browser ? get(theme) : 'light';
export const toggleTheme = () => theme.toggle();