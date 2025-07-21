import { writable } from 'svelte/store';

export type Location = {
    name: string;
    organization: string;
    activities: string[];
    duration: string[];
};

export const matchedLocations = writable<Location[]>([]);