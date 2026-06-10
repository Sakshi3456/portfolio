import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { education } from "../constants/data"
import { FiBook, FiAward } from "react-icons/fi"

const typeIcon = {
  degree: <FiBook size={14} />,
  certificate: <FiAward size={14} />,
  education: <FiBook size={14} />,
}

const typeColor = {
  degree: { text: "text-cyan-400", border: "border-cyan-500", bg: "bg-cyan-500/20", glow: "shadow-cyan-500/20" },
  certificate: { text: "text-purple-400", border: "border-purple-500", bg: "bg-purple-500/20", glow: "shadow-purple-500/20" },
  education: { text: "text-green-400", border: "border-green-500", bg: "bg-green-500/20", glow: "shadow-green-500/20" },
}

const Education = () => {
  const lineRef = useRef(null)
  const isInView = useInView(lineRef, { once: true })

  return (
    <section id="education" className="py-20 px-6 relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-cyan-400 font-medium mb-2">My background</p>
          <h2 className="text-4xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Education & Certificates
          </h2>
          <div className="w-16 h-1 bg-cyan-500 mt-4 rounded-full mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div className="relative" ref={lineRef}>

          {/* Center vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-slate-800" />
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 top-0 w-px bg-gradient-to-b from-cyan-500 via-purple-500 to-green-500 origin-top"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />

          <div className="flex flex-col gap-12">
            {education.map((item, i) => {
              const isLeft = i % 2 === 0
              const color = typeColor[item.type]

              return (
                <div key={i} className="relative grid grid-cols-2 gap-8 items-center">

                  {/* Left side */}
                  {isLeft ? (
                    <>
                      {/* Card on left */}
                      <motion.div
                        className={`relative bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:${color.border} transition-all duration-300 hover:shadow-xl ${color.glow}`}
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, type: "spring", stiffness: 80, delay: i * 0.1 }}
                        whileHover={{ x: -6, boxShadow: "0 20px 40px rgba(6,182,212,0.1)" }}
                      >
                        {/* Connector line to center */}
                        <div className="absolute right-0 top-1/2 w-8 h-px bg-slate-700 translate-x-full" />

                        <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                          <h3 className="text-lg font-semibold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            {item.degree}
                          </h3>
                        </div>
                        <p className="text-slate-400 text-sm mb-3">{item.school}</p>
                        <span className={`text-xs font-medium px-3 py-1 rounded-full border ${color.border} ${color.bg} ${color.text}`}>
                          {item.grade}
                        </span>

                        {/* Bottom accent */}
                        <motion.div
                          className={`absolute bottom-0 left-0 h-0.5 rounded-full ${
                            item.type === "degree" ? "bg-cyan-500" :
                            item.type === "certificate" ? "bg-purple-500" : "bg-green-500"
                          }`}
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: i * 0.1 + 0.3 }}
                        />
                      </motion.div>

                      {/* Year on right */}
                      <motion.div
                        className="flex items-center justify-start pl-12"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
                      >
                        <span className="text-slate-500 text-sm font-mono">{item.year}</span>
                      </motion.div>
                    </>
                  ) : (
                    <>
                      {/* Year on left */}
                      <motion.div
                        className="flex items-center justify-end pr-12"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
                      >
                        <span className="text-slate-500 text-sm font-mono">{item.year}</span>
                      </motion.div>

                      {/* Card on right */}
                      <motion.div
                        className={`relative bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:${color.border} transition-all duration-300 hover:shadow-xl`}
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, type: "spring", stiffness: 80, delay: i * 0.1 }}
                        whileHover={{ x: 6, boxShadow: "0 20px 40px rgba(168,85,247,0.1)" }}
                      >
                        {/* Connector line to center */}
                        <div className="absolute left-0 top-1/2 w-8 h-px bg-slate-700 -translate-x-full" />

                        <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                          <h3 className="text-lg font-semibold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            {item.degree}
                          </h3>
                        </div>
                        <p className="text-slate-400 text-sm mb-3">{item.school}</p>
                        <span className={`text-xs font-medium px-3 py-1 rounded-full border ${color.border} ${color.bg} ${color.text}`}>
                          {item.grade}
                        </span>

                        {/* Bottom accent */}
                        <motion.div
                          className={`absolute bottom-0 left-0 h-0.5 rounded-full ${
                            item.type === "degree" ? "bg-cyan-500" :
                            item.type === "certificate" ? "bg-purple-500" : "bg-green-500"
                          }`}
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: i * 0.1 + 0.3 }}
                        />
                      </motion.div>
                    </>
                  )}

                  {/* Center circle icon */}
                  <motion.div
                    className={`absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-2 flex items-center justify-center bg-slate-900 z-10 ${color.border} ${color.bg}`}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 + 0.1, type: "spring", stiffness: 150 }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <span className={color.text}>{typeIcon[item.type]}</span>
                  </motion.div>

                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education