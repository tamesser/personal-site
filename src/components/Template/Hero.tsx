import Link from 'next/link';

import ThemePortrait from './ThemePortrait';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-avatar">
          <ThemePortrait width={160} height={160} priority />
        </div>

        <h1 className="hero-title">
          <span className="hero-name">Tim Messer</span>
        </h1>

        <p className="hero-tagline">
          Sysadmin/SRE/DevOps at{' '}
          <a href="https://fnal.gov/" className="hero-highlight">
            Fermilab
          </a>
          , helping to power the forefront of particle physics.
          <br />
          Civic-minded community member.
        </p>

        <div className="hero-chips">
          <span className="hero-chip">IMSA alumnus</span>
          <span className="hero-chip">Storm chaser</span>
          <span className="hero-chip">Lifelong learner</span>
        </div>

        <div className="hero-cta">
          <Link href="/about" className="button button-primary">
            About Me
          </Link>
          <Link href="/resume" className="button button-secondary">
            View Resume
          </Link>
        </div>
      </div>

      <div className="hero-bg" aria-hidden="true">
        <div className="hero-gradient" />
      </div>
    </section>
  );
}
