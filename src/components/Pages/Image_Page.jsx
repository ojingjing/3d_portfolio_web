import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { textVariant, fadeIn } from "../../utils/motion";
import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";

const Image_Page = () => {
  const { id } = useParams();
  const project = projects[id];

  return (
    <section className="flex flex-col">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>APP Image</p>
        <text className={styles.sectionHeadText_bk}>Image.</text>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className="  ">
        <img src={project.pageimage} alt={project.name} className="w-[100%] " />
      </motion.p>
    </section>
  );
};

export default SectionWrapper(Image_Page, "image");
