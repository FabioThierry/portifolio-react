import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/lattes.svg";
import twitterDark from "../../assets/lattes-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/Fabio_Thierry__CV.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Foto de Perfil de Fábio Thierry"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Fábio <br />
          Thierry
        </h1>
        <h2>
          Mestre em Tecnologias Educacionais <br />& Geografia Digital
        </h2>
        <span>
          <a href="https://www.linkedin.com/in/fabio-thierry/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>

          <a href="https://github.com/FabioThierry" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="http://lattes.cnpq.br/9901931981992981" target="_blank">
            <img src={twitterIcon} alt="Lattes icon" />
          </a>
        </span>
        <p className={styles.description}>
          Mestre em Inovação em Tecnologias Educacionais, com formação em
          Geografia e Programação.
        </p>
        <a href={CV} download>
          <button className="hover">Curriculum</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
