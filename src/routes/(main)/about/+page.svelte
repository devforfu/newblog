<section class="content">
    <div class="photo">
        <img src="/images/pic.jpeg" alt="Ilia Zaitsev"/>
    </div>
    <div class="text">
        <p class="bold">Hi,</p>
        <p>My name is Ilia Zaitsev, and you are on my web page. Welcome!</p>
        <p>
            I am a senior machine learning engineer and data scientist, especially interested in working with computer
            vision and deep learning, building analytical dashboards, visualizing complex datasets, and programming
            in Python, Rust and C++. Building small apps as a hobby, and experimenting with LLMs and GenAI.
        </p>
        <p>
            Currently working in the automotive domain, building object detection and semantic segmentation models,
            developing triggers for data collection, evaluating their quality, and deploying to embedded devices.
        </p>
        <p>
            Here I collected some of my posts and articles, and small notes that didn't fit elsewhere.
            You might find them interesting.
        </p>
        <p>You can also visit links to my other pages:</p>
        <ul class="links">
            <li><a class="link" href="https://github.com/devforfu">GitHub</a></li>
            <li><a class="link" href="https://linkedin.com/in/ilia-zaitsev">LinkedIn</a></li>
            <li><a class="link" href="https://www.kaggle.com/purplejester">Kaggle</a></li>
        </ul>
    </div>
</section>

<style>
    section {
        max-width: 800px;
        margin: 2rem auto;
        padding: 2rem;
        border-radius: 10px;
        border: 1px solid #eee;
        font-family: var(--font-system-ui), sans-serif;

        .photo {
            flex-shrink: 0;
            display: flex;
            justify-content: center;
            padding-right: 20px;

            img {
                border-radius: 50%;
                max-width: 150px;
                height: auto;
            }
        }

        .links {
            padding: 0;
            list-style-type: none;

            a {
                color: #4444aa;
                text-decoration: none;
                font-weight: bold;
            }

            a:hover {
                color: #222288;
                text-decoration: underline;
            }

        }
    }

    .text .bold {
        font-weight: bold;
        font-size: 1.5rem;
    }

    @media (max-width: 600px) {
        section {
            max-width: 400px;
        }
    }
</style>
