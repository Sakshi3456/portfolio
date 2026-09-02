import { motion } from "framer-motion"
import { FiGithub, FiExternalLink, FiCode } from "react-icons/fi"
import { projects } from "../constants/data"

const projectColors = [
  {
    accent: "cyan",
    border: "hover:border-cyan-500/50",
    glow: "hover:shadow-cyan-500/10",
    tag: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    line: "from-cyan-500",
    badge: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    num: "text-cyan-500/20",
  },
  {
    accent: "purple",
    border: "hover:border-purple-500/50",
    glow: "hover:shadow-purple-500/10",
    tag: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    line: "from-purple-500",
    badge: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    num: "text-purple-500/20",
  },
  {
    accent: "green",
    border: "hover:border-green-500/50",
    glow: "hover:shadow-green-500/10",
    tag: "bg-green-500/10 text-green-400 border-green-500/30",
    line: "from-green-500",
    badge: "bg-green-500/20 text-green-300 border-green-500/30",
    num: "text-green-500/20",
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 relative overflow-hidden">

      {/* Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-cyan-400 font-medium mb-2 tracking-widest text-sm uppercase">What I've built</p>
          <div>
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white"
              style={{ fontFamily: 'Poppins, sans-serif' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            >
              Projects
            </motion.h2>
          </div>
          <motion.div
            className="h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mt-4 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        {/* Project Cards */}
        <div className="flex flex-col gap-10">
          {projects.map((project, i) => {
            const color = projectColors[i % projectColors.length]
            const isEven = i % 2 === 0

            return (
              <motion.div
                key={project.title}
                className={`relative bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 ${color.border} transition-all duration-500 hover:shadow-2xl ${color.glow} overflow-hidden group`}
                initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, type: "spring", stiffness: 70, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
              >
                {/* Top accent line */}
                <motion.div
                  className={`absolute top-0 left-0 h-0.5 bg-gradient-to-r ${color.line} to-transparent`}
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.1 + 0.3 }}
                />

                {/* Left color strip */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${color.line} to-transparent opacity-60`} />

                <div className="p-8 pl-10">

                  {/* Header row */}
                  <div className="flex flex-col sm:flex-row items-start sm:justify-between gap-3 mb-5">
                    <div className="flex-1">
                      {/* Project number + title row */}
                      <div className="flex items-center gap-3 mb-1">
                        <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded border ${color.badge}`}>
                          0{i + 1}
                        </span>
                        <h3 className="text-2xl font-bold text-white"
                          style={{ fontFamily: 'Poppins, sans-serif' }}>
                          {project.title}
                        </h3>
                      </div>
                      <p className={`text-sm font-medium mt-1 ${
                        i === 0 ? "text-cyan-400" : i === 1 ? "text-purple-400" : "text-green-400"
                      }`}>
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 flex-shrink-0 mt-1">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-600 text-slate-400 hover:text-white hover:border-slate-400 transition-all duration-300 text-sm bg-slate-900/50"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FiGithub size={15} />
                          <span>GitHub</span>
                        </motion.a>
                      )}
                      {project.live && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 text-white hover:bg-cyan-400 transition-all duration-300 text-sm"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FiExternalLink size={15} />
                          <span>Live</span>
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 leading-relaxed mb-6 text-sm max-w-3xl">
                    {project.desc}
                  </p>

                  {/* Divider */}
                  <motion.div
                    className="h-px bg-gradient-to-r from-slate-700 to-transparent mb-6"
                    initial={{ scaleX: 0, originX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 + 0.4 }}
                  />

                  {/* Highlights */}
                  <div className="grid sm:grid-cols-2 gap-2 mb-6">
                    {project.highlights.map((point, j) => (
                      <motion.div
                        key={j}
                        className="flex items-start gap-2 text-slate-400 text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: j * 0.06 + i * 0.1 }}
                      >
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                          i === 0 ? "bg-cyan-400" : i === 1 ? "bg-purple-400" : "bg-green-400"
                        }`} />
                        <span className="leading-snug">{point}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <motion.span
                        key={t}
                        className={`flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-lg border ${color.tag} transition-all duration-200`}
                        whileHover={{ scale: 1.08, y: -2 }}
                      >
                        <FiCode size={10} />
                        {t}
                      </motion.span>
                    ))}
                  </div>

                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Projects