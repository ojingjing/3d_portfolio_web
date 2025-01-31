import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { PhoneCanvas } from "../canvas";
import page01 from "./assets/page01.png";
import { textVariant, fadeIn } from "../../utils/motion";
import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";

const Page1 = () => {
  const { id } = useParams();
  const project = projects[id];

  return (
    <section className="flex flex-col">
      <motion.div variants={fadeIn("right", "spring", 0.5, 0.75)}>
        <div className="h-[60vh] flex flex-col md:flex-row items-center">
          <PhoneCanvas key={project.id} wallpaperImage={project.phoneScreen} />
          <img
            src={project.main_image}
            alt={project.name}
            className="w-[70%] "
          />
        </div>
      </motion.div>
      <div>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>APP Project</p>
          <h2 className={styles.projectHeadText}>{project.name}</h2>
        </motion.div>
        <motion.p variants={fadeIn("", "", 0.1, 1)} className=" leading-[25px]">
          <p className="text-secondary text-[15px] lg:text-[16px] mt-4">
            {project.date}
          </p>
          <p className="text-secondary text-[13px] lg:text-[14px] mt-2">
            {project.people}
          </p>
          <h2 className={`${styles.sectionSubText} pt-4 text-white-100`}>
            {project.description}
          </h2>
        </motion.p>
      </div>
    </section>
    // <div className=" items-center justify-center min-h-screen">
    //   <div className="w-full h-[30vh] md:h-[70vh] lg:h-screen relative lg:ml-4">
    //     <PhoneCanvas key={project.id} wallpaperImage={project.phoneScreen} />
    //   </div>

    //   <div className="mt-20 text-center max-w-3xl">
    //     <motion.div variants={textVariant()}>
    //       <p className={styles.sectionHeadText}>{project.name}</p>
    //       <h2 className={`${styles.sectionSubText} pt-4`}>
    //         {project.description}
    //       </h2>
    //     </motion.div>
    //   </div>
    // </div>
  );
};

export default SectionWrapper(Page1, "");
