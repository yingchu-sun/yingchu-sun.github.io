---
title: CV
permalink: /cv/
layout: single
classes: wide
---

<!-- Inline styles so the page is self-contained -->
<style>
  .cv-embed {
    position: relative;
    width: 100%;
    height: calc(100vh - 200px); /* leaves room for the theme header/footer */
    max-height: 1200px;
    margin: 1rem 0 2rem 0;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  }
  .cv-embed iframe {
    position: absolute; inset: 0;
    width: 100%; height: 100%;
    border: 0;
  }
  .cv-actions {
    display: flex; gap: 12px; flex-wrap: wrap; align-items: center;
    margin-bottom: 0.75rem;
  }
  .btn {
    display: inline-block;
    padding: 10px 14px;
    border-radius: 10px;
    border: 1px solid rgba(0,0,0,0.08);
    text-decoration: none;
  }
</style>

<div class="cv-actions">
  <a class="btn" href="/files/Yingchu_Sun_CV.pdf" target="_blank" rel="noopener">Open in new tab</a>
  <a class="btn" href="/files/Yingchu_Sun_CV.pdf" download>Download PDF</a>
</div>

<div class="cv-embed">
  <iframe
    src="/files/Yingchu_Sun_CV.pdf#toolbar=1&navpanes=0&view=FitH"
    title="Yingchu Sun — CV">
  </iframe>
</div>

<p><em>If the embedded viewer doesn’t load on your device, use the “Open in new tab” button above.</em></p>

[//]: # ()
[//]: # ()
[//]: # ()
[//]: # (---)

[//]: # (layout: archive)

[//]: # (title: "CV")

[//]: # (permalink: /cv/)

[//]: # (author_profile: true)

[//]: # (redirect_from:)

[//]: # (  - /resume)

[//]: # (---)

[//]: # ()
[//]: # ({% include base_path %})

[//]: # ()
[//]: # (Education)

[//]: # (======)

[//]: # (* Ph.D in Electrical and Computer Engineering, Rice University , 2026 &#40;expected&#41;)

[//]: # (* M.S. in Electrical and Computer Engineering, Rice University , 2023)

[//]: # (* B.S. in Optoelectronic Information Science and Engineering, Zhejiang University , 2020)

[//]: # (* Minor: Advanced Class of Engineering Education, Chu Kochen Honors College &#40;CKC&#41; , 2020)

[//]: # ()
[//]: # (Work experience)

[//]: # (======)

[//]: # (* Spring 2021 - Current: Research Assistant)

[//]: # (  * Rice University)

[//]: # (  * Duties includes: Updates and improvements to template)

[//]: # (  * Supervisor: Dr.Lan Luan and Dr.Chong Xie)

[//]: # ()
[//]: # (* Fall 2015: Research Assistant)

[//]: # (  * GitHub University)

[//]: # (  * Duties included: Merging pull requests)

[//]: # (  * Supervisor: Professor Hub)

[//]: # ()
[//]: # (* Summer 2015: Research Assistant)

[//]: # (  * GitHub University)

[//]: # (  * Duties included: Tagging issues)

[//]: # (  * Supervisor: Professor Git)

[//]: # (  )
[//]: # (Skills)

[//]: # (======)

[//]: # (* Skill 1)

[//]: # (* Skill 2)

[//]: # (  * Sub-skill 2.1)

[//]: # (  * Sub-skill 2.2)

[//]: # (  * Sub-skill 2.3)

[//]: # (* Skill 3)

[//]: # ()
[//]: # (Publications)

[//]: # (======)

[//]: # (  <ul>{% for post in site.publications reversed %})

[//]: # (    {% include archive-single-cv.html %})

[//]: # (  {% endfor %}</ul>)

[//]: # ()
[//]: # (Teaching)

[//]: # (======)

[//]: # (  <ul>{% for post in site.teaching reversed %})

[//]: # (    {% include archive-single-cv.html %})

[//]: # (  {% endfor %}</ul>)
