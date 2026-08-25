import { about } from '../data';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrapper">
        <div className="section-heading reveal">
          <span className="num">01.</span>
          <h2>About</h2>
        </div>

        <div className="about-grid">
          <div className="about-text reveal">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>

          <div className="about-side">
            <div className="portrait reveal">
              <img
                src="/portrait.png"
                alt="Portrait of Gitam Shimoni"
                width="320"
                height="320"
              />
            </div>

            <ul className="about-facts reveal" style={{ '--reveal-delay': '120ms' }}>
              {about.facts.map((fact) => (
                <li key={fact.k}>
                  <span className="k">{fact.k}</span>
                  <span className="v">{fact.v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
