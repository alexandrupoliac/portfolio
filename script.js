(() => {
  'use strict';

  const TEXT = '#EDEBE4', MUTED = '#8A8C93', ACCENT_VAR = 'var(--accent)';
  const BORDER = 'rgba(237,235,228,0.14)';
  const IMG = 'https://framerusercontent.com/images/';
  const MAIN = {
    'Data / Network': 'Data Viz',
    'Identity / Event': 'Branding',
    'Civic / Data viz': 'Data Viz',
    'Editorial / Art direction': 'Editorial',
    'Product / UX': 'UX / UI',
    'Motion / Ad': 'Motion',
    'Concept / Civic tech': 'Concept',
  };

  const PROJECTS = [
    {
      slug: 'connectm2', idx: '01', title: "Romania's Emergency Response Network",
      cat: 'Data / Network', year: '2026',
      client: 'Departamentul pentru Situații de Urgență & West University of Timișoara',
      location: 'Timișoara',
      skills: ['JavaScript', 'D3.js', 'Plotly.js', 'HTML / CSS', 'Gephi', 'GitHub Pages', 'Claude Code'],
      credits: ['PhD. Silvia Fierăscu — project coordinator', 'Bogdan Doboșeru, Laurențiu Florea, Andrei Galescu — data gathering', 'Alexandru Poliac-Seres — data cleaning, web dev', 'Briana Toader — promo materials'],
      info: "An interactive data visualization platform mapping the formal partnership ecosystem of Romania's Department for Emergency Situations (DSU). The project graphs connections between DSU and organizations across Romania, classified by activity domain and collaboration type — including strategic partners and those involved in the Ukraine crisis response. Built as a public-facing tool for citizens, researchers, and policymakers, combining network graph exploration with operational and medical statistics dashboards.",
      cover: IMG + 'Su4EUMOY3h4IA9vMbWelNIJJSQ.png',
      live: 'https://big-data-edu.github.io/DSU-main/#network',
      gallery: [IMG + 'OLsy1jxPDfnO6yIKYWPGSNuf8.png', IMG + 'eE6hwW6MzBZiT90jOtuPruLh3w.png', IMG + 'yApy3dYrh4ydt757oYW0CDaHi4.png', IMG + 'B6eVrIOh7rAdfpDdg923LbEB8o.png'],
      wip: true,
      built: [
        'Reconciled 311 organization-name variants from DSU reports and public sources into one clean list of 256 organizations.',
        'Structured the data as modular CSV datasets: 64 strategic partners, an operational network of 256 organizations and 34 county inspectorates, and the FONSS subnetwork.',
        'Ran network analysis in Gephi, including resilience scenarios: removing one key organization splits the network from 4 into 13 components.',
        'Built the static web app (JavaScript, D3.js, Plotly.js) on GitHub Pages with AI coding assistants; I owned the data model, design decisions and validation.',
        'Ran a usability test with 5 external participants before the public release.',
      ],
    },
    {
      slug: 'civitas', idx: '02', title: 'CIVITAS',
      cat: 'Concept / Civic tech', year: '2026',
      client: 'Concept for DSU, with FabLab UVT', location: 'Timișoara',
      skills: ['Stakeholder research', 'Process mapping', 'Requirements', 'Prototyping', 'Claude Code'],
      credits: ['PhD. Silvia Fierăscu — project coordinator', 'Alexandru Poliac-Seres — research, concept, prototype'],
      info: "CIVITAS is a concept for an emergency-coordination platform, developed at FabLab UVT as a proposal for Romania's Department for Emergency Situations (DSU). It grew out of conversations with DSU, public institutions and NGOs, and focuses on two questions: how authorities coordinate with each other during a crisis, and how the capabilities of civil society can be mobilized quickly. The working prototype is confidential, so this page shows the idea rather than the interface.",
      cover: 'images/civitas.png',
      live: null, gallery: [],
      wip: true,
      built: [
        'Mapped existing capabilities and gaps in crisis coordination together with DSU, institutions and NGOs.',
        'Narrowed a first concept of ten modules down to two priorities, based on stakeholder feedback: coordination between authorities and mobilization of civil society.',
        'Prototyped role-based workspaces, incident and resource flows, and capability matching, iterated through demos with stakeholders.',
        'Built on simulated data as a concept; the next step is a documented handoff to developers.',
      ],
    },
    {
      slug: 'connectm1', idx: '03', title: "Spendings of Timișoara's Public Institutions",
      cat: 'Civic / Data viz', year: '2023 – 2024', client: 'ConnecTM', location: 'Timișoara',
      skills: ['Excel', 'Data cleaning', 'Gephi', 'Network analysis', 'Illustrator', 'Figma'],
      credits: ['PhD. Silvia Fierăscu — project coordinator', 'Alexandru Poliac-Seres — data cleaning, data visualization, graphics', 'Briana Toader — graphics', 'Lucian Soare — video editing', 'Alexia Stroe — project presentation'],
      info: "A network analysis project mapping the spending relationships between Timișoara's public institutions and their contracted firms. Using graph theory and data visualization, the project splits the public expenditure network into two layers — institutions × institutions and firms × firms — revealing 5 distinct hubs where the same institutions consistently contract the same companies. Built to promote transparency and accountability in local public spending.",
      cover: IMG + 'FIZRa6wfjIeXGhNKE1lmzCMXYs.jpg',
      live: 'https://connectm.uvt.ro/2023-2024/proiecte-anul-1/cheltuielile-institutiilor-din-timisoara/',
      gallery: [],
      built: [
        'Collected and cleaned 40,000+ payment records from 73 public institutions and ~1,000 contracted firms.',
        'Projected the data into two networks in Gephi (institutions × institutions and firms × firms) to see who repeatedly works with whom.',
        'Identified 5 hubs where the same institutions consistently contract the same companies.',
        'Turned the analysis into a poster for a public exhibition.',
      ],
    },
    {
      slug: 'unihack', idx: '04', title: 'UniHack',
      cat: 'Identity / Event', year: '2024 – 2025', client: 'Liga AC', location: 'Timișoara',
      skills: ['Photoshop', 'Illustrator', 'Figma', 'AI Tools'],
      credits: ['Design Coordinator: Alexandru Poliac', 'Some materials co-produced with the UniHack 6 Design Team volunteers'],
      info: 'One of the largest student hackathons in Romania, hosted annually in Timișoara under the patronage of the European Parliament. As Design Coordinator in 2024, I owned the complete visual identity — from brand system and social campaigns to motion graphics running across the city, printed materials, event merchandise, and promo video production. I continued to support the team as a volunteer in 2025.',
      video: 'https://framerusercontent.com/assets/XRXoGVY1YWaF6c6afJsZE44RdpE.mp4',
      live: 'https://unihack.eu',
      gallery: [
        IMG + 'h2ibbIoHNP8ZtzYvKIGs4bEl0.png',
        IMG + '6BJWgeoSno8AIJGwJAgWkMNGWU.png',
        IMG + 'zyZ1PEGEkoJK737TwEUQErkl8.png',
        IMG + 'QoksKSd10iYJ5EvxYXuATBAdE.png',
        IMG + 'xri9IXF9UDLIRryNImkbN16Wag.png',
        IMG + 'eFVr8mYqdDuOhVfPbYX0ssTaJTk.png',
        IMG + 'YOOqnrkxjUm67433tkjyuNoNo.png',
        IMG + 'NeYKzYIV17mJb8Q8fvv93uhEqA.png',
      ],
    },
    {
      slug: 'retroform', idx: '05', title: 'Retroform',
      cat: 'Editorial / Art direction', year: '2026', client: 'Class project', location: 'Timișoara',
      skills: ['InDesign', 'AI Tools'],
      credits: ['Magazine texts generated with Claude', 'Mock-ups generated with Nano Banana 3'],
      info: 'Retroform is an editorial design project exploring the intersection of interior design and retro aesthetics. Developed as a magazine concept for a class at West University of Timișoara, it features curated spreads on vintage-inspired living spaces, material culture, and timeless design principles — blending editorial rigor with a distinct visual identity rooted in nostalgia and craft.',
      cover: IMG + 'WPbmmwFL2m5opRPg4d6S2nm5YP4.png',
      live: 'https://drive.google.com/file/d/1AbgLt5OXi6jWoXc1zACD2dN96cuIot8Q/view',
      gallery: [IMG + '0M7f3CMp1S8PkBBtXlxtRJtzxE.png', IMG + '01euwQ0uce4jeaxxJaWpBXo63w.png', IMG + '8vg7MABBQXrMzoDFq644D3q3ZQ.png', IMG + 'KMrccjPakr16wo5FuuPrRjbi4.png'],
    },
    {
      slug: 'wecreate', idx: '06', title: 'weCREATE',
      cat: 'Product / UX', year: '2025', client: 'Class project', location: 'Timișoara',
      skills: ['Illustrator', 'Figma', 'AI Tools'],
      credits: ['Alexandru Poliac'],
      info: 'weCREATE is a UX/UI design project for a mobile video editing app aimed at young creators. Developed for a UX Design class at West University of Timișoara, it explores the full user journey — from onboarding and media selection to timeline editing and direct Instagram export — through a localized Romanian interface, community-driven templates, and a bold visual identity built around deep purple gradients and glass morphism.',
      cover: IMG + 'ShfeuPTw9uQGZZiNCWAIGH0cE.png', coverPos: '50% 0%',
      live: 'https://www.behance.net/gallery/216408105/weCREATE',
      gallery: [IMG + 'ShfeuPTw9uQGZZiNCWAIGH0cE.png'],
    },
    {
      slug: 'jpchenet', idx: '07', title: 'JP Chenet',
      cat: 'Motion / Ad', year: '2024', client: 'Class project (UVT)', location: 'Timișoara',
      skills: ['Camtasia'],
      credits: ['Alexandru Poliac'],
      info: 'A short reel-type ad for a Multimedia class at UVT, featuring a bottle of JP Chenet wine. Shot on iPhone, edited in Camtasia.',
      video: 'https://framerusercontent.com/assets/RJXmunVlwUQwdCC7G0Cnfr51aw.mp4',
      live: null, gallery: [],
    },
  ];

  const CAREER = [
    { years: '2023 – 2024', role: 'Technical Content Design Trainee, Nokia' },
    { years: '2023 – 2025', role: 'Tracks & Design Coordinator, UniHack' },
    { years: '2024 – 2025', role: 'Vice Coordinator, ISWinT' },
    { years: '2024 – now', role: 'Student Researcher, FabLab UVT' },
    { years: '2025', role: 'QA Tester, Ikon Soft' },
    { years: '2025 – now', role: 'Public-Private Partnerships Intern, AUMOVIO' },
    { years: '2026 – now', role: 'MSc Information Systems for Business, UVT' },
  ];

  // Hardcoded defaults (the Claude Design tweaks panel doesn't exist outside the design tool).
  const SPIN_SPEED = 14; // deg/s, "Lively"
  const TICK_SPEED = 72; // px/s, "Lively"

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  class Site {
    constructor() {
      this.reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      this.theta = -8; this.vel = 0; this.focusIndex = -1;
      this.tick = 0; this.tickVel = 0;
      this.focusAmt = 0; this.focusTarget = 0; this.animIndex = -1;
      this.dragging = false; this.lastX = 0; this.downX = 0; this.downY = 0;
      this.tickDragging = false; this.tickLastX = 0; this.tickDownX = 0; this.tickMoved = false;
      this.cards = []; this.last = performance.now();
      this._bound = false; this._narrow = false; this.trackHalf = 0;

      this.stage = document.getElementById('stage');
      this.ring = document.getElementById('ring');
      this.track = document.getElementById('tickTrack');
      this.panel = document.getElementById('panel');
      this.lightbox = document.getElementById('lightbox');
      this.lightboxImg = document.getElementById('lightboxImg');

      this.buildTicker();
      this.renderCareer();
      this.setupHelix();
      this.bindGlobal();
      this.muteAllVideos();

      this._raf = requestAnimationFrame((t) => this.loop(t));
    }

    // ---------------- ticker ----------------
    buildTicker() {
      const idItems = [
        { isId: true, text: 'Alexandru Poliac', color: '#EDEBE4', transform: 'none', glyph: '' },
        { isId: true, text: 'Data · systems · visual communication', color: '#8A8C93', transform: 'uppercase', glyph: '' },
        { isId: true, text: 'alexandrupoliac@gmail.com', color: '#9b9ca2', transform: 'none', glyph: '✉' },
        { isId: true, text: '0774 073 678', color: '#9b9ca2', transform: 'none', glyph: '☎' },
      ];
      const projItems = PROJECTS.map((p) => ({ isProj: true, idx: p.idx, title: p.title, main: MAIN[p.cat] || p.cat }));
      const base = idItems.concat(projItems);
      const doubled = base.concat(base);
      this.track.innerHTML = doubled.map((t) => this.tickerItemHtml(t)).join('');
    }
    tickerItemHtml(t) {
      let inner;
      if (t.isProj) {
        inner =
          '<span class="ticker-idx">' + escapeHtml(t.idx) + '</span>' +
          '<span class="ticker-title">' + escapeHtml(t.title) + '</span>' +
          '<span class="ticker-main">' + escapeHtml(t.main) + '</span>';
      } else {
        inner =
          (t.glyph ? '<span class="ticker-glyph">' + escapeHtml(t.glyph) + '</span>' : '') +
          '<span class="ticker-text" style="text-transform:' + t.transform + ';color:' + t.color + ';">' + escapeHtml(t.text) + '</span>';
      }
      return '<span class="ticker-item">' + inner + '<span class="ticker-dot">&bull;</span></span>';
    }

    renderCareer() {
      const el = document.getElementById('career');
      el.innerHTML = CAREER.map((c) =>
        '<div class="career-row"><span class="career-years">' + escapeHtml(c.years) + '</span><span class="career-role">' + escapeHtml(c.role) + '</span></div>'
      ).join('');
    }

    // ---------------- helix ----------------
    cardMediaHtml(p) {
      if (p.cover) return '<img src="' + p.cover + '" loading="lazy" alt="" style="object-position:' + (p.coverPos || '50% 50%') + ';">';
      if (p.video) return '<video src="' + p.video + '" autoplay muted loop playsinline></video>';
      return '<div class="placeholder"></div>';
    }

    setupHelix() {
      const ring = this.ring, stage = this.stage;
      if (!ring || !stage) return;
      this._narrow = window.innerWidth < 760;
      const isNarrow = this._narrow;
      ring.innerHTML = ''; this.cards = [];
      const CW = isNarrow ? 208 : 300, CH = isNarrow ? 262 : 384;
      this.spread = isNarrow ? 200 : 320;
      PROJECTS.forEach((p, i) => {
        const card = document.createElement('div');
        card.className = 'helix-card'; card.dataset.i = i;
        card.style.width = CW + 'px'; card.style.height = CH + 'px';
        card.style.marginLeft = (-CW / 2) + 'px'; card.style.marginTop = (-CH / 2) + 'px';
        card.innerHTML =
          '<div class="helix-card-media">' + this.cardMediaHtml(p) + '</div>' +
          '<div class="helix-card-meta">' +
            '<div class="helix-card-row"><span class="cat">' + escapeHtml(MAIN[p.cat] || p.cat) + '</span><span>' + escapeHtml(p.year) + '</span></div>' +
            '<div class="helix-card-title">' + escapeHtml(p.title) + '</div>' +
          '</div>';
        card.addEventListener('pointerenter', () => { if (this.focusIndex < 0) card.style.borderColor = ACCENT_VAR; });
        card.addEventListener('pointerleave', () => { if (this.focusIndex !== i) card.style.borderColor = BORDER; });
        ring.appendChild(card);
        this.cards.push({ el: card, base: -(i / PROJECTS.length) * 360 });
      });

      if (!this._bound) {
        stage.addEventListener('pointerdown', (e) => {
          this.dragging = true; this.vel = 0; this.lastX = e.clientX; this.downX = e.clientX; this.downY = e.clientY;
          try { stage.setPointerCapture && stage.setPointerCapture(e.pointerId); } catch (err) {}
        });
        stage.addEventListener('pointermove', (e) => {
          if (!this.dragging) return;
          const dx = e.clientX - this.lastX; this.lastX = e.clientX;
          this.theta += dx * 0.35; this.vel = dx * 0.35;
        });
        stage.addEventListener('pointerup', (e) => {
          if (!this.dragging) return; this.dragging = false;
          try { stage.releasePointerCapture && stage.releasePointerCapture(e.pointerId); } catch (err) {}
          const dist = Math.hypot(e.clientX - this.downX, e.clientY - this.downY);
          if (dist < 5) {
            const hit = document.elementFromPoint(e.clientX, e.clientY);
            const cardEl = hit && hit.closest && hit.closest('.helix-card');
            if (cardEl) this.openPanel(parseInt(cardEl.dataset.i, 10));
            else if (this.focusIndex >= 0) this.closePanel();
          }
        });
        stage.addEventListener('pointercancel', () => { this.dragging = false; });
        this._bound = true;
      }
    }

    // ---------------- panel ----------------
    openPanel(i) {
      const p = PROJECTS[i];
      if (!p) return;
      this.focusIndex = i; this.animIndex = i; this.focusTarget = 1;
      this.cards.forEach((c, j) => { c.el.style.borderColor = j === i ? ACCENT_VAR : BORDER; });
      this.renderPanel(p);
      this.panel.hidden = false;
      this.panel.classList.remove('opening');
      void this.panel.offsetWidth;
      this.panel.classList.add('opening');
    }
    closePanel() {
      this.focusIndex = -1; this.focusTarget = 0;
      this.cards.forEach((c) => { c.el.style.borderColor = BORDER; });
      this.panel.hidden = true;
      this.panel.classList.remove('opening');
    }
    renderPanel(p) {
      const $ = (id) => document.getElementById(id);
      $('panelCount').textContent = (MAIN[p.cat] || p.cat) + ' — ' + p.year;
      $('panelCat').textContent = p.cat;
      $('panelWip').hidden = !p.wip;
      $('panelTitle').textContent = p.title;
      $('panelInfo').textContent = p.info;
      const live = $('panelLive');
      if (p.live) { live.hidden = false; live.href = p.live; } else { live.hidden = true; live.removeAttribute('href'); }
      $('panelClient').textContent = p.client;
      $('panelLocation').textContent = p.location;
      $('panelYear').textContent = p.year;
      $('panelSkills').innerHTML = (p.skills || []).map((s) => '<span class="skill-chip">' + escapeHtml(s) + '</span>').join('');
      $('panelCredits').innerHTML = (p.credits || []).map((c) => '<div class="credit-item">' + escapeHtml(c) + '</div>').join('');

      const builtSection = $('panelBuiltSection');
      const hasBuilt = !!(p.built && p.built.length);
      builtSection.hidden = !hasBuilt;
      $('panelBuilt').innerHTML = hasBuilt
        ? p.built.map((b) => '<li class="built-item">' + escapeHtml(b) + '</li>').join('')
        : '';

      const gallerySection = $('panelGallerySection');
      const hasGallery = !!(p.gallery && p.gallery.length);
      gallerySection.hidden = !hasGallery;
      $('panelGallery').innerHTML = hasGallery
        ? p.gallery.map((g) => '<img src="' + g + '" alt="" loading="lazy">').join('')
        : '';
      $('panelGallery').querySelectorAll('img').forEach((img) => {
        img.addEventListener('click', () => this.openLightbox(img.getAttribute('src')));
      });

      const cover = $('panelCover');
      cover.innerHTML = '';
      if (p.video) {
        const v = document.createElement('video');
        v.src = p.video; v.autoplay = true; v.muted = true; v.defaultMuted = true; v.loop = true; v.playsInline = true;
        cover.appendChild(v);
      } else if (p.cover) {
        const img = document.createElement('img');
        img.src = p.cover; img.alt = p.title; img.style.objectPosition = p.coverPos || '50% 50%';
        img.addEventListener('click', () => this.openLightbox(p.cover));
        cover.appendChild(img);
      }
    }

    // ---------------- lightbox ----------------
    openLightbox(src) {
      if (!src) return;
      this.lightboxImg.src = src;
      this.lightbox.hidden = false;
      this.lightbox.classList.remove('opening');
      void this.lightbox.offsetWidth;
      this.lightbox.classList.add('opening');
    }
    closeLightbox() {
      this.lightbox.hidden = true;
      this.lightbox.classList.remove('opening');
    }

    // ---------------- global bindings ----------------
    bindGlobal() {
      document.getElementById('panelClose').addEventListener('click', () => this.closePanel());
      this.lightbox.addEventListener('click', () => this.closeLightbox());
      this.lightbox.querySelector('.lightbox-close').addEventListener('click', (e) => { e.stopPropagation(); this.closeLightbox(); });
      this.lightboxImg.addEventListener('click', (e) => e.stopPropagation());

      window.addEventListener('keydown', (e) => {
        if (e.key !== 'Escape') return;
        if (!this.lightbox.hidden) this.closeLightbox();
        else if (this.focusIndex >= 0) this.closePanel();
      });

      window.addEventListener('resize', () => {
        const wasNarrow = this._narrow;
        if ((window.innerWidth < 760) !== wasNarrow) this.setupHelix();
      });

      // ticker drag
      const tt = this.track;
      tt.addEventListener('pointerdown', (e) => {
        this.tickDragging = true; this.tickVel = 0; this.tickMoved = false;
        this.tickLastX = e.clientX; this.tickDownX = e.clientX;
        tt.style.cursor = 'grabbing';
        try { tt.setPointerCapture(e.pointerId); } catch (_) {}
      });
      tt.addEventListener('pointermove', (e) => {
        if (!this.tickDragging) return;
        const dx = e.clientX - this.tickLastX; this.tickLastX = e.clientX;
        this.tick = (this.tick || 0) + dx; this.tickVel = dx;
        if (Math.abs(e.clientX - this.tickDownX) > 4) this.tickMoved = true;
      });
      const tickUp = (e) => {
        if (!this.tickDragging) return;
        this.tickDragging = false;
        tt.style.cursor = 'grab';
        try { tt.releasePointerCapture(e.pointerId); } catch (_) {}
      };
      tt.addEventListener('pointerup', tickUp);
      tt.addEventListener('pointerleave', tickUp);

      // keep autoplay videos silent even if any get swapped in dynamically
      this._vidObs = new MutationObserver(() => this.muteAllVideos());
      this._vidObs.observe(document.body, { childList: true, subtree: true });
    }
    muteAllVideos() {
      document.querySelectorAll('video').forEach((v) => { v.muted = true; v.defaultMuted = true; v.volume = 0; });
    }

    // ---------------- animation loop ----------------
    loop(now) {
      const dt = Math.min(0.05, (now - this.last) / 1000); this.last = now;
      this._raf = requestAnimationFrame((t) => this.loop(t));

      // ticker marquee (draggable + inertial, auto-scrolling)
      const tr = this.track;
      if (tr) {
        const half = this.trackHalf && this.trackHalf > 0 ? this.trackHalf : (this.trackHalf = tr.scrollWidth / 2);
        if (!this.tickDragging) {
          this.tick -= TICK_SPEED * dt;
          this.tick += (this.tickVel || 0); this.tickVel = (this.tickVel || 0) * Math.pow(0.0016, dt);
          if (Math.abs(this.tickVel) < 0.02) this.tickVel = 0;
        }
        if (half > 0) { while (this.tick <= -half) this.tick += half; while (this.tick > 0) this.tick -= half; }
        tr.style.transform = 'translateX(' + this.tick.toFixed(1) + 'px)';
      }

      if (!this.cards.length) return;
      this.focusAmt += (this.focusTarget - this.focusAmt) * (1 - Math.pow(0.0009, dt));
      if (this.focusTarget === 0 && this.focusAmt < 0.004) { this.focusAmt = 0; this.animIndex = -1; }
      const open = this.focusTarget === 1;
      if (!open) {
        if (!this.reduce && !this.dragging) this.theta += SPIN_SPEED * dt;
        if (!this.dragging) { this.theta += this.vel; this.vel *= Math.pow(0.0015, dt); if (Math.abs(this.vel) < 0.008) this.vel = 0; }
      }
      const SPREAD = this.spread || 320;
      const DEG = Math.PI / 180;
      const amt = this.focusAmt;
      const e = amt < 0.5 ? 2 * amt * amt : 1 - Math.pow(-2 * amt + 2, 2) / 2;
      this.cards.forEach((c, i) => {
        const a = (c.base + this.theta) * DEG;
        const sin = Math.sin(a), cos = Math.cos(a);
        let x = sin * SPREAD;
        let scale = 0.62 + 0.38 * (cos + 1) / 2;
        let tilt = -sin * 30;
        let op = Math.max(0.34, (cos + 1) / 2);
        let z = Math.round((cos + 1) * 1000);
        let fil = 'none';
        if (amt > 0.001) {
          if (i === this.animIndex) {
            x = x + (-SPREAD * 0.5 - x) * e;
            scale = scale + (1.06 - scale) * e;
            tilt = tilt + (0 - tilt) * e;
            op = 1; z = 4000;
          } else {
            op = op * (1 - e) + 0.1 * e;
            z = 1;
            if (e > 0.02) fil = 'grayscale(' + Math.round(100 * e) + '%) brightness(' + (1 - 0.45 * e).toFixed(2) + ')';
          }
        }
        c.el.style.translate = x.toFixed(1) + 'px 0';
        c.el.style.rotate = 'y ' + tilt.toFixed(1) + 'deg';
        c.el.style.scale = scale.toFixed(3);
        c.el.style.opacity = op; c.el.style.zIndex = z; c.el.style.filter = fil;
        c.el.style.pointerEvents = op < 0.25 ? 'none' : 'auto';
      });
    }
  }

  document.addEventListener('DOMContentLoaded', () => new Site());
})();
