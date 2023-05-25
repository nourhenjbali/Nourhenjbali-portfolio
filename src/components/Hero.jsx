import { motion } from "framer-motion";
import nour from "../assets/nour.png";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <img
            src={nour}
            alt="Your Name"
            className="rounded-full w-54 h-54 border-6 border-white shadow-lg"
          />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Nourhen</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          I'm web developer passionate about learning
          <br className="sm:block hidden" />
          And love exploring new technologies.
          </p>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          I always tend to improve my skills to better analyze problems 
          and develop performant and efficient solutions.
          </p>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
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
