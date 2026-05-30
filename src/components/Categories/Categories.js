import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Categories.css';

const CATEGORIES = [
  {
    name: 'Horror',
    icon: '💀',
    img: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=600&q=80',
    accent: '#8b0000',
  },
  {
    name: 'Cartoons',
    icon: '🎨',
    img: 'https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?w=600&q=80',
    accent: '#c0392b',
  },
  {
    name: 'Sci-Fi',
    icon: '🚀',
    img: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600&q=80',
    accent: '#922b21',
  },
  {
    name: 'Thrillers',
    icon: '🔪',
    img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80',
    accent: '#7b241c',
  },
  {
    name: 'Drama',
    icon: '🎭',
    img: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&q=80',
    accent: '#a93226',
  },
  {
    name: 'High School',
    icon: '🎒',
    img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80',
    accent: '#b03a2e',
  },
  {
    name: 'Adventure',
    icon: '🏔️',
    img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80',
    accent: '#96281b',
  },
  {
    name: 'Translated',
    icon: '🌐',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80',
    accent: '#922b21',
  },
  {
    name: 'Non-Translated',
    icon: '🗣️',
    img: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&q=80',
    accent: '#7b241c',
  },
  {
    name: 'Musicals',
    icon: '🎵',
    img: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&q=80',
    accent: '#a04000',
  },
  {
    name: 'Korean',
    icon: '🇰🇷',
    img: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=600&q=80',
    accent: '#c0392b',
  },
];

function CategoryCard({ cat, index, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="cat-card"
      style={{ animationDelay: `${index * 0.07}s` }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background image */}
      <div
        className="cat-bg"
        style={{ backgroundImage: `url(${cat.img})` }}
      />

      {/* Overlays */}
      <div className="cat-veil" />
      <div
        className="cat-color-wash"
        style={{ background: `${cat.accent}cc` }}
      />

      {/* Animated border glow */}
      <div className="cat-border-glow" style={{ '--accent': cat.accent }} />

      {/* Top: icon */}
      <div className="cat-icon">{cat.icon}</div>

      {/* Bottom: name + arrow */}
      <div className="cat-footer">
        <span className="cat-name">{cat.name}</span>
        <span className={`cat-arrow${hovered ? ' active' : ''}`}>→</span>
      </div>

      {/* Hover shine sweep */}
      <div className="cat-shine" />
    </div>
  );
}

export default function Categories() {
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`categories-page${ready ? ' is-ready' : ''}`}>

      {/* Page background */}
      <div className="page-bg" aria-hidden="true">
        <div className="page-bg-glow" />
        <div className="page-bg-grid" />
      </div>

      {/* Back nav */}
      <button className="back-btn" onClick={() => navigate('/')}>
        <span>←</span> MovieHub
      </button>

      {/* Header */}
      <header className="cats-header">
        <p className="cats-eyebrow">What are you in the mood for?</p>
        <h1 className="cats-title">Browse <span className="cats-title-accent">Categories</span></h1>
        <p className="cats-sub">{CATEGORIES.length} genres · thousands of titles</p>
      </header>

      {/* Grid */}
      <div className="cat-grid">
        {CATEGORIES.map((cat, i) => (
          <CategoryCard
            key={cat.name}
            cat={cat}
            index={i}
            onClick={() => navigate(`/categories/${cat.name.toLowerCase()}`)}
          />
        ))}
      </div>

    </div>
  );
}