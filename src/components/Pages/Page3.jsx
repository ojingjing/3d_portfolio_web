import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

import { textVariant, staggerContainer, fadeIn } from "../../utils/motion";
import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";

const Page3 = () => {
  const { id } = useParams();
  const project = projects[id];
  return (
    <section className="flex flex-col ">
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>TroubleShooting.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      ></motion.p>

      <ul className="p-[1px] green-pink-gradient  mt-6 rounded-[20px] shadow-card ">
        <div className="bg-slate-950 rounded-md p-6 space-y-4  ">
          {project?.TroubleShooting?.map((data, index) => (
            <li key={index} className="flex items-start">
              <div>
                <span className="lg:text-[18px] text-[14px] ">
                  {data.title}
                </span>
                <p
                  className="text-secondary text-[14px] lg:text-[18px] mt-4 "
                  dangerouslySetInnerHTML={{ __html: data.description }}
                />
              </div>
            </li>
          ))}
        </div>
      </ul>
      {/* <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </section>
  );
};

export default SectionWrapper(Page3, "");
