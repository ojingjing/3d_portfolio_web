import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { PhoneCanvas } from "../canvas";

import { textVariant, staggerContainer, fadeIn } from "../../utils/motion";
import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";

const Page2 = () => {
  const { id } = useParams();
  const project = projects[id];
  return (
    <section className="flex flex-col ">
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>Introduction</p> */}
        <h2 className={styles.sectionHeadText}>Detail Roles.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      ></motion.p>

      <ul className="mt-4 flex flex-row flex-wrap gap-2 ">
        {project?.detailedRoles?.map((role, index) => (
          <li key={index}>
            <div className=" green-pink-gradient mr-2 mt-2 rounded-[7px] shadow-card p-[1px]">
              <div className="bg-slate-950 rounded-md p-3 space-y-4  ">
                <text className="lg:text-[18px] text-[14px] p-2">{role}</text>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {/* <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </section>
  );
};

export default SectionWrapper(Page2, "");

{
  /* <div className="mt-8">




<div className="mt-6 lg:mt-8">
<h3 className="text-white text-[20px] lg:text-[24px] font-bold">
  Skills
</h3>
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
</div> */
}
