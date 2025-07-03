"use client";
import styles from "./home.module.css";
import ProjectTableChecklist from "@/components/ProjectTableChecklist";

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
          <ProjectTableChecklist width={400} height={340} />
        </section>
      </main>
    </div>
  );
}
