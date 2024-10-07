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
          h3="Viberr"
          p={"Projeto de música"}
        />
        <ProjectCard
          src={freshBurger}
          link={"https://viberr.netlify.app/"}
          h3="Viberr"
          p={"Hamburger Restaurant"}
        />
        <ProjectCard
          src={hipsster}
          link={"https://viberr.netlify.app/"}
          h3="Viberr"
          p={"Glasses shop"}
        />
        <ProjectCard
          src={fitLift}
          link={"https://viberr.netlify.app/"}
          h3="Viberr"
          p={"Fitness Gym"}
        />
      </div>
    </section>
  );
}

export default Projects;
