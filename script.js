/* ==========================================================================
   CHAMELEON WORKS - APPLICATION SCRIPT
   ========================================================================== */

const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Celia Ahmed",
    role: "Co-Founder & CEO",
    category: "Leadership",
    experience: "4+ Years",
    tagline: "Bridging complex technical strategy with human-centered innovation.",
    bio: "Former Principal Strategist at tech accelerators. Elena leads Chameleon Works with a relentless focus on rapid adaptability, market-defining products, and building high-trust engineering cultures.",
    skills: [
      { name: "Product Vision & Strategy", level: 98 },
      { name: "Venture Dynamics", level: 95 },
      { name: "Executive Leadership", level: 96 },
      { name: "Agile Scaling", level: 92 }
    ],
    achievements: [
      "Architected enterprise growth strategies driving over $40M in client valuation",
      "Keynote speaker on 'Adaptability in AI-Driven Startups'",
      "Mentored 25+ tech founders globally"
    ],
    chameleonSuperpower: "Chroma Vision — Spotting hidden opportunities in chaotic markets",
    avatarBg: "linear-gradient(135deg, #10B981, #06B6D4)",
    initials: "CA",
    photo: "celia.jpeg"
  },
  {
    id: 2,
    name: "Omar Mohamed",
    role: "Co-Founder & CTO",
    category: "Engineering",
    experience: "4+ Years",
    tagline: "Designing resilient distributed systems that handle millions of requests without a blink.",
    bio: "Ex-BigTech Infrastructure Architect with a passion for high-concurrency Rust backends, edge computing, and zero-downtime microservice migrations.",
    skills: [
      { name: "System Architecture", level: 99 },
      { name: "Distributed Systems", level: 96 },
      { name: "Rust & Go Development", level: 95 },
      { name: "Cloud Resiliency", level: 94 }
    ],
    achievements: [
      "Engineered low-latency pipelines handling 50k requests/sec",
      "Author of popular open-source event mesh framework",
      "Reduced infrastructure overhead by 45% for key client accounts"
    ],
    chameleonSuperpower: "Zero-Downtime Shift — Transforming legacy backends live in production",
    avatarBg: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
    initials: "OM",
    photo: "omar1.jpeg"
  },
  {
    id: 3,
    name: "Salma Al-Hady",
    role: "Head of AI & Machine Learning",
    category: "AI & Data",
    experience: "9+ Years",
    tagline: "Fine-tuning neural architectures to deliver practical, enterprise-grade AI intelligence.",
    bio: "PhD in Computational Intelligence. Sophia builds custom LLM integrations, retrieval-augmented generation (RAG) engines, and real-time computer vision models for client products.",
    skills: [
      { name: "LLM Fine-Tuning & RAG", level: 97 },
      { name: "PyTorch & Deep Learning", level: 95 },
      { name: "Predictive Analytics", level: 94 },
      { name: "AI Safety & Ethics", level: 90 }
    ],
    achievements: [
      "Built multi-modal search engine with 99.2% contextual precision",
      "Published 6 peer-reviewed papers in neural optimization",
      "Integrated automated speech and intent parsing into real-time apps"
    ],
    chameleonSuperpower: "Synapse Synthesis — Distilling raw data into instant actionable intelligence",
    avatarBg: "linear-gradient(135deg, #EC4899, #8B5CF6)",
    initials: "SA",
    photo: "salmaH.jpeg"
  },
  {
    id: 4,
    name: "Salwa Mohamed",
    role: "Lead Frontend & UX Architect",
    category: "Engineering",
    experience: "3+ Years",
    tagline: "Crafting sub-second, visually hypnotic web applications with butter-smooth animations.",
    bio: "Pixel perfectionist obsessed with WebGL, CSS micro-interactions, accessibility (WCAG AAA), and modern JavaScript design patterns.",
    skills: [
      { name: "React, Next.js & TypeScript", level: 98 },
      { name: "WebGL / Three.js / Canvas", level: 92 },
      { name: "CSS Architecture & Tokens", level: 97 },
      { name: "Performance Optimization", level: 95 }
    ],
    achievements: [
      "Achieved 100/100 Google Lighthouse scores across all built portals",
      "Created custom UI design token system utilized by over 50k developers",
      "Reduced main-thread render blocking by 70% in web client apps"
    ],
    chameleonSuperpower: "Fluid Camouflage — Crafting layouts that adapt natively to any device glass",
    avatarBg: "linear-gradient(135deg, #06B6D4, #3B82F6)",
    initials: "SM",
    photo: "salwa.jpeg"
  },
  {
    id: 5,
    name: "Yassin Mohamed",
    role: "Principal Backend & Security Lead",
    category: "Engineering",
    experience: "1+ Years",
    tagline: "Fortifying applications with military-grade security while keeping APIs blazingly fast.",
    bio: "Specializing in Zero Trust architecture, GraphQL/gRPC services, and automated vulnerability intelligence. Aarav ensures Chameleon Works applications are impenetrable.",
    skills: [
      { name: "Zero-Trust Security & OAuth", level: 97 },
      { name: "GraphQL & gRPC APIs", level: 94 },
      { name: "PostgreSQL & Redis Caching", level: 96 },
      { name: "Penetration Testing & Audit", level: 91 }
    ],
    achievements: [
      "Led SOC2 Type II compliance readiness for 4 client platforms",
      "Discovered & patched 3 critical CVEs in open-source identity libraries",
      "Designed real-time end-to-end encrypted messaging bridge"
    ],
    chameleonSuperpower: "Impenetrable Shield — Shielding data before threats can materialize",
    avatarBg: "linear-gradient(135deg, #F59E0B, #EF4444)",
    initials: "YM",
    photo: "yassin.jpeg"
  },
  {
    id: 6,
    name: "Hana Ahmed",
    role: "Head of UI/UX & Brand Design",
    category: "Design & UX",
    experience: "2+ Years",
    tagline: "Transforming complex user workflows into delightful, effortless digital moments.",
    bio: "Award-winning designer with a background in cognitive psychology. Zoe shapes brand narratives, wireframes, high-fidelity prototypes, and interactive design systems.",
    skills: [
      { name: "Figma & Design Systems", level: 99 },
      { name: "UX Research & Usability", level: 96 },
      { name: "Interaction Micro-animations", level: 95 },
      { name: "Brand Identity", level: 93 }
    ],
    achievements: [
      "Redesigned SaaS platform interface, increasing user retention by 38%",
      "Winner of 3 International Awwwards & Red Dot Design honors",
      "Pioneered glassmorphic design token libraries"
    ],
    chameleonSuperpower: "Prismatic Polish — Turning obscure requirements into radiant visual elegance",
    avatarBg: "linear-gradient(135deg, #A855F7, #EC4899)",
    initials: "HA",
    photo: "Hana.jpeg"
  },
  {
    id: 7,
    name: "Salma Emad",
    role: "Lead Mobile & Cross-Platform Lead",
    category: "Engineering",
    experience: "4+ Years",
    tagline: "Building native-feeling iOS and Android experiences from a single robust codebase.",
    bio: "Mobile engineering virtuoso specializing in Flutter, React Native, and iOS Native Swift integration. David brings desktop-class power to pocket screens.",
    skills: [
      { name: "Flutter & Dart", level: 97 },
      { name: "React Native & Expo", level: 92 },
      { name: "Swift / iOS Native", level: 88 },
      { name: "Offline Synchronization", level: 94 }
    ],
    achievements: [
      "Built 5 stars rated apps with combined 2M+ downloads on App Store & Play Store",
      "Created offline-first sync engine with zero data conflict loss",
      "Optimized battery usage for background location-aware services"
    ],
    chameleonSuperpower: "Pocket Morphing — Scaling heavy workstation workflows to mobile hardware",
    avatarBg: "linear-gradient(135deg, #10B981, #3B82F6)",
    initials: "SE",
    photo: "salmaE.jpeg"
  },
  {
    id: 8,
    name: "Eyad Ahmed",
    role: "Senior DevOps & Cloud Infra Lead",
    category: "AI & Data",
    experience: "3+ Years",
    tagline: "Automating cloud infrastructure to deploy in seconds with enterprise reliability.",
    bio: "Kubernetes wizard and Cloud Native advocate. Maya builds self-healing infrastructure on AWS, GCP, and Azure using Terraform and GitOps workflows.",
    skills: [
      { name: "Kubernetes & Docker", level: 97 },
      { name: "Terraform & IaC", level: 96 },
      { name: "CI/CD & GitOps (Argocd)", level: 95 },
      { name: "Observability (Prometheus/Grafana)", level: 92 }
    ],
    achievements: [
      "Automated multi-region cloud deployment reducing pipeline time from 45m to 3m",
      "Implemented self-healing cluster auto-scaling saving $120k annually in idle compute",
      "Maintained 99.999% uptime across all managed client environments"
    ],
    chameleonSuperpower: "Cloud Auto-Healing — Instant automatic recovery before any metric drops",
    avatarBg: "linear-gradient(135deg, #6366F1, #06B6D4)",
    initials: "EA",
    photo: "eyad2.jpeg"
  },
  {
    id: 9,
    name: "Sama Ahmed",
    role: "Product Strategy & Growth Lead",
    category: "Product & Strategy",
    experience: "7+ Years",
    tagline: "Turning analytics and user feedback into high-velocity product feature roadmaps.",
    bio: "Data-driven product leader focused on customer success metrics, conversion funnel optimization, and agile sprint cadence.",
    skills: [
      { name: "Agile & Scrum Orchestration", level: 96 },
      { name: "Product Analytics & Funnels", level: 95 },
      { name: "Customer Acquisition", level: 91 },
      { name: "Roadmap Prioritization", level: 94 }
    ],
    achievements: [
      "Increased user onboarding conversion by 52% using iterative product experiments",
      "Managed 40+ concurrent sprint cycles with 100% on-time delivery rate",
      "Built client analytics dashboard tracking real-time product ROI metrics"
    ],
    chameleonSuperpower: "Velocity Velocity — Accelerating execution without missing a single detail",
    avatarBg: "linear-gradient(135deg, #F43F5E, #FB923C)",
    initials: "SA",
    photo: "sama.jpeg"
  },
  {
    id: 10,
    name: "Logien Mohamed",
    role: "Creative Director & Motion Lead",
    category: "Design & UX",
    experience: "9+ Years",
    tagline: "Breathes life into static interfaces with storytelling 3D models and interactive visual dynamics.",
    bio: "Master of motion graphics, Spline 3D, Blender, and kinetic typography. Chloe ensures every brand under Chameleon Works leaves an unforgettable visual mark.",
    skills: [
      { name: "3D Animation & Blender", level: 96 },
      { name: "Motion Design & Lottie", level: 98 },
      { name: "Interactive Visual Storytelling", level: 95 },
      { name: "Video Production & VFX", level: 91 }
    ],
    achievements: [
      "Directed 3D product launches featured on TechCrunch and Product Hunt #1 Product of the Day",
      "Designed kinetic brand identities for 15+ high-growth tech startups",
      "Created interactive 3D web experience viewed by 1.2M unique visitors"
    ],
    chameleonSuperpower: "Kinetic Pulse — Turning flat layouts into living, breathing digital art",
    avatarBg: "linear-gradient(135deg, #8B5CF6, #F43F5E)",
    initials: "LM",
    photo: "logien.jpeg"
  }
];

const FAQS = [
  {
    q: "Why are you called Chameleon Works?",
    a: "Like a chameleon adapting to any terrain, our startup adapts instantly to your industry, tech stack, and strategic goals. We don't push one rigid technology—we shape-shift our expertise to build what's best for your product."
  },
  {
    q: "How does working with an elite 10-person team benefit me?",
    a: "You get senior talent directly on every part of your project. There are no account managers relaying messages or junior devs learning on your dime. You get direct access to our CTO, Head of AI, Lead UI/UX designer, and developers."
  },
  {
    q: "What is your typical project timeline?",
    a: "Our agile sprint cadence allows us to deliver fully functional MVPs in 3 to 6 weeks. For ongoing enterprise partnerships, we work in continuous 2-week deployment cycles."
  },
  {
    q: "Can you take over an existing codebase or rebuild from scratch?",
    a: "Both! We frequently audit and modernize legacy software, refactoring backends for speed and security, or building next-generation ground-up applications."
  },
  {
    q: "How do we get started?",
    a: "You can use our interactive Project Estimator on this site or hit 'Get Started'. We offer a free 30-minute technical discovery session with our CEO Elena and CTO Marcus."
  }
];

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // 1. Sticky Navbar
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile drawer
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  mobileToggle.addEventListener('click', () => {
    mobileDrawer.classList.toggle('show');
  });

  // 2. Theme Switcher
  const themeBtn = document.getElementById('themeBtn');
  const themeDropdown = document.getElementById('themeDropdown');
  themeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    themeDropdown.classList.toggle('show');
  });

  document.addEventListener('click', () => {
    themeDropdown.classList.remove('show');
  });

  document.querySelectorAll('.theme-option').forEach(opt => {
    opt.addEventListener('click', (e) => {
      e.stopPropagation();
      const selectedTheme = opt.getAttribute('data-theme-val');
      document.documentElement.setAttribute('data-theme', selectedTheme);
      document.querySelectorAll('.theme-option').forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
      themeDropdown.classList.remove('show');
    });
  });

  // 3. Why Us Tab Toggle
  const tabPillarsBtn = document.getElementById('tabPillarsBtn');
  const tabMatrixBtn = document.getElementById('tabMatrixBtn');
  const pillarsView = document.getElementById('pillarsView');
  const matrixView = document.getElementById('matrixView');

  tabPillarsBtn.addEventListener('click', () => {
    tabPillarsBtn.classList.add('active');
    tabMatrixBtn.classList.remove('active');
    pillarsView.classList.remove('hidden');
    matrixView.classList.add('hidden');
  });

  tabMatrixBtn.addEventListener('click', () => {
    tabMatrixBtn.classList.add('active');
    tabPillarsBtn.classList.remove('active');
    matrixView.classList.remove('hidden');
    pillarsView.classList.add('hidden');
  });

  // 4. Render Team Grid (The 10 People)
  const teamGrid = document.getElementById('teamGrid');
  const footerTeamPills = document.getElementById('footerTeamPills');

  function renderTeam(filterCategory = 'All') {
    teamGrid.innerHTML = '';
    const filtered = filterCategory === 'All'
      ? TEAM_MEMBERS
      : TEAM_MEMBERS.filter(m => m.category === filterCategory);

    filtered.forEach(m => {
      const card = document.createElement('div');
      card.className = 'glass-card team-card';
      card.setAttribute('data-member-id', m.id);

      const cardAvatarHtml = m.photo
        ? `<div class="avatar-circle avatar-photo"><img src="${m.photo}" alt="${m.name}" /></div>`
        : `<div class="avatar-circle avatar-placeholder" style="background: ${m.avatarBg}">
            <span>${m.initials}</span>
          </div>`;

      card.innerHTML = `
        <div class="card-top">
          ${cardAvatarHtml}
          <div class="exp-badge">${m.experience}</div>
        </div>
        <div class="member-info">
          <span class="member-role">${m.role}</span>
          <h3 class="member-name">${m.name}</h3>
          <p class="member-tagline">${m.tagline}</p>
        </div>
        <div class="superpower-snippet">
          <i data-lucide="zap"></i>
          <span>${m.chameleonSuperpower.split('—')[0]}</span>
        </div>
        <div class="card-footer">
          <span class="view-bio-text">View Full Bio & Stats</span>
          <i data-lucide="arrow-up-right" class="arrow-icon"></i>
        </div>
      `;

      card.addEventListener('click', () => openTeamModal(m));
      teamGrid.appendChild(card);
    });

    if (window.lucide) lucide.createIcons();
  }

  // Render Footer Member Quick Pills
  TEAM_MEMBERS.forEach(m => {
    const pill = document.createElement('a');
    pill.className = 'mini-member-pill';
    pill.href = '#team';
    pill.innerText = `${m.name.split(' ')[0]} (${m.role.split(' ')[0]})`;
    pill.addEventListener('click', () => openTeamModal(m));
    footerTeamPills.appendChild(pill);
  });

  // Filter Buttons
  document.querySelectorAll('#teamFilterBar .filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#teamFilterBar .filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-cat');
      renderTeam(cat);
    });
  });

  renderTeam('All');

  // 5. Team Modal Deep Dive
  const teamModal = document.getElementById('teamModal');
  const closeTeamModal = document.getElementById('closeTeamModal');
  const modalAvatar = document.getElementById('modalAvatar');
  const modalRole = document.getElementById('modalRole');
  const modalName = document.getElementById('modalName');
  const modalExp = document.getElementById('modalExp');
  const modalCat = document.getElementById('modalCat');
  const modalSuperpower = document.getElementById('modalSuperpower');
  const modalBio = document.getElementById('modalBio');
  const modalSkills = document.getElementById('modalSkills');
  const modalAchievements = document.getElementById('modalAchievements');
  const modalContactBtn = document.getElementById('modalContactBtn');
  const modalContactText = document.getElementById('modalContactText');

  let activeMemberForContact = null;

  function openTeamModal(member) {
    activeMemberForContact = member.name;
    if (member.photo) {
      modalAvatar.style.background = 'transparent';
      modalAvatar.innerHTML = `<img src="${member.photo}" alt="${member.name}" class="avatar-large-img" />`;
    } else {
      modalAvatar.style.background = member.avatarBg;
      modalAvatar.innerText = member.initials;
    }
    modalRole.innerText = member.role;
    modalName.innerText = member.name;
    modalExp.innerText = `${member.experience} Experience`;
    modalCat.innerText = member.category;
    modalSuperpower.innerText = member.chameleonSuperpower;
    modalBio.innerText = member.bio;
    modalContactText.innerText = `Work Directly with ${member.name.split(' ')[0]}`;

    // Render Skills
    modalSkills.innerHTML = '';
    member.skills.forEach(s => {
      const item = document.createElement('div');
      item.className = 'skill-item';
      item.innerHTML = `
        <div class="skill-info">
          <span>${s.name}</span>
          <span class="skill-percent">${s.level}%</span>
        </div>
        <div class="skill-bar-track">
          <div class="skill-bar-fill" style="width: ${s.level}%"></div>
        </div>
      `;
      modalSkills.appendChild(item);
    });

    // Render Achievements
    modalAchievements.innerHTML = '';
    member.achievements.forEach(ach => {
      const li = document.createElement('li');
      li.innerHTML = `<i data-lucide="award" class="ach-icon"></i><span>${ach}</span>`;
      modalAchievements.appendChild(li);
    });

    if (window.lucide) lucide.createIcons();
    teamModal.classList.remove('hidden');
  }

  closeTeamModal.addEventListener('click', () => {
    teamModal.classList.add('hidden');
  });

  teamModal.addEventListener('click', (e) => {
    if (e.target === teamModal) teamModal.classList.add('hidden');
  });

  modalContactBtn.addEventListener('click', () => {
    teamModal.classList.add('hidden');
    scrollToContact({ member: activeMemberForContact });
  });

  // 6. Interactive Project Estimator
  const squadRange = document.getElementById('squadRange');
  const squadBadge = document.getElementById('squadBadge');
  const estDelivery = document.getElementById('estDelivery');
  const estSquad = document.getElementById('estSquad');
  const estBudget = document.getElementById('estBudget');
  const lockEstimateBtn = document.getElementById('lockEstimateBtn');

  let selectedPlatforms = ['web'];
  let selectedSpeed = 'balanced';
  let selectedSquadSize = 4;

  const platformBase = {
    web: { cost: 12000, weeks: 4, name: 'Full-Stack Web App' },
    mobile: { cost: 15000, weeks: 5, name: 'Cross-Platform Mobile App' },
    ai: { cost: 18000, weeks: 4, name: 'AI RAG & Neural System' },
    cloud: { cost: 10000, weeks: 3, name: 'Cloud Infrastructure & Security' }
  };

  const speedMultipliers = {
    rush: { mult: 1.25, timeFactor: 0.75 },
    balanced: { mult: 1.0, timeFactor: 1.0 },
    enterprise: { mult: 1.4, timeFactor: 1.5 }
  };

  document.querySelectorAll('.option-card').forEach(card => {
    card.addEventListener('click', () => {
      const plat = card.getAttribute('data-platform');
      if (selectedPlatforms.includes(plat)) {
        if (selectedPlatforms.length > 1) {
          selectedPlatforms = selectedPlatforms.filter(p => p !== plat);
          card.classList.remove('active');
        }
      } else {
        selectedPlatforms.push(plat);
        card.classList.add('active');
      }
      updateEstimator();
    });
  });

  squadRange.addEventListener('input', (e) => {
    selectedSquadSize = parseInt(e.target.value);
    squadBadge.innerText = `${selectedSquadSize} Specialists (Out of 10)`;
    updateEstimator();
  });

  document.querySelectorAll('#speedPills .speed-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#speedPills .speed-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedSpeed = btn.getAttribute('data-speed');
      updateEstimator();
    });
  });

  function updateEstimator() {
    const baseCostTotal = selectedPlatforms.reduce((sum, p) => sum + platformBase[p].cost, 0);
    const baseWeeksTotal = Math.max(...selectedPlatforms.map(p => platformBase[p].weeks));
    const speedObj = speedMultipliers[selectedSpeed];

    const finalCost = Math.round(baseCostTotal * speedObj.mult * (1 + (selectedSquadSize - 2) * 0.1));
    const finalWeeks = Math.max(2, Math.round(baseWeeksTotal * speedObj.timeFactor));

    estDelivery.innerText = `${finalWeeks} - ${finalWeeks + 2} Weeks`;
    estSquad.innerText = `${selectedSquadSize} Senior Specialists`;
    estBudget.innerText = `$${Math.round(finalCost * 0.9).toLocaleString()} - $${Math.round(finalCost * 1.1).toLocaleString()} USD`;
  }

  lockEstimateBtn.addEventListener('click', () => {
    const estimateText = `${selectedPlatforms.map(p => platformBase[p].name).join(', ')} | Squad: ${selectedSquadSize} | Time: ${estDelivery.innerText} | Budget: ${estBudget.innerText}`;
    scrollToContact({ estimate: estimateText });
  });

  // 7. Render FAQ Accordion
  const faqAccordion = document.getElementById('faqAccordion');
  FAQS.forEach((faq, idx) => {
    const item = document.createElement('div');
    item.className = `glass-card faq-item ${idx === 0 ? 'open' : ''}`;
    item.innerHTML = `
      <div class="faq-question">
        <span class="q-text">${faq.q}</span>
        <i data-lucide="chevron-down" class="chevron"></i>
      </div>
      <div class="faq-answer ${idx === 0 ? '' : 'hidden'}">
        <p>${faq.a}</p>
      </div>
    `;

    item.addEventListener('click', () => {
      const isAlreadyOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq-answer').classList.add('hidden');
      });
      if (!isAlreadyOpen) {
        item.classList.add('open');
        item.querySelector('.faq-answer').classList.remove('hidden');
      }
    });

    faqAccordion.appendChild(item);
  });

  if (window.lucide) lucide.createIcons();

  // 8. Contact Form Handling & Smooth Scroll
  const contactForm = document.getElementById('contactForm');
  const successToast = document.getElementById('successToast');
  const prefillMemberPill = document.getElementById('prefillMemberPill');
  const prefillMemberName = document.getElementById('prefillMemberName');
  const prefillEstimatePill = document.getElementById('prefillEstimatePill');
  const prefillEstimateText = document.getElementById('prefillEstimateText');

  function scrollToContact(data = {}) {
    if (data.member) {
      prefillMemberName.innerText = data.member;
      prefillMemberPill.classList.remove('hidden');
    }
    if (data.estimate) {
      prefillEstimateText.innerText = data.estimate;
      prefillEstimatePill.classList.remove('hidden');
    }
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  }

  document.querySelectorAll('.open-contact-trigger, #openContactBtnNav, #openContactBtnMobile').forEach(b => {
    b.addEventListener('click', () => scrollToContact());
  });

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    contactForm.classList.add('hidden');
    successToast.classList.remove('hidden');

    setTimeout(() => {
      contactForm.reset();
      contactForm.classList.remove('hidden');
      successToast.classList.add('hidden');
      prefillMemberPill.classList.add('hidden');
      prefillEstimatePill.classList.add('hidden');
    }, 4000);
  });

  // Back to Top Button
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
