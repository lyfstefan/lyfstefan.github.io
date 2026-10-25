---
title: Yifan Liu · Condensed Matter Theory
description: Yifan Liu's research in moiré materials, electron–phonon coupling, strongly correlated systems, and non-Hermitian physics at UC Riverside.
hide:
  - navigation
  - toc
---

<div class="personal-home">

<nav class="home-nav" aria-label="Main navigation">
  <a class="home-wordmark" href="./" aria-label="Yifan Liu home">YL<span>.</span></a>
  <div class="home-nav-links"><a href="research/">Research</a><a href="publications/">Publications</a><a href="teaching/">Teaching</a><a href="contact/">Contact <span aria-hidden="true">↗</span></a></div>
</nav>

<section class="home-hero" aria-labelledby="home-title">
  <div class="home-intro">
    <p class="home-eyebrow">Yifan Liu <span class="home-chinese" lang="zh">刘异凡</span></p>
    <h1 id="home-title">Exploring patterns<br>in <em>quantum matter.</em></h1>
    <p class="home-lede">I'm a Ph.D. candidate in condensed matter theory at <a href="https://www.ucr.edu/">UC Riverside</a>, advised by <a href="https://profiles.ucr.edu/app/home/profile/vivekj">Vivek Aji</a>.</p>
    <p class="home-description">I study how electrons, lattice vibrations, and interactions come together to shape the behavior of quantum materials.</p>
    <div class="home-actions"><a class="home-button" href="#research-directions">Explore my research <span aria-hidden="true">↘</span></a><a class="home-text-link" href="mailto:yliu545@ucr.edu">Say hello <span aria-hidden="true">↗</span></a></div>
    <p class="home-location"><span aria-hidden="true"></span> University of California, Riverside</p>
  </div>
  <figure class="moire-widget" aria-labelledby="moire-title">
    <div class="moire-heading"><span class="home-eyebrow">A small experiment</span><span aria-hidden="true">θ</span></div>
    <div class="moire-stage" role="img" aria-label="Two triangular lattices overlap at a small twist angle, creating a larger moiré pattern.">
      <svg class="moire-fallback" viewBox="0 0 600 440" aria-hidden="true"><defs><pattern id="lattice-teal" width="12" height="20.784" patternUnits="userSpaceOnUse"><circle cx="0" cy="0" r="1.5" fill="#21625e"/><circle cx="6" cy="10.392" r="1.5" fill="#21625e"/></pattern><pattern id="lattice-rust" width="12" height="20.784" patternUnits="userSpaceOnUse"><circle cx="0" cy="0" r="1.5" fill="#c27554"/><circle cx="6" cy="10.392" r="1.5" fill="#c27554"/></pattern></defs><rect width="600" height="440" fill="url(#lattice-teal)"/><rect x="-40" y="-40" width="680" height="520" fill="url(#lattice-rust)" transform="rotate(3 300 220)"/></svg>
      <canvas id="moire-canvas" aria-hidden="true"></canvas>
    </div>
    <figcaption>
      <h2 id="moire-title">A small twist. A new pattern.</h2><p>Use the slider or drag the lattice to explore the moiré pattern.</p>
      <div class="moire-control-heading"><label for="twist-angle">Twist angle</label><output id="twist-value" for="twist-angle">3.0°</output></div>
      <input id="twist-angle" type="range" min="1" max="12" step="0.1" value="3" aria-describedby="moire-note" disabled>
      <div class="moire-control-footer"><span>1° <span aria-hidden="true">—</span> larger patterns</span><button type="button" id="moire-reset" disabled>Reset <span aria-hidden="true">↺</span></button><span>12°</span></div>
      <p id="moire-note" class="moire-note">A geometric illustration of two triangular lattices.</p>
      <noscript><p>Enable JavaScript to adjust the twist angle.</p></noscript>
    </figcaption>
  </figure>
</section>

<section class="home-section" id="research-directions" aria-labelledby="research-heading">
  <div class="home-section-heading"><div><p class="home-eyebrow">01 / Research directions</p><h2 id="research-heading">Different systems.<br>Connected questions.</h2></div><a class="home-text-link" href="research/">Research overview <span aria-hidden="true">↗</span></a></div>
  <div class="research-paths">
    <a class="research-path" href="research/#moire-materials-and-electron-phonon-coupling">
      <svg class="path-art" viewBox="0 0 80 64" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1.2"><path d="M8 15h64M8 26h64M8 37h64M8 48h64"/><g transform="rotate(15 40 32)"><path d="M8 15h64M8 26h64M8 37h64M8 48h64"/></g></g></svg>
      <div><h3>Moiré materials &amp; lattice vibrations</h3><p>Electron–phonon coupling, twisted bilayers, and optical response in van der Waals heterostructures.</p></div><span class="path-arrow" aria-hidden="true">↗</span>
    </a>
    <a class="research-path" href="research/#strongly-correlated-phases-and-ordering-phenomena">
      <svg class="path-art" viewBox="0 0 80 64" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1.2"><path d="M16 12h48v40H16zM16 32h48M40 12v40"/><path d="m20 24 8-8 8 8m8 16 8 8 8-8" stroke-width="2"/></g><g fill="currentColor"><circle cx="16" cy="12" r="3"/><circle cx="40" cy="12" r="3"/><circle cx="64" cy="12" r="3"/><circle cx="16" cy="32" r="3"/><circle cx="40" cy="32" r="3"/><circle cx="64" cy="32" r="3"/><circle cx="16" cy="52" r="3"/><circle cx="40" cy="52" r="3"/><circle cx="64" cy="52" r="3"/></g></svg>
      <div><h3>Correlations &amp; emergent order</h3><p>Bond ordering, flux phases, and loop current fluctuations in interacting electronic systems.</p></div><span class="path-arrow" aria-hidden="true">↗</span>
    </a>
    <a class="research-path" href="research/#non-hermitian-quantum-systems">
      <svg class="path-art" viewBox="0 0 80 64" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 32c8-30 16-30 24 0s16 30 24 0 16-30 22 0"/><path d="M5 32c8-12 16-12 24 0s16 12 24 0 16-12 22 0" opacity=".45"/><path d="M5 32h70" stroke-dasharray="2 4" opacity=".5"/></g></svg>
      <div><h3>Non-Hermitian quantum systems</h3><p>How non-Hermiticity changes localization, dynamics, and quantum control.</p></div><span class="path-arrow" aria-hidden="true">↗</span>
    </a>
  </div>
</section>

<section class="home-section" aria-labelledby="work-heading">
  <div class="home-section-heading"><div><p class="home-eyebrow">02 / Selected work</p><h2 id="work-heading">From questions to papers.</h2></div><a class="home-text-link" href="publications/">All publications <span aria-hidden="true">↗</span></a></div>
  <div class="home-works">
    <article class="home-work"><span class="work-year">2026</span><div><p class="work-venue">Physical Review B · 113, 045140</p><h3><a href="https://journals.aps.org/prb/abstract/10.1103/PhysRevB.113.045140">Bond ordering in flux phases of interacting spinless fermions on the square lattice <span aria-hidden="true">↗</span></a></h3><p class="work-authors"><strong>Y. Liu</strong>, V. Aji</p></div><span class="work-status">Published</span></article>
    <article class="home-work"><span class="work-year">2026</span><div><p class="work-venue">arXiv:2602.02803</p><h3><a href="https://arxiv.org/abs/2602.02803">Phonon-assisted absorption in transition metal dichalcogenide heterostructures <span aria-hidden="true">↗</span></a></h3><p class="work-authors"><strong>Y. Liu</strong>, R. Dawson, N. Gabor, V. Aji</p></div><span class="work-status">Preprint</span></article>
    <article class="home-work"><span class="work-year">2020</span><div><p class="work-venue">Physical Review A · 102, 022218</p><h3><a href="https://journals.aps.org/pra/abstract/10.1103/PhysRevA.102.022218">Non-Hermiticity-induced quantum control of localization in quantum walks <span aria-hidden="true">↗</span></a></h3><p class="work-authors">R. Zhang, <strong>Y. F. Liu</strong>, T. Chen</p></div><span class="work-status">Published</span></article>
  </div>
</section>

<section class="home-about home-section" aria-labelledby="about-heading">
  <div class="home-portrait"><img src="profile.png" alt="Yifan Liu" width="400" height="500" loading="lazy"><span>Yifan Liu / 刘异凡</span></div>
  <div class="home-about-text"><p class="home-eyebrow">03 / Beyond the papers</p><h2 id="about-heading">A little about me.</h2><p>Before joining UC Riverside, I received my B.S. in Physics from <a href="https://physics.bit.edu.cn/en/">Beijing Institute of Technology</a> in 2018.</p><p>I also enjoy teaching physics, from introductory laboratories to quantum mechanics and graduate electromagnetism. <a class="home-inline-link" href="teaching/">Explore my teaching materials ↗</a></p><p>Outside physics, I enjoy hiking, cooking, and classical music.</p><div class="home-interests"><span>↗ Hiking</span><span>⌁ Cooking</span><span>♫ Classical music</span></div></div>
</section>

<details class="home-talks">
<summary>Talks &amp; conference presentations <span>5 presentations <span aria-hidden="true">+</span></span></summary>
<ol>
<li><strong>Moiré electron-phonon coupling in vdW heterostructures</strong> — Y. Liu, V. Aji. QuVET Center Talk, October 9, 2025.</li>
<li><strong>Phonon Assisted Absorption: A Non-perturbative Approach</strong> — Y. Liu, R. Dawson, V. Aji. QuVET Center Talk, April 3, 2025. <a href="files/slides/quvet_2025.pdf">Slides</a></li>
<li><strong>Fluctuations of loop current order</strong> — Y. Liu, V. M. Aji. SMT 2025, March 18, 2025.</li>
<li><strong>Bond ordering in flux phases</strong> — Y. Liu, V. Aji. APS March Meeting 2024, March 5, 2024. <a href="files/slides/bond_ordering_aps2024.pdf">Slides</a></li>
<li><strong>Phonon assisted absorption in Transition Metal Dichalcogenides heterostructures</strong> — V. Aji, Y. Liu, R. Dawson. APS March Meeting 2024, March 5, 2024.</li>
</ol>
</details>

<footer class="home-footer"><div><p class="home-eyebrow">Get in touch</p><h2>Let's talk physics.</h2><a class="home-email" href="mailto:yliu545@ucr.edu">yliu545@ucr.edu <span aria-hidden="true">↗</span></a></div><div class="home-socials"><a href="https://scholar.google.com/citations?user=mXwRRVQAAAAJ&amp;hl=en">Google Scholar ↗</a><a href="https://github.com/lyfstefan">GitHub ↗</a><a href="https://orcid.org/0000-0003-1453-9851">ORCID ↗</a></div><p class="home-signoff">Yifan Liu · Condensed matter theory · UC Riverside</p></footer>

</div>
