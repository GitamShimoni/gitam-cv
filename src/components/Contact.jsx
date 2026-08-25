import { profile } from '../data';

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="wrapper contact-inner">
        <span className="mono-kicker reveal">06. Contact</span>
        <h2 className="reveal">Let&rsquo;s talk</h2>
        <p className="reveal">
          I&rsquo;m open to full-stack roles and interesting problems &mdash; my
          inbox is the fastest way to reach me, and I answer it.
        </p>
        <a className="btn reveal" href={`mailto:${profile.email}`}>
          Email me
        </a>
      </div>
    </section>
  );
}
