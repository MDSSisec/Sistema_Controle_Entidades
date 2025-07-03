"use client";
import styles from "./login.module.css";

export default function LoginPage() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    window.location.href = "http://localhost:3000/projetos";
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginTitle}>Login</div>
      {/* <div className={styles.loginSubtitle}>
        Faça login para acessar o Sistema de Gestão Interno.
      </div> */}
      <form className={styles.loginForm} autoComplete="off" onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel} htmlFor="perfil">Perfil</label>
          <select className={styles.inputField} id="perfil" name="perfil" required>
            <option value="">Selecione o perfil</option>
            <option value="externo">Usuário Externo</option>
            <option value="interno">Usuário Interno</option>
          </select>
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel} htmlFor="email">Email</label>
          <input className={styles.inputField} type="email" id="email" name="email" placeholder="seu@email.com" autoComplete="username" required />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel} htmlFor="senha">Senha</label>
          <input className={styles.inputField} type="password" id="senha" name="senha" placeholder="Sua senha" autoComplete="current-password" required />
        </div>
        <button className={styles.loginButton} type="submit">Entrar</button>
      </form>
    </div>
  );
}
