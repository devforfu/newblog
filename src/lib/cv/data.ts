import { type Resume } from "$lib/cv/types";
import { createResume as createMasterResume } from "$lib/cv/master/data";

export function createResume(option: string): Resume {
    switch (option) {
        case "master": return createMasterResume();
    }
    throw new Error(`the option is not found: ${option}`);
}
