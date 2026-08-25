import { education, military } from '../data';

function Entry({ item }) {
  return (
    <div className="edu-item">
      <div className="edu-head">
        <h3>{item.title}</h3>
        <span className="org">{item.org}</span>
        <span className="range">{item.range}</span>
      </div>
      <p>{item.detail}</p>
    </div>
  );
}

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="wrapper">
        <div className="section-heading reveal">
          <span className="num">05.</span>
          <h2>Education &amp; service</h2>
        </div>

        <div className="edu-list">
          {education.map((item) => (
            <Entry item={item} key={item.title} />
          ))}

          <hr className="edu-divider" />

          <Entry item={military} />
        </div>
      </div>
    </section>
  );
}
