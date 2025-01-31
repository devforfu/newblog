<svelte:head>
    <title>Ilia Zaitsev CV</title>
</svelte:head>
<div id="resume-content">
<div id="header">
    <h1>Ilia Zaitsev</h1>
    <ul id="contacts">
        <li id="email"><a href="mailto:ilia.zaitsev@outlook.com">ilia.zaitsev@outlook.com</a></li>
        <li id="linkedin"><a href="https://linkedin.com/in/ilia-zaitsev">LinkedIn</a></li>
        <li id="github"><a href="https://github.com/devforfu">github</a></li>
        <li id="website"><a href="https://iliazaitsev.me">iliazaitsev.me</a></li>
        <li id="location">Hamburg, Germany</li>
    </ul>
</div>
<section id="summary">
    A senior machine learning engineer with 10 years of experience in the automotive industry, price and demand forecasting, and backend development.
    Expert in training computer vision models for segmentation and object detection tasks, building pipelines to process large volumes of data,
    developing time series forecasting tools, designing evaluation metrics and building dashboards. Advanced experitise in data analytics,
    deep learning, software design patterns, and algorithms. Excels in fully-distributed teams, with nine years of remote work experience and contributions to open-source projects.
</section>
<section id="technologies">
    <h2>TECHNOLOGIES</h2>
    <div class="splitter"></div>
    <table>
        <tbody>
        <tr><td><strong>Machine Learning</strong></td><td>Python, PyTorch, TensorFlow, NumPy, Pandas, Jupyter, Streamlit, scikit-learn, transformers, altair, matplotlib</td></tr>
        <tr><td><strong>Technologies</strong></td><td>AWS S3, Azure DevOps, GitHub Actions, SQL, Pydantic, Weights &amp; Biases (WandB)</td></tr>
        <tr><td><strong>Working Knowledge</strong></td><td>Rust, C/C++, CMake, LLM finetuning (QLoRA, fp16, fp8, int4)</td></tr>
        <tr><td><strong>Other</strong></td><td>TDD, API design, multi-gpu training, software design patterns, data structures, algorithms</td></tr>
        </tbody>
    </table>
</section>
<h2>WORK EXPERIENCE</h2>
<div class="splitter"></div>
<!--<section id="cariad" class="career-entry">-->
<!--    <div class="job">-->
<!--        <p class="title">Senior Machine Learning Engineer</p>-->
<!--        <p class="company">CARIAD SE (Hamburg, Germany)</p>-->
<!--        <p class="dates">Sep, 2024&mdash;present</p>-->
<!--    </div>-->
<!--    <div class="achievements">-->
<!--        <ul>-->
<!--            <li>Joined a team of senior embedded systems developers, contributing to the deployment of triggers and learning key industry practices.</li>-->
<!--            <li>Diagnosed and resolved issues with a Docker dev container on macOS, improving the robustness and reliability of the development environment.</li>-->
<!--            <li>-->
<!--                Developed a utility that generates and sends protobuf messages in a specific format to an AI image triggering subsystem, enabling-->
<!--                IPC communication with the tool typically receiving images from an embedded camera.-->
<!--            </li>-->
<!--        </ul>-->
<!--    </div>-->
<!--</section>-->
<section id="cariad" class="career-entry">
    <div class="job">
        <p class="title">Senior Computer Vision Engineer</p>
        <p class="company">CARIAD SE (Hamburg, Germany)</p>
        <p class="dates">2023&mdash;present</p>
    </div>
    <div class="achievements">
        <ul>
            <li>
                Within 1.5 years, became the top contributor (by LOC) to PyTorch-based model training codebase in a team of 8
                developers working on AI triggers for intelligent data collection. Built five new modules, including model
                evaluation, image triggering, visualization, logging, and CLI functionality.
            </li>
            <li>
                Led the team in contributions to the test codebase, accounting for 25% of surviving LOC changes and
                achieved 95&ndash;98% coverage for newly added functionality. Adopted rigorous TDD approach and decoupled
                data types and interfaces to streamline testing.
            </li>
            <li>
                Collaborated with the Lead Data Scientist to develop a Bounding Boxes Localization Uncertainty Estimation
                algorithm that accurately identified poor-performing images to automatically include them into subsequent
                Active Learning iterations.
            </li>
            <li>
                Designed and implemented a flexible model evaluation framework for segmentation and object detection models.
                Introduced two new object detection metrics (variants of mAP) and refactored a legacy monolithic evaluation
                class into four modular components, enabling easy interactive use and significantly improving testability.
            </li>
            <li>
                Refactored the model evaluation and reporting pipeline, enabling the team to run 1,000+ tracked, reproducible,
                and reliably measured experiments within a year, by providing essential tools and integrations.
            </li>
            <li>
                Created five well-documented Jupyter notebooks with interactive reports to deliver prototyping and analytics
                for a team of 8 senior ML engineers and the team lead. These reports facilitated critical decisions on
                evaluation strategies and metrics.
            </li>
            <li>
                Developed three flexible data-splitting strategies for computer vision datasets, widely adopted by team
                members for various projects.
            </li>
            <li>
                Introduced Altair and Vega-Lite for data visualization. Developed a new violin plot definition for the
                team&apos;s W&B dashboard, now used as a standard plot for training experiment visualizations.
            </li>
            <li>
                Diagnosed and fixed four critical issues in a third-party evaluation framework (TensorFlow-based),
                including incorrect class mapping and a subtle file-ordering error. These fixes ensured reliable
                evaluation results for object detection models.
            </li>
            <li>
                Developed a versatile set of tensor manipulation utilities, reused in six different modules across
                the codebase, streamlining operations and reducing code duplication.
            </li>
        </ul>
    </div>
</section>
<section id="blue-yonder" class="career-entry">
    <div class="job">
        <p class="title">Staff Data Scientist</p>
        <p class="company">Blue Yonder Group, Inc. (Hamburg, Germany)</p>
        <p class="dates">2020&mdash;2023</p>
    </div>
    <div class="achievements">
        <ul>
            <li>
                Collaborated in a team of five core contributors on a large-scale project for a major US grocery
                chain (2000+ stores). Solely developed three critical machine learning pipeline components&ndash;
                data preprocessing, model training, and forecasting&ndash;which contributed to achieving a 100%
                daily data delivery success rate during the first year of service.
            </li>
            <li>
                Developed a library for distributed categorical variable encoding, capable of processing up to
                two billion records per run. Built with the Dask framework, it ensured reliable weekly execution
                for three large-scale customers, achieving a flawless operational record. The library code
                achieved nearly 100% test coverage and underwent rigorous validation to ensure robustness in
                production.
            </li>
            <li>
                Co-developed a forecasting library with a unified API, enabling to run models developed
                both in Python and Java, in interactive and batch modes. It became a core component of the new
                forecasting platform.
            </li>
            <li>
                Extended an in-house developed Generalized Additive Modelling (GAM) library by adding
                price elasticity modelling functionality, used to optimize pricing for one of the largest and
                longest-standing customers.
            </li>
            <li>
                Migrated core components of the model training pipeline from a custom in-house solution to the PyTorch Lightning
                training loop. Refactored existing functionality to leverage PyTorch&amp;s standard interfaces, including callbacks,
                datasets, and data loaders.
            </li>
        </ul>
    </div>
</section>
<section id="smaato" class="career-entry">
    <div class="job">
        <p class="title">Machine Learning Engineer</p>
        <p class="company">Smaato, Inc. (Hamburg, Germany)</p>
        <p class="dates">2019&mdash;2020</p>
    </div>
    <div class="achievements">
        <ul>
            <li>
                Played a key role in a team of six engineers, co-designing and building a Python framework
                unifying data management and model training processes, serving as the core machine learning
                solution for a company of 200+ employees.
            </li>
            <li>
                Built a scalable machine learning pipeline capable of training deep learning models on
                up to 300 GBs of ad bidding requests data, utilizing PySpark, Databricks, and AWS SageMaker.
            </li>
            <li>
                Wrote comprehensive documentation for the developed package, covering the API, design choices,
                capabilities, and limitations. This documentation became a core reference for a team of 10
                engineers and data scientists.
            </li>
            <li>
                Facilitated the transition from TensorFlow 1.x to TensorFlow 2.x with eager execution and
                the Keras API, improving code readability and maintainability. The migration addressed
                performance issues caused by incorrect handling of training flags during inference, resulting
                in improved model performance.
            </li>
        </ul>
    </div>
</section>
<div class="page-break"></div>
<section id="freelance" class="career-entry">
    <div class="job">
        <p class="title">Software Engineer</p>
        <p class="company">Self-Employed Contractor (Remote work)</p>
        <p class="dates">2014&mdash;2019</p>
    </div>
    <div class="achievements">
        <ul>
            <li>
                Collaborated with over 20 clients on diverse projects, including building machine learning models,
                automation scripts, data processing pipelines, APIs, and desktop applications.
            </li>
            <li>
                Developed a configurable machine learning engine with analytics and reporting subsystems,
                processing millions of e-commerce transactions per client for B2B use cases.
            </li>
            <li>Designed and built a backtesting framework for validating trading strategies.</li>
            <li>Created API endpoints and ORM models for a predictive food consumption system integrated with a smartwatch.</li>
            <li>Ported and enhanced an OpenVPN-based Windows VPN client for macOS, improving cross-platform functionality.</li>
        </ul>
    </div>
</section>
<section id="projects">
    <h2>PROJECTS</h2>
    <div class="splitter"></div>
    <div class="project">
        <p class="name"><strong>WortBrew &mdash; Desktop App</strong></p>
        <p class="dates">2023&mdash;2024</p>
    </div>
    <div class="description">
        Built a <a href="https://github.com/WortBrew/WortBrewReleases">desktop app</a> using Rust, TypeScript and Svelte framework
        to facilitate German language learning via integrating LLM and dictionary APIs for quick translation, words look up, and
        conversation with a chat-bot capabilities.
    </div>
    <div class="project">
        <p class="name"><strong>Kaggle &mdash; Competitions Expert</strong></p>
        <p class="dates">2019&mdash;2024</p>
    </div>
    <div class="description">
        <ul>
            <li>
                <a href="https://www.kaggle.com/purplejester">Ranked among the top 5,000 Kaggle Competition Experts</a>
                globally (2024), demonstrating broad experience across a wide range of machine learning challenges.
            </li>
            <li>
                <a href="#">Generative Dog Images:</a>
                Achieved <strong>Top 8%</strong> (Bronze Medal) in a competition focued
                on image synthesis.
            </li>
            <li>
                <a href="#">UW-Madison Image Segmentation:</a>
                Achieved <strong>Top 8%</strong> (Bronze Medal) in a highly
                competitive challenge focud on medical image segmentation.
            </li>
            <li>
                <a href="#">Recursion Cellular Image Classification:</a> Ranked in the <strong>Top 14%</strong> in a
                biomedical research classification problem.
            </li>
            <li>
                <a href="#">Hacking the Kidney:</a> Ranked in the <strong>Top 16%</strong> in a challenge focused on
                segmenting high-resolution kidney tissue images that involved building an efficient segmentation code
                that fits limited resources on a Kaggle inference instance.
            </li>
        </ul>
    </div>
</section>
<section>
    <h2>EDUCATION AND CERTIFICATIONS</h2>
    <div class="splitter"></div>
    <div class="education-entry">
        <p class="provider"><strong>C++ Nanodegree,</strong> Udacity</p>
        <p class="dates">2025</p>
    </div>
    <div class="education-entry">
        <p class="provider"><strong>Object Tracking Course,</strong> Udacity</p>
        <p class="dates">2024&mdash;2025</p>
    </div>
    <div class="education-entry">
        <p class="degree"><strong>AI and ML Nanodegrees,</strong> Udacity</p>
        <p class="dates">2017</p>
    </div>
    <div class="education-entry">
        <p class="provider">
            <strong>Software Engineering Diplom (five-years program) with distinction,</strong>
            Surgut State University
        </p>
        <p class="dates">2009&mdash;2014</p>
    </div>
    <div class="education-entry">
        <em>Equivalent to a Master's degree in many European countries</em>
    </div>
</section>
<section>
    <h2>INTERESTS</h2>
    <div class="splitter"></div>
    <article>
        Exploring new languages&mdash;both programming and natural. Currently learning German and improving skills in C/C++.
        Enjoy building applications in Rust, developing simple tools in C, and experimenting with GenAI technologies.
        Occasionally participate in Kaggle competitions to explore new models and enhance data science and machine learning expertise.
    </article>
</section>
    <div class="not-print">
        <p>Tip: press Ctrl+P or Cmd+P to display a print-ready page</p>
    </div>
</div>
<style>
    a {
        color: #4444aa;
        text-decoration: none;
    }

    a:hover {
        color: #222288;
        text-decoration: underline;
    }

    a:visited {
        color: #aaaaaa;
    }

    #resume-content {
        padding: 0;
        margin: 0 auto;
        max-width: 1200px;
    }

    .not-print {
        font-size: 18px;
        text-align: center;
        background: lightgrey;
    }

    @media not print {
        section, article, li {
            font-size: 20px;
        }

        h1 {
            font-size: 40px;
        }

        h2 {
            font-size: 28px;
        }
    }

    @media print {
        @page {
            margin-top: 0;
            margin-bottom: 0;
        }
        * {
            font-size: 12px;
        }
        h1 {
            font-size: 18px;
        }
        h2 {
            font-size: 14px;
            margin: 1rem auto;
        }
        .page-break  {
            display:block;
            page-break-before:always;
            padding-top: 1.5rem;
        }
        #resume-content {
            padding-top: 1rem;
        }
        a:visited {
            color: #4444aa;
        }
        .not-print {
            display: none;
        }
    }

    * {
        line-height: 1.25;
    }

    h2 {
        margin-bottom: 0.5rem;
    }

    section {
        text-align: justify;
    }

    #summary {
        padding-bottom: 0;
    }

    #header {
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    #header > h1 {
        margin: 0;
    }

    #header > #contacts {
        text-align: center;
    }

    #header > #contacts > li {
        list-style: none;
        display: inline;
    }

    #header > #contacts > li:after {
        content: " \2022";
    }

    #header > #contacts > li:last-child::after {
        content: none;
    }

    #technologies > table {
        width: 100%;
    }

    .splitter {
        border: 1px solid deepskyblue;
        margin-bottom: 8px;
    }

    .job {
        display: flex;
    }

    .title {
        flex: 1;
    }

    .dates {
        flex: 1;
        text-align: right;
    }

    .title, .company, .dates {
        font-weight: bold;
    }

    .achievements > ul {
        margin: 0;
    }

    .project {
        display: flex;
        flex-direction: row;
        text-align: center;
    }

    .description > ul {
        margin: 0;
    }

    .education-entry {
        display: flex;
        gap: 8px;
    }

    .education-entry > p {
        padding: 0;
        margin: 0;
    }
</style>