import { type Resume } from "$lib/cv/types";
import { createResume as createMasterResume } from "$lib/cv/master/data";
import { createResume as createResearchResume } from "$lib/cv/research/data";

export function createResume(option: string): Resume {
    switch (option) {
        case "master": return createMasterResume();
        case "research": return createResearchResume();
    }
    throw new Error(`the option is not found: ${option}`);
}
