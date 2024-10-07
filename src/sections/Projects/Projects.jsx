import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import hipsster from "../../assets/hipsster.png";
import fitLift from "../../assets/fitlift.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projetos</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link={"https://viberr.netlify.app/"}
          h3="Geojogos"
          p={"Jogos Educacionais"}
        />
        <ProjectCard
          src={freshBurger}
          link={"https://viberr.netlify.app/"}
          h3="UFRN no Minecraft"
          p={"Jogos Educacionais"}
        />
        <ProjectCard
          src={hipsster}
          link={"https://viberr.netlify.app/"}
          h3="UFCG no Minecraft"
          p={"Jogos Educacionais"}
        />
        <ProjectCard
          src={fitLift}
          link={"https://viberr.netlify.app/"}
          h3="Repositório HGE"
          p={"Desenvolvimento Web"}
        />
      </div>
    </section>
  );
}

export default Projects;
