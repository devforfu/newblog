<div class="container">
  <section class="content">
      <div class="text">
        <h1>Privacy Policy</h1>
        <h3>Last modified on 07.04.2025</h3>
        <p>The website is a private technical blog that does not sell any products or services.</p>
        <p>The website does not use any cookies.</p>
        <p>The website does not serve any ads.</p>
        <p>The website does not collect users' personal information.</p>
        <p>
            The website is hosted on a third-party <a href="https://www.vercel.com/">Vercel</a> platform that is
            <a href="https://vercel.com/docs/security/compliance#gdpr">compliant with the EU General Data Protection Regulation
            (GDPR)</a>. It might collect anonymous statistics about incoming internet connections, which is not in any way
            accessed or controlled by the owner of this website.
        </p>
        <p>There are links that lead to external resources. A non-exhaustive list of external resources includes
        <a href="https://kaggle.com">Kaggle</a>, <a href="https://medium.com">Medium</a>, <a href="https://linkedin.com">LinkedIn</a>,
        <a href="https://github.com">GitHub</a>. The author does not share any information with those platforms. For more
        information, please refer to the relevant privacy policy for each of these websites.</p>
        <p>
            The nature of the blog assumes including many references to external pages which aren't owned by the author 
            and included for educational purposes only.
        </p>
        <p>
            All images published on the website, except PyData 2022 Conference Logo, are created and belong to the author.    
        </p>
        <h1>Terms and Conditions</h1>
        <p><strong>Website owner:</strong> <a href="https://linkedin.com">Ilia Zaitsev</a></p>
        <p>
            The information on this website is provided “as-is”, without any guarantees, to the best knowledge of the author.
            The author disclaims all liability for actions taken or not taken based on that information, or for any errors or omissions it may contain.
        </p>
      </div>
  </section>
</div>

<style>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: calc(100vh - 200px);
        padding: 1rem 0;
        box-sizing: border-box;
    }
    
    section {
        max-width: 800px;
        padding: 1.5rem 2rem;
        border-radius: 12px;
        border: none;
        background: linear-gradient(135deg, #e8e9eb 0%, #d1d3d8 50%, #b8bcc2 100%);
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

    h1 {
        color: #1a1a2e;
        margin-top: 0.5rem;
    }
    
    h3 {
        color: #444;
        font-style: italic;
        margin-bottom: 1.5rem;
    }

    a {
        color: #0f3460;
        text-decoration: none;
        font-weight: bold;
        transition: all 0.3s ease;
    }

    a:hover {
        color: #4263eb;
        text-decoration: underline;
    }

    @media (max-width: 600px) {
        section {
            max-width: 400px;
            padding: 1.25rem;
        }
    }
</style>
