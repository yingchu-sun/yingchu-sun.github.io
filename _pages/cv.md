---
title: ""            # No title shown on the page
permalink: /cv/
layout: single
classes: wide
---

<style>
  /* ----------- Main Embed Container ----------- */
  .cv-embed {
    position: relative;
    width: 100%;
    max-width: 100%;
    height: calc(100vh - 180px);
    margin: 0 auto 1.5rem auto;
    border-radius: 14px;
    overflow: hidden;
    box-shadow: 0 10px 36px rgba(0,0,0,0.15);
    background: #f8f9fa;

    /* Fade-in setup */
    opacity: 0;
    transform: translateY(8px);
    transition: opacity 600ms ease, transform 600ms ease;
  }
  .cv-embed.loaded {
    opacity: 1;
    transform: none;
  }

  /* Optional subtle shimmer while loading */
  .cv-embed::before {
    content: "";
    position: absolute; inset: 0;
    background: linear-gradient(90deg, #f1f3f5 25%, #f8f9fa 37%, #f1f3f5 63%);
    background-size: 400% 100%;
    animation: shimmer 1.2s infinite linear;
  }
  .cv-embed.loaded::before { display: none; }

  @keyframes shimmer {
    0% { background-position: 0% 0; }
    100% { background-position: 100% 0; }
  }

  @media (prefers-reduced-motion: reduce) {
    .cv-embed { transition: none; transform: none; }
    .cv-embed::before { animation: none; }
  }

  .cv-embed iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: none;
  }

  /* ----------- Action Buttons ----------- */
  .cv-actions {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    margin-top: 2rem;
  }

  .btn {
    display: inline-block;
    padding: 12px 20px;
    border-radius: 10px;
    font-weight: 600;
    color: #fff;
    background: linear-gradient(135deg, #333, #000);
    text-decoration: none;
    letter-spacing: 0.3px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.3s ease;
  }

  .btn:hover {
    transform: translateY(-2px);
    background: linear-gradient(135deg, #111, #444);
    box-shadow: 0 8px 16px rgba(0,0,0,0.25);
  }

  .note {
    text-align: center;
    font-size: 0.9em;
    color: #777;
    margin-top: 0.8rem;
  }
</style>

<div class="cv-embed" id="cvEmbed">
  <iframe
    src="/files/Yingchu_Sun_CV.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
    title="Yingchu Sun — CV"
    onload="document.getElementById('cvEmbed')?.classList.add('loaded')">
  </iframe>
</div>

<div class="cv-actions">
  <a class="btn" href="/files/Yingchu_Sun_CV.pdf" target="_blank" rel="noopener">Open in new tab</a>
  <a class="btn" href="/files/Yingchu_Sun_CV.pdf" download>Download PDF</a>
</div>

<p class="note"><em>If the embedded viewer doesn’t load properly, use “Open in new tab”.</em></p>

<noscript>
  <p class="note">JavaScript is disabled, so the fade-in effect is off.</p>
</noscript>
