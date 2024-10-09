import styles from "./SkillsStyles.module.css";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon =
    theme === "light" ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Habilidades</h1>
      <h3>Programação | Full Stack</h3>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="TypeScript" />
        <SkillList src={checkMarkIcon} skill="Python" />
        <SkillList src={checkMarkIcon} skill="C#" />
        <SkillList src={checkMarkIcon} skill="Java" />
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="Wordpress" />
      </div>
      <hr />
      <h3>Desenvolvimento de Jogos | Game Design </h3>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Construct 2/3" />
        <SkillList src={checkMarkIcon} skill="Unity 3D" />
        <SkillList src={checkMarkIcon} skill="GDD" />
        <SkillList src={checkMarkIcon} skill="Minecraft Education" />
      </div>
      <hr />
      <h3>Geoprocessamento & Sensioriamento Remoto </h3>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="QGIS" />
        <SkillList src={checkMarkIcon} skill="ArcGIS" />
        <SkillList src={checkMarkIcon} skill="Google Earth Pro" />
      </div>
    </section>
  );
}

export default Skills;
