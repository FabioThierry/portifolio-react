import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import ProjectCard from "../../common/ProjectCard";
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projetos</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link={"https://viberr.netlify.app/"}
          h3="Viberr"
          p={"Projeto de rede social de música"}
        />
        <ProjectCard
          src={freshBurger}
          link={"https://viberr.netlify.app/"}
          h3="Viberr"
          p={"Projeto de rede social de música"}
        />
        <ProjectCard
          src={viberr}
          link={"https://viberr.netlify.app/"}
          h3="Viberr"
          p={"Projeto de rede social de música"}
        />
      </div>
    </section>
  );
}

export default Projects;
