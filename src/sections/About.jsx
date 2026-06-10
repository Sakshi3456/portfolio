import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

const stats = [
  { number: 3, suffix: "", label: "Projects Built", color: "text-cyan-400", bg: "bg-cyan-500", glow: "shadow-cyan-500/20" },
  { number: 15, suffix: "+", label: "Technologies", color: "text-purple-400", bg: "bg-purple-500", glow: "shadow-purple-500/20" },
  { number: 7.62, suffix: "", label: "CGPA", color: "text-green-400", bg: "bg-green-500", glow: "shadow-green-500/20" },
  { number: 2025, suffix: "", label: "Graduate", color: "text-yellow-400", bg: "bg-yellow-500", glow: "shadow-yellow-500/20" },
]

const floatingBadges = [
  { emoji: "⚡", label: "Spring Boot", angle: 0, color: "border-cyan-500/40 text-cyan-400" },
  { emoji: "⚛️", label: "React", angle: 72, color: "border-purple-500/40 text-purple-400" },
  { emoji: "🤖", label: "Groq AI", angle: 144, color: "border-pink-500/40 text-pink-400" },
  { emoji: "🛢️", label: "PostgreSQL", angle: 216, color: "border-green-500/40 text-green-400" },
  { emoji: "☕", label: "Java", angle: 288, color: "border-yellow-500/40 text-yellow-400" },
]

const CountUp = ({ target, suffix, duration = 2 }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const isDecimal = target % 1 !== 0
    const steps = 60
    const increment = target / steps
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(isDecimal ? parseFloat(start.toFixed(2)) : Math.floor(start))
      }
    }, (duration * 1000) / steps)
    return () => clearInterval(timer)
  }, [isInView, target, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

const About = () => {
  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">

      {/* Background particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        />
      ))}

      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-cyan-400 font-medium mb-2 tracking-widest text-sm uppercase">Get to know me</p>
          <div>
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white"
              style={{ fontFamily: 'Poppins, sans-serif' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            >
              About Me
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

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left — Avatar with orbiting badges */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
          >
            <div className="relative w-72 h-72">

              {/* Outer rotating ring */}
              <motion.div
                className="absolute inset-0 rounded-full border border-dashed border-cyan-500/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              {/* Middle ring */}
              <motion.div
                className="absolute inset-6 rounded-full border border-dashed border-purple-500/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />

              {/* Glow circle */}
              <div className="absolute inset-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 blur-xl" />

              {/* Avatar circle */}
              <motion.div
                className="absolute inset-12 rounded-full bg-gradient-to-br from-cyan-500/30 to-purple-600/30 border-2 border-cyan-500/50 flex items-center justify-center"
                animate={{ boxShadow: ["0 0 20px rgba(6,182,212,0.3)", "0 0 40px rgba(6,182,212,0.6)", "0 0 20px rgba(6,182,212,0.3)"] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-5xl">👩‍💻</span>
              </motion.div>

              {/* Floating badges around the circle */}
              {floatingBadges.map((badge, i) => {
                const rad = (badge.angle * Math.PI) / 180
                const x = Math.cos(rad) * 130
                const y = Math.sin(rad) * 130
                return (
                  <motion.div
                    key={i}
                    className={`absolute flex items-center gap-1 px-2 py-1 rounded-full border bg-slate-900/90 text-xs font-medium ${badge.color}`}
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: "translate(-50%, -50%)",
                    }}
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 2.5 + i * 0.3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.4,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.15 }}
                  >
                    <span>{badge.emoji}</span>
                    <span className="hidden sm:inline">{badge.label}</span>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Right — Text + Stats */}
          <div className="flex flex-col gap-5">

            {[
              "I'm a Full Stack Developer from Pune with a passion for building web applications that solve real problems. I graduated in Computer Science from Sandip Institute, Nashik in 2025.",
              "I work across the full stack — designing secure REST APIs with Spring Boot and Spring Security, integrating AI with Groq's LLaMA 3.1, and building clean, responsive UIs with React.",
              "I care deeply about code quality, real-world architecture patterns, and shipping products that actually work — mirroring patterns used by companies like Razorpay and Zoho.",
            ].map((text, i) => (
              <motion.div key={i}>
                <motion.p
                  className="text-slate-400 text-base leading-relaxed"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                >
                  {text}
                </motion.p>
                {i < 2 && (
                  <motion.div
                    className="h-px bg-gradient-to-r from-slate-700 to-transparent mt-5"
                    initial={{ scaleX: 0, originX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.15 + 0.3 }}
                  />
                )}
              </motion.div>
            ))}

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 mt-2">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className={`relative bg-slate-800/60 rounded-xl p-4 border border-slate-700 hover:border-slate-600 transition-all duration-300 overflow-hidden group hover:shadow-lg ${stat.glow}`}
                  initial={{ opacity: 0, scale: 0.85, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1, type: "spring" }}
                  whileHover={{ y: -4, scale: 1.03 }}
                >
                  <h3 className={`text-3xl font-bold mb-0.5 ${stat.color}`}
                    style={{ fontFamily: 'Poppins, sans-serif' }}>
                    <CountUp target={stat.number} suffix={stat.suffix} />
                  </h3>
                  <p className="text-slate-400 text-xs">{stat.label}</p>
                  <motion.div
                    className={`absolute bottom-0 left-0 h-0.5 ${stat.bg} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
                  />
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About