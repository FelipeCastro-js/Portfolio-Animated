import { motion } from "framer-motion";
import { glows, stats } from "../data/data";
import P from "/assets/p.png";

function About() {
  return (
    <section
      id="#about"
      className="min-h-screen w-full flex items-center justify-center relative bg-black text-white overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        {glows.map((glows, index) => (
          <div
            key={index}
            className={`absolute rounded-full bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] animate-pulse ${glows}`}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 md:px-10 lg:px-12 py-20 flex flex-col gap-12 ">
        <motion.div
          className="flex flex-col md:flex-row items-center md:items-stretch gap-8 "
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.div
            className="relative w-40 h-50 md:w-[200px] md:h[200px] 
          rounded-2xl overflow-hidden shadow-2xl bg-linear-to-br from-[#1cd8d2]/20 to-[#302b63]/20 border border-[#1cd8d2]/25

          "
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
          >
            <img src={P} alt="profile" className="absolute inset-0" />
          </motion.div>

          <div className="flex-1 flex flex-col justify-center text-center md:text-left">
            <h2
              className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent 
            bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#1cd8d2] 
            "
            >
              Felipe Castro
            </h2>

            <p className="mt-2 text-lg sm:text-xl text-white/90 font-semibold">
              Full Stack Developer
            </p>

            <p className="mt-4 text-gray-300 leading-relaxed text-base sm:text-lg max-w-2xl md:max-w-3xl">
              I craft scalable and modern web applications with a strong
              emphasis on clean architecture, intuitive UX, and high
              performance. My stack includes Java, React, Next.js, TypeScript,
              Tailwind CSS, and RESTful APIs — turning ideas into seamless,
              production-ready solutions that connect creativity with
              technology.
            </p>
            <div className="mt-6 flex justify-center gap-6">
              {stats.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex-1 max-w-[280px] rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-center backdrop-blur-sm hover:bg-white/10 transition-all duration-300
                  hover:-translate-y-1 hover:scale-[1.02] 
                 hover:bg-linear-to-br hover:from-[#1cd8d2]/10 hover:to-[#00bf8f]/10
                  "
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * index, duration: 0.4 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="text-sm text-gray-400">{item.label}</div>
                  <div className="text-base font-semibold text-white leading-tight">
                    {item.value}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-lg bg-white text-black font-semibold
                px-5 py-3 hover:bg-gray-200 transition
                "
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10  text-white px-5 py-3 hover:bg-white/20 transition"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            About Me
          </h3>
          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
            I'm a Software Developer — passionate about building fast, scalable,
            and reliable applications with clean architecture and great user
            experiences.
          </p>
          <p className="mt-4 text-gray-400 text-base sm:text-lg">
            I love turning ideas into impactful, high-quality products that make
            a difference.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
