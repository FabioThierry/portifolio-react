import styles from "./ProjectsStyles.module.css";
import geojogos from "../../assets/geojogos.png";
import ufrnMinecraft from "../../assets/ufrn-minecraft.png";
import ufcgMinecraft from "../../assets/ufcg-minecraft.png";
import hge from "../../assets/logo-hge.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projetos</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={geojogos}
          link={"https://ggeojogos.wixsite.com/geojogos"}
          h3="Geojogos"
          year={"2021"}
          p={"Jogos Educacionais"}
        />
        <ProjectCard
          src={ufrnMinecraft}
          link={"https://github.com/FabioThierry/UFRN_Minecraft"}
          h3="UFRN no Minecraft"
          p={"Jogos Educacionais"}
        />
        <ProjectCard
          src={ufcgMinecraft}
          link={"https://gemac.itch.io/minecraft-ufcg"}
          h3="UFCG no Minecraft"
          p={"Jogos Educacionais"}
        />
        <ProjectCard
          src={hge}
          link={"https://hge.geojogos.com.br/"}
          h3="Repositório HGE"
          p={"Desenvolvimento Web"}
        />
      </div>
    </section>
  );
}

export default Projects;
