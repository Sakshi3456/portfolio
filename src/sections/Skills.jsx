import { motion } from "framer-motion"
import { skills } from "../constants/data"
import {
  SiReact, SiJavascript, SiHtml5, SiTailwindcss, SiRedux, SiSpring,
  SiNodedotjs, SiExpress, SiMysql, SiPostgresql, SiMongodb, SiGit,
  SiPostman, SiOpenai, SiHibernate,
} from "react-icons/si"
import { TbBrandFramerMotion } from "react-icons/tb"
import { FiShield, FiZap, FiLayers, FiCpu, FiCode } from "react-icons/fi"

const skillIcons = {
  "React.js": { icon: <SiReact />, color: "#61DAFB" },
  "JavaScript (ES6)": { icon: <SiJavascript />, color: "#F7DF1E" },
  "HTML5": { icon: <SiHtml5 />, color: "#E34F26" },
  "CSS3": { icon: <FiCode />, color: "#1572B6" },
  "Tailwind CSS": { icon: <SiTailwindcss />, color: "#38BDF8" },
  "Redux Toolkit": { icon: <SiRedux />, color: "#764ABC" },
  "React Hooks": { icon: <SiReact />, color: "#61DAFB" },
  "Recharts": { icon: <TbBrandFramerMotion />, color: "#22D3EE" },
  "Spring Boot 3": { icon: <SiSpring />, color: "#6DB33F" },
  "Spring MVC": { icon: <SiSpring />, color: "#6DB33F" },
  "Spring Security": { icon: <FiShield />, color: "#6DB33F" },
  "Node.js": { icon: <SiNodedotjs />, color: "#339933" },
  "Express.js": { icon: <SiExpress />, color: "#ffffff" },
  "Spring Data JPA": { icon: <SiSpring />, color: "#6DB33F" },
  "Hibernate": { icon: <SiHibernate />, color: "#59666C" },
  "Project Reactor": { icon: <FiZap />, color: "#FF6B35" },
  "MySQL": { icon: <SiMysql />, color: "#4479A1" },
  "PostgreSQL": { icon: <SiPostgresql />, color: "#4169E1" },
  "MongoDB": { icon: <SiMongodb />, color: "#47A248" },
  "RESTful APIs": { icon: <FiLayers />, color: "#06B6D4" },
  "JWT Authentication": { icon: <FiShield />, color: "#F59E0B" },
  "OAuth2 (Google)": { icon: <FiShield />, color: "#EA4335" },
  "RBAC": { icon: <FiShield />, color: "#8B5CF6" },
  "Refresh Token Rotation": { icon: <FiShield />, color: "#10B981" },
  "Groq API (LLaMA 3.1)": { icon: <FiCpu />, color: "#FF6B6B" },
  "OpenAI API": { icon: <SiOpenai />, color: "#ffffff" },
  "Prompt Engineering": { icon: <FiCpu />, color: "#A78BFA" },
  "Cursor": { icon: <FiCpu />, color: "#06B6D4" },
  "Claude": { icon: <FiCpu />, color: "#D97706" },
  "Chatgpt": { icon: <SiOpenai />, color: "#10A37F" },
  "Git": { icon: <SiGit />, color: "#F05032" },
  "Postman": { icon: <SiPostman />, color: "#FF6C37" },
  "OOP": { icon: <FiLayers />, color: "#6366F1" },
  "MVC Architecture": { icon: <FiLayers />, color: "#8B5CF6" },
  "Java": { icon: <FiCode />, color: "#ED8B00" },
"JavaScript(ES6)": { icon: <SiJavascript />, color: "#F7DF1E" },
}

const categoryConfig = {
  Languages: { color: "text-orange-400", border: "border-orange-500/50", glow: "hover:shadow-orange-500/10", bg: "from-orange-500/5", dot: "bg-orange-400" },
  Frontend: { color: "text-cyan-400", border: "border-cyan-500/50", glow: "hover:shadow-cyan-500/10", bg: "from-cyan-500/5", dot: "bg-cyan-400" },
  Backend: { color: "text-purple-400", border: "border-purple-500/50", glow: "hover:shadow-purple-500/10", bg: "from-purple-500/5", dot: "bg-purple-400" },
  Database: { color: "text-green-400", border: "border-green-500/50", glow: "hover:shadow-green-500/10", bg: "from-green-500/5", dot: "bg-green-400" },
  "APIs & Auth": { color: "text-yellow-400", border: "border-yellow-500/50", glow: "hover:shadow-yellow-500/10", bg: "from-yellow-500/5", dot: "bg-yellow-400" },
  "AI & Tools": { color: "text-pink-400", border: "border-pink-500/50", glow: "hover:shadow-pink-500/10", bg: "from-pink-500/5", dot: "bg-pink-400" },
  "Tools & Concepts": { color: "text-indigo-400", border: "border-indigo-500/50", glow: "hover:shadow-indigo-500/10", bg: "from-indigo-500/5", dot: "bg-indigo-400" },
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } },
}

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 relative overflow-hidden">

      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-cyan-400 font-medium mb-2 tracking-widest text-sm uppercase">What I work with</p>
          <div>
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white"
              style={{ fontFamily: 'Poppins, sans-serif' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            >
              Skills
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

        {/* Cards grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {Object.entries(skills).map(([category, items]) => {
            const config = categoryConfig[category] || categoryConfig["Tools & Concepts"]
            return (
              <motion.div
                key={category}
                variants={cardVariant}
                className={`relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 ${config.border} transition-all duration-300 hover:shadow-xl ${config.glow} overflow-hidden group`}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${config.bg} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

                {/* Top accent line */}
                <motion.div
                  className={`absolute top-0 left-0 h-0.5 bg-gradient-to-r ${
                    config.dot === "bg-cyan-400" ? "from-cyan-500 to-transparent" :
                    config.dot === "bg-purple-400" ? "from-purple-500 to-transparent" :
                    config.dot === "bg-green-400" ? "from-green-500 to-transparent" :
                    config.dot === "bg-yellow-400" ? "from-yellow-500 to-transparent" :
                    config.dot === "bg-pink-400" ? "from-pink-500 to-transparent" :
                    config.dot === "bg-orange-400" ? "from-orange-500 to-transparent" :
                    "from-indigo-500 to-transparent"
                  } rounded-full`}
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                />

                {/* Category header */}
                <div className="relative z-10 flex items-center gap-3 mb-5">
                  <motion.div
                    className={`w-2 h-2 rounded-full ${config.dot}`}
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <h3 className={`text-base font-semibold ${config.color}`}
                    style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {category}
                  </h3>
                  <span className="ml-auto text-xs text-slate-600 font-mono">{items.length} skills</span>
                </div>

                {/* Skill pills with icons */}
                <div className="relative z-10 flex flex-wrap gap-2">
                  {items.map((skill, j) => {
                    const iconData = skillIcons[skill]
                    return (
                      <motion.div
                        key={skill}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-900/60 text-slate-300 text-xs font-medium hover:border-slate-500 hover:text-white transition-all duration-200 cursor-default"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: j * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {iconData && (
                          <span style={{ color: iconData.color }} className="text-sm flex-shrink-0">
                            {iconData.icon}
                          </span>
                        )}
                        {skill}
                      </motion.div>
                    )
                  })}
                </div>

              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}

export default Skills