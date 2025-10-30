---
title: CV
permalink: /cv/
layout: single
classes: wide
---

<!-- Styling -->
<style>
  .cv-embed {
    position: relative;
    width: 100%;
    max-width: 100%;          /* full width */
    height: calc(100vh - 180px); /* large, responsive height */
    margin: 0 auto 1rem auto;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 8px 32px rgba(0,0,0,0.1);
  }

  .cv-embed iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: none;
  }

  .cv-actions {
    display: flex;
    justify-content: center;
    gap: 16px;
    flex-wrap: wrap;
    margin-top: 1.5rem;
  }

  .btn {
    display: inline-block;
    padding: 10px 18px;
    border-radius: 10px;
    border: 1px solid rgba(0,0,0,0.1);
    text-decoration: none;
    background-color: #f8f9fa;
    transition: all 0.2s ease;
  }

  .btn:hover {
    background-color: #e9ecef;
    box-shadow: 0 4px 10px rgba(0,0,0,0.08);
  }

  .note {
    text-align: center;
    font-size: 0.9em;
    color: #666;
    margin-top: 0.5rem;
  }
</style>

<div class="cv-embed">
  <iframe
    src="/files/Yingchu_Sun_CV.pdf#toolbar=1&navpanes=0&view=FitH"
    title="Yingchu Sun — CV">
  </iframe>
</div>

<div class="cv-actions">
  <a class="btn" href="/files/Yingchu_Sun_CV.pdf" target="_blank" rel="noopener">Open in new tab</a>
  <a class="btn" href="/files/Yingchu_Sun_CV.pdf" download>Download PDF</a>
</div>

<p class="note"><em>If the embedded viewer doesn’t load properly, use “Open in new tab”.</em></p>
