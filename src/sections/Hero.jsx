import { motion } from "framer-motion"
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi"
import { personalInfo } from "../constants/data"
import { useState, useEffect } from "react"

const roles = [
  "Full Stack Developer",
  "Spring Boot Developer",
  "React Developer",
  "Java Developer",
]

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
      } else {
        timeout = setTimeout(() => setTyping(false), 1800)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
      } else {
        setRoleIndex((i) => (i + 1) % roles.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIndex])

  const nameLetters = "Sakshi Nagre".split("")

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">

      {/* Background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-800/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-6"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          >
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            Open to opportunities
          </motion.div>

          {/* Hi I'm */}
          <motion.p
            className="text-slate-400 text-lg mb-2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hi, I'm
          </motion.p>

          {/* Name — letter by letter */}
          <div className="flex flex-wrap mb-4">
            {nameLetters.map((letter, i) => (
              <motion.span
                key={i}
                className="text-4xl md:text-7xl font-bold text-white"
                style={{ fontFamily: 'Poppins, sans-serif', display: letter === " " ? "inline-block" : "inline-block", width: letter === " " ? "0.4em" : "auto" }}
                initial={{ opacity: 0, y: 60, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + i * 0.05,
                  type: "spring",
                  stiffness: 120,
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </div>

          {/* Typing role */}
          <motion.div
            className="text-2xl md:text-3xl font-semibold mb-6 h-10"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <span className="text-cyan-400">{displayed}</span>
            <span className="animate-pulse text-cyan-400">|</span>
          </motion.div>

          {/* Intro */}
          <motion.p
            className="text-slate-400 text-base leading-relaxed mb-8 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            {personalInfo.intro}
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-8 w-full sm:w-auto"
            className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 w-full sm:w-auto text-center"
            className="px-6 py-3 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg transition-all duration-300 w-full sm:w-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1, type: "spring", stiffness: 100 }}
          >
            <motion.a
              href="#projects"
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              View Projects
            </motion.a>
            <motion.a
              href={personalInfo.resume}
              className="px-6 py-3 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Download Resume
            </motion.a>
          </motion.div>

          {/* Social icons */}
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            {[
              { icon: <FiGithub size={20} />, href: personalInfo.github },
              { icon: <FiLinkedin size={20} />, href: personalInfo.linkedin },
              { icon: <FiMail size={20} />, href: `mailto:${personalInfo.email}` },
            ].map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-lg border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500 transition-all duration-300"
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {s.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Right Side — Code Card */}
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 80 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500/20 rounded-2xl blur-2xl" />
            <div className="relative bg-slate-900 border border-slate-700 rounded-2xl p-6 font-mono text-sm">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="space-y-1.5 text-xs leading-relaxed">
                <p><span className="text-purple-400">const</span> <span className="text-cyan-400">developer</span> = {"{"}</p>
                <p className="pl-4"><span className="text-green-400">name</span>: <span className="text-yellow-300">"Sakshi Nagre"</span>,</p>
                <p className="pl-4"><span className="text-green-400">role</span>: <span className="text-yellow-300">"Full Stack Dev"</span>,</p>
                <p className="pl-4"><span className="text-green-400">stack</span>: [</p>
                <p className="pl-8"><span className="text-yellow-300">"Spring Boot"</span>, <span className="text-yellow-300">"React"</span>,</p>
                <p className="pl-8"><span className="text-yellow-300">"Node.js"</span>, <span className="text-yellow-300">"Java"</span></p>
                <p className="pl-4">],</p>
                <p className="pl-4"><span className="text-green-400">aiProjects</span>: <span className="text-cyan-400">true</span>,</p>
                <p className="pl-4"><span className="text-green-400">available</span>: <span className="text-cyan-400">true</span></p>
                <p>{"}"}</p>
                <p className="mt-3 text-slate-500">{"// Open to work 🚀"}</p>
              </div>
            </div>

            <motion.div
              className="absolute -top-4 -right-4 bg-slate-800 border border-cyan-500/30 rounded-xl px-3 py-2 text-xs font-medium text-cyan-400 shadow-lg"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              ⚡ Spring Boot 3
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 bg-slate-800 border border-purple-500/30 rounded-xl px-3 py-2 text-xs font-medium text-purple-400 shadow-lg"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              🤖 Groq AI
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero