import { profile } from '../data';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrapper">
        <p>
          Designed &amp; built by {profile.name} ·{' '}
          <a
            className="text-link"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            {profile.githubHandle}
          </a>
        </p>
        <p>React · Vite · no UI framework</p>
      </div>
    </footer>
  );
}
