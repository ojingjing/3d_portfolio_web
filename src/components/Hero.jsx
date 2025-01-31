import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas, PhoneCanvas } from "./canvas";
import ojm from "../assets/ojm.png";
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto ">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row  justify-center gap-5`}
      >
        <div className="flex flex-col justify center items-center mr-10">
          <div className="w-5 h-5 rounded-full bg-[#00b4d8]" />
          <div className="w-1 sm:h-80 h-40 sky-gradient" />
        </div>
        <div className=" flex flex-row mt-5 ">
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Omin's <span className="text-[#00b4d8] ">Portfolio</span>
            </h1>
            <p
              className={`${styles.heroSubText} mt-5 ml-5 text-[10px] text-white-100`}
            >
              Hello, I'm ReactNative Developer 👋
            </p>
          </div>
          <div>
            <img
              src={ojm}
              alt="me"
              className="ml-5 lg:w-[100%] lg:h-[30%] md:w-[100%]  md:h-[30%]  sm:w-[100%]"
            />
          </div>
        </div>
      </div>
      <ComputersCanvas />
      {/* <PhoneCanvas /> */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a herf="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5, //속도
                repeat: Infinity,
                repeactType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
