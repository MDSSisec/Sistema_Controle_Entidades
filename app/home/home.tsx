"use client";
import styles from "./home.module.css";

export default function HomeWelcome() {
  const handleStart = () => {
    window.location.href = "/login";
  };
  const handleHowItWorks = () => {
    alert("Em breve: mais informações sobre o sistema!");
  };

  return (
    <div className={styles.welcomeContainer}>
      {/* Halos/luzes de fundo */}
      <svg className={styles.bgHalos} width="100%" height="100%" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
        <radialGradient id="halo1" cx="60%" cy="40%" r="60%" fx="60%" fy="40%" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3a8bfd" stopOpacity="0.5" />
          <stop offset="1" stopColor="#1a1a2e" stopOpacity="0" />
        </radialGradient>
        <circle cx="900" cy="400" r="400" fill="url(#halo1)" />
        <circle cx="300" cy="700" r="250" fill="#5ee7df22" />
        <circle cx="1200" cy="200" r="180" fill="#ffd60022" />
      </svg>

      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <span style={{fontWeight:800,letterSpacing:'0.04em'}}>SGI</span> <span style={{fontWeight:400,opacity:0.7}}>Interno</span>
        </div>
        <nav className={styles.menu}>
          <div className={styles.menuCard}>
            <button className={styles.menuButton}>Ajuda</button>
            <span style={{color:'#fff',opacity:0.5,fontWeight:600,fontSize:'1.2rem'}}>|</span>
            <button className={styles.menuButton}>Login</button>
            <span style={{color:'#fff',opacity:0.5,fontWeight:600,fontSize:'1.2rem'}}>|</span>
            <button className={styles.menuButton}>Saiba Mais</button>
          </div>
          {/* <button className={styles.ctaButton} onClick={handleStart}>Entrar</button> */}
        </nav>
      </header>

      {/* Main Content */}
      <main className={styles.mainContent}>
        <section className={styles.textBlock}>
          <h1 className={styles.title}>Gerencie projetos, usuários<br />e entidades de forma simples</h1>
          <div className={styles.subtitle}>
            Sistema de Gestão Interno para controle eficiente de projetos, cadastro de usuários e entidades, com segurança e praticidade.<br />Acesse sua conta para começar!
          </div>
          <div className={styles.metrics}>
            <div className={styles.metric}>
              <span className={styles.metricValue}>+12</span>
              <span className={styles.metricLabel}>Projetos ativos</span>
            </div>
            <div className={styles.metric}>
              <span className={styles.metricValue}>+3</span>
              <span className={styles.metricLabel}>Usuários cadastrados</span>
            </div>
            <div className={styles.metric}>
              <span className={styles.metricValue}>+5</span>
              <span className={styles.metricLabel}>Entidades</span>
            </div>
          </div>
          <div className={styles.actionButtons}>
            <button className={styles.actionButton} onClick={handleStart}>Entrar</button>
            <button className={`${styles.actionButton} ${styles.secondary}`} onClick={handleHowItWorks}>Saiba mais</button>
          </div>
        </section>
        <section className={styles.illustration}>
          {/* SVG estilizado de mão com celular e glow */}
          <svg width="340" height="420" viewBox="0 0 340 420" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="170" cy="210" rx="160" ry="180" fill="#3a8bfd33" />
            <ellipse cx="170" cy="210" rx="120" ry="140" fill="#fff2" />
            <g filter="url(#glow)">
              <rect x="90" y="60" width="160" height="300" rx="40" fill="#fff" fillOpacity="0.13" stroke="#5ee7df" strokeWidth="3" />
              <rect x="110" y="80" width="120" height="260" rx="30" fill="#fff" fillOpacity="0.10" />
              <circle cx="170" cy="210" r="60" fill="#5ee7df33" />
              <rect x="130" y="120" width="80" height="180" rx="18" fill="#fff" fillOpacity="0.08" />
            </g>
            <g>
              <path d="M90 360 Q120 390 170 390 Q220 390 250 360" stroke="#fff" strokeWidth="8" strokeLinecap="round" fill="none" opacity="0.18" />
              <path d="M90 360 Q120 390 170 390 Q220 390 250 360" stroke="#5ee7df" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.25" />
            </g>
            <g>
              <path d="M90 360 Q80 340 110 320 Q120 310 130 320 Q140 330 150 320 Q160 310 170 320 Q180 330 190 320 Q200 310 210 320 Q220 330 230 320 Q240 310 250 320 Q260 330 270 320 Q280 310 290 320 Q300 330 310 320 Q320 310 330 320" stroke="#fff" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.10" />
            </g>
            <defs>
              <filter id="glow" x="0" y="0" width="340" height="420" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feGaussianBlur stdDeviation="12" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
          </svg>
        </section>
      </main>
    </div>
  );
}
