import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext.jsx";

export default function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Foto de perfil de Fábio Thierry"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color Mode Icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Fábio <br />
          Thierry
        </h1>
        <h2>Desenvolvedor Full Stack</h2>
        <span>
          <a href="http://lattes.cnpq.br/9901931981992981">
            <img src={twitterIcon} alt="Twitter Icon" />
          </a>
          <a href="https://github.com/FabioThierry">
            <img src={githubIcon} alt="Github Icon" />
          </a>
          <a href="https://www.linkedin.com/in/fabio-thierry/">
            <img src={linkedinIcon} alt="Linkedin Icon" />
          </a>
        </span>
        <p className={styles.description}>
          Olá, eu sou um desenvolvedor Full Stack. Sou Mestre em Inovação em
          Tecnologias Educacionais. Sou autodidata e gosto de aprender e me
          divertir. Atualmente estou em busca da minha primeira oportunidade de
          emprego como desenvolvedor Full Stack.
        </p>
        <a href={CV} download>
          <button className="hover">Curriculum</button>
        </a>
      </div>
    </section>
  );
}
