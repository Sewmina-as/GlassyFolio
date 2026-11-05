import Icon from "@/components/Icon";
import Navbar from "@/components/Navbar";
import Portrait from "@/components/Portrait";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import {
  brands,
  profile,
  projects,
  services,
  stats,
  steps,
  testimonials,
  tools,
  hero,
  about,
  socials,
  footer,
} from "@/lib/data";

export default function Home() {
  return (
    <>
      <div className="bg" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
      <main className="shell">
        <Navbar />

        {/* ── Hero ── */}
        <section id="home" className="panel hero">
          <div className="hero-copy">
            <p className="eyebrow">{hero.greeting}</p>
            <h1>{profile.name}</h1>
            <h2 className="grad">{profile.role}</h2>
            <p className="lead">{hero.description}</p>
            <div className="actions">
              <a href="#work" className="btn btn-dark">
                View My Work <Icon name="arrow" size={15} />
              </a>
              <a href={profile.resumePath} className="btn btn-light">
                Download CV <Icon name="download" size={15} />
              </a>
            </div>
            <div className="trusted">
              <small>Trusted by</small>
              <ul>
                {brands.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="hero-visual">
            <div className="frame">
              <Portrait />
            </div>
            <div className="chip chip-years glass">
              <b>{hero.yearsExperience}</b>
              <span>Years of Experience</span>
            </div>
            <div className="chip chip-impact glass">
              <span>{hero.impactLabel}</span>
              <b>{hero.impactValue}</b>
              <svg viewBox="0 0 120 36" aria-hidden="true">
                <defs>
                  <linearGradient id="g">
                    <stop stopColor="#a78bfa" />
                    <stop offset="1" stopColor="#6366f1" />
                  </linearGradient>
                </defs>
                <path
                  d="M2 32C20 30 28 14 46 20s26 8 40-6 22-8 32-10"
                  fill="none"
                  stroke="url(#g)"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <span className="orb glass">
              <Icon name="spark" size={22} />
            </span>
          </div>
        </section>

        {/* ── About ── */}
        <Reveal id="about" className="about">
          <div>
            <p className="eyebrow">{about.eyebrow}</p>
            <h3>
              {about.heading.split("\n").map((line, i, arr) => (
                <span key={i}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
            </h3>
            <ul className="stats glass">
              {stats.map((s) => (
                <li key={s.label}>
                  <span className="ico">
                    <Icon name={s.icon} />
                  </span>
                  <b>{s.value}</b>
                  <small>{s.label}</small>
                </li>
              ))}
            </ul>
          </div>
          <div className="about-text">
            <p>{about.description}</p>
            <a href="#contact" className="btn btn-light">
              More About Me <Icon name="arrow" size={15} />
            </a>
          </div>
        </Reveal>

        {/* ── Services ── */}
        <Reveal id="services">
          <p className="eyebrow">What I Do</p>
          <h3>Services I Offer</h3>
          <div className="grid-4">
            {services.map((s) => (
              <article key={s.title} className="card service">
                <span className={`ico tone-${s.tone}`}>
                  <Icon name={s.icon} size={20} />
                </span>
                <h4>{s.title}</h4>
                <p>{s.text}</p>
                <span className="go">
                  <Icon name="arrow" size={14} />
                </span>
              </article>
            ))}
          </div>
        </Reveal>

        {/* ── Tools & Skills ── */}
        <Reveal id="tools">
          <p className="eyebrow">Tools &amp; Skills</p>
          <h3>Technologies I Use</h3>
          <ul className="tools">
            {tools.map((t) => (
              <li key={t.name} className="card tool">
                <span className="mark" style={{ color: t.color }}>
                  {t.mark}
                </span>
                <small>{t.name}</small>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* ── Featured Work ── */}
        <Reveal id="work">
          <div className="head-row">
            <div>
              <p className="eyebrow">Featured Projects</p>
              <h3>Selected Work</h3>
            </div>
            <a href="#contact" className="btn btn-light">
              View All Projects <Icon name="arrow" size={15} />
            </a>
          </div>
          <div className="grid-3">
            {projects.map((p) => (
              <a
                key={p.title}
                href={p.url ?? "#contact"}
                className="card project"
                {...(p.url ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <div className={`shot hue-${p.hue}`} aria-hidden="true">
                  <div className="mock">
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>
                </div>
                <div className="meta">
                  <div>
                    <h4>{p.title}</h4>
                    <small>{p.kind}</small>
                  </div>
                  <span className="go">
                    <Icon name="arrow" size={14} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </Reveal>

        {/* ── Process ── */}
        <Reveal id="process">
          <p className="eyebrow">My Process</p>
          <h3>How I Work</h3>
          <ol className="steps">
            {steps.map((s, i) => (
              <li key={s.title} className="card step">
                <span className="num">0{i + 1}</span>
                <h4>{s.title}</h4>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </Reveal>

        {/* ── Testimonials ── */}
        <Reveal id="testimonials">
          <p className="eyebrow">Testimonials</p>
          <h3>What Clients Say</h3>
          <div className="slider">
            <div className="grid-3">
              {testimonials.map((t) => (
                <figure key={t.name} className="card quote">
                  <blockquote>{t.quote}</blockquote>
                  <figcaption>
                    <span className="avatar">
                      {t.name
                        .split(" ")
                        .map((w) => w[0])
                        .join("")}
                    </span>
                    <span>
                      <b>{t.name}</b>
                      <small>{t.role}</small>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
            <div className="arrows">
              <button aria-label="Previous">
                <Icon name="chevL" size={14} />
              </button>
              <button aria-label="Next">
                <Icon name="chevR" size={14} />
              </button>
            </div>
          </div>
        </Reveal>

        {/* ── Contact ── */}
        <Reveal id="contact" className="contact">
          <div>
            <p className="eyebrow">Let&apos;s Connect</p>
            <h3>
              Have a project in mind?
              <br />
              Let&apos;s create something amazing together.
            </h3>
            <ul className="contact-list">
              <li>
                <Icon name="mail" />
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li>
                <Icon name="phone" />
                <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
                  {profile.phone}
                </a>
              </li>
              <li>
                <Icon name="pin" />
                <span>{profile.location}</span>
              </li>
            </ul>
            {socials.length > 0 && (
              <ul className="social-links">
                {socials.map((s) => (
                  <li key={s.platform}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                    >
                      {s.platform}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <ContactForm />
          <div className="crystal" aria-hidden="true" />
        </Reveal>

        {/* ── Footer ── */}
        <footer className="foot">
          <span>
            © {new Date().getFullYear()} {profile.name}. {footer.text}
          </span>
          {footer.showBackToTop && (
            <a href="#home">
              Back to top <Icon name="arrow" size={13} />
            </a>
          )}
        </footer>
      </main>
    </>
  );
}
