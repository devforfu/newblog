<section>
    <article>
        <div class="photo">
            <img src="/images/pic.jpeg" alt="Ilia Zaitsev"/>
        </div>
        <div class="text">
            <h1>About</h1>
            <p>Hi!</p>
            <p>My name is Ilia Zaitsev, and you are on my web page. Welcome!</p>
            <p>
                I am a senior machine learning engineer and data scientist, especially interested in computer vision
                (object detection, semantic segmentation, and classification of images), autonomous driving systems, and
                language models (LMs).
            </p>
            <p>
                Here I collected some of my posts and articles, and small notes that didn't fit elsewhere.
                You might find them interesting.
            </p>
            <p>You can also visit links to my other pages:</p>
            <ul>
                <li><a href="https://github.com/devforfu">GitHub</a></li>
                <li><a href="https://linkedin.com/in/ilia-zaitsev">LinkedIn</a></li>
                <li><a href="https://x.com/devforfu">Twitter/X</a></li>
                <li><a href="https://www.kaggle.com/purplejester">Kaggle</a></li>
            </ul>
        </div>
    </article>
</section>

<style>
    section {
        max-width: 800px;
        margin: auto;
        padding: 20px;
    }

    article {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;
    }

    .photo {
        flex-shrink: 0;
        display: flex;
        justify-content: center;
        padding-right: 20px;
    }

    .photo img {
        border-radius: 50%;
        max-width: 150px;
        height: auto;
    }

    .text {
        flex: 1;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    ul li {
        margin: 5px 0;
    }

    ul li a {
        color: #4444aa;
        text-decoration: none;
        font-weight: bold;
    }

    ul li a:hover {
        color: #222288;
        text-decoration: underline;
    }

    @media (max-width: 600px) {
        article {
            flex-direction: column;
            text-align: center;
        }

        .photo img {
            max-width: 120px;
        }

        ul {
            display: inline-block;
            text-align: left;
        }
    }
</style>
