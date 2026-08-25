import { FolderSimple, GithubLogo, ArrowUpRight } from '@phosphor-icons/react';
import { projects, otherProjects } from '../data';

function CardLink({ link }) {
  const Icon = link.label === 'github' || link.label === 'repo' ? GithubLogo : ArrowUpRight;
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`${link.label} link`}
    >
      <Icon size={20} />
    </a>
  );
}

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="wrapper">
        <div className="section-heading reveal">
          <span className="num">03.</span>
          <h2>Selected projects</h2>
        </div>

        <div className="project-grid">
          {projects.map((project, i) => (
            <article
              className="project-card reveal"
              style={{ '--reveal-delay': `${(i % 3) * 90}ms` }}
              key={project.title}
            >
              <div className="card-top">
                <FolderSimple size={38} className="folder-icon" />
                {project.links.length > 0 && (
                  <div className="card-links">
                    {project.links.map((link) => (
                      <CardLink link={link} key={link.href} />
                    ))}
                  </div>
                )}
              </div>

              <h3>{project.title}</h3>
              <p>{project.blurb}</p>

              {project.note && <span className="project-note">{project.note}</span>}

              <ul className="tech-list" style={{ marginTop: '18px' }} aria-label="Built with">
                {project.stack.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="other-projects reveal">
          <h3>Earlier work</h3>
          <ul className="other-list">
            {otherProjects.map((p) => (
              <li key={p.title}>
                <span className="title-row">
                  <strong>{p.title}</strong>
                  <span className="other-links">
                    {p.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {l.label}
                      </a>
                    ))}
                  </span>
                </span>
                <p>{p.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
