import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './WelcomePage.css';

const MOVIES = [
  {
    title: "Dune: Part Two",
    genre: "Sci-Fi Epic",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80",
  },
  {
    title: "The Godfather",
    genre: "Classic Drama",
    img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&q=80",
  },
  {
    title: "Interstellar",
    genre: "Space Odyssey",
    img: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&q=80",
  },
  {
    title: "Mad Max: Fury Road",
    genre: "Action Thriller",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
  },
  {
    title: "Avatar",
    genre: "Fantasy Adventure",
    img: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=400&q=80",
  },
  {
    title: "Blade Runner 2049",
    genre: "Neo-Noir Sci-Fi",
    img: "https://images.unsplash.com/photo-1515266591878-f93e32bc5937?w=400&q=80",
  },
];

function MovieCard({ movie, index }) {
  return (
    <div className="movie-card" style={{ animationDelay: `${index * 0.12}s` }}>
      <div className="card-img-wrap">
        <img src={movie.img} alt={movie.title} loading="lazy" />
        <div className="card-overlay" />
        <div className="card-shine" />
      </div>
      <div className="card-info">
        <span className="card-genre">{movie.genre}</span>
        <p className="card-title">{movie.title}</p>
      </div>
    </div>
  );
}

function FloatingParticle({ style }) {
  return <div className="particle" style={style} />;
}

export default function WelcomePage() {
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 80);
    return () => clearTimeout(t);
  }, []);

  const particles = Array.from({ length: 18 }, (_, i) => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    width: `${2 + Math.random() * 4}px`,
    height: `${2 + Math.random() * 4}px`,
    animationDelay: `${Math.random() * 6}s`,
    animationDuration: `${5 + Math.random() * 8}s`,
    opacity: 0.2 + Math.random() * 0.5,
  }));

  return (
    <div className={`welcome-page${ready ? ' is-ready' : ''}`} ref={heroRef}>

      {/* Cinematic background */}
      <div className="bg-layer" aria-hidden="true">
        <div className="bg-image" />
        <div className="bg-image-next" />
        <div className="bg-darken" />
        <div className="bg-gradient-top" />
        <div className="bg-gradient-bottom" />
        <div className="bg-film-grain" />
        {particles.map((s, i) => <FloatingParticle key={i} style={s} />)}
      </div>

      {/* Film reel decorative lines */}
      <div className="scan-line" aria-hidden="true" />

      {/* Logo mark */}
      <div className="logo-mark" aria-label="MovieHub">
        <span className="logo-icon">▶</span>
        <span className="logo-text">MovieHub</span>
      </div>

      {/* Hero content */}
      <main className="hero-content">
        <div className="eyebrow">Now Streaming</div>

        <h1 className="hero-title">
          <span className="title-line">Cinema</span>
          <span className="title-line accent">Reimagined.</span>
        </h1>

        <p className="hero-sub">
          Thousands of films. One seamless destination.
          <br />Discover stories that move you.
        </p>

        <div className="hero-cta">
          <button
            className="btn-primary"
            onClick={() => navigate('/categories')}
          >
            <span>Start Watching</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
          <button className="btn-ghost" onClick={() => navigate('/categories')}>
            Browse Catalog
          </button>
        </div>

        <div className="stats-row">
          {[['10K+', 'Titles'], ['4K', 'Ultra HD'], ['50+', 'Genres']].map(([n, l]) => (
            <div className="stat" key={l}>
              <span className="stat-num">{n}</span>
              <span className="stat-label">{l}</span>
            </div>
          ))}
        </div>
      </main>

      {/* Floating movie cards */}
      <div className="cards-stage" aria-hidden="true">
        <div className="cards-track">
          {[...MOVIES, ...MOVIES].map((m, i) => (
            <MovieCard movie={m} index={i % MOVIES.length} key={i} />
          ))}
        </div>
      </div>

      {/* Bottom vignette */}
      <div className="bottom-vignette" aria-hidden="true" />
    </div>
  );
}