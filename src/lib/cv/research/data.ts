import type {Education, Project, Resume, Technologies} from "$lib/cv/types";
import {createResume as createMasterResume, MASTER_PROJECTS} from "$lib/cv/master/data";

export const RESEARCH_SUMMARY =
    `Senior machine learning engineer with 10 years of experience in computer vision, scalable data pipelines, and 
deploying production-grade deep learning models. Expert in Python, proficient in C++, with strong foundations in 
PyTorch, ONNX, multi-processing, and asynchronous programming. Focused on research-driven model evaluation, custom 
metric development, and building tools to improve model robustness and quality. Experienced in hybrid and remote teams,
with open-source and competitive machine learning contributions.`;

export const RESEARCH_TECHNOLOGIES: Technologies = {
    "Languages": [
        "Python (expert)", "C++ (proficient, CMake, Conan)", "Rust (working knowledge)"
    ],
    "Machine Learning": [
        "PyTorch", "TensorFlow", "NumPy", "Pandas", "Dask",
        "Jupyter", "Streamlit", "altair", "scikit-learn"
    ],
    "Data Engineering": [
        "Azure DevOps", "GitHub Actions", "SQL", "Weights &amp; Biases", "AWS S3"
    ],
    "Other": [
        "multi-GPU training", "model quantization (fp16, int8)",
        "software design patterns", "data structures", "algorithms"
    ]
};

export const RESEARCH_EDUCATION: Education[] = [
    {
        kind: "institution",
        qualification: "C++ Development Course",
        provider: "Udacity",
        dates: "2025 (ongoing)",
    },
    {
        kind: "institution",
        qualification: "Object Tracking Course",
        provider: "Udacity",
        dates: "2024 (ongoing)",
    },
    {
        kind: "institution",
        qualification: "AI and ML Development Courses",
        provider: "Udacity",
        dates: "2017",
    },
    {
        kind: "institution",
        qualification: "Software Engineering Diploma",
        provider: "Surgut State University",
        dates: "2009&mdash;2014",
    },
    {
        kind: "comment",
        content: "<em>Equivalent to a Master's degree in many European countries</em>",
    }
];

export const RESEARCH_PROJECTS: Project[] = [
    ...MASTER_PROJECTS,
    {
        name: "",
        dates: "",
        descriptionHTML: "",
    }
];

export function createResume(): Resume {
    const resume = createMasterResume();
    resume.summary = RESEARCH_SUMMARY;
    resume.technologies = RESEARCH_TECHNOLOGIES;
    resume.education = RESEARCH_EDUCATION;
    return resume;
}