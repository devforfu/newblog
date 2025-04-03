import { browser } from '$app/environment';
import { writable, get } from 'svelte/store';

export type Theme = "shell" | "bright";
export const availableThemes: Theme[] = ["shell", "bright"];
export const defaultTheme: Theme = "shell";

const createThemeStore = () => {
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
                const newTheme = current === 'shell' ? 'bright' : 'shell';
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
export const getTheme = (): Theme => browser ? get(theme) : defaultTheme;
export const toggleTheme = () => theme.toggle();
