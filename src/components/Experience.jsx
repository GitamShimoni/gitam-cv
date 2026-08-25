import { experience } from '../data';

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="wrapper">
        <div className="section-heading reveal">
          <span className="num">02.</span>
          <h2>Experience</h2>
        </div>

        {experience.map((job) => (
          <article className="job" key={job.company}>
            <header className="job-header reveal">
              <h3>
                {job.title} · {job.company}
              </h3>
              <span className="range">{job.range}</span>
            </header>

            <p className="job-summary reveal">{job.summary}</p>

            <div className="work-list">
              {job.work.map((item, i) => (
                <div
                  className="work-item reveal"
                  style={{ '--reveal-delay': `${i * 70}ms` }}
                  key={item.name}
                >
                  <h4>{item.name}</h4>
                  <div>
                    <p>{item.desc}</p>
                    {item.sub && (
                      <div className="work-sub">
                        <span className="sub-label">{item.sub.label}</span>
                        <p>{item.sub.desc}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <ul className="tech-list reveal" aria-label="Technologies used">
              {job.stack.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
