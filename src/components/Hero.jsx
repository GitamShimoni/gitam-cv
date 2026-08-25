import { ArrowDown } from '@phosphor-icons/react';
import { hero, profile } from '../data';

export default function Hero() {
  const markAt = hero.subhead.indexOf(hero.highlight);

  const renderSubhead = () => {
    if (markAt === -1) return hero.subhead;
    return (
      <>
        {hero.subhead.slice(0, markAt)}
        <mark className="hero-mark">{hero.highlight}</mark>
        {hero.subhead.slice(markAt + hero.highlight.length)}
      </>
    );
  };

  return (
    <section className="hero" id="top" aria-label="Introduction">
      <div className="wrapper">
        <div className="hero-inner hero-load">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1>{hero.headline}</h1>
          <p className="subhead">{renderSubhead()}</p>
          <p className="body">{hero.body}</p>
          <div className="hero-actions">
            <a className="btn" href={`mailto:${profile.email}`}>
              Email me
            </a>
            <a
              className="btn"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      <a className="scroll-hint" href="#about" aria-label="Scroll to the about section">
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
