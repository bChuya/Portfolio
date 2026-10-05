/* Portfolio theme refresh */
:root {
  --bg: #f5efff;
  --bg-strong: #efe3ff;
  --panel: rgba(255, 255, 255, 0.72);
  --panel-strong: #ffffff;
  --primary: #6d4aff;
  --primary-strong: #4f2ae3;
  --primary-soft: #efe8ff;
  --secondary: #b998ff;
  --text: #1d1630;
  --muted: #62577a;
  --border: rgba(109, 74, 255, 0.14);
  --shadow-sm: 0 12px 28px rgba(86, 60, 170, 0.12);
  --shadow-md: 0 20px 48px rgba(86, 60, 170, 0.14);
  --radius-xl: 28px;
  --radius-lg: 20px;
  --radius-md: 14px;
  --radius-pill: 999px;
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
  background: linear-gradient(180deg, #f6f0ff 0%, #f0ebff 30%, #f7f5ff 100%);
  color: var(--text);
  line-height: 1.6;
}

a {
  color: var(--primary-strong);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

img {
  max-width: 100%;
  display: block;
}

.container {
  width: min(1100px, calc(100% - 2rem));
  margin: 0 auto;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(16px);
  background: rgba(246, 240, 255, 0.72);
  border-bottom: 1px solid rgba(109, 74, 255, 0.08);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 1rem 0;
}

.site-title {
  margin: 0;
  font-size: clamp(1.5rem, 2vw, 2rem);
  letter-spacing: -0.04em;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.nav a {
  padding: 0.7rem 1rem;
  border-radius: var(--radius-pill);
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid var(--border);
  color: var(--text);
  font-weight: 600;
  transition: 0.25s ease;
}

.nav a:hover {
  background: var(--primary-soft);
  color: var(--primary-strong);
  text-decoration: none;
  transform: translateY(-1px);
}

main {
  padding-bottom: 3rem;
}

.hero {
  padding: 4rem 0 2.5rem;
}

.hero-inner {
  display: grid;
  grid-template-columns: 260px minmax(0, 1fr);
  align-items: center;
  gap: 2rem;
  background: linear-gradient(135deg, rgba(109, 74, 255, 0.12), rgba(185, 152, 255, 0.16));
  border: 1px solid rgba(109, 74, 255, 0.1);
  border-radius: 34px;
  padding: 2rem;
  box-shadow: var(--shadow-md);
}

.avatar {
  width: 220px;
  height: 220px;
  border-radius: 50%;
  object-fit: cover;
  border: 8px solid rgba(255, 255, 255, 0.7);
  box-shadow: 0 20px 45px rgba(109, 74, 255, 0.2);
}

.hero-content h2 {
  margin: 0 0 0.6rem;
  font-size: clamp(2.2rem, 4vw, 4rem);
  line-height: 1.05;
  letter-spacing: -0.06em;
}

.lead {
  margin: 0;
  max-width: 620px;
  font-size: 1.1rem;
  color: var(--muted);
}

.ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1.5rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.9rem 1.4rem;
  border-radius: var(--radius-pill);
  font-weight: 700;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.72);
  color: var(--text);
  transition: 0.25s ease;
}

.btn:hover {
  text-decoration: none;
  transform: translateY(-2px);
  box-shadow: var(--shadow-sm);
}

.btn.primary {
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  color: #fff;
  border: none;
}

.about,
.interests,
.resume,
.skills,
.projects,
.downloads,
.contact {
  padding: 2rem;
  margin-top: 2rem;
  background: rgba(255, 255, 255, 0.68);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-sm);
}

section h3 {
  margin: 0 0 1.2rem;
  font-size: clamp(1.6rem, 2vw, 2.2rem);
  letter-spacing: -0.04em;
}

.about p,
.resume p,
.contact p {
  color: var(--muted);
}

.about ul {
  margin: 1.2rem 0 0;
  padding-left: 1.3rem;
  color: var(--text);
}

.interest-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
}

.interest-item {
  padding: 1rem 1.2rem;
  background: linear-gradient(135deg, #ffffff 0%, #f3ebff 100%);
  border: 1px solid rgba(109, 74, 255, 0.12);
  border-radius: var(--radius-lg);
  font-weight: 700;
  color: var(--primary-strong);
  text-align: center;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6);
}

.resume-actions {
  margin-top: 1rem;
}

.skill-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
}

.skill {
  padding: 1rem 1.2rem;
  background: linear-gradient(135deg, #ffffff 0%, #f3ebff 100%);
  border: 1px solid rgba(109, 74, 255, 0.12);
  border-radius: var(--radius-lg);
  font-weight: 700;
  color: var(--primary-strong);
  text-align: center;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6);
}

.project-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.25rem;
}

.project {
  padding: 1.5rem;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(109, 74, 255, 0.1);
  background: linear-gradient(180deg, rgba(255,255,255,0.9), rgba(245,238,255,0.95));
  box-shadow: var(--shadow-sm);
}

.project-featured {
  grid-column: 1 / -1;
  background: linear-gradient(135deg, rgba(109, 74, 255, 0.12), rgba(255,255,255,0.88));
}

.project-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.project-icon {
  width: 42px;
  height: 42px;
  padding: 0.5rem;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  color: white;
}

.project h4 {
  margin: 0;
  font-size: 1.3rem;
}

.project p {
  color: var(--muted);
}

.project-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0.75rem 0 1rem;
}

.badge {
  display: inline-flex;
  align-items: center;
  padding: 0.4rem 0.75rem;
  border-radius: var(--radius-pill);
  background: var(--primary-soft);
  color: var(--primary-strong);
  font-size: 0.78rem;
  font-weight: 700;
}

.download-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
}

.download-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.1rem;
  border-radius: var(--radius-lg);
  background: linear-gradient(135deg, rgba(109, 74, 255, 0.06), rgba(255,255,255,0.9));
  border: 1px solid rgba(109, 74, 255, 0.12);
  box-shadow: var(--shadow-sm);
  transition: 0.25s ease;
  text-decoration: none;
}

.download-card::before {
  content: "📄";
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 16px;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  font-size: 1.5rem;
  box-shadow: var(--shadow-sm);
}

.download-card:hover {
  transform: translateY(-4px);
  border-color: rgba(109, 74, 255, 0.24);
  text-decoration: none;
}

.download-content {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  flex: 1;
}

.download-title {
  font-size: 1.01rem;
  color: var(--text);
  font-weight: 700;
}

.download-meta {
  font-size: 0.8rem;
  color: var(--muted);
  font-weight: 600;
}

.contact form {
  display: grid;
  gap: 1rem;
}

.contact label {
  display: grid;
  gap: 0.45rem;
  color: var(--text);
  font-weight: 600;
}

input,
textarea,
button {
  font: inherit;
}

input,
textarea {
  width: 100%;
  border: 1px solid rgba(109, 74, 255, 0.15);
  background: rgba(255,255,255,0.7);
  border-radius: 14px;
  padding: 0.95rem 1rem;
  color: var(--text);
  resize: vertical;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: rgba(109, 74, 255, 0.5);
  box-shadow: 0 0 0 4px rgba(109, 74, 255, 0.1);
}

#form-status {
  min-height: 1.7em;
  margin: 0;
  color: var(--primary-strong);
  font-weight: 600;
}

.socials {
  margin-top: 1rem;
}

.site-footer {
  padding: 1rem 0 2.5rem;
  color: var(--muted);
}

.site-footer .container {
  display: flex;
  justify-content: center;
  text-align: center;
}

@media (max-width: 760px) {
  .header-inner {
    flex-direction: column;
    padding: 1rem 0 0.75rem;
  }

  .hero-inner {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .avatar {
    margin: 0 auto;
  }

  .ctas {
    justify-content: center;
  }

  .about,
  .interests,
  .resume,
  .skills,
  .projects,
  .downloads,
  .contact {
    padding: 1.25rem;
  }
}

@media (max-width: 480px) {
  .nav a {
    flex: 1 1 calc(50% - 0.75rem);
    text-align: center;
  }

  .site-header {
    position: static;
  }
}


