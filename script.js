:root {
  --bg: #08111f;
  --bg-soft: #101c2f;
  --panel: rgba(9, 18, 31, 0.78);
  --panel-strong: #101a2d;
  --card: #121e31;
  --card-alt: #0e1729;
  --line: rgba(255, 255, 255, 0.08);
  --text: #ecf3ff;
  --muted: #a5b6d9;
  --primary: #6d8cff;
  --primary-strong: #8d74ff;
  --secondary: #1d8dff;
  --green: #7ef0b6;
  --gold: #f8d276;
  --shadow: 0 25px 60px rgba(14, 23, 39, 0.45);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background:
    radial-gradient(circle at top left, rgba(109, 140, 255, 0.18), transparent 25%),
    radial-gradient(circle at bottom right, rgba(141, 116, 255, 0.2), transparent 30%),
    var(--bg);
  color: var(--text);
  line-height: 1.6;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

button,
input {
  font: inherit;
}

.container {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.section {
  padding: 112px 0;
}

.alt-section {
  background: rgba(255, 255, 255, 0.02);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 7px 12px;
  border-radius: 999px;
  border: 1px solid rgba(109, 140, 255, 0.45);
  background: rgba(109, 140, 255, 0.08);
  color: #c7d9ff;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.7rem;
  font-weight: 700;
}

h1,
h2,
h3,
p {
  margin-top: 0;
}

h1 {
  font-size: clamp(2.8rem, 5vw, 5rem);
  line-height: 1.02;
  letter-spacing: -0.06em;
  margin-bottom: 18px;
}

h2 {
  font-size: clamp(2.2rem, 3vw, 3.2rem);
  line-height: 1.1;
  letter-spacing: -0.05em;
  margin-bottom: 16px;
}

p {
  color: var(--muted);
  font-size: 1.06rem;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(18px);
  background: rgba(8, 17, 31, 0.72);
  border-bottom: 1px solid var(--line);
}

.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 82px;
  gap: 18px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  letter-spacing: -0.03em;
}

.brand-mark {
  display: inline-grid;
  place-items: center;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  background: linear-gradient(135deg, var(--primary), var(--primary-strong));
  box-shadow: 0 10px 30px rgba(109, 140, 255, 0.5);
  font-size: 0.9rem;
}

.main-nav,
.nav-actions {
  display: flex;
  align-items: center;
  gap: 26px;
}

.main-nav a {
  color: var(--muted);
  font-weight: 500;
  transition: color 0.2s ease;
}

.main-nav a:hover,
.main-nav a:focus-visible {
  color: var(--text);
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 48px;
  padding: 0 22px;
  border-radius: 12px;
  border: 1px solid transparent;
  font-weight: 600;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.btn:hover,
.btn:focus-visible {
  transform: translateY(-1px);
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary), var(--primary-strong));
  color: white;
  box-shadow: 0 18px 35px rgba(109, 140, 255, 0.35);
}

.btn-secondary,
.btn-ghost {
  border-color: rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.02);
  color: var(--text);
}

.full-width {
  width: 100%;
}

.hero {
  padding: 88px 0 64px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 52px;
  align-items: center;
}

.hero-copy {
  max-width: 620px;
}

.hero-copy > p {
  max-width: 560px;
  margin-bottom: 28px;
  font-size: 1.08rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 42px;
}

.mini-proof {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  padding: 0;
  margin: 0;
}

.mini-proof li {
  display: grid;
  gap: 6px;
  min-width: 120px;
}

.mini-proof strong {
  font-size: 1.7rem;
  letter-spacing: -0.06em;
}

.mini-proof span {
  color: var(--muted);
  font-size: 0.86rem;
}

.hero-visual {
  position: relative;
  display: flex;
  justify-content: center;
}

.hero-visual::before {
  content: "";
  position: absolute;
  inset: 12% 10% auto auto;
  width: 240px;
  height: 240px;
  background: radial-gradient(circle, rgba(109, 140, 255, 0.36) 0%, rgba(109, 140, 255, 0) 70%);
  filter: blur(8px);
}

.dashboard-card {
  position: relative;
  width: min(540px, 100%);
  background: linear-gradient(180deg, rgba(15, 23, 38, 0.98), rgba(12, 19, 31, 0.9));
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  box-shadow: var(--shadow);
  padding: 22px 22px 18px;
}

.panel-header {
  display: flex;
  gap: 8px;
  padding-bottom: 18px;
}

.dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.dot-purple {
  background: #9f88ff;
}

.dot-green {
  background: #85efb6;
}

.dot-gold {
  background: #f3d26a;
}

.kpi-strip {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin-bottom: 18px;
}

.kpi-strip div,
.mini-card,
.stat-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
}

.kpi-strip div {
  padding: 14px 16px;
}

.kpi-strip label,
.mini-card label {
  display: block;
  color: var(--muted);
  font-size: 0.72rem;
  margin-bottom: 8px;
}

.kpi-strip strong,
.mini-card strong {
  font-size: clamp(1.1rem, 2vw, 1.8rem);
  letter-spacing: -0.06em;
}

.chart-box {
  min-height: 180px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0.01));
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 18px;
  padding: 18px 16px 10px;
}

.chart-bars {
  display: flex;
  align-items: end;
  gap: 14px;
  height: 130px;
}

.chart-bars span {
  flex: 1;
  display: block;
  border-radius: 10px 10px 0 0;
  background: linear-gradient(180deg, #8fc3ff 0%, #637dff 100%);
  box-shadow: 0 14px 26px rgba(109, 140, 255, 0.35);
}

.metrics-row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  margin-top: 16px;
}

.mini-card {
  padding: 16px;
}

.mini-card span {
  display: block;
  color: var(--green);
  margin-top: 8px;
  font-size: 0.78rem;
}

.mini-card.highlight {
  background: linear-gradient(180deg, rgba(126, 240, 182, 0.1), rgba(126, 240, 182, 0.04));
}

.logo-strip {
  padding: 26px 0 12px;
}

.brands {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 12px;
  align-items: center;
  color: rgba(236, 243, 255, 0.6);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 700;
}

.brands span {
  text-align: center;
  padding: 12px 10px;
}

.section-heading {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 52px;
}

.left-align {
  margin-left: 0;
  text-align: left;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.feature-card {
  background: linear-gradient(180deg, rgba(17, 27, 41, 0.9), rgba(11, 17, 27, 0.94));
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 22px;
  padding: 26px 22px;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
}

.feature-card h3 {
  margin: 14px 0 10px;
  font-size: 1.35rem;
  letter-spacing: -0.04em;
}

.feature-card p {
  margin: 0;
}

.icon-wrap {
  display: inline-grid;
  place-items: center;
  width: 54px;
  height: 54px;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(109, 140, 255, 0.18), rgba(141, 116, 255, 0.2));
  font-size: 1.5rem;
}

.results-wrap {
  display: grid;
  gap: 28px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
}

.stat-card {
  padding: 30px 20px;
  text-align: center;
}

.stat-card strong {
  display: block;
  font-size: clamp(2rem, 4vw, 3rem);
  letter-spacing: -0.07em;
  margin-bottom: 12px;
}

.stat-card span {
  color: var(--muted);
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.price-card {
  position: relative;
  padding: 28px 22px;
  background: rgba(14, 23, 39, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
}

.price-card.featured {
  border-color: rgba(109, 140, 255, 0.7);
  background: linear-gradient(180deg, rgba(17, 27, 41, 0.9), rgba(20, 25, 40, 0.95));
  transform: translateY(-8px);
}

.plan-badge {
  position: absolute;
  top: -12px;
  left: 20px;
  padding: 8px 12px;
  border-radius: 999px;
  background: linear-gradient(135deg, #8f74ff, #6d8cff);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.price-card h3 {
  margin-bottom: 18px;
  font-size: 1.5rem;
}

.price {
  display: flex;
  align-items: baseline;
  gap: 6px;
  margin-bottom: 22px;
  font-size: 1rem;
  color: var(--muted);
}

.price span {
  font-size: 2.4rem;
  letter-spacing: -0.06em;
  color: var(--text);
  font-weight: 700;
}

.price-card ul {
  list-style: none;
  padding: 0;
  margin: 0 0 24px;
  display: grid;
  gap: 12px;
  color: var(--muted);
}

.price-card li::before {
  content: "✓";
  color: var(--green);
  margin-right: 10px;
}

.testimonial-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.testimonial {
  padding: 28px 22px;
  margin: 0;
  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(12, 18, 28, 0.9);
  color: var(--text);
  font-size: 1.04rem;
}

.testimonial footer {
  margin-top: 24px;
  display: grid;
  gap: 2px;
}

.testimonial footer span {
  color: var(--muted);
  font-size: 0.92rem;
}

.cta-section {
  padding-top: 120px;
}

.cta-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 34px 36px;
  border-radius: 28px;
  background: linear-gradient(135deg, rgba(21, 33, 55, 0.95), rgba(13, 20, 34, 0.86));
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: var(--shadow);
}

.cta-box h2 {
  margin: 10px 0 0;
}

.signup-form {
  display: flex;
  gap: 12px;
  width: min(460px, 100%);
}

.signup-form input {
  flex: 1;
  min-height: 52px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.03);
  color: var(--text);
  padding: 0 16px;
  outline: none;
}

.signup-form input::placeholder {
  color: rgba(236, 243, 255, 0.52);
}

.site-footer {
  padding: 26px 0 42px;
  border-top: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.01);
}

.footer-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  color: var(--muted);
}

.footer-wrap nav {
  display: flex;
  align-items: center;
  gap: 18px;
}

.nav-toggle {
  display: none;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 8px 9px;
  cursor: pointer;
}

.nav-toggle span {
  display: block;
  width: 22px;
  height: 2px;
  background: white;
  margin: 4px 0;
  border-radius: 50px;
}

@media (max-width: 960px) {
  .hero-grid,
  .feature-grid,
  .pricing-grid,
  .testimonial-grid,
  .stats-grid {
    grid-template-columns: 1fr 1fr;
  }

  .hero-grid {
    grid-template-columns: 1fr;
  }

  .cta-box {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 720px) {
  .nav-toggle {
    display: block;
  }

  .main-nav,
  .nav-actions {
    display: none;
  }

  .nav-wrap {
    position: relative;
  }

  .main-nav {
    position: absolute;
    left: 0;
    right: 0;
    top: calc(100% + 8px);
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    background: rgba(9, 18, 31, 0.96);
    padding: 18px 16px;
    border: 1px solid var(--line);
    border-radius: 16px;
    box-shadow: var(--shadow);
  }

  .site-header.nav-open .main-nav,
  .site-header.nav-open .nav-actions {
    display: flex;
  }

  .site-header.nav-open .nav-actions {
    position: absolute;
    top: calc(100% + 220px);
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    background: rgba(9, 18, 31, 0.96);
    padding: 0 16px 16px;
    border: 1px solid var(--line);
    border-radius: 0 0 16px 16px;
    box-shadow: var(--shadow);
  }

  .brands,
  .feature-grid,
  .pricing-grid,
  .testimonial-grid,
  .stats-grid {
    grid-template-columns: 1fr;
  }

  .signup-form {
    flex-direction: column;
    width: 100%;
  }

  .footer-wrap {
    flex-direction: column;
    align-items: flex-start;
  }
}
