import { GithubLogo, EnvelopeSimple } from '@phosphor-icons/react';
import { profile } from '../data';

export default function SideRails() {
  return (
    <>
      <div className="rail left">
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
          <GithubLogo size={20} />
        </a>
        <a href={`mailto:${profile.email}`} aria-label="Send email">
          <EnvelopeSimple size={20} />
        </a>
      </div>

      <div className="rail right">
        <a href={`mailto:${profile.email}`}>
          <span>{profile.email}</span>
        </a>
      </div>
    </>
  );
}
