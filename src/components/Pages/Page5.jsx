import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

import { textVariant, staggerContainer, fadeIn } from "../../utils/motion";
import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";

const Page5 = () => {
  const { id } = useParams();
  const project = projects[id];
  return (
    <section className="flex flex-col ">
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      ></motion.p>

      <div className="mt-3 lg:mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag.name}
            className={`text-[12px] lg:text-[14px] ${tag.color} px-2 py-1 rounded-full bg-tertiary`}
          >
            #{tag.name}
          </span>
        ))}
      </div>
      {/* <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </section>
  );
};

export default SectionWrapper(Page5, "");
