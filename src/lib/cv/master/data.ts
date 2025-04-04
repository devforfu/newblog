import type {WorkExperience, Education, Project, Technologies, Resume} from "$lib/cv/types";

export const MASTER_SUMMARY =
    `A senior machine learning engineer and data scientist with 10 years of experience in the automotive industry, price 
and demand forecasting, and backend development. Expert in training computer vision models for segmentation and 
object detection tasks, building pipelines to process large volumes of data, developing time series forecasting 
tools, designing evaluation metrics, and building dashboards. Advanced expertise in data analytics, deep learning,
software design patterns, and algorithms. Excels both in collaborative and highly-autonomous distributed environments, 
with nine years of hybrid and remote work experience and contributions to open-source projects.`;

export const MASTER_TECHNOLOGIES: Technologies = {
    "Machine Learning": [
        "Python", "PyTorch", "TensorFlow", "NumPy", "Pandas", "ONNX",
        "Jupyter", "Streamlit", "scikit-learn", "altair", "matplotlib"
    ],
    "Technologies": [
        "AWS S3", "Azure DevOps", "GitHub Actions", "SQL", "Pydantic", "Weights &amp; Biases (WandB)"
    ],
    "Working Knowledge": [
        "Rust", "C/C++", "CMake", "LLM finetuning (QLoRA, fp16, fp8, int4)", "transformers"
    ],
    "Other": [
        "TDD", "API design", "multi-gpu training", "software design patterns", "data structures", "algorithms"
    ]
};

export const MASTER_EXPERIENCE: WorkExperience[] = [
    {
        job: {
            id: "cariad-2",
            title: "Senior Data Engineer",
            company: "CARIAD SE (Hamburg, Germany)",
            dates: "Sep, 2024&mdash;present",
        },
        achievements: [
            "Joined a team of senior embedded systems developers, contributing to the deployment of triggers and learning modern development practices, including C++20, CMake, Conan, and MicroPython.",
            "Diagnosed and resolved issues with a Docker dev container on macOS, improving the robustness and reliability of the development environment.",
            "Developed a utility that generates and sends protobuf messages to an AI image-triggering subsystem, enabling IPC communication with the tool typically receiving images from an embedded camera to simplify debugging.",
            "Extended the object detection triggering model to support multiple loss heads for entropy-based triggering used in the data collection fleet.",
        ]
    },
    {
        job: {
            id: "cariad-1",
            title: "Senior Computer Vision Engineer",
            company: "CARIAD SE (Hamburg, Germany)",
            dates: "Feb, 2023&mdash;Sep, 2024",
        },
        achievements: [
            "Within 1.5 years, became the top contributor (by LOC) to PyTorch-based model training codebase in a team of 8 developers working on AI triggers for intelligent data collection. Built five new modules, including model evaluation, image triggering, visualization, logging, and CLI functionality.",
            "Led the team in contributions to the test codebase, accounting for 25% of surviving LOC changes and achieving 95&ndash;98% coverage for newly added functionality. Introduced a rigorous TDD approach and decoupled data types and interfaces to streamline testing.",
            "Collaborated with the Lead Data Scientist to develop a Bounding Boxes Localization Uncertainty Estimation algorithm that accurately identified poor-performing images to automatically include them into subsequent Active Learning iterations.",
            "Designed and implemented a flexible model evaluation framework for segmentation and object detection models. Based on researched papers, introduced two new object detection metrics (variants of mAP) and refactored a legacy monolithic evaluation class into four modular components, enabling easy interactive use and significantly improving testability.",
            "Refactored the model evaluation and reporting pipeline, enabling the team to run 1,000+ tracked, reproducible, and reliably measured experiments within a year, by providing essential tools and integrations.",
            "Created five well-documented Jupyter notebooks with interactive reports to deliver prototyping and analytics for a team of 8 senior ML engineers and the team lead. These reports facilitated critical decisions on evaluation strategies and metrics.",
            "Developed three flexible data-splitting strategies for computer vision datasets, widely adopted by team members for various projects.",
            "Introduced Altair and Vega-Lite for data visualization. Developed a new violin plot definition for the team's W&B dashboard, now used as a standard plot for training experiment visualizations.",
            "Diagnosed and fixed four critical issues in a third-party evaluation framework (TensorFlow-based), including incorrect class mapping and a subtle file-ordering error. These fixes ensured reliable evaluation results for object detection models.",
            "Developed a versatile set of tensor manipulation utilities, reused in six different modules across the codebase, streamlining operations and reducing code duplication.",
        ]
    },
    {
        job: {
            id: "blue-yonder",
            title: "Staff Data Scientist",
            company: "Blue Yonder Group, Inc. (Hamburg, Germany)",
            dates: "2020&mdash;2023",
        },
        achievements: [
            "Collaborated in a team of five core contributors on a large-scale project for a major US grocery chain (2000+ stores). Solely developed three critical machine learning pipeline components&ndash;data preprocessing, model training, and forecasting&ndash;which contributed to achieving a 100% daily data delivery success rate during the first year of service.",
            "Developed a library for distributed categorical variable encoding, capable of processing up to two billion records per run. Built with the Dask framework, it ensured reliable weekly execution for three large-scale customers, achieving a flawless operational record.",
            "Co-developed a forecasting library with a unified API, enabling to run models developed both in Python and Java, in interactive and batch modes. It became a core component of the new forecasting platform.",
            "Extended an in-house developed Generalized Additive Modelling (GAM) library by adding price elasticity modelling functionality, used to optimize pricing for one of the largest and longest-standing customers.",
            "Migrated core components of the model training pipeline from a custom in-house solution to the PyTorch Lightning training loop. Refactored existing functionality to leverage PyTorch standard interfaces, including callbacks, datasets, and data loaders.",
        ]
    },
    {
        job: {
            id: "smaato",
            title: "Machine Learning Engineer",
            company: "Smaato, Inc. (Hamburg, Germany)",
            dates: "2019&mdash;2020",
        },
        achievements: [
            "Played a key role in a team of six engineers, co-designing and building a Python framework unifying data management and model training processes, serving as the core machine learning solution for a company of 200+ employees.",
            "Built a scalable machine learning pipeline capable of training deep learning models on up to 300 GBs of ad bidding requests data, utilizing PySpark, Databricks, and AWS SageMaker.",
            "Wrote comprehensive documentation for the developed package, covering the API, design choices, capabilities, and limitations. This documentation became a core reference for a team of 10 engineers and data scientists.",
            "Facilitated the transition from TensorFlow 1.x to TensorFlow 2.x with eager execution and the Keras API, improving code readability and maintainability. The migration addressed performance issues caused by incorrect handling of training flags during inference, resulting in improved model performance.",
        ]
    },
    {
        job: {
            id: "freelance",
            title: "Software Engineer",
            company: "Self-Employed Contractor (Remote work)",
            dates: "2014&mdash;2019",
        },
        achievements: [
            "Collaborated with over 20 clients on diverse projects, including building machine learning models, automation scripts, data processing pipelines, APIs, and desktop applications.",
            "Developed a configurable machine learning engine with analytics and reporting subsystems, processing millions of e-commerce transactions per client for B2B use cases.",
            "Designed and built a backtesting framework for validating commodity trading strategies.",
            "Created API endpoints and ORM models for a predictive food consumption system integrated with a smartwatch.",
            "Ported and enhanced an OpenVPN-based Windows VPN client for macOS, improving cross-platform functionality.",
        ]
    }
];

export const MASTER_PROJECTS: Project[] = [
    {
        name: "<strong>Kaggle &mdash; Competitions Expert</strong>",
        dates: "2019&mdash;2024",
        descriptionHTML: `
            <ul>
                <li>
                    <a href="https://www.kaggle.com/purplejester">Ranked among the top 5,000 Kaggle Competition Experts</a>
                    globally (2024), demonstrating broad experience across a wide range of machine learning challenges.
                </li>
                <li>
                    <a href="https://www.kaggle.com/competitions/generative-dog-images/leaderboard">Generative Dog Images:</a>
                    Achieved <strong>Top 8%</strong> (Bronze Medal) in a competition focused
                    on image synthesis.
                </li>
                <li>
                    <a href="https://www.kaggle.com/competitions/uw-madison-gi-tract-image-segmentation/leaderboard">UW-Madison Image Segmentation:</a>
                    Achieved <strong>Top 8%</strong> (Bronze Medal) in a highly
                    competitive challenge focused on medical image segmentation.
                </li>
                <li>
                    <a href="https://www.kaggle.com/competitions/recursion-cellular-image-classification/leaderboard">Recursion Cellular Image Classification:</a> Ranked in the <strong>Top 14%</strong> in a
                    biomedical research classification problem.
                </li>
                <li>
                    <a href="https://www.kaggle.com/competitions/hubmap-kidney-segmentation/leaderboard">Hacking the Kidney:</a> Ranked in the <strong>Top 16%</strong> in a challenge focused on
                    segmenting high-resolution kidney tissue images that involved building an efficient segmentation code
                </li>
                <li>
                    Created <a href="https://www.kaggle.com/purplejester/code">multiple Kaggle notebooks</a>,
                    explaining machine learning concepts, showing use-cases and best practices using publicly available competition datasets.
                </li>
            </ul>
        `,
    }
];

export const MASTER_EDUCATION: Education[] = [
    {
        kind: "institution",
        qualification: "C++ Nanodegree",
        provider: "Udacity",
        dates: "2025&mdash;present",
    },
    {
        kind: "institution",
        qualification: "Object Tracking Course",
        provider: "Udacity",
        dates: "2024&mdash;present",
    },
    {
        kind: "institution",
        qualification: "AI and ML Nanodegrees",
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

export const MASTER_INTERESTS =
    `Exploring new languages&mdash;both programming and natural. Currently, learning German and improving skills in
C/C++. Enjoy building applications in Rust, developing simple tools in C, and experimenting with GenAI and web
technologies. Occasionally participate in Kaggle competitions to explore new models and enhance data science
and machine learning expertise.`;

export function createResume(): Resume {
    return {
        summary: MASTER_SUMMARY,
        technologies: MASTER_TECHNOLOGIES,
        workExperiences: MASTER_EXPERIENCE,
        projects: MASTER_PROJECTS,
        education: MASTER_EDUCATION,
        interests: MASTER_INTERESTS
    }
}