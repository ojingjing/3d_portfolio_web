import { useParams } from "react-router-dom";
import { projects } from "../constants";
import { styles } from "../styles";
import { PhoneCanvas } from "./canvas";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { Page1, Page2, Page3, Page4, Page5, Image_Page } from "./Pages";

const ProjectDetail = () => {
  const { id } = useParams();
  const backgroundClass =
    id === "0"
      ? "bg-gradient-to-b from-blue-500 to-black"
      : id === "1"
      ? "bg-gradient-to-b from-orange-400 to-black"
      : id === "2"
      ? "bg-gradient-to-b from-blue-200 to-black"
      : "bg-gradient-to-b from-black-900 to-black";

  return (
    <section className="w-full h-screen bg-slate-950 overflow-y-scroll [&::-webkit-scrollbar]:hidden ">
      <div className={`${backgroundClass} h-screen`}>
        <Page1 />
      </div>
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <div className="flex bg-white">
        <Image_Page />
      </div>
    </section>
  );
};

export default ProjectDetail;
