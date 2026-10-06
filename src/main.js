document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initDeviceSwitcher();
  initShowcaseTabs();
  initSimulator();
  initFaqAccordion();
  initScrollReveal();
  initCardSpotlight();
});

/**
 * 1. Navbar Scroll Blur & State
 */
function initNavbar() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * 2. Mobile Menu & Drawer
 */
function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !drawer) return;

  const toggleMenu = (open) => {
    const isOpen = open !== undefined ? open : !drawer.classList.contains('open');
    drawer.classList.toggle('open', isOpen);
    toggleBtn.setAttribute('aria-expanded', String(isOpen));

    // Update hamburger lines
    const lines = toggleBtn.querySelectorAll('.hamburger-line');
    if (lines.length >= 3) {
      if (isOpen) {
        lines[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        lines[1].style.opacity = '0';
        lines[2].style.transform = 'rotate(-45deg) translate(4px, -4px)';
      } else {
        lines[0].style.transform = 'none';
        lines[1].style.opacity = '1';
        lines[2].style.transform = 'none';
      }
    }
  };

  toggleBtn.addEventListener('click', () => toggleMenu());

  navLinks.forEach((link) => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  // Close when pressing Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      toggleMenu(false);
      toggleBtn.focus();
    }
  });

  // Close when clicking outside drawer
  document.addEventListener('click', (e) => {
    if (drawer.classList.contains('open') && !drawer.contains(e.target) && !toggleBtn.contains(e.target)) {
      toggleMenu(false);
    }
  });
}

/**
 * 3. Dual-Platform Hero Device Switcher (Desktop Extension vs Android Mobile)
 */
function initDeviceSwitcher() {
  const switchBtns = document.querySelectorAll('.mockup-switch-btn');
  const desktopView = document.getElementById('heroViewDesktop');
  const mobileView = document.getElementById('heroViewMobile');

  if (!switchBtns.length || !desktopView || !mobileView) return;

  switchBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-device');
      switchBtns.forEach((b) => b.classList.remove('active', 'android-active'));

      if (target === 'mobile') {
        btn.classList.add('active', 'android-active');
        desktopView.style.display = 'none';
        desktopView.classList.remove('active-view');
        mobileView.style.display = 'block';
        mobileView.classList.add('active-view');
      } else {
        btn.classList.add('active');
        mobileView.style.display = 'none';
        mobileView.classList.remove('active-view');
        desktopView.style.display = 'block';
        desktopView.classList.add('active-view');
      }
    });
  });
}

/**
 * 4. Interactive Product Showcase Views
 */
function initShowcaseTabs() {
  const tabBtns = document.querySelectorAll('.showcase-tab-btn');
  const panels = document.querySelectorAll('.showcase-view-panel');

  if (!tabBtns.length || !panels.length) return;

  tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      if (!targetId) return;

      tabBtns.forEach((b) => b.classList.remove('active'));
      panels.forEach((p) => {
        p.style.display = 'none';
        p.classList.remove('active-view');
      });

      btn.classList.add('active');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.style.display = 'block';
        targetPanel.classList.add('active-view');
      }
    });
  });
}



/**
 * 6. Interactive Simulator ("Try Marakadhey in 5 Seconds")
 */
function initSimulator() {
  const opportunityChips = document.querySelectorAll('.sim-opp-chip');
  const presetChips = document.querySelectorAll('.sim-preset-chip');
  const oppInput = document.getElementById('simOppInput');
  const oppUrl = document.getElementById('simOppUrl');
  const saveBtn = document.getElementById('simSaveBtn');
  const inboxList = document.getElementById('simInboxList');
  const badgeCount = document.getElementById('simBadgeCount');
  const toast = document.getElementById('simToast');
  const toastText = document.getElementById('simToastText');

  if (!saveBtn || !inboxList) return;

  let currentTitle = 'Stripe SWE Internship 2026';
  let currentUrl = 'https://stripe.com/jobs/swe-intern';
  let currentPreset = 'Tomorrow, 9:00 AM';
  let count = 2;

  // Opportunity chip click
  opportunityChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      opportunityChips.forEach((c) => c.classList.remove('active'));
      chip.classList.add('active');
      currentTitle = chip.getAttribute('data-title') || chip.textContent.trim();
      currentUrl = chip.getAttribute('data-url') || 'https://opportunity.org';
      if (oppInput) oppInput.textContent = currentTitle;
      if (oppUrl) oppUrl.textContent = currentUrl;
    });
  });

  // Preset chip click
  presetChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      presetChips.forEach((c) => c.classList.remove('active'));
      chip.classList.add('active');
      currentPreset = chip.getAttribute('data-time') || chip.textContent.trim();
    });
  });

  // Save button action
  saveBtn.addEventListener('click', () => {
    count++;
    if (badgeCount) badgeCount.textContent = `${count} Active`;

    // Create new simulated inbox item
    const newItem = document.createElement('div');
    newItem.className = 'sim-inbox-item';
    newItem.innerHTML = `
      <div>
        <div style="font-weight: 600; color: #FFFFFF; font-size: 0.88rem;">${currentTitle}</div>
        <div style="font-size: 0.72rem; color: #A1A1AA; display: flex; gap: 8px; margin-top: 3px;">
          <span style="color: #F87171; font-weight: 600;">High Priority</span>
          <span>Due: ${currentPreset}</span>
        </div>
      </div>
      <span style="font-size: 0.7rem; color: #10B981; background: rgba(16, 185, 129, 0.15); border: 1px solid rgba(16, 185, 129, 0.3); padding: 3px 8px; border-radius: 4px; font-weight: 600;">Saved</span>
    `;

    inboxList.prepend(newItem);

    // Trigger toast
    if (toast && toastText) {
      toastText.textContent = `Saved: "${currentTitle}" (Reminder set for ${currentPreset})`;
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 3200);
    }
  });
}

/**
 * 7. FAQ Accordion
 */
function initFaqAccordion() {
  const faqCards = document.querySelectorAll('.faq-card');
  if (!faqCards.length) return;

  faqCards.forEach((card) => {
    const btn = card.querySelector('.faq-btn');
    if (!btn) return;

    btn.addEventListener('click', () => {
      const isOpen = card.classList.contains('open');
      // Close other open cards
      faqCards.forEach((c) => c.classList.remove('open'));
      // Toggle clicked card
      if (!isOpen) {
        card.classList.add('open');
      }
    });
  });
}

/**
 * 8. IntersectionObserver Scroll Reveal
 */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if (!revealElements.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    revealElements.forEach((el) => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  revealElements.forEach((el) => observer.observe(el));
}

/**
 * 9. Subtle Card Hover Spotlight
 */
function initCardSpotlight() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const cards = document.querySelectorAll('.glass-card, .install-card, .simulator-box, .tour-card-layout');
  cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

