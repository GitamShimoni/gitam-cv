import { skills } from '../data';

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="wrapper">
        <div className="section-heading reveal">
          <span className="num">04.</span>
          <h2>Skills</h2>
        </div>

        <div className="skills-grid">
          {skills.map((group, i) => (
            <div
              className="skills-group reveal"
              style={{ '--reveal-delay': `${i * 80}ms` }}
              key={group.group}
            >
              <h3>{group.group}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
