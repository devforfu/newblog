export type Technologies = Record<string, string[]>;

export interface Job {
    id: string;
    title: string;
    company: string;
    dates: string;
}

export interface WorkExperience {
    job: Job;
    achievements: string[];
}

export interface Project {
    name: string;
    dates: string;
    descriptionHTML: string;
}

export interface EducationInstitution {
    kind: 'institution';
    qualification: string;
    provider: string;
    dates: string;
}

export interface EducationComment {
    kind: 'comment';
    content: string;
}

export type Education = EducationInstitution | EducationComment;

export interface Resume {
    summary: string;
    technologies: Technologies;
    workExperiences: WorkExperience[];
    projects: Project[];
    education: Education[];
    interests: string;
}