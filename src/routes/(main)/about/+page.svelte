<div class="container">
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
</div>

<style>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: calc(100vh - 200px); /* Reduced to avoid overflow */
        padding: 1rem 0;
        box-sizing: border-box;
    }
    
    section {
        max-width: 800px;
        padding: 1.5rem 2rem;
        border-radius: 12px;
        border: none;
        background: linear-gradient(135deg, #e0e6f5 0%, #c9d6ea 50%, #b5c7e0 100%);
        box-shadow: 0 12px 30px rgba(26, 26, 46, 0.15);
        font-family: var(--font-system-ui), sans-serif;
        position: relative;
        overflow: hidden;
    }
    
    section:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, #1a1a2e, #0f3460);
        z-index: 1;
    }

    .photo {
        flex-shrink: 0;
        display: flex;
        justify-content: center;
        padding-right: 20px;

        img {
            border-radius: 50%;
            max-width: 150px;
            height: auto;
            border: 3px solid white;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
    }

    .links {
        padding: 0;
        list-style-type: none;
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;

        a {
            color: #0f3460;
            text-decoration: none;
            font-weight: bold;
            transition: all 0.3s ease;
            padding: 0.5rem 1rem;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
        }

        a:hover {
            color: #ffffff;
            background-color: #4263eb;
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(66, 99, 235, 0.3);
        }
    }

    .text .bold {
        font-weight: bold;
        font-size: 1.5rem;
        color: #1a1a2e;
    }

    @media (max-width: 600px) {
        section {
            max-width: 400px;
            padding: 1.25rem;
        }
    }
</style>
